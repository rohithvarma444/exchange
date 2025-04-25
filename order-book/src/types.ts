import { z } from "zod";


export const OrderInputSchema = z.object({
    baseAsset : z.string(),
    quoteAsset: z.string(),
    price:   z.number(),
    quantity: z.number(),
    side :z.enum(['buy','sell']),
    type: z.enum(['market','limit']),
    kind: z.enum(['ioc']).optional()
})
