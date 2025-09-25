import {z} from "astro:schema";
export type Greneral = z.infer<ReturnType<typeof zGeneral>>;
export const zGeneral = ()=>
    z.object({
        fullName: z.string(),
        description: z.string(),
        tag: z.string(),
        mail: z.string(),
        header: z.string(),
        actionbutton: z.object({
            contact: z.string(),
            cv: z.string(),
        }),
        media: z.object({
            img: z.string(),
            alt: z.string(),
        })
    });

