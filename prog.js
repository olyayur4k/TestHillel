// function summ(a, b) {
//     return a + b;
// }

// console.log(summ(234, 2345));

// function hello() {
//     console.log('Hello, Node.JS!');
// }
// hello();

// var arr = [];
// var s = true;
// while (s) {
//     hello();
//     arr.push('aaa');
//     if (arr.length == 20) {
//         s = false;
//     }
// }

// var numbers = [1234, 6346, 785, 234567, 45, 2346, 5689, 333];
// var result = 0;
// for (var i = 0; i < numbers.length; i++) {
//     result = result + numbers[i];
//     if (i == numbers.length - 1) {
//         console.log(result);
//     }    
// }
// console.log(result);

window.addEventListener("load", () => {
    var addButton = document.querySelector('#add');
    var list = document.querySelector("#list table");
    addButton.addEventListener("click", () => {
        var item = document.querySelector("#item");        
        var tr = document.createElement("tr");
		var td = document.createElement("td");

        tr.innerText = item.value;
        item.value = "0";
        list.appendChild(tr);
        
		
        console.log(item.value);
    });

    var theme = document.querySelector("#theme");
    theme.addEventListener("click", () => {
        if (addButton.classList.contains("light")) {
            addButton.classList.remove("light");
            addButton.classList.add("dark");
            list.classList.remove("light");
            list.classList.add("dark");
        } else {
            addButton.classList.remove("dark");
            addButton.classList.add("light");
            list.classList.remove("dark");
            list.classList.add("light");
        }
    });
});
