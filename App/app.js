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
const cuponCode15=document.getElementById('cupon-code-15');
const cuponCode20=document.getElementById('cupon-code-20');
const inputText=document.getElementById('input').value
const cupon15InnerText=cuponCode15.innerText;
const cupon20InnerText=cuponCode20.innerText;
 
}
})
