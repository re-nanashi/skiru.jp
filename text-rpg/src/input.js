export default class Input {
	constructor(disabled = false, value = '', elementdId = 'input') {
		this.disabled = disabled;
		this.value = value;
		this.elementId = elementdId;
	}

	enable() {
		this.disabled = false;
		document.getElementById('input').disabled = false;
	}

	disable() {
		this.disabled = true;
		document.getElementById('input').disabled = true;
	}

	send(value) {
		value = value.toLowerCase();
		this.value = value;
	}
}
