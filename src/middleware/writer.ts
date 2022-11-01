import { Request, Response } from "express";

export const writer = (req: Request, res: Response) => {
    if(req.body.json) res.json(req.body.json);
    res.end();
}