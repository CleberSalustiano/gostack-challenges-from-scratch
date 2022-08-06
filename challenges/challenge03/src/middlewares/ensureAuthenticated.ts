import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "../config/auth";

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): void {
    const token = request.headers.authorization;

    if (!token) {
        response.status(403).json({error: "JWT token is missing"})
        return
    }

    // const [, token] = authHeader.split(" ");

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub,
        };
        return next();
    } catch {
        response.status(403).json({error: "JWT token is missing"})
        return
    }
}
