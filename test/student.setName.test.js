import Student from "../src/student";

test("account.setName()", () => {
  let obj = new Student("juan gómez garcía", 12345, new Date(1997, 3, 10));

  obj.setName("ricardo torres lópez");
  expect(obj._name).toBe("Ricardo Torres López");
});
