card_data = [{
  title:"Burger",
  img:"#",
  amt:'0'
},
{
title:"Sandwich",
img:"#",
amt:'0'
},
{
title:"Puffs",
img:"#",
amt:'0'
}
]



const menu_doc = document.getElementById("menu");
let get_id_storage = JSON.parse(localStorage.getItem("idval"));
let get_amt_storage = JSON.parse(localStorage.getItem("amtval"));

function createCard(card_data,i){
  const card = document.createElement("div");
  const title = document.createElement("div");
  const fimg = document.createElement("img");
  const amount = document.createElement("div");

  title.innerHTML = `${card_data[i].title}`;
  fimg.src = `${card_data[i].img}`;
  card_data[i].amt = get_amt_storage[i];
  amount.innerHTML = `Available: ${card_data[i].amt}`;

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

