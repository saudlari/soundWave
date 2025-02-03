import { describe, it, expect } from "vitest";

const usernameOK = (username) => {
    const validUsernameLength = username.length >= 3 && username.length <= 20;
    const validUsernameCharacters = /^[a-zA-Z0-9_]+$/.test(username);
  return validUsernameLength && validUsernameCharacters;
}

describe("Username validation", () => {
  it ("is a valid username", () => {
    expect(usernameOK("Hola_test44")).toBe(true);
    expect(usernameOK("Hola!60")).toBe(false);
  })
})

const emailOK = (email) => {
    const containsSymbol = email.includes('@');
    const noSpaces = !/\s/.test(email);
    const containsDomain = /@.+/.test(email);
return containsSymbol && noSpaces && containsDomain;
}

describe("Email validation", () => {
  it ("is a valid email address", () => {
    expect(emailOK("hola@test.com")).toBe(true);
    expect(emailOK("holatest@")).toBe(false);
    expect(emailOK("hola.test.com")).toBe(false);
    expect(emailOK("hola @test.com")).toBe(false);
  })
})

const passwordOk = (password) => {
    const validLength = password.length >= 8 && password.length <= 16;
    const numericCharacter = /[0-9]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const upperCase = /[A-Z]/.test(password);
    const alphanumeric = /^[a-zA-Z0-9]+$/.test(password);
return validLength && numericCharacter && lowerCase && upperCase && alphanumeric;
};

describe("Password validation", () => {
  it("is a valid password", () => {
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