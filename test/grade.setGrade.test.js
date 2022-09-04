import Grade from "../src/grade";

test("grade.setGrade()", () => {
  let obj = new Grade("Programación", 3);

  expect(obj.setGrade(1, 7)).toBe(true);
  expect(obj._grades[0]).toBe(7);

  expect(obj.setGrade(4, 7)).toBe(false);
  expect(obj.setGrade(2, 17)).toBe(false);
  expect(obj.setGrade(2, -17)).toBe(false);
});
