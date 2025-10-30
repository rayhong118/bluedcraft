import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { globby } from 'globby';
import path from 'path';
import fs from 'fs/promises';

async function convertPublicImages() {
  const files = await globby('dist/imageAssets/**/*.{png,jpg,jpeg}');

  for (const file of files) {
    const buffer = await fs.readFile(file);

    const webpBuffer = await imagemin.buffer(buffer, {
      plugins: [imageminWebp()]
    });

    const relativePath = path.relative('dist/imageAssets', file);
    const webpPath = path.join('dist/imageAssets', relativePath).replace(/\.(png|jpg|jpeg)$/i, '.webp');
    await fs.mkdir(path.dirname(webpPath), { recursive: true });
    await fs.writeFile(webpPath, webpBuffer);

    console.log('Converted:', webpPath);
  }
}

convertPublicImages();