import {ApiClient, Localisation, SchemaVersion} from "./api-client";
import {AccountService, AchievementsService, BackstoryService, BuildService, ColorService} from "./v2";

export class Gw2Client extends ApiClient {

  constructor(apiKey?: string, language: Localisation = "en", schemaVersion: SchemaVersion = "latest", useHeaders: boolean = true) {
    super("https://api.guildwars2.com", apiKey, language, schemaVersion, useHeaders);
  }

  public readonly account: AccountService = new AccountService(this);
  public readonly achievements: AchievementsService = new AchievementsService(this);
  public readonly backstory: BackstoryService = new BackstoryService(this);
  public readonly build: BuildService = new BuildService(this);
  public readonly colors: ColorService = new ColorService(this);
}