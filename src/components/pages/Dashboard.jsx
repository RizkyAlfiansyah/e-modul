import React, { useRef, useState } from "react";
import Dropdown from "../molecules/Dropdown";
import LogoPNG from "../../assets/images/logo.png";
import ProfilePdf from "../../assets/new-module/profil_pdf.pdf";
import PengantarPdf from "../../assets/new-module/kata_pengantar_pdf.pdf";
import DaftarIsiPdf from "../../assets/new-module/daftar_isi_pdf.pdf";
import DaftarPustaka from "../../assets/new-module/daftar_pustaka_pdf.pdf";
import Topik1Pdf from "../../assets/e-modul/topik-1-sampul.pdf";
import Topik2Pdf from "../../assets/e-modul/topik-2-sampul.pdf";
import Topik3Pdf from "../../assets/e-modul/topik-3-sampul.pdf";
import Topik4Pdf from "../../assets/e-modul/topik-4-sampul.pdf";
import Topik5Pdf from "../../assets/e-modul/topik-5-sampul.pdf";
import Topik6Pdf from "../../assets/e-modul/topik-6-sampul.pdf";
import PdfFileRender from "../organism/PdfFileRender";
import MiniDropdown from "../molecules/MiniDropdown";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState({
    profil: false,
    pengantar: false,
    daftar_isi: false,
    modul: false,
    layanan_bimbingan: false,
    daftar_pustaka: false,
  });

  const navigate = useNavigate();

  const pdfCover = [
    {
      title: "Topik - 1",
      description: "Topik 1 -  Otonomi",
      files: Topik1Pdf,
    },
    {
      title: "Topik - 2",
      description: "Topik 2 -  Hubungan Positif Dengan Orang Lain",
      files: Topik2Pdf,
    },
    {
      title: "Topik - 3",
      description: "Topik 3 -  Penguasaan Lingkungan",
      files: Topik3Pdf,
    },
    {
      title: "Topik - 4",
      description: "Topik 4 -  Pertumbuhan Pribadi",
      files: Topik4Pdf,
    },
    {
      title: "Topik - 5",
      description: "Topik 5 -  Tujuan Hidup",
      files: Topik5Pdf,
    },
    {
      title: "Topik - 6",
      description: "Topik 6 -  Penerimaan Diri",
      files: Topik6Pdf,
    },
  ];

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
      collapsed: collapsed.profil,
      children: <PdfFileRender PdfFile={ProfilePdf} />,
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
