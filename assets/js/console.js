(function(){
	
	/* Global Variables */
	cmdHistory = [];
	count = cmdHistory.length-1;
	
	/* List of available commands */
	var cmdAvailable = [
		{ name: "apples" },
		{ name: "hud_show 0" },
		{ name: "hud_show 1" },
		{ name: "screenshot" }
	];
	
	/* On click of send button take whats in input and send it */
	function cmdAction(){
		var cmd = $('.cmd').val();
		
		cmdHistory.push(cmd);
		
		/* To keep the array from getting too large */
		//if(cmdHistory.lenght > 25) cmdHistory.splice(0,1);
		
		$('#console ul').append('<li>&gt; ' + cmd + '</li>');
		
		/* Send command to node.js server on websocket */
		// socket.emit('cmd',cmd);
		
		// Resets input field & history count
		$('.cmd').val('');
		count = cmdHistory.length-1;
	};
	
	$('.send').click(function() {
		cmdAction();
	});
	
	/* Arrow key up goes through input history */
	$('.cmd').keyup(function(e) {
	  if(e.keyCode == 38) {
	  	$('.cmd').val(cmdHistory[count]);
	  	count = count-1;
	  }else if(e.keyCode == 13) {
	  	cmdAction();
	  }
	  
	  /*
		}else{ search list of cmdAvailable and display in #cmdavailable }
	   */
	  
	  /* This is for the down in history
	  	 }else if(e.keyCode == 40) {
	  	count = count+2;
	  	$('.cmd').val(cmdHistory[count]);
	  */
	  // Insert down arrow for back
	});
	
	// $('#console ul').append('<li>Console: Response');
	/*
		socket.on()
	*/
	
	$(document).keyup(function(e) {
		if(e.keyCode == 192) {
			$('#cosnole-wrapper').slideToggle();
		}
	});
	
})();
