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

    if (isConfirmed.isConfirmed) {
      if (response.ok) {
        await Swal.fire({
          icon: "success",
          text: "Data berhasil dihapus",
          showConfirmButton: false,
        }).then(() => {
          deleteCookie("Authorization");
          window.location.href = "../index.html";
        });
      }
    }
};
  
window.logout = logout;