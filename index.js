function pow(num, degree) {
  if (degree === 0) {
    return 1
  } else if (degree > 0) {
    return num * pow(num, degree - 1)
  } else {
    return 1 / (num * pow(num, -degree - 1))
  }
}

const result = pow(6, 8)
console.log(result)
