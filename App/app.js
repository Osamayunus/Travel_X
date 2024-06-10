let availableSits= document.getElementById('available-sits');
let sitA1Id=document.getElementById('sit-A1');
 document.getElementById('sit-A1').addEventListener('click', function(availableSits,sitA1Id){
    console.log('clicked');
   const textGreen= sitA1Id.style.background = "#1DD100";
   const textWhite=sitA1Id.style.color='white';
    return (textGreen,textWhite);
   })


