import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validate = 
    (schema: AnyZodObject) => 
        async (req: Request, res: Response, next: NextFunction) => {
            try {

                await schema.parseAsync({
                    body: req.body,
                    query: req.query,
                    params: req.params
                })
                return next();
            }
            catch(err: any) {
                const errMessage = JSON.parse(err.message);
                console.log(err);
                return res.status(400).json({
                    status: "Bad Request!",
                    message: errMessage[0].message
                })
            }
        };

        export default validate;