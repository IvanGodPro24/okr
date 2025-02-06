const plansList = document.getElementById("plans-list");

console.log(plansList);

plansList.addEventListener("click", lightItem);

function lightItem(e) {
  console.log(e.target);
  const item = e.target.closest("li");

  if (item) {
    item.classList.add("light");
  }
}
