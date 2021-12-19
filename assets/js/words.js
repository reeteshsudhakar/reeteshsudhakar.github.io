var words_list = ["Student", "Advocate", "Developer", "Leader", "Loquacious", "Persistent"];

var idx = 0;

function wordDisplay() {
    setInterval(function() {
        var word = words_list[idx];
        $("#word-display").fadeOut(function() {
            $(this).html(word).fadeIn(1500);
        });
        idx = (idx + 1) % words_list.length;    
    }, 3000);
}

wordDisplay();