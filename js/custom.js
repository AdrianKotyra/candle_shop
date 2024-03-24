

function BrowserProducts() {
    // READING AND DISPLAYING DATA
    $(document).ready(function(){
        $(".search-input").keyup(function(){
        
            var search = $(".search-input").val();
            $.ajax(
                {
                    url: "./includes/search_products.php",
                    data:{search:search},
                    type: "POST",
                    success: function(data){
                        if(!data.error) {
        
                            let data_trimmed = data.trim();
                            const message_container = $(".results_search");
        
                         
                            if( data_trimmed==="not Found") {
                                message_container.html(data)
                                message_container.css('display', 'block');
                                setTimeout(() => {
                                    message_container.css('display', 'none');
                                }, 3000);
            
                            }
                            else {
                                $(".products_row_products").html(data);
                            }
                  
        
                         
        
                            const firstImagesOnTop = document.querySelectorAll(".modal_trigger_button");
                            displayModal(firstImagesOnTop, event);
                            const triggerGridProducts = document.querySelectorAll(".triggerGridProducts");
                            displayModal(triggerGridProducts, event);
                            
                        }
                    }
                }
            )
        
        })})
    }
    
// ------------------------------------------------------------------------------------------------------------------------

const hamburger = document.querySelector(".burger_box");
var mobileNav = document.querySelector(".mobile_nav_container");
function showMobile() {
    if( mobileNav.style.display === "none") {
        mobileNav.style.animation="mobileNavAnimationForwards 0.5s forwards"
        mobileNav.style.display = "block"
    }
    else {
        mobileNav.style.animation="mobileNavAnimationBackwards 0.5s  forwards"
        setTimeout(() => {
            mobileNav.style.display = "none"
            mobileNav.style.animation="mobileNavAnimationForwards 0.5s forwards"
        }, 501);
      
    }
    // mobileNav.style.display === "none" ?  mobileNav.style.display = "block" :  mobileNav.style.display = "none";
}


hamburger ? hamburger.addEventListener("click",showMobile
   
   
) : null;
showMobile()



// ------------------------------------------------------------------------------------------------------------------------


function displayTopTextCandle(){
    const testCandles = document.querySelector(".video_text");
    const testCandles2 = document.querySelector(".video_text_sub");
    setTimeout(() => {
        testCandles2?  testCandles2.style.animation="fadeInAnimation 3s forwards" : null
        testCandles? testCandles.style.animation="fadeInAnimation 3s forwards": null
        
    }, 500);
}


displayTopTextCandle()

// ------------------------------------------------------------------------------------------------------------------------

function displayDifferentPeople(){

    
    const peopleGroup1 = `
    <div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (1).jpg" alt="">
        <h3>Samantha Jones</h3>
    </div>

    <div class="col-25-text-container">
        <p>Candle Production Manager
        </p>
 
    </div>
</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (2).jpg" alt="">
        <h3>Lucas Bennett</h3>
    </div>
    <div class="col-25-text-container">
        <p>Fragrance Development Specialist</p>
  
    </div>
</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (3).jpg" alt="">
        <h3>Maya Patel</h3>
    </div>
    <div class="col-25-text-container">
        <p>LMarketing and Brand Manager
        </p>
   
    </div>
</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (4).jpg" alt="">
        <h3>Connor Mitchell</h3>
    </div>
    <div class="col-25-text-container">
        <p>Sales Coordinator
        </p>
    
    </div>
</div>

    
`
const peopleGroup2 = ` 
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (5).jpg" alt="">
        <h3>Olivia Ramirez</h3>
    </div> 
    <div class="col-25-text-container">  
      
        <p>Supply Chain Coordinator
        </p>
   
    </div> 

</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (6).jpg" alt="">
        <h3>Ethan Chang</h3>
    </div>
    <div class="col-25-text-container">  
       
        <p>Quality Assurance Supervisor
        </p>
     
    </div>

</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (7).jpg" alt="">
        <h3>Emily Nguyen</h3>
    </div>
    <div class="col-25-text-container">  
     
        <p>Packaging Designer
        </p>
    
    </div>
  

</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (8).jpg" alt="">
        <h3>Jacob Thompson</h3>
    </div>
    <div class="col-25-text-container">  
  
        <p>E-commerce Specialist
        </p>
     
    </div>
</div>



`

const peopleGroup3 = `
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (9).jpg" alt="">
        <h3>Ava Rodriguez</h3>
    </div> 
    <div class="col-25-text-container">  
      
        <p>Retail Operations Manager
        </p>
    
    </div> 

</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (10).jpg" alt="">
        <h3>Noah Williams</h3>
        
    </div>
    <div class="col-25-text-container">  
       
        <p>Customer Experience Representative
        </p>
 
    </div>

</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (11).jpg" alt="">
        <h3>Sophia Lee</h3>
    </div>
    <div class="col-25-text-container">  
     
        <p>Sustainability Coordinator
        </p>
   
    </div>
  

</div>
<div class="col-lg-3 col-md-6">
    <div class="col-25-img-container">
        <img src="./imgs/person (12).jpg" alt="">
        <h3>Liam Garcia</h3>
    </div>
    <div class="col-25-text-container">  
  
        <p>Creative Director
        </p>
     
    </div>
</div>
`

const dot1 = document.querySelector("#dot_people_1");
const dot2 = document.querySelector("#dot_people_2");
const dot3 = document.querySelector("#dot_people_3");
const allDots = [dot1, dot2, dot3];
const container = document.querySelector(".people_section_container");
dot1? dot1.classList.add("active_dot") : null;

function displayPeople(people, dotNumber) {
    dotNumber? 
    dotNumber.addEventListener("click", function(){
        dotNumber.classList.contains("active_dot") ? null 
        : 
        
        container.style.animation="fadeInAnimation 1s forwards"
        allDots.forEach(dot=>dot.classList.remove("active_dot"))
        setTimeout(() => {
            dotNumber.classList.add("active_dot");
           
        }, 1);

        setTimeout(() => {
            container.style.animation=""
        }, 1001);
    
        container.innerHTML=people
    }) : null
}
displayPeople(peopleGroup1, dot1)
displayPeople(peopleGroup2, dot2)
displayPeople(peopleGroup3, dot3)
}

displayDifferentPeople()

// ------------------------------------------------------------------------------------------------------------------------


const right_button = document.querySelector(".arrow_row")

const slides = document.querySelectorAll(".slider")

function goToSlide(curSlide) {
    slides.forEach(function(slide, index) {
        slide.style.transform=`translateX(${100 * (index-curSlide)}%)`}
    )
}

let curSlide = 0
const maxSlides = slides.length
goToSlide(curSlide)
function nextSlide() {
    if (curSlide===maxSlides+1) {
        curSlide=-1
    }
    else {
        curSlide ++

    }

    goToSlide(curSlide)

}



if (right_button) {
right_button.addEventListener("click", function() {
    nextSlide()
    slides.forEach(function(slide, index) {
        slide.style.transform=`translateX(${100 * (index-curSlide)}%)`}
    )
    
    nextSlide()
    slides.forEach(function(slide, index) {
        slide.style.transform=`translateX(${100 * (index-curSlide)}%)`}
    )
    

})
}
// ------------------------------------------------------------------------------------------------------------------------
function displayModal(buttonTriggers) {
   
    buttonTriggers.forEach(element=>element.addEventListener("click", function(){
     
        modal_window = document.querySelector(".modal_window");
        modal_window.style.display="block";
        const body = document.querySelector("body");
        let elementId = element.getAttribute("data-id");
        let elementName = element.getAttribute("data-name");
        let elementImage = element.getAttribute("data-image");
        let elementPrice = element.getAttribute("data-price");
        let elementDescription = element.getAttribute("data-desc");
     
        const modalContainer = document.querySelector(".modal_content_to_be_injected_from_js");

     
        let mainThreeColsFirst = ` <div class="row">
        <h3 class="modal_title_3_cols"> Artisan Craftsmanship</h3>
        <div class="col-lg-12 col-product_main_3_desc">
            <div class="col-lg-6">
                <p>Artisan Craftsmanship lies at the heart of our niche candles company, 
                where every flicker tells a story of dedication and passion. From the moment our 
                artisans select the finest raw materials to the final touches of handcrafted elegance, 
                each candle embodies a labor of love and meticulous attention to detail. 
                </p>
            </div>
            <div class="col-lg-6 col-product_main_3_desc">
                <img src="./imgs/candles_images/candle_add (1).jpg" alt="" class="">
            </div>
        </div>
        <div class="col-lg-12 col-product_main_3_desc left">
            <div class="col-lg-6">
                <p>We take pride in preserving traditional techniques while infusing contemporary creativity, 
                ensuring that every product reflects our commitment to quality and authenticity. Our artisans, 
                with their skilled hands and artistic vision, transform raw ingredients into exquisite works of olfactory art, 
                blending fragrances that evoke emotions and memories. 
                Each candle is poured with precision, encapsulating not just scents but also a sense of craftsmanship and soul.
                </p>
            </div>
            <div class="col-lg-6 col-product_main_3_desc ">
                <img src="./imgs/candles_images/candle_add (2).jpg" alt="" class="">
            </div>
        </div>
    
        <div class="col-lg-12 col-product_main_3_desc">
            <div class="col-lg-6">
                <p>At our company, we believe that true luxury lies in the authenticity of creation, and our artisanal approach 
                ensures that every candle is a unique expression of beauty and sophistication, illuminating spaces with warmth and elegance.
                </p>
            </div>
            <div class="col-lg-6 col-product_main_3_desc">
                <img src="./imgs/candles_images/candle_add (3).jpg" alt="" class="">
            </div>
        </div>
        </div>`
        let mainThreeColsSecond = ` <div class="row">
        <h3 class="modal_title_3_cols">Signature Aromas</h3>
        <div class="col-lg-12 col-product_main_3_desc">
            <div class="col-lg-6">
                <p>At our niche candles company, we pride ourselves on crafting signature aromas that transcend the ordinary, 
                inviting you on a sensory journey that delights the soul. 
                Each of our signature scents is meticulously curated to evoke emotions, memories, and experiences that resonate deeply with our customers. 
                </p>
            </div>
            <div class="col-lg-6 col-product_main_3_desc">
                <img src="./imgs/candles_images/candle_add (4).jpg" alt="" class="">
            </div>
        </div>
        <div class="col-lg-12 col-product_main_3_desc left">
            <div class="col-lg-6">
                <p> From the soothing notes of lavender fields at dusk to the invigorating freshness of citrus orchards bathed in morning sunlight, 
                our fragrances are carefully blended to captivate the senses and create an atmosphere of warmth and tranquility. 
                </p>
            </div>
            <div class="col-lg-6 col-product_main_3_desc ">
                <img src="./imgs/candles_images/candle_add (5).jpg" alt="" class="">
            </div>
        </div>
    
        <div class="col-lg-12 col-product_main_3_desc">
            <div class="col-lg-6">
                <p>Drawing inspiration from nature's bounty and cultural influences from around the world, our signature aromas are a testament to 
                our dedication to quality and innovation. Whether you're seeking relaxation, inspiration, 
                or simply a moment of indulgence, our candles promise to infuse your space with captivating scents that leave a lasting impression.
                </p>
            </div>
            <div class="col-lg-6 col-product_main_3_desc">
                <img src="./imgs/candles_images/candle_add (6).jpg" alt="" class="">
            </div>
        </div>
        </div>`
        let mainThreeColsthird = ` <div class="row">
        <h3 class="modal_title_3_cols">Eco-friendly Materials</h3>
        <div class="col-lg-12 col-product_main_3_desc">
            <div class="col-lg-6">
                <p>Our candles are crafted using natural waxes such as soy wax or beeswax, 
                which are renewable resources that produce cleaner burns compared to traditional paraffin wax. These natural waxes not only reduce indoor air pollution but also support sustainable 
                farming practices, promoting biodiversity and soil health.
                </p>
            </div>
            <div class="col-lg-6 col-product_main_3_desc">
                <img src="./imgs/candles_images/candle_add (7).jpg" alt="" class="">
            </div>
        </div>
        <div class="col-lg-12 col-product_main_3_desc left">
            <div class="col-lg-6">
                <p>
                At our niche candles company, our dedication to sustainability is woven into every aspect of our production process, including our choice of materials. We prioritize eco-friendly materials that minimize environmental impact without compromising on quality or aesthetics. From the wax we use to the packaging that houses our products, 
                every element is thoughtfully selected to ensure it aligns with our commitment to sustainability.
                </p>
            </div>
            <div class="col-lg-6 col-product_main_3_desc ">
                <img src="./imgs/candles_images/candle_add (8).jpg" alt="" class="">
            </div>
        </div>
    
        <div class="col-lg-12 col-product_main_3_desc">
            <div class="col-lg-6">
                <p>At our niche candles company, sustainability isn't just a buzzword—it's a guiding principle that informs every aspect of our production 
                process. We are committed to using eco-friendly materials that minimize our environmental footprint while delivering exceptional quality.
                 Our candles are crafted using 100% natural soy wax, sourced from renewable soybean crops. 
                Unlike traditional paraffin wax, soy wax burns cleanly and emits significantly fewer toxins, promoting better air quality in your home. 
            </div>
            <div class="col-lg-6 col-product_main_3_desc">
                <img src="./imgs/candles_images/candle_add (9).jpg" alt="" class="">
            </div>
        </div>
        </div>`
          
        let productsGrid = `
        <div class="grid_products">
            <div class="modal_search">
                <div class="container_search ">
                    <div class="search-container">
                    <input class="input search-input" type="text">
                    <svg viewBox="0 0 24 24" class="search__icon">
                        <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                        </path>
                        </g>
                    </svg>
                    </div>
                </div>
                <div class="results_search results_modal"></div>
            </div>
          
            <div class="products_container_products">
            
                <div class="row no-gutters no-pad  products_row_products products_row_products_modal">
                
            
                ${  
                    $.ajax({
                    url: 'get_products.php',
                    type: 'POST',
                    success: function(get_products) {
                        if (!get_products.error) {
                            var products = JSON.parse(get_products);
                       
                            // Assuming get_products is an array of products
                            var productsHTML = products.map(product => {
                                return `
                                <div class="product_container_products modal_trigger_button"
                                    data-id="${product.id}" 
                                    data-name="${product.name}" 
                                    data-image="${product.image}" 
                                    data-price="${product.price}" 
                                    data-desc="${product.desc}"
                                    >
                                 
                                   
                                    <span class="add_product_span"> 
                                        
                                        <div class="img_buy">
                                        </div>
                                        <p>add</p> 
                                   
                                    </span>
                                    <img src="${product.image}">
                                    <div class="product_description_box">
                                        <p> <strong>${product.name}</strong></p>
                                        <span>${product.price + "£"}</span>
                                    </div>
                                </div>

                                `;
                            })
                            
                            // Append the generated HTML to the products container
                            $('.products_row_products_modal').html(productsHTML);
                            const firstImagesOnTop = document.querySelectorAll(".modal_trigger_button");
                            displayModal(firstImagesOnTop, event);
                          
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error("Error fetching products:", error);
                    }
                })
                }
            
                </div>
                
            
            
            </div>



        </div>


        `


        let productLiteralObject = ` 
        <div class="products_row products_row_modal">

            <div class="modal_img_container">
                <div class="modal_img_container"> 
                    <img src="${elementImage}" alt="">
                </div>
              
                <hr>
                <div class="price_button_container">
                    <div class="price_quantity_container">
                        <span class="price_quant"><span class="text_title_product">Price</span> : ${elementPrice} £</span>
                        <span class="price_quant"><span class="text_title_product">Availability</span> : On Stock</span>
                    </div>
                    <a href="${window.location.pathname +"?add_product="+ elementId}"></a>
                       
                   
                    <button class="button buy_product_button">Buy</button>
                 
                </div>
            </div>
            <div class="col-50">
                <div class="paragraph">
                    <h2>${elementName}</h2>
                    <p class="modal_product_desc_paragraph">${elementDescription}</p>
                  
                
                
                </div>
    
            </div>
    
        </div>`

        let close_modal_cross = document.querySelector(".cross_container");
   
        close_modal_cross.addEventListener("click", function(){
            modal_window = document.querySelector(".modal_window");
            modal_window.style.display="none";
            body.style.overflow="scroll";
        })
        body.style.overflow="hidden";
        if(element.classList.contains("modal_trigger_button")){ 
            modalContainer.innerHTML = productLiteralObject 
           
        }
        else if(element.classList.contains("modal_trigger_button_three_cols_1")){ 
            modalContainer.innerHTML = mainThreeColsFirst 
           
        }
        else if(element.classList.contains("modal_trigger_button_three_cols_2")){ 
            modalContainer.innerHTML = mainThreeColsSecond; 
           
        }
        else if(element.classList.contains("modal_trigger_button_three_cols_3")){ 
            modalContainer.innerHTML = mainThreeColsthird; 
           
        }
        else {
            const back_img = document.querySelector(".back_img")
           
            modalContainer.innerHTML = productsGrid;


           
        }
        BrowserProducts()
       
        const firstImagesOnTop = document.querySelectorAll(".modal_trigger_button");
        displayModal(firstImagesOnTop);
        const modal_trigger_button_three_cols_1 = document.querySelectorAll(".modal_trigger_button_three_cols_1");
        displayModal(modal_trigger_button_three_cols_1);




    
        
      
    
        const buy_product_button = document.querySelectorAll(".buy_product_button");
        
        buy_product_button.forEach(element => {
            element.addEventListener("click", function(){
                $.ajax({
                url: 'basket_products.php',
                data: {elementId:elementId},
                type: 'POST',
                success: function(test) {
                    console.log(test.trim())
        
                },
                error: function(xhr, status, error) {
                    console.error("Error fetching products:", error);
                }
                })
                
            })
        });
        
       
    }))


    

  

    
}

// ------------------------------------------------------------------------------------------------------------------------

function displayNobileLogin() {
    const mobile_login_container = document.querySelector(".mobile_login_container");
    
    if( mobile_login_container && mobile_login_container.style.display === "none") {
        mobile_login_container.style.animation="mobileNavAnimationForwards 0.5s forwards"
        mobile_login_container.style.display = "flex"
    }
    else {
        mobile_login_container?mobile_login_container.style.display = "none" : null
        
       
    }
   
}
const login_mobile = document.querySelector(".login_mobile");
login_mobile? login_mobile.addEventListener("click", displayNobileLogin) : null

displayNobileLogin()

// ------------------------------------------------------------------------------------------------------------------------

function triggerLoopText(textelement, text1, text2, text3, time) {
    const listofTexts = [text1, text2, text3] 
    setTimeout(() => {
        textelement.innerHTML=text1;
    }, time);
    setTimeout(() => {
        textelement.innerHTML=text2;
    }, time*2);
    setTimeout(() => {
        textelement.innerHTML=text3;
    }, time*3);
    
    setInterval(() => {
        setTimeout(() => {
            textelement.innerHTML=text1;
        }, time);
        setTimeout(() => {
            textelement.innerHTML=text2;
        }, time*2);
        setTimeout(() => {
            textelement.innerHTML=text3;
        }, time*3);
        
    }, time*listofTexts.length);
   
  
}
const buyMainButton = document.querySelector(".main_button_top");
buyMainButton? triggerLoopText(buyMainButton, "Buy", "Check", "Enjoy", 2000) : null;

// ------------------------------------------------------------------------------------------------------------------------
BrowserProducts()

const firstImagesOnTop = document.querySelectorAll(".modal_trigger_button");
displayModal(firstImagesOnTop);
const triggerGridProducts = document.querySelectorAll(".triggerGridProducts");
displayModal(triggerGridProducts);
const modal_trigger_button_three_cols_1 = document.querySelectorAll(".modal_trigger_button_three_cols_1");
displayModal(modal_trigger_button_three_cols_1);

const modal_trigger_button_three_cols_2 = document.querySelectorAll(".modal_trigger_button_three_cols_2");
displayModal(modal_trigger_button_three_cols_2);

const modal_trigger_button_three_cols_3 = document.querySelectorAll(".modal_trigger_button_three_cols_3");
displayModal(modal_trigger_button_three_cols_3);


// ------------------------------------------------------------------------------------------------------------------------


const profileTriggers = document.querySelectorAll(".trigger-drop-profile");
function displayProfileDropDown() {
    const basketDropDown = document.querySelector(".drop-down-basket");
    const profileDropDown = document.querySelector(".drop-down-profile");
    if(profileDropDown) {
        if(profileDropDown.style.display==="none") {
            profileDropDown.style.display="block";
            basketDropDown.style.display="none";
        }
        else {
            profileDropDown.style.display="none";
    
        }
    }
}
profileTriggers.forEach(elem=>elem.addEventListener("click", function(){
    displayProfileDropDown()
 
}))

displayProfileDropDown()


// ------------------------------------------------------------------------------------------------------------------------


const basketTriggers = document.querySelectorAll(".trigger-drop-basket");
function displayBasketDropDown(event) {
   
    const profileDropDown = document.querySelector(".drop-down-profile");
    const basketDropDown = document.querySelector(".drop-down-basket");
   
        if(basketDropDown.style.display==="none") {
            basketDropDown.style.display="block";
            profileDropDown.style.display="none";
        }
        else {
            basketDropDown.style.display="none";
    
        }
}
   
        
    

basketTriggers.forEach(elem=>elem.addEventListener("click", function(){
    displayBasketDropDown()
 
}))

displayBasketDropDown()




function confidentialOff() {
    const profileElements = document.querySelectorAll(".confidential");
    profileElements.forEach(ele=>ele.style.display="none");
}

function confidentialOn() {
    const profileElements = document.querySelectorAll(".confidential");
    profileElements.forEach(ele=>ele.style.display="inherit");
}

function hideWhenLoggedin() {
    const profileElements = document.querySelectorAll(".confidential-hide-logged-in");
    profileElements.forEach(ele=>ele.style.display="none");
}
function showWhenLoggedin() {
    const profileElements = document.querySelectorAll(".confidential-hide-logged-in");
    profileElements.forEach(ele=>ele.style.display="inherit");
}



// displayOffdropDowns(event)
 