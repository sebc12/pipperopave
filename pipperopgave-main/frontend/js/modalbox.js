// Henter modal afsnittet fra vores html
var modal = document.getElementById("myModal");

// Henter knappen som åbner vores modal, i html
var btn = document.getElementById("writePipButton");

// Henter span (<span class="close">&times;</span>) som er et kryds der lukker modal box
var span = document.getElementsByClassName("close")[0];

// Når brugeren klikker på knappen, åbnes modal boxen
btn.onclick = function() {
  modal.style.display = "block";
}

// Når brugeren klikker på krydset (<span class="close">&times;</span>), lukkes modal boxen
span.onclick = function() {
  modal.style.display = "none";
}

// Når brugeren klikker steder uden for boxen, lukkes den
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// WORD COUNT
let inputTextArea = document.getElementById("indtast_pip");
let characCount = document.getElementById("charac-count");

 inputTextArea.addEventListener("input", () => {
//value-length command specifies the maximum value length in bytes
//textContent sets or returns the text content of the specified node
   characCount.textContent = inputTextArea.value.length ;
//trim() method removes whitespace from both ends of a string
   let txt = inputTextArea.value.trim();
//txt.split(/\s+/) code will split the full classname of an element into an array containing every class
   wordCount.textContent = txt.split(/\s+/).filter((item) => item).length ;
 });