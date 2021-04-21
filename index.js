//Project Class: Represents a Class
class Project {
	constructor(title, address) {
		this.title = title;
		this.address = address;
	}
}

// UI Class: Handles UI tasks
class UI {
	static displayProjects() {
		const projects = Storage.getProjectList();

		projects.forEach((project) => UI.addProject(project));
	}

	static renderUpdate() {
		const buttons = document.querySelectorAll('[data-app]');

		buttons.forEach((button) => {
			button.addEventListener('click', function (e) {
				UI.visitSite(e.target.getAttribute('data-app'));
			});
		});
	}

	static addProject(project) {
		const projectList = document.querySelector('.button-container');

		const projectCard = document.createElement('div');

		projectCard.classList.add('white-box');
		projectCard.innerHTML = `
		<p>${project.title}</p>
		<button data-app="${project.address}">行く</button>
		`;

		projectList.append(projectCard);
	}

	static removeProject() {
		const lastChild = document.querySelector('.button-container')
			.lastElementChild;

		lastChild.remove();
	}

	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#address').value = '';
		document.querySelector('#password').value = '';
	}

	static togglePopup() {
		const popup = document.querySelector('#popup-container');
		popup.classList.toggle('active');
	}

	static removePopup() {
		document.querySelector('#popup-container').classList.remove('active');
	}

	static visitSite(address) {
		location.href = `./${address}/index.html`;
	}
}

//Storage Class: Handles Storage
class Storage {
	static getProjectList() {
		let projects;
		if (localStorage.getItem('projects') === null) {
			projects = [];
		} else {
			projects = JSON.parse(localStorage.getItem('projects'));
		}

		return projects;
	}

	static addProject(project) {
		const projects = Storage.getProjectList();
		projects.push(project);

		localStorage.setItem('projects', JSON.stringify(projects));
	}

	static removeProject() {
		const projects = Storage.getProjectList();
		projects.pop();

		localStorage.setItem('projects', JSON.stringify(projects));
	}
}

//Displays the stored project cards
window.addEventListener('DOMContentLoaded', function () {
	UI.displayProjects();
	UI.renderUpdate();
});

const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#delete');

//Adds a new project directory
document.querySelector('#project-form').addEventListener('submit', (e) => {
	e.preventDefault();

	// Get form values
	const title = document.querySelector('#title').value;
	const address = document.querySelector('#address').value;
	const password = document.querySelector('#password').value;

	// Validate
	if (title === '' || address === '' || password !== '@!1234') {
		alert('残念');
	} else {
		// Instantiate project
		const project = new Project(title, address);

		// Add Project to UI
		UI.addProject(project);

		// Add Project to storage
		Storage.addProject(project);

		UI.clearFields();

		UI.removePopup();
		// Update added list
		UI.renderUpdate();
	}
});

// Event: Toggles Popup
addButton.addEventListener('click', function () {
	UI.togglePopup();
});

// Event: Remove a Project
removeButton.addEventListener('click', function () {
	UI.removeProject();
	Storage.removeProject();
});
