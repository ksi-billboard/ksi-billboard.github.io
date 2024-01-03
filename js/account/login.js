import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";
import { postWithToken } from "../temp/component.js";

const Login = () => {

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/login";
    
    const data = {
        "email": getValue("email"),
        "password": getValue("password"),
    };

    postWithToken(target_url, data, responseData);

}

function responseData (result) {
    console.log(result);

    console.log("responData", result.data);
    switch (result.status) {
        case 200:
            setCookieWithExpireHour("Authorization", result.token, 2);
            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: result.message,
              }).then(() => {
                if (result.data.email === "admin@gmail.com") {
                    window.location.href = "https://ksi-billboard.github.io/ksi-admin";
                } else {
                    window.location.href = "../index.html";
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
        case 401:
            Swal.fire({
                icon: "error",
                title: "Unauthorized: Insert Failed",
                text: result.message,
            });
            break;
        case 403:
            Swal.fire({
                icon: "error",
                title: "Forbidden: Insert Failed",
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