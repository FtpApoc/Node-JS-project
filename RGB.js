const path = require('path')
const getColours = require('get-image-colors')

getColours(path.join(__dirname, "TestColour.png")).then(colors => {

});

colors.map(colour => color.hex());
