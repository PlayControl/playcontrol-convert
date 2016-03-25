/// <reference path="typings/main.d.ts" />
import plugins = require("./playcontrol.convert.plugins");
import PlayControlConvertStatus = require("./playcontrol.convert.status");
/**
 *
 * @param pathArgFrom
 * @returns {{to: (function(string, string=): *)}}
 */
let from = function(pathArgFrom:string){
    var done = plugins.Q.defer();
    pathArgFrom = plugins.path.resolve(pathArgFrom);
    var inputFile:string;
    var outputFile:string;
    var result:any = {};
    return {
        to: function(pathArgTo:string,options = "undefined") {
            pathArgTo = plugins.path.resolve(pathArgTo);
            var convertCall = plugins.ffmpeg(pathArgFrom); //load file
            convertCall.output(pathArgTo);
            convertCall.on('progress', function(progress) {
                console.log('Processing: ' + progress.percent + '% done');
            });
            convertCall.on('end', function() {
                done.resolve();
            });
            convertCall.run();
            return done.promise;
        }
    }
};

export = from;