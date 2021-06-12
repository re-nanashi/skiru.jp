export interface IProject {
	title?: string;
	address?: string;
	projectDetails(): ProjectCard;
}

export interface ProjectCard {
	title: string;
	address: string;
}

export class Project implements IProject {
	title: string;
	address: string;

	constructor(title: string, address: string) {
		this.title = title;
		this.address = address;
	}

	projectDetails = (): ProjectCard => {
		return {
			title: this.title,
			address: this.address,
		};
	};
}
