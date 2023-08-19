import { ChaoticOrbit } from '@uiball/loaders';
import React, { useRef, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';

export default function PdfFileRender({ PdfFile }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const docsRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="w-full">
      <div className="w-full h-full">
        <div className="relative max-w-3xl m-auto h-fit flex flex-col justify-start items-center gap-4">
          <div className="w-full min-h-[200px] h-full rounded-lg flex flex-col justify-center gap-2">
            <Document
              file={PdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              className="w-full h-full"
              loading={
                <div className="w-full h-full flex justify-center items-center">
                  <ChaoticOrbit size={50} color="#fff" />
                </div>
              }
            >
              <div className="relative w-full flex h-fit border border-primary-100">
                {numPages > 1 && (
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
                )}
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
