function saveObjectToLocalStorage(obj) {
    // Looping through the array of properties of the object
    for (const prop in obj) {
      // Saving each property to localStorage as a element
      localStorage.setItem(prop, obj[prop]);
    }
    
    // Creating a new object to hold the retrieved data and returning
    const newObj = {};
    
    // Looping through the localStorage items
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      
      // Adding the key-value pair to the new object array
      newObj[key] = value;
    }
    
    // Returning the new object
    return newObj;
  }
  