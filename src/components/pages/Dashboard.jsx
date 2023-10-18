import React, { useRef, useState } from "react";
import Dropdown from "../molecules/Dropdown";
import LogoPNG from "../../assets/images/logo.png";
import ProfilePdf from "../../assets/new-module/profil_pdf.pdf";
import PanduanPenggunaPDF from "../../assets/new-module/panduan_pengguna_pdf.pdf";
import PengantarPdf from "../../assets/new-module/kata_pengantar_pdf.pdf";
import DaftarIsiPdf from "../../assets/new-module/daftar_isi_pdf.pdf";
import DaftarPustaka from "../../assets/new-module/daftar_pustaka_pdf.pdf";
import PdfFileRender from "../organism/PdfFileRender";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState({
    profil: false,
    panduan_pengguna: false,
    pengantar: false,
    daftar_isi: false,
    modul: false,
    layanan_bimbingan: false,
    daftar_pustaka: false,
  });

  const navigate = useNavigate();

  const menus = [
    {
      title: "Profil",
      onClick: () => setCollapsed({ ...collapsed, profil: !collapsed.profil }),
      collapsed: collapsed.profil,
      children: <PdfFileRender PdfFile={ProfilePdf} />,
    },
    {
      title: "Panduan Penggunaan E-Modul",
      onClick: () => setCollapsed({ ...collapsed, profil: !collapsed.profil }),
      collapsed: collapsed.panduan_pengguna,
      children: <PdfFileRender PdfFile={PanduanPenggunaPDF} />,
    },
    {
      title: "Kata Pengantar",
      onClick: () =>
        setCollapsed({ ...collapsed, pengantar: !collapsed.pengantar }),
      collapsed: collapsed.pengantar,
      children: <PdfFileRender PdfFile={PengantarPdf} />,
    },
    {
      title: "Daftar Isi",
      onClick: () =>
        setCollapsed({ ...collapsed, daftar_isi: !collapsed.daftar_isi }),
      collapsed: collapsed.daftar_isi,
      children: <PdfFileRender PdfFile={DaftarIsiPdf} />,
    },
    {
      title: "Modul Siswa",
      onClick: () => navigate("/moduls?topik=siswa"),
      collapsed: collapsed.modul,
    },
    {
      title: "Modul Guru",
      onClick: () => navigate("/moduls?topik=guru"),
      collapsed: collapsed.modul,
    },
    {
      title: "Daftar Pustaka",
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
        <div className="relative w-full max-w-lg m-auto h-fit flex flex-col justify-start items-start p-4 gap-16">
          <div className="w-full p-4 flex md:flex-row flex-col justify-start items-start md:items-center space-x-4">
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
