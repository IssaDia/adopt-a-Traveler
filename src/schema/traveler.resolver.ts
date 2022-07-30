import { Resolver, Query } from "type-graphql";
import { Traveler } from "./traveler";
import travelers from "./travelers.json";

@Resolver(Traveler)
export class TravelerResolver {
  @Query(() => [Traveler])
  travelers(): Traveler[] {
    return travelers;
  }
}
