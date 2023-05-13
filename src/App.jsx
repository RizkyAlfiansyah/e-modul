import React, { useRef, useState } from 'react';
import PdfFile from './assets/files.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';

export default function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [collapsed, setCollapsed] = useState(false);
  const docsRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="w-full min-h-screen bg-hero-pattern backdrop-blur-lg bg-black bg-opacity-30">
      <div className="relative w-full max-w-fit m-auto min-h-[100dvh] flex flex-col justify-start items-center py-4 gap-4">
        <div className="relative w-full flex flex-col gap-2">
          <div
            className="w-full p-3 rounded-md bg-orange-500 text-white hover:bg-orange-400 cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            <h3>Pilih Topic</h3>
          </div>
          <div
            className={`${
              collapsed ? 'w-full' : 'w-0 hidden'
            } bg-white min-h-fit p-3 rounded-md shadow-lg transition-all absolute top-14 left-0 z-100`}
          >
            <p
              className="w-full p-2 hover:bg-slate-200 cursor-pointer rounded-md"
              onClick={() => {
                setPageNumber(2);
                docsRef.current.scrollIntoView({ behavior: 'smooth' });
                setCollapsed(false);
              }}
            >
              Topic 3 : Otonomi
            </p>
          </div>
        </div>
        <p className="text-white">
          Page {pageNumber} of {numPages}
        </p>
        <div className="w-full h-full rounded-lg">
          <Document file={PdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <div className="relative w-full flex h-fit">
              <div className="w-full absolute top-0 bg-black bg-opacity-30 flex justify-between px-4 py-2 z-[99]">
                <button
                  disabled={pageNumber === 1}
                  className="px-8 py-2 bg-blue-500 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  Prev
                </button>
                <button
                  disabled={pageNumber === numPages}
                  className="px-8 py-2 bg-blue-500 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    setPageNumber(pageNumber + 1);
                  }}
                >
                  Next
                </button>
              </div>
              <div className="w-full" ref={docsRef}>
                <Page
                  width={
                    window.innerWidth <= 768
                      ? window.innerWidth * 0.8
                      : window.innerWidth * 0.5
                  }
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                />
              </div>
            </div>
          </Document>
        </div>
      </div>
    </section>
  );
}
