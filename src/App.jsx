import React, { useRef, useState } from 'react';
import PdfFile from './assets/files.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import Dropdown from './components/Dropdown';
import LogoPNG from './assets/images/logo.png';

export default function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [collapsed, setCollapsed] = useState({
    profil: false,
    panduan: false,
    pengantar: false,
    topik: false,
    isi: false,
    pustaka: false,
    penutup: false,
  });
  const docsRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="w-full h-[100dvh] bg-hero-pattern backdrop-blur-lg bg-black bg-opacity-50">
      <div className="w-full h-full backdrop-blur-sm bg-black bg-opacity-30 overflow-auto">
        <div className="relative max-w-3xl m-auto h-fit flex flex-col justify-start items-center p-4 gap-4">
          <div className="w-full p-4">
            <img src={LogoPNG} alt="logo-unm" className="w-full" />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-8">
            <Dropdown
              title="Profil"
              onClick={() =>
                setCollapsed({ ...collapsed, profil: !collapsed.profil })
              }
              collapsed={collapsed.profil}
            >
              <h1>Profil</h1>
            </Dropdown>
            <Dropdown
              title="Panduan Penggunaan Modul"
              onClick={() =>
                setCollapsed({ ...collapsed, panduan: !collapsed.panduan })
              }
              collapsed={collapsed.panduan}
            >
              <h1>Panduan Penggunaan Modul</h1>
            </Dropdown>
            <Dropdown
              title="Pengantar"
              onClick={() =>
                setCollapsed({ ...collapsed, pengantar: !collapsed.pengantar })
              }
              collapsed={collapsed.pengantar}
            >
              <h1>Pengantar</h1>
            </Dropdown>
            <Dropdown
              title="Modul"
              onClick={() =>
                setCollapsed({ ...collapsed, topik: !collapsed.topik })
              }
              collapsed={collapsed.topik}
            >
              {/* {Array(6)
                .fill(0)
                .map((_, i) => (
                  <p
                    className={`w-full p-2 hover:bg-slate-200 cursor-pointer rounded-md`}
                    onClick={() => {
                      setPageNumber(2);
                      docsRef.current.scrollIntoView({ behavior: 'smooth' });
                      setCollapsed({ ...collapsed, topik: false });
                    }}
                    key={i}
                  >
                    Topik {i + 1}
                  </p>
                ))} */}
              <p
                className={`w-full p-2 hover:bg-slate-200 cursor-pointer rounded-md`}
                onClick={() => {
                  setPageNumber(2);
                  docsRef.current.scrollIntoView({ behavior: 'smooth' });
                  setCollapsed({ ...collapsed, topik: false });
                }}
              >
                Topik 3
              </p>
            </Dropdown>
            <Dropdown
              title="Daftar Isi"
              onClick={() =>
                setCollapsed({ ...collapsed, isi: !collapsed.isi })
              }
              collapsed={collapsed.isi}
            >
              <h1>Daftar Isi</h1>
            </Dropdown>
            <Dropdown
              title="Daftar Pustaka"
              onClick={() =>
                setCollapsed({ ...collapsed, pustaka: !collapsed.pustaka })
              }
              collapsed={collapsed.pustaka}
            >
              <h1>Daftar Pustaka</h1>
            </Dropdown>
            <Dropdown
              title="Penutup"
              onClick={() =>
                setCollapsed({ ...collapsed, penutup: !collapsed.penutup })
              }
              collapsed={collapsed.penutup}
            >
              <h1>Penutup</h1>
            </Dropdown>
            <div className="w-full h-full rounded-lg flex flex-col gap-2">
              <Document file={PdfFile} onLoadSuccess={onDocumentLoadSuccess}>
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
                  <div className="w-full" ref={docsRef}>
                    <Page pageNumber={pageNumber} renderTextLayer={false} />
                  </div>
                </div>
              </Document>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
