import {expect, test} from "vitest";
import {Gw2Client} from "../../gw2-client";

const apiClient = new Gw2Client();

test("should return backstory categories", async () => {
  expect(Array.isArray(await apiClient.backstory.getCategories())).toBe(true);
});

test("should return an answer", async () => {
  expect((await apiClient.backstory.getAnswer("7-54")).id).toBe("7-54");
});

test("should return an array of answers", async () => {
  const answerIds = ["7-54", "188-189"];
  const answers = await apiClient.backstory.getAnswers(answerIds);
  expect(
    answers.at(0)?.id === "7-54"
    && answers.at(1)?.id === "188-189"
  ).toBe(true);
});

test("should return a question", async () => {
  expect((await apiClient.backstory.getQuestion("7")).id).toBe(7);
});

test("should return an array of questions", async () => {
  const questionIds = [7, 10];
  const questions = await apiClient.backstory.getQuestions(questionIds);
  expect(
    questions.at(0)?.id === 7
    && questions.at(1)?.id === 10
  ).toBe(true);
});