// Photo file constructor
const photoFile = function(params) {
    const { filename, size, type, pixelNumber } = params;
    this.filename = filename;
    this.size = size;
    this.type = type;
    this.pixelNumber = pixelNumber;
};

// Video file constructor
const videoFile = function(params) {
    const { filename, size, type, hd } = params;
    this.filename = filename;
    this.size = size;
    this.type = type;
    this.hd = hd;
};

// Song file constructor
const songFile = function(params) {
    const { filename, size, type, converted } = params;
    this.filename = filename;
    this.size = size;
    this.type = type;
    this.converted = converted;
};

// Text file constructor
const textFile = function(params) {
    const { filename, size, type, encrypted } = params;
    this.filename = filename;
    this.size = size;
    this.type = type;
    this.encrypted = encrypted;
};

exports.photoFile = photoFile;
exports.videoFile = videoFile
exports.songFile = songFile;
exports.textFile = textFile;
