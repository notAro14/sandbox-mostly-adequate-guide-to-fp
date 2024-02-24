import { test, expect } from "vitest";
import { words } from ".";

test("split function returns an array of words", () => {
  const str = "Hello world";
  const actual = words(str);
  const expected = ["Hello", "world"];

  expect(actual).toEqual(expected);
});
