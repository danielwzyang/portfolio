import { z, defineCollection } from "astro:content"

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.string(),
        desc: z.string(),
        link: z.array(z.string(), z.string())
    })
})

export const collections = {
    "projects": projectsCollection
}