// let age = 6;

// if (age >= 6 && age <= 7) {
//   console.log("Poussin");
//   document.write("poussin");
// } else if (age >= 8 && age <= 9) {
//   console.log("Pupille");
//   document.write("Pupille");
// } else if (age >= 10 && age <= 11) {
//   console.log("Minime");
//   document.write("Minime");
// } else if (age > 12) {
//   console.log("Cadet");
//   document.write("Cadet");
// }

let ages = 10;
switch (true) {
  case ages >= 6 && ages <= 7:
    console.log("Poussin");
    document.write("Poussin");
    break;
  case ages >= 8 && ages <= 9:
    console.log("Pupille");
    document.write("Pupille");
    break;

  case ages >= 10 && ages <= 11:
    console.log("Minime");
    document.write("Minime");
    break;

  case ages > 12:
    console.log("Cadet");
    document.write("Cadet");
    break;
}
