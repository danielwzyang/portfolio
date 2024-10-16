import { z, defineCollection } from "astro:content"

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.string(),
        desc: z.string(),
        link: z.string().optional(),
        github: z.string().optional(),
        posted: z.string()
    })
})

export const collections = {
    "projects": projectsCollection
}