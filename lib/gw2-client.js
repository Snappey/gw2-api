"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("./api-client");
const v2_1 = require("./v2");
class Gw2Client extends api_client_1.ApiClient {
    constructor(apiKey, language = "en", schemaVersion = "latest", useHeaders = true) {
        super("https://api.guildwars2.com", apiKey, language, schemaVersion, useHeaders);
    }
    achievements = new v2_1.AchievementsService(this);
}
