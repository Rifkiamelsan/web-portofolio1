// Fungsi untuk toggle (menampilkan atau menyembunyikan) menu di perangkat kecil
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Fungsi untuk menampilkan halaman yang dipilih
function showPage(page) {
    // Mendapatkan semua halaman (section)
    const pages = document.querySelectorAll('.page');
    
    // Menyembunyikan semua halaman
    pages.forEach(pageElement => {
        pageElement.style.display = 'none';
    });

    // Menampilkan halaman yang dipilih
    const selectedPage = document.getElementById(page);
    selectedPage.style.display = 'block';

    // Meng-scroll ke halaman yang dipilih
    selectedPage.scrollIntoView({ behavior: 'smooth' });

    // Menutup menu setelah memilih halaman
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
}
// Fungsi untuk membuka lightbox dengan gambar tertentu
function openLightbox(imageSrc) {
    // Menampilkan lightbox
    document.getElementById("lightbox").style.display = "flex";
    // Menetapkan sumber gambar di lightbox
    document.getElementById("lightbox-img").src = imageSrc;
}

// Fungsi untuk menutup lightbox
function closeLightbox() {
    // Menyembunyikan lightbox
    document.getElementById("lightbox").style.display = "none";
}
