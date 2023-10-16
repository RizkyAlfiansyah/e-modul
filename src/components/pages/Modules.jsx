import React, { useRef, useState } from "react";
import ModulSiswa from "../../assets/new-module/modul_siswa_pdf.pdf";
import ModulGuru from "../../assets/new-module/modul_guru_pdf.pdf";
import PdfFileRender from "../organism/PdfFileRender";

const PdfFile = {
  siswa: ModulSiswa,
  guru: ModulGuru,
};

export default function Modules() {
  const params = new URLSearchParams(window.location.search);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(
    parseInt(params.get("page")) || 1
  );
  const docsRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="w-full h-[100vh] bg-hero-pattern backdrop-blur-lg bg-black bg-opacity-50">
      <div className="w-full h-full backdrop-blur-sm bg-black bg-opacity-30 overflow-hidden">
        <div className="relative max-w-xl m-auto h-fit flex flex-col justify-start items-center p-4 gap-4">
          <div className="w-full h-full rounded-lg flex flex-col gap-2">
            <PdfFileRender PdfFile={PdfFile[params.get("topik")]} />
          </div>
        </div>
      </div>
    </section>
  );
}
