let item_arr=new Array(10);
let upd_item_arr = [];
let amt_arr=new Array(10);
let amt_store_str;
let id_store_str;
let id_get_store;
let amt_get_store;

// setting the amount array to be empty number 0
for(let j=0;j<amt_arr.length;j++){
  amt_arr[j]=0;
}


const m1_doc = document.getElementById("1");
const m2_doc = document.getElementById("2");
const m3_doc = document.getElementById("3");

const in1_doc = document.getElementById("i1");
const in2_doc = document.getElementById("i2");
const in3_doc = document.getElementById("i3");


const b1_doc = document.getElementById("b1");
const b2_doc = document.getElementById("b2");
const b3_doc = document.getElementById("b3");

const amtshow_doc1 = document.getElementById("amt1");
const amtshow_doc2 = document.getElementById("amt2");
const amtshow_doc3 = document.getElementById("amt3");


const addb1_doc = document.getElementById("addb1");
const addb2_doc = document.getElementById("addb2");
const addb3_doc = document.getElementById("addb3");

const subb1_doc = document.getElementById("subb1");
const subb2_doc = document.getElementById("subb2");
const subb3_doc = document.getElementById("subb3");



b1_doc.addEventListener("click",function(){

  if(in1_doc.value!=""){
item_arr.splice(0,1,m1_doc.id);
//amt_arr.push(in1_doc.value);
amt_arr.splice(0,1,in1_doc.value);
amtshow_doc1.innerHTML = amt_arr[0];
addtostorage();

in1_doc.value=""

  }
  else{
    alert("Please enter a value")
  }
})

b2_doc.addEventListener("click",function(){
  if(in2_doc.value!=""){
    item_arr.splice(1,1,m2_doc.id);

//amt_arr.push(in2_doc.value);
amt_arr.splice(1,1,in2_doc.value);
amtshow_doc2.innerHTML = amt_arr[1];
addtostorage()
in2_doc.value=""


  }
  else{
    alert("Please enter a value")
  }


  })
  
b3_doc.addEventListener("click",function(){
  if(in3_doc.value!=""){
item_arr.splice(2,1,m3_doc.id);
    
//amt_arr.push(in3_doc.value);
amt_arr.splice(2,1,in3_doc.value);
amtshow_doc3.innerHTML = amt_arr[2];
addtostorage()

in3_doc.value=""


  }
  else{
    alert("Please enter a value")
  }


    })
// **** TESTING ****
    /*addb1_doc.addEventListener("click",function(){
      amt_arr[0]+=1;
      amtshow_doc1.innerHTML=amt_arr[0];
    })*/
   // **** TESTING ****

   // INCREMENT BUTTON 
   Incr(addb1_doc,amt_arr,amtshow_doc1,0);
   Incr(addb2_doc,amt_arr,amtshow_doc2,1);
   Incr(addb3_doc,amt_arr,amtshow_doc3,2);
   
   // DECREMENT BUTTON 
   Decr(subb1_doc,amt_arr,amtshow_doc1,0);
   Decr(subb2_doc,amt_arr,amtshow_doc2,1);
   Decr(subb3_doc,amt_arr,amtshow_doc3,2);

function addtostorage(){
amt_store_str = JSON.stringify(amt_arr);
  localStorage.setItem("amtval",amt_store_str);

  upd_item_arr = item_arr.slice();

  for(let i=0;i<item_arr.length;i++){
    if(amt_arr[i]==0){
      upd_item_arr[i]=""
    }
  }
  id_store_str = JSON.stringify(upd_item_arr);
  localStorage.setItem("idval",id_store_str);
}

function Incr(doc,val,disp,i){
doc.addEventListener("click",function(){
  val[i]+=1;
  disp.innerHTML=val[i];
})
}

function Decr(doc,val,disp,i){
  doc.addEventListener("click",function(){
    val[i]-=1;
    disp.innerHTML=val[i];
  })
  }

// get element id
//console.log(m1_doc.id);