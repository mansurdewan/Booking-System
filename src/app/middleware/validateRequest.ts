import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { catchAsync } from "../utils/catchAsync";

// const validateRequest = (schema: AnyZodObject) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     await schema.parseAsync({
//       body: req.body,
//       cookies: req.cookies,
//     });
//     next();
//   };
// };
const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    await schema.parseAsync(req.body);
    // await schema.parseAsync({
    //   body: req.body,
    //   cookies: req.cookies,
    // });

    next();
  });
};

export default validateRequest;
