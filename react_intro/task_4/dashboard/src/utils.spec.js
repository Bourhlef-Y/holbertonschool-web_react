import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils functions", () => {
  test("getCurrentYear returns the current year dynamically", () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  test("getFooterCopy returns correct string when argument is true", () => {
    expect(getFooterCopy(true)).toBe("holberton School");
  });

  test("getFooterCopy returns correct string when argument is false", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  test("getLatestNotification returns the correct HTML string", () => {
    const expected = "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toBe(expected);
  });
});
