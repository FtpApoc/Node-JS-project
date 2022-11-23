const path = require('path')
<<<<<<< HEAD
=======
const getColours = require('get-image-colors')
//const urlPixels = require("getpixels")(url[,type],cb(err, pixels))

const options = {
  type: 'image/png'
}

console.log(__dirname)

getColours(path.join(__dirname, "JPEGtest.jpg"),options).then(colors => {
  console.log(colors.map(colour => colour.hex()));
  });
>>>>>>> 5b94a8c00f7ff67f8fdd4d555c6a4b6cb73d0823
