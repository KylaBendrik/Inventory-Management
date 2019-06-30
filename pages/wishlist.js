function printList(input){
  var boxInputs = input.split(';');
  var boxes =[];
  boxInputs.forEach((boxInput, index) =>{
    if (boxInput !== ""){
      var row = document.createElement('tr');
      var box = {info: ""}
      
      //fill object
      box.info = boxInput;
      boxes.push(box)

      //make cells
      var cell = document.createElement('td');


      //fill cells
      cell.appendChild(document.createTextNode(box.info));

      //append cells
      row.appendChild(cell);

      outputTbody.appendChild(row);
    }
  })
  console.log(boxes)
}