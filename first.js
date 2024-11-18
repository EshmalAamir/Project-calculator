let input = document.querySelector("#input-box");
let button = document.querySelectorAll("button");

let string = "";
let arr = Array.from(button);

arr.forEach(button => {
    button.addEventListener("click" , (e) => {
    if(e.target.innerText == "="){
        string = eval(string);
        input.value = string;
    }
    else if(e.target.innerText == "AC"){
        string = "";
        input.value = string;
    }
    else if(e.target.innerText == "DEL"){
        string = string.substring(0,string.lenght-1);
        input.value = string;
    }
    else{
        string += e.target.innerText;
        input.value = string;
    }
    });
});



