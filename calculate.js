// 数字キー
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

// 記号キー
const plus = document.getElementById('plus');

const equal = document.getElementById('equal');

// 被演算子
let queue = [];

zero.onclick = function() {
	queue.push(0.0);
};
one.onclick = function() {
	queue.push(1.0);
};
two.onclick = function() {
	queue.push(2.0);
};
three.onclick = function() {
	queue.push(3.0);
};
four.onclick = function() {
	queue.push(4.0);
};
five.onclick = function() {
	queue.push(5.0);
};
six.onclick = function() {
	queue.push(6.0);
};
seven.onclick = function() {
	queue.push(7.0);
};
eight.onclick = function() {
	queue.push(8.0);
};
nine.onclick = function() {
	queue.push(9.0);
};

plus.onclick = function() {
	queue.push('plus')
};

equal.onclick = function() {
	let operand1 = [];
	let operator = '';
	let operand2 = [];
	let isFound = false;
	queue.forEach(function(value) {
		if(!isFound) {
			if (value != 'plus') {
				operand1.push(value);
			} else {
				isFound = true;
				operator = value;
			}
		} else {
			operand2.push(value);
		}
	});

	const digit1 = operand1.length;
	let x = 0.0;
	for (let i = 0; i < digit1; i++) {
		x += 10 ** (digit1 - 1 - i) * operand1[i];
	}

	const digit2 = operand2.length;
	let y = 0.0;
	for (let i = 0; i < digit2; i++) {
		y += 10 ** (digit2 - 1 - i) * operand2[i];
	}

	let result = 0.0;
	if(operator == 'plus') {
		result = x + y;
		console.log(result);
	}
	document.getElementById('result').innerHTML = result;
};
