// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Import the glob loader
import { glob } from "astro/loaders";

// Define a `loader` and `schema` for each collection
const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      hero: image(),
      desktop: image(),
      mobile: image(),
      summary: z.string(),
      ranking: z.number(),
      tags: z.array(z.string()),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  portfolio: portfolioCollection,
};
