let sitA1Id=document.getElementById('sit-A1');
let isOriginal = true;
 document.getElementById('sit-A1').addEventListener('click', function(){
    console.log('clicked');
    const pricePerSit=document.getElementById('sit-price');
    const sitDis=document.getElementById('sit-part');
    const sitCode=document.getElementById('Sit-class');
    const selectedSit=document.getElementById('selected-sit');
    let availableSits=document.getElementById('available-sits');
    let totalPrice=document.getElementById('total-price');
    let grandPrice=document.getElementById('Grand-price');

     if (isOriginal) {
      this.style.backgroundColor = '#1DD100';
      this.style.color = 'white';
      const innerTextSit=this.innerText;
      // adding sit
      sitCode.innerText=innerTextSit;
      sitDis.classList.remove('hidden');
      // total sit left
       const intoNum=availableSits.innerText;
       const intNum=parseInt(intoNum);
       let sitNum=intNum-1;
       availableSits.innerText=sitNum; 
// selected sits
       const innerTextNum=selectedSit.innerText;
       const IntoNum=parseInt(innerTextNum);
       let selectedSitLeft=IntoNum+1;
       selectedSit.innerText=selectedSitLeft;
// total price
       const intoPricePerSit=pricePerSit.innerText;
       const intoNumPrice=parseInt(intoPricePerSit);
       const totalPriceValueNum=parseInt(totalPrice.innerText);
       let totalPriceAdd=intoNumPrice+totalPriceValueNum;
       totalPrice.innerText=totalPriceAdd;
// grand price
grandPrice.innerText=totalPriceAdd;
    } 
  else {
      this.style.backgroundColor = '';
      this.style.color = '';
       const intoNum=availableSits.innerText;
       const intNum=parseInt(intoNum);
       let sitNum=intNum+1;
       sitDis.classList.add('hidden');

        const innerTextNum=selectedSit.innerText;
       const IntoNum=parseInt(innerTextNum);
       let selectedSitLeft=IntoNum-1;
       selectedSit.innerText=selectedSitLeft;
       availableSits.innerText=sitNum; 

      //  total price
      const intoPricePerSit=pricePerSit.innerText;
      const intoNumPrice=parseInt(intoPricePerSit);
      const totalPriceValueNum=parseInt(totalPrice.innerText);
      let totalPriceAdd=intoNumPrice-totalPriceValueNum;
      totalPrice.innerText=totalPriceAdd;

// grand price
grandPrice.innerText=totalPriceAdd;

        }
  isOriginal = !isOriginal; 
   })

document.getElementById('apply-discount').addEventListener('click',function(){
       console.log('clicked');
let cuponCode15=document.getElementById('cupon-code-15');
let cuponCode20=document.getElementById('cupon-code-20');
let inputText=document.getElementById('input').value
let cupon15InnerText=cuponCode15.innerText;
let cupon20InnerText=cuponCode20.innerText;
console.log(cupon15InnerText,cupon20InnerText,inputText);
 if((cupon15InnerText===inputText) || (cupon20InnerText===inputText)){
console.log('right cupon code');
      if(cupon15InnerText===inputText){
const totalPriceText=document.getElementById('total-price').innerText;
const totalPriceTextNum=parseInt(totalPriceText);
const percent=15;
const discountPrice=(totalPriceTextNum/100)* percent;
const currentPriceNow=totalPriceTextNum-discountPrice;
document.getElementById('Grand-price').innerText=currentPriceNow;
document.getElementById('discount').classList.remove('hidden');
document.getElementById('discount-price').innerText=discountPrice;
document.getElementById('cupon').classList.add('hidden');
}
    else{

       const totalPriceText=document.getElementById('total-price').innerText;
       const totalPriceTextNum=parseInt(totalPriceText);
       const percent=20;
       const discountPrice=(totalPriceTextNum/100)* percent;
       const currentPriceNow=totalPriceTextNum-discountPrice;
       document.getElementById('Grand-price').innerText=currentPriceNow;
       document.getElementById('discount').classList.remove('hidden');
       document.getElementById('discount-price').innerText=discountPrice;
       document.getElementById('cupon').classList.add('hidden');
}
   }
    else{
       alert('Please give a correct cupon code');
   }
}
)
