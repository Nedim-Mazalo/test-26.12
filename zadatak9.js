//napisi funkciju koja pronazi razliku između najvece i najmanje vrijednosti u nizu

const niz = [7, 3, 10, 15, 2];

/* const najveci = niz.forEach((e) => {
  console.log(e);
}); */

//console.log(najveci);
//const nadji = niz.filter((e, i, arr) => e > arr[i + 1]);
//console.log(nadji);
const nadji = niz.find((e, i) => {
  if (e > e[i + 1]) {
    return e;
  }
});

console.log(nadji);
