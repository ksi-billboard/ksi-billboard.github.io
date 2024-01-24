export const tableBill = `
<ul class="job-listings mb-3 listBill">
    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
        <a href="single-bill.html?id=#ID#"></a>
        <div class="job-listing">
            <img src="#GAMBAR#" alt="Image" class="img-fluid rounded-0" style="width: 300px; height: 150px;" />
        </div>

        <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
            <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>#NAMA#</h2>
                <strong>#PANJANG# m x #LEBAR# m</strong>
            </div>
            <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span class="icon-room">#DISTRICT#, #VILLAGE#</span> 
            </div>
            <div class="job-listing-meta">
                <span class="badge badge-danger booked">Rp. #HARGA#</span>
            </div>
            <div class="job-listing-meta mx-4">
                <div class="job-listing-position">
                <a href="post-adv.html?id=#IDSEWA#" id="booking" class="btn btn-primary flex-grow-1 ml-6" onclick="isBooked()"></a>
                </div>
            </div>
        </div>
    </li>
</ul>
`;

export const dataBill = (item) => {
    return ` <ul class="job-listings mb-3 listBill">
    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
        <a href="single-bill.html?id=${item._id}"></a>
        <div class="job-listing">
            <img src="${item.gambar}" alt="Image" class="img-fluid rounded-0" style="width: 300px; height: 150px;" />
        </div>

        <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
            <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2>${item.nama}</h2>
                <strong>${item.panjang} m x ${item.lebar} m</strong>
            </div>
            <div class="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                <span class="icon-room">${item.district}, ${item.village}</span> 
            </div>
            <div class="job-listing-meta">
                <span class="badge badge-danger booked">Rp. ${item.harga}</span>
            </div>
            <div class="job-listing-meta mx-4">
                <div class="job-listing-position">
                    <a href="post-adv.html?id=${item._id}" id="booking" class="btn btn-primary flex-grow-1 ml-6" onclick="isBooked()"></a>
                </div>
            </div>
        </div>
    </li>
</ul>
`;
};


export const singleBill = `
<div class="row">
  <div class="col-lg-12">
    <div class="mb-5">
      <img src="#GAMBAR#" alt="Image" class="img-fluid rounded-0" style="width: 500px; height: 250px;" />
      
    </div>
  </div>
  <div class="col-lg-6">
    <div class="mb-5">
        <div class="bg-light p-3 border rounded mb-4">
            <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Detail Billboard</h3>
            <ul class="list-unstyled pl-3 mb-0">
              <li class="mb-2"><strong class="text-black">Kode : </strong> #KODE# </li>
              <li class="mb-2"><strong class="text-black">Nama : </strong> #NAMA# </li>
              <li class="mb-2"><strong class="text-black">Ukuran : </strong> #PANJANG# m x #LEBAR# m </li>
              <li class="mb-2"><strong class="text-black">Harga : </strong> Rp. #HARGA# </li>
              <br>
            </ul>
        </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="mb-5">
        <div class="bg-light p-3 border rounded mb-4">
            <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Lokasi Billboard</h3>
            <ul class="list-unstyled pl-3 mb-0">
              <li class="mb-2"><strong class="text-black">Kab./Kota: </strong> #REGENCY# </li>
              <li class="mb-2"><strong class="text-black">Kecamatan : </strong> #DISTRICT# </li>
              <li class="mb-2"><strong class="text-black">Kelurahan : </strong> #VILLAGE# </li>
              <li class="mb-2"><strong class="text-black">Alamat : </strong> #ADDRESS# </li>
              <li class="mb-2"><strong class="text-black">Titik Pusat : </strong> #LATITUDE#, #LONGITUDE# </li>
            </ul>
        </div>
    </div>
  </div>

  <div class="ml-3">
    <a href="list-bill.html" class="btn btn-primary">Kembali</a>
  </div>

</div>
`;

export const singleSewa = `
<div class="row">
  <div class="col-lg-12">
    <div class="mb-5">
      <img src="#GAMBAR#" alt="Image" class="img-fluid rounded-0" style="width: 500px; height: 250px;" />
      
    </div>
  </div>
  <div class="col-lg-12">
    <div class="mb-5">
        <div class="bg-light p-3 border rounded mb-4">
            <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Detail Sewa</h3>
            <ul class="list-unstyled pl-3 mb-0">
              <li class="mb-2"><strong class="text-black">Tanggal Mulai : </strong> #MULAI# </li>
              <li class="mb-2"><strong class="text-black">Tanggal Selesai : </strong> #SELESAI# </li>
              <br>
            </ul>
        </div>
    </div>
  </div>
</div>
`;

export const tableSewa = `
<ul class="job-listings mb-3">
    <li class="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
        <a href="single-sewa.html?id=#ID#"></a>
        <div class="job-listing">
            <img src="#GAMBAR#" alt="Image" class="img-fluid rounded-0" style="width: 300px; height: 150px;" />
        </div>

        <div class="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
            <div class="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                <h2><b>Tanggal Mulai : </b> #MULAI#</h2>
                <h2><b>Tanggal Selesai : </b> #SELESAI#</h2> 
            </div>
            <div class="job-listing-meta">
                <a href="transaksi.html" class="btn btn-success">
                </a>
            </div>
            <div class="job-listing-meta mx-4">
                <div class="job-listing-position">
                    <a href="edit-sewa.html?id=#IDEDIT#" class="btn btn-warning flex-grow-1 ml-6"></a>
                    <a href="#" type="button" class="btn btn-danger flex-grow-1 ml-4" onclick="deleteSewa('#HAPUS#')"></a>
                </div>
            </div>
        </div>
    </li>
</ul>
`;