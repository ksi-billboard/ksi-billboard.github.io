export const isiData = (results) => {
    const dataSewa = [
      {id: "imagePreview", path: "data.content"},
      {id: "tanggal_mulai", path: "data.tanggal_mulai"},
      {id: "tanggal_selesai", path: "data.tanggal_selesai"},
    ];

      console.log(results);
  
    dataSewa.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      //imagePreview adalah gambar yang akan ditampilkan
      if (id === "imagePreview") {
        inputElement.innerHTML = `<img src="${value}" alt="Preview Gambar" style="max-width: 300px; max-height: 300px;">`;
      } else {
        inputElement.value = value;
      }
      
    });
  }
  
  const getNestedValue = (obj, path, index, property) => {
    const value = path
      .split(".")
      .reduce((value, key) => (value && value[key] !== undefined ? value[key] : ""), obj);
  
    if (
      Array.isArray(value) &&
      value.length > index &&
      value[index].hasOwnProperty(property)
    ) {
      return value[index][property];
    }
  
    return value;
  };