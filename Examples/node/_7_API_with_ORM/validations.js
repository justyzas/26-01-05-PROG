import z from "zod";

export const CocktailCreationSchema = z.object({
	name: z.string(),
	recipe: z.string(),
	glass: z.enum(["Rocks", "Martini", "Bokalas", "Puodelis", "Highball glass"]),
});

export const CocktailUpdateSchema = z.object({
	name: z.string().optional(),
	recipe: z.string().optional(),
	glass: z
		.enum(["Rocks", "Martini", "Bokalas", "Puodelis", "Highball glass"])
		.optional(),
});
