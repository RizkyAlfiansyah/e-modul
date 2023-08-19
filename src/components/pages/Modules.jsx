import React, { useRef, useState } from 'react';
import Topik1PDF from '../../assets/e-modul/topik-1-otonomi.pdf';
import Topik2PDF from '../../assets/e-modul/topik-2-isi.pdf';
import Topik3PDF from '../../assets/e-modul/topik-3-isi.pdf';
import Topik4PDF from '../../assets/e-modul/topik-4-isi.pdf';
import Topik5PDF from '../../assets/e-modul/topik-5-isi.pdf';
import Topik6PDF from '../../assets/e-modul/topik-6-isi.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';

const PdfFile = [
  '',
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
            <Document
              file={PdfFile[params.get('topik')]}
              onLoadSuccess={onDocumentLoadSuccess}
              className="w-full h-full"
            >
              <div className="relative w-full flex h-fit border border-primary-100">
                <div className="w-full absolute top-0 bg-black bg-opacity-30 flex justify-between px-4 py-2 z-[99]">
                  <div className="flex items-center gap-2">
                    <button
                      disabled={pageNumber === 1}
                      className="px-4 py-1 bg-blue-500 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                      onClick={() => setPageNumber(pageNumber - 1)}
                    >
                      Prev
                    </button>
                    <div className="bg-white px-2 py-1 rounded-sm">
                      <p className="text-center text-xs">
                        Page {pageNumber} of {numPages}
                      </p>
                    </div>
                  </div>
                  <button
                    disabled={pageNumber === numPages}
                    className="px-4 py-1 bg-blue-500 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                    onClick={() => {
                      setPageNumber(pageNumber + 1);
                    }}
                  >
                    Next
                  </button>
                </div>
                <div
                  className="w-full transition-all ease-in-out duration-150"
                  ref={docsRef}
                >
                  <Page pageNumber={pageNumber} renderTextLayer={false} />
                </div>
              </div>
            </Document>
          </div>
        </div>
      </div>
    </section>
  );
}
