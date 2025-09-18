import { defineCollection } from "astro:content";
import  {glob} from "astro/loaders"
import { zGeneral } from "./schemas/general";

export const collections= {
    generals: defineCollection({
        loader : glob({ pattern:"**/*.mdx" , base:"./src/content/general"}),
        schema: zGeneral,
    })
}
