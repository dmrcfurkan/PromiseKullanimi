const getData = async (url) => {
  return fetch(url).then((response) => response.json());
};
getData("https://dummyjson.com/products/").then((data) => {
  console.log(data);
  const getProduct = document.querySelector(".products-info");
  data.products.forEach((data) => {
    const productWrapper = document.createElement("div");
    productWrapper.classList.add("product");

    productWrapper.innerHTML = `
    <h3 class="product-title"> ${data.title} </h3>
    <p class="price"> Price: ${data.price}$ </p>
    <img src="${data.thumbnail}" class="product-img" />
    <div class="buy-see"> 
        <a class="btn-secondary buy">BUY NOW </a> 
        <a class="btn-primary see">SEE MORE</a> 
    </div>
    `;
    getProduct.appendChild(productWrapper);

    console.log(data.category);
    //const searchButton = document.querySelector(".btn-secondary");
    const searchText = document.querySelector(".search");
    searchText.addEventListener("input", () => {
      for (let i = 0; i < data.category.length; i++) {
        if (data.category.indexOf(searchText.value)) {
          productWrapper.style.display = "none";
        } else {
          productWrapper.style.display = "block";
        }
      }
    });
    const allCategories = document.querySelector(".dropdown-btn");
    allCategories.addEventListener("click", () => {
      productWrapper.style.display = "block";
    });
  });
});
setTimeout(() => {
  const hamburger = document.querySelector(".Hamburger-bar");
  const getSidebar = document.querySelector(".side-nav");
  const closeSide = document.querySelector(".closebtn");
  hamburger.addEventListener("click", () => {
    getSidebar.style.width = "250px";
  });
  closeSide.addEventListener("click", () => {
    getSidebar.style.width = "0px";
  });
}, 1000);
