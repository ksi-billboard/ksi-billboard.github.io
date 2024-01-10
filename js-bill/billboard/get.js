import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { tableBill } from "../temp/table.js";

const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard"

const dataBill  = (value) => {
    const data = tableBill
    .replace("#NAMA#", value.nama)
    .replace("#GAMBAR#", value.gambar)
    .replace("#NAMA1#", value.nama)
    .replace("#PANJANG#", value.panjang)
    .replace("#LEBAR#", value.lebar)
    .replace("#HARGA#", value.harga)
    .replace("#DISTRICT#", value.district)
    .replace("#VILLAGE#", value.village)
    .replace("#ID#", value._id)

    addInner("tableAllBill", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        result.data.forEach(dataBill);
    }
}

getWithToken(target_url, responseData);
