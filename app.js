const products = [

{
name:"Laptop",
price:"₹50000"
},

{
name:"Mobile",
price:"₹20000"
},

{
name:"Headphones",
price:"₹3000"
}

];

const container =
document.getElementById("productContainer");

const search =
document.getElementById("search");

function displayProducts(items){

if(!container) return;

container.innerHTML="";

items.forEach(product=>{

container.innerHTML += `
<div class="card">
<h3>${product.name}</h3>
<p>${product.price}</p>
</div>
`;

});
}

if(search){

displayProducts(products);

search.addEventListener("input",()=>{

const filtered =
products.filter(product =>
product.name
.toLowerCase()
.includes(search.value.toLowerCase())
);

displayProducts(filtered);

});
}