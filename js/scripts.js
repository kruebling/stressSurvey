var warning = 0;
var danger = 0;
var manage = 0;



$(document).ready(function(){
  $("#stress_survey").submit(function(event) {
    event.preventDefault();
    $('input:checkbox[name=stress1]:checked').each(function() {
      warning += 1;
    });
    $('input:checkbox[name=stress2]:checked').each(function() {
      danger += 1;
    });
    $('input:checkbox[name=stress3]:checked').each(function() {
      manage -= 1;
    });
    var results = (warning + danger + manage);
      if (results === 15) {
        alert("Danger!");
      } else if (results <= 14 && results >= 6) {
        alert("warning!");
      } else if (results <= 5) {
        alert("YOU DOIN GREAT BRAH!");
      }
    $("#healthResult").show(800);
    $("#management").show(800);
    $("#stress_survey").hide(800);
  });
});
