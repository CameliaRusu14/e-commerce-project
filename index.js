const produse = [
    {
      id: "1",
      avatar:
        "https://cdn.shopify.com/s/files/1/0074/0832/0621/products/851770003179-v11-ProteinPowder-2.03lb-Chocolate-Front-HIRES-shopify_800px_540x.jpg?v=1627934769",
      name: "Organic Protein 500g",
      price: "$25"
    },
  
    {
      id: "2",
      avatar:
        "https://dl.airtable.com/.attachments/56a0a7dd86be32b8cd5bfa2bbc58d5c0/aa471b40/Ora_SLSC-CHOC-Website.jpg",
      name: "Ora Protein 500g",
      price: "$30"
    },
  
    {
      id: "3",
      avatar:
        "https://highenergy.ro/983-large_default/vivo-whole-shake-nutritiv-din-plante-aroma-de-caramel-cu-biscuiti-1kg.jpg",
      name: "Vivo Whole Protein 1kg",
      price: "$40"
    },
  
    {
      id: "4",
      avatar:
        "https://highenergy.ro/1181-large_default/phd-diet-plant-protein-ciocolata-belgiana-500g.jpg",
      name: "PHD Diet Plant Protein 500g",
      price: "$25"
    },
    {
      id: "5",
      avatar:
        "https://highenergy.ro/409-large_default/vivo-perform-proteine-vegetale-bcaa-aroma-de-caramel-maca-532g.jpg",
      name: "Vivo Protein 500g",
      price: "$30"
    },
    {
      id: "6",
      avatar:
        "https://highenergy.ro/950-large_default/vivo-whole-shake-nutritiv-din-plante-aroma-de-capsuni-1kg.jpg",
      name: "Vivo Whole Plant 1kg",
      price: "$40"
    },
    {
      id: "7",
      avatar:
        "https://static.thcdn.com/images/large/webp//productimg/1600/1600/10529701-1724835571924615.jpg",
      name: "MyProtein Soy Protein Isolate 500g",
      price: "$30"
    },
    {
        id: "8",
        avatar:
          "https://highenergy.ro/1450-large_default/vivo-life-vegan-protein-proteine-vegetale-fara-aroma-900g.jpg",
        name: "Life Vegan Protein - Flavorless Vegetable Protein 900g",
        price: "$40"
      }

  ];
  
  const mainContainer = document.getElementById("produse");
  
  function createProduct(name, avatar, price, id) {
    const productContainer = document.createElement("article");
    const imgEl = document.createElement("img");
    const nameEl = document.createElement("div");
    const priceEl = document.createElement("div");
    const linkEl = document.createElement("a");
    linkEl.textContent = "View details";
    linkEl.href = `/product-page.html?id=${id}`;
    priceEl.textContent = price;
    nameEl.textContent = name;
    imgEl.src = avatar;
    productContainer.appendChild(imgEl);
    productContainer.appendChild(nameEl);
    productContainer.appendChild(priceEl);
    productContainer.appendChild(linkEl);
    mainContainer.appendChild(productContainer);
  }
  function generateProducts(produseEl) {
    mainContainer.innerHTML = "";
    for (const product of produseEl) {
      createProduct(product.name, product.avatar, product.price, product.id);
    }
  }
  
  generateProducts(produse);

  const nextButton = document.getElementById('next_button');
  const prevButton = document.getElementById('prev_button');
  let countSlides = 0;
  const elWidth = 270;

  nextButton.addEventListener("click", () => {
    slideImg("right");
  });

  prevButton.addEventListener("click", ()=>{
    slideImg("left");
 });


  function slideImg(dir) {
      if (dir ==="right") {
          countSlides++;
      } else {
          countSlides--;
      }
      console.log(countSlides);
      const left = countSlides * -elWidth;
      mainContainer.style.left = `${left}px`;
      
      checkVisibiltyNextBtn();
      checkVisibiltyPrevButon();
  }
     function checkVisibiltyPrevButon() {
     if (countSlides <= 0) {
      prevButton.style.display = "none";
     } else {
       prevButton.style.display = "block";
     }
   }
  
  function checkVisibiltyNextBtn() {
    const crContainer = document.querySelector(".carousel-container");
    const initialSlides = crContainer.clientWidth / elWidth;
    // 1. sa numar cate element am
    // 2. cand fac next verific ca countSlides + 4 nu trebuie mai mare ca nr de elemente
    // 3. daca este mai mare atunci ascund butonul de next
    const totalSlides = mainContainer.querySelectorAll("article").length;
    if (countSlides + initialSlides + 1 > totalSlides) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  }
  