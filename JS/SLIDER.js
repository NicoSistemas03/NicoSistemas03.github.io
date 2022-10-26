(function(){
    
    const sliders = [...document.querySelectorAll('.section2_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentsection2 = document.querySelector('.section2_body--show').dataset.id;
        value = Number(currentsection2);
        value+= add;

        sliders[Number(currentsection2)-1].classList.remove('section2_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('section2_body--show');
        
    }

})();