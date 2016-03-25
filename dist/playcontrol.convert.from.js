"use strict";
/// <reference path="typings/main.d.ts" />
var plugins = require("./playcontrol.convert.plugins");
/**
 *
 * @param pathArgFrom
 * @returns {{to: (function(string, string=): *)}}
 */
var from = function (pathArgFrom) {
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
};
module.exports = from;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXljb250cm9sLmNvbnZlcnQuZnJvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDO0FBQzFDLElBQU8sT0FBTyxXQUFXLCtCQUErQixDQUFDLENBQUM7QUFFMUQ7Ozs7R0FJRztBQUNILElBQUksSUFBSSxHQUFHLFVBQVMsV0FBa0I7SUFDbEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsSUFBSSxTQUFnQixDQUFDO0lBQ3JCLElBQUksVUFBaUIsQ0FBQztJQUN0QixJQUFJLE1BQU0sR0FBTyxFQUFFLENBQUM7SUFDcEIsTUFBTSxDQUFDO1FBQ0gsRUFBRSxFQUFFLFVBQVMsU0FBZ0IsRUFBQyxPQUFxQjtZQUFyQix1QkFBcUIsR0FBckIscUJBQXFCO1lBQy9DLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVztZQUMxRCxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlCLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVMsUUFBUTtnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUMsQ0FBQztZQUNILFdBQVcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7WUFDSCxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztLQUNKLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFRixpQkFBUyxJQUFJLENBQUMiLCJmaWxlIjoicGxheWNvbnRyb2wuY29udmVydC5mcm9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vcGxheWNvbnRyb2wuY29udmVydC5wbHVnaW5zXCIpO1xuaW1wb3J0IFBsYXlDb250cm9sQ29udmVydFN0YXR1cyA9IHJlcXVpcmUoXCIuL3BsYXljb250cm9sLmNvbnZlcnQuc3RhdHVzXCIpO1xuLyoqXG4gKlxuICogQHBhcmFtIHBhdGhBcmdGcm9tXG4gKiBAcmV0dXJucyB7e3RvOiAoZnVuY3Rpb24oc3RyaW5nLCBzdHJpbmc9KTogKil9fVxuICovXG5sZXQgZnJvbSA9IGZ1bmN0aW9uKHBhdGhBcmdGcm9tOnN0cmluZyl7XG4gICAgdmFyIGRvbmUgPSBwbHVnaW5zLlEuZGVmZXIoKTtcbiAgICBwYXRoQXJnRnJvbSA9IHBsdWdpbnMucGF0aC5yZXNvbHZlKHBhdGhBcmdGcm9tKTtcbiAgICB2YXIgaW5wdXRGaWxlOnN0cmluZztcbiAgICB2YXIgb3V0cHV0RmlsZTpzdHJpbmc7XG4gICAgdmFyIHJlc3VsdDphbnkgPSB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0bzogZnVuY3Rpb24ocGF0aEFyZ1RvOnN0cmluZyxvcHRpb25zID0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcGF0aEFyZ1RvID0gcGx1Z2lucy5wYXRoLnJlc29sdmUocGF0aEFyZ1RvKTtcbiAgICAgICAgICAgIHZhciBjb252ZXJ0Q2FsbCA9IHBsdWdpbnMuZmZtcGVnKHBhdGhBcmdGcm9tKTsgLy9sb2FkIGZpbGVcbiAgICAgICAgICAgIGNvbnZlcnRDYWxsLm91dHB1dChwYXRoQXJnVG8pO1xuICAgICAgICAgICAgY29udmVydENhbGwub24oJ3Byb2dyZXNzJywgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZzogJyArIHByb2dyZXNzLnBlcmNlbnQgKyAnJSBkb25lJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnZlcnRDYWxsLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBkb25lLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udmVydENhbGwucnVuKCk7XG4gICAgICAgICAgICByZXR1cm4gZG9uZS5wcm9taXNlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0ID0gZnJvbTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
