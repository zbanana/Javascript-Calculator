$(document).ready(function() {
	var calc = new Calculator();
	// flag so that we don't add a result to the history
	var isResult = false;

	$("#buttonClearAll").on("click", function() {
		$("#inputField").text("");
		$("#inputHistory").text("");
		calc.resetAll();
	});

	$("#buttonClearEntry").on("click", function() {
		$("#inputField").text("");
	});

	$("#buttonSum").on("click", function() {
		var num = parseInt($("#inputField").text());
		if (!isResult) {
			$("#inputHistory").append(num);	
		}
		isResult = false;
		$("#inputHistory").append("+");
		$("#inputField").text("");
		calc.setOperator("+");
		var result = calc.calculate(num);
	});

	$("#buttonSubtract").on("click", function() {
		var num = parseInt($("#inputField").text());
		if (!isResult) {
			$("#inputHistory").append(num);	
		}
		isResult = false;
		$("#inputHistory").append("-");
		$("#inputField").text("");
		calc.setOperator("-");
		var result = calc.calculate(num);
	});

	$("#buttonDivide").on("click", function() {
		var num = parseInt($("#inputField").text());
		if (!isResult) {
			$("#inputHistory").append(num);	
		}
		isResult = false;
		$("#inputHistory").append("/");
		$("#inputField").text("");
		calc.setOperator("/");
		var result = calc.calculate(num);
	});

	$("#buttonMultiply").on("click", function() {
		var num = parseInt($("#inputField").text());
		if (!isResult) {
			$("#inputHistory").append(num);	
		}
		isResult = false;
		$("#inputHistory").append("x");
		$("#inputField").text("");
		calc.setOperator("*");
		var result = calc.calculate(num);
	});

	$("#buttonEqual").on("click", function() {
		var num = parseInt($("#inputField").text());
		$("#inputHistory").append(num);
		$("#inputField").text(calc.calculate(num));
		calc.resetAll();
		isResult = true;
	});

	$("#buttonComma").on("click", function() {
		$("#inputField").append(".");
	});

	$("#button1").on("click", function() {
		$("#inputField").append("1");
	});

	$("#button2").on("click", function() {
		$("#inputField").append("2");
	});

	$("#button3").on("click", function() {
		$("#inputField").append("3");
	});

	$("#button4").on("click", function() {
		$("#inputField").append("4");
	});

	$("#button5").on("click", function() {
		$("#inputField").append("5");
	});

	$("#button6").on("click", function() {
		$("#inputField").append("6");
	});

	$("#button7").on("click", function() {
		$("#inputField").append("7");
	});

	$("#button8").on("click", function() {
		$("#inputField").append("8");
	});

	$("#button9").on("click", function() {
		$("#inputField").append("9");
	});

	$("#button0").on("click", function() {
		$("#inputField").append("0");
	});
});