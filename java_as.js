(function(){
const body=document.querySelector("body");


const tableMain=document.createElement("table");

// table head in row 1
const tableRow1 =document.createElement("tr");
const tableHead1=document.createElement("th");
const tableHead2=document.createElement("th");
const tableHead3=document.createElement("th");
const tableHead4=document.createElement("th");
const tableHead5=document.createElement("th");


const tableHead1text=document.createTextNode("Name");

const tableHead2text=document.createTextNode("Age");
const tableHead3text=document.createTextNode("Date Of Birth");
const tableHead4text=document.createTextNode("Email");
const tableHead5text=document.createTextNode("Company");

tableHead1.append(tableHead1text);
tableHead2.append(tableHead2text);
tableHead3.append(tableHead3text);
tableHead4.append(tableHead4text);
tableHead5.append(tableHead5text);

tableRow1.append(tableHead1);
tableRow1.append(tableHead2);
tableRow1.append(tableHead3);
tableRow1.append(tableHead4);
tableRow1.append(tableHead5);

tableMain.append(tableRow1);


// table data in row 2

const tableRow2 =document.createElement("tr");
const tableCol1 = document.createElement("td");
const tableCol2 = document.createElement("td");
const tableCol3 = document.createElement("td");
const tableCol4 = document.createElement("td");
const tableCol5 = document.createElement("td");




const tableColText1=document.createTextNode("Vaibhav Tiwari");
const tableColText2=document.createTextNode("20");
const tableColText3=document.createTextNode("22/08/2001");
const tableColText4=document.createTextNode("vaibhav.tiwari@geminisolutions.com");
const tableColText5=document.createTextNode("Gemini Solutions");
tableCol1.append(tableColText1);
tableCol2.append(tableColText2);
tableCol3.append(tableColText3);
tableCol4.append(tableColText4);
tableCol5.append(tableColText5);

tableRow2.append(tableCol1);
tableRow2.append(tableCol2);
tableRow2.append(tableCol3);
tableRow2.append(tableCol4);
tableRow2.append(tableCol5);

tableMain.append(tableRow2);


// table data in row 3

const tableRow3 =document.createElement("tr");
const tableCol31 = document.createElement("td");
const tableCol32 = document.createElement("td");
const tableCol33 = document.createElement("td");
const tableCol34 = document.createElement("td");
const tableCol35 = document.createElement("td");




const tableColText31=document.createTextNode("Vishal Singh");
const tableColText32=document.createTextNode("21");
const tableColText33=document.createTextNode("2/05/2000");
const tableColText34=document.createTextNode("vishal.Singh@geminisolutions.com");
const tableColText35=document.createTextNode("Gemini Solutions");
tableCol31.append(tableColText31);
tableCol32.append(tableColText32);
tableCol33.append(tableColText33);
tableCol34.append(tableColText34);
tableCol35.append(tableColText35);

tableRow3.append(tableCol31);
tableRow3.append(tableCol32);
tableRow3.append(tableCol33);
tableRow3.append(tableCol34);
tableRow3.append(tableCol35);

tableMain.append(tableRow3);

// table data in row 4

const tableRow4 =document.createElement("tr");
const tableCol41 = document.createElement("td");
const tableCol42 = document.createElement("td");
const tableCol43 = document.createElement("td");
const tableCol44 = document.createElement("td");
const tableCol45 = document.createElement("td");




const tableColText41=document.createTextNode("Sriman Mishra");
const tableColText42=document.createTextNode("20");
const tableColText43=document.createTextNode("30/09/2001");
const tableColText44=document.createTextNode("Shriman.Mishra@geminisolutions.com");
const tableColText45=document.createTextNode("Gemini Solutions");
tableCol41.append(tableColText41);
tableCol42.append(tableColText42);
tableCol43.append(tableColText43);
tableCol44.append(tableColText44);
tableCol45.append(tableColText45);

tableRow4.append(tableCol41);
tableRow4.append(tableCol42);
tableRow4.append(tableCol43);
tableRow4.append(tableCol44);
tableRow4.append(tableCol45);

tableMain.append(tableRow4);

// table data in row 5

const tableRow5 =document.createElement("tr");
const tableCol51 = document.createElement("td");
const tableCol52 = document.createElement("td");
const tableCol53 = document.createElement("td");
const tableCol54 = document.createElement("td");
const tableCol55 = document.createElement("td");




const tableColText51=document.createTextNode("Shivani Upadhyay");
const tableColText52=document.createTextNode("29");
const tableColText53=document.createTextNode("11/10/2002");
const tableColText54=document.createTextNode("Shivani.Upadhyay@geminisolutions.com");
const tableColText55=document.createTextNode("Gemini Solutions");
tableCol51.append(tableColText51);
tableCol52.append(tableColText52);
tableCol53.append(tableColText53);
tableCol54.append(tableColText54);
tableCol55.append(tableColText55);

tableRow5.append(tableCol51);
tableRow5.append(tableCol52);
tableRow5.append(tableCol53);
tableRow5.append(tableCol54);
tableRow5.append(tableCol55);

tableMain.append(tableRow5);



// table data in row 6

const tableRow6 =document.createElement("tr");
const tableCol61 = document.createElement("td");
const tableCol62 = document.createElement("td");
const tableCol63 = document.createElement("td");
const tableCol64 = document.createElement("td");
const tableCol65 = document.createElement("td");

const tableColText61=document.createTextNode("Shreya Singhania");
const tableColText62=document.createTextNode("22");
const tableColText63=document.createTextNode("02/08/1999");
const tableColText64=document.createTextNode("Shreya.Singhania@geminisolutions.com");
const tableColText65=document.createTextNode("Gemini Solutions");
tableCol61.append(tableColText61);
tableCol62.append(tableColText62);
tableCol63.append(tableColText63);
tableCol64.append(tableColText64);
tableCol65.append(tableColText65);

tableRow6.append(tableCol61);
tableRow6.append(tableCol62);
tableRow6.append(tableCol63);
tableRow6.append(tableCol64);
tableRow6.append(tableCol65);

tableMain.append(tableRow6);

const mainDiv=document.createElement("div");
mainDiv.append(tableMain);

body.append(mainDiv);


// styling

tableMain.classList.add("table");
body.style.backgroundColor="black";
tableMain.style.backgroundColor="#989898 ";
mainDiv.classList.add("container-fluid");
mainDiv.classList.add("mt-2");

})();