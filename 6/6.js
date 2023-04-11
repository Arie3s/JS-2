function saveToLocalStorage(key, obj) {
    try {
      localStorage.setItem(key, JSON.stringify(obj));
    } catch (e) {
      console.error("Error saving to local storage:", e);
    }
  }

  
const profile = {name : "Wali", age : "22", occupation : "student"};

saveToLocalStorage("data",profile);