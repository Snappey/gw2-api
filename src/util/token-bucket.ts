import {RateLimiter} from "./rate-limiter";

export class TokenBucket implements RateLimiter {
  private readonly _capacity: number;
  private readonly refillMs: number;
  private _tokens: number;

  constructor(capacity: number, fillSeconds: number) {
    this._capacity = capacity;
    this.refillMs = ((fillSeconds * 1000) / this._capacity);
    this._tokens = capacity;
    this.refillBucket();
  }

  public async canSend(): Promise<boolean> {
    if (this._tokens <= 0) {
      return false;
    }

    this._tokens -= 1;

    return true;
  }

  private refillBucket() {
    setInterval(() => {
      if (this._tokens + 1 <= this._capacity) {
        this._tokens += 1
      }
    }, this.refillMs);
  }
}