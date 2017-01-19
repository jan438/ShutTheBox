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
				case 0: if (leverdown[0]) upMove1();
					break;
				case 1: if (leverdown[1]) upMove2();
					break;
				case 2: if (leverdown[2]) upMove3();
					break;
				case 3: if (leverdown[3]) upMove4();
					break;
				case 4: if (leverdown[4]) upMove5();
					break;
				case 5: if (leverdown[5]) upMove6();
					break;
				case 6: if (leverdown[6]) upMove7();
					break;
				case 7: if (leverdown[7]) upMove8();
					break;
				case 8: if (leverdown[8]) upMove9();
					break;
			}
			leverdown[i] = false;
		}
	}
	levertotal = 0;
}
function downMove1() {
	if (!leverdown[0]) {
		var elem = document.getElementById("lever1");
		$("#lever1").html('1');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[0] = true;
				levertotal = levertotal + 1;
				$("#lever1").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function downMove2() {
	if (!leverdown[1]) {
		var elem = document.getElementById("lever2");
		$("#lever2").html('2');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[1] = true;
				levertotal = levertotal + 2;
				$("#lever2").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function downMove3() {
	if (!leverdown[2]) {
		var elem = document.getElementById("lever3");
		$("#lever3").html('3');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[2] = true;
				levertotal = levertotal + 3;
				$("#lever3").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function downMove4() {
	if (!leverdown[3]) {
		var elem = document.getElementById("lever4");
		$("#lever4").html('4');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[3] = true;
				levertotal = levertotal + 4;
				$("#lever4").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function downMove5() {
	if (!leverdown[4]) {
		var elem = document.getElementById("lever5");
		$("#lever5").html('5');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[4] = true;
				levertotal = levertotal + 5;
				$("#lever5").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function downMove6() {
	if (!leverdown[5]) {
		var elem = document.getElementById("lever6");
		$("#lever6").html('6');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[5] = true;
				levertotal = levertotal + 6;
				$("#lever6").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function downMove7() {
	if (!leverdown[6]) {
		var elem = document.getElementById("lever7");
		$("#lever7").html('7');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[6] = true;
				levertotal = levertotal + 7;
				$("#lever7").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function downMove8() {
	if (!leverdown[7]) {
		var elem = document.getElementById("lever8");
		$("#lever8").html('8');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[7] = true;
				levertotal = levertotal + 8;
				$("#lever8").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function downMove9() {
	if (!leverdown[8]) {
		var elem = document.getElementById("lever9");
		$("#lever9").html('9');
		var pos = 50;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 100) {
				clearInterval(id);
				leverdown[8] = true;
				levertotal = levertotal + 9;
				$("#lever9").html('');
				if (levertotal === dicetotal) fixlevers();
				if (levertotal > dicetotal) clearlevers();
			}
			else {
				pos++;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove1() {
	if (leverdown[0]) {
		var elem = document.getElementById("lever1");
		$("#lever1").html('1');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[0] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove2() {
	if (leverdown[1]) {
		var elem = document.getElementById("lever2");
		$("#lever2").html('2');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[1] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove3() {
	if (leverdown[2]) {
		var elem = document.getElementById("lever3");
		$("#lever3").html('3');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[2] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove4() {
	if (leverdown[3]) {
		var elem = document.getElementById("lever4");
		$("#lever4").html('4');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[3] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove5() {
	if (leverdown[4]) {
		var elem = document.getElementById("lever5");
		$("#lever5").html('5');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[4] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove6() {
	if (leverdown[5]) {
		var elem = document.getElementById("lever6");
		$("#lever6").html('6');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[5] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove7() {
	if (leverdown[6]) {
		var elem = document.getElementById("lever7");
		$("#lever7").html('7');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[6] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove8() {
	if (leverdown[7]) {
		var elem = document.getElementById("lever8");
		$("#lever8").html('8');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[7] = false;
			}
			else {
				pos--;
				elem.style.top = pos + 'px';
			}
		}
	}
}
function upMove9() {
	if (leverdown[8]) {
		var elem = document.getElementById("lever9");
		$("#lever9").html('9');
		var pos = 100;
		var id = setInterval(frame, 10);
		function frame() {
			if (pos === 50) {
				clearInterval(id);
				leverdown[8] = false;
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
