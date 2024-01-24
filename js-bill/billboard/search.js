import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { dataBill, dataBillBooked } from "../temp/table.js";

const target_url = "https://asia-southeast2-keamanansistem.cloudfunctions.net/billboard";

let isSearchActive = false;
let allData;

const filterData = (data, searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return data.filter(item =>
        item.district.toLowerCase().includes(lowerSearchTerm) ||
        item.village.toLowerCase().includes(lowerSearchTerm)
    );
};

const updateDisplayedData = (data, searchTerm) => {
    const filteredData = filterData(data, searchTerm);

    if (isSearchActive) {
        document.getElementById("tableAllBill").innerHTML = "";
        

        if (filteredData.length === 0) {
            addInner("tableAllBill", "<p>No results found.</p>");

        } else {
            filteredData.forEach(item => {
                if (item.booking) {
                    const tableHtml = dataBillBooked(item);
                    addInner("tableAllBill", tableHtml);
                } else {
                    const tableHtml = dataBill(item);
                    addInner("tableAllBill", tableHtml);
                }
                
            });
        }
    } else {
        allData.forEach(item => {
            if (item.booking) {
                const tableHtml = dataBillBooked(item);
                addInner("tableAllBill", tableHtml);
            } else {
                const tableHtml = dataBill(item);
                addInner("tableAllBill", tableHtml);
            }
        });
    }
};

document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = document.getElementById("searchInput").value;
    getWithToken(target_url, result => {
        if (result.error) {
            console.error(result.error);
        } else {
            isSearchActive = true;
            updateDisplayedData(result.data, searchTerm);
        }
    });
});

document.getElementById("clearSearchButton").addEventListener("click", function () {
    document.getElementById("searchInput").value = "";
    isSearchActive = false;
    clearTable();
    updateDisplayedData(allData, "");
});

function clearTable() {
    var table = document.getElementById("tableAllBill");
    table.innerHTML = "";
}

getWithToken(target_url, result => {
    if (result.error) {
        console.error(result.error);
    } else {
        allData = result.data;
        updateDisplayedData(allData, "");
    }
});

