function calculatedarbo(valandodarbo, valandomokėsi) {
  const total = valandodarbo + valandomokėsi;
  if (total > 10) {
    return `Per stipriai varai! Šiandien: ${total} val.`;
  } else {
    return `Gerai paskirstyta diena:: ${total} val.`;
  }
}


const student1 = calculatedarbo(4, 7);
console.log(student1);

const student2 = calculatedarbo(4, 3);
console.log(student2);
