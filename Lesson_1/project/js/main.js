const products = [
  { id: 1, title: 'Notebook', photo: 'img/1.jpg', price: 1000 },
  { id: 2, title: 'Mouse', photo: 'img/2.jpg', price: 100 },
  { id: 3, title: 'Keyboard', photo: 'img/3.jpg', price: 250 },
  { id: 4, title: 'Gamepad', photo: 'img/4.jpg', price: 150 },
];

const renderProduct = ((title, photo, price) =>
  `<div class="product-item">
  <h3>${title}</h3>
  <img class="imgProduct" src=${photo}></img>
  <p>${price}</p>
  <button class="by-btn">Добавить</button>
  </div>`
);

const renderProducts = list => {
  let productList = (list.map(product => renderProduct(product.title, product.photo, product.price))).join('');
  // чтобы убрать запятые добавила join('') в предыдущей строке
  document.querySelector('.products').innerHTML = productList;
};
renderProducts(products);
