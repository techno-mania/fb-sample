$(document).ready(function(){
  

    $("input,select").on({
    blur: function(){
      // inputValue=$("input").val();
      // selectValue=$("select").val();
      if($(this).val() ==""){
        $(this).css("border-color", "red");
      }else if($(this).val() !=""){
        $(this).css("border-color", "#bbc4dd");
      // }else if($(this).val() =="" && $(this).on(focus)){
      //       $("#fnError").css("display", "block");
      }
      
    },
    focus: function(){
       if($(this).val() !=""){
         $(this).css("border-color", "#bbc4dd");
         $("#fnError").css("display", "none");
       }else{
          $(this).css("border-color", "#bbc4dd");
          $("#fnError").css("display", "block");
          
       }
        
    }
     }); 
    $(".btn-login").on("click",function(){
        loginEmail=$("#logineml").val();
        logPwd= $("#logpwd").val();
        if(validLogin(loginEmail,logPwd)){
          console.log("well");
        }else{
          window.location.replace("http://stackoverflow.com");
          // console.log(":(((((");
        }
    });

    $("#btn1").on("click",function(){
        fname=$("#input1").val();
        lname= $("#input2").val();
        emlname= $("#input3").val();
        cename= $("#input3").val();
        spwd= $("#input5").val();
        if(validSignup(fname,lname,emlname,cename,spwd)){
          console.log("well");
        }else{
          console.log(":(((((");
        }
    });

  $("#input3").keypress("change",function() { 
      var email = $("#input3").val();
      if( !isValidEmail(email) ){
         // console.log("hey");
         $("#input4").css("display","none");
      }else{
         $("#input4").css("display","block");
         // console.log("display");
      }
   });


// function logIn(emailadd){
//    if(isValidEmail(emailadd)){
//     console.log("fine");
//    }else{
//     console.log("not fine");
//    }
// };

});

function myFunction(){
   $("input").val("");
   $( "#input1" ).focus();
};

function isValidEmail(emailAdd) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAdd);
};

function validLogin(loginEmail,logPwd){
        if(loginEmail !="" && logPwd !="" && isValidEmail(loginEmail)){
         return true;   
        }else{
         return false;   
        }
};
function validSignup(fname,lname,sEmail,cEmail,sPwd){
        if(fname !="" && lname !="" && sEmail !="" && cEmail !="" && sPwd!= ""){
         return true; 
        }else{
         return false;
         
        }
};












// function pageRedirect(loginEmail,logPwd){
//   if(validLogin(loginEmail,logPwd)){
//       window.location.replace("http://stackoverflow.com");
//   }
// };

 
		


 
 
 

















