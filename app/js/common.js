$(document).ready(function(){

    /**
     * mobile-mnu customization
     */
    var mmenu = $('#mobile-mnu');
    var $mmenu = mmenu.mmenu({
        "pageScroll": true,

        "navbar": {
            "title" : "",
        },
        "extensions": [
            "position-front",
            "fullscreen",
        ],
    }, {
        offCanvas: {
            pageSelector: "#page-container"
        },
        "autoHeight": true
    });

    var mmenuBtn = $("#mmenu-btn");
    var API = $mmenu.data("mmenu");

    mmenuBtn.click(function() {
        API.open();
        $(this).addClass('is-active')
    });

    $('#close-mnu').click(function(e){
        e.preventDefault();
        API.close();
    });


    API.bind( "close:start", function() {
        setTimeout(function() {
            mmenuBtn.removeClass( "is-active" );
        }, 300);
    });
    /**
     * end mobile-mnu customization
     */


    $('.services-slider').owlCarousel({
        loop:true,
        nav: false,
        items: 1,
        margin: 0,
        dots: false,
        autoHeight: false,
        navText: ["",""],
        autoWidth:true,
    });


    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
