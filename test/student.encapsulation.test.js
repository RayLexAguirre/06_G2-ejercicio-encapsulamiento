import Student from "../src/student";

test("student.encapsulation()", () => {
  let obj = new Student("Juan Gómez García", 12345, new Date(1997, 3, 10));

  expect(typeof obj.getName).toBe("function");
  expect(typeof obj.setName).toBe("function");
  expect(typeof obj.setId).toBe("function");
  expect(typeof obj.getId).toBe("undefined");
  expect(typeof obj.getBirthDate).toBe("function");
  expect(typeof obj.setBirthDate).toBe("undefined");

  expect(obj.getName()).toBe("Juan Gómez García");

  obj.setId(4444);
  expect(obj._id).toBe(4444);
});
