export const compareNumbers = (a?: number, b?: number) => {
  let result = 0

  if (a != null && b != null) {
    result = a < b ? -1 : a > b ? 1 : 0
  } else if (a != null) {
    result = 1
  } else if (b != null) {
    result = -1
  }

  return result
}
