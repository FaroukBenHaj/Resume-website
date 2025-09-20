import {z} from "astro:schema";
export type Greneral = z.infer<ReturnType<typeof zGeneral>>;
export const zGeneral = ()=>
    z.object({
        fullName: z.string(),
        jobName:z.string(),
        uni: z.string(),
        country: z.string(),
        mail: z.string(),
        description: z.string(),

    });

