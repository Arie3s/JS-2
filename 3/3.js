function addParagraph(text) {
    // Create a new <p> element
    var newParagraph = document.createElement("p");
    
    // Set the text content of the new element to the given string
    newParagraph.textContent = text;
    
    // Append the new element to the <body> element
    document.body.appendChild(newParagraph);
  }
  