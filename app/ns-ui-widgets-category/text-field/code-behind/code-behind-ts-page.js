"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var text_field_1 = require("tns-core-modules/ui/text-field");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var stackLayout = page.getViewById("stackLayoutId");
    vm.set("username", "john");
    vm.set("tfResult", "");
    vm.set("secureButton", "TextField secure:(OFF)");
    vm.set("secure", false);
    vm.set("onTap", function (btargs) {
        var secure = vm.get("secure");
        vm.set("secure", !secure);
        if (secure) {
            vm.set("secureButton", "TextField secure:(OFF)");
        }
        else {
            vm.set("secureButton", "TextField secure:(ON)");
        }
    });
    var options = {
        sourceProperty: "username",
        targetProperty: "text"
    };
    var firstTextField = new text_field_1.TextField();
    firstTextField.updateTextTrigger = "textChanged";
    firstTextField.bind(options, vm);
    firstTextField.on("textChange", function (argstf) {
        vm.set("tfResult", argstf.object.text);
    });
    var secondOptions = {
        sourceProperty: "secure",
        targetProperty: "secure"
    };
    var secondTextField = new text_field_1.TextField();
    secondTextField.bind(secondOptions, vm);
    stackLayout.addChild(firstTextField);
    stackLayout.addChild(secondTextField);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1iZWhpbmQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGUtYmVoaW5kLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFJOUQsNkRBQTJEO0FBRzNELHNCQUE2QixJQUFJO0lBQzdCLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0IsSUFBTSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDNUIsSUFBTSxXQUFXLEdBQTZCLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFaEYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUNqRCxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4QixFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU07UUFDbkIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBTSxPQUFPLEdBQUc7UUFDWixjQUFjLEVBQUUsVUFBVTtRQUMxQixjQUFjLEVBQUUsTUFBTTtLQUN6QixDQUFDO0lBQ0YsSUFBTSxjQUFjLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7SUFDdkMsY0FBYyxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQztJQUNqRCxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVqQyxjQUFjLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFDLE1BQU07UUFFbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQWMsTUFBTSxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUMsQ0FBQztJQUlILElBQU0sYUFBYSxHQUFHO1FBQ2xCLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLGNBQWMsRUFBRSxRQUFRO0tBQzNCLENBQUM7SUFDRixJQUFNLGVBQWUsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztJQUN4QyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV4QyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLFdBQVcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQTlDRCxvQ0E4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuLy8gPj4gdGV4dGZpZWxkLWltcG9ydFxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZFwiO1xuLy8gPDwgdGV4dGZpZWxkLWltcG9ydFxuLy8gPj4gY3JlYXRpbmctdGV4dC1maWVsZC1jb2RlLXRzXG5leHBvcnQgZnVuY3Rpb24gb25QYWdlTG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIGNvbnN0IHN0YWNrTGF5b3V0OiBTdGFja0xheW91dCA9IDxTdGFja0xheW91dD5wYWdlLmdldFZpZXdCeUlkKFwic3RhY2tMYXlvdXRJZFwiKTtcblxuICAgIHZtLnNldChcInVzZXJuYW1lXCIsIFwiam9oblwiKTtcbiAgICB2bS5zZXQoXCJ0ZlJlc3VsdFwiLCBcIlwiKTtcbiAgICB2bS5zZXQoXCJzZWN1cmVCdXR0b25cIiwgXCJUZXh0RmllbGQgc2VjdXJlOihPRkYpXCIpO1xuICAgIHZtLnNldChcInNlY3VyZVwiLCBmYWxzZSk7XG4gICAgLy8gY2hhbmdpbmcgVGV4dEZpZWxkIHNlY3VyZSBwcm9wZXJ0eSB2YWx1ZSBvbiBidXR0b24gdGFwXG4gICAgdm0uc2V0KFwib25UYXBcIiwgKGJ0YXJncykgPT4ge1xuICAgICAgICBjb25zdCBzZWN1cmUgPSB2bS5nZXQoXCJzZWN1cmVcIik7XG4gICAgICAgIHZtLnNldChcInNlY3VyZVwiLCAhc2VjdXJlKTtcbiAgICAgICAgaWYgKHNlY3VyZSkge1xuICAgICAgICAgICAgdm0uc2V0KFwic2VjdXJlQnV0dG9uXCIsIFwiVGV4dEZpZWxkIHNlY3VyZTooT0ZGKVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLnNldChcInNlY3VyZUJ1dHRvblwiLCBcIlRleHRGaWVsZCBzZWN1cmU6KE9OKVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGNyZWF0aW5nIG5ldyBUZXh0RmllbGQgYW5kIGJpbmRpbmcgdGhlIHRleHQgcHJvcGVydHlcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBzb3VyY2VQcm9wZXJ0eTogXCJ1c2VybmFtZVwiLFxuICAgICAgICB0YXJnZXRQcm9wZXJ0eTogXCJ0ZXh0XCJcbiAgICB9O1xuICAgIGNvbnN0IGZpcnN0VGV4dEZpZWxkID0gbmV3IFRleHRGaWVsZCgpO1xuICAgIGZpcnN0VGV4dEZpZWxkLnVwZGF0ZVRleHRUcmlnZ2VyID0gXCJ0ZXh0Q2hhbmdlZFwiO1xuICAgIGZpcnN0VGV4dEZpZWxkLmJpbmQob3B0aW9ucywgdm0pO1xuICAgIC8vIHJlZ2lzdGVyaW5nIGZvciB0aGUgVGV4dEZpZWxkIHRleHQgY2hhbmdlIGxpc3RlbmVyXG4gICAgZmlyc3RUZXh0RmllbGQub24oXCJ0ZXh0Q2hhbmdlXCIsIChhcmdzdGYpID0+IHtcblxuICAgICAgICB2bS5zZXQoXCJ0ZlJlc3VsdFwiLCAoPFRleHRGaWVsZD5hcmdzdGYub2JqZWN0KS50ZXh0KTtcbiAgICB9KTtcblxuXG4gICAgLy8gY3JlYXRpbmcgbmV3IFRleHRGaWVsZCBhbmQgYmluZGluZyB0aGUgc2VjdXJlIHByb3BlcnR5XG4gICAgY29uc3Qgc2Vjb25kT3B0aW9ucyA9IHtcbiAgICAgICAgc291cmNlUHJvcGVydHk6IFwic2VjdXJlXCIsXG4gICAgICAgIHRhcmdldFByb3BlcnR5OiBcInNlY3VyZVwiXG4gICAgfTtcbiAgICBjb25zdCBzZWNvbmRUZXh0RmllbGQgPSBuZXcgVGV4dEZpZWxkKCk7XG4gICAgc2Vjb25kVGV4dEZpZWxkLmJpbmQoc2Vjb25kT3B0aW9ucywgdm0pO1xuXG4gICAgc3RhY2tMYXlvdXQuYWRkQ2hpbGQoZmlyc3RUZXh0RmllbGQpO1xuICAgIHN0YWNrTGF5b3V0LmFkZENoaWxkKHNlY29uZFRleHRGaWVsZCk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59XG4vLyA8PCBjcmVhdGluZy10ZXh0LWZpZWxkLWNvZGUtdHNcbiJdfQ==