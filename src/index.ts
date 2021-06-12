import * as app from './app/UI';
import './assets/style/style.css';

//Load app
window.addEventListener('DOMContentLoaded', function () {
	app.displayProjects();
	app.updateAddress();
	app.bindUIEvents();
});
