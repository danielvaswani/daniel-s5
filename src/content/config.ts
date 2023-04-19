import { defineCollection, z } from 'astro:content';

export const collections = {
	sprint: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	'learning-outcome': defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			LO: z.string(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	'research-question': defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			question: z.string(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
