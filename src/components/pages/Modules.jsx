import React, { useRef, useState } from 'react';
import Topik1PDF from '../../assets/e-modul/topik-1-otonomi.pdf';
import Topik2PDF from '../../assets/e-modul/topik-2-isi.pdf';
import Topik3PDF from '../../assets/e-modul/topik-3-isi.pdf';
import Topik4PDF from '../../assets/e-modul/topik-4-isi.pdf';
import Topik5PDF from '../../assets/e-modul/topik-5-isi.pdf';
import Topik6PDF from '../../assets/e-modul/topik-6-isi.pdf';
import PdfFileRender from '../organism/PdfFileRender';

const PdfFile = [
  Topik1PDF,
  Topik2PDF,
  Topik3PDF,
  Topik4PDF,
  Topik5PDF,
  Topik6PDF,
];

export default function Modules() {
  const params = new URLSearchParams(window.location.search);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(
    parseInt(params.get('page')) || 1
  );
  const docsRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="w-full h-[100vh] bg-hero-pattern backdrop-blur-lg bg-black bg-opacity-50">
      <div className="w-full h-full backdrop-blur-sm bg-black bg-opacity-30 overflow-hidden">
        <div className="relative max-w-3xl m-auto h-fit flex flex-col justify-start items-center p-4 gap-4">
          <div className="w-full h-full rounded-lg flex flex-col gap-2">
            <PdfFileRender PdfFile={PdfFile[pageNumber - 1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
