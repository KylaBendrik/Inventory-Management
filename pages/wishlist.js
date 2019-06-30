function printList(input){
  var boxInputs = input.split(';');
  var boxes =[];
  function assign(box, spot, input){
    if (spot === 0){
      box.a = input;
    } else {
      if (spot === 1){
        box.b = input;
      } else {
        if (spot === 2){
          box.c  = input;
        }
      }
    }
  }

  boxInputs.forEach((boxInput, index) =>{
    //make object
    if (boxInput !== ""){
      var box = {a: "", b: "", c: ""}
      
      var boxArray = boxInput.split(",");
      //if bits have quotes, find the other quote and combine
      var temp = []
      var adding = false;
      var spot = 0;
      boxArray.forEach((element) => {
        if (adding === false){
          if (element.startsWith('"')){
            adding = true;
            temp.push(element.replace('"', ''))
          } else {
            assign(box, spot, element);
            spot ++;
          }
        } else {
          if (adding){
            if (element.includes('"')){
              temp.push(element.replace('"', ''))

              assign(box, spot, temp);

              spot ++;
              temp = [];
              adding = false;
            } else {
              temp.push(element)
            }
          }  
        }
        
      })

      //fill object
      boxes.push(box)
    }
  });

  //make table
  boxes.forEach((box, index) => {
    var row = document.createElement('tr');
    
    //make cells
    var cellA = document.createElement('td');
    var cellB = document.createElement('td');
    var cellC = document.createElement('td');

    //fill cells
    cellA.appendChild(document.createTextNode(box.a));
    cellB.appendChild(document.createTextNode(box.b));
    cellC.appendChild(document.createTextNode(box.c));

    //append cells
    row.appendChild(cellA);
    row.appendChild(cellB);
    row.appendChild(cellC);

    outputTbody.appendChild(row);
  })
  console.log(boxes)
}