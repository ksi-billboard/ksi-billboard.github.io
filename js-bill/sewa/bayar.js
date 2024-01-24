import { putData2 } from "../temp/component.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const updateSewa = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    console.log("ID Parameter:", id);

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa/bayar?id=" + id;

    const data = {
        harga : getValue("harga"), 
    };
    
    putData2(target_url, data, responseData);
};

const responseData = (result) => {
    console.log("Server Response:", result, result.status);
    if (result.status === 200) {
        Swal.fire({
            icon: "success",
            title: "Bayar Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list-sewa.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Bayar Failed",
            text: result.message,
        });
    }
}

const btnUpdates = document.getElementById("btnUpdate");

// btnUpdates.addEventListener("click", updateSewa);

btnUpdates.addEventListener("click", () => {
    console.log("button aktif");
    updateSewa();
  });
