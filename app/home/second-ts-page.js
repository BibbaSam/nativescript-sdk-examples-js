"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onNavigatedTo(args) {
    var page = args.object;
    var navigationContext = page.navigationContext;
    var context = args.context;
    page.bindingContext = navigationContext;
}
exports.onNavigatedTo = onNavigatedTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWNvbmQtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLHVCQUE4QixJQUFtQjtJQUM3QyxJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBR2pELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFFN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztBQUM1QyxDQUFDO0FBUkQsc0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBuYXYtY29udGV4dC1yZWNlaXZlLXRzXG5pbXBvcnQgeyBQYWdlLCBOYXZpZ2F0ZWREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwibmF2aWdhdGVkVG9cIiBldmVudCBhdHRhY2hlZCBpbiBkZXRhaWxzLXBhZ2UueG1sIGUuZy5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IE5hdmlnYXRlZERhdGEpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgbmF2aWdhdGlvbkNvbnRleHQgPSBwYWdlLm5hdmlnYXRpb25Db250ZXh0O1xuXG4gICAgLy8gVGhlIG5hdmlnYXRpb24gZXZlbnQgYXJndW1lbnRzIGFyZSBvZiB0eXBlIE5hdmlnYXRlZERhdGEgYW5kIHByb3ZpZGUgYW5vdGhlciB3YXkgdG8gZ3JhYiB0aGUgcGFzc2VkIGNvbnRleHRcbiAgICBjb25zdCBjb250ZXh0ID0gYXJncy5jb250ZXh0O1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5hdmlnYXRpb25Db250ZXh0O1xufVxuLy8gPDwgbmF2LWNvbnRleHQtcmVjZWl2ZS10c1xuIl19