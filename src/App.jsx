import React, { useState } from 'react';
import PdfFile from './assets/files.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';

export default function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-full container m-auto min-h-screen flex flex-col justify-center items-center p-12 gap-4">
      <div className="w-full flex flex-row-reverse justify-between">
        <button
          disabled={pageNumber === numPages}
          className="px-8 py-2 bg-blue-500 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          Next
        </button>
        <button
          disabled={pageNumber === 1}
          className="px-8 py-2 bg-blue-500 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Prev
        </button>
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div className="w-fit h-full border border-gray-400 grid place-items-center rounded-lg overflow-auto">
        <Document file={PdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="flex h-fit flex-col justify-center items-center">
            <Page
              width={window.innerWidth < 768 ? 350 : 800}
              height={window.innerWidth < 768 ? 300 : 400}
              pageNumber={pageNumber}
              renderTextLayer={false}
            />
          </div>
        </Document>
      </div>
    </div>
  );
}
