// En ES2018 se ampliaron las Promises.
// Se agregó el async:

async function makeAsync() {
  const data = 234;
  return data;
}

makeAsync()
  // Dentro de .then() siempre va a una función. En este caso la Promise devolvería un "number".
  .then((number) => {
    console.log(number);
  });
