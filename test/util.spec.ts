import { HashUtil, MathUtil, returnHelloWorld } from "../src";
describe("hash", () => {
  test("sha3", async () => {
    const result = HashUtil.sha3(Buffer.from("123456", "utf-8"));
    expect(result.byteLength).toBe(32);
  });

  test("sha3omit12", async () => {
    const result = HashUtil.sha3omit12(Buffer.from("123456", "utf-8"));
    expect(result.byteLength).toBe(20);
  });
});

describe("math", () => {
  test("plus", async () => {
    const result = MathUtil.plus(1, 2);
    expect(result).toBe(3);
  });
});

describe("index", () => {
  test("returnHelloWorld", async () => {
    const result = returnHelloWorld();
    expect(result).toBe("hello world");
  });
});
