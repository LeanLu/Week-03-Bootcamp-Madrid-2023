function makeAsync(callback) {
  setTimeout(() => {
    const data = 234;

    // Si colocamos el "return" y llamamos a MakeAsync(), devolvería "undefined" porque se ejecuta un tiempo después.
    // return data;

    callback(data);
  }, 1000);
}

makeAsync((x) => {
  console.log(x * 2);
});

makeAsync((x) => {
  console.log(x / 2);
});
