const products = [
    {
        name: 'Yellow T-shirt',
        tag: 'yellowshirt',
        id: 1,
        price: 384,
        inCart: 0,
        category: "T-shirt",
        description: "This premium yellow t-shirt offers exceptional quality with luxurious cotton blend. Featuring a perfect fit and stunning color retention, it's our highest-rated casual wear choice."
    },
    {
        name: 'Blue T-shirt',
        tag: 'blueshirt',
        id: 2,
        price: 20,
        inCart: 0,
        category: "T-shirt",
        description: "An affordable blue t-shirt with basic comfort features. Simple design makes it suitable for everyday casual wear."
    },
    {
        name: 'Black T-shirt',
        tag: 'blackshirt',
        id: 3,
        price: 202,
        inCart: 0,
        category: "T-shirt",
        description: "A sophisticated black t-shirt made with high-quality cotton. Features excellent durability and a timeless design that never goes out of style."
    },
    {
        name: 'White T-shirt',
        tag: 'whiteshirt',
        id: 4,
        price: 307,
        inCart: 0,
        category: "T-shirt",
        description: "Premium white t-shirt crafted from finest materials. Offers superior comfort and maintains brightness through multiple washes."
    },
    {
        name: 'Brown T-shirt',
        tag: 'brownshirt',
        id: 5,
        price: 280,
        inCart: 0,
        category: "T-shirt",
        description: "Luxurious brown t-shirt with exceptional fabric quality. Features a modern cut and superior comfort, perfect for style-conscious individuals."
    },
    {
        name: 'Pink T-shirt',
        tag: 'pinkshirt',
        id: 6,
        price: 67,
        inCart: 0,
        category: "T-shirt",
        description: "A cheerful pink t-shirt at a great value. Basic comfort meets casual style in this everyday essential."
    },
    {
        name: 'Yellow Hoodie',
        tag: 'yellowhoodie',
        id: 7,
        price: 85,
        inCart: 0,
        category: "Hoodie",
        description: "Casual yellow hoodie with standard comfort features. Includes kangaroo pocket and adjustable drawstrings for basic functionality."
    },
    {
        name: 'Blue Hoodie',
        tag: 'bluehoodie',
        id: 8,
        price: 30,
        inCart: 0,
        category: "Hoodie",
        description: "Highly-rated affordable blue hoodie. Features surprisingly good quality with comfortable fleece lining and reliable construction."
    },
    {
        name: 'Black Hoodie',
        tag: 'blackhoodie',
        id: 9,
        price: 269,
        inCart: 0,
        category: "Hoodie",
        description: "Premium black hoodie with unique style elements. Despite higher price point, offers basic comfort and standard features."
    },
    {
        name: 'White Hoodie',
        tag: 'whitehoodie',
        id: 10,
        price: 302,
        inCart: 0,
        category: "Hoodie",
        description: "Luxury white hoodie crafted from premium materials. Features excellent warmth retention and sophisticated design details."
    },
    {
        name: 'Brown Hoodie',
        tag: 'brownhoodie',
        id: 11,
        price: 356,
        inCart: 0,
        category: "Hoodie",
        description: "Top-tier brown hoodie with exceptional quality. Features premium fleece interior, reinforced stitching, and designer aesthetic."
    },
    {
        name: 'Pink Hoodie',
        tag: 'Pinkhoodie',
        id: 12,
        price: 74,
        inCart: 0,
        category: "Hoodie",
        description: "Vibrant pink hoodie offering excellent value. Features soft material, reliable construction, and trendy design elements."
    },
    {
        name: 'Yellow Jacket',
        tag: 'yellowjacket',
        id: 13,
        price: 146,
        inCart: 0,
        category: "Jacket",
        description: "Mid-range yellow jacket with reliable weather protection. Features standard insulation and practical pocket design."
    },
    {
        name: 'Blue Jacket',
        tag: 'bluejacket',
        id: 14,
        price: 86,
        inCart: 0,
        category: "Jacket",
        description: "Highly-rated blue jacket at an attractive price point. Offers surprising durability and comfort for outdoor activities."
    },
    {
        name: 'Black Jacket',
        tag: 'blackjacket',
        id: 15,
        price: 109,
        inCart: 0,
        category: "Jacket",
        description: "Classic black jacket with basic weather protection. Features standard insulation and simple practical design."
    },
    {
        name: 'White Jacket',
        tag: 'whitejacket',
        id: 16,
        price: 192,
        inCart: 0,
        category: "Jacket",
        description: "Stylish white jacket with good weather resistance. Features quality materials and thoughtful design details."
    },
    {
        name: 'Brown Jacket',
        tag: 'brownjacket',
        id: 17,
        price: 139,
        inCart: 0,
        category: "Jacket",
        description: "Versatile brown jacket with reliable performance. Features comfortable fit and practical functionality."
    },
    {
        name: 'Pink Jacket',
        tag: 'pinkjacket',
        id: 18,
        price: 464,
        inCart: 0,
        category: "Jacket",
        description: "Premium pink jacket with luxury features. Offers superior weather protection and exclusive design elements."
    }
];

document.addEventListener('DOMContentLoaded', () => {
	const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const action = urlParams.get('action');
    
    if (category && action === 'menu') {
        updateMenu(`Home > ${category}`);
    }
    
    // both pages functions
    defaultCart();
    onLoadCartNumbers();
	displayCart();

    // Check which page
    const isIndexPage = document.querySelector('.products-center');
    const isProductPage = document.querySelector('.product-detail');

    // Index page 
    if (isIndexPage) {
        displayProduct();
    }

    // Product page
    if (isProductPage) {
        loadProductDetails();
    }
});



//index page-----------------------------
//check which products has been clicked and add to cart
function getProduct(){
    let carts = document.querySelectorAll('.bag-btn');
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            const productId = carts[i].getAttribute('data-id');

            // Create refrence  copy from products
            const product = products.find(p => p.id == productId);

            cartNumbers(product);
            totalCost(product);
            displayCart();
        });
    }
}

function displayProduct(){
	let x = document.querySelector(".products-center");
	if (x) {
        //check menu
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        //menu
        if (category) {
            displayProductsByCategory(category);
            updateMenu(`Home > ${category}`);
            return;
        }

		x.innerHTML = '';
		for (let i = 0; i < products.length; i++) {
			// start inject code   
			x.innerHTML += `
		<article class="product">
          <div class="img-container" onclick="goToProduct(${products[i].id})" >
            <img src="images/product-${products[i].id}.jpg" alt="product"   class="product-img" />

          </div>
			
			<h3 onclick="goToProduct(${products[i].id})">${products[i].name}</h3>

			<div class="price-button-container">
				<h4>$${products[i].price}</h4>
				<button class="bag-btn"  data-id="${products[i].id}">
					<i class="fas fa-shopping-cart"></i>
					add
				</button>
			</div>
        </article>
					`;

		}
	}
	getProduct(); 
}

//menu for index and product page
function updateMenu(path) {
    const levels = path.split(' > ');
    // Level 1: Home
    if (levels.length === 1) {
        window.location.href = 'index.html';
        return;
    }
    // Level 2: Category
    if (levels.length === 2) {
        document.getElementById('home').innerHTML = `
            <a href="#" onclick="updateMenu('Home')">Home</a> > 
 			<a href="#" onclick="updateMenu('Home > ${levels[1]}')">${levels[1]}</a>
        `;

        displayProductsByCategory(levels[1]); // Filter by category
        return;
    }
}
function displayProductsByCategory(category) {
	const productsCenter = document.querySelector('.products-center');
    productsCenter.innerHTML = ''; // Clear existing products
    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    filteredProducts.forEach(product => {
		productsCenter.innerHTML += `
		<article class="product">
          <div class="img-container" onclick="goToProduct(${product.id})">
            <img src="images/product-${product.id}.jpg" alt="product"   class="product-img" />

          </div>
			
			<h3 onclick="goToProduct(${product.id})">${product.name}</h3>

			<div class="price-button-container">
				<h4>$${product.price}</h4>
				<button class="bag-btn" data-id="${product.id}">
					<i class="fas fa-shopping-cart" ></i>
					add
				</button>
			</div>

        </article>
					`;
    });

    getProduct();
}


// go to product page---------------------
function goToProduct(id) {
    // Check the menu
    const categoryView = document.getElementById('home').textContent;
    if (categoryView.includes('>')) {
        const category = categoryView.split('>')[1].trim();
        window.location.href = `productPage.html?category=${category}&id=${id}`;
    } else {
        window.location.href = `productPage.html?id=${id}`;
    }
}

function loadProductDetails() {
    // Check menu
    if (document.querySelector('.product-detail')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
		const category = urlParams.get('category');
        
        const product = products.find(p => p.id == productId);


        if (product) {
            // Update menu 
            const homeDiv = document.getElementById('home');
            if (category) {
                homeDiv.innerHTML = `
                    <a href="index.html">Home</a> > 
                    <a href="index.html?category=${category}">${category}</a> >
                    <a href="#">${product.name}</a>
                `;
            } else {
                homeDiv.innerHTML = `
                    <a href="index.html">Home</a> > 
                    <a href="#">${product.name}</a>
                `;
            }
            document.querySelector('.product-detail').innerHTML = `

					<div class="img-container-productPage"  >
                  	  <img src="images/product-${product.id}.jpg" alt="${product.name}" class="product-img-productPage">
                    </div>


					<div class="product-info">
						<h3 class="detail-name">${product.name}</h3>
    
						<div class="price-button-container-productPage">
							<h4 class="price-productPage">$${product.price}</h4>
							<button class="bag-btn" data-id="${product.id}">
								<i class="fas fa-shopping-cart"></i>
								add
							</button>
       					</div>
						<p class="description-title">Description</p>
						<p>${product.description}</p>
					</div>
            `;

            const addBtn = document.querySelector('.bag-btn');
            addBtn.addEventListener('click', () => {
                cartNumbers(product);
                totalCost(product);
                displayCart();
            });
        }
    }
}




//display cart
function defaultCart(){
	let productContainer = document.querySelector(".carts");
	if( productContainer){
		productContainer.innerHTML = '';
			productContainer.innerHTML += `
			<div class="cartTotalContainer" >
				<h4 class="cartTotalTitle" >
					Cart Total:
				</h4>
				<h4 class = "cartTotal">
					<span>$0.00</span>
				</h4>
			</div>
			`;
	}
		

}
// show cartNumbers
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) { 	
			document.querySelector('.shoppingList-icon span').textContent = productNumbers;
	}
}
// add 1 to cartNumbers
function cartNumbers(product){
    
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if (productNumbers) {
		localStorage.setItem('cartNumbers', productNumbers + 1);
			document.querySelector('.shoppingList-icon span').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
			document.querySelector('.shoppingList-icon span').textContent = 1;
		
	}
	setItems(product);
}

function setItems(product){
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);

	if(cartItems != null){
		if(cartItems[product.tag] == undefined){
            const cartItem = {
                name: product.name,
                tag: product.tag,
                id: product.id,
                price: product.price,
                inCart: 0,
                category: product.category,
                description:product.description
            };
    
			cartItems = {
				...cartItems,//pervious elements
				[product.tag]:cartItem// copy 
			}
		}
		cartItems[product.tag].inCart += 1;
	}else{
        const cartItem = {
            name: product.name,
            tag: product.tag,
            id: product.id,
            price: product.price,
            inCart: 1,
            category: product.category,
            description:product.description
        };
		cartItems={
			[product.tag]:cartItem
            
		}



	}

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
	let cartCost= localStorage.getItem('totalCost');
	
	if(cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost",cartCost + product.price);
		
	}else{
		localStorage.setItem("totalCost", product.price);
	}
	
}

function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".carts");
	let cartCost= localStorage.getItem('totalCost');
		
	if(cartItems && productContainer){
		productContainer.innerHTML = '';//empty the content

        //cart elements
		Object.values(cartItems).map(item =>{
			productContainer.innerHTML += `
			<div class="cart-delete">
				<button class="cart-btn" onClick="deleteItems(${item.price},${item.id})">
					<i class="material-icons">&#xe872;</i>
				</button>
            </div>
            <div class="cart-title">
				<img src="images/product-${item.id}.jpg"  >
            </div>

			<div class="cart-name">
				<span>${item.name}</span>
			</div>


			<div class="price">
				<span>$${item.price}</span>
			</div>

			<div class="quantity">
				<button class="cart-btn" onClick="decrease(${item.price},${item.id})">
					<i class='fas'>&#xf0a8; </i>
				</button>
                <input 
                    type="number" 
                    min="1" 
                    value="${item.inCart}"
                    class="quantity-input-${item.id}"
                    onchange="updateQuantity(${item.price}, ${item.id}, this.value)"
                >
				<button class="cart-btn" onClick="increase(${item.price},${item.id})">
					<i class='fas'> &#xf0a9;</i>
				</button>
				
			</div>
            
			<div class="total">
				<span>$${item.inCart*item.price}.00</span>
			
			</div>
			`;
		});
		//cart total
		productContainer.innerHTML +=`
			<div class="cartTotalContainer">

				<h3 class="cartTotalTitle">
					Cart Total:
				</h4>
				<h3 class = "cartTotal">
					<span>$${cartCost}.00</span>
				</h4>
				<br><br>
			</div>

			<div class="contin">
				<div class="clickR">
                    <span>Click to remove the entire cart:</span>
                    <button class="cart-btn" onClick="delectAll()">
                        <i class='far'>&#xf410;</i>
                    </button>
			    </div>

                <div class="clickp">
                    <span>Click to check out:</span>
                    <button class="cart-btn";">
                        <i class='far' >&#xf09d;</i>
                    </button>
                </div>
			</div>
			`;
			
	}
}

function decrease(productPrice,productId){	
	
	let productNumbers = localStorage.getItem('cartNumbers');
	let cartCost= localStorage.getItem('totalCost');
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	
	//decrease 1 from cartNumbers
	productNumbers = parseInt(productNumbers);
	if( cartItems[products[productId-1].tag].inCart>1){
		localStorage.setItem('cartNumbers',productNumbers-1);
	}
	onLoadCartNumbers();
	
	
	// decrease total price
	cartCost = parseInt(cartCost);
	if(cartItems[products[productId-1].tag].inCart>1 && cartCost>0){
		cartCost = cartCost - productPrice;
		localStorage.setItem("totalCost",cartCost);
		document.querySelector('.cartTotalContainer span').textContent ="$"+cartCost+".00";
	}
	
	
	//decrease display item 
	if(cartItems[products[productId-1].tag].inCart>1){
		cartItems[products[productId-1].tag].inCart -= 1;
		localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	}
	

	displayCart();
		
}
function increase(productPrice,productId){

	let productNumbers = localStorage.getItem('cartNumbers');
	let cartCost= localStorage.getItem('totalCost');
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	
	//increase 1 from cartNumbers
	productNumbers = parseInt(productNumbers);
	if( cartItems[products[productId-1].tag].inCart>=1 ){
		localStorage.setItem('cartNumbers',productNumbers+1);
	}
	onLoadCartNumbers();
	
	
	// increase total price
	cartCost = parseInt(cartCost);
	if(cartItems[products[productId-1].tag].inCart>=1 && cartCost>0){
		cartCost = cartCost + productPrice;
		localStorage.setItem("totalCost",cartCost);
		document.querySelector('.cartTotalContainer span').textContent ="$"+cartCost+".00";
	}
	
	
	//increase display item
	if(cartItems[products[productId-1].tag].inCart>=1){
		cartItems[products[productId-1].tag].inCart += 1;
		localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	}
	displayCart();

	
}

function updateQuantity(price, productId, newValue) {
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem('totalCost'); 
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    // Update cart numbers
    productNumbers = parseInt(productNumbers);
    //default to 1 if invalid type
    let newQuantity = parseInt(newValue) || 1;
    // Ensure quantity is at least 1
    newQuantity = Math.max(1, newQuantity);
    if (cartItems[products[productId-1].tag].inCart >= 1) {
        let quantityDiff = newQuantity - cartItems[products[productId-1].tag].inCart;
        localStorage.setItem('cartNumbers', productNumbers + quantityDiff);
    }
    onLoadCartNumbers();

    // Update total price
    cartCost = parseInt(cartCost);
    if (cartItems[products[productId-1].tag].inCart >= 1 && cartCost > 0) {
        let quantityDiff = newQuantity - cartItems[products[productId-1].tag].inCart;
        cartCost = cartCost + (quantityDiff * price);
        localStorage.setItem("totalCost", cartCost);
        document.querySelector('.cartTotalContainer span').textContent = "$" + cartCost + ".00";
    }

    // Update product quantity in cart
    if (cartItems[products[productId-1].tag].inCart >= 1) {
        cartItems[products[productId-1].tag].inCart = newQuantity;
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }
    displayCart();
}
function deleteItems(productPrice,productId){
	let productNumbers = localStorage.getItem('cartNumbers');
	let cartCost= localStorage.getItem('totalCost');
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	//change cartNumbers
	productNumbers = parseInt(productNumbers);
	if( cartItems[products[productId-1].tag].inCart>=1 ){
		var x = productNumbers - cartItems[products[productId-1].tag].inCart;
		localStorage.setItem('cartNumbers',productNumbers - cartItems[products[productId-1].tag].inCart);
	}
	onLoadCartNumbers();
	
	
	// change total price
	cartCost = parseInt(cartCost);
	if(cartItems[products[productId-1].tag].inCart>=1 && cartCost>0){
		localStorage.setItem("totalCost",cartCost - cartItems[products[productId-1].tag].inCart * productPrice);
	}

	
	//delete the display
    delete cartItems[products[productId-1].tag];  
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
	displayCart();	
	
	// when the cart is empty, customers cannot  go to the payment page
	if(x == 0){
		defaultCart();
	}
	
}

function delectAll(){
	localStorage.clear();
	defaultCart();
	document.querySelector('.shoppingList-icon span').textContent = 0;
}     










 
