import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		affiliateLink: z.string().url().optional(),
		category: z.string(),
		recommended: z.boolean().default(false),
		rating: z.number().min(0).max(5).default(5),
	}),
});

export const collections = { blog };
