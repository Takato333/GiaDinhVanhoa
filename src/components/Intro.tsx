import React from 'react';

const Intro: React.FC = () => {
    return (
        <section className="bg-ivory py-16 px-4 md:px-20 text-center silk-texture">
            <div className="max-w-3xl mx-auto space-y-4">
                <h2 className="serif-title text-traditional-brown text-3xl font-bold">Tìm hiểu về Gia đình văn hóa...</h2>
                <div className="w-16 h-0.5 bg-primary/40 mx-auto"></div>
                <p className="text-traditional-brown/80 text-lg leading-loose">
                    Trong hệ thống lý luận của Chủ nghĩa Xã hội Khoa học, gia đình không chỉ là tế bào tự nhiên mà còn là nền tảng vững chắc để xây dựng một xã hội văn minh, tiến bộ. Việc xây dựng gia đình văn hóa là yêu cầu khách quan trong quá trình quá độ lên chủ nghĩa xã hội.
                </p>
            </div>
        </section>
    );
};

export default Intro;
