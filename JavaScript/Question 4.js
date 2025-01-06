const inventory = [
    {item: "scented candel", stock: 48},
    {item: "oil diffuser", stock: 80},
    {item: "tea Kettle",stock: 16},
 ];
 console.log(inventory.length+ " stock: "+ inventory[1].stock);
 function getLowStockItems() {
  const lowStock = [];

  for (let i = 0; i <inventory.length ;i++ ) {
    if (inventory[i].stock < 50) {
       console.log(lowStock + inventory[i]+ i);
      lowStock. Add (inventory[i]);
    }
  }
    return lowStock  ;
 };
