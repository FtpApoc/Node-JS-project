const path = require('path')
const getColours = require('get-image-colors')
//const urlPixels = require("getpixels")(url[,type],cb(err, pixels))

const options = {
  type: 'image/png'
}

console.log(__dirname)

getColours(path.join(__dirname, "JPEGtest.jpg"),options).then(colors => {
  console.log(colors.map(colour => colour.hex()));
  });
