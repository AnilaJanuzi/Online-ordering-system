// Dynamic Product List for Products Page
if (window.location.pathname.includes("products.html")) {
    const products = [
      {
        name: "Galaxy Grape",
        description: "A cosmic blend of grape flavors.",
        image: "images/galaxy-grape.jpg",
        link: "order.html?product=Galaxy%20Grape",
      },
      {
        name: "Stellar Strawberry",
        description: "Strawberry with a starry twist.",
        image: "images/stellar-strawberry.webp",
        link: "order.html?product=Stellar%20Strawberry",
      },
      {
        name: "Milky Way Mocha",
        description: "Coffee that takes you to the Milky Way.",
        image: "images/milky-way-mocha.jpg",
        link: "order.html?product=Milky%20Way%20Mocha",
      },
      {
        name: "Orbit Orange",
        description: "Citrusy goodness from outer space.",
        image: "images/orbit-orange.jpg",
        link: "order.html?product=Orbit%20Orange",
      },
      {
        name: "Nebula Nectar",
        description: "A mysterious mix of tropical fruits.",
        image: "images/nebula-nectar.webp",
        link: "order.html?product=Nebula%20Nectar",
      },

      {
        name: "Iced Cappuccino",
        description: "A refreshing coffee drink made with espresso, cold milk.",
        image: "images/IcedCappuccino.jpg",
        link: "order.html?product=Iced%20Cappuccino",
      },

      {
        name: "Frappuccino",
        description: "Lended coffee drink made with ice, coffee, milk, and flavored syrups, topped with whipped cream.",
        image: "images/Frappuccino.jpg",
        link: "order.html?product=Frappuccino",
      },

      {
        name: "Hot Chocolate",
        description: "Creamy beverage made with steamed milk and velvety chocolate syrup, topped with whipped cream.",
        image: "images/hotChocolate.jpg",
        link: "order.html?product=Hot%20Chocolate",
      },

      
     
    ];
  
    const productList = document.getElementById("product-list");
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.link}" class="cta-button">Order Now</a>
      `;
      productList.appendChild(productCard);
    });
  }




  // the order part

  // Order Page Functionality
if (window.location.pathname.includes("order.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("product");
  
    // Pre-fill the product name in the form
    const productInput = document.getElementById("product");
    if (productName) {
      productInput.value = productName;
    }
  
    // Handle Order Form Submission
    const orderForm = document.getElementById("order-form");
  
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const product = document.getElementById("product").value;
      const quantity = document.getElementById("quantity").value;
      const address = document.getElementById("address").value;
  
      alert(
        `Thank you, ${name}! Your order for ${quantity} ${product}(s) has been placed. We will deliver it to ${address}.`
      );
  
      orderForm.reset();
    });
  }