// import { test } from "@jest/globals";
import { addOne } from "./helper";

test("testing addone", () => {
  expect(addOne(1)).toBe(2);
})