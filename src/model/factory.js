const { photoFile, videoFile, songFile, textFile } =  require('./constructors');
const { FileFacade } =  require('./facade');

// Files extensions to types
const photoTypes = ['jpg', 'png'];
const videoTypes = ['mp4', 'avi'];
const songTypes = ['mp3'];
const textTypes = ['pdf', 'docx'];

// New file factory & singleton
const FileFactory = (function () {
    const files = {};
    let FileInstance;

    // Create new instance of File facade
    function createFileInstance() {
        return new FileFacade();
    }

    return {
        createFile: function (type, params = {}) {
            const filesCount = this.getCount();

            if (!FileInstance) {
                FileInstance = createFileInstance();
            }

            switch (true) {
                case photoTypes.includes(type):
                    this.FileClass = photoFile;
                    break;
                case videoTypes.includes(type):
                    this.FileClass = videoFile;
                    break;
                case songTypes.includes(type):
                    this.FileClass = songFile;
                    break;
                case textTypes.includes(type):
                    this.FileClass = textFile;
                    break;
            }

            files[filesCount] = FileInstance.init(this.FileClass, params);
        },
        getAll: function () {
            return files;
        },
        get: function (index) {
            const File = files[index];
            const FileCopied = { ...File };

            File.fire(File); // observer handlers fired
            delete FileCopied.watched; // unnecessary property for single file return

            return FileCopied;
        },
        getCount: function () {
            return Object.keys(files).length;
        },
        getWatchedCount: function () {
            let watchedFiles = 0;
            const values = Object.values(files);

            values.forEach(file => {
                if (file.watched === true) watchedFiles++;
            });

            return watchedFiles;
        },
    }
})
();

exports.FileFactory = FileFactory;
