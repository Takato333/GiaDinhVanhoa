import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

interface ScenarioProps {
    title: string;
    subtitle: string;
    introVideo: string;
    choiceAVideo: string;
    choiceBVideo: string;
    choiceALabel: string;
    choiceBLabel: string;
}

const VideoScenario: React.FC<ScenarioProps> = ({ title, subtitle, introVideo, choiceAVideo, choiceBVideo, choiceALabel, choiceBLabel }) => {
    const [step, setStep] = useState<'BC' | 'CHOICE' | 'A_RESULT' | 'B_RESULT' | 'FINAL'>('BC');
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoEnd = () => {
        if (step === 'BC') {
            setStep('CHOICE');
        } else if (step === 'A_RESULT' || step === 'B_RESULT') {
            setStep('FINAL');
        }
    };

    const selectChoice = (choice: 'A' | 'B') => {
        setStep(choice === 'A' ? 'A_RESULT' : 'B_RESULT');
    };

    const restartSituation = () => {
        setStep('BC');
    };

    const seeOtherChoice = () => {
        setStep('CHOICE');
    };

    return (
        <section className="py-24 px-4 md:px-12 lg:px-20 border-b border-primary/10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Thực nghiệm xã hội</span>
                    <h3 className="serif-title text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        {title} <span className="text-primary italic">{subtitle}</span>
                    </h3>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
                </div>

                <div className="relative aspect-video bg-black rounded-sm overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] group/container">
                    {/* Perspective lines like Concept page */}
                    <div className="absolute inset-0 pointer-events-none z-10 opacity-20 group-hover/container:opacity-30 transition-opacity">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#b5835a_0.5px,transparent_1px)] [background-size:30px_30px]"></div>
                    </div>

                    {step === 'CHOICE' ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background-dark/95 p-8 z-20 animate-fade-in">
                            <h4 className="serif-title text-2xl md:text-3xl text-white mb-16 text-center tracking-widest font-light">BẠN SẼ...</h4>

                            <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-4xl justify-center px-4 perspective-1000">
                                <button
                                    onClick={() => selectChoice('A')}
                                    className="group relative flex-1 aspect-[3/4] md:aspect-[2/3] max-w-[200px] md:max-w-[240px] bg-[#2a2420] border border-primary/30 rounded-t-[120px] transition-all duration-700 preserve-3d hover:rotate-y-12 hover:-translate-y-4 hover:shadow-[20px_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(181,131,90,0.3)] mx-auto"
                                >
                                    <div className="absolute inset-[10px] border border-primary/20 rounded-t-[110px] pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-[120px]"></div>
                                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center z-20">
                                        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:scale-110">
                                            <span className="material-symbols-outlined text-xl md:text-2xl">meeting_room</span>
                                        </div>
                                        <p className="text-white font-bold text-[10px] md:text-xs tracking-[0.2em] leading-relaxed uppercase">
                                            {choiceALabel}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center absolute top-12 left-1/2 -translate-x-1/2 opacity-20">
                                        <span className="serif-title text-6xl font-black text-primary">A</span>
                                    </div>
                                </button>

                                <button
                                    onClick={() => selectChoice('B')}
                                    className="group relative flex-1 aspect-[3/4] md:aspect-[2/3] max-w-[200px] md:max-w-[240px] bg-[#2a2420] border border-primary/30 rounded-t-[120px] transition-all duration-700 preserve-3d hover:-rotate-y-12 hover:-translate-y-4 hover:shadow-[-20px_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(181,131,90,0.3)] mx-auto"
                                >
                                    <div className="absolute inset-[10px] border border-primary/20 rounded-t-[110px] pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-t-[120px]"></div>
                                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-center z-20">
                                        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:scale-110">
                                            <span className="material-symbols-outlined text-xl md:text-2xl">door_open</span>
                                        </div>
                                        <p className="text-white font-bold text-[10px] md:text-xs tracking-[0.2em] leading-relaxed uppercase">
                                            {choiceBLabel}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center absolute top-12 left-1/2 -translate-x-1/2 opacity-20">
                                        <span className="serif-title text-6xl font-black text-primary">B</span>
                                    </div>
                                </button>
                            </div>

                            <button
                                onClick={restartSituation}
                                className="mt-12 md:mt-16 flex items-center gap-3 text-primary/60 hover:text-primary transition-all text-[10px] uppercase tracking-[0.3em] font-bold group"
                            >
                                <span className="material-symbols-outlined text-lg group-hover:rotate-[-180deg] transition-transform duration-500">replay</span>
                                Xem lại từ đầu
                            </button>
                        </div>
                    ) : step === 'FINAL' ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background-dark/95 p-8 text-center z-20">
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse"></div>
                                <span className="material-symbols-outlined text-7xl text-primary relative z-10">verified</span>
                            </div>
                            <h4 className="serif-title text-2xl md:text-3xl text-white mb-4 tracking-widest uppercase">Hoàn thành tình huống</h4>
                            <div className="w-12 h-px bg-primary/30 mb-8 mx-auto"></div>
                            <p className="text-ivory/60 mb-12 max-w-md text-sm leading-relaxed italic">"Tình huống này phản chiếu chính xác những mâu thuẫn giữa xu hướng hiện đại và giá trị truyền thống trong hệ tư tưởng gia đình."</p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button
                                    onClick={seeOtherChoice}
                                    className="px-8 py-4 bg-transparent border border-primary/40 text-primary hover:border-primary hover:bg-primary/5 transition-all font-bold uppercase tracking-[0.2em] text-[10px]"
                                >
                                    Khám phá hướng kia
                                </button>
                                <button
                                    onClick={restartSituation}
                                    className="px-8 py-4 bg-primary text-black hover:bg-white hover:scale-105 transition-all font-black uppercase tracking-[0.2em] text-[10px] shadow-[0_0_20px_rgba(181,131,90,0.4)]"
                                >
                                    Xem lại từ đầu
                                </button>
                            </div>
                        </div>
                    ) : (
                        <video
                            key={step}
                            ref={videoRef}
                            className="w-full h-full object-cover relative z-0"
                            controls
                            onEnded={handleVideoEnd}
                        >
                            {step === 'BC' && <source src={introVideo} type="video/mp4" />}
                            {step === 'A_RESULT' && <source src={choiceAVideo} type="video/mp4" />}
                            {step === 'B_RESULT' && <source src={choiceBVideo} type="video/mp4" />}
                        </video>
                    )}
                </div>
            </div>
        </section>
    );
};

const Situation: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-dark text-ivory min-h-screen selection:bg-primary selection:text-deep-charcoal">
            <Header />

            <main className="flex-grow pt-32">
                {/* Editorial Introduction */}
                <section className="py-24 px-4 md:px-12 lg:px-20 border-b border-primary/10 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-5">
                        <span className="material-symbols-outlined text-[30rem] select-none">analytics</span>
                    </div>
                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[1px] w-20 bg-primary/40"></div>
                        </div>
                        <h2 className="serif-title text-5xl md:text-8xl font-black mb-12 leading-[0.9] text-white tracking-tighter uppercase">
                            THỰC TRẠNG <br />
                            <span className="text-primary italic font-light ml-0 md:ml-32 block md:inline mt-4 md:mt-0 drop-shadow-[0_0_15px_rgba(181,131,90,0.3)]">BIẾN ĐỔI</span>
                        </h2>
                        <p className="serif-title text-xl md:text-3xl text-ivory/60 max-w-3xl leading-relaxed italic border-l-2 border-primary/30 pl-8 py-4">
                            Sự dịch chuyển từ mô hình đa thế hệ sang hạt nhân hóa đang tạo ra những mâu thuẫn biện chứng mới trong cấu trúc đời sống tinh thần.
                        </p>
                    </div>
                </section>

                {/* 01. Mặt Tích Cực */}
                <section className="relative min-h-screen py-32 overflow-hidden bg-ivory text-traditional-brown border-y-[12px] border-primary/20 silk-texture">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-traditional-brown/20 hidden lg:block"></div>
                    </div>
                    <div className="editorial-watermark serif-title font-black italic absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25rem] opacity-5 select-none pointer-events-none">
                        Family
                    </div>
                    <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
                        <div className="mb-24 text-center md:text-left">
                            <h3 className="serif-title text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-traditional-brown">Mặt Tích Cực</h3>
                            <div className="h-1.5 w-40 bg-primary mb-6 mx-auto md:mx-0 shadow-lg"></div>
                            <p className="text-[11px] font-black tracking-[0.4em] text-primary uppercase">Sự phát triển của các giá trị tiến bộ</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
                            {/* Positive Block 1 */}
                            <div className="relative group transition-transform duration-700 hover:-translate-y-2">
                                <div className="absolute -top-10 -left-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-[8rem]">diversity_1</span>
                                </div>
                                <div className="border-l-4 border-primary pl-10 py-4 relative z-10">
                                    <span className="material-symbols-outlined text-primary text-6xl mb-8 block drop-shadow-md">diversity_1</span>
                                    <h4 className="serif-title text-3xl md:text-4xl font-bold mb-8 italic leading-snug text-traditional-brown uppercase tracking-tighter">Giải phóng sức lao động & xóa nhòa khoảng cách</h4>
                                    <div className="space-y-6 text-traditional-brown/80 leading-relaxed font-medium">
                                        <p className="text-xl">Sự can thiệp của công nghệ giúp <span className="font-bold text-primary italic underline decoration-primary/30 underline-offset-4">tiện nghi hóa</span> đời sống gia đình, giải phóng phụ nữ khỏi những gánh nặng nội trợ truyền thống.</p>
                                        <p className="text-sm italic opacity-60">Không gian gia đình không còn bị giới hạn bởi địa lý nhờ kết nối kỹ thuật số không giới hạn, duy trì sợi dây tình cảm xuyên biên giới.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Positive Block 2 */}
                            <div className="relative md:mt-40 group transition-transform duration-700 hover:-translate-y-2">
                                <div className="absolute -top-10 -right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-[8rem]">handshake</span>
                                </div>
                                <div className="border-r-4 border-primary pr-10 py-4 text-right relative z-10">
                                    <span className="material-symbols-outlined text-primary text-6xl mb-8 block ml-auto drop-shadow-md">handshake</span>
                                    <h4 className="serif-title text-3xl md:text-4xl font-bold mb-8 italic leading-snug text-traditional-brown uppercase tracking-tighter">Chia sẻ trách nhiệm & tôn trọng cá nhân</h4>
                                    <div className="space-y-6 text-traditional-brown/80 leading-relaxed font-medium">
                                        <p className="text-xl">Phá vỡ các <span className="font-bold text-primary italic underline decoration-primary/30 underline-offset-4">định kiến giới</span> khắc nghiệt. Nam giới tham gia sâu hơn vào việc chăm sóc con cái và công việc nội trợ.</p>
                                        <p className="text-sm italic opacity-60">Tự do định hướng cuộc đời cá nhân được tôn trọng thay vì sự áp đặt từ gia trưởng truyền thống, tạo điều kiện cho mọi thành viên tỏa sáng.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 02. Mặt Tiêu Cực */}
                <section className="py-40 px-6 md:px-12 lg:px-20 bg-background-dark relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#b5835a_1px,transparent_1px)] [background-size:40px_40px]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-primary/20 pb-16">
                            <div className="max-w-2xl">
                                <span className="text-primary font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">Góc tối của sự hiện đại hóa</span>
                                <h3 className="serif-title text-6xl md:text-8xl font-black text-ivory italic tracking-tighter leading-none mb-4">Mặt Tiêu Cực</h3>
                                <p className="text-ivory/40 text-[11px] uppercase tracking-[0.3em] font-bold">Hệ lụy trực tiếp từ quá trình chuyển đổi Lượng sang Chất</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                            {[
                                { num: '01', icon: 'stop_screen_share', title: 'Khoán trắng trách nhiệm', desc: 'Sự trỗi dậy của "Bảo mẫu công nghệ" khiến vai trò giáo dục trực tiếp bị suy giảm, đứt gãy sự gắn kết hữu cơ giữa các thế hệ.' },
                                { num: '02', icon: 'person_cancel', title: 'Chủ nghĩa cá nhân', desc: '"Ly hôn xanh" gia tăng đột biến, đề cao quyền riêng tư thái quá dẫn đến sự thờ ơ và phá vỡ cấu trúc cộng đồng gia đình.' },
                                { num: '03', icon: 'hourglass_bottom', title: 'Xung đột thế hệ', desc: 'Sự đứt gãy giao tiếp giữa cũ và mới, các giá trị chuẩn mực đạo đức truyền thống bị thách thức bởi tư duy thực dụng.' }
                            ].map((item, idx) => (
                                <div key={idx} className="group border border-primary/10 bg-primary/5 p-12 hover:bg-primary transition-all duration-700 relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_50px_rgba(181,131,90,0.2)] hover:-translate-y-4 corner-decoration">
                                    <span className="absolute -right-8 -top-8 text-[12rem] font-black text-primary/5 group-hover:text-black/5 transition-colors select-none pointer-events-none">{item.num}</span>
                                    <div className="relative z-10">
                                        <span className="material-symbols-outlined text-primary text-7xl mb-12 group-hover:text-black transition-colors block drop-shadow-[0_0_10px_rgba(181,131,90,0.4)]">{item.icon}</span>
                                        <h4 className="serif-title text-2xl font-black mb-8 text-white group-hover:text-black uppercase tracking-widest leading-tight">{item.title}</h4>
                                        <p className="text-ivory/50 group-hover:text-black/80 leading-relaxed font-light italic mb-10 text-lg transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="w-20 h-1.5 bg-primary group-hover:bg-black transition-colors relative z-10"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Scenarios - Stacked 1 trên 1 dưới */}
                <VideoScenario
                    title="Góc nhìn"
                    subtitle="Tình huống 1"
                    introVideo="/Kichban3_anime/BC3.mp4"
                    choiceAVideo="/Kichban3_anime/A.mp4"
                    choiceBVideo="/Kichban3_anime/B.mp4"
                    choiceALabel="Xắn tay áo vào bếp hỗ trợ vợ"
                    choiceBLabel="Quát mắng Hạnh"
                />

                <VideoScenario
                    title="Góc nhìn"
                    subtitle="Tình huống 2"
                    introVideo="/Kichban4_anime/BC4.mp4"
                    choiceAVideo="/Kichban4_anime/A.mp4"
                    choiceBVideo="/Kichban4_anime/B.mp4"
                    choiceALabel="Đưa iPad cho con ngồi yên"
                    choiceBLabel="Tạm dừng việc, chơi với con"
                />

                {/* 03. Mâu thuẫn biện chứng - Cinematic Split Design */}
                <section className="py-56 px-6 md:px-12 lg:px-20 bg-ivory relative overflow-hidden border-t-[12px] border-primary silk-texture">
                    {/* Background Texture & Watermark */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 serif-title text-[30rem] font-black italic select-none">VS</div>
                    </div>

                    <div className="max-w-7xl mx-auto mb-40 text-center relative z-10">
                        <div className="inline-flex items-center gap-8 mb-8">
                            <div className="h-px w-12 bg-primary"></div>
                            <span className="material-symbols-outlined text-primary text-4xl animate-spin-slow">balance</span>
                            <div className="h-px w-12 bg-primary"></div>
                        </div>
                        <h3 className="serif-title text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none text-traditional-brown italic drop-shadow-sm">
                            Mâu thuẫn <br />
                            <span className="text-primary not-italic">biện chứng</span>
                        </h3>
                        <p className="mt-12 text-primary font-black text-[10px] md:text-xs tracking-[0.6em] uppercase opacity-60">Phân tích kiến trúc của xung đột gia đình</p>
                    </div>

                    <div className="max-w-7xl mx-auto relative space-y-48 md:space-y-72">
                        {/* Architectural Divider Line */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"></div>

                        {[
                            { left: 'MỤC TIÊU', right: 'PHƯƠNG THỨC', icon: 'ads_click', detail: 'Hạnh phúc lâu bền vs Sự thỏa mãn nhất thời', labelL: 'GIÁ TRỊ CỐT LÕI', labelR: 'CÁCH TIẾP CẬN' },
                            { left: 'CÁI TÔI', right: 'CÁI TA', icon: 'groups', detail: 'Quyền cá nhân vs Trách nhiệm cộng đồng', labelL: 'CÁ THỂ HÓA', labelR: 'TÍNH TẬP THỂ' },
                            { left: 'KỲ VỌNG', right: 'ÁP ĐẶT', icon: 'psychology', detail: 'Đối thoại thấu hiểu vs Tư duy áp đặt', labelL: 'TIẾN BỘ', labelR: 'BẢO THỦ' }
                        ].map((pair, i) => (
                            <div key={i} className="flex flex-col lg:flex-row items-center justify-between relative group/row">
                                {/* Left Content */}
                                <div className="flex-1 w-full lg:pr-32 text-center lg:text-right transition-all duration-700 group-hover/row:-translate-x-4">
                                    <div className="relative inline-block">
                                        <span className="absolute -top-12 -right-12 serif-title text-9xl font-black text-primary/5 select-none transition-opacity group-hover/row:opacity-10">{pair.left.charAt(0)}</span>
                                        <div className="relative z-10">
                                            <p className="text-[9px] font-black tracking-[0.4em] text-primary mb-4">{pair.labelL}</p>
                                            <h4 className="serif-title text-6xl md:text-8xl font-black tracking-tighter text-traditional-brown hover:text-primary transition-colors cursor-default">
                                                {pair.left}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Cinematic VS Divider */}
                                <div className="relative z-30 py-12 lg:py-0">
                                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-primary/30 flex items-center justify-center bg-ivory/50 backdrop-blur-xl relative group-hover/row:scale-110 transition-transform duration-700 shadow-2xl">
                                        <div className="absolute inset-2 border border-primary/10 rounded-full animate-pulse"></div>
                                        <span className="serif-title italic font-black text-2xl md:text-4xl text-primary opacity-40 group-hover/row:opacity-100 transition-opacity">VS</span>
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 opacity-0 group-hover/row:opacity-100 transition-all duration-500 translate-y-4 group-hover/row:translate-y-0 text-center w-64">
                                        <div className="h-px w-12 bg-primary mx-auto mb-4"></div>
                                        <p className="text-[10px] font-black tracking-[0.3em] text-primary italic leading-relaxed uppercase">{pair.detail}</p>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="flex-1 w-full lg:pl-32 text-center lg:text-left transition-all duration-700 group-hover/row:translate-x-4 mt-12 lg:mt-0">
                                    <div className="relative inline-block">
                                        <span className="absolute -top-12 -left-12 serif-title text-9xl font-black text-primary/5 select-none transition-opacity group-hover/row:opacity-10">{pair.right.charAt(0)}</span>
                                        <div className="relative z-10">
                                            <p className="text-[9px] font-black tracking-[0.4em] text-primary mb-4">{pair.labelR}</p>
                                            <h4 className="serif-title text-6xl md:text-8xl font-black tracking-tighter text-traditional-brown hover:text-primary transition-colors cursor-default">
                                                {pair.right}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Philosophical Quote */}
                    <div className="max-w-3xl mx-auto mt-64 text-center border-t border-primary/10 pt-24">
                        <span className="material-symbols-outlined text-primary text-5xl mb-8 opacity-40">format_quote</span>
                        <p className="serif-title text-2xl md:text-4xl italic text-traditional-brown/80 font-light leading-relaxed">
                            "Mọi sự biến đổi đều mang tính hai mặt. Gia đình văn hóa chính là điểm cân bằng động giữa dòng chảy của thời đại."
                        </p>
                    </div>
                </section>

                {/* Bottom Navigation */}
                <section className="bg-background-dark py-32 px-4 md:px-20 border-t border-primary/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16 relative z-10">
                        <Link to="/co-so" className="nav-btn-luxury group w-full md:w-auto justify-center py-8">
                            <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-3">west</span>
                            <span>QUAY LẠI: CƠ SỞ</span>
                        </Link>

                        <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
                        <Link to="/giai-phap" className="nav-btn-luxury group w-full md:w-auto justify-center py-8 border-primary text-primary">
                            <span>TIẾP THEO: GIẢI PHÁP</span>
                            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-3">east</span>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Situation;
