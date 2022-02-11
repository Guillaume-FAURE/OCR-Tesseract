function first() {
    return new Promise((resolve) => {
      console.log("1st");
      resolve();
    });
  }
  
  function second() {
    return new Promise((resolve) => {
        console.log("2nd");
        resolve();
    });
  }
  
  function third() {
    console.log("3rd");
  }
  
  async function fnAsync() {
    await first();
    for(let i=0;i<40;i++){
        await second();
    }
    third();
  }
  fnAsync()