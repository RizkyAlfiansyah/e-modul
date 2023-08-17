import React, { useRef, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import LogoPNG from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import ProfilePdf from '../../assets/e-modul/profil.pdf';
import PengantarPdf from '../../assets/e-modul/pengantar.pdf';
import DaftarIsiPdf from '../../assets/e-modul/daftar-isi.pdf';
import DaftarPustaka from '../../assets/e-modul/daftar-pustaka.pdf';
import Topik1Pdf from '../../assets/e-modul/topik-1-sampul.pdf';
import PdfFileRender from '../organism/PdfFileRender';

export default function Dashboard() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [collapsed, setCollapsed] = useState({
    profil: false,
    pengantar: false,
    daftar_isi: false,
    modul: false,
    layanan_bimbingan: false,
    daftar_pustaka: false,
  });
  const docsRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const menus = [
    {
      title: 'Profil',
      onClick: () => setCollapsed({ ...collapsed, profil: !collapsed.profil }),
      collapsed: collapsed.profil,
      children: <PdfFileRender PdfFile={ProfilePdf} />,
    },
    {
      title: 'Pengantar',
      onClick: () =>
        setCollapsed({ ...collapsed, pengantar: !collapsed.pengantar }),
      collapsed: collapsed.pengantar,
      children: <PdfFileRender PdfFile={PengantarPdf} />,
    },
    {
      title: 'Daftar Isi',
      onClick: () =>
        setCollapsed({ ...collapsed, daftar_isi: !collapsed.daftar_isi }),
      collapsed: collapsed.daftar_isi,
      children: <PdfFileRender PdfFile={DaftarIsiPdf} />,
    },
    {
      title: 'Modul',
      onClick: () => setCollapsed({ ...collapsed, modul: !collapsed.modul }),
      collapsed: collapsed.modul,
      children: (
        <div className="flex flex-col gap-2">
          <Link to="/dashboard/profil/visi-misi">Visi Misi</Link>
          <Link to="/dashboard/profil/struktur-organisasi">
            Struktur Organisasi
          </Link>
          <Link to="/dashboard/profil/visi-misi">Visi Misi</Link>
          <Link to="/dashboard/profil/struktur-organisasi">
            Struktur Organisasi
          </Link>
        </div>
      ),
    },
    {
      title: 'Layanan Bimbingan',
      onClick: () =>
        setCollapsed({
          ...collapsed,
          layanan_bimbingan: !collapsed.layanan_bimbingan,
        }),
      collapsed: collapsed.layanan_bimbingan,
      children: (
        <div className="flex flex-col gap-2">
          <Link to="/dashboard/profil/visi-misi">Visi Misi</Link>
          <Link to="/dashboard/profil/struktur-organisasi">
            Struktur Organisasi
          </Link>
        </div>
      ),
    },
    {
      title: 'Daftar Pustaka',
      onClick: () =>
        setCollapsed({
          ...collapsed,
          daftar_pustaka: !collapsed.daftar_pustaka,
        }),
      collapsed: collapsed.daftar_pustaka,
      children: <PdfFileRender PdfFile={DaftarPustaka} />,
    },
  ];

  return (
    <section className="w-full h-[100dvh] bg-hero-pattern backdrop-blur-lg bg-black bg-opacity-50">
      <div className="w-full h-full backdrop-blur-sm bg-black bg-opacity-30 overflow-y-auto overflow-x-hidden">
        <div className="relative w-full max-w-3xl m-auto h-fit flex flex-col justify-start items-start p-4 gap-16">
          <div className="w-full p-4 flex justify-start items-start md:items-center space-x-4">
            <img src={LogoPNG} alt="logo-unm" className="w-32 h-32" />
            <h2 className="text-white">E-Modul Psychological Well Being</h2>
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-8">
            {menus.map((menu, index) => (
              <Dropdown
                key={index}
                title={menu.title}
                onClick={menu.onClick}
                collapsed={menu.collapsed}
              >
                {menu.children}
              </Dropdown>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
