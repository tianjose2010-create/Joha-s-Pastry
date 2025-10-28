document.addEventListener("DOMContentLoaded", function () {
  const products = [
    // Lasanhas
    {
      name: "Lasanha de Carne",
      category: "Lasanhas",
      price: "R$ 47,99",
      img: "lasanha.jpeg",
      description: "Camadas de massa fresca, carne moída macia ao molho à bolonhesa, molho bechamel cremoso, presunto e queijo mussarela, finalizadas com uma cobertura gratinada irresistível. Acompanha Guaraná 350ml gelado e pão torrado com alho e manteiga. Serve até 2 pessoas."
    },
    {
      name: "Lasanha de Frango",
      category: "Lasanhas",
      price: "R$ 46,99",
      img: "lasanha.jpeg",
      description: "Deliciosa lasanha caseira com massa artesanal, recheio suculento de frango desfiado ao molho vermelho, camadas de mussarela e presunto, molho bechamel cremoso e cobertura gratinada de queijos. Serve até 2 pessoas."
    },
    // Massas
    {
      name: "Espaguete à Bolonhesa",
      category: "Massas",
      price: "R$ 38,99",
      img: "massabolonhesa.jpeg",
      description: "Espaguete caseiro com molho à bolonhesa, carne moída e queijo parmesão ralado. Servido com pão torrado e manteiga. Ideal para quem ama massas clássicas!"
    },
    // Sobremesas
    {
      name: "Pudim de Coco",
      category: "Sobremesas",
      price: "R$ 44,99",
      img: "coco.jpeg",
      description: "Sobremesa caseira, cremosa e levinha, com sabor tropical e marcante de coco. Finalizado com calda dourada e suave. Serve até 4 pessoas."
    },
    {
      name: "Pudim de leite",
      category: "Sobremesas",
      price: "R$ 44,99",
      img: "leitecodensada.jpeg",
      description: "Delicioso, cremoso e super fofinho! Sobremesa artesanal com textura macia, calda dourada e sabor que derrete na boca."
    },
    {
      name: "Dupla dos sonhos",
      category: "Sobremesas",
      price: "R$ 18,99",
      img: "dupladossonhos.jpeg",
      description: "Dois alfajores artesanais que derretem na boca! 1 Alfajor com recheio de doce de leite e cobertura de coco fresco e 1 Alfajor com doce de leite com cobertura crocante de chocolate ao leite! (peso 67-85g)"
    },
    {
      name: "Dupla dos sonhos com Guaraná",
      category: "Sobremesas",
      price: "R$ 23,99",
      img: "dupladossonhos+.jpeg",
      description: "A combinação perfeita da Joha's Pastry que inclui: 1 Alfajor de doce de leite com coco, 1 Alfajor de chocolate com recheio de doce de leite e cobertura de chocolate crocante ao leite e 1 Guaraná Antarctica 350ml bem geladinho!!."
    },
    {
      name: "Alfajor de Chocolate com Doce de Leite",
      category: "Sobremesas",
      price: "R$ 11,99",
      img: "alfajordocedeleite.jpeg",
      description: "Macio por dentro, crocante por fora! Alfajor artesanal com massa leve, recheio cremoso de doce de leite e cobertura generosa de chocolate ao leite. (peso: 85g)"
    },
    {
      name: "Alfajor Triplo Chocolate",
      category: "Sobremesas",
      price: "R$ 11,99",
      img: "alfajorchoco.jpg",
      description: "Para os apaixonados por chocolate: massa de chocolate macia, recheio cremoso de chocolate e cobertura crocante de chocolate ao leite. (peso: 80g)"
    },
    {
      name: "Alfajor Tradicional - Doce de Leite e Coco",
      category: "Sobremesas",
      price: "R$ 9,99",
      img: "alfajorcoco.jpeg",
      description: "Delicioso alfajor artesanal com biscoitos macios, recheio de doce de leite cremoso e cobertura de coco ralado. (peso: 67g)"
    },
    // Bebidas
    {
      name: "Guaraná",
      category: "Bebidas",
      price: "R$ 6,50",
      img: "guarana.jpeg",
      description: "Bebida fria para acompanhar sua comida :D (350ml)."
    },
    {
      name: "Coca Cola Zero",
      category: "Bebidas",
      price: "R$ 6,50",
      img: "cocazero.webp",
      description: "Bebida fria sem açúcar para acompanhar sua comida :) (310ml)."
    },
    {
      name: "Coca Cola",
      category: "Bebidas",
      price: "R$ 6,50",
      img: "cocacola.webp",
      description: "Bebida fria para acompanhar sua comida :D (310ml)."
    },
    {
      name: "Água sem Gás",
      category: "Bebidas",
      price: "R$ 5,50",
      img: "agua.jpeg",
      description: "Água mineral sem gás (500ml)."
    },
    {
      name: "Água com Gás",
      category: "Bebidas",
      price: "R$ 5,50",
      img: "aguasigas.jpeg",
      description: "Água mineral com gás (500ml)."
    }
  ];

  // Elementos del DOM
  const lasanhasGallery = document.getElementById("lasanhas-gallery");
  const massasGallery = document.getElementById("massas-gallery");
  const sobremesasGallery = document.getElementById("sobremesas-gallery");
  const bebidasGallery = document.getElementById("bebidas-gallery");
  const productModal = document.getElementById("productModal");
  const modalProductName = document.getElementById("modalProductName");
  const modalProductPrice = document.getElementById("modalProductPrice");
  const modalProductImage = document.getElementById("modalProductImage");
  const modalProductDescription = document.getElementById("modalProductDescription");

  // Función para abrir el producto en modal
  let currentProduct = null;

  function openProductModal(product) {
    currentProduct = product;
    modalProductName.textContent = product.name;
    modalProductPrice.textContent = product.price;
    modalProductImage.src = product.img;
    modalProductImage.alt = `Foto de ${product.name}`;
    modalProductDescription.textContent = product.description;
    productModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  // Función para cerrar modal de producto
  window.closeProductModal = function() {
    productModal.style.display = "none";
    document.body.style.overflow = "";
  };

  // Función para enviar producto directo por WhatsApp
  window.sendProductToWhatsApp = function() {
    if (!currentProduct) return;
    const message = `Olá! Gostaria de pedir:\n${currentProduct.name} - ${currentProduct.price}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/554888247051?text=${encodedMessage}`, '_blank');
  };

  // Función para enviar mensaje de negocio
  window.sendBusinessMessage = function() {
    const message = "Olá! Gostaria de ter os Alfajores da Joha's Pastry na minha loja. Pode me passar as condições de revenda?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/554888247051?text=${encodedMessage}`, '_blank');
  };

  // Renderizar productos (sin precio en tarjeta)
  products.forEach(product => {
    const prodDiv = document.createElement("div");
    prodDiv.className = "product";
    prodDiv.setAttribute("role", "button");
    prodDiv.setAttribute("tabindex", "0");
    prodDiv.setAttribute("aria-label", `Ver detalhes de ${product.name}`);

    prodDiv.innerHTML = `
      <img src="${product.img}" alt="Foto de ${product.name}" loading="lazy">
      <div class="product-name">${product.name}</div>
      <!-- Precio oculto en tarjeta, visible solo en modal -->
    `;

    prodDiv.addEventListener("click", () => openProductModal(product));
    prodDiv.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProductModal(product);
      }
    });

    if (product.category === "Lasanhas") lasanhasGallery.appendChild(prodDiv);
    else if (product.category === "Massas") massasGallery.appendChild(prodDiv);
    else if (product.category === "Sobremesas") sobremesasGallery.appendChild(prodDiv);
    else if (product.category === "Bebidas") bebidasGallery.appendChild(prodDiv);
  });

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Cerrar modal al hacer clic fuera
  window.addEventListener("click", function(event) {
    if (event.target === productModal) closeProductModal();
  });

  // Cerrar con tecla Escape
  window.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && productModal.style.display === "flex") {
      closeProductModal();
    }
  });
});