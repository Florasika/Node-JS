const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 20,
    image: "https://picsum.photos/200?random=1"
  },
  {
    id: 2,
    name: "Chaussures",
    price: 50,
    image: "https://picsum.photos/200?random=2"
  },
  {
    id: 3,
    name: "Casquette",
    price: 15,
    image: "https://picsum.photos/200?random=3"
  }
];

const productsContainer = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
    <img src="${product.image}" />
    <h3>${product.name}</h3>
    <p>${product.price} €</p>
    <button onclick="addToCart(${product.id})">Ajouter au panier</button>
  `;

  productsContainer.appendChild(div);
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(p => p.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

const cartContainer = document.getElementById("cart");
const totalContainer = document.getElementById("total");

function displayCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${item.name} x${item.quantity}
      <button onclick="removeFromCart(${item.id})">❌</button>
    `;

    cartContainer.appendChild(li);
    total += item.price * item.quantity;
  });

  totalContainer.textContent = total;
}

displayCart();