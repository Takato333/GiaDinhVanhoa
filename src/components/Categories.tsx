import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: "Nguồn gốc",
        icon: "account_tree",
        description: "Sự hình thành và biến đổi của thiết chế gia đình qua các thời kỳ lịch sử hình thái kinh tế xã hội.",
        link: "/nguon-goc"
    },
    {
        title: "Khái niệm",
        icon: "format_quote",
        description: "Định nghĩa khoa học về gia đình văn hóa và các tiêu chuẩn đánh giá trong thời đại mới.",
        link: "/khai-niem"
    },
    {
        title: "Cơ sở",
        icon: "foundation",
        description: "Phân tích các nền tảng kinh tế, chính trị và xã hội tạo nên cấu trúc gia đình vững mạnh.",
        link: "/co-so"
    }
];

const subCategories = [
    {
        title: "Thực trạng",
        icon: "analytics",
        description: "Cái nhìn khách quan về tình hình gia đình Việt Nam trong bối cảnh toàn cầu hóa hiện nay.",
        link: "/thuc-trang"
    },
    {
        title: "Giải pháp",
        icon: "insights",
        description: "Chiến lược xây dựng và bảo tồn các giá trị gia đình truyền thống kết hợp hiện đại.",
        link: "/giai-phap"
    }
];

const Card: React.FC<{ title: string; icon: string; description: string; link: string }> = ({ title, icon, description, link }) => (
    <div className="bg-traditional-brown/30 border border-primary/20 p-8 rounded-xl hover:border-primary transition-all group">
        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        </div>
        <h3 className="text-ivory text-xl font-bold mb-3">{title}</h3>
        <p className="text-ivory/60 text-sm leading-relaxed mb-6">{description}</p>
        <Link to={link} className="block w-full">
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all w-full">XEM CHI TIẾT</button>
        </Link>
    </div>
);

const Categories: React.FC = () => {
    return (
        <section className="bg-background-dark py-20 px-4 md:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {categories.map((cat, idx) => (
                            <Card key={idx} {...cat} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-[calc(66.666%+2rem)]">
                        {subCategories.map((cat, idx) => (
                            <Card key={idx} {...cat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
