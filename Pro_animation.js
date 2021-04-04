//change the colour theme
$("#theme_btn").change(function() {
    if (localStorage.getItem("theme_onoff") == "true") {
        let theme = {};
        $("body").get(0).style.setProperty("--first","var(--firstv2)");
        $("body").get(0).style.setProperty("--second", "var(--secondv2)");
        $("body").get(0).style.setProperty("--third", "var(--thirdv2)");
        $("body").get(0).style.setProperty("--fourth", "var(--fourthv2)");
        $("body").get(0).style.setProperty("--fifth", "var(--fifthv2)");
        $("body").get(0).style.setProperty("--sixth", "var(--sixthv2)");
        $("body").get(0).style.setProperty("--seventh", "var(--seventhv2)");
        theme.onoff = false;
        theme.first = "var(--firstv2)";
        theme.second = "var(--secondv2)";
        theme.third = "var(--thirdv2)";
        theme.fourth = "var(--fourthv2)";
        theme.fifth = "var(--fifthv2)";
        theme.sixth = "var(--sixthv2)";
        theme.seventh = "var(--seventhv2)";
        saveLocalportfolio_theme(theme);
    }
    else {
        let theme = {};
        $("body").get(0).style.setProperty("--first","var(--firstv1)");
        $("body").get(0).style.setProperty("--second", "var(--secondv1)");
        $("body").get(0).style.setProperty("--third", "var(--thirdv1)");
        $("body").get(0).style.setProperty("--fourth", "var(--fourthv1)");
        $("body").get(0).style.setProperty("--fifth", "var(--fifthv1)");
        $("body").get(0).style.setProperty("--sixth", "var(--sixthv1)");
        $("body").get(0).style.setProperty("--seventh", "var(--seventhv1)");
        theme.onoff = true;
        console.log("job")
        theme.first = "var(--firstv1)";
        theme.second = "var(--secondv1)";
        theme.third = "var(--thirdv1)";
        theme.fourth = "var(--fourthv1)";
        theme.fifth = "var(--fifthv1)";
        theme.sixth = "var(--sixthv1)";
        theme.seventh = "var(--seventhv1)";
        saveLocalportfolio_theme(theme);
    } 
});
//change colour theme but for desktop version
$("#theme_btn2").change(function() {
    if (localStorage.getItem("theme_onoff") == "true") {
        let theme = {};
        $("body").get(0).style.setProperty("--first","var(--firstv2)");
        $("body").get(0).style.setProperty("--second", "var(--secondv2)");
        $("body").get(0).style.setProperty("--third", "var(--thirdv2)");
        $("body").get(0).style.setProperty("--fourth", "var(--fourthv2)");
        $("body").get(0).style.setProperty("--fifth", "var(--fifthv2)");
        $("body").get(0).style.setProperty("--sixth", "var(--sixthv2)");
        $("body").get(0).style.setProperty("--seventh", "var(--seventhv2)");
        theme.onoff = false;
        theme.first = "var(--firstv2)";
        theme.second = "var(--secondv2)";
        theme.third = "var(--thirdv2)";
        theme.fourth = "var(--fourthv2)";
        theme.fifth = "var(--fifthv2)";
        theme.sixth = "var(--sixthv2)";
        theme.seventh = "var(--seventhv2)";
        saveLocalportfolio_theme(theme);
    }
    else {
        let theme = {};
        $("body").get(0).style.setProperty("--first","var(--firstv1)");
        $("body").get(0).style.setProperty("--second", "var(--secondv1)");
        $("body").get(0).style.setProperty("--third", "var(--thirdv1)");
        $("body").get(0).style.setProperty("--fourth", "var(--fourthv1)");
        $("body").get(0).style.setProperty("--fifth", "var(--fifthv1)");
        $("body").get(0).style.setProperty("--sixth", "var(--sixthv1)");
        $("body").get(0).style.setProperty("--seventh", "var(--seventhv1)");
        theme.onoff = true;
        console.log("job")
        theme.first = "var(--firstv1)";
        theme.second = "var(--secondv1)";
        theme.third = "var(--thirdv1)";
        theme.fourth = "var(--fourthv1)";
        theme.fifth = "var(--fifthv1)";
        theme.sixth = "var(--sixthv1)";
        theme.seventh = "var(--seventhv1)";
        saveLocalportfolio_theme(theme);
    } 
});

//save the theme on local memory
function saveLocalportfolio_theme(theme) {
    let portfolio_theme;
    if (localStorage.getItem("portfolio_theme") === null) {
        portfolio_theme = [];
    } else {
        portfolio_theme = JSON.parse(localStorage.getItem("portfolio_theme"));
    }
    portfolio_theme = theme;
    localStorage.setItem("theme_onoff", portfolio_theme.onoff);
    localStorage.setItem("theme_first", portfolio_theme.first);
    localStorage.setItem("theme_second", portfolio_theme.second);
    localStorage.setItem("theme_third", portfolio_theme.third);
    localStorage.setItem("theme_fourth", portfolio_theme.fourth);
    localStorage.setItem("theme_fifth", portfolio_theme.fifth);
    localStorage.setItem("theme_sixth", portfolio_theme.sixth);
    localStorage.setItem("theme_seventh", portfolio_theme.seventh);
}
//open navigation bar
$("#menu_btn").on('click', function() {
    $(".nav2").fadeIn(500);
    $('.nav2').css('display', 'flex');
    $('.pro_container').css('display', 'none');
    $('footer').css('display', 'none');

});
//close navigation bar
$("#close_btn").on('click', function() {
    $('.nav2').css('display', 'none');
    $('.pro_container').css('display', 'grid');
    $('footer').css('display', 'grid');
});
//prepare everything on resize
var previousWidth = window.innerWidth;
var previous2Width = window.outerWidth;
window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    if (newWidth > 801) {
        $('.nav2').css('display', 'none');
        $('footer').css('display', 'grid');
        $('.pro_container').css('display', 'grid');
        $('main').css('display', 'none');
        $('.about_cont').css('display', 'grid');
        $('.social_cont').css('display', 'grid');
        $('.icons_cont').css('display', 'block');
        foo_onoff = 1;
    }
    else if ((newWidth < 801) && (previousWidth > 800)) {
         $('.intro').css('display', 'flex');
         $('main').css('display', 'block');
         $('.about_cont').css('display', 'none');
        $('.social_cont').css('display', 'none');
        $('.icons_cont').css('display', 'none');
        $('.f_btn').text('+');
        foo_onoff = 0;
    };
    if (outerWidth < 351) {
        $('.about_cont').css('display', 'none');
        $('.social_cont').css('display', 'none');
        $('.icons_cont').css('display', 'none');
        $('.foo_btn').css('grid-column', "1/2");
        $('.f_btn').text('+');
        foo_onoff = 0;
    } else {
        $('.foo_btn').css('grid-column', "1/3");
    }
    previousWidth = newWidth;
});
//show footer content
var foo_onoff = 0;
var prev;
$(".foo_btn").on('click', function() {
    if (foo_onoff == 1) {
        $('.about_cont').css('display', 'none');
        $('.social_cont').css('display', 'none');
        $('.icons_cont').css('display', 'none');
        $('.f_btn').text('+');
        $('.foo_btn').css('margin-top', 0);
        $('.foo_btn').css('margin-bottom', 0);
        foo_onoff = 0;
    } else {

        if (window.innerWidth > 350) {
        $('.about_cont').css('display', 'grid');
        $('.social_cont').css('display', 'grid');
        $('.icons_cont').css('display', 'block');
        $('.f_btn').text('-');
        $('.foo_btn').css('grid-column', "1/3");
        foo_onoff = 1;
        } else {
            $('.foo_btn').css('grid-column', "1/2");
            $('.about_cont').css('display', "grid");
            $('.social_cont').css('display', "grid");
            $('.icons_cont').css('display', "grid");
            $('.f_btn').text('-');
            foo_onoff = 1;
        }
    }
});