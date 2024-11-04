function printName() {
  console.log("Yousef");
}

printName();

function printAge(brithYear) {
  console.log(`I am ${2024 - brithYear} years old`);
}
printAge(2000);

function printAgeAndName(brithYear, name) {
  console.log(`Hello ${name} you are ${2024 - brithYear} years old`);
}

printAgeAndName(2000, "Yousef");

function printHello(name, language) {
  if (language === "en") {
    console.log(`Hello ${name}`);
  } else if (language === "es") {
    console.log(`Hola ${name}`);
  } else if (language === "fr") {
    console.log(`Bonjor ${name}`);
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`);
  }
}
printHello("Yousef", "tr");

function printMax(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

printMax(50, 25);
