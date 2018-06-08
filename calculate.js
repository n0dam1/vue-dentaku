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
	let operand1 = queue[0];
	let operator = queue[1];
	let operand2 = queue[2];
	// TODO: 足し算決め打ちなので演算子ごとに変更できるようにする
	let result = operand1 + operand2;
	document.getElementById('result').innerHTML = result;
};
