$(document).ready(function(){
  if (JSON.parse(localStorage.snsUsrDetails1).usrName !== "undefined" ) {
      $('#usrDetails').hide();
    $('#wlMsg').html('Welcome , ' + (JSON.parse(localStorage.snsUsrDetails1).usrName));
  };
  $(".fixed").hide();
  if(!JSON.parse(localStorage.snsUsrDetails1).surveyTaken){ 
  
    $(".fixed")
      .fadeIn('slow')
      .animate({'bottom': '+=130px'},'slow');
   }
  $(".cls").click(function(e){
    $(".fixed").fadeOut('slow');
  });
 
});
document.getElementById('YBtn').addEventListener('click', function() {
  //alert('Great! we are happy that you liked this page');
  var jqxhr = $.ajax( "http://localhost:8080/api/user/120" )
  .done(function() {
    alert( "success" );
  })
  .fail(function() {
    //alert( "error" );
    $('#douLike').hide();
    $('#thxSurvey').show();
    var snsUsrDetails1 = JSON.parse(localStorage.snsUsrDetails1);
      snsUsrDetails1.surveyTaken = true;
    localStorage.setItem("snsUsrDetails1",JSON.stringify(snsUsrDetails1));
  });
});

var snsUsrDetails = {};

$('#btn_Submit').click(function(){
  snsUsrDetails.usrName = $('#usrName').val();
  snsUsrDetails.usrPwd = $('#usrPwd').val();
  snsUsrDetails.usrEmail = $('#usrEmail').val();

  if(typeof(Storage) !== "undefined") {
      localStorage.setItem("snsUsrDetails1", JSON.stringify(snsUsrDetails));
    /*  localStorage.setItem("sns-usrPwd", usrPwd);
      localStorage.setItem("sns-usrEmail", usrEmail);*/
      console.log('localStorage Enabled');
      console.log('localStorage - Saved Object' + ':' + JSON.parse(localStorage.snsUsrDetails1).usrName + ' ' + JSON.parse(localStorage.snsUsrDetails1).usrEmail);
    } else {
      console.log('No Storage support provided');
    }
    $('#usrDetails').hide();
})
