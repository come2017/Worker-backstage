$(document).ready(function(){
	//修改默认验证规则
	$.validator.setDefaults({
		// errorElement:"i",
		// ignore: "",
		errorPlacement : function(error, element) {
			//$(element).siblings("i.desc").hide();
			$(element).addClass("ipt_red");
			//error.insertAfter(element);
		},
		 showErrors: function(errorMap, errorList) {
		 	if(errorList!=null&&errorList.length>0){
//		 		alert(errorList[0].message);
				layer.tips(errorList[0].message,errorList[0].element,{
					tips:[2, 'red'],
//					time:8000
				});
				$(errorList[0].element).addClass("ipt_red");
				
				
		 	}
		
		 },     
		//onfocusout: false,
		//onkeyup: false,
		submitHandler: function(form) {
			$(form).find(":submit").prop("disabled", true);
			form.submit();
		}
	});
	
});