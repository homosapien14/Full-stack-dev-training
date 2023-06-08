// creating navbar using JS
var cartValue = 0;

const navbarRoot = document.getElementById("nav-container");
const mainContainer = document.getElementsByClassName("main-container")[0];
console.log(mainContainer);
//logo
const logoContainer = () => {
  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  const logo = document.createElement("i");
  logo.className = "fa-brands fa-slack fa-2xl logo";
  const logoText = document.createElement("h2");
  logoText.className = "text";
  logoText.innerHTML = "Carrefour";
  var logoItems = [logo, logoText];
  logoContainer.append(...logoItems);

  return logoContainer;
};

const searchBar = () => {
  //<li class="search-bar"><input type="text" placeholder="Search" name="search"><i class="fa-solid fa-magnifying-glass fa-lg icon"></i></li>

  const searchContainer = document.createElement("div");
  searchContainer.className = "search-bar";
  const inputBox = document.createElement("input");
  inputBox.setAttribute("placeholder", "Search");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("name", "search");
  const searchIcon = document.createElement("div");

  searchIcon.className = "fa-solid fa-magnifying-glass fa-lg icon";

  searchContainer.append(inputBox, searchIcon);

  return searchContainer;
};

const deliverAddress = () => {
  const deliverContainer = document.createElement("div");
  deliverContainer.className = "deliver-container";

  // <li><a href="#"><i class="fa-solid fa-location-dot  fa-lg"></i><h5  class="text" style="display: inline-block;">&nbsp Deliver to<br>&nbsp Dubai</h5></a></li>
  const locationIcon = document.createElement("div");
  locationIcon.className = "fa-solid fa-location-dot  fa-xl icon";
  const addressContainer = document.createElement("div");
  addressContainer.className = "address-container";
  const address1 = document.createElement("div");
  address1.className = "address text";
  address1.innerHTML = "Deliver to";

  const address2 = document.createElement("div");
  address2.className = "address text";
  address2.innerHTML = "Dubai Festival city - D...";
  addressContainer.append(address1, address2);

  deliverContainer.append(locationIcon, addressContainer);

  return deliverContainer;
};

const loginContainer = () => {
  // <li><a href="#"><i class="fa-solid fa-user fa-lg"></i><h5 class="text" style="display: inline-block;">&nbsp Login & Register</h5></a></li>
  const loginContainer = document.createElement("div");
  loginContainer.className = "login-container";

  const userIcon = document.createElement("div");
  userIcon.className = "fa-solid fa-user fa-xl icon";
  const loginText = document.createElement("div");
  loginText.className = "text";
  loginText.innerHTML = "Login & Register";

  loginContainer.append(userIcon, loginText);
  return loginContainer;
};

const flagContainer = () => {
  const flagContainer = document.createElement("div");
  flagContainer.className = "flag-container";
  const flagImage = document.createElement("img");
  flagImage.setAttribute(
    "src",
    "https://cdnprod.mafretailproxy.com/assets/flags/AE_3cd82801fe.png"
  );
  flagImage.setAttribute("alt", "AE");
  flagImage.setAttribute("height", "20px");

  const downSvg = document.createElement("div");
  downSvg.innerHTML =
    '<svg data-testid="ChevronDown" viewBox="0 0 12 14" class="css-2wfeb7"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.21967 5.21967C3.48594 4.9534 3.9026 4.9292 4.19621 5.14705L4.28033 5.21967L7.75 8.689L11.2197 5.21967C11.4859 4.9534 11.9026 4.9292 12.1962 5.14705L12.2803 5.21967C12.5466 5.48594 12.5708 5.9026 12.3529 6.19621L12.2803 6.28033L8.28033 10.2803C8.01406 10.5466 7.5974 10.5708 7.30379 10.3529L7.21967 10.2803L3.21967 6.28033C2.92678 5.98744 2.92678 5.51256 3.21967 5.21967Z" fill="#0E5AA7"></path></svg>';
  downSvg.setAttribute("style", "width:22px;");
  flagContainer.append(flagImage, downSvg);
  return flagContainer;
};

const cartContainer = (cartValue) => {
  // console.log(navbarRoot.length);
  const lastElem = navbarRoot.lastElementChild;
  if (lastElem) {
    navbarRoot.removeChild(navbarRoot.lastElementChild);
  }
  const cartContainer = document.createElement("div");
  cartContainer.className = "cart-container";
  const cartIcon = document.createElement("div");
  cartIcon.className = "fa-solid fa-cart-shopping fa-xl icon";

  const cartText = document.createElement("div");
  cartText.className = "cart-text";
  cartText.innerHTML = cartValue;

  cartContainer.append(cartIcon, cartText);
  return cartContainer;
};
//main
const asideContainer = () => {
  const asideBar = document.createElement("aside");
  asideBar.className = "sidebar";
  const heading = document.createElement("h2");
  heading.innerHTML = "Categories";
  const productList = document.createElement("ul");
  const list = [
    "Electronics",
    "Home Appliances",
    "Beauty & Personal Care",
    "Groceries",
    "Electronics",
    "Home Appliances",
    "Beauty & Personal Care",
    "Groceries",
    "Electronics",
    "Home Appliances",
    "Beauty & Personal Care",
    "Groceries",
  ];

  for (let i = 0; i < list.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = list[i];
    productList.append(listItem);
  }

  asideBar.append(heading, productList);
  return asideBar;
};

const productContent = () => {
  const productContent = document.createElement("div");
  productContent.className = "products";
  for (let i = 0; i < 12; i++) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const productImage = document.createElement("img");
    productImage.setAttribute("src", "./iphone.jpg");
    productImage.setAttribute("alt", "iphone.jpg");
    const productName = document.createElement("h3");
    productName.innerHTML = "iPhone";
    const productDescription = document.createElement("p");
    productDescription.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const productPrice = document.createElement("p");
    productPrice.innerHTML = "<b>AED 2,947/piece</b>";

    const productButton = document.createElement("button");
    productButton.className = "add-to-cart";
    productButton.innerHTML = "+";

    productCard.append(
      productImage,
      productName,
      productDescription,
      productPrice,
      productButton
    );

    productContent.append(productCard);
  }

  return productContent;
};

navbarRoot.append(
  logoContainer(),
  searchBar(),
  deliverAddress(),
  loginContainer(),
  flagContainer(),
  cartContainer(cartValue)
);
mainContainer.append(asideContainer(), productContent());

//button event listener and updating cart items number
var addToCartButtons = document.getElementsByClassName("add-to-cart");
var cartItemsCount = document.getElementsByClassName("cart-text");
console.log(cartItemsCount[0]);

for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", function () {
    console.log("->>>>", cartItemsCount.innerHTML);
    var itemCount = parseInt(cartItemsCount[0].innerHTML);

    if (this.textContent === "+") {
      itemCount++;
      this.textContent = "-";
    } else {
      itemCount--;
      this.textContent = "+";
    }

    navbarRoot.append(cartContainer(itemCount));
  });
}

console.log(cartItemsCount.innerHTML);
