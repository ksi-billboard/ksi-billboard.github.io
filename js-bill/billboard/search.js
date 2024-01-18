import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { dataBill } from "../temp/table.js";
import { bookedBill } from "./booked.js"; // Impor fungsi bookedBill

const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard";

let isSearchActive = false;
let allData; // Tentukan variabel untuk menyimpan data asli

// Fungsi untuk menyaring data berdasarkan kriteria pencarian
const filterData = (data, searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return data.filter(item =>
        item.district.toLowerCase().includes(lowerSearchTerm) ||
        item.village.toLowerCase().includes(lowerSearchTerm)
    );
};

// search.js
const updateDisplayedData = (data, searchTerm) => {
    const filteredData = filterData(data, searchTerm);

    // Check if a search is active
    if (isSearchActive) {
        document.getElementById("tableAllBill").innerHTML = "";
        bookedBill(item, tableElement);

        if (filteredData.length === 0) {
            // Display a message when no results are found
            addInner("tableAllBill", "<p>No results found.</p>");
        } else {
            // Display the filtered data
            filteredData.forEach(item => {
                const tableHtml = dataBill(item);
                const tableElement = addInner("tableAllBill", tableHtml);
            
                // Pass the isBooked property to the bookedBill function
                
            });
        }
    } else {
        // If no search is active, display the original data
        allData.forEach(item => {
            const tableHtml = dataBill(item);
            const tableElement = addInner("tableAllBill", tableHtml);

            // Call the bookedBill function only for booked items
            if (item.booking || item.booked) {
                bookedBill(item, tableElement);
            }
        });
    }
};

// Listener acara untuk pengiriman formulir
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = document.getElementById("searchInput").value;
    getWithToken(target_url, result => {
        if (result.error) {
            console.error(result.error);
        } else {
            isSearchActive = true; // Atur flag untuk menunjukkan pencarian aktif
            updateDisplayedData(result.data, searchTerm);
        }
    });
});

// Listener acara untuk membersihkan pencarian
document.getElementById("clearSearchButton").addEventListener("click", function () {
    document.getElementById("searchInput").value = "";
    isSearchActive = false; // Atur ulang flag untuk menunjukkan tidak ada pencarian aktif
    updateDisplayedData(allData, ""); // Gunakan allData
});

// Ambil data asli
getWithToken(target_url, result => {
    if (result.error) {
        console.error(result.error);
    } else {
        allData = result.data; // Simpan data asli
        updateDisplayedData(allData, ""); // Tampilkan data asli secara awal
    }
});
