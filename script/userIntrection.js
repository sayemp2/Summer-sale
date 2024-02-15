// get the Element
const cards = document.querySelectorAll(".card");

// for (let i = 0; i < cards.length; i++) {
//     const card = cards[i];
//     card.addEventListener('click', function(){
//         console.log(card);
//     })
//     console.log();

// }
let count = 1;
let total = 0;
for (const card of cards) {
    card.addEventListener('click', function () {
        // get Element name
        const nameHtml = card.querySelector('h2');
        const nameTxt = nameHtml.innerText;
        console.log(nameTxt);

        // get Element price
        const priceHtml = card.querySelector('p');
        const priceNum = parseFloat(priceHtml.innerText.split(' ')[1]);
        console.log(priceNum)


        // set the item to cart section

        let cart = document.querySelector('#cart-box');
        let productDetail = document.createElement('p');
        productDetail.innerText = count + ". " + nameTxt ;
        console.log()
        cart.appendChild(productDetail);
        count++;



        // calculate total price
        total = total + priceNum;
        // document.getElementById('total-price').innerText = total.toFixed(2);
        setElementValue('total-price',total);
    })
   
}
 // function
 const applyBtn = document.getElementById('discount-btn');
    
 applyBtn.addEventListener("click", function () {
     
     const inputField = document.getElementById('input-field').value;
     const cuponTxt = inputField.split(" ").join("").toUpperCase();
     if(total >= 200){
         if (cuponTxt === "SELL200") {
             const discountPrice = total * 0.2;
             setElementValue('discount-price', discountPrice);
             const finalPrice = total - discountPrice;
             setElementValue('final-price', finalPrice)
             const purchesBtn = document.getElementById('purches-btn');
             purchesBtn.addEventListener('click', function(){
                const sucess = document.getElementById('Sucess');
                sucess.classList.remove('hidden');
                opaciityDown('product-section')
                opaciityDown('banner');
             })
             document.getElementById('input-field').value = ' ';
         }
         else{
             alert('Invalid Promo code');
             document.getElementById('input-field').value = ' ';
         }
     }
     else{
         alert("you should to buy more item from our shop");
         document.getElementById('input-field').value = ' ';
     }

 })

const goHome = document.getElementById("go-home");
goHome.addEventListener('click', function(){
    addHidden('Sucess');
    removeOpaciityDown('product-section')
    removeOpaciityDown('banner')
    setElementValue('total-price', 0)
    setElementValue('discount-price', 0)
    setElementValue('final-price', 0)
})


