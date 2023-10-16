import { ChaoticOrbit } from "@uiball/loaders";
import React, { useRef, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import { Reveal } from "../atoms/Reveal";

export default function PdfFileRender({ PdfFile }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const docsRef = useRef(null);
  const [inverted, setInverted] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setInverted;
    setNumPages(numPages);
  }

  // Function to handle page number change
  const handlePageNumberChange = (value) => {
    let parsedValue = parseInt(value);
    // Ensure only two digits are allowed
    if (value.length >= 2) {
      // Get the first two digits
      parsedValue = parseInt(value.substring(0, 2));
    }
    if (value > numPages) {
      parsedValue = numPages;
    }
    if (value === isNaN) {
      parsedValue = 1;
    }

    setPageNumber(parsedValue);
  };

  return (
    <section className="w-full">
      <div className="w-full h-full">
        <div className="relative max-w-3xl m-auto h-fit flex flex-col justify-start items-center gap-4">
          <div className="w-full min-h-[200px] h-full rounded-lg flex flex-col justify-center gap-2">
            {numPages > 1 && (
              <div className="w-full absolute top-2 bg-white shadow-lg flex justify-between px-4 py-1 z-[99]">
                <div className="flex items-center gap-2">
                  <button
                    disabled={pageNumber === 1}
                    className="px-4 py-1 bg-blue-500 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                    onClick={() => {
                      setInverted(false);
                      setPageNumber(pageNumber - 1);
                    }}
                  >
                    Prev
                  </button>
                  <div className="bg-white px-2 py-1 rounded-sm flex gap-2 items-center">
                    <p className="text-center text-xs">Page</p>
                    <input
                      type="number"
                      value={pageNumber}
                      min={1}
                      max={pageNumber}
                      style={{
                        width: `30px`,
                      }}
                      className="pl-2 py-1 text-xs focus:outline-none border rounded"
                      onChange={(e) => handlePageNumberChange(e.target.value)}
                    />
                    <p className="text-center text-xs">of {numPages}</p>
                  </div>
                </div>
                <button
                  disabled={pageNumber === numPages}
                  className="px-4 py-1 bg-blue-500 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                  onClick={() => {
                    setInverted(true);
                    setPageNumber(pageNumber + 1);
                  }}
                >
                  Next
                </button>
              </div>
            )}
            <Document
              file={PdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              error="Halaman Tidak Ditemukan"
              className="w-full h-full"
              loading={
                <div className="w-full h-full flex justify-center items-center">
                  <ChaoticOrbit size={50} color="#fff" />
                </div>
              }
            >
              <div className="relative w-full flex min-h-fit ">
                <div
                  className="w-full transition-all ease-in-out duration-150 mt-8"
                  ref={docsRef}
                >
                  <Reveal
                    key={pageNumber}
                    orientation="x"
                    duration={0.2}
                    inverted={inverted}
                  >
                    <Page
                      pageNumber={
                        pageNumber > 0 && pageNumber <= numPages
                          ? pageNumber
                          : 1
                      }
                      renderTextLayer={false}
                    />
                  </Reveal>
                </div>
              </div>
            </Document>
          </div>
        </div>
      </div>
    </section>
  );
}
