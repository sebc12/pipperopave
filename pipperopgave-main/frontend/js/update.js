 function createPipElement(pip) {
    console.log(pip)
    // Get the template
    const template = document.querySelector("#pip-boks");
    // Clone template
    const clone = document.importNode(template.content, true);
    // Fill information into the cloned templated
    document.querySelector("#person").id = pip.person;
    document.querySelector("#besked").textContent = pip.besked;
    document.querySelector("#tid").textContent = pip.tid;

  
    // add on click listener for button

    btn.addEventListener("click", () => {
      editFunction(pip);
    });
    // Return the filled node
    return clone;
  }
  
  function editFunction (pip) {
    console.log("hej fra edit function", pip)
    document.querySelector("#update-name").value = contact.name;
    document.querySelector("#update-surname").value = contact.surname;
    document.querySelector("#update-company").value = contact.company;
    document.querySelector("#update-phone").value = contact.phone;
    document.querySelector("#update-email").value = contact.email;
    document.querySelector("#id-temp").innerHTML = contact.id;
  }
  