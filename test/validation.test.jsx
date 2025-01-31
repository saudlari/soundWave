import { describe, it, expect } from "vitest";

const passwordOk = (password) => {

    const validLength = password.length >= 8 && password.length <= 16;
    const numericCharacter = /[0-9]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const upperCase = /[A-Z]/.test(password);
    const alphanumeric = /^[a-zA-Z0-9]+$/.test(password);

return validLength && numericCharacter && lowerCase && upperCase && alphanumeric;
};


describe("Password Validation", () => {
  it("A valid password", () => {
    expect(passwordOk("Password123")).toBe(true);
  });

  it("is too short to be valid", () => {
    expect(passwordOk("Ok1")).toBe(false);
  });

  it("is too long to be valid", () => {
    expect(passwordOk("123456789abcdefghi")).toBe(false);
  });

  it("is invalid because it does not have a numeric character", () => {
    expect(passwordOk("Password")).toBe(false);
  });

  it("is invalid becasue it does not have a lower case character", () => {
    expect(passwordOk("PASSWORD1")).toBe(false);
  });

  it("is invalid because it does not have an uppercase character", () => {
    expect(passwordOk("password1")).toBe(false);
  });

  it("is invalid becasue it contains one or more non-alphanumeric characters", () => {
    expect(passwordOk("Passw0rd!")).toBe(false);
  });
});