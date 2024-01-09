import {z} from "zod";

export const DeliverySchema = z.object({
    coins: z.number(),
    items: z.array(z.object({
        id: z.number(),
        count: z.number(),
    })),
});

export const ExchangeSchema = z.object({
    coins_per_gem: z.number(),
    quantity: z.number(),
}).or(z.object({text: z.string()}));

export const ListingSchema = z.object({
    id: z.number(),
    buys: z.array(z.object({
        listings: z.number(),
        unit_price: z.number(),
        quantity: z.number(),
    })),
    sells: z.array(z.object({
        listings: z.number(),
        unit_price: z.number(),
        quantity: z.number(),
    })),
});

export const PricingSchema = z.object({
    id: z.number(),
    whitelisted: z.boolean(),
    buys: z.object({
        quantity: z.number(),
        unit_price: z.number(),
    }),
    sells: z.object({
        quantity: z.number(),
        unit_price: z.number(),
    }),
});

export const TransactionSchema = z.object({
    id: z.number(),
    item_id: z.number(),
    price: z.number(),
    quantity: z.number(),
    created: z.string(),
    purchased: z.string().optional(),
});