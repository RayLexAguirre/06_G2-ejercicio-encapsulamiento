import Grade from "../src/grade";

test("grade.encapsulation()", () => {
  let obj = new Grade("Programación", 3);

  expect(typeof obj.getSubject).toBe("undefined");
  expect(typeof obj.setSubject).toBe("function");
  expect(typeof obj.getPartials).toBe("function");
  expect(typeof obj.setPartials).toBe("undefined");
  expect(typeof obj.getGrades).toBe("undefined");
  expect(typeof obj.setGrades).toBe("undefined");

  obj.setSubject("Matemáticas");
  expect(obj._subject).toBe("Matemáticas");
  expect(obj.getPartials()).toBe(3);
});
