function calc(cmd) {
	if(cmd == "=") {
		document.result.text.value = eval(document.result.text.value)
	} else {
		document.result.text.value += cmd;
	}
}
