import { insertWithToken } from "../temp/component.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const insertSewa = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=" + id;

    const imageInput = document.getElementById("content");
    const file = imageInput.files[0];

    const formData = new FormData();
    // formData.append("billboard[_id]", getValue("id"));
    formData.append("file", file);
    formData.append("tanggal_mulai", getValue("tanggal_mulai"));
    formData.append("tanggal_selesai", getValue("tanggal_selesai"));

    console.log(formData);

    insertWithToken(target_url, formData, responseData);
}

const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

document.getElementById("tanggal_mulai").value = getCurrentDate(); // Set Tanggal Mulai to current date
document.getElementById("tanggal_mulai").min = getCurrentDate(); // Tanggal Mulai cannot be before today

document.getElementById("tanggal_selesai").value = getCurrentDate(); // Set Tanggal Selesai to current date
document.getElementById("tanggal_selesai").min = getCurrentDate(); // Tanggal Selesai cannot be before today

// Add event listener to Tanggal Mulai to update Tanggal Selesai min attribute
document.getElementById("tanggal_mulai").addEventListener("change", () => {
    const startDate = document.getElementById("tanggal_mulai").value;
    document.getElementById("tanggal_selesai").min = startDate;
});

const responseData = (result) => {
    if (result.status === 201) {
        Swal.fire({
            icon: "success",
            title: "Insert Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "list-sewa.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Insert Failed",
            text: result.message,
        });
    }
}

const btnInsert = document.getElementById("btnInsertSewa");

btnInsert.addEventListener("click", insertSewa);