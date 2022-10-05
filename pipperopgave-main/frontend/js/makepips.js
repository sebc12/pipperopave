//START

// Get the Form element from our the DOM.
const form = document.querySelector("#note-form");

// Add an event listener on the form, listening for the "submit" event
form.addEventListener("submit", (event) => {
  // We prevent the default behaviour of the form, so it doesnt reload the page.
  event.preventDefault();

  // Get the user input value from the title input
  // Get the user input value from the note textarea

    const user = document.getElementById("indtast_brugernavn").value
    const pip = document.getElementById("indtast_pip").value
    console.log(user, pip)
    const asObject = {
        username: user,
        pipmessage: pip,
    } 

    fetch("http://localhost:8000", {
        method: "POST",
    body: JSON.stringify(asObject)
})
});