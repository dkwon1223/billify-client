import { describe, expect, test } from "vitest";
import { sum } from "../App";

describe("dummy test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
