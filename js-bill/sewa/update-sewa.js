export const isiData = (results) => {
    const dataSewa = [
      {id: "kode", path: "data.0.kode"},
      {id: "content", path: "data.0.content"},
      {id: "tanggal_mulai", path: "data.0.tanggal_mulai"},
      {id: "tanggal_selesai", path: "data.0.tanggal_selesai"},
      {id: "status", path: "data.0.status"},
    ];
  
  
    dataSewa.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
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