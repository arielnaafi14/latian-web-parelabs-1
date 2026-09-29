const downloadButton = document.querySelector("#download-button");
const downloadStatus = document.querySelector("#download-status");

downloadButton.addEventListener("click", () => {
  const courseNames = [...document.querySelectorAll("#course-list .course-name")]
    .map((course, index) => `${index + 1}. ${course.textContent.trim()}`)
    .join("\n");
  const brochure = `PARE ENGLISH VILLAGE
DAFTAR LEMBAGA KURSUS

${courseNames}

Periksa program, jadwal, biaya, dan alamat terbaru langsung kepada masing-masing lembaga.
Peta: https://www.google.com/maps/search/?api=1&query=Kampung+Inggris%2C+Pare%2C+Kediri%2C+Jawa+Timur
`;
  const file = new Blob([brochure], { type: "text/plain;charset=utf-8" });
  const fileUrl = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = fileUrl;
  link.download = "brosur-pare-english-village.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(fileUrl);
  downloadStatus.textContent = "Brosur berhasil diunduh.";
});