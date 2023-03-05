function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
}

try{
   const joeDraw = await luckyDraw("joe")
   console.log(joeDraw)

   const carolineDraw = await luckyDraw("caroline")
   console.log(carolineDraw)

   const sabrinaDraw = await luckyDraw("sabrina")
   console.log(sabrinaDraw)
}catch(error){
    console.error(error)
}