import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { tableBill, tableBillBooked } from "../temp/table.js";
// import { bookedBill } from "./booked.js";

const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard"

const dataBill  = (value) => {
    if (value.booking) {
        const data = tableBillBooked
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

    addInner("tableAllBillBooked", data);
    } else {
        const data = tableBill
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

    addInner("tableAllBill", data);
    }
    // bookedBill(value);
}

const responseData = (result) => {
    if (result.status === 200) {
        result.data.forEach(dataBill);
    }
}

getWithToken(target_url, responseData);

