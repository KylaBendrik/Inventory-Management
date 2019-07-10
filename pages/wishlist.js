function assign(box, spot, input){
  const spotLabels = ['date', 'customerName', 'email', 'baby', 'gender', 'birthday', 'weight', 'height', 'head', 'favColors', 'patterns']
  box[spotLabels[spot]] = input;
}
function printNumber(number){
  
    if (Math.floor(number) !== number){
      return (Math.floor(number) + " or " + (Math.floor(number) + 1))
    } else {
      return number;
    }
}
function colorBoxes(favColors, items){
  var total = favColors.length;
  
  //create table of colors
  var table = document.createElement("table");
  var row1 = document.createElement("tr");
  var row2 = document.createElement("tr");
  var row3 = document.createElement("tr");

  var red = document.createElement("td");
  var orange = document.createElement("td");
  var yellow = document.createElement("td");
  var green = document.createElement("td");
  var blue = document.createElement("td");
  var purple = document.createElement("td");
  var pink = document.createElement("td");
  var white = document.createElement("td");
  var grey = document.createElement("td");

  var amounts = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  if (favColors.includes("Red")){
    red.style.backgroundColor = "#ff0000";
    amounts[0] = printNumber((1 / total) * items);
  }
  if (favColors.includes("Orange")){
    orange.style.backgroundColor = "#ff9d00";    
    amounts[1] = printNumber((1 / total) * items);
  }
  if (favColors.includes(" Yellow")){
    yellow.style.backgroundColor = "#fff600";
    amounts[2] = printNumber((1 / total) * items);
  }
  if (favColors.includes("Green")){
    green.style.backgroundColor = "#07bc3d";
    amounts[3] = printNumber((1 / total) * items);
  }
  if (favColors.includes("Blue")){
    blue.style.backgroundColor = "#009dff";
    amounts[4] = printNumber((1 / total) * items);
  }
  if (favColors.includes("Purple")){
    purple.style.backgroundColor = "#d39df2";
    amounts[5] = printNumber((1 / total) * items);
  }
  if (favColors.includes("Pink")){
    pink.style.backgroundColor = "#ffc6f8";
    amounts[6] = printNumber((1 / total) * items);
  }
  if (favColors.includes("White")){
    amounts[7] = printNumber((1 / total) * items);
  }
  if (favColors.includes("Grey")){
    grey.style.backgroundColor = "#bfbfbf";
    amounts[8] = printNumber((1 / total) * items);
  }
  
  red.appendChild(document.createTextNode(amounts[0]))
  orange.appendChild(document.createTextNode(amounts[1]))
  yellow.appendChild(document.createTextNode(amounts[2]))
  green.appendChild(document.createTextNode(amounts[3]))
  blue.appendChild(document.createTextNode(amounts[4]))
  purple.appendChild(document.createTextNode(amounts[5]))
  pink.appendChild(document.createTextNode(amounts[6]))
  white.appendChild(document.createTextNode(amounts[7]))
  grey.appendChild(document.createTextNode(amounts[8]))

  row1.appendChild(red);
  row1.appendChild(orange);
  row1.appendChild(yellow);
  row2.appendChild(green);
  row2.appendChild(blue);
  row2.appendChild(purple);
  row3.appendChild(pink);
  row3.appendChild(white);
  row3.appendChild(grey);

  table.appendChild(row1);
  table.appendChild(row2);
  table.appendChild(row3);

  return table
}
function printList(input){
  var boxInputs = input.split(';');
  var boxes =[];
  

  boxInputs.forEach((boxInput, index) =>{
    //make object
    if (boxInput !== ""){
      var box = {date: "", customerName: "", email: "", baby: "", gender: "", birthday: "", weight: "", height: "", head: "", favColors: "[]", patterns: "[]"}
      
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
      // trim colors
      box.favColors.forEach((color, index) => {
        box.favColors[index] = color.trim()
      })
      //fill object
      boxes.push(box)
    }
  });

  //make table
  boxes.forEach((box) => {
    var row = document.createElement('tr');
    
    //make cells
    var cellDate = document.createElement('td');
    var cellCustomerName = document.createElement('td');
    var cellEmail = document.createElement('td');
    var cellBaby = document.createElement('td');
    var cellGender = document.createElement('td');
    var cellBirthday = document.createElement('td');
    var cellWeight = document.createElement('td');
    var cellHeight = document.createElement('td');
    var cellHead = document.createElement('td');
    var cellFavColors = document.createElement('td');
    var cellPatterns = document.createElement('td');

    //fill cells
    cellDate.appendChild(document.createTextNode(box.date));
    cellCustomerName.appendChild(document.createTextNode(box.customerName));
    cellEmail.appendChild(document.createTextNode(box.email));
    cellBaby.appendChild(document.createTextNode(box.baby));
    cellGender.appendChild(document.createTextNode(box.gender));
    cellBirthday.appendChild(document.createTextNode(box.birthday));
    cellWeight.appendChild(document.createTextNode(box.weight));
    cellHeight.appendChild(document.createTextNode(box.height));
    cellHead.appendChild(document.createTextNode(box.head));
    cellFavColors.appendChild(document.createTextNode(box.favColors));
    cellPatterns.appendChild(document.createTextNode(box.patterns));

    //append cells
    row.appendChild(cellDate);
    row.appendChild(cellCustomerName);
    row.appendChild(cellEmail);
    row.appendChild(cellBaby);
    row.appendChild(cellGender);
    row.appendChild(cellBirthday);
    row.appendChild(cellWeight);
    row.appendChild(cellHeight);
    row.appendChild(cellHead);
    row.appendChild(cellFavColors);
    row.appendChild(cellPatterns);

    outputTbody.appendChild(row);
  })

  //make nice wishlist for each box
  boxes.forEach((box) => {
    var name = document.createElement('h1');
    var nameValue = "";

    if (box.gender === "Girl"){
      nameValue = box.customerName + " & baby girl";
    } else {
      if (box.gender === "Boy"){
        nameValue = box.customerName + " & baby boy";
      } else {
        nameValue = box.customerName
      }
    }

    if (box.baby !== ""){
      nameValue = nameValue + " " + box.baby;
    }
    name.appendChild(document.createTextNode(nameValue));

    //table of stuff
    var table = document.createElement('table');
    var header = document.createElement('thead');
    var categories = document.createElement('th');
    var fiveH = document.createElement('th');
    var tenH = document.createElement('th');
    var fifteenH = document.createElement('th');
    var twentyH = document.createElement('th');

    
    categories.appendChild(document.createTextNode('Categories'));
    fiveH.appendChild(document.createTextNode('For Five Items'));
    tenH.appendChild(document.createTextNode('For Ten Items'));
    fifteenH.appendChild(document.createTextNode('For Fifteen Items'));
    twentyH.appendChild(document.createTextNode('For Twenty Items'));

    header.appendChild(categories);
    header.appendChild(fiveH);
    header.appendChild(tenH);
    header.appendChild(fifteenH);
    header.appendChild(twentyH);

    var tBody = document.createElement('tbody');
    var colors = document.createElement('tr');
    var colorsLabel = document.createElement('td');
    var colorsFive = document.createElement('td');
    var colorsTen = document.createElement('td');
    var colorsFifteen = document.createElement('td');
    var colorsTwenty = document.createElement('td');

    colorsLabel.appendChild(document.createTextNode('Colors'));
    colorsFive.appendChild(colorBoxes(box.favColors, 5));
    colorsTen.appendChild(colorBoxes(box.favColors, 10));
    colorsFifteen.appendChild(colorBoxes(box.favColors, 15));
    colorsTwenty.appendChild(colorBoxes(box.favColors, 20));

    colors.appendChild(colorsLabel);
    colors.appendChild(colorsFive);
    colors.appendChild(colorsTen);
    colors.appendChild(colorsFifteen);
    colors.appendChild(colorsTwenty);


    tBody.appendChild(colors)

    //patterns
    patterns.forEach(pattern => {
      var row = document.createElement('tr');
      var label = document.createElement('td');

      label.appendChild(document.createTextNode(pattern))

      row.appendChild(label);

      tBody.appendChild(row);
    })

    table.appendChild(header);
    table.appendChild(tBody);

    wishlists.appendChild(name)
    wishlists.appendChild(table)
  })
  console.log(boxes)
}