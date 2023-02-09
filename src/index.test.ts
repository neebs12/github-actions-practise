import { app } from "./server"
import supertest from 'supertest';

const request = supertest(app);

test("get hello world test", async () => {
  const response = await request.get("/");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("Hello World! @ GET");   
});

test("post addOne test", async () => {
  const number = 100;
  const response = await request.post("/").send({number});
  expect(response.status).toBe(200);
  expect(response.body.message).toBe(number + 1);
})

