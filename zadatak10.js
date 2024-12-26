const niz = [1, 2, 2, 2, 3, 3, 4];

function brojPojavljivanja(niz) {
  const broji = {};

  niz.forEach((element) => {
    if (broji[element]) {
      broji[element]++;
    } else {
      broji[element] = 1;
    }
  });
  return broji;
}

console.log(brojPojavljivanja(niz));
