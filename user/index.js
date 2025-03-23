card_data = [{
  title:"Burger",
  img:'/assets/1.png',
  amt:'0'
},
{
title:"Sandwich",
img:"/assets/2.png",
amt:'0'
},
{
title:"Samosa",
img:"/assets/3.png",
amt:'0'
}
]


let time = new Date();
let day = time.getDate();
let month = time.getMonth()+1;
let year  = time.getFullYear()
const date_doc = document.getElementById("date");

date_doc.innerHTML=`${day}/${month}/${year}`

const menu_doc = document.getElementById("menu");
let get_id_storage = JSON.parse(localStorage.getItem("idval"));
let get_amt_storage = JSON.parse(localStorage.getItem("amtval"));

const usrmsg_doc = document.getElementById("usrmsg");
let check=0;
const main_doc = document.getElementById("main")

function createCard(card_data,i){
  const card = document.createElement("div");
  const title = document.createElement("div");
  const fimg = document.createElement("img");
  const amount = document.createElement("div");

card.classList.add("card")
title.classList.add("cardhead")
amount.classList.add("centeralign")

  title.innerHTML = `${card_data[i].title}`;
  fimg.src = card_data[i].img;
  card_data[i].amt = get_amt_storage[i];
  amount.innerHTML = `Quantity: ${card_data[i].amt}`;

  card.appendChild(title);
  card.appendChild(fimg);
  card.appendChild(amount);

 return card;

}

for(let i=0;i<get_id_storage.length;i++){
  if(get_id_storage[i]!=0){
    const card = createCard(card_data,i);
    menu_doc.appendChild(card);
  }
}

function checkEmpty(){
  
  for(let i=0;i<get_amt_storage.length;i++){
    if(get_amt_storage[i]!=0){
      check=1
      break;
    }
  }

  if(check==1){
   usrmsg_doc.style.display="none" ;
  }
  else{
    usrmsg_doc.style.display="block";
    
  }

}

checkEmpty();