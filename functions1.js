function printName() {
  console.log("Yousef");
}

function printAge(brithYear) {
  console.log(2024 - brithYear);
}

function printAgeAndName(brithYear, name) {
  console.log(`Hello ${name} you are ${2024 - brithYear} years old`);
}

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
  function printMax(a, b) {
    if (a > b) {
      console.log(a);
    } else {
      console.log(b);
    }
  }
}
