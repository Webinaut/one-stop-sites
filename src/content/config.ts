// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const portfolioCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      hero: image(),
      ranking: z.number(),
      tags: z.array(z.string()),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  portfolio: portfolioCollection,
};
