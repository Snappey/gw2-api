"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBucket = void 0;
class TokenBucket {
    _capacity;
    refillMs;
    _tokens;
    constructor(capacity, fillSeconds) {
        this._capacity = capacity;
        this.refillMs = ((fillSeconds * 1000) / this._capacity);
        this._tokens = capacity;
        this.refillBucket();
    }
    async canSend() {
        if (this._tokens <= 0) {
            return false;
        }
        this._tokens -= 1;
        return true;
    }
    refillBucket() {
        setInterval(() => {
            if (this._tokens + 1 <= this._capacity) {
                this._tokens += 1;
            }
        }, this.refillMs);
    }
}
exports.TokenBucket = TokenBucket;
