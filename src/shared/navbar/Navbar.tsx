"use client";
import React, { useState, useEffect, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { Drawer, ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import navItems from "@/constants/navItem";
import { LuArrowUpRight } from "react-icons/lu";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = globalThis.scrollY;
      // console.log("scroll", scrollY);
      // Change navbar background after banner
      setIsScrolled(scrollY > bannerHeight - 80);

      // Hide/show logic
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    globalThis.addEventListener("scroll", handleScroll);
    // console.log("inside");
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(() => {
  //   AOS.init({
  //     duration: 600,
  //     once: true,
  //     // easing: "ease-out-cubic",
  //   });
  // }, []);
  return (
    <nav
      className={`fixed top-0  z-50 w-full transition-all duration-500 navbar-container px-4
         mt-4
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}
      `}
      // className={`fixed top-0  z-50 w-full transition-all duration-500 navbar-container px-4
      //    mt-4`}
    >
      <div
        className={`container mx-auto px-2 lg:px-4 py-3 transition-colors duration-300 bg-[#374151]/15 rounded-full`}
        style={{
          backdropFilter: "blur(10px) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) saturate(120%)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} className="shrink-0 ">
            <Image
              src="/logo.png"
              alt="VIAJIA Logo"
              width={600}
              height={100}
              className="h-[30px] w-fit object-contain"
              draggable={false}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm lg:text-xs 2xl:text-sm transition-all duration-300 ${
                  item.href === pathname
                    ? "text-[#FFFFFF]"
                    : "text-[#FFFFFF]/60 hover:text-[#FFFFFF]"
                }`}
              >
                {item.labelKey}
              </Link>
            ))}
          </div>

          {/* Right Section - Language + Download + Menu */}
          <div className="flex items-center gap-4">
            {/* Contact & Request Demo Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#1d1f22] hover:bg-[#2F2F2F] text-white px-5 py-2.5 rounded-full transition-colors text-sm font-medium"
              >
                Contact <LuArrowUpRight />
              </Link>
              <Link
                href="/request-demo"
                className="flex items-center gap-2 bg-linear-to-r from-[#7D3BB7] to-[#2C4C91] hover:opacity-90 text-white px-5 py-2.5 rounded-full transition-all text-sm font-medium"
              >
                Request demo <LuArrowUpRight />
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden  text-xl"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <ConfigProvider
        theme={{
          components: {
            Drawer: {
              colorBgElevated: "#050507",
              colorIcon: "#fff",
            },
          },
        }}
      >
        <Drawer
          title={
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-white!">Menu</span>
              {/* <CloseOutlined onClick={() => setDrawerOpen(false)} /> */}
            </div>
          }
          placement="right"
          width={280}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
        >
          <div className="flex flex-col gap-6 mt-4">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm lg:text-xs 2xl:text-sm transition-all duration-300 ${
                  item.href === pathname
                    ? "text-[#FFFFFF]!"
                    : "text-[#FFFFFF]/60! hover:text-[#FFFFFF]!"
                }`}
                onClick={() => setDrawerOpen(false)}
              >
                {item.labelKey}
              </Link>
            ))}

            {/* Contact & Request Demo Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <Link
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2 bg-[#1d1f22]! hover:bg-[#2F2F2F] text-white! px-5 py-2.5 rounded-full transition-colors text-sm font-medium"
              >
                Contact <LuArrowUpRight />
              </Link>
              <Link
                href="/request-demo"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2 bg-linear-to-r from-[#7D3BB7] to-[#2C4C91] hover:opacity-90 text-white! px-5 py-2.5 rounded-full transition-all text-sm font-medium"
              >
                Request demo <LuArrowUpRight />
              </Link>
            </div>
          </div>
        </Drawer>
      </ConfigProvider>
    </nav>
  );
}
