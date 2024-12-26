const nizTest = [1, 2, 3, 4, 5];

const veciOdProsjeka = nizTest.reduce((acc, e) => {
  const duzinaNiza = nizTest.length;
  const prosjek = (acc += e / duzinaNiza);
  //const veciBrojevi = e > prosjek;
  return prosjek;
});

console.log(veciOdProsjeka);
