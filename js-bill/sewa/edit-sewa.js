export const isiData = (results) => {
  const dataSewa = [
    { id: "imagePreview", path: "data.content" },
    { id: "tanggal_mulai", path: "data.tanggal_mulai" },
    { id: "tanggal_selesai", path: "data.tanggal_selesai" },
  ];

  console.log(results);

  dataSewa.forEach(({ id, path }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path);

    if (id === "imagePreview") {
      inputElement.innerHTML = `<img src="${value}" alt="Preview Gambar" style="max-width: 300px; max-height: 300px;">`;
    } else if (id === "tanggal_mulai" || id === "tanggal_selesai") {
      setupCalendarInput(inputElement, value);
    } else {
      inputElement.value = value;
    }
  });
};

const setupCalendarInput = (inputElement, value) => {
  inputElement.value = value;

  // Set the minimum date to the current date
  const currentDate = new Date().toISOString().split("T")[0];
  inputElement.min = currentDate;

  // Set the maximum date to a reasonable future date (adjust as needed)
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  inputElement.max = maxDate.toISOString().split("T")[0];
};

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((value, key) => (value && value[key] !== undefined ? value[key] : ""), obj);
};
