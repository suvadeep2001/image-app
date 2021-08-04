var jimp = require('jimp');

jimp.read("./img/laptop.jpg", (err, profile) => {
    if (err) {
        throw err
    }
    profile
        .resize(256, 256)
        .quality(60)
        .grayscale()
        .write("./img/modified.jpg")
})
