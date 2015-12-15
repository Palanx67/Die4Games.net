$(document).ready(function () {
	//--------contact.html-------------------------------------------------------------------------------------------------------------------------
	// hide messages 
	$("#error").hide();
	$("#success").hide();
	
	// on submit...
	$("#contactForm #send").click(function() {
		$("#error").hide();
		
		//required:
		
		//name
		var name = $("input#name").val();
		if(name == ""){
			$("#error").fadeIn().text("Name required.");
			$("input#name").focus();
			return false;
		}
		
		// email
		var email = $("input#email").val();
		if(email == ""){
			$("#error").fadeIn().text("Email required");
			$("input#email").focus();
			return false;
		}
		
		// comments
		var message = $("input#message").val();
		if(message == ""){
			$("#error").fadeIn().text("Comments required");
			$("input#message").focus();
			return false;
		}
		
		// send mail php
		var sendMailUrl = $("#sendMailUrl").val();
		
		//to, from & subject
		var to = "developers@die4games.net";
		var from = "developers@die4games.net";
		var subject = $("#subject").val();
		
		// data string
		var dataString = 'name='+ name
						+ '&email=' + email   
						+ '&comments=' + message
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject;						         
		// ajax
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// on success...
	 function success(){
	 	$("#success").fadeIn();
	 	$("#contactForm").fadeOut();
	 	window.scrollTo(0, 0);
	 }
	
    return false;
	//-------------------------------------------------------------------------------------------------------------------------------------------
});