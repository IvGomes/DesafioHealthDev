import { z } from "zod";

export const passwordSchema = z.object({
    password: z.string().min(6),
    repeatPassword: z.string().min(6),
}).superRefine(({password, repeatPassword}, ctx) => {
    if( password !== repeatPassword) {
        ctx.addIssue({
            code: "custom",
            message: "A senha não é igual..."
        })
    }
})