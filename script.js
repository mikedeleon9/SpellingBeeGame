const letters = ["D", "R", "I", "B", "H", "A", "T"];
const mainBG = document.querySelector(".main-bg");

letters.forEach(letter => {
  const letterDiv = document.createElement("div");
  letterDiv.classList.add('redbg');
  letterDiv.innerHTML = letter;
  mainBG.appendChild(letterDiv);

})