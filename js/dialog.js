function userDialog() {
  let name = prompt("Як вас звати?", "Гість");
  let age = prompt("Скільки вам років?");

  if (age >= 18) {
    alert(`Вітаю, ${name}! Вам ${age} років, ви повнолітній.`);
  } else {
    alert(`Привіт, ${name}! Вам ${age} років, вам ще не виповнилося 18.`);
  }

  let answer = confirm("Хочете дізнатися щось цікаве?");
  if (answer) {
    alert("Щось цікаве");
  } else {
    alert("Гаразд, гарного дня!");
  }
}

userDialog();
