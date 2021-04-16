const panels = document.querySelectorAll('.image');
const mainText = document.querySelector('h1');

// UI Class: Handle UI tasks
class UI {
	static removeActiveState(panels) {
		panels.forEach((panel) => {
			panel.classList.remove('active');
		});
	}

	static addActiveState(panel) {
		panel.classList.add('active');
	}

	static appendText(panel) {
		mainText.innerText = panel.getAttribute('data-text');
	}
}

//Event: Toggle card expansion
panels.forEach((panel) => {
	panel.addEventListener('click', function (e) {
		UI.removeActiveState(panels);
		UI.addActiveState(panel);
		UI.appendText(panel);
	});
});
