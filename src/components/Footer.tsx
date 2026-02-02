import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-traditional-brown py-16 px-4 md:px-20 border-t border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                    <h4 className="serif-title text-primary text-xl font-bold">GIA ĐÌNH VĂN HÓA</h4>
                    <p className="text-ivory/60 text-sm leading-loose">
                        Dự án giáo dục trực tuyến thuộc bộ môn Chủ nghĩa Xã hội Khoa học. Chuyên trang nghiên cứu và phổ biến các giá trị gia đình Việt Nam trong thời đại mới.
                    </p>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-primary cursor-pointer hover:text-ivory transition-colors">social_leaderboard</span>
                        <span className="material-symbols-outlined text-primary cursor-pointer hover:text-ivory transition-colors">share</span>
                        <span className="material-symbols-outlined text-primary cursor-pointer hover:text-ivory transition-colors">mail</span>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="text-ivory font-bold uppercase tracking-widest text-sm">Liên kết nhanh</h4>
                    <ul className="space-y-3 text-sm text-ivory/60">
                        <li><a className="hover:text-primary transition-colors" href="#">Giới thiệu chương trình</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Thư viện bài giảng</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Câu hỏi thường gặp</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Diễn đàn thảo luận</a></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="text-ivory font-bold uppercase tracking-widest text-sm">Bản tin học tập</h4>
                    <p className="text-ivory/60 text-sm">Đăng ký để nhận các bài phân tích mới nhất về văn hóa gia đình.</p>
                    <div className="flex gap-2">
                        <input className="bg-background-dark/50 border-primary/20 rounded-lg text-ivory text-sm focus:ring-primary focus:border-primary grow outline-none px-4" placeholder="Email của bạn..." type="email" />
                        <button className="bg-primary text-white p-2 rounded-lg material-symbols-outlined hover:bg-primary/80 transition-all">send</button>
                    </div>
                </div>
            </div>
            <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-ivory/40 text-xs">
                <p>© 2026 Gia Đình Văn Hóa. Tất cả quyền được bảo lưu.</p>
            </div>
        </footer>
    );
};

export default Footer;
