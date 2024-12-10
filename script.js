let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string)
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'C') {
                string = ""
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'M+') {
                memory += parseFloat(string || "0");
                string = "";
                // string = eval(string)
                document.querySelector('input').value = memory;
            }
            else if (e.target.innerHTML == 'M-') {
                memory -= parseFloat(string || "0");
                string = "";
                document.querySelector('input').value = memory;
            }
            else {
                console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch (err) {
            document.querySelector('input').value = "Error";
        }
    })
})