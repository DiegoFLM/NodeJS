const sharp = require('sharp');

sharp('plt-bar.png')
    .resize(80)
    .grayscale()
    .toFile('plt-bar-small.png');

