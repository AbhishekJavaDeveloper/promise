const getButter = () => {
    return new Promise((resolve, reject) => {
      // Simulating getting butter
      setTimeout(() => {
        console.log("Husband got butter");
        resolve();
      }, 1000);
    });
  };
  
  const getColdDrinks = () => {
    return new Promise((resolve, reject) => {
      // Simulating getting cold drinks
      setTimeout(() => {
        console.log("Husband got cold drinks");
        resolve();
      }, 1500);
    });
  };
  
  const getItems = async () => {
    try {
      await getButter();
      await getColdDrinks();
      console.log("Husband is back with everything");
    } catch (error) {
      console.error(error);
    }
  };
  
  getItems();


  
  