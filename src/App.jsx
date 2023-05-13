import React, { useRef, useState } from 'react';
import PdfFile from './assets/files.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import Dropdown from './components/Dropdown';

export default function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [collapsed, setCollapsed] = useState(false);
  const docsRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="w-full min-h-screen bg-hero-pattern backdrop-blur-lg bg-black bg-opacity-50">
      <div className="w-full h-full backdrop-blur-sm bg-black bg-opacity-30">
        <div className="relative w-full max-w-fit m-auto min-h-[100dvh] flex flex-col justify-start items-center py-4 gap-4">
          <Dropdown
            title="Pilih Topik"
            onClick={() => setCollapsed(!collapsed)}
            collapsed={collapsed}
          >
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <p
                  className={`${
                    collapsed ? 'w-full' : 'hidden'
                  } p-2 hover:bg-slate-200 cursor-pointer rounded-md`}
                  onClick={() => {
                    setPageNumber(2);
                    docsRef.current.scrollIntoView({ behavior: 'smooth' });
                    setCollapsed(false);
                  }}
                  key={i}
                >
                  Topic {i + 1}
                </p>
              ))}
          </Dropdown>
          <p className="text-white">
            Page {pageNumber} of {numPages}
          </p>
          <div className="w-full h-full rounded-lg">
            <Document
              file={PdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              className="transition-all ease-in-out duration-200"
            >
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
                <div className="w-full transition-all" ref={docsRef}>
                  <Page
                    width={
                      window.innerWidth <= 768
                        ? window.innerWidth * 0.95
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
      </div>
    </section>
  );
}
