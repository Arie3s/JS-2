function addItem(text) {
    // Get the unordered list element
    var list = document.getElementById('list');
    
    // Create a new list item element
    var newItem = document.createElement("li");
    
    // Set the text content of the new element to the given string
    newItem.textContent = text;
    
    // Append the new element to the unordered list
    list.appendChild(newItem);
  }
  