
InitiateSideMenu();
function InitiateSideMenu(){
    $(".sidebar-menu").on('click', function (e) {
        var menuLink = $(e.target).closest("a");
        if($(menuLink.get(0)).parent().children(".submenu").length > 0){
            $(menuLink.get(0)).parent().children(".submenu").slideToggle(200);
            $(menuLink.get(0)).parent().toggleClass("open");
            $(menuLink.get(0)).toggleClass("menu-dropdown");
            return false;
        }
        return;
    });
}

