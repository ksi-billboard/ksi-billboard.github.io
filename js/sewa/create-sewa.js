import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { getValue } from "https://jscroot.github.io/element/croot.js";

const insertSewa = () => {

    const tokenkey = "Authorization";
    const tokenvalue = getCookie("Authorization");

    const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa";
    
    const data = {
        kode: getValue("kode"),
        billboard: {
            _id: "id billboard"
        },
        content: getValue("content"),
        tanggal_mulai: getValue("tanggal_mulai"),
        tanggal_selesai: getValue("tanggal_selesai"),
        status: getValue("status"), // true/false
    
    };

    postWithToken(target_url, tokenkey, tokenvalue, data, responseData);

}

const responseData = (result) => {
    if (result.status === true) {
        Swal.fire({
            icon: "success",
            title: "Insert Successful",
            text: result.message,
        }).then(() => {
            window.location.href = "pemasukan.html";
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