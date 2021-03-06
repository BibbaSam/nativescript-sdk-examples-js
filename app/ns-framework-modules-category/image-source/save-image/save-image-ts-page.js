"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var image_source_1 = require("tns-core-modules/image-source");
var file_system_1 = require("tns-core-modules/file-system");
var image_asset_1 = require("tns-core-modules/image-asset");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("fps", "0");
    var folder = file_system_1.knownFolders.currentApp();
    var filePath = file_system_1.path.join(folder.path, "images/logo.png");
    vm.set("imagePath", filePath);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function makeCopyFromFile(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var folder = file_system_1.knownFolders.currentApp();
    var imagePath = file_system_1.path.join(folder.path, "images/logo.png");
    var img = image_source_1.fromFile(imagePath);
    var folderDest = file_system_1.knownFolders.documents();
    var pathDest = file_system_1.path.join(folderDest.path, "test.png");
    var saved = img.saveToFile(pathDest, "png");
    if (saved) {
        console.log("Image saved successfully!");
        vm.set("imageCopyPath", pathDest);
    }
}
exports.makeCopyFromFile = makeCopyFromFile;
function makeCopyFromAsset(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var folder = file_system_1.knownFolders.currentApp();
    var pathImage = file_system_1.path.join(folder.path, "images/logo.png");
    var imageAsset = new image_asset_1.ImageAsset(pathImage);
    imageAsset.options = {
        width: 100,
        height: 100,
        keepAspectRatio: true
    };
    var source = new image_source_1.ImageSource();
    source.fromAsset(imageAsset)
        .then(function (imageSource) {
        var folderPath = file_system_1.knownFolders.documents().path;
        var fileName = "test.png";
        var filePath = file_system_1.path.join(folderPath, fileName);
        var saved = imageSource.saveToFile(filePath, "png");
        if (saved) {
            console.log("Image saved successfully!");
            vm.set("imageAssetCopyPath", file_system_1.path);
        }
    })
        .catch(function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
exports.makeCopyFromAsset = makeCopyFromAsset;
function makeBase64String(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var folder = file_system_1.knownFolders.currentApp();
    var filePath = file_system_1.path.join(folder.path, "images/logo.png");
    var img = image_source_1.fromFile(filePath);
    var base64String = img.toBase64String("png");
    vm.set("base64String", base64String);
}
exports.makeBase64String = makeBase64String;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1pbWFnZS10cy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2F2ZS1pbWFnZS10cy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELDhEQUFzRTtBQUN0RSw0REFBMEU7QUFDMUUsNERBQTBEO0FBRzFELHdCQUErQixJQUFJO0lBQy9CLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBTSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkIsSUFBTSxNQUFNLEdBQUcsMEJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6QyxJQUFNLFFBQVEsR0FBRyxrQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDM0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQVJELHdDQVFDO0FBR0QsMEJBQWlDLElBQUk7SUFDakMsSUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUUvQixJQUFNLE1BQU0sR0FBbUIsMEJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6RCxJQUFNLFNBQVMsR0FBRyxrQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFNUQsSUFBTSxHQUFHLEdBQTZCLHVCQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUQsSUFBTSxVQUFVLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QyxJQUFN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bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21GaWxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XG5pbXBvcnQgeyBwYXRoLCBrbm93bkZvbGRlcnMsIEZvbGRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXRcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB2bS5zZXQoXCJmcHNcIiwgXCIwXCIpO1xuICAgIGNvbnN0IGZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oZm9sZGVyLnBhdGgsIFwiaW1hZ2VzL2xvZ28ucG5nXCIpO1xuICAgIHZtLnNldChcImltYWdlUGF0aFwiLCBmaWxlUGF0aCk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29weUZyb21GaWxlKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG5cbiAgICBjb25zdCBmb2xkZXI6IEZvbGRlciA9IDxGb2xkZXI+a25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBjb25zdCBpbWFnZVBhdGggPSBwYXRoLmpvaW4oZm9sZGVyLnBhdGgsIFwiaW1hZ2VzL2xvZ28ucG5nXCIpO1xuICAgIC8vID4+IGltYWdlLXNvdXJjZS1zYXZlLWZyb20tZmlsZS10c1xuICAgIGNvbnN0IGltZzogSW1hZ2VTb3VyY2UgPSA8SW1hZ2VTb3VyY2U+ZnJvbUZpbGUoaW1hZ2VQYXRoKTtcbiAgICBjb25zdCBmb2xkZXJEZXN0ID0ga25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgIGNvbnN0IHBhdGhEZXN0ID0gcGF0aC5qb2luKGZvbGRlckRlc3QucGF0aCwgXCJ0ZXN0LnBuZ1wiKTtcbiAgICBjb25zdCBzYXZlZDogYm9vbGVhbiA9IGltZy5zYXZlVG9GaWxlKHBhdGhEZXN0LCBcInBuZ1wiKTtcbiAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbWFnZSBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgdm0uc2V0KFwiaW1hZ2VDb3B5UGF0aFwiLCBwYXRoRGVzdCk7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgIH1cbiAgICAvLyA8PCBpbWFnZS1zb3VyY2Utc2F2ZS1mcm9tLWZpbGUtdHNcblxufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb3B5RnJvbUFzc2V0KGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgY29uc3QgZm9sZGVyOiBGb2xkZXIgPSA8Rm9sZGVyPmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG4gICAgY29uc3QgcGF0aEltYWdlID0gcGF0aC5qb2luKGZvbGRlci5wYXRoLCBcImltYWdlcy9sb2dvLnBuZ1wiKTtcbiAgICBjb25zdCBpbWFnZUFzc2V0ID0gbmV3IEltYWdlQXNzZXQocGF0aEltYWdlKTtcbiAgICBpbWFnZUFzc2V0Lm9wdGlvbnMgPSB7XG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICBrZWVwQXNwZWN0UmF0aW86IHRydWVcbiAgICB9O1xuICAgIC8vID4+IGltYWdlLXNvdXJjZS1zYXZlLWZyb20tYXNzZXQtdHNcbiAgICBjb25zdCBzb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcbiAgICBzb3VyY2UuZnJvbUFzc2V0KGltYWdlQXNzZXQpXG4gICAgICAgIC50aGVuKChpbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlclBhdGg6IHN0cmluZyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKS5wYXRoO1xuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBcInRlc3QucG5nXCI7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihmb2xkZXJQYXRoLCBmaWxlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzYXZlZDogYm9vbGVhbiA9IGltYWdlU291cmNlLnNhdmVUb0ZpbGUoZmlsZVBhdGgsIFwicG5nXCIpO1xuICAgICAgICAgICAgaWYgKHNhdmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbWFnZSBzYXZlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgICAgICAgICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICAgICAgICAgIHZtLnNldChcImltYWdlQXNzZXRDb3B5UGF0aFwiLCBwYXRoKTtcbiAgICAgICAgICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIDw8IGltYWdlLXNvdXJjZS1zYXZlLWZyb20tYXNzZXQtdHNcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQmFzZTY0U3RyaW5nKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgLy8gPj4gaW1hZ2Utc291cmNlLWNyZWF0ZS1iYXNlNjQtdHNcbiAgICBjb25zdCBmb2xkZXI6IEZvbGRlciA9IDxGb2xkZXI+a25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gcGF0aC5qb2luKGZvbGRlci5wYXRoLCBcImltYWdlcy9sb2dvLnBuZ1wiKTtcbiAgICBjb25zdCBpbWc6IEltYWdlU291cmNlID0gPEltYWdlU291cmNlPmZyb21GaWxlKGZpbGVQYXRoKTtcbiAgICBjb25zdCBiYXNlNjRTdHJpbmcgPSBpbWcudG9CYXNlNjRTdHJpbmcoXCJwbmdcIik7XG4gICAgLy8gPDwgaW1hZ2Utc291cmNlLWNyZWF0ZS1iYXNlNjQtdHNcbiAgICB2bS5zZXQoXCJiYXNlNjRTdHJpbmdcIiwgYmFzZTY0U3RyaW5nKTtcbn1cbiJdfQ==