const downloadButton = document.querySelector("#download-button");
const downloadStatus = document.querySelector("#download-status");

const itinerary = `KAMPUNG INGGRIS, PARE — ITINERARY 3 HARI

HARI 1 · MULAI BERKENALAN
Pagi: Ikuti orientasi dan tes penempatan di lembaga pilihan.
Siang: Kenali lingkungan sekitar tempat belajar.
Sore: Catat kosakata baru dan berkenalan dengan teman belajar.

HARI 2 · PRAKTIK BICARA
Pagi: Ikuti kelas sesuai program yang dipilih.
Siang: Ulangi materi dan susun daftar kosakata.
Sore: Latihan percakapan bersama teman atau conversation club.

HARI 3 · GUNAKAN YANG SUDAH DIPELAJARI
Pagi: Ikuti kelas dan tanyakan hal yang masih membingungkan.
Siang: Praktikkan bahasa Inggris saat memesan makanan atau berbincang.
Sore: Tinjau perkembangan dan rencanakan target belajar berikutnya.

Catatan: Sesuaikan agenda dengan jadwal lembaga kursus pilihanmu.
Peta: https://www.google.com/maps/search/?api=1&query=Kampung+Inggris%2C+Pare%2C+Kediri%2C+Jawa+Timur
`;

downloadButton.addEventListener("click", () => {
  const file = new Blob([itinerary], { type: "text/plain;charset=utf-8" });
  const fileUrl = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = fileUrl;
  link.download = "itinerary-kampung-inggris-pare.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(fileUrl);
  downloadStatus.textContent = "Itinerary berhasil diunduh.";
});