import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    const navLinks = [
        { name: "NGUỒN GỐC", path: "/nguon-goc" },
        { name: "KHÁI NIỆM", path: "/khai-niem" },
        { name: "CƠ SỞ", path: "/co-so" },
        { name: "THỰC TRẠNG", path: "/thuc-trang" },
        { name: "GIẢI PHÁP", path: "/giai-phap" },
    ];

    return (
        <header className="fixed top-0 z-50 w-full bg-traditional-brown/95 backdrop-blur-md border-b border-primary/20 px-4 md:px-12 lg:px-20 py-3 flex items-center justify-between">
            <div className="flex flex-col">
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group"
                >
                    <h1 className="serif-title text-primary text-xl font-bold leading-none tracking-tight group-hover:text-ivory transition-colors">GIA ĐÌNH VĂN HÓA</h1>
                </Link>
                <span className="text-[10px] text-ivory/60 uppercase tracking-widest mt-1">Chủ nghĩa Xã hội Khoa học - Chương 7</span>
            </div>
            <nav className="hidden xl:flex items-center gap-8">
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative py-2 text-xs font-bold transition-all tracking-wider ${isActive
                                ? "text-primary scale-110"
                                : "text-ivory hover:text-primary"
                                }`}
                        >
                            {link.name}
                            {isActive && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-pulse"></span>
                            )}
                        </Link>
                    );
                })}
            </nav>
            <div className="flex items-center gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-sm">groups</span>
                    NHÓM 6
                </button>
            </div>
        </header>
    );
};

export default Header;
