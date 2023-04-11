function getObjectFromLocalStorage(key) {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue === null) {
        throw new Error(`No value found for key: ${key}`);
      }
      return JSON.parse(storedValue);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

const obj = getObjectFromLocalStorage('key');
console.log(obj);
