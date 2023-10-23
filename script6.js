let string = "";

keys = Array.from(document.querySelectorAll(".keys"));

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if(e.target.innerHTML == 'AC'){
      string = '';
    }
    else if(e.target.innerHTML == 'C'){
      string = string.slice(0, string.length-1);
    }
    else if(e.target.innerHTML == '='){
      string = eval(string).toString().slice(0, 12);

    }
    else{
      string += e.target.innerHTML;
      string = string.slice(0, 12);
    }
    display.value = string;
  });
});

