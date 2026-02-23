import z from "zod";

export const LoginDataSchema = z.object({
	username: z.string(),
	password: z.string(),
});
