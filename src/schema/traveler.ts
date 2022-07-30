import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Traveler {
  @Field(() => ID)
  name: string | undefined;
  image: string | undefined;
  website: string | undefined;
}
