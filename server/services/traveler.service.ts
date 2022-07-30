import { ValidationError } from "apollo-server-core";
import errorHandler from "../controllers/error.controller";
// import deserializeUser from "../middleware/deserializeUser";
import TravelerModel from "../models/traveler.model";
import { TravelerInput } from "../schemas/traveler.schema";
import { Context } from "../types/context";

export default class TravelerService {
  // Create a new traveler
  async createTraveler(input: Partial<TravelerInput>, { req, res }: Context) {
    try {
      //   const user = await deserializeUser(req, res);
      const traveler = await TravelerModel.create({ ...input });
      return {
        status: "success",
        traveler: {
          ...traveler.toJSON(),
          id: traveler?._id,
        },
      };
    } catch (error: any) {
      if (error.code === 11000)
        throw new ValidationError("Traveler with that name already exist");
      errorHandler(error);
    }
  }

  // Get a single traveler
  async getTraveler(id: string, { req, res }: Context) {
    try {
      //   await deserializeUser(req, res);
      const traveler = await TravelerModel.findById(id);

      if (!traveler)
        return new ValidationError("No traveler with that id exists");

      return {
        status: "success",
        traveler: {
          ...traveler,
          id: traveler?._id,
        },
      };
    } catch (error: any) {
      errorHandler(error);
    }
  }

  // Update a traveler
  async updateTraveler(
    id: string,
    input: Partial<TravelerInput>,
    { req, res }: Context
  ) {
    try {
      //   const user = await deserializeUser(req, res);
      const traveler = await TravelerModel.findByIdAndUpdate(
        id,
        { ...input, user: user?._id },
        {
          new: true,
          runValidators: true,
          lean: true,
        }
      );
      if (!traveler)
        return new ValidationError("No traveler with that id exists");
      return {
        status: "success",
        traveler: {
          ...traveler,
          id: traveler?._id,
        },
      };
    } catch (error: any) {
      errorHandler(error);
    }
  }

  // Get all travelers
  async getTravelers(input: TravelerFilter, { req, res }: Context) {
    try {
      //   const user = await deserializeUser(req, res);
      const travelersQuery = TravelerModel.find({ user: user?._id }).populate(
        "user"
      );

      // Pagination
      const page = input.page || 1;
      const limit = input.limit || 10;
      const skip = (page - 1) * limit;

      const travelers = await travelersQuery
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();
      return {
        status: "success",
        results: travelers.length,
        travelers,
      };
    } catch (error: any) {
      errorHandler(error);
    }
  }

  // Delete a traveler
  async deleteTraveler(id: string, { req, res }: Context) {
    try {
      //   await deserializeUser(req, res);
      const traveler = await TravelerModel.findByIdAndDelete(id);

      if (!traveler)
        return new ValidationError("No traveler with that id exists");

      return true;
    } catch (error: any) {
      errorHandler(error);
    }
  }
}
