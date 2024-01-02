import { getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

function postLogin(target_url, data, responseFunction) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.text())
        .then(result => responseFunction(JSON.parse(result)))
        .catch(error => console.log('error', error));
}

const Login = () => {

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/login";
    
    const data = {
        "email": getValue("email"),
        "password": getValue("password"),
    };

    postLogin(target_url, data, responseData);

}

function responseData (result) {
    if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: result.message,
        }).then(() => {
            window.location.href = "../index.html";
        });

    } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.message,
        });
    }
};

document.getElementById("button2").addEventListener("click", Login);