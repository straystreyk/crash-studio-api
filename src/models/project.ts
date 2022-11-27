import { model, Schema, Document } from "mongoose";

interface IProject extends Document {
  name: string;
  image: string;
  description: string;
}

export const Project = model<IProject>(
  "Project",
  new Schema(
    {
      name: {
        type: Schema.Types.String,
        required: true,
      },
      image: {
        type: Schema.Types.String,
      },
      description: {
        type: Schema.Types.String,
      },
    },
    { timestamps: true }
  )
);
