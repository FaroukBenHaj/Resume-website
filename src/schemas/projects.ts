import { reference } from "astro:content";
import {z} from "astro:schema";
export type Projects = z.infer<ReturnType<typeof zProjects>>;
export const zProjects = ()=>
    z.object({
        name: z.string(),
        year: z.number() ,
        description: z.string(),
        type: z.enum(['academic','personal']),
        webType: z.enum(['Full stack','Static frontend','desktop','mobile']),
        relatedSkills: z.array(reference("skills")),
        githublink: z.string().url().optional(),
        tutor: z.string().optional(),
    });

