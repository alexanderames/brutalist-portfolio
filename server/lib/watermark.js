import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const watermarkText = process.env.WATERMARK_TEXT || 'Media Share';

/**
 * Add a visible text watermark to an image buffer and return the result buffer.
 * @param {Buffer} inputBuffer
 * @param {string} [text]
 * @returns {Promise<Buffer>}
 */
export async function watermarkImage(inputBuffer, text = watermarkText) {
  const meta = await sharp(inputBuffer).metadata();
  const width = meta.width || 800;
  const height = meta.height || 600;
  const fontSize = Math.max(14, Math.min(48, Math.floor(width / 20)));
  const padding = Math.floor(fontSize * 0.5);

  const svg = `
    <svg width="${width}" height="${height}">
      <style>
        .wm { fill: rgba(255,255,255,0.7); font-family: sans-serif; font-size: ${fontSize}px; font-weight: bold; }
        .bg { fill: rgba(0,0,0,0.4); }
      </style>
      <rect class="bg" x="${width - 200}" y="${height - fontSize - padding * 2}" width="190" height="${fontSize + padding * 2}" rx="4"/>
      <text class="wm" x="${width - 105}" y="${height - padding - 4}" text-anchor="middle">${escapeXml(text)}</text>
    </svg>
  `;

  return sharp(inputBuffer)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .toBuffer();
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
