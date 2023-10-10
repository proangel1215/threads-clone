import * as z from "zod";

export const userValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Minimum is 3 characters" })
    .max(30, { message: "Maximum is 30 characters" }),
  username: z
    .string()
    .min(3, { message: "Minimum is 3 characters" })
    .max(30, { message: "Maximum is 30 characters" }),
  bio: z
    .string()
    .min(3, { message: "Minimum is 3 characters" })
    .max(30, { message: "Maximum is 1000 characters" }),
});
