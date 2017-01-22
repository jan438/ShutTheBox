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
	$("#lever1").on('click', function() {
		downMove(1);
	});
	$("#lever2").on('click', function() {
		downMove(2);
	});
	$("#lever3").on('click', function() {
		downMove(3);
	});
	$("#lever4").on('click', function() {
		downMove(4);
	});
	$("#lever5").on('click', function() {
		downMove(5);
	});
	$("#lever6").on('click', function() {
		downMove(6);
	});
	$("#lever7").on('click', function() {
		downMove(7);
	});
	$("#lever8").on('click', function() {
		downMove(8);
	});
	$("#lever9").on('click', function() {
		downMove(9);
	});
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
	else {
		var result = possibilitycheck();
		if (result) {
			if (levertotal > dicetotal) clearlevers();
		}
	}
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
	$("#lever1").off('click');
	$("#lever2").off('click');
	$("#lever3").off('click');
	$("#lever4").off('click');
	$("#lever5").off('click');
	$("#lever6").off('click');
	$("#lever7").off('click');
	$("#lever8").off('click');
	$("#lever9").off('click');
}
function possibilitycheck() {
	var result = true;
	indexoftotal = setindex.indexOf(dicetotal);
	setnumbers = settochoose[indexoftotal];
	for (var i = 0; i < setnumbers.length; i++) {
		var sum = 0;
		for (var j = 0; j < setnumbers[i].length; j++) {
			var levernumber = setnumbers[i][j];
			switch (levernumber) {
				case 1: if (!leverfixed[0]) sum = sum + levernumber;
					break;
				case 2: if (!leverfixed[1]) sum = sum + levernumber;
					break;
				case 3: if (!leverfixed[2]) sum = sum + levernumber;
					break;
				case 4: if (!leverfixed[3]) sum = sum + levernumber;
					break;
				case 5: if (!leverfixed[4]) sum = sum + levernumber;
					break;
				case 6: if (!leverfixed[5]) sum = sum + levernumber;
					break;
				case 7: if (!leverfixed[6]) sum = sum + levernumber;
					break;
				case 8: if (!leverfixed[7]) sum = sum + levernumber;
					break;
				case 9: if (!leverfixed[8]) sum = sum + levernumber;
					break;
			}
		}
		if (sum === dicetotal) return result;
	}
	result = false;
	swal({
		title: "<h4 id='swalnopossibilities'>There are no possibilties!</h4>",
		imageUrl: "die-6.gif",
		timer: 30000,
		showConfirmButton: true,
		html: true
	});
	for (var i = 0; i < leverdown.length; i++) {
		if (!leverfixed[i]) {
			if (leverdown[i]) upMove(i + 1);
			leverdown[i] = false;
		}
	}
	levertotal = 0;
	return result;
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
			if (leverdown[i]) upMove(i + 1);
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
