"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onPageLoaded(args) {
    console.log("Page loaded");
    var page = args.object;
    console.log("Page reference from loaded event: ", page);
}
exports.onPageLoaded = onPageLoaded;
function onNavigatedTo(args) {
    console.log("Page navigatedTo");
    var page = args.object;
    console.log("Page reference from navigatedTo event: ", page);
}
exports.onNavigatedTo = onNavigatedTo;
function onStackLoaded(args) {
    console.log("Root StackLayout loaded");
    var stack = args.object;
    var page = stack.page;
    console.log("Page reference from page child element: ", page);
}
exports.onStackLoaded = onStackLoaded;
function onButtonTapped(args) {
    console.log("Button tap");
    var button = args.object;
    var page = button.page;
    console.log("Page reference from button tap event: ", page);
}
exports.onButtonTapped = onButtonTapped;
var frame_1 = require("tns-core-modules/ui/frame");
function onNavigatingTo(args) {
    console.log("Page navigatingTo");
    var rootFrame = frame_1.getFrameById("root-frame");
    var page = rootFrame.currentPage;
    console.log("Page reference from currentPage property of Frame: ", page);
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1yZWZlcmVuY2UtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UtcmVmZXJlbmNlLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxzQkFBNkIsSUFBZTtJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjLENBQUM7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBSkQsb0NBSUM7QUFFRCx1QkFBOEIsSUFBbUI7SUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjLENBQUM7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBSkQsc0NBSUM7QUFPRCx1QkFBOEIsSUFBZTtJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdkMsSUFBTSxLQUFLLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFMRCxzQ0FLQztBQUVELHdCQUErQixJQUFlO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUIsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUxELHdDQUtDO0FBSUQsbURBQXlEO0FBRXpELHdCQUErQixJQUFlO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqQyxJQUFNLFNBQVMsR0FBRyxvQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLElBQU0sSUFBSSxHQUFTLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBTEQsd0NBS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBwYWdlLXJlZmVyZW5jZS12aWEtZXZlbnQtdHNcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSwgTmF2aWdhdGVkRGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBhZ2UgbG9hZGVkXCIpO1xuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZSByZWZlcmVuY2UgZnJvbSBsb2FkZWQgZXZlbnQ6IFwiLCBwYWdlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZSBuYXZpZ2F0ZWRUb1wiKTtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZTtcbiAgICBjb25zb2xlLmxvZyhcIlBhZ2UgcmVmZXJlbmNlIGZyb20gbmF2aWdhdGVkVG8gZXZlbnQ6IFwiLCBwYWdlKTtcbn1cbi8vIDw8IHBhZ2UtcmVmZXJlbmNlLXZpYS1ldmVudC10c1xuXG4vLyA+PiBwYWdlLXJlZmVyZW5jZS12aWEtcGFnZS1wcm9wLXRzXG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uU3RhY2tMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJSb290IFN0YWNrTGF5b3V0IGxvYWRlZFwiKTtcbiAgICBjb25zdCBzdGFjayA9IDxTdGFja0xheW91dD5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlID0gc3RhY2sucGFnZTtcbiAgICBjb25zb2xlLmxvZyhcIlBhZ2UgcmVmZXJlbmNlIGZyb20gcGFnZSBjaGlsZCBlbGVtZW50OiBcIiwgcGFnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkJ1dHRvblRhcHBlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB0YXBcIik7XG4gICAgY29uc3QgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlID0gYnV0dG9uLnBhZ2U7XG4gICAgY29uc29sZS5sb2coXCJQYWdlIHJlZmVyZW5jZSBmcm9tIGJ1dHRvbiB0YXAgZXZlbnQ6IFwiLCBwYWdlKTtcbn1cbi8vIDw8IHBhZ2UtcmVmZXJlbmNlLXZpYS1wYWdlLXByb3AtdHNcblxuLy8gPj4gcGFnZS1yZWZlcmVuY2UtdmlhLWN1cnJyZW50LXBhZ2UtcHJvcC10c1xuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZSBuYXZpZ2F0aW5nVG9cIik7XG4gICAgY29uc3Qgcm9vdEZyYW1lID0gZ2V0RnJhbWVCeUlkKFwicm9vdC1mcmFtZVwiKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+cm9vdEZyYW1lLmN1cnJlbnRQYWdlO1xuICAgIGNvbnNvbGUubG9nKFwiUGFnZSByZWZlcmVuY2UgZnJvbSBjdXJyZW50UGFnZSBwcm9wZXJ0eSBvZiBGcmFtZTogXCIsIHBhZ2UpO1xufVxuLy8gPDwgcGFnZS1yZWZlcmVuY2UtdmlhLWN1cnJyZW50LXBhZ2UtcHJvcC10c1xuIl19