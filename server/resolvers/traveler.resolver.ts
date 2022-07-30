import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  TravelerFilter,
  TravelerInput,
  TravelerListResponse,
  TravelerPopulatedResponse,
  TravelerResponse,
  UpdateTravelerInput,
} from "../schemas/traveler.schema";
import TravelerService from "../services/traveler.service";
import type { Context } from "../types/context";

@Resolver()
export default class TravelerResolver {
  constructor(private travelerService: TravelerService) {
    this.travelerService = new TravelerService();
  }

  @Mutation(() => TravelerResponse)
  async createTraveler(
    @Arg("input") input: TravelerInput,
    @Ctx() ctx: Context
  ) {
    return this.travelerService.createTraveler(input, ctx);
  }

  // @Query(() => TravelerPopulatedResponse)
  // async getTraveler(@Arg("id") id: string, @Ctx() ctx: Context) {
  //   return this.travelerService.getTraveler(id, ctx);
  // }

  @Mutation(() => TravelerResponse)
  async updateTraveler(
    @Arg("id") id: string,
    @Arg("input") input: UpdateTravelerInput,
    @Ctx() ctx: Context
  ) {
    return this.travelerService.updateTraveler(id, input, ctx);
  }

  @Query(() => TravelerListResponse)
  async getTravelers(
    @Arg("input", { nullable: true }) input: TravelerFilter,
    @Ctx() ctx: Context
  ) {
    return this.travelerService.getTravelers(input, ctx);
  }

  @Mutation(() => Boolean)
  async deleteTraveler(@Arg("id") id: string, @Ctx() ctx: Context) {
    return this.travelerService.deleteTraveler(id, ctx);
  }
}
