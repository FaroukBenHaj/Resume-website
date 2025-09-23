import { defineCollection } from "astro:content";
import  {glob} from "astro/loaders"
import { zGeneral } from "./schemas/general";
import { zProfessional } from "./schemas/professional";

export const collections= {
    generals: defineCollection({
        loader : glob({ pattern:"**/*.mdx" , base:"./src/content/general"}),
        schema: zGeneral,
    }),
    professional: defineCollection({
        loader: glob({pattern:"**/*.mdx" , base:"./src/content/professional"}),
        schema: zProfessional,
    })
}
