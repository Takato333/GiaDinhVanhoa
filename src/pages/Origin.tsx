import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import luyenNgocTan from '../assets/luyen_ngoc_tan.jpg';

type ScenarioStep = 'BC1' | 'CHOICE' | 'A_1' | 'B_1' | 'FINAL';

const Origin: React.FC = () => {
    const [step, setStep] = useState<ScenarioStep>('BC1');
    const videoRef = useRef<HTMLVideoElement>(null);

    // Cuộn lên đầu trang khi vào trang này
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleVideoEnd = () => {
        if (step === 'BC1') {
            setStep('CHOICE');
        } else if (step === 'A_1') {
            setStep('FINAL');
        } else if (step === 'B_1') {
            setStep('FINAL');
        }
    };

    const restartSituation = () => {
        setStep('BC1');
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
        <div className="bg-background-dark text-ivory min-h-screen selection:bg-primary selection:text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-drift pointer-events-none"></div>
            <div className="absolute bottom-20 right-[-10%] w-[30%] h-[30%] bg-bronze/5 blur-[100px] rounded-full animate-drift pointer-events-none" style={{ animationDelay: '-5s' }}></div>

            <Header />

            <main className="pt-32 relative z-10">
                <section className="bg-transparent py-20 px-4 md:px-20">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="mb-16 animate-pulse">
                            <span className="text-primary/60 text-xs font-bold tracking-[0.4em] uppercase block mb-4">Hành Trình Lịch Sử</span>
                            <h2 className="serif-title text-4xl md:text-6xl font-bold mb-6 tracking-wide uppercase">BỐI CẢNH RA ĐỜI</h2>
                            <div className="w-24 h-0.5 bg-primary/30 mx-auto"></div>
                        </div>
                        <div className="video-container rounded-3xl glow-border shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/vOJM1956sBI?autoplay=1&mute=0&rel=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                        <p className="mt-12 serif-title text-ivory/80 text-xl md:text-2xl italic max-w-3xl mx-auto leading-relaxed">
                            "Tư liệu về phong trào Gia đình văn hóa đầu tiên tại thôn Ngọc Tỉnh (1962)"
                        </p>
                    </div>
                </section>

                <section className="bg-black/40 py-24 px-4 md:px-20 relative overflow-hidden border-y border-white/5 backdrop-blur-sm">
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
                                        {/* Choice A Door */}
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
                                                    Chấp hành chủ trương
                                                </p>
                                            </div>
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-[120px]"></div>
                                        </button>

                                        {/* Choice B Door */}
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
                                                    Đi xa làm ăn
                                                </p>
                                            </div>
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-[120px]"></div>
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setStep('BC1')}
                                        className="mt-16 flex items-center gap-3 text-primary/60 hover:text-primary transition-all text-xs uppercase tracking-[0.3em] font-bold group"
                                    >
                                        <span className="material-symbols-outlined text-lg group-hover:rotate-[-180deg] transition-transform duration-500">replay</span>
                                        Xem lại đoạn video
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
                                    <p className="text-ivory/60 mb-12 max-w-md leading-relaxed">Mỗi lựa chọn đều dẫn đến những câu chuyện khác nhau. Bạn có muốn khám phá góc nhìn còn lại?</p>

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
                                    {step === 'BC1' && <source src="/Kichban1_anime/BC1.mp4" type="video/mp4" />}
                                    {step === 'A_1' && <source src="/Kichban1_anime/A.mp4" type="video/mp4" />}
                                    {step === 'B_1' && <source src="/Kichban1_anime/B.mp4" type="video/mp4" />}
                                </video>
                            )}
                        </div>
                    </div>
                </section>

                <section className="bg-ivory py-32 px-4 md:px-20 silk-texture relative">
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="text-center mb-24">
                            <span className="text-traditional-brown/40 text-sm font-bold tracking-[0.4em] uppercase block mb-4">Chiếc nôi của phong trào</span>
                            <div className="w-16 h-px bg-primary/40 mx-auto"></div>
                        </div>
                        <article className="space-y-16">
                            <div className="space-y-10">
                                <p className="serif-title text-background-dark text-xl md:text-2xl leading-[2.2] text-justify first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                                    Năm 1962, từ 6 gia đình ở thôn Ngọc Tỉnh (xã Ngọc Liên, huyện Cẩm Giàng, tỉnh Hải Dương), phong trào xây dựng "Gia đình văn hóa" đã chính thức được khơi nguồn. Giữa những bộn bề của công cuộc xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh giải phóng miền Nam, những nếp nhà gương mẫu tại đây đã trở thành biểu tượng cho nếp sống mới: yêu nước, đoàn kết, và tiến bộ.
                                </p>
                                <p className="serif-title text-background-dark text-xl md:text-2xl leading-[2.2] text-justify">
                                    Thôn Ngọc Tỉnh khi ấy không chỉ là một đơn vị hành chính, mà đã trở thành một biểu tượng tinh thần, nơi những giá trị truyền thống được gạn đục khơi trong, kết hợp hài hòa với những tư tưởng mới của thời đại.
                                </p>
                            </div>
                            <figure className="space-y-6 group">
                                <div className="border-[16px] border-white shadow-[0_40px_80px_rgba(0,0,0,0.15)] overflow-hidden">
                                    <img alt="Luyen Ngoc Tan Image" className="w-full contrast-125 group-hover:scale-105 transition-transform duration-1000" src={luyenNgocTan} />
                                </div>
                                <figcaption className="text-traditional-brown/50 text-xs italic text-center uppercase tracking-widest mt-6">Ảnh tư liệu: Ông Luyện Ngọc Tân</figcaption>
                            </figure>
                            <div className="relative mt-28 pt-16 pb-12 px-12 bg-black/5 border-l-4 border-primary">
                                <span className="material-symbols-outlined absolute -top-8 left-8 text-8xl text-primary/20">format_quote</span>
                                <blockquote className="serif-title text-traditional-brown text-2xl md:text-3xl italic leading-relaxed font-medium">
                                    "Bộ Văn hóa - Thông tin lúc bấy giờ đã chính thức công nhận và nhân rộng mô hình từ Ngọc Tỉnh ra khắp cả nước, đặt nền móng vững chắc cho phong trào 'Toàn dân đoàn kết xây dựng đời sống văn hóa' sau này."
                                </blockquote>
                                <div className="mt-10 flex items-center gap-6">
                                    <div className="h-px w-12 bg-primary/40"></div>
                                    <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">Trích sử liệu ngành Văn hóa</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="bg-background-dark py-24 px-4 md:px-20 border-t border-white/5 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                        <Link to="/" className="nav-btn-luxury group w-full md:w-auto justify-center">
                            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-3">west</span>
                            <span>QUAY LẠI TRANG CHỦ</span>
                        </Link>
                        <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                        <Link to="/khai-niem" className="nav-btn-luxury group w-full md:w-auto justify-center">
                            <span>TIẾP THEO: KHÁI NIỆM</span>
                            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-3">east</span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Origin;
