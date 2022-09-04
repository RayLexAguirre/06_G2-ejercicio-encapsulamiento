import Student from "../src/student";

test("account.constructor()", () => {
  let obj = new Student("juan gómez garcía", 12345, new Date(1997, 3, 10));

  expect(obj._name).toBe("Juan Gómez García");
  expect(obj._id).toBe(12345);
  expect(obj._birthDate.getFullYear()).toBe(1997);
});
