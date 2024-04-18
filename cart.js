let main = document.querySelector(".main");
// let div = document.querySelector("div");
let product = JSON.parse(localStorage.getItem("CartInfo"));
console.log(product);

if (product) {
  loop(product);
}
function loop() {
  for (let i = 0; i < product.length; i++) {
    main.innerHTML += ` <div class="card">
    <div class="content">
      <div class="back">
        <div class="back-content">
          <img
            src="${product[i].img}"
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
                <ul class="des-ul"><li>${product[i].brand}</li>
                <li>${product[i].model}</li>
                <li>${product[i].quantity} </li>
                <li>${product[i].price} PKR</li>
                <button class="add-btn"  onclick="add(${i})">
                <span class="btn-text-one">+</span>
                <span class="btn-text-two">Add it!</span>
                </button>
                <span id="span">${product[i].quantity}</span>
                <button class="add-btn" onclick="subtract(${i})">
                <span class="btn-text-one">-</span>
                <span class="btn-text-two">remove it!</span>
                </button></li>
                <li id="list"><button class="delete-button"  onclick="remove(${i})">
                <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
              </button></li>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        
       `;
  }
}

function remove(index) {
  main.innerHTML = "";
  product.splice(index, 1);
  localStorage.setItem("CartInfo", JSON.stringify(product));
  loop(product);
}
function add(addItem) {
  // let span = document.querySelector("#span")
  main.innerHTML = "";
  product[addItem].quantity++;

  // span.innerHTML=add;
  localStorage.setItem("CartInfo", JSON.stringify(product));
  loop(product);
}
function subtract(subtractItem) {
  main.innerHTML = "";
  let quan = product[subtractItem].quantity--;
  if (quan == 1) {
    ul.innerHTML = "";
    product.splice(subtractItem, 1);
  }
  localStorage.setItem("CartInfo", JSON.stringify(product));
  loop(product);
}

function Home(params) {
  window.location="index.html"
}
// function add(addItem) {
//   // product[addItem].quantity++;
//     product[addItem].quantity++; // Increment quantity
//     localStorage.setItem("CartInfo", JSON.stringify(product));
//     // loop(product); // Update displayed items
//   }
