import React, { useRef, useState } from 'react';
import PdfFile from '../../assets/files.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import { useSearchParams } from 'react-router-dom';

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
    <section className="w-full h-[100dvh] bg-hero-pattern backdrop-blur-lg bg-black bg-opacity-50">
      <div className="w-full h-full backdrop-blur-sm bg-black bg-opacity-30 overflow-auto">
        <div className="relative max-w-fit m-auto h-fit flex flex-col justify-start items-center p-4 gap-4">
          <div className="w-full h-full rounded-lg flex flex-col gap-2">
            <Document
              file={PdfFile}
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
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    width={window.innerWidth < 768 ? 350 : 550}
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
