const { describe, expect, it } = require("@jest/globals");
const {
  createPresentationMessage,
  hackTheDb,
  restartDb,
} = require("./jest");

describe("A função createPresentationMessage", () => {

  // beforeEach(() => {
  //   restartDb();
  // });

  it("retorna corretamente a string", () => {
    const expectedString =
      "Oi galerinha! Meu nome é Xuxa e minha comida favorita é algodão doce.";
  });

  it("retorna erro quando falha", () => {
    const expectedError = new Error("Explodiu");
  });
});