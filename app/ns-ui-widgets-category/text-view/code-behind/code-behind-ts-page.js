"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var text_view_1 = require("tns-core-modules/ui/text-view");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("onTap", function (btargs) {
        var button = btargs.object;
        var thirdTextview = button.page.getViewById("thirdTextViewId");
        thirdTextview.editable = !thirdTextview.editable;
        if (thirdTextview.editable) {
            button.text = "Disable third TextView";
        }
        else {
            button.text = "Enable third TextView";
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onPageLoaded(args) {
    var page = args.object;
    var vm = page.bindingContext;
    var stackLayout = page.getViewById("stackLayoutId");
    var firstTextview = new text_view_1.TextView();
    firstTextview.hint = "Enter text";
    var secondTextview = new text_view_1.TextView();
    var options = {
        sourceProperty: "text",
        targetProperty: "secondTextProperty"
    };
    secondTextview.bind(options, vm);
    vm.set("secondTextProperty", "Sample TextView text");
    var thirdTextview = new text_view_1.TextView();
    thirdTextview.id = "thirdTextViewId";
    thirdTextview.text = "Third TextView";
    stackLayout.addChild(firstTextview);
    stackLayout.addChild(secondTextview);
    stackLayout.addChild(thirdTextview);
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1iZWhpbmQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGUtYmVoaW5kLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFLOUQsMkRBQXVEO0FBR3ZELHdCQUErQixJQUFJO0lBQy9CLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBRTVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBTTtRQUNuQixJQUFNLE1BQU0sR0FBb0IsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFNLGFBQWEsR0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBRSxDQUFDO1FBQzdFLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsd0JBQXdCLENBQUM7UUFDM0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQztRQUMxQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBZkQsd0NBZUM7QUFFRCxzQkFBNkIsSUFBSTtJQUM3QixJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLElBQU0sV0FBVyxHQUE4QixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRWpGLElBQU0sYUFBYSxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFDO0lBQ3JDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBRWxDLElBQU0sY0FBYyxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFDO0lBQ3RDLElBQU0sT0FBTyxHQUFHO1FBQ1osY0FBYyxFQUFFLE1BQU07UUFDdEIsY0FBYyxFQUFFLG9CQUFvQjtLQUN2QyxDQUFDO0lBQ0YsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBRXJELElBQU0sYUFBYSxHQUFHLElBQUksb0JBQVEsRUFBRSxDQUFDO0lBQ3JDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7SUFDckMsYUFBYSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztJQUV0QyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBdkJELG9DQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG4vLyA+PiB0ZXh0LXZpZXctaW1wb3J0XG5pbXBvcnQge1RleHRWaWV3fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIjtcbi8vIDw8IHRleHQtdmlldy1pbXBvcnRcbi8vID4+IGNyZWF0aW5nLXRleHQtdmlldy1jb2RlLXRzXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT4gYXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIC8vIGNoYW5naW5nIFRleHRWaWV3IGVkaXRhYmxlIHByb3BlcnR5IHZhbHVlIG9uIGJ1dHRvbiB0YXBcbiAgICB2bS5zZXQoXCJvblRhcFwiLCAoYnRhcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbjogQnV0dG9uID0gPEJ1dHRvbj4gYnRhcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3QgdGhpcmRUZXh0dmlldyA9ICg8VGV4dFZpZXc+YnV0dG9uLnBhZ2UuZ2V0Vmlld0J5SWQoXCJ0aGlyZFRleHRWaWV3SWRcIikpO1xuICAgICAgICB0aGlyZFRleHR2aWV3LmVkaXRhYmxlID0gIXRoaXJkVGV4dHZpZXcuZWRpdGFibGU7XG4gICAgICAgIGlmICh0aGlyZFRleHR2aWV3LmVkaXRhYmxlKSB7XG4gICAgICAgICAgICBidXR0b24udGV4dCA9IFwiRGlzYWJsZSB0aGlyZCBUZXh0Vmlld1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSBcIkVuYWJsZSB0aGlyZCBUZXh0Vmlld1wiO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25QYWdlTG9hZGVkKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcbiAgICBjb25zdCBzdGFja0xheW91dDogU3RhY2tMYXlvdXQgPSA8U3RhY2tMYXlvdXQ+IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzdGFja0xheW91dElkXCIpO1xuICAgIC8vIGNyZWF0aW5nIG5ldyBUZXh0VmlldyBhbmQgY2hhbmdpbmcgdGhlIGhpbnRcbiAgICBjb25zdCBmaXJzdFRleHR2aWV3ID0gbmV3IFRleHRWaWV3KCk7XG4gICAgZmlyc3RUZXh0dmlldy5oaW50ID0gXCJFbnRlciB0ZXh0XCI7XG4gICAgLy8gY3JlYXRpbmcgbmV3IFRleHRWaWV3IGFuZCBiaW5kaW5nIHRoZSB0ZXh0IHByb3BlcnR5XG4gICAgY29uc3Qgc2Vjb25kVGV4dHZpZXcgPSBuZXcgVGV4dFZpZXcoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBzb3VyY2VQcm9wZXJ0eTogXCJ0ZXh0XCIsXG4gICAgICAgIHRhcmdldFByb3BlcnR5OiBcInNlY29uZFRleHRQcm9wZXJ0eVwiXG4gICAgfTtcbiAgICBzZWNvbmRUZXh0dmlldy5iaW5kKG9wdGlvbnMsIHZtKTtcbiAgICB2bS5zZXQoXCJzZWNvbmRUZXh0UHJvcGVydHlcIiwgXCJTYW1wbGUgVGV4dFZpZXcgdGV4dFwiKTtcbiAgICAvLyBjcmVhdGluZyBuZXcgVGV4dFZpZXcgYW5kIGNoYW5naW5nIHRoZSB0ZXh0XG4gICAgY29uc3QgdGhpcmRUZXh0dmlldyA9IG5ldyBUZXh0VmlldygpO1xuICAgIHRoaXJkVGV4dHZpZXcuaWQgPSBcInRoaXJkVGV4dFZpZXdJZFwiO1xuICAgIHRoaXJkVGV4dHZpZXcudGV4dCA9IFwiVGhpcmQgVGV4dFZpZXdcIjtcbiAgICAvLyBhZGRpbmcgdGhlIG5ld2x5IGNyZWF0ZWQgVGV4dFZpZXdzIGluIGEgU3RhY2tMYXlvdXRcbiAgICBzdGFja0xheW91dC5hZGRDaGlsZChmaXJzdFRleHR2aWV3KTtcbiAgICBzdGFja0xheW91dC5hZGRDaGlsZChzZWNvbmRUZXh0dmlldyk7XG4gICAgc3RhY2tMYXlvdXQuYWRkQ2hpbGQodGhpcmRUZXh0dmlldyk7XG59XG4vLyA8PCBjcmVhdGluZy10ZXh0LXZpZXctY29kZS10c1xuIl19