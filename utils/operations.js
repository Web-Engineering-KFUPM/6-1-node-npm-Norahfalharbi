export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0)
  
}

export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.slice(1).reduce((diff, n) => diff - n, numbers[0]);
}

export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1)
}

export function divide(numbers) {
  if (numbers[1] === undefined  )  {return NaN; }
  return numbers.slice(1).reduce((acc, n) => acc / n, numbers[0]);}

