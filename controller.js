// 1. MELIHAT DATA
function lihatData() {
    console.log("=== DATA AWAL ===");

    data.map((item, index) => {
        console.log(
            `${index + 1}. ${item.nama} | ${item.umur} tahun | ${item.alamat} | ${item.email}`
        );
    });
}

// 2. MENAMBAH DATA
function tambahData() {

    // Data tambahan pertama
    data.push({
        nama: "Serana Siviera",
        umur: 21,
        alamat: "Depok",
        email: "seranasivieraaa@gmail.com"
    });

    // Data tambahan kedua
    data.push({
        nama: "Lavenya Orchidsta",
        umur: 22,
        alamat: "Jakarta",
        email: "lalavevenya@gmail.com"
    });

    console.log("=== DATA SETELAH DITAMBAH ===");

    data.map((item, index) => {
        console.log(
            `${index + 1}. ${item.nama} | ${item.umur} tahun | ${item.alamat} | ${item.email}`
        );
    });
}

// 3. MENGHAPUS DATA
function hapusData(index) {
    data.splice(index, 1);

    console.log("=== DATA SETELAH DIHAPUS ===");

    data.map((item, index) => {
        console.log(
            `${index + 1}. ${item.nama} | ${item.umur} tahun | ${item.alamat} | ${item.email}`
        );
    });
}


// Menjalankan perintah
lihatData();

tambahData();

// Menghapus data pada index ke-0
hapusData(0);