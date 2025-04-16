import imagemin from 'imagemin';
import webp from 'imagemin-webp';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import path from 'path';

(async () => {
  try {
    const files = await imagemin(['src/assets/figma-photos/*.{jpg,jpeg,png}'], {
      destination: 'src/assets/figma-photos',
      plugins: [
        webp({ quality: 80 }),
        mozjpeg({ quality: 75 }),
        pngquant({ quality: [0.6, 0.8] }),
      ],
    });

    if (files.length === 0) {
      console.log('⚠️ No images were optimized. Check your input path or file types.');
    } else {
      console.log(`✅ Optimized ${files.length} images:`);
      files.forEach((file) => {
        console.log(`  📦 ${path.basename(file.destinationPath)}`);
      });
    }
  } catch (error) {
    console.error('❌ Error during image optimization:', error);
  }
})();
