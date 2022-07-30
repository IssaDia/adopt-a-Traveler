import { NextApiRequest, NextApiResponse } from "next";
// import { Traveler } from "../models/traveler.model";

export type Context = {
  req: NextApiRequest;
  res: NextApiResponse;
  // deserializeUser: (
  //   req: NextApiRequest,
  //   res: NextApiResponse
  // ) => Promise<Traveler | undefined>;
};
