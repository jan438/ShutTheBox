var indexoftotal;
var setnumbers;
var leverdown = [false,false,false,false,false,false,false,false,false];
var setindex = [2,3,4,5,6,7,8,9,10,11,12];
var settochoose = [[[2]],[[3],[2,1]],[[4],[3,1]],[[5],[4,1],[3,2]],[[6],[5,1],[4,2]],[[7],[6,1],[5,2],[4,3]],[[8],[7,1],[6,2],[5,3],[5,2,1],[4,3,1]],[[9],[8,1],[7,2],[6,2,1],[5,4],[5,3,1]],[[9,1],[8,2],[7,3],[7,2,1],[6,4],[6,3,1],[5,4,1],[5,3,2]],[[9,2],[8,3],[8,2,1],[7,4],[7,3,1],[6,5],[6,4,1],[6,3,2]],[[9,3],[9,2,1],[8,4],[8,3,1],[7,5],[7,4,1],[7,3,2],[6,5,1],[6,4,2],[5,4,3]]];
var ShutTheBox = {};
ShutTheBox.info = {sum: 0, result_string: "", results_id: "__results"};
ShutTheBox.callback = function(total, info, results) {
	info.result_string = "(" + results[0] + "," + results[1] + ")";
	indexoftotal = setindex.indexOf(total);
	setnumbers = settochoose[indexoftotal];
	for (var i = 0; i < setnumbers.length; i++) {
		var sum = 0;
		for (var j = 0; j < setnumbers[i].length; j++) {
			sum = sum + setnumbers[i][j];
		}
	}
}
function downMove1() {
	var elem = document.getElementById("lever1");
	$("#lever1").html('1');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[0] = true;
			$("#lever1").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function downMove2() {
	var elem = document.getElementById("lever2");
	$("#lever2").html('2');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[1] = true;
			$("#lever2").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function downMove3() {
	var elem = document.getElementById("lever3");
	$("#lever3").html('3');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[2] = true;
			$("#lever3").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function downMove4() {
	var elem = document.getElementById("lever4");
	$("#lever4").html('4');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[3] = true;
			$("#lever4").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function downMove5() {
	var elem = document.getElementById("lever5");
	$("#lever5").html('5');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[4] = true;
			$("#lever5").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function downMove6() {
	var elem = document.getElementById("lever6");
	$("#lever6").html('6');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[5] = true;
			$("#lever6").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function downMove7() {
	var elem = document.getElementById("lever7");
	$("#lever7").html('7');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[6] = true;
			$("#lever7").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function downMove8() {
	var elem = document.getElementById("lever8");
	$("#lever8").html('8');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[7] = true;
			$("#lever8").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function downMove9() {
	var elem = document.getElementById("lever9");
	$("#lever9").html('9');
	var pos = 50;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 100) {
			clearInterval(id);
			leverdown[8] = true;
			$("#lever9").html('');
		}
		else {
			pos++;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove1() {
	var elem = document.getElementById("lever1");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove2() {
	var elem = document.getElementById("lever2");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove3() {
	var elem = document.getElementById("lever3");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove4() {
	var elem = document.getElementById("lever4");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove5() {
	var elem = document.getElementById("lever5");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove6() {
	var elem = document.getElementById("lever6");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove7() {
	var elem = document.getElementById("lever7");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove8() {
	var elem = document.getElementById("lever8");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
		}
	}
}
function upMove9() {
	var elem = document.getElementById("lever9");
	var pos = 100;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos === 50) {
			clearInterval(id);
		}
		else {
			pos--;
			elem.style.top = pos + 'px';
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
