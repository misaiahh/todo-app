import {expect, test} from "vitest";
import {formatFirstName} from "./format";

test("formatFirstName", () => {
    expect(formatFirstName("John Smith")).toBe("JS");
});