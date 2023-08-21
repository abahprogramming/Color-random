const chooseColor = document.getElementById('chooseColor');
let rgbText = document.getElementById('rgbText');

chooseColor.addEventListener('click', function(){
    

    let red = Math.round(Math.random() * 255 + 1);
    let green = Math.round(Math.random() * 255 + 1);
    let blue = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 

    rgbText.innerHTML = `RGB (${red}, ${green}, ${blue});` ;

});



let rangeColorInput = document.querySelectorAll('input');

for (let i = 0; i < rangeColorInput.length; i++) {

    rangeColorInput[i].addEventListener('input', function(){
        let redColor = rangeColorInput[0].value;
        let greenColor = rangeColorInput[1].value;
        let blueColor = rangeColorInput[2].value;

        const pWarna = document.querySelectorAll('.rangeInput p');

        for (let j = 0; j < pWarna.length; j++) {
            const pRed = pWarna[0];
            const pGreen = pWarna[1];
            const pBlue = pWarna[2];
            
            pRed.innerHTML = `Red : ${redColor}`;
            pGreen.innerHTML = `Green : ${greenColor}`;
            pBlue.innerHTML = `Blue : ${blueColor}`;
        }

        document.body.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
    });
    
}

const fresh = document.getElementById('refresh');

fresh.addEventListener('click', function(){
    document.location.reload();
})


