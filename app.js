const main = document.querySelector(".main");
const cartBtn = document.querySelector("#cartbtn");

// const li = document.querySelector("li");
let phones = [
  {
    id: 1,
    img: "./Assets/Mobile Phones/S24-ultra.png",
    brand: "Samsung",
    model: "S24 Ultra",
    ram: 12,
    rom: 256,
    camera: "200 megapixel",
    price: 350000,
  },
  {
    id: 2,
    img: "./Assets/Mobile Phones/Zfold 5.png",
    brand: "Samsung ZFold",
    model: " 5",
    ram: 12,
    rom: 256,
    camera: "150 MP",
    price: 600000,
  },
  {
    id: 3,
    img: "./Assets/Mobile Phones/Z-flip-3.png",
    brand: "Samsung ZFlip",
    model: "3",
    ram: 12,
    rom: 256,
    camera: "150 MP",
    price: 350000,
  },
  {
    id: 4,
    img: "./Assets/Mobile Phones/Honor X50.png",
    brand: "Honor",
    model: "X50",
    ram: 8,
    rom: 128,
    camera: "108 megapixel",
    price: 168000,
  },
  {
    id: 5,
    img: "./Assets/Mobile Phones/Iphone 13 Mini.png",
    brand: "Iphone",
    model: "13 Mini",
    ram: 4,
    rom: 64,
    camera: "13 MP",
    price: 100000,
  },
  {
    id: 6,
    img: "./Assets/Mobile Phones/Iphone 13 Pro Max.png",
    brand: "Iphone",
    model: "13 pro max",
    ram: 6,
    rom: 128,
    camera: "20 MP",
    price: 250000,
  },
  {
    id: 7,
    img: "./Assets/Mobile Phones/Iphone 14.png",
    brand: "Iphone",
    model: "14",
    ram: 6,
    rom: 128,
    camera: "30 MP",
    price: 365000,
  },
  {
    id: 8,
    img: "./Assets/Mobile Phones/Iphone 15 pro max.png",
    brand: "Iphone",
    model: "15 pro max",
    ram: 8,
    rom: 512,
    camera: "35 MP",
    price: 565000,
  },
  {
    id: 9,
    img: "./Assets/Mobile Phones/Ipad_Pro_12.9_inch.png",
    brand: "Ipad",
    model: "Pro 12.9 INCHES",
    ram: 4,
    rom: 128,
    camera: "13 MP",
    price: 350000,
  },
  {
    id: 10,
    img: "./Assets/Mobile Phones/oneplus Mclaren.png",
    brand: "Oneplus",
    model: "7T McLaren Edition",
    ram: 12,
    rom: 265,
    camera: "117 MP",
    price: 70000,
  },
  {
    id: 11,
    img: "./Assets/Mobile Phones/oneplus 9.png",
    brand: "Oneplus",
    model: "9",
    ram: 8,
    rom: 265,
    camera: "150 MP",
    price: 120000,
  },
  {
    id: 12,
    img: "./Assets/Mobile Phones/oneplus-12.png",
    brand: "Oneplus",
    model: "12",
    ram: 12,
    rom: 512,
    camera: "110 MP",
    price: 250000,
  },
  {
    id: 13,
    img: "./Assets/Mobile Phones/MI 10T.png",
    brand: "Xiaomi",
    model: "10T",
    ram: 8,
    rom: 128,
    camera: "60MP",
    price: 60000,
  },
  {
    id: 14,
    img: "./Assets/Mobile Phones/MI 12 pro.png",
    brand: "Oneplus",
    model: "7T McLaren Edition",
    ram: 12,
    rom: 265,
    camera: "117 MP",
    price: 70000,
  },
  {
    id: 15,
    img: "./Assets/Mobile Phones/XiaomiMi11Ultra.png",
    brand: "Xiaomi",
    model: "11 Ultra",
    ram: 8,
    rom: 265,
    camera: " 108MP",
    price: 113000,
  },
  {
    id: 16,
    img: "./Assets/Mobile Phones/Redmi-Note-10-Pro.png",
    brand: "Xiaomi",
    model: "Redmi Note 10 Pro",
    ram: 6,
    rom: 128,
    camera: " 108MP",
    price: 55000,
  },
];

for (let i = 0; i < phones.length; i++) {
  console.log(phones);
  main.innerHTML += `
  <div class="card">
  <div class="content">
    <div class="back">
      <div class="back-content">
        <img
          src="${phones[i].img}"
          alt=""
          class="img-card"
        />
      </div>
    </div>
    <div class="front">
      <div class="img">
        <div class="circle"></div>
        <div class="circle" id="right"></div>
        <div class="circle" id="bottom"></div>
      </div>

      <div class="front-content">
        <div class="description">
          <div class="title">
            <h1 class="title">
              <ul class="des-ul"><li>${phones[i].brand}</li>
              <li>${phones[i].model}</li>
              <li>${phones[i].ram} GB RAM</li>
              <li>${phones[i].rom} GB ROM</li>
              <li>${phones[i].camera}</li>
              <li>${phones[i].price} PKR</li>
              <button onclick='addtocart(${i}, ${phones[i].id})' class="addBtn">Add to cart</button></ul>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
  
  `;
}

function addtocart(itemIndex, id) {
  Swal.fire({
    title: "Item Added to the Cart",
    text: "Proceed  to the next page to see your added items!",
    icon: "success"
  });
  console.log(id, "id");
  let CartItems = JSON.parse(localStorage.getItem("CartInfo")) ?? [];
  let currentCartItem = null;

  console.log(
    CartItems.find((item) => item.id === id),
    "itemquery"
  );
  if (CartItems.find((item) => item.id === id)) {
    currentCartItem = CartItems.find((item) => item.id === id);
    currentCartItem.quantity = currentCartItem.quantity + 1;
    console.log(currentCartItem, "current cart items");
    CartItems[itemIndex] = currentCartItem;
  } else {
    currentCartItem = phones[itemIndex];
    currentCartItem.quantity = 1;
    CartItems.push(currentCartItem);
  }

  console.log(CartItems);
  localStorage.setItem(`CartInfo`, JSON.stringify(CartItems));
}

function cart() {
  window.location = "cart.html";
}
