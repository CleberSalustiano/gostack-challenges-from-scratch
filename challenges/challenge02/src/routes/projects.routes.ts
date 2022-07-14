import { Router } from "express";

import { Project } from "../models/Project";
import idExist from "../middlewares/idExist";

const projectsRouter = Router();

export const projects: Project[] = [];

projectsRouter.get("/", (request, response) => {
	response.json(projects);
});

projectsRouter.post("/", (request, response) => {
	const { id, title, tasks }: Project = request.body;

	const found = projects.find((project) => project.id === id);

	if (found) {
		return response.json({ error: "This id's Project exist" }).status(400);
	}

	projects.push({ id, title, tasks });

	response.json(projects);
});

projectsRouter.put("/:id", idExist, (request, response) => {
	const { title }: Project = request.body;
	const { id } = request.params;

	const index = projects.findIndex((project) => project.id === id);

	const [{ tasks }] = projects.splice(index, 1);

	const project = { id, title, tasks };
	projects.push(project);

	response.json(projects);
});

projectsRouter.delete("/:id", idExist, (request, response) => {
	const { id } = request.params;

	const index = projects.findIndex((project) => project.id === id);
	projects.splice(index, 1);

	response.json().status(204);
});

projectsRouter.post("/:id/tasks", idExist, (request, response) => {
	const { id } = request.params;
    const { task } = request.body;

    const index = projects.findIndex(project => project.id === id);
    projects[index].tasks.push(task);

    response.json(projects[index]);
});

export default projectsRouter;
