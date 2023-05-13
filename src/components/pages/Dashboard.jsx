import React, { useRef, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import LogoPNG from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Dashboard() {
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
      <div className="w-full h-full backdrop-blur-sm bg-black bg-opacity-30 overflow-y-auto overflow-x-hidden">
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
              <Link to="/moduls?page=2">
                <p
                  className={`w-full p-2 hover:bg-slate-200 cursor-pointer rounded-md`}
                >
                  Topik 3
                </p>
              </Link>
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
          </div>
        </div>
      </div>
    </section>
  );
}
