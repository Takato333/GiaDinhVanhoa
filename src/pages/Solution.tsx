import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Solution: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-dark text-ivory min-h-screen selection:bg-primary selection:text-white flex flex-col">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section - Phủ định của phủ định */}
                <section className="pb-16 px-4 md:px-12 lg:px-20 border-b border-primary/10 bg-background-dark/30 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
                        <span className="material-symbols-outlined text-[30rem] select-none">sync</span>
                    </div>
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="h-[1px] w-20 bg-primary"></div>
                            <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase italic">Phủ định của phủ định</span>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                            <div>
                                <h2 className="serif-title text-6xl md:text-9xl font-black mb-6 leading-[0.85] text-white tracking-tighter uppercase">
                                    Giải pháp <br />
                                    <span className="text-primary italic font-light ml-0 md:ml-32 block md:inline mt-4 md:mt-0 drop-shadow-[0_0_15px_rgba(181,131,90,0.3)] text-5xl md:text-7xl"></span>
                                </h2>
                            </div>
                            <div className="lg:max-w-md">
                                <div className="bg-primary/10 border-l-4 border-primary p-8 relative backdrop-blur-sm">
                                    <span className="material-symbols-outlined absolute -top-6 -right-6 text-primary text-6xl opacity-20 rotate-12">sync_alt</span>
                                    <p className="serif-title text-xl italic text-ivory/90 leading-relaxed font-light">
                                        "Không quay về quá khứ, không phủ định công nghệ. Phát triển ở trình độ cao hơn, kế thừa những giá trị bền vững trong hình thái hiện đại."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Content */}
                <section className="py-32 px-4 md:px-12 lg:px-20 relative overflow-hidden">
                    {/* Background Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none z-0">
                        <h2 className="serif-title text-[25rem] font-black uppercase whitespace-nowrap hidden lg:block">SOLUTION</h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                        {/* 01. Vi mô - Kiến tạo nghi thức */}
                        <div className="space-y-12">
                            <div className="flex items-center gap-6 border-b border-primary/20 pb-8">
                                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                                    <span className="material-symbols-outlined text-primary text-3xl">family_restroom</span>
                                </div>
                                <div>
                                    <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase block mb-1">Phương pháp vi mô</span>
                                    <h3 className="serif-title text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Kiến tạo nghi thức</h3>
                                </div>
                            </div>

                            <div className="bg-primary/5 border border-primary/10 p-10 space-y-12 rounded-sm backdrop-blur-sm hover:border-primary/40 transition-all duration-700 group">
                                <div className="flex gap-8 group-hover:translate-x-2 transition-transform duration-500">
                                    <div className="flex-none flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                            <span className="material-symbols-outlined text-xl">history_toggle_off</span>
                                        </div>
                                        <div className="h-full w-[1px] bg-gradient-to-b from-primary/30 to-transparent mt-4"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="serif-title text-2xl font-bold text-primary italic">Không quay về quá khứ</h4>
                                        <p className="text-ivory/60 leading-relaxed font-light text-lg italic">
                                            Phê phán tư duy áp đặt mô hình "tam đại đồng đường" cưỡng ép hoặc các hủ tục, nghi lễ rườm rà không còn phù hợp.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                                    <div className="flex-none flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                            <span className="material-symbols-outlined text-xl">trending_up</span>
                                        </div>
                                        <div className="h-full w-[1px] bg-gradient-to-b from-primary/30 to-transparent mt-4"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="serif-title text-2xl font-bold text-primary italic">Phát triển mới</h4>
                                        <p className="text-ivory/60 leading-relaxed font-light text-lg italic">
                                            Thiết lập thói quen hiện đại dựa trên sự tự nguyện và gắn kết cảm xúc. Tương thích lối sống đô thị nhưng giữ được "hồn cốt".
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-background-dark/50 border-l-4 border-primary p-8 rounded-sm shadow-xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="material-symbols-outlined text-primary animate-pulse">lightbulb</span>
                                        <h4 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary/80">Ví dụ thực tiễn</h4>
                                    </div>
                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4 group/item">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-none group-hover/item:scale-150 transition-transform"></div>
                                            <p className="text-sm italic text-ivory/80 leading-relaxed">Quy tắc <span className="text-primary font-bold">"Bàn ăn không điện thoại"</span> nhằm tái tạo không gian đối thoại trực tiếp.</p>
                                        </li>
                                        <li className="flex items-start gap-4 group/item">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-none group-hover/item:scale-150 transition-transform"></div>
                                            <p className="text-sm italic text-ivory/80 leading-relaxed">Sử dụng công nghệ (Nhóm chat gia đình) để <span className="text-primary font-bold">duy trì sự hiện diện</span> và quan tâm hàng ngày.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 02. Vĩ mô - Xã hội & Cơ chế */}
                        <div className="space-y-12 lg:mt-32">
                            <div className="flex items-center gap-6 border-b border-primary/20 pb-8">
                                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                                    <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
                                </div>
                                <div>
                                    <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase block mb-1">Phương pháp vĩ mô</span>
                                    <h3 className="serif-title text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Xã hội & Cơ chế</h3>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="group border border-primary/10 bg-primary/5 p-12 hover:bg-primary transition-all duration-700 relative overflow-hidden hover:shadow-[0_0_50px_rgba(181,131,90,0.2)] hover:-translate-y-2">
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="material-symbols-outlined text-primary text-6xl group-hover:text-black transition-colors">phonelink_off</span>
                                        <span className="material-symbols-outlined text-primary/10 text-8xl absolute -right-4 -top-4 select-none group-hover:text-black/5 transition-colors">gavel</span>
                                    </div>
                                    <h4 className="serif-title text-3xl font-black mb-6 text-white group-hover:text-black transition-colors uppercase tracking-widest">Quyền ngắt kết nối</h4>
                                    <p className="text-ivory/50 group-hover:text-black/80 leading-relaxed font-light italic mb-8 text-lg transition-colors">
                                        Xây dựng hành lang pháp lý tôn trọng cân bằng công việc - cuộc sống. Không nhắn tin công việc sau 20h để bảo vệ không gian riêng.
                                    </p>
                                    <div className="w-24 h-1 bg-primary group-hover:bg-black transition-colors"></div>
                                </div>

                                <div className="group border border-primary/10 bg-primary/5 p-12 hover:bg-primary transition-all duration-700 relative overflow-hidden hover:shadow-[0_0_50px_rgba(181,131,90,0.2)] hover:-translate-y-2">
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="material-symbols-outlined text-primary text-6xl group-hover:text-black transition-colors">park</span>
                                        <span className="material-symbols-outlined text-primary/10 text-8xl absolute -right-4 -top-4 select-none group-hover:text-black/5 transition-colors">architecture</span>
                                    </div>
                                    <h4 className="serif-title text-3xl font-black mb-6 text-white group-hover:text-black transition-colors uppercase tracking-widest">Quy hoạch công cộng</h4>
                                    <p className="text-ivory/50 group-hover:text-black/80 leading-relaxed font-light italic mb-8 text-lg transition-colors">
                                        Đầu tư hệ thống công viên, sân chơi cộng đồng. Tạo ra các "điểm đến" phi kỹ thuật số để kết nối các thành viên gia đình trực tiếp.
                                    </p>
                                    <div className="w-24 h-1 bg-primary group-hover:bg-black transition-colors"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Philosophical Note */}
                <section className="py-40 bg-background-dark/50 border-t border-primary/10 relative overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                        <span className="material-symbols-outlined text-primary text-6xl mb-12 animate-spin-slow opacity-40">trending_up</span>
                        <p className="serif-title text-3xl md:text-5xl italic text-white leading-tight font-light mb-16 px-4">
                            "Giải pháp xây dựng gia đình văn hóa không nằm ở việc phục cổ, mà là sự <span className="text-primary font-bold">chuyển hóa biện chứng</span>: Kế thừa hạt nhân truyền thống và tích hợp tinh hoa hiện đại."
                        </p>
                        <div className="flex justify-center items-center gap-12">
                            <div className="text-center group">
                                <span className="block text-primary font-black text-2xl serif-title uppercase tracking-widest group-hover:scale-110 transition-transform">Vi mô</span>
                                <div className="h-px w-8 bg-primary/40 mx-auto my-3"></div>
                                <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/40 font-bold">Cấp độ gia đình</span>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                            <div className="text-center group">
                                <span className="block text-primary font-black text-2xl serif-title uppercase tracking-widest group-hover:scale-110 transition-transform">Vĩ mô</span>
                                <div className="h-px w-8 bg-primary/40 mx-auto my-3"></div>
                                <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/40 font-bold">Cấp độ xã hội</span>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
                    <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
                </section>

                {/* Bottom Navigation */}
                <section className="bg-background-dark py-32 px-4 md:px-20 border-t border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 relative z-10">
                        <Link to="/thuc-trang" className="nav-btn-luxury group w-full md:w-auto justify-center py-8">
                            <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-3">west</span>
                            <span>QUAY LẠI: THỰC TRẠNG</span>
                        </Link>

                        <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
                        <Link to="/" className="nav-btn-luxury group w-full md:w-auto justify-center py-8 border-primary text-primary">
                            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-3">home</span>
                            <span>TRANG CHỦ</span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Solution;
