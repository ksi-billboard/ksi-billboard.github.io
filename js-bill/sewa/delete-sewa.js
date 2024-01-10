import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const deleteSewa = async (IDHAPUS) => {
  const _id = IDHAPUS;
  const token = getCookie("Authorization");

  const isConfirmed = await Swal.fire({
    title: "Benarkah anda ingin menghapus data ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Benar",
    cancelButtonText: "Tidak",
  });

  if (isConfirmed.isConfirmed) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    const target_url =
      "https://asia-southeast2-xenon-hawk-402203.cloudfunctions.net/sewa?_id=" + _id;

    try {
      const response = await fetch(target_url, {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "Data berhasil dihapus",
          showConfirmButton: false,
        });
        location.reload();
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

window.deleteSewa = deleteSewa;