import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";

const logout = () => {
    Swal.fire({
      icon: "question",
      title: "Konfirmasi",
      text: "Apakah Anda benar ingin logout?",
      showCancelButton: true,
      confirmButtonText: "Benar",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          text: "Data berhasil dihapus",
          showConfirmButton: false,
        });
        deleteCookie("Authorization");
        window.location.href = "login.html";
      }
    });
  };
  
window.logout = logout;