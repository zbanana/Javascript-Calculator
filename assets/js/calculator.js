function Calculator() {
	var result = 0;
	var operator;

	this.getOperator = function() {
		return operator;
	};

	this.setOperator = function(op) {
		operator = op;
	};

	this.sum = function(num) {
		return result += num;
	};

	this.subtract = function(num) {
		return result -= num;
	};

	this.divide = function(num) {		
		return result /= num;
	};

	this.multiply = function(num) {
		return result *= num
	};

	this.calculate = function(num) {
		if (result === 0) {
			return result = num;
		};
		console.log("RESULT: " + result);
		console.log("NUM: " + num);
		console.log("OPERATOR: " + operator);
		switch(operator) {
			case "*":
				return this.multiply(num);
				break;
			case "/":
				return this.divide(num);
				break;
			case "+":
				return this.sum(num);
				break;
			case "-":
				return this.subtract(num);
		}
	}

	this.resetAll = function() {
		result = 0;
		operator = undefined;
	};


}