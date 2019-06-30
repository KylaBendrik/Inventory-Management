function printList(input){
  var boxInputs = input.split(';');
  var boxes =[];
  boxInputs.forEach((boxInput, index) =>{
    //make object
    if (boxInput !== ""){
      var box = {info: "", array: []}
      
      var boxArray = boxInput.split(",");
      //if bits have quotes, find the other quote and combine
      var temp = []
      var adding = false;
      boxArray.forEach((element) => {
        if (adding === false){
          if (element.startsWith('"')){
            console.log("A Quotation mark HAS BEEN FOUND");
            adding = true;
            temp.push(element.replace('"', ''))
          } else {
            box.array.push(element);
          }
        } else {
          if (adding){
            if (element.includes('"')){
              console.log("Closing quote has been found")
              temp.push(element.replace('"', ''))
              box.array.push(temp);
              temp = [];
              adding = false;
            } else {
              temp.push(element)
            }
          }  
        }
        
        console.log ("adding = " + adding)
      })
      console.log(temp)

      //fill object
      box.info = boxInput;
      boxes.push(box)
    }
  });

  //make table
  boxes.forEach((box, index) => {
    var row = document.createElement('tr');
    
    //make cells
    var cell = document.createElement('td');

    //fill cells
    cell.appendChild(document.createTextNode(box.info));

    //append cells
    row.appendChild(cell);

    outputTbody.appendChild(row);
  })
  console.log(boxes)
}