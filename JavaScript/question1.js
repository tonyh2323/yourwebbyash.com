const inventory = [
    {item: "scented candel", stock: 48},
    {item: "oil diffuser", stock: 80},
    {item: "tea Kettle",stock: 16},
 ];
 inventory.forEach(myFunction);
 function myFunction(value, index, array){
    if(value.stock<50){
        console.log(value.item, value.stock);
        return myFunction.item;
    };    
 };