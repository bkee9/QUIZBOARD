$(document).ready(function(){
    $("#quiz").submit(function(event){
      event.preventDefault();
      var arg1 = parseInt($("input:radio[name=Quiz1]:checked").val());
      var arg2 = parseInt($("input:radio[name=Quiz2]:checked").val());
      var arg3 = parseInt($("input:radio[name=Quiz3]:checked").val());
      var arg4 = parseInt($("input:radio[name=Quiz4]:checked").val());
      var arg5 = parseInt($("input:radio[name=Quiz5]:checked").val());
      var display =parseInt((arg1 + arg2 + arg3 + arg4 + arg5 )/5*100);
      $("#hide").slideDown();
      $("input").prop("disabled", true);
      $("#results").text("Your score is :"+" "+display+"%");
      score_remarks(display)
    });
    $("#start").click(function(){
      $("#quiz").slideToggle();
    });
    $("#name").submit(function(){
      event.preventDefault();
      $("#name").hide();
      $("#begin").slideDown();
    });
    $("#seeResults").click(function(){
      $("#begin").hide();
      $("#questions").hide();
      $("#answers").show();
    });
  });

  function score_remarks(score){
    if(score >= 80 && score <=100){
      console.log('You have excellently passed')
      document.getElementById('Remarks').value = 'You have excellently passed'
    }
    else if(score>=50 && score<80){
      console.log('You have fairly Passed')
      document.getElementById('Remarks').value  = 'You have fairly Passed'
    }
    else if(score>=0 && score <50){
     console.log('You have scored poorly, Retake test')
     document.getElementById('Remarks').value  = 'You have scored poorly, Retake test'
   }
   else{
     console.log('invalid input')
     document.getElementById('Remarks').value  = 'Invalid input'
   }
  }
