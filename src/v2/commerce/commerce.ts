import {ApiClient} from "../../api-client";
import {DeliverySchema, ExchangeSchema, ListingSchema, PricingSchema, TransactionSchema} from "./commerce.schema";
import {z} from "zod";

export type Delivery = z.infer<typeof DeliverySchema>;
export type Exchange = z.infer<typeof ExchangeSchema>;
export type Listing = z.infer<typeof ListingSchema>;
export type Pricing = z.infer<typeof ListingSchema>;
export type Transaction = z.infer<typeof TransactionSchema>;

export class CommerceService {
    private readonly _apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this._apiClient = apiClient;
    }

    getDeliveries(): Promise<Delivery> {
        return this._apiClient.getAuthenticated(DeliverySchema, "/v2/commerce/delivery");
    }

    getExchangeIds(): Promise<string[]> {
        return this._apiClient.get(z.array(z.string()), "/v2/commerce/exchange");
    }

    getCoinsExchange(quantity: number): Promise<Exchange> {
        return this._apiClient.get(ExchangeSchema, `/v2/commerce/exchange/coins?quantity=${quantity}`);
    }

    getGemsExchange(quantity: number): Promise<Exchange> {
        return this._apiClient.get(ExchangeSchema, `/v2/commerce/exchange/gems?quantity=${quantity}`);
    }

    getListingIds(): Promise<number[]> {
        return this._apiClient.get(z.array(z.number()), "/v2/commerce/listings");
    }

    getListing(id: string | number): Promise<Listing> {
        return this._apiClient.get(ListingSchema, `/v2/commerce/listings/${id}`);
    }

    getListings(ids: string[] | number[]): Promise<Listing[]> {
        return this._apiClient.get(z.array(ListingSchema), `/v2/commerce/listings?ids=${ids.join(",")}`);
    }

    getPriceIds(): Promise<number[]> {
        return this._apiClient.get(z.array(z.number()), "/v2/commerce/prices");
    }

    getPrice(id: string | number): Promise<Pricing> {
        return this._apiClient.get(PricingSchema, `/v2/commerce/prices/${id}`);
    }

    getPrices(ids: string[] | number[]): Promise<Pricing[]> {
        return this._apiClient.get(z.array(PricingSchema), `/v2/commerce/prices?ids=${ids.join(",")}`);
    }

    getCurrentBuyTransactions(): Promise<Transaction[]> {
        return this._apiClient.getAuthenticated(z.array(TransactionSchema), "/v2/commerce/transactions/current/buys");
    }

    getCurrentSellTransactions(): Promise<Transaction[]> {
        return this._apiClient.getAuthenticated(z.array(TransactionSchema), "/v2/commerce/transactions/current/sells");
    }

    getHistoricalBuyTransactions(): Promise<Transaction[]> {
        return this._apiClient.getAuthenticated(z.array(TransactionSchema), "/v2/commerce/transactions/history/buys");
    }

    getHistoricalSellTransactions(): Promise<Transaction[]> {
        return this._apiClient.getAuthenticated(z.array(TransactionSchema), "/v2/commerce/transactions/history/sells");
    }
}