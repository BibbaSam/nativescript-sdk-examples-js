"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var file_system_1 = require("tns-core-modules/file-system");
var http_1 = require("tns-core-modules/http");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("getStringResultButton", "Show getString result");
    vm.set("getStringResultVisible", false);
    vm.set("getJSONResultButton", "Show getJSON result");
    vm.set("getJSONResultVisible", false);
    vm.set("getImageResultButton", "Show getImage result");
    vm.set("getImageResultVisible", false);
    vm.set("statusCodeResultButton", "Show statusCode result");
    vm.set("statusCodeResult", "");
    vm.set("statusCodeResultVisible", false);
    vm.set("responseHeadersResultButton", "Show responseHeaders result");
    vm.set("responseHeadersResultVisible", false);
    vm.set("responseContentResultButton", "Show responseContent result");
    vm.set("responseContentResultVisible", false);
    vm.set("getFileResultButton", "Show getFile result");
    vm.set("getFileResultVisible", false);
    vm.set("getFileWithPathResultButton", "Show getFileWithPath result");
    vm.set("getFileWithPathResultVisible", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onButtonTap(args) {
    var button = args.object;
    var page = args.object.page;
    var vm = page.bindingContext;
    var id = button.get("id");
    var status = vm.get(id + "ResultVisible");
    if (!status) {
        switch (id) {
            case "getString":
                getStringExample(vm);
                break;
            case "getJSON":
                getJSONExample(vm);
                break;
            case "getImage":
                getImageExample(vm);
                break;
            case "statusCode":
                getResponseStatusCodeExample(vm);
                break;
            case "responseHeaders":
                getResponseHeadersExample(vm);
                break;
            case "responseContent":
                getResponseContentExample(vm);
                break;
            case "getFile":
                getFileExample(vm);
                break;
            case "getFileWithPath":
                getFileWithPathExample(vm);
                break;
            default:
                break;
        }
    }
    switch (!status) {
        case true:
            vm.set(id + "ResultButton", "Hide " + id + " result");
            break;
        case false:
            vm.set(id + "ResultButton", "Show " + id + " result");
            break;
        default:
            break;
    }
    vm.set(id + "ResultVisible", !status);
}
exports.onButtonTap = onButtonTap;
function getStringExample(viewModel) {
    http_1.getString("https://httpbin.org/get").then(function (r) {
        viewModel.set("getStringResult", r);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getJSONExample(viewModel) {
    http_1.getJSON("https://httpbin.org/get").then(function (r) {
        viewModel.set("host", r.headers.Host);
        viewModel.set("userAgent", r.headers["User-Agent"]);
        viewModel.set("origin", r.origin);
        viewModel.set("url", r.url);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getImageExample(viewModel) {
    http_1.getImage("https://httpbin.org/image/jpeg").then(function (r) {
        viewModel.set("getImageResult", r);
        viewModel.set("imageWidth", r.width);
        viewModel.set("imageHeight", r.height);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getResponseStatusCodeExample(viewModel) {
    http_1.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then(function (response) {
        var statusCode = response.statusCode;
        viewModel.set("statusCodeResult", statusCode);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getResponseHeadersExample(viewModel) {
    console.log("getResponseHeadersExample");
    http_1.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then(function (response) {
        viewModel.set("contentType", response.headers["Content-Type"]);
        viewModel.set("date", response.headers.Date);
        viewModel.set("server", response.headers.Server);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getResponseContentExample(viewModel) {
    http_1.request({
        url: "https://httpbin.org/get",
        method: "GET"
    }).then(function (response) {
        var str = response.content.toString();
        viewModel.set("responseContentResult", str);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getFileExample(viewModel) {
    http_1.getFile("https://raw.githubusercontent.com/NativeScript/NativeScript/master/tests/app/logo.png").then(function (resultFile) {
        viewModel.set("name", resultFile.name);
        viewModel.set("extension", resultFile.extension);
        viewModel.set("path", resultFile.path);
        viewModel.set("getFileResult", resultFile.path);
        viewModel.set("getFileImageWidth", 72);
        viewModel.set("getFileImageHeight", 72);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
function getFileWithPathExample(viewModel) {
    var filePath = file_system_1.path.join(file_system_1.knownFolders.currentApp().path, "test.png");
    http_1.getFile("https://httpbin.org/image/png?testQuery=query&anotherParam=param", filePath).then(function (resultFile) {
        viewModel.set("name_get_file_with_path", resultFile.name);
        viewModel.set("extension_get_file_with_path", resultFile.extension);
        viewModel.set("path_get_file_with_path", resultFile.path);
        viewModel.set("getFileWithPathResult", resultFile.path);
        viewModel.set("getFileWithPathImageWidth", 100);
        viewModel.set("getFileWithPathHeight", 100);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXQtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtEQUE4RDtBQUM5RCw0REFBd0U7QUFFeEUsOENBQXFHO0FBSXJHLHdCQUErQixJQUFJO0lBQy9CLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBTSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3pELEVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFeEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JELEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3ZELEVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFdkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV6QyxFQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDckUsRUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU5QyxFQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLDZCQUE2QixDQUFDLENBQUM7SUFDckUs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QUFnQyxTQUFTO0lBRXJDLElBQU0sUUFBUSxHQUFXLGtCQUFJLENBQUMsSUFBSSxDQUFDLDBCQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLGNBQU8sQ0FBQyxrRUFBa0UsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFnQjtRQUd4RyxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxTQUFTLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxTQUFTLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFaEQsQ0FBQyxFQUFFLFVBQUMsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuQixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IHBhdGgsIGtub3duRm9sZGVycywgRmlsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XG5cbiAgICB2bS5zZXQoXCJnZXRTdHJpbmdSZXN1bHRCdXR0b25cIiwgXCJTaG93IGdldFN0cmluZyByZXN1bHRcIik7XG4gICAgdm0uc2V0KFwiZ2V0U3RyaW5nUmVzdWx0VmlzaWJsZVwiLCBmYWxzZSk7XG5cbiAgICB2bS5zZXQoXCJnZXRKU09OUmVzdWx0QnV0dG9uXCIsIFwiU2hvdyBnZXRKU09OIHJlc3VsdFwiKTtcbiAgICB2bS5zZXQoXCJnZXRKU09OUmVzdWx0VmlzaWJsZVwiLCBmYWxzZSk7XG5cbiAgICB2bS5zZXQoXCJnZXRJbWFnZVJlc3VsdEJ1dHRvblwiLCBcIlNob3cgZ2V0SW1hZ2UgcmVzdWx0XCIpO1xuICAgIHZtLnNldChcImdldEltYWdlUmVzdWx0VmlzaWJsZVwiLCBmYWxzZSk7XG5cbiAgICB2bS5zZXQoXCJzdGF0dXNDb2RlUmVzdWx0QnV0dG9uXCIsIFwiU2hvdyBzdGF0dXNDb2RlIHJlc3VsdFwiKTtcbiAgICB2bS5zZXQoXCJzdGF0dXNDb2RlUmVzdWx0XCIsIFwiXCIpO1xuICAgIHZtLnNldChcInN0YXR1c0NvZGVSZXN1bHRWaXNpYmxlXCIsIGZhbHNlKTtcblxuICAgIHZtLnNldChcInJlc3BvbnNlSGVhZGVyc1Jlc3VsdEJ1dHRvblwiLCBcIlNob3cgcmVzcG9uc2VIZWFkZXJzIHJlc3VsdFwiKTtcbiAgICB2bS5zZXQoXCJyZXNwb25zZUhlYWRlcnNSZXN1bHRWaXNpYmxlXCIsIGZhbHNlKTtcblxuICAgIHZtLnNldChcInJlc3BvbnNlQ29udGVudFJlc3VsdEJ1dHRvblwiLCBcIlNob3cgcmVzcG9uc2VDb250ZW50IHJlc3VsdFwiKTtcbiAgICB2bS5zZXQoXCJyZXNwb25zZUNvbnRlbnRSZXN1bHRWaXNpYmxlXCIsIGZhbHNlKTtcblxuICAgIHZtLnNldChcImdldEZpbGVSZXN1bHRCdXR0b25cIiwgXCJTaG93IGdldEZpbGUgcmVzdWx0XCIpO1xuICAgIHZtLnNldChcImdldEZpbGVSZXN1bHRWaXNpYmxlXCIsIGZhbHNlKTtcblxuICAgIHZtLnNldChcImdldEZpbGVXaXRoUGF0aFJlc3VsdEJ1dHRvblwiLCBcIlNob3cgZ2V0RmlsZVdpdGhQYXRoIHJlc3VsdFwiKTtcbiAgICB2bS5zZXQoXCJnZXRGaWxlV2l0aFBhdGhSZXN1bHRWaXNpYmxlXCIsIGZhbHNlKTtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQnV0dG9uVGFwKGFyZ3MpIHtcbiAgICBjb25zdCBidXR0b246IEJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgY29uc3Qgdm0gPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xuICAgIGNvbnN0IGlkOiBzdHJpbmcgPSBidXR0b24uZ2V0KFwiaWRcIik7XG4gICAgY29uc3Qgc3RhdHVzOiBib29sZWFuID0gdm0uZ2V0KGAke2lkfVJlc3VsdFZpc2libGVgKTtcblxuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJnZXRTdHJpbmdcIjpcbiAgICAgICAgICAgICAgICBnZXRTdHJpbmdFeGFtcGxlKHZtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJnZXRKU09OXCI6XG4gICAgICAgICAgICAgICAgZ2V0SlNPTkV4YW1wbGUodm0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdldEltYWdlXCI6XG4gICAgICAgICAgICAgICAgZ2V0SW1hZ2VFeGFtcGxlKHZtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdGF0dXNDb2RlXCI6XG4gICAgICAgICAgICAgICAgZ2V0UmVzcG9uc2VTdGF0dXNDb2RlRXhhbXBsZSh2bSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVzcG9uc2VIZWFkZXJzXCI6XG4gICAgICAgICAgICAgICAgZ2V0UmVzcG9uc2VIZWFkZXJzRXhhbXBsZSh2bSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVzcG9uc2VDb250ZW50XCI6XG4gICAgICAgICAgICAgICAgZ2V0UmVzcG9uc2VDb250ZW50RXhhbXBsZSh2bSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ2V0RmlsZVwiOlxuICAgICAgICAgICAgICAgIGdldEZpbGVFeGFtcGxlKHZtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJnZXRGaWxlV2l0aFBhdGhcIjpcbiAgICAgICAgICAgICAgICBnZXRGaWxlV2l0aFBhdGhFeGFtcGxlKHZtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoICghc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgIHZtLnNldChgJHtpZH1SZXN1bHRCdXR0b25gLCBgSGlkZSAke2lkfSByZXN1bHRgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgdm0uc2V0KGAke2lkfVJlc3VsdEJ1dHRvbmAsIGBTaG93ICR7aWR9IHJlc3VsdGApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdm0uc2V0KGAke2lkfVJlc3VsdFZpc2libGVgLCAhc3RhdHVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRXhhbXBsZSh2aWV3TW9kZWwpIHtcbiAgICAvLyA+PiBnZXQtc3RyaW5nLWNvZGUtdHNcbiAgICBnZXRTdHJpbmcoXCJodHRwczovL2h0dHBiaW4ub3JnL2dldFwiKS50aGVuKChyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdmlld01vZGVsLnNldChcImdldFN0cmluZ1Jlc3VsdFwiLCByKTtcbiAgICB9LCAoZSkgPT4ge1xuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgLy8gPDwgKGhpZGUpXG4gICAgfSk7XG4gICAgLy8gPDwgZ2V0LXN0cmluZy1jb2RlLXRzXG59XG5mdW5jdGlvbiBnZXRKU09ORXhhbXBsZSh2aWV3TW9kZWwpIHtcbiAgICAvLyA+PiBnZXQtanNvbi1jb2RlLXRzXG4gICAgZ2V0SlNPTihcImh0dHBzOi8vaHR0cGJpbi5vcmcvZ2V0XCIpLnRoZW4oKHI6IGFueSkgPT4ge1xuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgdmlld01vZGVsLnNldChcImhvc3RcIiwgci5oZWFkZXJzLkhvc3QpO1xuICAgICAgICB2aWV3TW9kZWwuc2V0KFwidXNlckFnZW50XCIsIHIuaGVhZGVyc1tcIlVzZXItQWdlbnRcIl0pO1xuICAgICAgICB2aWV3TW9kZWwuc2V0KFwib3JpZ2luXCIsIHIub3JpZ2luKTtcbiAgICAgICAgdmlld01vZGVsLnNldChcInVybFwiLCByLnVybCk7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgIH0sIChlKSA9PiB7XG4gICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICB9KTtcbiAgICAvLyA8PCBnZXQtanNvbi1jb2RlLXRzXG59XG5mdW5jdGlvbiBnZXRJbWFnZUV4YW1wbGUodmlld01vZGVsKSB7XG4gICAgLy8gPj4gZ2V0LWltYWdlLWNvZGUtdHNcbiAgICBnZXRJbWFnZShcImh0dHBzOi8vaHR0cGJpbi5vcmcvaW1hZ2UvanBlZ1wiKS50aGVuKChyOiBJbWFnZVNvdXJjZSkgPT4ge1xuICAgICAgICAvLyBnZXRJbWFnZSBtZXRob2QgcmV0dXJucyBJbWFnZVNvdXJjZSBvYmplY3RcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJnZXRJbWFnZVJlc3VsdFwiLCByKTtcbiAgICAgICAgdmlld01vZGVsLnNldChcImltYWdlV2lkdGhcIiwgci53aWR0aCk7XG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJpbWFnZUhlaWdodFwiLCByLmhlaWdodCk7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgIH0sIChlKSA9PiB7XG4gICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICB9KTtcbiAgICAvLyA8PCBnZXQtaW1hZ2UtY29kZS10c1xufVxuXG5mdW5jdGlvbiBnZXRSZXNwb25zZVN0YXR1c0NvZGVFeGFtcGxlKHZpZXdNb2RlbCkge1xuICAgIC8vID4+IHJlcXVlc3Qtc3RhdHVzLWNvZGUtdHNcbiAgICByZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vaHR0cGJpbi5vcmcvZ2V0XCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gQXJndW1lbnQgKHJlc3BvbnNlKSBpcyBIdHRwUmVzcG9uc2VcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgICAgICB2aWV3TW9kZWwuc2V0KFwic3RhdHVzQ29kZVJlc3VsdFwiLCBzdGF0dXNDb2RlKTtcbiAgICAgICAgLy8gPDwgKGhpZGUpXG4gICAgfSwgKGUpID0+IHtcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgIH0pO1xuICAgIC8vIDw8IHJlcXVlc3Qtc3RhdHVzLWNvZGUtdHNcbn1cblxuZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXJzRXhhbXBsZSh2aWV3TW9kZWwpIHtcbiAgICBjb25zb2xlLmxvZyhcImdldFJlc3BvbnNlSGVhZGVyc0V4YW1wbGVcIik7XG4gICAgLy8gPj4gcmVxdWVzdC1yZXNwb25zZS1oZWFkZXItdHNcbiAgICByZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vaHR0cGJpbi5vcmcvZ2V0XCIsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgIH0pLnRoZW4oKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2UpID0+IHtcbiAgICAgICAgLy8gQXJndW1lbnQgKHJlc3BvbnNlKSBpcyBIdHRwUmVzcG9uc2VcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJjb250ZW50VHlwZVwiLCByZXNwb25zZS5oZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdKTtcbiAgICAgICAgdmlld01vZGVsLnNldChcImRhdGVcIiwgcmVzcG9uc2UuaGVhZGVycy5EYXRlKTtcbiAgICAgICAgdmlld01vZGVsLnNldChcInNlcnZlclwiLCByZXNwb25zZS5oZWFkZXJzLlNlcnZlcik7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgIH0sIChlKSA9PiB7XG4gICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICB9KTtcbiAgICAvLyA8PCByZXF1ZXN0LXJlc3BvbnNlLWhlYWRlci10c1xufVxuXG5mdW5jdGlvbiBnZXRSZXNwb25zZUNvbnRlbnRFeGFtcGxlKHZpZXdNb2RlbCkge1xuICAgIC8vID4+IHJlcXVlc3QtcmVzcG9uc2UtY29udGVudC10c1xuICAgIHJlcXVlc3Qoe1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9odHRwYmluLm9yZy9nZXRcIixcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiXG4gICAgfSkudGhlbigocmVzcG9uc2U6IEh0dHBSZXNwb25zZSkgPT4ge1xuICAgICAgICAvLyBDb250ZW50IHByb3BlcnR5IG9mIHRoZSByZXNwb25zZSBpcyBIdHRwQ29udGVudFxuICAgICAgICAvLyBUaGUgdG9TdHJpbmcgbWV0aG9kIGFsbG93cyB5b3UgdG8gZ2V0IHRoZSByZXNwb25zZSBib2R5IGFzIHN0cmluZy5cbiAgICAgICAgY29uc3Qgc3RyID0gcmVzcG9uc2UuY29udGVudC50b1N0cmluZygpO1xuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgdmlld01vZGVsLnNldChcInJlc3BvbnNlQ29udGVudFJlc3VsdFwiLCBzdHIpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICAgICAgLy8gVGhlIHRvSlNPTiBtZXRob2QgYWxsb3dzIHlvdSB0byBwYXJzZSB0aGUgcmVjZWl2ZWQgY29udGVudCB0byBKU09OIG9iamVjdFxuICAgICAgICAvLyB2YXIgb2JqID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgLy8gVGhlIHRvSW1hZ2UgbWV0aG9kIGFsbG93cyB5b3UgdG8gZ2V0IHRoZSByZXNwb25zZSBib2R5IGFzIEltYWdlU291cmNlLlxuICAgICAgICAvLyB2YXIgaW1nID0gcmVzcG9uc2UuY29udGVudC50b0ltYWdlKCk7XG4gICAgfSwgKGUpID0+IHtcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgIH0pO1xuICAgIC8vIDw8IHJlcXVlc3QtcmVzcG9uc2UtY29udGVudC10c1xufVxuXG5mdW5jdGlvbiBnZXRGaWxlRXhhbXBsZSh2aWV3TW9kZWwpIHtcbiAgICAvLyA+PiBnZXQtZmlsZS1jb2RlLXRzXG4gICAgZ2V0RmlsZShcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9OYXRpdmVTY3JpcHQvTmF0aXZlU2NyaXB0L21hc3Rlci90ZXN0cy9hcHAvbG9nby5wbmdcIikudGhlbigocmVzdWx0RmlsZSkgPT4ge1xuICAgICAgICAvLyBUaGUgcmV0dXJuZWQgcmVzdWx0IHdpbGwgYmUgRmlsZSBvYmplY3RcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJuYW1lXCIsIHJlc3VsdEZpbGUubmFtZSk7XG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJleHRlbnNpb25cIiwgcmVzdWx0RmlsZS5leHRlbnNpb24pO1xuICAgICAgICB2aWV3TW9kZWwuc2V0KFwicGF0aFwiLCByZXN1bHRGaWxlLnBhdGgpO1xuICAgICAgICB2aWV3TW9kZWwuc2V0KFwiZ2V0RmlsZVJlc3VsdFwiLCByZXN1bHRGaWxlLnBhdGgpO1xuICAgICAgICB2aWV3TW9kZWwuc2V0KFwiZ2V0RmlsZUltYWdlV2lkdGhcIiwgNzIpO1xuICAgICAgICB2aWV3TW9kZWwuc2V0KFwiZ2V0RmlsZUltYWdlSGVpZ2h0XCIsIDcyKTtcbiAgICAgICAgLy8gPDwgKGhpZGUpXG4gICAgfSwgKGUpID0+IHtcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgIH0pO1xuICAgIC8vIDw8IGdldC1maWxlLWNvZGUtdHNcbn1cblxuZnVuY3Rpb24gZ2V0RmlsZVdpdGhQYXRoRXhhbXBsZSh2aWV3TW9kZWwpIHtcbiAgICAvLyA+PiBnZXQtZmlsZS1jb2RlLXdpdGgtcGF0aC10c1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBwYXRoLmpvaW4oa25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5wYXRoLCBcInRlc3QucG5nXCIpO1xuICAgIGdldEZpbGUoXCJodHRwczovL2h0dHBiaW4ub3JnL2ltYWdlL3BuZz90ZXN0UXVlcnk9cXVlcnkmYW5vdGhlclBhcmFtPXBhcmFtXCIsIGZpbGVQYXRoKS50aGVuKChyZXN1bHRGaWxlOiBGaWxlKSA9PiB7XG4gICAgICAgIC8vIFRoZSByZXR1cm5lZCByZXN1bHQgd2lsbCBiZSBGaWxlIG9iamVjdFxuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgdmlld01vZGVsLnNldChcIm5hbWVfZ2V0X2ZpbGVfd2l0aF9wYXRoXCIsIHJlc3VsdEZpbGUubmFtZSk7XG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJleHRlbnNpb25fZ2V0X2ZpbGVfd2l0aF9wYXRoXCIsIHJlc3VsdEZpbGUuZXh0ZW5zaW9uKTtcbiAgICAgICAgdmlld01vZGVsLnNldChcInBhdGhfZ2V0X2ZpbGVfd2l0aF9wYXRoXCIsIHJlc3VsdEZpbGUucGF0aCk7XG4gICAgICAgIHZpZXdNb2RlbC5zZXQoXCJnZXRGaWxlV2l0aFBhdGhSZXN1bHRcIiwgcmVzdWx0RmlsZS5wYXRoKTtcbiAgICAgICAgdmlld01vZGVsLnNldChcImdldEZpbGVXaXRoUGF0aEltYWdlV2lkdGhcIiwgMTAwKTtcbiAgICAgICAgdmlld01vZGVsLnNldChcImdldEZpbGVXaXRoUGF0aEhlaWdodFwiLCAxMDApO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICB9LCAoZSkgPT4ge1xuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgLy8gPDwgKGhpZGUpXG4gICAgfSk7XG4gICAgLy8gPDwgZ2V0LWZpbGUtY29kZS13aXRoLXBhdGgtdHNcbn1cbiJdfQ==