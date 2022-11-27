import { Response, Request } from "express";

export const getAllProjects = async (
  req: Request<{}, {}, { filters: any }>,
  res: Response
) => {
  const filters = req.body.filters;

  res.status(200).send({ message: "Hi from API" });
};
