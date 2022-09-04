import Grade from "../src/grade";

test("grade.constructor()", () => {
  let obj = new Grade("Programación", 3);

  expect(obj._subject).toBe("Programación");
  expect(obj._partials).toBe(3);
  expect(Array.isArray(obj._grades)).toBe(true);
});
