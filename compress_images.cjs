const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_MB = 0.5; // We want files under 500KB preferably
const MAX_BYTES = TARGET_MB * 1024 * 1024;

const filesToCompress = [
  'client/public/assets/hero-bg.png',
  'client/src/assets/us-map.png',
];

async function compressImage(filePath) {
  const fullPath = path.resolve(__dirname, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return;
  }

  const stat = fs.statSync(fullPath);
  if (stat.size <= MAX_BYTES) {
    console.log(`Skipping ${filePath} (already ${Math.round(stat.size / 1024)}KB)`);
    return;
  }

  const ext = path.extname(fullPath).toLowerCase();
  const dir = path.dirname(fullPath);
  const name = path.basename(fullPath, ext);
  
  // We'll replace the file directly because the user wants "exact fixed code (after)" 
  // and we don't want to change 50 component references.
  // We'll format it as an optimized WEBP, but keep the original extension so imports don't break.
  // Actually, keeping .png extension but making it webp might break some strict servers.
  // Best to just optimize it natively as png/jpg.
  
  const tempPath = path.join(dir, `${name}_temp${ext}`);
  
  try {
    console.log(`Compressing ${filePath} (${(stat.size / 1024 / 1024).toFixed(2)}MB)...`);
    
    if (ext === '.png') {
      await sharp(fullPath)
        .png({ compressionLevel: 9, quality: 60, effort: 10 })
        .toFile(tempPath);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(fullPath)
        .jpeg({ quality: 60, mozjpeg: true })
        .toFile(tempPath);
    } else if (ext === '.webp') {
       await sharp(fullPath)
        .webp({ quality: 60 })
        .toFile(tempPath);
    }

    const newStat = fs.statSync(tempPath);
    
    // Replace original
    fs.renameSync(tempPath, fullPath);
    
    console.log(`✅ Success: ${filePath} reduced to ${(newStat.size / 1024).toFixed(2)}KB`);
  } catch (err) {
    console.error(`❌ Error compressing ${filePath}:`, err);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

async function run() {
  for (const file of filesToCompress) {
    await compressImage(file);
  }
}

run();
