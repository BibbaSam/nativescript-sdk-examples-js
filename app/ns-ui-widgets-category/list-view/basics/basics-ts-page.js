"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = observable_1.fromObject({
        myTitles: [
            { title: "The Da Vinci Code" },
            { title: "Harry Potter and the Chamber of Secrets" },
            { title: "The Alchemist" },
            { title: "The Godfather" },
            { title: "Goodnight Moon" },
            { title: "The Hobbit" }
        ]
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onListViewLoaded(args) {
    var listView = args.object;
}
exports.onListViewLoaded = onListViewLoaded;
function onItemTap(args) {
    var index = args.index;
    console.log("Second ListView item tap " + index);
}
exports.onItemTap = onItemTap;
function onTap(args) {
    var page = args.object.page;
    var listView = page.getViewById("listView");
    page.bindingContext.myTitles.push({ title: "Game of Thrones" });
    listView.refresh();
}
exports.onTap = onTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtEQUF5RTtBQUl6RSx3QkFBK0IsSUFBZTtJQUMxQyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQU0sRUFBRSxHQUFHLHVCQUFVLENBQUM7UUFFbEIsUUFBUSxFQUFFO1lBQ04sRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7WUFDOUIsRUFBRSxLQUFLLEVBQUUseUNBQXlDLEVBQUU7WUFDcEQsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFO1lBQzFCLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtZQUMxQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtZQUMzQixFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7U0FDMUI7S0FDSixDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBZEQsd0NBY0M7QUFFRCwwQkFBaUMsSUFBZTtJQUM1QyxJQUFNLFFBQVEsR0FBYSxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNDLENBQUM7QUFGRCw0Q0FFQztBQUVELG1CQUEwQixJQUFtQjtJQUN6QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQTRCLEtBQU8sQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFIRCw4QkFHQztBQUdELGVBQXNCLElBQUk7SUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFFOUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBRWhFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUV2QixDQUFDO0FBUkQsc0JBUUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBsaXN0LXZpZXctY3JlYXRlLWNvZGUtdHNcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXcsIEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdm0gPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgbGlzdHZpZXcgYmluZGluZyBzb3VyY2VcbiAgICAgICAgbXlUaXRsZXM6IFtcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIERhIFZpbmNpIENvZGVcIiB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBDaGFtYmVyIG9mIFNlY3JldHNcIiB9LFxuICAgICAgICAgICAgeyB0aXRsZTogXCJUaGUgQWxjaGVtaXN0XCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIEdvZGZhdGhlclwiIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiBcIkdvb2RuaWdodCBNb29uXCIgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6IFwiVGhlIEhvYmJpdFwiIH1cbiAgICAgICAgXVxuICAgIH0pO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTGlzdFZpZXdMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgbGlzdFZpZXcgPSA8TGlzdFZpZXc+YXJncy5vYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJncy5pbmRleDtcbiAgICBjb25zb2xlLmxvZyhgU2Vjb25kIExpc3RWaWV3IGl0ZW0gdGFwICR7aW5kZXh9YCk7XG59XG4vLyA8PCBsaXN0LXZpZXctY3JlYXRlLWNvZGUtdHNcblxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcbiAgICAvLyA+PiBsaXN0LXZpZXctcmVmcmVzaC10c1xuICAgIGNvbnN0IGxpc3RWaWV3ID0gcGFnZS5nZXRWaWV3QnlJZChcImxpc3RWaWV3XCIpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQubXlUaXRsZXMucHVzaCh7IHRpdGxlOiBcIkdhbWUgb2YgVGhyb25lc1wiIH0pO1xuICAgIC8vIE1hbnVhbGx5IHRyaWdnZXIgdGhlIHVwZGF0ZSBzbyB0aGF0IHRoZSBuZXcgY29sb3IgaXMgc2hvd24uXG4gICAgbGlzdFZpZXcucmVmcmVzaCgpO1xuICAgIC8vIDw8IGxpc3Qtdmlldy1yZWZyZXNoLXRzXG59XG4iXX0=