import Student from "../src/student";

test("account.getBirthDate()", () => {
  let obj = new Student("juan gómez garcía", 12345, new Date(1997, 3, 10));

  expect(obj.getBirthDate()).toBe("10/Abr/97");
});
