import { IProject, Project, ProjectCard } from './project';
import * as Storage from './storage';

export function displayProjects(): void {
	const projects: any[] = Storage.getProjectList();

	projects.forEach((project) => displayProjectToView(project));
}

function displayProjectToView(project: ProjectCard): void {
	console.log(project);
	const projectList = <HTMLElement>document.querySelector('.button-container');
	const projectCard = <HTMLDivElement>document.createElement('div');

	projectCard.classList.add('white-box');
	projectCard.innerHTML = `
	    <p>${project.title}</p>
	    <button data-app="${project.address}">行く</button>
	`;

	projectList.append(projectCard);
}

function removeProjectFromView(): void {
	const lastChild: ChildNode =
		document.querySelector('.button-container').lastElementChild;

	lastChild.remove();
}

function clearFields(): void {
	(<HTMLInputElement>document.querySelector('#title')).value = '';
	(<HTMLInputElement>document.querySelector('#address')).value = '';
	(<HTMLInputElement>document.querySelector('#password')).value = '';
}

function togglePopup(): void {
	const popup: HTMLElement = document.querySelector('#popup-container');

	popup.classList.toggle('active');
}

function removePopup(): void {
	const popup: HTMLElement = document.querySelector('#popup-container');

	popup.classList.remove('active');
}

function visitSite(address: string): void {
	location.href = `./${address}/index.html`;
}

export function updateAddress(): void {
	const buttons: NodeListOf<Element> = document.querySelectorAll('[data-app]');

	buttons.forEach((button: Element) => {
		button.addEventListener('click', (e: Event) => {
			const buttonTarget: Element = <HTMLElement>e.target;
			visitSite(buttonTarget.getAttribute('data-app'));
		});
	});
}

export function bindUIEvents() {
	const addButton: HTMLElement = document.querySelector('#add');
	const removeButton: HTMLElement = document.querySelector('#delete');
	const form: HTMLInputElement = document.querySelector('#project-form');

	form.addEventListener('submit', (e: Event) => {
		e.preventDefault();

		//Get form values
		const title: string = (<HTMLInputElement>document.querySelector('#title'))
			.value;
		const address: string = (<HTMLInputElement>(
			document.querySelector('#address')
		)).value;
		const password: String = (<HTMLInputElement>(
			document.querySelector('#password')
		)).value;

		//Validate
		if (title === '' || address === '' || password !== '@!1234') {
			return alert('残念');
		}

		const project: IProject = new Project(title, address);

		//Display to UI
		const projectCard = project.projectDetails();
		displayProjectToView(projectCard);

		//Add project to storage
		Storage.addProject(project);

		//Clear popup/value
		clearFields();
		removePopup();

		//Update added list
		updateAddress();
	});

	//Event: toggle popup
	addButton.addEventListener('click', togglePopup);

	//Event: remove a project
	removeButton.addEventListener('click', function () {
		removeProjectFromView();
		Storage.removeProject();
	});
}
