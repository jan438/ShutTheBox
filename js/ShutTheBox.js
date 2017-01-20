var indexoftotal;
var setnumbers;
var leverdown = [false,false,false,false,false,false,false,false,false];
var leverfixed = [false,false,false,false,false,false,false,false,false];
var setindex = [2,3,4,5,6,7,8,9,10,11,12];
var levertotal = 0;
var dicetotal = 0;
var settochoose = [[[2]],[[3],[2,1]],[[4],[3,1]],[[5],[4,1],[3,2]],[[6],[5,1],[4,2]],[[7],[6,1],[5,2],[4,3]],[[8],[7,1],[6,2],[5,3],[5,2,1],[4,3,1]],[[9],[8,1],[7,2],[6,2,1],[5,4],[5,3,1]],[[9,1],[8,2],[7,3],[7,2,1],[6,4],[6,3,1],[5,4,1],[5,3,2]],[[9,2],[8,3],[8,2,1],[7,4],[7,3,1],[6,5],[6,4,1],[6,3,2]],[[9,3],[9,2,1],[8,4],[8,3,1],[7,5],[7,4,1],[7,3,2],[6,5,1],[6,4,2],[5,4,3]]];
var ShutTheBox = {};
ShutTheBox.info = {sum: 0, result_string: "", results_id: "__results"};
ShutTheBox.callback = function(total, info, results) {
	dicetotal = total;
	levertotal = 0;
	$("#dicebutton").prop('disabled', true);
	$("#button1").prop('disabled', false);
	$("#button2").prop('disabled', false);
	$("#button3").prop('disabled', false);
	$("#button4").prop('disabled', false);
	$("#button5").prop('disabled', false);
	$("#button6").prop('disabled', false);
	$("#button7").prop('disabled', false);
	$("#button8").prop('disabled', false);
	$("#button9").prop('disabled', false);
	info.result_string = "(" + results[0] + "," + results[1] + ")";
	indexoftotal = setindex.indexOf(total);
	setnumbers = settochoose[indexoftotal];
	for (var i = 0; i < setnumbers.length; i++) {
		var sum = 0;
		for (var j = 0; j < setnumbers[i].length; j++) {
			var levernumber = setnumbers[i][j];
			switch (levernumber) {
				case 1: if (!leverdown[0]) sum = sum + levernumber;
					break;
				case 2: if (!leverdown[1]) sum = sum + levernumber;
					break;
				case 3: if (!leverdown[2]) sum = sum + levernumber;
					break;
				case 4: if (!leverdown[3]) sum = sum + levernumber;
					break;
				case 5: if (!leverdown[4]) sum = sum + levernumber;
					break;
				case 6: if (!leverdown[5]) sum = sum + levernumber;
					break;
				case 7: if (!leverdown[6]) sum = sum + levernumber;
					break;
				case 8: if (!leverdown[7]) sum = sum + levernumber;
					break;
				case 9: if (!leverdown[8]) sum = sum + levernumber;
					break;
			}
		}
		if (sum === total) break;
	}
}
function checklevers() {
	if (levertotal === dicetotal) fixlevers();
	if (levertotal > dicetotal) clearlevers();
}
function fixlevers() {
	swal({
		title: "<h4 id='swalsumequal'>The sum of the levers is equal to the dice total!</h4>",
		imageUrl: "die-6.gif",
		timer: 30000,
		showConfirmButton: true,
		html: true
	});
	for (var i = 0; i < leverdown.length; i++) {
		if (leverdown[i]) {
			leverfixed[i] = leverdown[i];
		}
	}
	$("#dicebutton").prop('disabled', false);
	$("#button1").prop('disabled', true);
	$("#button2").prop('disabled', true);
	$("#button3").prop('disabled', true);
	$("#button4").prop('disabled', true);
	$("#button5").prop('disabled', true);
	$("#button6").prop('disabled', true);
	$("#button7").prop('disabled', true);
	$("#button8").prop('disabled', true);
	$("#button9").prop('disabled', true);
}
function clearlevers() {
	swal({
		title: "<h4 id='swalsumgreater'>The sum of the levers is greater than the dice total!</h4>",
		imageUrl: "die-6.gif",
		timer: 30000,
		showConfirmButton: true,
		html: true
	});
	for (var i = 0; i < leverdown.length; i++) {
		if (!leverfixed[i]) {
			switch (i) {
				case 0: if (leverdown[0]) upMove(1);
					break;
				case 1: if (leverdown[1]) upMove(2);
					break;
				case 2: if (leverdown[2]) upMove(3);
					break;
				case 3: if (leverdown[3]) upMove(4);
					break;
				case 4: if (leverdown[4]) upMove(5);
					break;
				case 5: if (leverdown[5]) upMove(6);
					break;
				case 6: if (leverdown[6]) upMove(7);
					break;
				case 7: if (leverdown[7]) upMove(8);
					break;
				case 8: if (leverdown[8]) upMove(9);
					break;
			}
			leverdown[i] = false;
		}
	}
	levertotal = 0;
}
function downMove(lever) {
	if (!leverdown[lever - 1]) {
		var elem = document.getElementById("lever" + lever);
		$("#lever" + lever).html(lever);
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[lever - 1] = true;
				levertotal = levertotal + lever;
				$("#lever" + lever).html('');
				checklevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove(lever) {
	if (leverdown[lever - 1]) {
		var elem = document.getElementById("lever" + lever);
		$("#lever" + lever).html(lever);
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[lever - 1] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
$(function() {
	$('#s1').line(0,0,50,50, {color:"pink"});
	$('#s2').line(0,50,50,0, {color:"red"});
	$('#example').line(20,45,200,400, {color:"blue", style: "dashed"});
	$('#example').line(0, 0, 550, 0, {color:"#0066ff", stroke:5, zindex:1001});
	$('#example').line(0, 200, 550, 200, {color:"#0066ff", stroke:5, zindex:1001});
	$('#example').line(0, 0, 0, 200, {color:"#0066ff", stroke:5, zindex:1001});
	$('#example').line(550, 0, 550, 200, {color:"#0066ff", stroke:5, zindex:1001});
});
D6.dice(2, ShutTheBox.callback, ShutTheBox.info);
