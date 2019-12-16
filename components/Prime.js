export const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false
  } else if (num === 2) {
    return true
  } else {
    for(let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false
      }
    }
    return true
  }
}

export const showPrime = (n) => {
  let result = []
  let i = 0
  do {
    if (isPrime(i)) {
      result.push(i)
    }
    i++

  } while (result.length < n )
  return result
}
