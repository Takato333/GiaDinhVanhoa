import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

type ScenarioStep = 'BC2' | 'CHOICE' | 'A_1' | 'B_1' | 'FINAL';

const Concept: React.FC = () => {
    const [step, setStep] = useState<ScenarioStep>('BC2');
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleVideoEnd = () => {
        if (step === 'BC2') {
            setStep('CHOICE');
        } else if (step === 'A_1' || step === 'B_1') {
            setStep('FINAL');
        }
    };

    const restartSituation = () => {
        setStep('BC2');
    };

    const seeOtherChoice = () => {
        setStep('CHOICE');
    };

    const selectChoice = (choice: 'A' | 'B') => {
        if (choice === 'A') {
            setStep('A_1');
        } else {
            setStep('B_1');
        }
    };

    return (
        <div className="bg-background-dark text-ivory min-h-screen selection:bg-primary selection:text-deep-charcoal">
            <Header />

            <main className="min-h-screen mindmap-bg py-32 px-4 md:px-12 lg:px-20 overflow-hidden relative z-10">

                <div className="relative flex flex-col items-center">
                    {/* Central Hub */}
                    <div className="z-20 w-72 h-72 md:w-80 md:h-80 rounded-full ornate-hub flex flex-col items-center justify-center text-center p-8 mb-20 animate-pulse">
                        <div className="ornate-hub-ring"></div>
                        <div className="ornate-hub-ring-2"></div>
                        <span className="material-symbols-outlined text-primary text-5xl mb-4 drop-shadow-[0_0_8px_rgba(181,131,90,0.8)]">temple_buddhist</span>
                        <h3 className="serif-title text-primary text-2xl md:text-3xl font-black leading-tight uppercase tracking-widest">KHÁI NIỆM<br />GIA ĐÌNH</h3>
                        <div className="w-16 h-px bg-primary/50 my-6"></div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-primary/80 font-bold">Hạt nhân của xã hội</p>
                    </div>

                    {/* Connecting Lines */}
                    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none hidden lg:block">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 1200 800">
                            <defs>
                                <linearGradient id="primaryGradientLine" x1="0%" x2="100%" y1="0%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="#b5835a" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            <path className="filigree-line" d="M 600 320 C 600 400, 300 400, 300 450" stroke="url(#primaryGradientLine)" strokeWidth="1.5" />
                            <path className="filigree-line" d="M 600 320 C 600 400, 900 400, 900 450" stroke="url(#primaryGradientLine)" strokeWidth="1.5" />
                            <path className="filigree-line" d="M 600 320 C 600 650, 300 650, 300 700" stroke="url(#primaryGradientLine)" strokeWidth="1.5" />
                            <path className="filigree-line" d="M 600 320 C 600 650, 900 650, 900 700" stroke="url(#primaryGradientLine)" strokeWidth="1.5" />
                        </svg>
                    </div>

                    <div className="text-center mb-16">
                        <div className="flex justify-center mt-6">
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                            <span className="material-symbols-outlined text-primary text-xs px-4">ac_unit</span>
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        </div>
                    </div>

                    {/* Concept Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl relative z-10">
                        <div className="gothic-card p-10 rounded-sm corner-decoration corner-decoration-bottom h-full group hover:shadow-[0_0_30px_rgba(181,131,90,0.2)] transition-all duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="material-symbols-outlined text-primary">auto_stories</span>
                                <h4 className="serif-title text-primary font-bold text-xl uppercase tracking-widest border-b border-primary/20 pb-1">Định Nghĩa Chính Thống</h4>
                            </div>
                            <div className="flex-grow flex flex-col justify-center">
                                <p className="text-ivory/90 leading-relaxed italic text-lg border-l-2 border-primary/30 pl-6 py-4">
                                    "Hình thức cộng đồng xã hội đặc biệt được hình thành trên cơ sở các mối quan hệ
                                    <span className="text-primary font-bold block mt-4 text-2xl not-italic shimmer-text">Hôn nhân, Huyết thống & Nuôi dưỡng</span>"
                                </p>
                            </div>
                        </div>

                        <div className="gothic-card p-10 rounded-sm corner-decoration corner-decoration-bottom h-full group hover:shadow-[0_0_30px_rgba(181,131,90,0.2)] transition-all duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="material-symbols-outlined text-primary">grain</span>
                                <h4 className="serif-title text-primary font-bold text-xl uppercase tracking-widest border-b border-primary/20 pb-1">Hạt Nhân Xã Hội</h4>
                            </div>
                            <div className="parchment-box p-6 mb-8 rounded-sm relative overflow-hidden">
                                <div className="absolute -right-2 -top-2 opacity-10">
                                    <span className="material-symbols-outlined text-6xl text-deep-charcoal">format_quote</span>
                                </div>
                                <p className="serif-title text-deep-charcoal text-lg font-bold italic leading-tight">"Gia đình là hạt nhân của xã hội"</p>
                                <p className="text-[11px] text-right mt-3 text-deep-charcoal/80 font-bold uppercase tracking-tighter">— Chủ tịch Hồ Chí Minh</p>
                            </div>
                            <ul className="space-y-4 text-sm text-ivory/80">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rotate-45"></span> Quyết định sự phát triển của xã hội</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rotate-45"></span> Trung tâm của hạnh phúc con người</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rotate-45"></span> Cầu nối hữu cơ giữa Cá nhân - Xã hội</li>
                            </ul>
                        </div>

                        <div className="gothic-card p-10 rounded-sm corner-decoration corner-decoration-bottom h-full group hover:shadow-[0_0_30px_rgba(181,131,90,0.2)] transition-all duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="material-symbols-outlined text-primary">settings_heart</span>
                                <h4 className="serif-title text-primary font-bold text-xl uppercase tracking-widest border-b border-primary/20 pb-1">Các Chức Năng Cốt Yếu</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-6 flex-grow items-center">
                                {['Tái sản xuất con người', 'Nuôi dưỡng Giáo dục', 'Kinh tế Tiêu dùng', 'Tâm sinh lý Tình cảm'].map((f, i) => (
                                    <div key={i} className="border border-primary/20 p-5 text-center hover:bg-primary/5 transition-colors h-full flex flex-col justify-center">
                                        <span className="material-symbols-outlined text-primary/60 text-2xl mb-3">
                                            {['child_care', 'school', 'savings', 'favorite'][i]}
                                        </span>
                                        <p className="text-[10px] uppercase tracking-widest leading-tight font-bold">{f}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="gothic-card p-10 rounded-sm corner-decoration corner-decoration-bottom h-full group hover:shadow-[0_0_30px_rgba(181,131,90,0.2)] transition-all duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                <h4 className="serif-title text-primary font-bold text-xl uppercase tracking-widest border-b border-primary/20 pb-1">Gia Đình Văn Hóa</h4>
                            </div>
                            <div className="flex flex-col gap-8 flex-grow justify-center">
                                <div className="flex justify-between items-center text-sm border-b border-primary/10 pb-3">
                                    <span className="text-primary/80 font-bold uppercase tracking-widest text-[10px]">Tiêu chuẩn:</span>
                                    <span className="text-[10px] text-primary/40 font-black">5 GIÁ TRỊ CỐT LÕI</span>
                                </div>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {['Ấm no', 'Hòa thuận', 'Tiến bộ', 'Khỏe mạnh', 'Hạnh phúc'].map((val) => (
                                        <span key={val} className="px-4 py-2 bg-deep-charcoal border border-primary/40 text-primary text-[10px] font-black tracking-widest uppercase hover:border-primary hover:bg-primary/10 transition-all cursor-default">
                                            {val}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider max-w-7xl mx-auto"></div>

                {/* Interactive Scenario Section */}
                <section className="bg-black/40 py-24 px-4 md:px-20 relative overflow-hidden border-y border-white/5 backdrop-blur-sm mx-auto max-w-7xl rounded-3xl mb-24">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                    </div>

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h3 className="serif-title text-primary text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase shimmer-text">TÌNH HUỐNG THỰC TẾ</h3>
                            <div className="w-16 h-1 bg-primary/40 mx-auto"></div>
                        </div>

                        <div className="aspect-video bg-black rounded-3xl overflow-hidden glow-border shadow-2xl relative">
                            {step === 'CHOICE' ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background-dark/95 p-8 transition-all duration-700">
                                    <h4 className="serif-title text-2xl md:text-3xl text-white mb-16 text-center tracking-widest font-light">BẠN SẼ...</h4>

                                    <div className="flex flex-col md:flex-row gap-16 w-full max-w-4xl justify-center px-4 perspective-1000">
                                        <button
                                            onClick={() => selectChoice('A')}
                                            className="group relative flex-1 aspect-[2/3] max-w-[240px] bg-[#2a2420] border border-primary/30 rounded-t-[120px] transition-all duration-700 preserve-3d hover:rotate-y-12 hover:-translate-y-4 hover:shadow-[20px_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(181,131,90,0.3)] mx-auto"
                                        >
                                            <div className="absolute inset-[10px] border border-primary/20 rounded-t-[110px] pointer-events-none"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-[120px]"></div>
                                            <div className="absolute inset-x-0 bottom-0 p-8 text-center z-20">
                                                <div className="w-14 h-14 bg-primary/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:scale-110">
                                                    <span className="material-symbols-outlined text-2xl">meeting_room</span>
                                                </div>
                                                <p className="text-white font-bold text-xs md:text-sm tracking-[0.2em] leading-relaxed uppercase">
                                                    Đi thành phố, chuyển sang mô hình "Gia đình hạt nhân"
                                                </p>
                                            </div>
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-[120px]"></div>
                                        </button>

                                        <button
                                            onClick={() => selectChoice('B')}
                                            className="group relative flex-1 aspect-[2/3] max-w-[240px] bg-[#2a2420] border border-primary/30 rounded-t-[120px] transition-all duration-700 preserve-3d hover:-rotate-y-12 hover:-translate-y-4 hover:shadow-[-20px_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(181,131,90,0.3)] mx-auto"
                                        >
                                            <div className="absolute inset-[10px] border border-primary/20 rounded-t-[110px] pointer-events-none"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-[120px]"></div>
                                            <div className="absolute inset-x-0 bottom-0 p-8 text-center z-20">
                                                <div className="w-14 h-14 bg-primary/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:scale-110">
                                                    <span className="material-symbols-outlined text-2xl">door_open</span>
                                                </div>
                                                <p className="text-white font-bold text-xs md:text-sm tracking-[0.2em] leading-relaxed uppercase">
                                                    Ở lại quê, duy trì "Đại gia đình"
                                                </p>
                                            </div>
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-[120px]"></div>
                                        </button>
                                    </div>

                                    <button
                                        onClick={restartSituation}
                                        className="mt-16 flex items-center gap-3 text-primary/60 hover:text-primary transition-all text-xs uppercase tracking-[0.3em] font-bold group"
                                    >
                                        <span className="material-symbols-outlined text-lg group-hover:rotate-[-180deg] transition-transform duration-500">replay</span>
                                        Xem lại từ đầu
                                    </button>
                                </div>
                            ) : step === 'FINAL' ? (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background-dark/95 p-8 text-center">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse-glow"></div>
                                        <span className="material-symbols-outlined text-7xl text-primary relative z-10">task_alt</span>
                                    </div>
                                    <h4 className="serif-title text-3xl text-white mb-4 tracking-widest uppercase">Hoàn thành tình huống</h4>
                                    <div className="w-12 h-px bg-primary/30 mb-8 mx-auto"></div>
                                    <p className="text-ivory/60 mb-12 max-w-md leading-relaxed">Khám phá các khía cạnh khác nhau của khái niệm gia đình qua các lựa chọn của bạn.</p>

                                    <div className="flex flex-col sm:flex-row gap-8">
                                        <button
                                            onClick={seeOtherChoice}
                                            className="px-10 py-4 bg-transparent border border-primary/40 text-primary hover:border-primary hover:bg-primary/5 transition-all font-bold uppercase tracking-[0.2em] text-xs shadow-lg"
                                        >
                                            Khám phá hướng kia
                                        </button>
                                        <button
                                            onClick={restartSituation}
                                            className="px-10 py-4 bg-primary text-black hover:bg-white hover:scale-105 transition-all font-black uppercase tracking-[0.2em] text-xs shadow-[0_0_20px_rgba(181,131,90,0.4)]"
                                        >
                                            Xem lại từ đầu
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <video
                                    key={step}
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    controls
                                    playsInline
                                    onEnded={handleVideoEnd}
                                >
                                    {step === 'BC2' && <source src="/Kichban2_anime/BC2.mp4" type="video/mp4" />}
                                    {step === 'A_1' && <source src="/Kichban2_anime/A.mp4" type="video/mp4" />}
                                    {step === 'B_1' && <source src="/Kichban2_anime/B.mp4" type="video/mp4" />}
                                </video>
                            )}
                        </div>
                    </div>
                </section>

                <div className="section-divider max-w-7xl mx-auto"></div>

                {/* Kết luận lý luận section */}
                <div className="max-w-7xl mx-auto mb-24">
                    <div className="text-center mb-16">
                        <h2 className="serif-title text-3xl font-bold text-primary inline-flex items-center gap-8">
                            <span className="w-24 h-px bg-gradient-to-r from-transparent to-primary"></span>
                            GÓC NHÌN LÝ LUẬN
                            <span className="w-24 h-px bg-gradient-to-l from-transparent to-primary"></span>
                        </h2>
                    </div>

                    <div className="relative bg-deep-charcoal/50 border border-primary/20 p-8 md:p-16 rounded-lg backdrop-blur-md">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                            {[
                                { title: 'Cơ sở vật chất', sub: '(Kinh tế gia đình)', icon: 'account_balance_wallet' },
                                { title: 'Đời sống tinh thần', sub: '(Văn hóa gia đình)', icon: 'theater_comedy' }
                            ].map((item, i) => (
                                <React.Fragment key={i}>
                                    <div className="flex flex-col items-center text-center group flex-1">
                                        <div className="w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(181,131,90,0.4)] transition-all bg-deep-charcoal animate-pulse-glow">
                                            <span className="material-symbols-outlined text-5xl text-primary">{item.icon}</span>
                                        </div>
                                        <h5 className="serif-title text-primary font-bold uppercase tracking-[0.2em] text-base mb-2">{item.title}</h5>
                                        <p className="text-ivory/60 text-xs font-bold uppercase tracking-widest">{item.sub}</p>
                                    </div>
                                    {i === 0 && (
                                        <div className="flex flex-col items-center justify-center py-4 px-12">
                                            <div className="flex items-center gap-6">
                                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                                                <div className="px-8 py-3 border-2 border-primary text-primary font-black italic text-sm tracking-[0.4em] uppercase bg-deep-charcoal shadow-[0_0_15px_rgba(181,131,90,0.2)]">QUYẾT ĐỊNH</div>
                                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
                                            </div>
                                            <span className="material-symbols-outlined text-primary mt-6 animate-bounce text-3xl">expand_more</span>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="mt-16 bg-primary/5 border-l-4 border-primary p-10 relative overflow-hidden text-center">
                            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                                <span className="material-symbols-outlined text-9xl text-primary">lightbulb</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-ivory/90 relative z-10 max-w-4xl mx-auto">
                                <span className="text-primary font-black uppercase tracking-widest block mb-4 underline decoration-primary/40 underline-offset-8">Kết luận tổng quan:</span>
                                Việc xây dựng gia đình văn hóa hiện đại không chỉ dừng lại ở các khẩu hiệu đạo đức mà đòi hỏi sự tối ưu hóa về mặt kinh tế và khả năng quản trị thời gian xã hội một cách khoa học.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section-divider max-w-7xl mx-auto"></div>

                {/* Biến đổi cấu trúc section */}
                <div className="grid lg:grid-cols-2 gap-16 items-stretch max-w-7xl mx-auto mb-32">
                    <div className="flex flex-col">
                        <h2 className="serif-title text-3xl font-bold text-primary flex items-center gap-6 mb-12">
                            <span className="w-12 h-px bg-primary"></span>
                            BIẾN ĐỔI CẤU TRÚC
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-grow">
                            <div className="relative p-8 border border-primary/10 group hover:border-primary/40 transition-colors bg-deep-charcoal/80 flex flex-col">
                                <div className="absolute -top-3 left-6 bg-[#1a0f0e] px-3 text-[10px] text-primary/60 uppercase tracking-widest font-bold">Truyền thống</div>
                                <h5 className="serif-title text-2xl text-ivory mb-4">Tam đại đồng đường</h5>
                                <div className="flex gap-1.5 mb-6">
                                    <span className="w-2 h-2 bg-primary/40"></span>
                                    <span className="w-2 h-2 bg-primary/40"></span>
                                    <span className="w-2 h-2 bg-primary/40"></span>
                                </div>
                                <p className="text-sm text-ivory/50 leading-relaxed italic flex-grow">Mô hình gia đình lớn nhiều thế hệ chung sống, đặt nặng tính tôn ti và sự ổn định tuyệt đối qua nhiều đời.</p>
                            </div>
                            <div className="relative p-8 border-2 border-primary group bg-deep-charcoal flex flex-col shadow-[0_0_20px_rgba(181,131,90,0.1)]">
                                <div className="absolute -top-3 left-6 bg-[#1a0f0e] px-3 text-[10px] text-primary uppercase tracking-widest font-black">Hiện đại</div>
                                <h5 className="serif-title text-2xl text-primary mb-4">Gia đình hạt nhân</h5>
                                <div className="flex gap-1.5 mb-6">
                                    <span className="w-2 h-2 bg-primary"></span>
                                    <span className="w-2 h-2 bg-primary"></span>
                                </div>
                                <p className="text-sm text-ivory/80 leading-relaxed italic flex-grow">Mô hình gia đình nhỏ hai thế hệ, linh hoạt, năng động và ưu tiên sự phát triển cá nhân trong bối cảnh toàn cầu hóa.</p>
                            </div>
                        </div>
                    </div>

                    {/* Dữ liệu nhân khẩu section */}
                    <div className="flex flex-col">
                        <h2 className="serif-title text-3xl font-bold text-primary flex items-center gap-6 mb-12">
                            <span className="w-12 h-px bg-primary"></span>
                            DỮ LIỆU NHÂN KHẨU
                        </h2>
                        <div className="bg-gradient-to-br from-deep-charcoal to-traditional-brown/20 border-2 border-primary p-10 rounded-sm relative group overflow-hidden flex-grow flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <span className="material-symbols-outlined text-9xl text-primary rotate-12">analytics</span>
                            </div>
                            <div>
                                <h4 className="text-primary font-black text-sm tracking-[0.4em] mb-12 border-b border-primary/20 pb-4 uppercase">Tổng điều tra dân số 2019</h4>
                                <div className="grid grid-cols-2 gap-12 relative z-10">
                                    <div className="flex flex-col">
                                        <span className="text-primary/60 text-xs uppercase font-bold tracking-widest mb-2">Quy mô</span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl md:text-6xl font-black text-white">26.8</span>
                                            <span className="text-primary font-bold text-xl">M</span>
                                        </div>
                                        <p className="text-[10px] uppercase text-primary/40 mt-3 font-bold tracking-widest">Hộ gia đình toàn quốc</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-primary/60 text-xs uppercase font-bold tracking-widest mb-2">Trung bình</span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl md:text-6xl font-black text-white">3.6</span>
                                        </div>
                                        <p className="text-[10px] uppercase text-primary/40 mt-3 font-bold tracking-widest">Thành viên / Hộ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto pt-12">
                                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden border border-primary/20">
                                    <div className="h-full bg-primary w-3/4 shadow-[0_0_15px_rgba(181,131,90,0.6)]"></div>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <span className="text-[10px] text-primary/60 font-black uppercase tracking-widest">Xu hướng giảm quy mô</span>
                                    <span className="text-[10px] text-primary/60 font-black uppercase tracking-widest">75% Hạt nhân hóa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Navigation section */}
                <section className="bg-background-dark py-24 px-4 md:px-20 border-t border-primary/10 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                        <Link to="/nguon-goc" className="nav-btn-luxury group w-full md:w-auto justify-center">
                            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-3">west</span>
                            <span>QUAY LẠI: NGUỒN GỐC</span>
                        </Link>
                        <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                        <Link to="/co-so" className="nav-btn-luxury group w-full md:w-auto justify-center">
                            <span>TIẾP THEO: CƠ SỞ</span>
                            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-3">east</span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Concept;
