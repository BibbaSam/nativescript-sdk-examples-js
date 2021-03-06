"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("sbHint", "Search");
    vm.set("sbText", "");
    vm.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName === "sbText") {
            console.log("SearchBar text changed! New value: ", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSubmit(args) {
    var searchbar = args.object;
    console.log("Search submit result: ", searchbar.text);
    dialogs.alert("You are searching for " + searchbar.text)
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.onSubmit = onSubmit;
function onClear() {
    console.log("clear search-bar text");
    dialogs.alert("clear search-bar text")
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.onClear = onClear;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUFrRjtBQUdsRixxREFBdUQ7QUFFdkQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUVyQyxJQUFNLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQixFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVyQixFQUFFLENBQUMsRUFBRSxDQUFDLHVCQUFVLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxrQkFBc0M7UUFDekUsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUMsWUFBWSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBYkQsd0NBYUM7QUFHRCxrQkFBeUIsSUFBSTtJQUN6QixJQUFNLFNBQVMsR0FBeUIsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUF5QixTQUFTLENBQUMsSUFBTSxDQUFDO1NBQ25ELElBQUksQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztBQUNYLENBQUM7QUFQRCw0QkFPQztBQUdEO0lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7U0FDakMsSUFBSSxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQU5ELDBCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUHJvcGVydHlDaGFuZ2VEYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG4vLyA+PiBzZWFyY2gtYmFyLWJhc2ljcy1jb2RlLXRzXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICAvLyBiaW5kaW5nIFNlZ21lbnRlZEJhciBgdGV4dGAgYWJkIGBoaW50YCBwcm9wZXJ0aWVzXG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIHZtLnNldChcInNiSGludFwiLCBcIlNlYXJjaFwiKTtcbiAgICB2bS5zZXQoXCJzYlRleHRcIiwgXCJcIik7XG4gICAgLy8gaGFuZGxlIHRleHQgY2hhbmdlIGV2ZW50XG4gICAgdm0ub24oT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LCAocHJvcGVydHlDaGFuZ2VEYXRhOiBQcm9wZXJ0eUNoYW5nZURhdGEpID0+IHtcbiAgICAgICAgaWYgKHByb3BlcnR5Q2hhbmdlRGF0YS5wcm9wZXJ0eU5hbWUgPT09IFwic2JUZXh0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiwgcHJvcGVydHlDaGFuZ2VEYXRhLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cblxuLy8gSGFuZGxlIFNlYXJjaEJhciBgc3VibWl0YCBldmVudC5cbmV4cG9ydCBmdW5jdGlvbiBvblN1Ym1pdChhcmdzKSB7XG4gICAgY29uc3Qgc2VhcmNoYmFyOiBTZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoIHN1Ym1pdCByZXN1bHQ6IFwiLCBzZWFyY2hiYXIudGV4dCk7XG4gICAgZGlhbG9ncy5hbGVydChgWW91IGFyZSBzZWFyY2hpbmcgZm9yICR7c2VhcmNoYmFyLnRleHR9YClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgICAgfSk7XG59XG5cbi8vIEhhbmRsZSBTZWFyY2hCYXIgYGNsZWFyYCBldmVudC5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsZWFyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xlYXIgc2VhcmNoLWJhciB0ZXh0XCIpO1xuICAgIGRpYWxvZ3MuYWxlcnQoXCJjbGVhciBzZWFyY2gtYmFyIHRleHRcIilcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgICAgICAgfSk7XG59XG4vLyA8PCBzZWFyY2gtYmFyLWJhc2ljcy1jb2RlLXRzXG4iXX0=