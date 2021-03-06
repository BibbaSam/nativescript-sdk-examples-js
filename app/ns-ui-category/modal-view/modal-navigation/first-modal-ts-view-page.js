"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onNavigate(args) {
    var view = args.object;
    var page = view.page;
    page.frame.navigate("ns-ui-category/modal-view/modal-navigation/second-modal-ts-view-page");
}
exports.onNavigate = onNavigate;
function onShowingModally(args) {
    console.log("onShowingModally");
}
exports.onShowingModally = onShowingModally;
function onCloseModal(args) {
    args.object.closeModal();
}
exports.onCloseModal = onCloseModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtbW9kYWwtdHMtdmlldy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyc3QtbW9kYWwtdHMtdmlldy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0JBQTJCLElBQUk7SUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN6QixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNFQUFzRSxDQUFDLENBQUM7QUFDaEcsQ0FBQztBQUpELGdDQUlDO0FBRUQsMEJBQWlDLElBQUk7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFGRCw0Q0FFQztBQUVELHNCQUE2QixJQUFJO0lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQUZELG9DQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gZmlyc3QtbW9kYWwtdmlldy10cy1uYXZpZ2F0aW9uXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGUoYXJncykge1xuICAgIGNvbnN0IHZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+dmlldy5wYWdlO1xuICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCJucy11aS1jYXRlZ29yeS9tb2RhbC12aWV3L21vZGFsLW5hdmlnYXRpb24vc2Vjb25kLW1vZGFsLXRzLXZpZXctcGFnZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uU2hvd2luZ01vZGFsbHkoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwib25TaG93aW5nTW9kYWxseVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xvc2VNb2RhbChhcmdzKSB7XG4gICAgYXJncy5vYmplY3QuY2xvc2VNb2RhbCgpO1xufVxuLy8gPDwgZmlyc3QtbW9kYWwtdmlldy10cy1uYXZpZ2F0aW9uXG4iXX0=