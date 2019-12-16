export const fibonacci = (num) => {
  let result = [0, 1]
  let i = 2
  
  while (i < num) {
    result.push(result[result.length - 1] + result[result.length - 2])
    i += 1
  }
  return result
}