import { getValue } from "https://jscroot.github.io/element/croot.js";
import { postRegister } from "../temp/component.js";

const Register = () => {
    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/register";
    
    const data = {
        namalengkap : getValue("namalengkap"),
        nohp : getValue("nohp"),
        ktp : getValue("ktp"),
        email : getValue("email"),
        password : getValue("password"),
        confirmpass : getValue("confirmpass"),
    };
    
    postRegister(target_url, data, responseData);
}

function responseData (result) {
    switch (result.status) {
        case 200:
            Swal.fire({
                icon: "success",
                title: "Register Successful",
                text: result.message,
              }).then(() => {
                  window.location.href = "../login.html";
              });
            break;
        case 400:
            Swal.fire({
                icon: "error",
                title: "Bad Request: Register Failed",
                text: result.message,
              });
            break;
        default:
            Swal.fire({
                icon: "error",
                title: "Unknown Error: Register Failed",
                text: result.message,
            });
            break;
    }
}

document.getElementById("button1").addEventListener("click", Register);