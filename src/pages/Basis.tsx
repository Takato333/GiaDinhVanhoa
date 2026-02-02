import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Basis: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-dark text-ivory min-h-screen selection:bg-primary selection:text-deep-charcoal">
            <Header />

            <main className="min-h-screen mindmap-bg py-32 px-4 md:px-12 lg:px-20 overflow-hidden relative z-10">
                <header className="max-w-7xl mx-auto text-center mb-24 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
                        <span className="material-symbols-outlined text-[20rem] text-primary select-none">architecture</span>
                    </div>
                    <span className="text-primary/60 tracking-[0.5em] text-xs uppercase mb-6 block font-bold">Nền tảng xây dựng</span>
                    <h1 className="serif-title text-4xl md:text-6xl font-black text-white tracking-tight leading-tight uppercase mb-8">
                        Cơ sở xây dựng gia đình <br className="hidden md:block" /> trong thời kỳ quá độ lên CNXH
                    </h1>
                    <div className="flex justify-center items-center gap-6">
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        <span className="material-symbols-outlined text-primary text-2xl">diamond</span>
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    </div>
                </header>

                <div className="relative max-w-7xl mx-auto">
                    {/* Decorative central cross for desktop */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center pointer-events-none opacity-20">
                        <div className="absolute w-[1px] h-[120%] bg-gradient-to-b from-transparent via-primary to-transparent"></div>
                        <div className="absolute h-[1px] w-[120%] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(181,131,90,0.8)]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10 items-stretch">
                        {/* Cơ sở Kinh tế - Xã hội */}
                        <div className="gothic-card p-12 rounded-sm corner-decoration corner-decoration-bottom min-h-[600px] flex flex-col items-center text-center group transition-all duration-700 hover:shadow-[0_0_40px_rgba(181,131,90,0.15)] bg-black/60 backdrop-blur-md border-primary/20">
                            <div className="mb-12">
                                <span className="material-symbols-outlined text-primary text-6xl mb-6 block drop-shadow-[0_0_10px_rgba(181,131,90,0.5)]">account_balance</span>
                                <h2 className="serif-title text-2xl md:text-3xl font-bold tracking-widest text-primary uppercase">Cơ sở Kinh tế - Xã hội</h2>
                            </div>
                            <div className="flex-grow flex flex-col justify-center w-full max-w-sm space-y-0">
                                <div className="bg-primary/5 border border-primary/20 py-6 px-8 rounded-sm hover:bg-primary/10 transition-colors group/item">
                                    <span className="text-primary/80 font-bold text-xs tracking-[0.3em] uppercase group-hover/item:text-primary transition-colors">Phát triển LLSX</span>
                                </div>
                                <div className="h-10 w-px bg-gradient-to-b from-primary/30 to-primary/10 mx-auto"></div>
                                <div className="bg-primary/5 border border-primary/20 py-6 px-8 rounded-sm hover:bg-primary/10 transition-colors group/item">
                                    <span className="text-primary/80 font-bold text-xs tracking-[0.3em] uppercase group-hover/item:text-primary transition-colors">Xóa bỏ chế độ tư hữu</span>
                                </div>
                                <div className="h-10 w-px bg-gradient-to-b from-primary/10 to-primary/30 mx-auto"></div>
                                <div className="bg-primary/5 border border-primary/20 py-6 px-8 rounded-sm hover:bg-primary/10 transition-colors group/item">
                                    <span className="text-primary/80 font-bold text-xs tracking-[0.3em] uppercase group-hover/item:text-primary transition-colors">Giải phóng phụ nữ</span>
                                </div>
                            </div>
                        </div>

                        {/* Cơ sở Chính trị - Xã hội */}
                        <div className="gothic-card p-12 rounded-sm corner-decoration corner-decoration-bottom min-h-[600px] flex flex-col items-center text-center group transition-all duration-700 hover:shadow-[0_0_40px_rgba(181,131,90,0.15)] bg-black/60 backdrop-blur-md border-primary/20">
                            <div className="mb-12">
                                <span className="material-symbols-outlined text-primary text-6xl mb-6 block drop-shadow-[0_0_10px_rgba(181,131,90,0.5)]">policy</span>
                                <h2 className="serif-title text-2xl md:text-3xl font-bold tracking-widest text-primary uppercase">Cơ sở Chính trị - Xã hội</h2>
                            </div>
                            <div className="flex-grow flex flex-col justify-center w-full max-w-xs mx-auto space-y-8">
                                <div className="bg-primary/5 border border-primary/20 py-6 px-8 rounded-sm font-bold text-xs text-primary/80 tracking-[0.3em] uppercase hover:border-primary/60 hover:text-primary transition-all text-center">
                                    Nhà nước XHCN
                                </div>
                                <div className="bg-primary/5 border border-primary/20 py-6 px-8 rounded-sm font-bold text-xs text-primary/80 tracking-[0.3em] uppercase hover:border-primary/60 hover:text-primary transition-all">
                                    Luật Hôn nhân & Gia đình
                                </div>
                                <div className="bg-primary/5 border border-primary/20 py-6 px-8 rounded-sm font-bold text-xs text-primary/80 tracking-[0.3em] uppercase hover:border-primary/60 hover:text-primary transition-all">
                                    Chính sách bình đẳng giới
                                </div>
                            </div>
                        </div>

                        {/* Cơ sở Văn hóa */}
                        <div className="gothic-card p-12 rounded-sm corner-decoration corner-decoration-bottom min-h-[600px] flex flex-col items-center text-center group transition-all duration-700 hover:shadow-[0_0_40px_rgba(181,131,90,0.15)] bg-black/60 backdrop-blur-md border-primary/20 overflow-hidden">
                            <div className="mb-12 relative z-10">
                                <span className="material-symbols-outlined text-primary text-6xl mb-6 block drop-shadow-[0_0_10px_rgba(181,131,90,0.5)]">auto_stories</span>
                                <h2 className="serif-title text-2xl md:text-3xl font-bold tracking-widest text-primary uppercase">Cơ sở Văn hóa</h2>
                            </div>
                            <div className="flex-grow flex items-center justify-center relative w-full h-64 mt-4">
                                {/* Orbit System */}
                                <div className="absolute w-40 h-40 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]"></div>
                                <div className="absolute w-60 h-60 rounded-full border border-primary/5 animate-[spin_30s_linear_infinite_reverse]"></div>

                                <div className="w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center bg-deep-charcoal shadow-[0_0_30px_rgba(181,131,90,0.3)] z-10 group-hover:scale-110 transition-transform duration-700">
                                    <span className="text-[10px] font-black uppercase text-primary tracking-tighter text-center leading-tight">Hệ giá trị<br />mới</span>
                                </div>

                                <div className="absolute inset-0 flex flex-col items-center justify-between py-2">
                                    <div className="bg-primary/10 px-6 py-2 border border-primary/20 text-[9px] font-black uppercase tracking-[0.3em] text-primary/80 backdrop-blur-sm z-20">Nâng cao dân trí</div>
                                    <div className="flex justify-between w-full px-0 md:px-4">
                                        <div className="bg-primary/10 px-6 py-2 border border-primary/20 text-[9px] font-black uppercase tracking-[0.3em] text-primary/80 backdrop-blur-sm z-20">Loại bỏ hủ tục</div>
                                        <div className="bg-primary/10 px-6 py-2 border border-primary/20 text-[9px] font-black uppercase tracking-[0.3em] text-primary/80 backdrop-blur-sm z-20">Chuẩn mực mới</div>
                                    </div>
                                </div>

                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 200 200">
                                    <line stroke="#b5835a" strokeWidth="0.5" x1="100" x2="100" y1="50" y2="100" />
                                    <line stroke="#b5835a" strokeWidth="0.5" x1="40" x2="100" y1="150" y2="100" />
                                    <line stroke="#b5835a" strokeWidth="0.5" x1="160" x2="100" y1="150" y2="100" />
                                </svg>
                            </div>
                        </div>

                        {/* Hôn nhân tiến bộ (Trọng tâm) */}
                        <div className="p-12 rounded-sm border-2 border-primary min-h-[600px] flex flex-col items-center text-center relative overflow-hidden group transition-all duration-700 hover:shadow-[0_0_50px_rgba(181,131,90,0.3)] bg-primary/5">
                            <div className="absolute top-0 right-0 bg-primary text-black font-black px-12 py-2 text-[10px] tracking-[0.4em] uppercase rotate-45 translate-x-12 translate-y-6 shadow-xl z-30">
                                TRỌNG TÂM
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                                <span className="material-symbols-outlined text-primary text-7xl relative z-10 drop-shadow-[0_0_15px_rgba(181,131,90,1)]">favorite</span>
                            </div>
                            <h2 className="serif-title text-2xl md:text-3xl font-bold tracking-[0.2em] text-primary uppercase mt-4">Hôn nhân tiến bộ</h2>

                            <div className="flex-grow flex flex-col justify-between w-full max-w-sm mx-auto mt-8">
                                <div className="bg-deep-charcoal/80 p-8 rounded-sm border-l-4 border-primary text-[13px] italic text-ivory/80 leading-relaxed text-left mb-8 shadow-xl relative">
                                    "Nếu coi <strong className="text-primary font-bold">Gia đình văn hóa</strong> là một ngôi nhà, thì <strong className="text-primary font-bold">Hôn nhân tiến bộ</strong> chính là phần nền móng vững chắc nhất..."
                                </div>

                                <div className="space-y-4 pb-4">
                                    <div className="flex items-center gap-6 bg-black/40 p-5 border border-primary/20 hover:border-primary/50 transition-all group/item">
                                        <span className="material-symbols-outlined text-primary text-2xl group-hover/item:scale-110 transition-transform">loyalty</span>
                                        <span className="font-black text-[10px] uppercase tracking-[0.4em] text-ivory/70 group-hover/item:text-white transition-colors">Hôn nhân tự nguyện</span>
                                    </div>
                                    <div className="flex items-center gap-6 bg-black/40 p-5 border border-primary/20 hover:border-primary/50 transition-all group/item">
                                        <span className="material-symbols-outlined text-primary text-2xl group-hover/item:scale-110 transition-transform">group</span>
                                        <span className="font-black text-[10px] uppercase tracking-[0.4em] text-ivory/70 group-hover/item:text-white transition-colors">Một vợ một chồng</span>
                                    </div>
                                    <div className="flex items-center gap-6 bg-black/40 p-5 border border-primary/20 hover:border-primary/50 transition-all group/item">
                                        <span className="material-symbols-outlined text-primary text-2xl group-hover/item:scale-110 transition-transform">gavel</span>
                                        <span className="font-black text-[10px] uppercase tracking-[0.4em] text-ivory/70 group-hover/item:text-white transition-colors">Pháp luật bảo đảm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider max-w-7xl mx-auto my-32"></div>

                {/* Footer Navigation section */}
                <section className="bg-background-dark py-24 px-4 md:px-20 border-t border-primary/10 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                        <Link to="/khai-niem" className="nav-btn-luxury group w-full md:w-auto justify-center">
                            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-3">west</span>
                            <span>QUAY LẠI: KHÁI NIỆM</span>
                        </Link>
                        <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                        <Link to="/thuc-trang" className="nav-btn-luxury group w-full md:w-auto justify-center">
                            <span>TIẾP THEO: THỰC TRẠNG</span>
                            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-3">east</span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Basis;
