class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(product) {
      if (!this.isProductValid(product)) {
        console.log("Error: faltan campos obligatorios.");
        return;
      }
  
      const newProduct = {
        id: this.nextId,
        ...product
      };
  
      this.products.push(newProduct);
      this.nextId++;
    }
  
    isProductValid(product) {
      const { title, description, price, thumbnail, code, stock } = product;
      return (
        title && description && price && thumbnail && code && stock &&
        !this.products.some(p => p.code === code)
      );
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.log("Error: Producto no encontrado.");
        return;
      }
  
      return product;
    }
  
    getProducts() {
      return this.products;
    }
  }
  
  // Ejemplo de uso
  const manager = new ProductManager();
  
  manager.addProduct({
    title: "God of War",
    description: "juego de dioses",
    price: 5000,
    thumbnail: "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-listing-thumb-01-ps4-us-12jun17?$1600px$",
    code: "P001",
    stock: 10
  });
  
  manager.addProduct({
    title: "The last of us",
    description: "juego de zombies",
    price: 4000,
    thumbnail: "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-keyart-01-en-18may22?$1600px$",
    code: "P002",
    stock: 5
  });
  

  manager.addProduct({
    title: "uncharted",
    description: "juego de aventura",
    price: 3000,
    thumbnail: "https://gmedia.playstation.com/is/image/SIEPDC/uncharted-legacy-of-thieves-hero-keyart-02-en-15sep21?$1200px$",
    code: "P003",
    stock: 15
  });


  manager.addProduct({
    title: "days gone",
    description: "juego de zombies",
    price: 3000,
    thumbnail: "https://gmedia.playstation.com/is/image/SIEPDC/days-gone-listing-thumb-01-ps4-us-10jan19?$1600px$",
    
  });
// encuentra todos los productos
    console.log(manager.getProducts());
  
//encuentra los productos por id
  const product1 = manager.getProductById(1);
  const product2 = manager.getProductById(2);
  const product3 = manager.getProductById(3);

  console.log(product1);
  console.log(product2);
  console.log(product3);
  
//el producto id 4 no existe
   const noexistenteProduct = manager.getProductById(4);
