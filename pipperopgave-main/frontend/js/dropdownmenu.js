/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropdown(index, username, pipmessage) {
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
   console.log("hej fra update form")
   document.querySelector("#update_indtast_brugernavn").value = "username";
   document.querySelector("#update_indtast_pip").value = "pipmessage";



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



/* const pip = {
  username: document.querySelector("#update_indtast_brugernavn" + index).value,
  pip: document.querySelector("#update_indtast_pip" + index).value,

};

const id = document.querySelector("#update_note-form").innerHTML;
const response = await putData(id, pip);
if (response.status === 200) {
  pip.id = id;
  const newNode = createContactElement(pip);
  const oldNode = document.querySelector("#" + id)
  oldNode.parentNode.replaceChild(newNode, oldNode);
} */
}


/*function clearUpdateForm() {
  document.querySelector("#update_indtast_brugernavn").value = "";
  document.querySelector("#update_indtast_pip").value = "";

}*/




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






