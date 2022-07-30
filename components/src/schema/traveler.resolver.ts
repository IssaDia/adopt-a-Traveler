import { Resolver, Query, Arg } from "type-graphql";
import { Traveler } from "./traveler";
import travelers from "./travelers.json";

@Resolver(Traveler)
export class TravelerResolver {
  @Query(() => [Traveler], { nullable: true })
  traveler(@Arg("name", () => String) name: string): Traveler | undefined {
    const traveler = travelers.find((traveler) => traveler.name === name);
    if (traveler === undefined) {
      throw new Error("Traveler not found");
    }
    return traveler;
  }

  @Query(() => [Traveler])
  travelers(): Traveler[] {
    return travelers;
  }
}
