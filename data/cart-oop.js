function Cart(localStorageKey) {
  const cart = {
    cartItem: undefined,

    loadFromStorage() {
      this.cartItem = JSON.parse(localStorage.getItem('localStorageKey'));

      if (!this.cartItem) {
        this.cartItem = [
          {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2
          }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1
          }
        ]
      }
    },

    saveToStorage() {
      localStorage.setItem('localStorageKey', JSON.stringify(this.cartItem));
    },

    addToCart(productId) {
      let matchingItem;

      this.cartItem.forEach(cartItem => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        this.cartItem.push({
          productId: productId,
          quantity: 1
        })
      }

      this.saveToStorage();
    },

    removeFromElem(productId) {
      const newCart = [];
      this.cartItem.forEach(cartItem => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });

      this.cartItem = newCart;

      this.saveToStorage();
    }

  }

  return cart;
}

const cart = Cart('cart-oop');
const bussinesCart = Cart('bussines-cart');


cart.loadFromStorage();
bussinesCart.loadFromStorage();

console.log(bussinesCart);
console.log(cart);