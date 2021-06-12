import { IProject } from './project';

export function getProjectList(): [] {
	let projects = JSON.parse(localStorage.getItem('projects')) || [];

	return projects;
}

export function addProject(project: IProject): void {
	const projects: any[] = getProjectList();
	console.log(project);
	projects.push(project.projectDetails());

	localStorage.setItem('projects', JSON.stringify(projects));
}

export function removeProject() {
	const projects: any[] = getProjectList();

	projects.pop();

	localStorage.setItem('projects', JSON.stringify(projects));
}
