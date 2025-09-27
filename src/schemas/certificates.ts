import {z} from "astro:schema";
export type Certificates = z.infer<ReturnType<typeof zCertificates>>;
export const zCertificates = ()=>
    z.object({
        name: z.string(),
        year: z.number(),
        type: z.string(),
        level: z.array(z.string()).optional(),
        project:z.string().optional(),
        origin: z.string().optional(),
    });

