import {z} from "astro:schema";
export type Greneral = z.infer<ReturnType<typeof zGeneral>>;
export const zGeneral = ()=>
    z.object({
        fullName: z.string(),
        uni: z.string(),
        country: z.string(),
        mail: z.string(),
        description: z.string(),
        actionbutton: z.object({
            contact: z.string(),
            cv: z.string(),
      
        }),

    });

