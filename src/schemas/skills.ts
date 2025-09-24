import {z} from "astro:schema";
export type Skills = z.infer<ReturnType<typeof zSkills>>;
export const zSkills = ()=>
    z.object({
     name: z.string(),
     media: z.object({
        logo: z.string(),
        alt: z.string(),
     }),
    });

