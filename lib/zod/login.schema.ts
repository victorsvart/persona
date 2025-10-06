import z from "zod";
import { formRequired } from "../utils";

export const loginSchema = z.object({
  username: z.string().min(1, formRequired("Username")),
  password: z.string().min(1, formRequired("Password")),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
