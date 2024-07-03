// validation.ts

import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.number(),
  address: z.string(),
  role: z.enum(["admin", "user"]),
});
