import { Request, Response, NextFunction } from "express";
import { projects } from "../routes/projects.routes";

export default function idExist(
	request: Request,
	response: Response,
	next: NextFunction
): void{
    
    try {
        const {id} = request.params;

        const index = projects.findIndex(project => project.id === id);

        if (index === -1){
            throw new Error();
        }

        return next();
    } catch (error) {
        response.json({error: "This project doesn't exist"}).status(400);
    }

};
