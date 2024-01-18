import { putData } from "../temp/component.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const updateSewa = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    console.log("ID Parameter:", id);

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=" + id;

    const imageInput = document.getElementById("content");
    const file = imageInput.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("tanggal_mulai", getValue("tanggal_mulai"));
    formData.append("tanggal_selesai", getValue("tanggal_selesai"));

    console.log(formData);
    
    putData(target_url, formData, responseData);
};

const responseData = (result) => {
    console.log("Server Response:", result, result.status);
    if (result.status === 200) {
        Swal.fire({
            icon: "success",
            title: "Update Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list-sewa.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Update Failed",
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
