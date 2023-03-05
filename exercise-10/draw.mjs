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

async function getResault() {
    try{
        const tinaDraw = await luckyDraw("tina")
        console.log(tinaDraw)
     
        const jorgeDraw = await luckyDraw("jorge")
        console.log(jorgeDraw)
     
        const julienDraw = await luckyDraw("julien")
        console.log(julienDraw)
     }catch(error){
         console.error(error)
     }
}

getResault()