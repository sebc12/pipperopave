/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropdown(index, username, pipmessage) {
  console.log(index)
  document.getElementById("myDropdown" + index).classList.toggle("show");


   // Henter modal afsnittet fra vores html
 var update_modal = document.getElementById("update_myModal");

 // Henter knappen som åbner vores modal, i html
 var btn = document.getElementById("rediger" + index);
 
 // Henter span (<span class="close">&times;</span>) som er et kryds der lukker modal box
 var span = document.getElementsByClassName("update_close")[0];
 
 // Når brugeren klikker på knappen, åbnes modal boxen
 btn.onclick = function() {
   update_modal.style.display = "block";
   document.querySelector("#update_indtast_brugernavn").value = username;
   document.querySelector("#update_indtast_pip").value = pipmessage;


   //START

// Get the Form element from our the DOM.
const form = document.querySelector("#update_note-form");

// Add an event listener on the form, listening for the "submit" event
form.addEventListener("submit", (event) => {
  // We prevent the default behaviour of the form, so it doesnt reload the page.
  event.preventDefault();

  // Get the user input value from the title input
  // Get the user input value from the note textarea

    const user = document.getElementById("update_indtast_brugernavn").value
    const pip = document.getElementById("update_indtast_pip").value
    const id = index;
    console.log(id, user, pip)
    const asObject = {
      pipID: id,
        username: user,
        pipmessage: pip,

    } 

    fetch("http://localhost:8000", {
        method: "PUT",
    body: JSON.stringify(asObject)
})
});



  /* const pip = {
    username: document.querySelector("#update_indtast_brugernavn").value,
    pip: document.querySelector("#update_indtast_pip").value
  
  };
  
  const id = document.querySelector("#update_note-form").innerHTML;
  const response = putData(id, pip);
  if (response.status === 200) {
    pip.id = id;
    const newNode = createContactElement(pip);
    const oldNode = document.querySelector("#" + id)
    oldNode.parentNode.replaceChild(newNode, oldNode);
  } */
 }
 
 // Når brugeren klikker på krydset (<span class="close">&times;</span>), lukkes modal boxen
 span.onclick = function() {
   update_modal.style.display = "none";
 }
 
 // Når brugeren klikker steder uden for boxen, lukkes den
 window.onclick = function(event) {
   if (event.target == modal) {
     update_modal.style.display = "none";
     
 
   }
 }

// DELETE PIP 

// Henter id fra vores knap
var deletebtn = document.getElementById("delete" + index);

// Funktionen der skal køre når vi klikker på knappen
deletebtn.onclick = function() {

  // Den skal bruge ID'et så den ved hvilket id den skal bruge til at slette
    const id = index;
    console.log("ID vi vil slette " + id)
    const asObject = {
      pipID: id
    };

  fetch("http://localhost:8000", {
        method: "DELETE",
    body: JSON.stringify(asObject)
})
};

}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
