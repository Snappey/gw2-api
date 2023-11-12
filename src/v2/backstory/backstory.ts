import {ApiClient} from "../../api-client";
import {z} from "zod";
import {AnswerSchema, QuestionSchema} from "./backstory.schema";

export type Answer = z.infer<typeof AnswerSchema>;
export type Question = z.infer<typeof QuestionSchema>;

export class BackstoryService {
  private readonly _apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this._apiClient = apiClient;
  }

  public async getCategories(): Promise<string[]> {
    return this._apiClient.get(z.string().array(), "/v2/backstory");
  }

  public async getAnswers(ids: string[] | number[]): Promise<Answer[]> {
    return this._apiClient.get(z.array(AnswerSchema), "/v2/backstory/answers?ids=" + ids.join(","));
  }

  public async getAnswer(id: string | number): Promise<Answer> {
    return this._apiClient.get(AnswerSchema, "/v2/backstory/answers?id=" + id);
  }

  public async getQuestions(ids: number[] | string[]): Promise<Question[]> {
    return this._apiClient.get(z.array(QuestionSchema), "/v2/backstory/questions?ids=" + ids.join(","));
  }

  public async getQuestion(id: number | string): Promise<Question> {
    return this._apiClient.get(QuestionSchema, "/v2/backstory/questions?id=" + id);
  }
}