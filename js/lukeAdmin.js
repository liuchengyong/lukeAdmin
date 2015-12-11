
InitiateSideMenu();
InitHeaderButton();
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


function InitHeaderButton(){
    $("#fullscreen").on("click",function(e){
        var element = document.documentElement;
        if (!$('body').hasClass("full-screen")) {
            $('body').addClass("full-screen");
            $('#fullscreen').addClass("active");
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        } else {
            $('body').removeClass("full-screen");
            $('#fullscreen').removeClass("active");
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    });

}








