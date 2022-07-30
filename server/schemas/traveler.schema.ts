import { MinLength } from "class-validator";
import { ObjectType, Field, InputType } from "type-graphql";

@InputType()
export class UpdateTravelerInput {
  @MinLength(4, { message: "Name must be at least 10 4 long" })
  @Field(() => String, { nullable: true })
  name: string;

  @MinLength(4, { message: "Website must be at least 4 characters long" })
  @Field(() => String, { nullable: true })
  website: string;

  // @Field(() => String, { nullable: true })
  // category: string;

  @Field(() => String, { nullable: true })
  image: string;
}

@InputType()
export class TravelerInput {
  @MinLength(4, { message: "name must be at least 4 characters long" })
  @Field(() => String)
  name: string;

  @MinLength(4, {
    message: "website name must be at least 4 characters long",
  })
  @Field(() => String)
  website: string;

  // @Field(() => String)
  // category: string;

  @Field(() => String)
  image: string;
}

@InputType()
export class TravelerFilter {
  @Field(() => Number, { nullable: true, defaultValue: 1 })
  page: number;

  @Field(() => Number, { nullable: true, defaultValue: 10 })
  limit: number;
}

@ObjectType()
export class TravelerDataObj {
  @Field(() => String)
  readonly _id: string;

  @Field(() => String, { nullable: true })
  readonly id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  website: string;

  @Field(() => String)
  image: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

@ObjectType()
export class TravelerPopulatedData extends TravelerDataObj {
  // @Field(() => UserData)
  // user: UserData;
}

@ObjectType()
export class TravelerData extends TravelerDataObj {
  @Field(() => String)
  name: string;
}

@ObjectType()
export class TravelerResponse {
  @Field(() => String)
  status: string;

  @Field(() => TravelerData)
  traveler: TravelerData;
}

// @ObjectType()
// export class TravelerPopulatedResponse {
//   @Field(() => String)
//   status: string;

//   @Field(() => TravelerPopulatedData)
//   traveler: TravelerPopulatedData;
// }

@ObjectType()
export class TravelerListResponse {
  @Field(() => String)
  status: string;

  @Field(() => Number)
  results: number;

  @Field(() => [TravelerPopulatedData])
  travelers: TravelerPopulatedData[];
}

@ObjectType()
export class Traveler {
  @Field(() => String)
  name: string;

  @Field(() => String)
  image: string;

  @Field(() => String)
  website: string | undefined;
}
