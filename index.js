/// <reference path="typings/tsd.d.ts" />
var plugins = {
    path: require("path"),
    ffmpeg: require("fluent-ffmpeg"),
    Q: require("q")
};
var playcontrolConvert = {
    from: function (pathArgFrom) {
        var done = plugins.Q.defer();
        pathArgFrom = plugins.path.resolve(pathArgFrom);
        var inputFile;
        var outputFile;
        var result = {};
        return {
            to: function (pathArgTo, options) {
                if (options === void 0) { options = "undefined"; }
                pathArgTo = plugins.path.resolve(pathArgTo);
                var convertCall = plugins.ffmpeg(pathArgFrom); //load file
                convertCall.output(pathArgTo);
                convertCall.on('progress', function (progress) {
                    console.log('Processing: ' + progress.percent + '% done');
                });
                convertCall.on('end', function () {
                    done.resolve();
                });
                convertCall.run();
                return done.promise;
            }
        };
    }
};
module.exports = playcontrolConvert;
