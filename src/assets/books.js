export function cart() {
    console.log("hello");
    const ece = [
        {
            id: 6,
            name: "HTML",
            image: "assets/New folder/python.png",
            price: 1000,
            rating: 5,
            quantity: 0
        },
        {
            id: 7,
            name: "C",
            image: "assets/New folder/c.png",
            price: 2000,
            rating: 3,
            quantity: 0
        },
        {
            id: 8,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: 6000,
            rating: 4,
            quantity: 0
        },
        {
            id: 9,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: 8000,
            rating: 5,
            quantity: 0
        },
        {
            id: 10,
            name: "GIT",
            image: "assets/New folder/git.png",
            price: 7000,
            rating: 5,
            quantity: 0
        },
    ];

    const ece2 = [
        {
            id: 1,
            name: "HTML",
            image: "assets/New folder/python.png",
            price: 1000,
            rating: 5,
            quantity: 0
        },
        {
            id: 2,
            name: "C",
            image: "assets/New folder/c.png",
            price: 2000,
            rating: 3,
            quantity: 0
        },
        {
            id: 3,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: 6000,
            rating: 4,
            quantity: 0
        },
        {
            id: 4,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: 8000,
            rating: 5,
            quantity: 0
        },
        {
            id: 5,
            name: "GIT",
            image: "assets/New folder/git.png",
            price: 7000,
            rating: 5,
            quantity: 0
        },
    ];
    const ece3 = [
        {
            id:11,
            name: "HTML",
            image: "assets/New folder/python.png",
            price: 1000,
            rating: 5,
            quantity: 0
        },
        {
            id:12,
            name: "C",
            image: "assets/New folder/c.png",
            price: 2000,
            rating: 3,
            quantity: 0
        },
        {
            id:13,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: 6000,
            rating: 4,
            quantity: 0
        },
        {
            id:14,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: 8000,
            rating: 5,
            quantity: 0
        },
        {
            id:15,
            name: "GIT",
            image: "assets/New folder/git.png",
            price: 7000,
            rating: 5,
            quantity: 0
        },
    ];
    const ece4 = [
        {
            id:16,
            name: "JAVA",
            image: "assets/New folder/java.png",
            price: 1000,
            rating: 5,
            quantity: 0
        },
        {
            id:17,
            name: "JS",
            image: "assets/New folder/javascript.png",
            price: 2000,
            rating: 3,
            quantity: 0
        },
        {
            id:18,
            name: "TS",
            image: "assets/New folder/typescript.png",
            price: 6000,
            rating: 4,
            quantity: 0
        },
        {
            id:19,
            name: "MongoDB",
            image: "assets/New folder/mongodb.png",
            price: 8000,
            rating: 5,
            quantity: 0
        },
        {
            id:20,
            name: "PYTHON",
            image: "assets/New folder/python.png",
            price: 7000,
            rating: 5,
            quantity: 0
        },
    ];
    const pg1 = [
        {
            id:21,
            name: "HTML",
            image: "assets/New folder/python.png",
            price: 1000,
            rating: 5,
            quantity: 0
        },
        {
            id:22,
            name: "C",
            image: "assets/New folder/c.png",
            price: 2000,
            rating: 3,
            quantity: 0
        },
        {
            id:23,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: 6000,
            rating: 4,
            quantity: 0
        },
        {
            id:24,
            name: "CSS",
            image: "assets/New folder/css3.png",
            price: 8000,
            rating: 5,
            quantity: 0
        },
        {
            id:25,
            name: "GIT",
            image: "assets/New folder/git.png",
            price: 7000,
            rating: 5,
            quantity: 0
        },
    ];
         
    
    const body = document.querySelector("body");
   
    const productList = document.querySelector(".productList");
    const quantity = document.querySelector('.quantity');
    const total = document.querySelector('.total');
    
    const checkoutList = [];
    const eceL = document.querySelector(".ece");
    const ece2L = document.querySelector(".ece2");
    const ece3L = document.querySelector(".ece3");
    const ece4L = document.querySelector(".ece4");
    
    const pg1L = document.querySelector(".pg1");

    document.querySelector('.cart').style.display = 'none';

    document.querySelector('.basket i').addEventListener('click', function() {
        document.querySelector('.cart').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('.cart').style.display = 'none';
    });

    function renderProductList(products, container) {
        products.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.style.textAlign = "center";
            div.style.padding = "20px";
            div.style.width = "180px";
            div.style.marginTop = "40px";
            div.style.borderRadius = "20px";
            div.style.boxShadow = "0 0px 50px #757676";
            div.style.letterSpacing = "1px";
            div.style.cursor = "pointer";

            let star = "";
            for (let i = 0; i < item.rating; i++) {
                star += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <i style="color:#ff9c1a;" class="fa fa-star"></i>`;
            }

            div.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <img src="${item.image}" style="max-height:200px;max-width:170px;object-fit:contain; height:130px;
            filter: drop-shadow(10px 10px 5px #d3d3d3);"/>
            <div class="name" style="font-weight:600;">${item.name}</div>
            <div class="price" style="margin:10px;"><small>₹</small>${item.price}</div>
            <div class="rating" >Rating : ${star}</div>
            <button class="add-to-cart-button" data-id="${item.id}" style="background-color:black;color:#fff;padding:5px 15px;border-radius:20px;margin-top:10px;cursor:pointer;border:none;outline:none;"><i class="fa fa-cart-plus" style="font-size:20px;margin-right:5px;"></i>Add to cart</button>`;

            container.appendChild(div);
        });
    }

    renderProductList(ece, eceL);
    renderProductList(ece2, ece2L);
    renderProductList(ece3, ece3L);
    renderProductList(ece4, ece4L);

    renderProductList(pg1, pg1L);

    function addToCart(eceArray, productId) {
        const product = eceArray.find(item => item.id === productId);
        if (product) {
            const existingItemIndex = checkoutList.findIndex(item => item.id === productId);
            if (existingItemIndex === -1) {
                checkoutList.push({
                    ...product,
                    quantity: 1
                });
            } else {
                checkoutList[existingItemIndex].quantity += 1;
            }
            console.log('Adding product to cart:', product);
            reloadCart();
        }
    }
    
    function createAddToCartHandler(eceArray) {
        return function(event) {
            const target = event.target;
            if (target.classList.contains('add-to-cart-button')) {
                const productId = parseInt(target.dataset.id);
                addToCart(eceArray, productId);
            }
        };
    }
    // Function to load cart items from localStorage

    const addToCartHandler = createAddToCartHandler(ece);
    document.body.addEventListener('click', addToCartHandler);
    
    const addToCartHandler2 = createAddToCartHandler(ece2);
    document.body.addEventListener('click', addToCartHandler2);
    
    const addToCartHandler3 = createAddToCartHandler(ece3);
    document.body.addEventListener('click', addToCartHandler3);

    const addToCartHandler4 = createAddToCartHandler(ece4);
    document.body.addEventListener('click', addToCartHandler4);
    

    const addToCartHandlerpg1 = createAddToCartHandler(pg1);
    document.body.addEventListener('click', addToCartHandlerpg1);

    function reloadCart() {
        productList.innerHTML = "";
        let count = 0;
        let totalPrice = 0;
        checkoutList.forEach((item, key) => {
            totalPrice += item.price * item.quantity;
            count += item.quantity;
            let li = document.createElement("li");
            li.innerHTML = `
                <img style="height:20px;width:30px;background:#fff;object-fit:contain;" src="${item.image}"/>
                <div>${item.name}</div>
                <div>${item.price}</div>
                <div style="display:flex;align-items:center;justify-content:center;">
                    <button class="decrement-btn" style="width:25px;height:25px;border-radius:50%;border:none;outline:none;cursor:pointer;font-size:20px;text-align:center;">-</button>
                    <div class="count" style="padding:10px;" >${item.quantity}</div>
                    <button class="increment-btn" style="width:25px;height:25px;border-radius:50%;border:none;outline:none;cursor:pointer;font-size:20px;text-align:center;">+</button>
                </div>
            `;

            const decrementBtn = li.querySelector('.decrement-btn');
            decrementBtn.addEventListener('click', function() {
                item.quantity -= 1;
                const countElement = li.querySelector('.count');
                countElement.textContent = item.quantity;
                if (item.quantity <= 0) {
                    checkoutList.splice(key, 1);
                    li.parentNode.removeChild(li);
                }
                updateTotalPrice();
            });
            const incrementBtn = li.querySelector('.increment-btn');
            incrementBtn.addEventListener('click', function() {
                item.quantity += 1;
                const countElement = li.querySelector('.count');
                countElement.textContent = item.quantity;
                updateTotalPrice();
            });

            productList.style.padding = "15px";
            li.style.padding = "5px";
            li.style.display = "grid";
            li.style.gridTemplateColumns = "100px repeat(3,1fr)";
            li.style.color = "#fff";
            li.style.rowGap = "10px";
            li.style.marginBottom = "20px";
            li.style.borderBottom = "1px solid";
            li.style.alignItems = "center";

            productList.appendChild(li);
        });
        productList.scrollTop = productList.scrollHeight;
        total.innerHTML = `<small>Subtotal (${count} items)</small>₹${totalPrice}`;
        quantity.innerHTML = count;
    }

    function updateTotalPrice() {
        let count = 0;
        let totalPrice = 0;
        checkoutList.forEach((item) => {
            totalPrice += item.price * item.quantity;
            count += item.quantity;
        });productList.scrollTop = productList.scrollHeight;
        total.innerHTML = `<small>Subtotal (${count} items)</small>₹${totalPrice}`;
        quantity.innerHTML = count;

        return totalPrice;
    }
}
