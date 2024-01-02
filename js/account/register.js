import { getValue } from "https://jscroot.github.io/element/croot.js";

function postRegister(target_url, data, responseFunction) {

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

const Register = () => {
    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/register";
    
    const data = {
        "namalengkap" : getValue("namalengkap"),
        "nohp": getValue("nohp"),
        "ktp": getValue("ktp"),
        "email": getValue("email"),
        "password": getValue("password"),
        "confirmpass": getValue("confirmpass"),
    };
    
    postRegister(target_url, data, responseData);
}

function responseData (result) {
    if (result.status === 200) {
        Swal.fire({
            icon: "success",
            title: "Register Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "../index.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Register Failed",
            text: result.message,
        });
    }
}

document.getElementById("button1").addEventListener("click", Register);