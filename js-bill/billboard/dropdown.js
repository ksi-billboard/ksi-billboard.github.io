// dropdown.js
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { tableBill, tableBillBooked } from "../temp/table.js";
// import { bookedBill } from "./booked.js";

const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard";
const searchDropdown = document.getElementById("searchDropdown");

const dataBill  = (value) => {
    if (value.booking) {
        const data = tableBillBooked
    .replace("#GAMBAR#", value.gambar)
    .replace("#NAMA#", value.nama)
    .replace("#PANJANG#", value.panjang)
    .replace("#LEBAR#", value.lebar)
    .replace("#DISTRICT#", value.district)
    .replace("#VILLAGE#", value.village)
    .replace("#ID#", value._id)

    addInner("tableAllBillBooked", data);
    
    } else {
        const data = tableBill
    .replace("#GAMBAR#", value.gambar)
    .replace("#NAMA#", value.nama)
    .replace("#PANJANG#", value.panjang)
    .replace("#LEBAR#", value.lebar)
    .replace("#HARGA#", value.harga)
    .replace("#DISTRICT#", value.district)
    .replace("#VILLAGE#", value.village)
    .replace("#IDSEWA#", value._id)
    .replace("#ID#", value._id)

    addInner("tableAllBill", data);
    }
    // bookedBill(value);
}

const responseData = (result) => {
    if (result.status === 200) {
        // Clear existing options
        searchDropdown.innerHTML = '<option value="location">Search by location...</option>';

        // Get unique district and village values
        const uniqueValues = new Set();
        result.data.forEach((value) => {
            value.district && uniqueValues.add(value.district);
            value.village && uniqueValues.add(value.village);
        });

        // Add unique values as options to the dropdown
        uniqueValues.forEach((value) => {
            createOption(searchDropdown, value);
        });

        result.data.forEach(dataBill);
    }
};

// Dummy createOption function
const createOption = (selectElement, value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
};

// Function to filter data based on selected option
const filterData = (selectedValue, data) => {
    return data.filter((item) => item.district === selectedValue || item.village === selectedValue);
};

// Event listener for dropdown selection
searchDropdown.addEventListener("change", function () {
    const selectedValue = this.value;

    // Fetch data and filter based on the selected option
    getWithToken(target_url, (result) => {
        if (result.status === 200) {
            const filteredData = filterData(selectedValue, result.data);

            // Clear existing data
            document.getElementById("tableAllBillBooked").innerHTML = "";
            document.getElementById("tableAllBill").innerHTML = "";

            // Display the filtered data immediately
            filteredData.forEach(dataBill);
        }
    });
});

// Event listener for clearing the search
document.getElementById("clearSearchButton").addEventListener("click", function () {
    // Reset the dropdown to default value
    searchDropdown.value = "location";

    // Fetch all data and display
    getWithToken(target_url, (result) => {
        if (result.status === 200) {
            // Clear existing data
            document.getElementById("tableAllBillBooked").innerHTML = "";
            document.getElementById("tableAllBill").innerHTML = "";

            // Display all data
            result.data.forEach(dataBill);
        }
    });
});

// Initial data fetch and display
getWithToken(target_url, responseData);
