const compareStrings = (str1, str2) => {
  if (str1.length > str2.length) {
    alert(`Більший рядок: ${str1}`);
  } else if (str1.length < str2.length) {
    alert(`Більший рядок: ${str2}`);
  } else {
    alert("Рядки однакової довжини.");
  }
};

let firstString = prompt("Введіть перший рядок:");
let secondString = prompt("Введіть другий рядок:");
compareStrings(firstString, secondString);
