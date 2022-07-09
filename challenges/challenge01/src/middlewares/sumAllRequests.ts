import { Request, Response, NextFunction } from "express";

let sum = 0;

export default function sumAllRequests(
	request: Request,
	response: Response,
	next: NextFunction
): void{
    sum++;
	sum === 1 ? console.log(sum + " Request") : console.log(sum + " Requests");
    return next();
}