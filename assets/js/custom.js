$(document).ready(function () {
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    function openSocial(that) {
        $('#' + that).css('display', 'block');
    }

    function closeSocial(that) {
        $('#' + that).css('display', 'none');
    }

    /*var scroll_start = 0;
    var startchange = $('#top');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("#header").css('display', 'block');
            } else {
                $('#header').css('display', 'none');
            }
        });
    }*/

    function openOverlay(that) {
        openNav();
        openSocial(that);
    }

    function closeOverlay(that) {
        closeNav();
        closeSocial(that);
    }

    //

    $("#resume").hover(function () {
        openOverlay('Resume')
    }, function () {
        closeOverlay('Resume')
    });

    $("#mail").hover(function () {
        openOverlay('Mail')
    }, function () {
        closeOverlay('Mail')
    });
    $("#github").hover(function () {
        openOverlay('GitHub')
    }, function () {
        closeOverlay('GitHub')
    });
    $("#linkedin").hover(function () {
        openOverlay('LinkedIn')
    }, function () {
        closeOverlay('LinkedIn')
    });
    $("#facebook").hover(function () {
        openOverlay('Facebook')
    }, function () {
        closeOverlay('Facebook')
    });
    $("#twitter").hover(function () {
        openOverlay('Twitter')
    }, function () {
        closeOverlay('Twitter')
    });


    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing');
    });

//    var loves = ["making websites", "Sweja", "web designing"];
    console.log("hiiiii !!!");
    
    var i = 0;
    
    $(function () {
        var hello = ["Making Websites", "Web Designing", "Google", "Open Source", "HTML, CSS and JS", "Photoshop"];
        var used = ["Oh Yeah !!!"];
        var greeting = $('#loves');
        var item;

        function hey() {
            var j = i%(hello.length);
            console.log("j = " + j);
            item = hello[j];
            
            greeting.html(item);
            greeting.animate({
                "opacity": "1"
            }, 0);              //time to transition opacity
        }

        window.setInterval(function () {
            i++;
            greeting.animate({
                "opacity": "0"
            }, 0);              //time to transition opacity
            setTimeout(hey, 0)
        }, 400);        //interval between word change

    });


    $('#typer').typeIt({
            //        strings: ["Front End Developer","Quizzer/ QuizMaster","Undergrad"," "],
            speed: 35,
            //        cursorSpeed: 0,
            //        breakLines: true,
            //        breakDelay: 2000,
            autoStart: false
        })
        .tiType('<a href="#" class="special" style="color: black">Front End Developer</a>, ')
        //    .tiBreak()
        .tiPause(1000)
        .tiType('<a href="#" class="special" style="color: black">Photoshop-er</a> ')
        .tiPause(1000)
        .tiType('and <a href="#" class="special" style="color: black">Illustrator-ist.</a>')
        .tiBreak()
        .tiPause(1000)
        .tiType('I am currently an Undergrad-Junior Student at')
        .tiBreak()
        .tiType('<a href="#" class="special" style="color: black">NIT Warangal</a>');
});
