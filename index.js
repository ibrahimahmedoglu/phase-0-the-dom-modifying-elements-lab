const mainElement = document.querySelector("main#main");
  mainElement.remove();

  
  const newHeader = document.createElement("h1");

  
  const namee = "YOUR-NAME"; // Replace YOUR-NAME with your actual name

  // Assign the text and id to the new <h1> element
  newHeader.innerHTML = `${namee} is the champion`;
  newHeader.id = "victory";

  

  document.body.appendChild(newHeader);