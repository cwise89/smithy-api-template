import { PalindromeException } from "@smithy-demo/string-wizard-service-ssdk";
import { LengthOperation } from "./length";

describe("Length tests", () => {
  const context = { user: "user123", requestId: "request123" };

  it("returns the length of the string", async () => {
    const output = await LengthOperation({ string: "canoe", limit: 1 }, context);
    expect(output.length).toBe(5);
  });

  it("handles undefined", async () => {
    const output = await LengthOperation({ string: undefined, limit: 1 }, context);
    expect(output.length).toBeUndefined();
  });

  it("throws on palindrome", async () => {
    expect.assertions(1);
    try {
      await LengthOperation({ string: "kayak", limit: 1 }, context);
    } catch (e) {
      expect(e).toBeInstanceOf(PalindromeException);
    }
  });
});
