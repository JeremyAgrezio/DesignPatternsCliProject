// File decorator to add 'watched'
const FileWithDecorator = (file) => {
    file.watched = false;
    return file;
};

exports.FileWithDecorator = FileWithDecorator;
