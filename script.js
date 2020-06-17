// deklrasi
const button = document.querySelector("#submit");
// input

// add event for button
button.addEventListener("click", formRegister);

// create fungsi
function formRegister() {
    const nameValue = document.getElementById("name").value;
    const phoneValue = document.getElementById("phone").value;
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    return alert(
        `pemberitahuan kepada: ${nameValue} \nhandphone: ${phoneValue}\nemail: ${emailValue}\npassword: ${passwordValue}\nSelamat Anda telah terdaftar`
    );
}
