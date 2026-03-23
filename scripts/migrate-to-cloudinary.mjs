/**
 * migrate-to-cloudinary.mjs
 *
 * Downloads every Figma asset URL from your src/ files and re-uploads
 * them to Cloudinary, then rewrites all URLs in-place.
 *
 * Usage:
 *   1. npm install cloudinary node-fetch   (one-time)
 *   2. Set your Cloudinary credentials below (or via env vars)
 *   3. node scripts/migrate-to-cloudinary.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";
import fetch from "node-fetch";

// ─── CONFIG — fill these in ────────────────────────────────────────────────
const CLOUD_NAME  = process.env.CLOUDINARY_CLOUD_NAME  || "dgr33gxhd";
const API_KEY     = process.env.CLOUDINARY_API_KEY     || "762824455269916";
const API_SECRET  = process.env.CLOUDINARY_API_SECRET  || "EFLS27qsJU6j7oh9_Ev06VbU5to";
const FOLDER      = "blissful-cleaning"; // folder in your Cloudinary account
// ───────────────────────────────────────────────────────────────────────────

cloudinary.config({ cloud_name: CLOUD_NAME, api_key: API_KEY, api_secret: API_SECRET });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR   = path.join(__dirname, "..", "src");
const FIGMA_RE  = /https:\/\/www\.figma\.com\/api\/mcp\/asset\/[a-f0-9-]+/g;

// ── 1. Collect all files ────────────────────────────────────────────────────
function collectFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...collectFiles(full));
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) results.push(full);
  }
  return results;
}

// ── 2. Extract unique Figma URLs ────────────────────────────────────────────
function extractUrls(files) {
  const urls = new Set();
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    for (const match of content.matchAll(FIGMA_RE)) urls.add(match[0]);
  }
  return [...urls];
}

// ── 3. Upload one URL to Cloudinary ────────────────────────────────────────
async function uploadUrl(figmaUrl) {
  // Derive a stable public_id from the UUID at the end of the URL
  const uuid = figmaUrl.split("/").pop();

  // Check if already uploaded (avoids re-uploading on re-runs)
  try {
    const existing = await cloudinary.api.resource(`${FOLDER}/${uuid}`);
    return existing.secure_url;
  } catch {
    // not found — upload it
  }

  // Download the image buffer first (Cloudinary fetch sometimes blocks Figma URLs)
  const res = await fetch(figmaUrl);
  if (!res.ok) throw new Error(`Failed to download ${figmaUrl}: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: FOLDER, public_id: uuid, overwrite: false, resource_type: "auto" },
      (err, result) => (err ? reject(err) : resolve(result.secure_url))
    );
    stream.end(buffer);
  });
}

// ── 4. Rewrite files ────────────────────────────────────────────────────────
function rewriteFiles(files, mapping) {
  let totalReplaced = 0;
  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;
    for (const [figmaUrl, cdnUrl] of Object.entries(mapping)) {
      if (content.includes(figmaUrl)) {
        content = content.replaceAll(figmaUrl, cdnUrl);
        changed = true;
        totalReplaced++;
      }
    }
    if (changed) fs.writeFileSync(file, content, "utf8");
  }
  return totalReplaced;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  if (CLOUD_NAME === "YOUR_CLOUD_NAME") {
    console.error("\n❌  Please set your Cloudinary credentials in the script (or via env vars) before running.\n");
    console.error("   CLOUDINARY_CLOUD_NAME=xxx CLOUDINARY_API_KEY=yyy CLOUDINARY_API_SECRET=zzz node scripts/migrate-to-cloudinary.mjs\n");
    process.exit(1);
  }

  const files = collectFiles(SRC_DIR);
  const figmaUrls = extractUrls(files);

  console.log(`\n🔍  Found ${figmaUrls.length} unique Figma asset URLs across ${files.length} source files.\n`);

  const mapping = {};
  let done = 0;

  for (const url of figmaUrls) {
    try {
      const cdnUrl = await uploadUrl(url);
      mapping[url] = cdnUrl;
      done++;
      console.log(`✅  [${done}/${figmaUrls.length}] ${url.split("/").pop()} → ${cdnUrl}`);
    } catch (err) {
      console.error(`❌  Failed: ${url}\n    ${err.message}`);
    }
  }

  // Save mapping for reference
  const mapPath = path.join(__dirname, "figma-to-cloudinary-map.json");
  fs.writeFileSync(mapPath, JSON.stringify(mapping, null, 2));
  console.log(`\n📄  URL mapping saved to scripts/figma-to-cloudinary-map.json`);

  const replaced = rewriteFiles(files, mapping);
  console.log(`\n🎉  Done! ${done} images uploaded, ${replaced} URL occurrences rewritten in source files.\n`);
}

main().catch((err) => { console.error(err); process.exit(1); });
