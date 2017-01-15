$(document).ready(function(){
	var machine4 = $("#casino1").slotMachine({
		active	: 0,
		delay	: 500
	});

	var machine5 = $("#casino2").slotMachine({
		active	: 1,
		delay	: 500
	});

	machine6 = $("#casino3").slotMachine({
		active	: 2,
		delay	: 500
	});

	$("#slotMachineButtonShuffle").click(function(){
		machine4.shuffle();
		machine5.shuffle();
		machine6.shuffle();
	});

	$("#slotMachineButtonStop").click(function(){
            machine4.stop();
            machine5.stop();
            machine6.stop();
	});
});
