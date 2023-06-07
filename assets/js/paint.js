function configureListeners() {
    let images = document.querySelectorAll('img'); // Select img elements
  
    for (var i = 0; i < images.length; i++) {
      // Iterate over images and add mouseover event listeners
      images[i].addEventListener('mouseover', addOpacity);
      images[i].addEventListener('mouseout', removeOpacity);
    }
  }
  
  function addOpacity(event) {
    // Add appropriate CSS class
    event.target.classList.add('opacity-class');
    getProductInfo(event.target.id);
  }
  
  function removeOpacity(event) {
    // Remove appropriate CSS class
    event.target.classList.remove('opacity-class');
  
    let element = document.getElementById('color-price');
    element.textContent = '';
  
    let color = document.getElementById('color-name');
    color.textContent = '';
  
    event.preventDefault();
  }
  
  function getProductInfo(paintColor) {
    let price;
    let colorName;
  
    switch (paintColor) {
      case 'pn1':
        // Set variables for price and color name and invoke a function to update the price
        price = 10;
        colorName = 'Red';
        updatePrice(colorName, price);
        break;
      case 'pn2':
        // Set variables for price and color name and invoke a function to update the price
        price = 15;
        colorName = 'Blue';
        updatePrice(colorName, price);
        break;
      // Add cases for other paint colors
      default:
        break;
    }
  }
  
  function updatePrice(colorName, price) {
    let colorPrice = document.getElementById('color-price'); // Select element with corresponding id
    colorPrice.textContent = price; // Display price
  
    let color = document.getElementById('color-name'); // Select element with corresponding id
    color.textContent = colorName; // Display color name
  }
  
  // Call the configureListeners() function to set up the event listeners
  configureListeners();
