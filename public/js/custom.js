 $(document).ready(function(){
 	// alert("connected");
 // 	$("input,select").blur(function(e){
	// 	val=$(this).val();
	// 	if(val== ""){
	// 		$(this).css("border-color","#990000");
	// 	}
	// });
	$("input").on({
    blur: function(){
      // inputValue=$("input").val();
      // selectValue=$("select").val();
      if($(this).val() ==""){
        $(this).css("border-color", "red");
      }else if($(this).val() !=""){
        $(this).css("border-color", "#bbc4dd");
      }
      
    },
    focus: function(){
        $(this).css("border-color", "#bbc4dd");
    }
     }); 
 	
 	

  });
 
 
 

















