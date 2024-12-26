const niz = ["Sings", "like", "Thunder"];
const separator = "-";

/* const spojeni = niz.flatMap((element) => console.log(`${element}${separator}`)); */

const spojeni = niz.reduce((acc, e) => {
  const saSeparatoron = e + separator;
  return acc + saSeparatoron;
}, 0);

console.log(spojeni);
