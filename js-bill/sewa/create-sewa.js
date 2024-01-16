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