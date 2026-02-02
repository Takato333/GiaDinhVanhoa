import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full overflow-hidden">
            <div
                className="relative h-[600px] w-full flex items-center justify-center text-center p-6 bg-cover bg-center"
                style={{
                    backgroundImage: 'linear-gradient(rgba(74, 44, 42, 0.7), rgba(29, 25, 21, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMZaFQmqwdgQTjB16Ld-W8bCXCTJCHox0Cpuaql28w2pkXg3iKn3oOx9LYtVxYIah7-fuF3hW-1n7a_AS1ERahcrMSoBCCr8k9aOBEILChIb9tInaLNgCmSWFQmTNTey_cLywwvHurozyczGrFAlh2ltjjz_9rJwdWk5YkqKwMx1kF4gAhECc6d5aK9KPBL_ABjNgkzYhcaJv9ZO6AzTYTr1gLFmaZl38kiTq3v5wpF8qfrXg1AiGAoiDDlhmpcGrVsXBKdTTfDYc")'
                }}
            >
                <div className="max-w-4xl space-y-6">
                    <h2 className="serif-title text-primary text-4xl md:text-6xl font-black leading-tight drop-shadow-lg">
                        GIA ĐÌNH LÀ HẠT NHÂN <br /> CỦA XÃ HỘI
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="text-ivory text-lg md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
                        "Gia đình là hạt nhân của xã hội, là nơi duy trì nòi giống, là môi trường quan trọng hình thành, nuôi dưỡng và giáo dục nhân cách con người."
                    </p>
                    <div className="pt-8">
                        <Link to="/nguon-goc">
                            <button className="bg-primary hover:bg-white hover:text-traditional-brown text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 mx-auto">
                                KHÁM PHÁ NGAY
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
