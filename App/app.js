let sitA1Id=document.getElementById('sit-A1');
let isOriginalColor = true;
 document.getElementById('sit-A1').addEventListener('click', function(){
    console.log('clicked');
    const selectedSit=document.getElementById('seleted-sit');
    let availableSits=document.getElementById('available-sits');
     if (isOriginalColor) {
      this.style.backgroundColor = '#1DD100';
      this.style.color = 'white';
       const intoNum=availableSits.innerText;
       const intNum=parseInt(intoNum);
       let sitNum=intNum-1;
       availableSits.innerText=sitNum; 

       const innerTextNum=selectedSit.innerText;
       const IntoNum=parseInt(innerTextNum);
       let selectedSitLeft=IntoNum+1;
       selectedSit.innerText=selectedSitLeft;

    } 
  else {
      this.style.backgroundColor = '';
      this.style.color = '';
       const intoNum=availableSits.innerText;
       const intNum=parseInt(intoNum);
       let sitNum=intNum+1;

        const innerTextNum=selectedSit.innerText;
       const IntoNum=parseInt(innerTextNum);
       let selectedSitLeft=IntoNum-1;
       selectedSit.innerText=selectedSitLeft;
       availableSits.innerText=sitNum; 
        }
  isOriginalColor = !isOriginalColor;
   })


