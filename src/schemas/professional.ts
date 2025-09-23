import {z} from "astro:schema";
export type Professional = z.infer<ReturnType<typeof zProfessional>>;
export const zProfessional = ()=>
    z.object({
        company: z.string(),
        duration: z.string() ,
        title: z.string(),
        year: z.number(),
    });

