let item_arr = [];
let amt_arr=new Array(10);
const m1_doc = document.getElementById("1");
const m2_doc = document.getElementById("2");
const m3_doc = document.getElementById("3");

const in1_doc = document.getElementById("i1");
const in2_doc = document.getElementById("i2");
const in3_doc = document.getElementById("i3");


const b1_doc = document.getElementById("b1");
const b2_doc = document.getElementById("b2");
const b3_doc = document.getElementById("b3");

b1_doc.addEventListener("click",function(){

  if(in1_doc.value!=""){
item_arr.push(m1_doc.id);
//amt_arr.push(in1_doc.value);
amt_arr.splice(0,1,in1_doc.value);
in1_doc.value=""
  }
  else{
    alert("Please enter a value")
  }
})

b2_doc.addEventListener("click",function(){
  if(in2_doc.value!=""){
  item_arr.push(m2_doc.id);
//amt_arr.push(in2_doc.value);
amt_arr.splice(1,1,in2_doc.value);


in2_doc.value=""
  }
  else{
    alert("Please enter a value")
  }


  })
  
b3_doc.addEventListener("click",function(){
  if(in3_doc.value!=""){
    item_arr.push(m3_doc.id);
//amt_arr.push(in3_doc.value);
amt_arr.splice(2,1,in3_doc.value);

in3_doc.value=""
  }
  else{
    alert("Please enter a value")
  }


    })



// get element id
//console.log(m1_doc.id);