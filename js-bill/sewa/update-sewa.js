// Import necessary functions
import { putData } from "../temp/component.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const updateSewa = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const target_url = `https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=${id}`;

    const imageInput = document.getElementById("content");
    const file = imageInput.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("tanggal_mulai", getValue("tanggal_mulai"));
    formData.append("tanggal_selesai", getValue("tanggal_selesai"));

    console.log(formData);

    try {
        const result = await putData(target_url, formData);
        handleUpdateResult(result);
    } catch (error) {
        console.error("Error during update:", error);
    }
};

const handleUpdateResult = (result) => {
    console.log("Server Response:", result);

    if (result.status === 200) {
        showSuccessMessage(result.message);
        redirectToSewaList();
    } else {
        showErrorMessage(result.message);
    }
};

const showSuccessMessage = (message) => {
    Swal.fire({
        icon: "success",
        title: "Update Successful",
        text: message,
    });
};

const showErrorMessage = (message) => {
    Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: message,
    });
};

const redirectToSewaList = () => {
    window.location.href = "list-sewa.html";
};

const btnUpdate = document.getElementById("btnUpdate");
btnUpdate.addEventListener("click", updateSewa);
