export interface RateLimiter {
  canSend(): Promise<boolean>;
}