let inputs = document.getElementById("in");
let list = document.querySelector(".list ul");

function aDD() {
    if (inputs.value === "") {
        alert("Enter some task");
    } else {
        let newTask = document.createElement("li");
        newTask.innerHTML = `
                    ${inputs.value} `;
        list.appendChild(newTask);
        inputs.value = "";

        // newTask.querySelector("i").addEventListener("click", function () {
        //     newTask.remove();
        // });
    }
}




