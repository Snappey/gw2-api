import {expect, test} from "vitest";
import {Gw2Client} from "../../gw2-client";

const apiClient = new Gw2Client(process.env.GW2_API_KEY);

test("get account deliveries", async () => {
  const deliveries = await apiClient.commerce.getDeliveries();
  expect(deliveries).toBeDefined();
});

test("get exchange coins", async () => {
  const exchange = await apiClient.commerce.getCoinsExchange(10000);
  expect(exchange).toBeDefined();
});

test("get exchange gems", async () => {
  const exchange = await apiClient.commerce.getGemsExchange(10000);
  expect(exchange).toBeDefined();
});

test("get listing ids", async () => {
  const ids = await apiClient.commerce.getListingIds();
  expect(ids).toBeDefined();
});

test("get listing", async () => {
  const listing = await apiClient.commerce.getListing(24);
  expect(listing).toBeDefined();
});

test("get listings", async () => {
  const listings = await apiClient.commerce.getListings([24, 68, 69]);
  expect(listings).toBeDefined();
});

test("get price ids", async () => {
  const ids = await apiClient.commerce.getPriceIds();
  expect(ids).toBeDefined();
});

test("get price", async () => {
  const price = await apiClient.commerce.getPrice(24);
  expect(price).toBeDefined();
});

test("get prices", async () => {
  const prices = await apiClient.commerce.getPrices([24, 68, 69]);
  expect(prices).toBeDefined();
});

test("get current buy transactions", async () => {
  const transactions = await apiClient.commerce.getCurrentBuyTransactions();
  expect(transactions).toBeDefined();
});

test("get current sell transactions", async () => {
  const transactions = await apiClient.commerce.getCurrentSellTransactions();
  expect(transactions).toBeDefined();
});

test("get historical buy transactions", async () => {
  const transactions = await apiClient.commerce.getHistoricalBuyTransactions();
  expect(transactions).toBeDefined();
});

test("get historical sell transactions", async () => {
  const transactions = await apiClient.commerce.getHistoricalSellTransactions();
  expect(transactions).toBeDefined();
});
