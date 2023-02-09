import { app } from "./server";
import supertest from "supertest";

const request = supertest(app);

test("get hello world test", async () => {
  const response = await request.get("/");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Hello World! @ GET");
});

test("post addOne test", async () => {
  const number = 100;
  const response = await request.post("/").send({ number });
  expect(response.status).toBe(200);
  expect(response.body.message).toBe(number + 1);
});

test("manual test", () => {
  const num = 100;
  expect(num).toBe(num + (process.env.TEST_ENV === "FAIL" ? 1 : 0));
});
