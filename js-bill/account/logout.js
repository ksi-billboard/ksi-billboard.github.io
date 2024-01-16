import { deleteCookie } from "https://jscroot.github.io/cookie/croot.js";

const logout = () => {
    Swal.fire({
      icon: "question",
      title: "Konfirmasi",
      text: "Apakah Anda benar ingin logout?",
      showCancelButton: true,
      confirmButtonText: "Benar",
      cancelButtonText: "Tidak",
    })

    if (isConfirmed.isConfirmed) {
  
      try {
        const response =  fetch(target_url, {
          method: "DELETE",
          headers: myHeaders,
          redirect: "follow",
        });
  
        if (response.ok) {
           Swal.fire({
            icon: "success",
            text: "Data berhasil dihapus",
            showConfirmButton: false,
          })
          .then((result) => {
      
        deleteCookie("Authorization");
        window.location.href = "../login.html";
      
    });
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  
window.logout = logout;