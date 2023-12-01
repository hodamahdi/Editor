let img =document.getElementById('img');
let upLoad = document.getElementById('upload');

let saturate =document.getElementById('saturate');
let contrast =document.getElementById('contrast');
let brighTness =document.getElementById('brightness');
let sepia =document.getElementById('sepia');
let grayScale =document.getElementById('grayScale');
let blur =document.getElementById('blur');
let hueRrotate =document.getElementById('hue-rotate');

let downBtn = document.querySelector('a');
let restBtn = document.querySelector('span');
let imgBox = document.querySelector('.img-Box')

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')

window.onload = function(){
   
    imgBox.style.display ='none';
    downBtn.style.display='none';
    restBtn.style.display='none';
}

// add img in editor
upLoad.onchange=function(){
    restFilter();
    imgBox.style.display ='block';
    downBtn.style.display='block';
    restBtn.style.display='block';
    let file = new FileReader();
    file.readAsDataURL(upLoad.files[0]);
    file.onload = function(){
        img.setAttribute('src',file.result);   
    }
   img.onload =function(){
    canvas.width = img.width;
    canvas.height =img.height;
    ctx.drawImage(img,0,0,canvas.width ,canvas.height);
    img.style.display='none';
   }
};


// adding filter on img
let filters = document.querySelectorAll('.filters ul li input');

filters.forEach(fil => {
  fil.addEventListener('input' ,function(){
 ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brighTness.value}%)
    sepia(${sepia.value}%)
    grayScale(${grayScale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRrotate.value}deg)
    `
    ctx.drawImage(img,0,0,canvas.width ,canvas.height);

  });
 
    
});

//  rest Filters
function restFilter(){
    ctx.filter ='none';
    saturate.value='100';
    contrast.value='100';
    brighTness.value='100';
    sepia.value='0';
    grayScale.value='0';
    blur.value='0';
    hueRrotate.value='0';
    ctx.drawImage(img,0,0,canvas.width ,canvas.height);


}

// reset filters by restBtn
restBtn.addEventListener('click', function(){
    restFilter();
});

//download img after adding filter
downBtn.addEventListener('click',function(){
   downBtn.href= canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
})


    
