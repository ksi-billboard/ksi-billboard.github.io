import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getWithToken } from "../temp/component.js";
import { tableBill } from "../temp/table.js";
import { bookedBill } from "./booked.js";

// Function to filter the data based on search criteria
const filterData = (data, searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
  
    return data.filter(item =>
      item.district.toLowerCase().includes(lowerSearchTerm) ||
      item.village.toLowerCase().includes(lowerSearchTerm)
    );
  };
  
  // Function to update the displayed data based on search results
  const updateDisplayedData = (data, searchTerm) => {
    const filteredData = filterData(data, searchTerm);
    document.getElementById("tableAllBill").innerHTML = "";
  
    if (filteredData.length === 0) {
      // Display a message when no results are found
      addInner("tableAllBill", "<p>No results found.</p>");
    } else {
      // Display the filtered data
      filteredData.forEach(dataBill);
    }
  };
  
  // Event listener for form submission
  document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const searchTerm = document.getElementById("searchInput").value;
    getWithToken(target_url, result => updateDisplayedData(result.data, searchTerm));
  });
  
  // Additional functions or code if needed
  