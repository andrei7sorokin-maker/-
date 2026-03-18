import { defineCollection, z } from "astro:content";

const home = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["ru", "ee", "en"]),
    heroEyebrow: z.string(),
    heroTitle: z.string(),
    heroLead: z.string(),
    heroPrimary: z.string(),
    heroSecondary: z.string(),
    storyTitle: z.string(),
    storyIntro: z.string(),
    storyPoints: z.array(z.string()),
    contactTitle: z.string(),
    contactLead: z.string()
  })
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["ru", "ee", "en"]),
    title: z.string(),
    intro: z.string(),
    cards: z.array(
      z.object({
        title: z.string(),
        text: z.string()
      })
    )
  })
});

export const collections = { home, services };
