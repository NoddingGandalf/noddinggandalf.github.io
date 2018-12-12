var s = new Howl({
    src: ['sax.mp3'],
    autoplay: 1,
    loop: 1,
    volume: 1
});

var deepfried = false

function deepfry() {
    s.stop();
    s = new Howl({
        src: ['sax.mp3'],
        autoplay: 1,
        loop: 1,
        volume: 1000
    });

    $('body').css('background-image', 'url("https://noddinggandalf.github.io/deepfry.gif")');
}

function normalfry() {
    s.stop();
    s = new Howl({
        src: ['sax.mp3'],
        autoplay: 1,
        loop: 1,
        volume: 1
    });
    
    $('body').css('background-image', 'url("https://noddinggandalf.github.io/gandalf.gif")');
}

$(document).ready(
    function() {
        var i = window.innerWidth,
            n = window.innerHeight;
        $("#a").css("height", n + "px");
        $("#a").css("width", i + "px");
        document.addEventListener('contextmenu', e=>e.preventDefault());
        $(window).keydown(function(e) {
            if(e.keyCode == 13) {
                if(!deepfried)
                    deepfry();
                else
                    normalfry();
                deepfried ^= deepfried;
            }
            else if(!(e.keyCode == 122))
                e.preventDefault();
        });
        document.addEventListener('touchstart', deepfry, false);
    }
);
