import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";

const logout = async () => {
    const isConfirmed = await Swal.fire({
        text: "Benarkah anda ingin keluar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Benar",
        cancelButtonText: "Tidak",
    });
    deleteCookie("Authorization");

    if (isConfirmed.isConfirmed) {
        await Swal.fire({
          icon: "success",
          text: "Anda sudah logout",
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "../index.html";
        });
    }
};
  
window.logout = logout;