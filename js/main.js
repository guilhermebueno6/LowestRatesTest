let login = document.querySelector('#login'),
    checkBox = document.querySelector('#menuToggle input'),
    menu = document.querySelector('#menu');
    var usedFunction = new Boolean(false);

function loginFunc(){
    window.scrollTo({
        left:0,
        top:document.body.scrollHeight,
        behavior: 'smooth'
    });
    checkBox.checked=true
    usedFunction =true;
    
    
    var listAppend = ["Debt","Finance","Loans"];
    var count = 0;
   
    while(count<=2){
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.appendChild(document.createTextNode(listAppend[count]));
        a.href='#'+listAppend[count];
        li.appendChild(a);
        menu.prepend(li);
        
        
        count = count+1;
        
       
    }
}

    
    
    function close(){
        
    
        if(usedFunction==true){
            
            var i = 0;
            while(i<=2){
                menu.removeChild(menu.firstElementChild);
                i++;
                usedFunction = false;
            }
           
        }
    }
    
checkBox.addEventListener("click", close);







login.addEventListener("click", loginFunc);