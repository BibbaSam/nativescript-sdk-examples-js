"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var http_1 = require("tns-core-modules/http");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("user", "");
    vm.set("pass", "");
    vm.set("message", "");
    vm.set("isItemVisible", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function makePostRequest(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    http_1.request({
        url: "https://httpbin.org/post",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({
            username: vm.get("user"),
            password: vm.get("pass")
        })
    }).then(function (response) {
        var result = response.content.toJSON();
        vm.set("isItemVisible", true);
        vm.set("message", result.json.username);
    }, function (e) {
        console.log("Error: ");
        console.log(e);
    });
}
exports.makePostRequest = makePostRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC10cy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC10cy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBRzlELDhDQUF1RjtBQUV2Rix3QkFBK0IsSUFBSTtJQUMvQixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBRTVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFURCx3Q0FTQztBQUVELHlCQUFnQyxJQUFJO0lBQ2hDLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFFL0IsY0FBTyxDQUFDO1FBQ0osR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtRQUMvQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQixRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDeEIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQzNCLENBQUM7S0FDTCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtRQUNiLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFekMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUU1QyxDQUFDLEVBQUUsVUFBQyxDQUFDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5CLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQztBQXpCRCwwQ0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuLy8gPj4gaW1wb3J0LWh0dHBcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG4vLyA8PCBpbXBvcnQtaHR0cFxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuXG4gICAgdm0uc2V0KFwidXNlclwiLCBcIlwiKTtcbiAgICB2bS5zZXQoXCJwYXNzXCIsIFwiXCIpO1xuICAgIHZtLnNldChcIm1lc3NhZ2VcIiwgXCJcIik7XG4gICAgdm0uc2V0KFwiaXNJdGVtVmlzaWJsZVwiLCBmYWxzZSk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBvc3RSZXF1ZXN0KGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgLy8gPj4gaHR0cC1wb3N0XG4gICAgcmVxdWVzdCh7XG4gICAgICAgIHVybDogXCJodHRwczovL2h0dHBiaW4ub3JnL3Bvc3RcIixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB1c2VybmFtZTogdm0uZ2V0KFwidXNlclwiKSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB2bS5nZXQoXCJwYXNzXCIpXG4gICAgICAgIH0pXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIHZtLnNldChcImlzSXRlbVZpc2libGVcIiwgdHJ1ZSk7XG4gICAgICAgIHZtLnNldChcIm1lc3NhZ2VcIiwgcmVzdWx0Lmpzb24udXNlcm5hbWUpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICB9LCAoZSkgPT4ge1xuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgLy8gPDwgKGhpZGUpXG4gICAgfSk7XG4gICAgLy8gPDwgaHR0cC1wb3N0XG59XG5cbiJdfQ==