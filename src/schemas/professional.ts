import { reference } from "astro:content";
import {z} from "astro:schema";
export type Professional = z.infer<ReturnType<typeof zProfessional>>;
export const zProfessional = ()=>
    z.object({
        company: z.string(),
        duration: z.string() ,
        title: z.string(),
        year: z.number(),
        tasks: z.array(z.string()),
        relatedSkills: z.array(reference("skills")),
    });

