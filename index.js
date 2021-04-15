const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		let buttonValue = e.target.getAttribute('data-app');

		location.href = `./${buttonValue}/index.html`;
	});
});
