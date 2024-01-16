import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { singleSewa, singleBill } from "../temp/table.js";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/sewa?id=" + id;

const dataBill  = (value) => {
    const data = singleBill
    .replace("#GAMBAR#", value.gambar)
    .replace("#KODE#", value.kode)
    .replace("#NAMA#", value.nama)
    .replace("#PANJANG#", value.panjang)
    .replace("#LEBAR#", value.lebar)
    .replace("#HARGA#", value.harga)
    .replace("#REGENCY#", value.regency)
    .replace("#DISTRICT#", value.district)
    .replace("#VILLAGE#", value.village)
    .replace("#ADDRESS#", value.address)
    .replace("#LATITUDE#", value.latitude)
    .replace("#LONGITUDE#", value.longitude)

    addInner("bill", data);
}

const dataSewa  = (value) => {
    const data = singleSewa
    .replace("#GAMBAR#", value.content)
    .replace("#MULAI#", value.tanggal_mulai)
    .replace("#SELESAI#", value.tanggal_selesai)

    console.log(value);

    addInner("sewa", data);
}

const responseData = (result) => {
    if (result.status === 200) {
        dataBill(result.data.billboard);
        dataSewa(result.data);
        
    }
}

getWithToken(target_url, responseData);


