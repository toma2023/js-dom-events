console.log('this is seperate js file');
function makeRed(){
    document.body.style.backgroundColor ='red';
}
const makeBlueButton =document.getElementById('make-blue');
      makeBlueButton.onclick = makeBlue;
      function makeBlue(){
        document.body.style.backgroundColor = 'blue';
    }
    const purpleButton =document.getElementById('make-purple');
    purpleButton.onclick = function makePurple(){
      document.body.style.backgroundColor='purple'
    }