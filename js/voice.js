var voiceselection = responsiveVoice.getVoices();
var vselect = $("#voiceselection");
$.each(voiceselection, function() {
        vselect.append($("<option />").val(this.name).text(this.name));
});


function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }