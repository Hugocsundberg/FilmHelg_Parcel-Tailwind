const fs = require('fs')
const whiteSpace = /\s+(?=<)/gm
const htmlContent = fs.readFileSync('src/index.html', 'utf8')
const parsed = htmlContent.replace(whiteSpace, "");
fs.writeFileSync("dist/index.html", parsed)