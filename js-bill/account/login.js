import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";
import { postWithToken } from "../temp/component.js";

const Login = () => {

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/login";
    
    const data = {
        email : getValue("email"),
        password : getValue("password"),
    };

    postWithToken(target_url, data, responseData);

}

function responseData (result) {
    const admin = "admin@gmail.com";
    switch (result.status) {
        case 200:
            setCookieWithExpireHour("Authorization", result.data.token, 2);
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: result.message,
              }).then(() => {
                if (result.data.email === admin) {
                    window.location.href = "https://ksi-billboard.github.io/ksi-admin";
                } else {
                    window.location.href = "../list-bill.html";
                }
                //   window.location.href = "../index.html";
              });
            break;
        case 400:
            Swal.fire({
                icon: "error",
                title: "Bad Request: Login Failed",
                text: result.message,
              });
            break;
        default:
            Swal.fire({
                icon: "error",
                title: "Unknown Error: Login Failed",
                text: result.message,
            });
            break;
    }
};

document.getElementById("button2").addEventListener("click", Login);