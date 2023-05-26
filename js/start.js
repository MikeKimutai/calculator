(function(){
    let screen = document.getElementById('screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.getElementById('btn-equal');
    let clear = document.querySelector('.btn-clear');
    var answer = 0


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    
    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            console.log(screen.value)
            answer = eval(screen.value);
            console.log(screen.value)
            console.log(answer)
            screen.value += " = " + answer;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = "";
    });
})();