import {
  getModelForClass,
  ModelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Traveler {
  readonly _id: string;

  @prop({ required: true, unique: true })
  name: string;

  @prop({ default: "default.jpeg" })
  image: string;

  @prop({ required: true })
  website: string;

  // @prop({ required: true, ref: () => User })
  // user: Ref<User>;
}

const TravelerModel = getModelForClass<typeof Traveler>(Traveler);
export default TravelerModel;
