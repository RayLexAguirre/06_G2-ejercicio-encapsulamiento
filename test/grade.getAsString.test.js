import Grade from '../src/grade';

test('grade.getAsString()', () => {
  let obj = new Grade('Programación', 3);

  obj.setGrade(1, 10);
  obj.setGrade(3, 8);
  obj.setGrade(2, 6);
  expect(obj.getAsString()).toBe('Programación 8');
});
