import Grade from '../src/grade';

test('grade.getAverage()', () => {
  let obj = new Grade('Programación', 3);

  obj.setGrade(1, 10);
  expect(obj.getAverage()).toBe(10);

  obj.setGrade(3, 8);
  expect(obj.getAverage()).toBe(9);

  obj.setGrade(2, 6);
  expect(obj.getAverage()).toBe(8);
});
