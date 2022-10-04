// Аналог .join, использование метода Array.join() разрешено
// ('!', 1, 0, 5, -11) => "1!0!5!-11"

function join(separator, ...values) {
  return values.join(separator)
}

console.log(join('!', 1, 0, 5, -11))