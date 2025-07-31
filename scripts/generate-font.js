import { generateFonts } from 'fantasticon';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildFont(name, inputDir) {
  const outputDir = path.resolve('./build/' + name);
  fs.mkdirSync(outputDir, { recursive: true });

  const cssTemplate = path.resolve(__dirname, 'css-template.hbs');

  await generateFonts({
    name: `fontag-${name}`,
    inputDir,
    outputDir,
    prefix: `fa-${name}`,
    normalize: true,
    descent: 0,
    templates: {
      css: cssTemplate
    }
  });

  console.log(`Font ${name} built successfully!`);
}

await buildFont('solid', path.resolve('./icons/solid'));
await buildFont('outline', path.resolve('./icons/outline'));
