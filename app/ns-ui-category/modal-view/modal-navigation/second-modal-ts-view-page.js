"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onGoBack(args) {
    var view = args.object;
    var page = view.page;
    page.frame.goBack();
}
exports.onGoBack = onGoBack;
function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kLW1vZGFsLXRzLXZpZXctcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY29uZC1tb2RhbC10cy12aWV3LXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxrQkFBeUIsSUFBSTtJQUN6QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN4QixDQUFDO0FBTEQsNEJBS0M7QUFFRCxzQkFBNkIsSUFBSTtJQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFGRCxvQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IHNlY29uZC1tb2RhbC12aWV3LXRzLW5hdmlnYXRpb25cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkdvQmFjayhhcmdzKSB7XG4gICAgY29uc3QgdmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT52aWV3LnBhZ2U7XG5cbiAgICBwYWdlLmZyYW1lLmdvQmFjaygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbG9zZU1vZGFsKGFyZ3MpIHtcbiAgICBhcmdzLm9iamVjdC5jbG9zZU1vZGFsKCk7XG59XG4vLyA8PCBzZWNvbmQtbW9kYWwtdmlldy10cy1uYXZpZ2F0aW9uXG4iXX0=