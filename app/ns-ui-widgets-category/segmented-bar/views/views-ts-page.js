"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    vm.set("visibility1", true);
    vm.set("visibility2", false);
    vm.set("visibility3", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function sbLoaded(args) {
    var segmentedBarComponent = args.object;
    segmentedBarComponent.on("selectedIndexChange", function (sbargs) {
        var page = sbargs.object.page;
        var vm = page.bindingContext;
        var selectedIndex = sbargs.object.selectedIndex;
        vm.set("prop", selectedIndex);
        switch (selectedIndex) {
            case 0:
                vm.set("visibility1", true);
                vm.set("visibility2", false);
                vm.set("visibility3", false);
                break;
            case 1:
                vm.set("visibility1", false);
                vm.set("visibility2", true);
                vm.set("visibility3", false);
                break;
            case 2:
                vm.set("visibility1", false);
                vm.set("visibility2", false);
                vm.set("visibility3", true);
                break;
            default:
                break;
        }
    });
}
exports.sbLoaded = sbLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3MtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXdzLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFJOUQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUVyQyxJQUFNLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQixFQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFYRCx3Q0FXQztBQUVELGtCQUF5QixJQUFJO0lBRXpCLElBQU0scUJBQXFCLEdBQStCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdEUscUJBQXFCLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLFVBQUMsTUFBcUM7UUFDbEYsSUFBTSxJQUFJLEdBQWtCLE1BQU0sQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2hELElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsSUFBTSxhQUFhLEdBQWtCLE1BQU0sQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2xFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDO2dCQUNGLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQTVCRCw0QkE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgU2VnbWVudGVkQmFyLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXJcIjtcbi8vID4+IHNlZ21lbnRlZC1iYXItdmlldy1jb2RlLXRzXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICAvLyBzZXQgdXAgdGhlIFNlbGVjdGVkQmFyIHNlbGVjdGVkIGluZGV4XG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIHZtLnNldChcInByb3BcIiwgMCk7XG4gICAgdm0uc2V0KFwic2JTZWxlY3RlZEluZGV4XCIsIDApO1xuICAgIHZtLnNldChcInZpc2liaWxpdHkxXCIsIHRydWUpO1xuICAgIHZtLnNldChcInZpc2liaWxpdHkyXCIsIGZhbHNlKTtcbiAgICB2bS5zZXQoXCJ2aXNpYmlsaXR5M1wiLCBmYWxzZSk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYkxvYWRlZChhcmdzKSB7XG4gICAgLy8gaGFuZGxlIHNlbGVjdGVkIGluZGV4IGNoYW5nZVxuICAgIGNvbnN0IHNlZ21lbnRlZEJhckNvbXBvbmVudDogU2VnbWVudGVkQmFyID0gPFNlZ21lbnRlZEJhcj5hcmdzLm9iamVjdDtcbiAgICBzZWdtZW50ZWRCYXJDb21wb25lbnQub24oXCJzZWxlY3RlZEluZGV4Q2hhbmdlXCIsIChzYmFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSAoPFNlZ21lbnRlZEJhcj5zYmFyZ3Mub2JqZWN0KS5wYWdlO1xuICAgICAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSAoPFNlZ21lbnRlZEJhcj5zYmFyZ3Mub2JqZWN0KS5zZWxlY3RlZEluZGV4O1xuICAgICAgICB2bS5zZXQoXCJwcm9wXCIsIHNlbGVjdGVkSW5kZXgpO1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB2bS5zZXQoXCJ2aXNpYmlsaXR5MVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2bS5zZXQoXCJ2aXNpYmlsaXR5MlwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdm0uc2V0KFwidmlzaWJpbGl0eTNcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHZtLnNldChcInZpc2liaWxpdHkxXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2bS5zZXQoXCJ2aXNpYmlsaXR5MlwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2bS5zZXQoXCJ2aXNpYmlsaXR5M1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdm0uc2V0KFwidmlzaWJpbGl0eTFcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZtLnNldChcInZpc2liaWxpdHkyXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2bS5zZXQoXCJ2aXNpYmlsaXR5M1wiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIDw8IHNlZ21lbnRlZC1iYXItdmlldy1jb2RlLXRzXG4iXX0=