let item_arr=new Array(10).fill(0);
let upd_item_arr = [];
let amt_arr=new Array(10).fill(0);
let amt_store_str;
let id_store_str;
let id_get_store;
let amt_get_store;

const time = new Date();

let day = time.getDate();
let month = time.getMonth()+1;
let year = time.getFullYear();

/*setting the amount array to be empty number 0
for(let j=0;j<amt_arr.length;j++){
  amt_arr[j]=0;
}
for(let j=0;j<item_arr.length;j++){
  item_arr[j]=0;
}
  */

const date_doc = document.getElementById("date");
  date_doc.innerHTML = `${day}/${month}/${year}`;


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

let temp_store1 = JSON.parse(localStorage.getItem("amtval"))

if(temp_store1==0){
localStorage.setItem("amtval",JSON.stringify([]))
}
let get_amt_storage= JSON.parse(localStorage.getItem("amtval"));


//updateAdminVal();



for(let i=0;i<get_amt_storage.length;i++){
  amt_arr[i] = get_amt_storage[i];

  
}

// CHANGE THIS (DRY)
if(amt_arr[0]!=0){
  item_arr.splice(0,1,m1_doc.id)
}
if(amt_arr[1]!=0){
  item_arr.splice(1,1,m2_doc.id)
}


if(amt_arr[2]!=0){
  item_arr.splice(2,1,m3_doc.id)
}







b1_doc.addEventListener("click",function(){
updateAdminVal();
  if(in1_doc.value!=""){
item_arr.splice(0,1,m1_doc.id);
amt_arr.splice(0,1,in1_doc.value);
amtshow_doc1.innerHTML = `Quantity: ${amt_arr[0]}`;
//when we get input from input box when need to get it as number not string otherwise it gets concatenated!
amt_arr[0] =parseInt(amt_arr[0]);
addtostorage();

in1_doc.value=""

  }
  else{
    alert("Please enter a value")
  }
})

b2_doc.addEventListener("click",function(){
updateAdminVal();

  if(in2_doc.value!=""){
    item_arr.splice(1,1,m2_doc.id);

//amt_arr.push(in2_doc.value);
amt_arr.splice(1,1,in2_doc.value);
amtshow_doc2.innerHTML = `Quantity:${amt_arr[1]}`;
amt_arr[1] =parseInt(amt_arr[1]);

addtostorage()
in2_doc.value=""


  }
  else{
    alert("Please enter a value")
  }


  })
  
b3_doc.addEventListener("click",function(){
updateAdminVal();

  if(in3_doc.value!=""){
item_arr.splice(2,1,m3_doc.id);
    
//amt_arr.push(in3_doc.value);
amt_arr.splice(2,1,in3_doc.value);
amtshow_doc3.innerHTML = `Quantity:${amt_arr[2]}`;
amt_arr[2] =parseInt(amt_arr[2]);

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
   Incr(addb1_doc,amt_arr,amtshow_doc1,0,m1_doc);
   Incr(addb2_doc,amt_arr,amtshow_doc2,1,m2_doc);
   Incr(addb3_doc,amt_arr,amtshow_doc3,2,m3_doc);
   
   // DECREMENT BUTTON 
   Decr(subb1_doc,amt_arr,amtshow_doc1,0,m1_doc);
   Decr(subb2_doc,amt_arr,amtshow_doc2,1,m2_doc);
   Decr(subb3_doc,amt_arr,amtshow_doc3,2,m3_doc);

   

function addtostorage(){
amt_store_str = JSON.stringify(amt_arr);
  localStorage.setItem("amtval",amt_store_str);

  upd_item_arr = item_arr.slice();

  for(let i=0;i<item_arr.length;i++){
    if(amt_arr[i]==0){
      upd_item_arr[i]=0
    }
    
  }
  id_store_str = JSON.stringify(upd_item_arr);
  localStorage.setItem("idval",id_store_str);
}

function Incr(doc,val,disp,i,iddoc){
  updateAdminVal();


doc.addEventListener("click",function(){
  val[i]+=1;
  disp.innerHTML=`Quantity:${val[i]}`;
  addtostorage()
  if(val[i]!=0){
    item_arr.splice(i,1,iddoc.id)
    upd_item_arr = item_arr.splice()
  }
  else{
    item_arr.splice(i,1,0)
    upd_item_arr = item_arr.splice()
  }
})
}

function Decr(doc,val,disp,i,iddoc){
updateAdminVal();

  doc.addEventListener("click",function(){
    val[i]-=1;
    disp.innerHTML=`Quantity:${val[i]}`;
    addtostorage()
    if(val[i]!=0){
      item_arr.splice(i,1,iddoc.id)
      upd_item_arr = item_arr.splice()
    }
    else{
      item_arr.splice(i,1,0)
      upd_item_arr = item_arr.splice()
    }
  })
  }
  function updateAdminVal(){

    for(let i=0;i<get_amt_storage.length;i++){
      amtshow_doc1.innerHTML = `Quantity:${get_amt_storage[0]}`;
      amtshow_doc2.innerHTML = `Quantity:${get_amt_storage[1]}`;
      amtshow_doc3.innerHTML = `Quantity:${get_amt_storage[2]}`;
    
    }
    }
    

  

// get element id
//console.log(m1_doc.id);