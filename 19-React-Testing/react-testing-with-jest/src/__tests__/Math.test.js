import { Add,Substract,Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 5;
  const b = 5;
  const expected = 10;
  // Act
  const test = Add(a, b);

  // Assert
  expect(test).toBe(expected)
})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 5;
  const b = 5;
  const expected = 0;

  // Act
  const test = Substract(a, b)

  // Assert
  expect(test).toBe(expected)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 5;
  const b = 5;
  const expected = 25;

  // Act
  const test = Multiplication(a, b)

  // Assert
  expect(test).toBe(expected)
})