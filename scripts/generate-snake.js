const snake = require('github-contribution-grid-snake');
const fs = require('fs');
const path = require('path');

const username = process.env.GH_USERNAME || 'REDX-CORPORATION';
const color = process.env.SNAKE_COLOR || '#FF0000';
const outdir = path.join(process.cwd(), '..', 'output');

(async () => {
  try {
    const svg = await snake(username, { color });
    if (!fs.existsSync(outdir)) fs.mkdirSync(outdir, { recursive: true });
    fs.writeFileSync(path.join(outdir, 'github-contribution-grid-snake.svg'), svg);
    console.log('Saved: output/github-contribution-grid-snake.svg');
  } catch (err) {
    console.error('Failed to generate snake:', err);
    process.exit(1);
  }
})();
