//Fetch data returns a Promise which can be either fulfilled or Rejected.
fetch('https://fakestoreapi.com/products')
  .then((data) => {
    return data.json();
  })

  .then((productdata) => {
    let data = '';
    productdata.map((values) => {
      data += ` <div class= "card">
                  <h3 class="title">${values.title}</h3>
                  <img src= ${values.image} alt="img" class="image" />
                  <p>${values.description}</p>
                  <p class="category">${values.category}</p>
                  <p class="price">${values.price}</p>
                
                 
                </div> `;
    });
    document.getElementById('cards').innerHTML = data;
    console.log(productdata);
  })
  .catch((err) => {
    console.log(err);
  });
