const hero = () => {
  const heroSection = document.getElementById("hero-section");
  const heroButton = document.getElementById("toggle-hero-button");
  if (heroSection.style.display === "none") {
    heroSection.style.display = "block";
    heroButton.textContent = "Hide Hero Section";
  } else {
    heroSection.style.display = "none";
    heroButton.textContent = "Show Hero Section";
  }
};

const products = [
  {
    title: "Cap",
    price: 1000.00,
    category: "Men",
    image: "./images/Screenshot 2025-08-02 105016.png"
  },
  {
    title: "Block Print Dupatta",
    price: 450.00,
    category: "Accessories",
    image: "./images/image.png"
  },
  {
    title: "Embroidered Bag",
    price: 1500.00, 
    category: "Accessories",
    image: "./images/Screenshot 2025-08-02 104940.png"
  },
  {
    title: "Silk Saree",
    price: 3500.00,
    category: "Women",
    image: "./images/image.png"
  },
  {
    title: "Woolen cap",
    price: 950.00,
    category: "Accessories",
    image: "./images/Screenshot 2025-08-02 104953.png"
  },
  {
    title: "Cashmere Sweater",
    price: 1500.00,
    category: "Women",
    image: "./images/image.png"
  },
  {
    title: "Peacoat Jacket",
    price: 5000.00,
    category: "Men",
    image: "./images/image.png"
  },
  {
    title: "Denim Jeans",
    price: 999.00,
    category: "Men",
    image: "./images/Screenshot 2025-08-02 105202.png"
  },
  {
    title: "Summer Dress",
    price: 5500.00,
    category: "Women",
    image: "./images/image.png"
  },
  {
    title: "Summer Sandals",
    price: 2500.00,
    category: "Women",
    image: "./images/Screenshot 2025-08-02 104740.png"
  }
];

const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category-filter");
const priceSort = document.getElementById("price-sort");

function renderProducts(productArray) {
  productList.innerHTML = "";

  productArray.forEach(product => {
    const productCard = document.createElement("article");
    productCard.classList.add("product");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;

    productList.appendChild(productCard);
  });

  addToCartHandlers();
}

function filterAndSort() {
  let filtered = [...products];
  const selectedCategory = categoryFilter.value;
  const sortOrder = priceSort.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (sortOrder === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

let total = 0;
const totalDisplay = document.createElement("p");
totalDisplay.id = "total-price";
totalDisplay.textContent = "Total: $0.00";
document.body.appendChild(totalDisplay);

function addToCartHandlers() {
  const cartButtons = document.querySelectorAll(".add-to-cart");
  cartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const price = parseFloat(btn.parentElement.querySelector(".price").textContent.replace("$", ""));
      total += price;
      totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    });
  });
}

categoryFilter.addEventListener("change", filterAndSort);
priceSort.addEventListener("change", filterAndSort);

renderProducts(products);
