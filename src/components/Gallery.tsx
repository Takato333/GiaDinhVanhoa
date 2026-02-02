import React from 'react';

const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDK0wcYDv6BZOnYLhtAj6hmVIq0_IySLNyPu1E3bWerQdkllYNEqgKcqLqmdrvEiZ-8oT9pfF0v9BjRBMrbDEhvdKwgokQVd6AeUUWc8C3vetjaPGfrXCeMtNQqkWxbPO4I6ElxFvKanuhlksGxSmqclOeptaK4-qlhwipF-JEJ28iW8RKdH7poE5TvmU3oyQ41FssDMbLYVY2ynSzsLlmxYEmYzbAS-UaWXV1dcJUvEQTV1gLxjlClJ38MPEIhrGDW4bDHaq9Ev1A",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCFd1HAiTRFQhPPXFq8d9XELXNLGB4-q2OkZ0D86pV9_fsFnB8t4hNG8-Zh8tRBcPBFHPxpy9AwFjht5RLRuJHpeN0YcRMghSVGf5QofsIK1Ivjytarj2iz6VyAtOagSg1yU1FtTHex3YZFmCkOGro26V5EuSVEqSQ9l5up43XWJg5SjQ9BZtvBd9M26FU-YVMaTlR7uVkX_iiomO4M-VPcJS4a_ete0YhQBBMgUiPeMpYyj-DijX-RqbtFPGWuW6yYs5sQXSg2gsw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcqD6_76ayR33BkiU55v_bvwxyWdJ-WfgYRHmOLXR4hyiMOzXrFbYmVN9DicNIKob5xM7g7Kzu8nHGvDvsILVYMVKpogcjlLoHvLHf81Z_tYjZRnCCeN0hQ3_0ZNdMuzB0vVylzA2ljWUFInFTDvwfi3UCCpMiFo8mVPWHk-cN1X6CDEFZ72t2BGfehkqVL0NERertxpfag_LiBdhkX10E82GeTmRyBJSjkf4cfTn4X6MfXkF-aLZJTVehpe3gk7rojUHXHnmZJZg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBbfNIF_PujF-18reSVokiddcWLsVtdN_fsAjCfafHyxGfixsQu4Rz2NS4OIXXOflPx45It7DSW0L6cPK9ZaeCg_Z1-BeZZQxLBFCjfF6gPkudaVVIP5axVgecoa5jKTgZxxQua0RAAIoePPjQWQ6ls9azvkrbnNxxu41QjRSCQb9mGl4qWeCzModSqpOT_LuC0-t4ODsCBRC3Nc_U9v8e7O5XQ_RBzVKZIQA6bMMtGvWq_4G8IBGyWoqGSTy45ecS0mWLfbKDYtk8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBkRTP_2tyVxqRhLuNzrNSdNlr1Oy7s6ZurdAf9XjVxhs3EaE2oX6RtB1_EvrUp9XuEaZaf0mDYU2z05l8uyIW5XSmxxAqBYk0arkSeIMGFlt9pDegvx-xKHmhu6Pw-NPN4wvoAmufxTAai-7utRCoLTOttsiF9NP-a_W6XcyyTeJkw0IabunW3cw-dEtXnAVs_C7lB7oOUups9rONqCRw2yPdqR0Cx15utJKNx44Kw1wV8SUbpMgOFQtB9P3afpB2K1rLpMV3XbeE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmZAegjLra-Rw6oYRjyflb5DXhGa-T1t0xrtFsuZBXeodavdTrYC5zo_lD7_4hwKqmwcu4sLtUbLCHH1h2clft_2dAXSNlQe9rhqB_he0WMUEPUWubt5AwBZKHm46f5c5pOZ5aJm3X3ZuI0CyKURNc2-IfLzvxRGOacGtZHpdkGhkxjn16dMVfNksfkGLsLDaGYYRFqlSCiWNpYKfWfuUL7Lk1zlWQUt1c4YGcadHzWTlFI3SKUZ8fZj41PO0Jh7jbGk9rRPujsqM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDFMSWp_0Mmjjk8nQPG0tS18ZKT05S3O3WyWxEY6MJsCmPkQu4qfIRkY7Wf7ezPeuUfIAMtjoS3NzrfjNVmq2JZ-JthrHtmopb_i1S9yCP-df8pxs4A-jsPirip4KPPk_anPVa5Ekw6WcHbNbMG3yamHU2Nq4Xu1g8FCDoDA_vVa2TjOdQfAxu_nsWISKUlBxZoNLfLNCpMxJ47FFX5IRWMnUBVn70uVC9NpUYogHXl088Hk3jvUSNEJri5VLcmtbbrzdswtglsD7E",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2M9EHMnfQLa43cnCCH2rpVArOqGC6rfTfgdcq521gvu-s5xtXE9uYIXoEYWwmCRug1UGc3KVnZXbjQ53JLvZvUeeIJnf-o4bEclo-wsS49XoQWi1KR-yDz5T3GBlAt1ahKEK574Msg7Wh3XdK5U7HoawQlWGbsWU6Hp7GohwLXHfRYo9bcl_EOdDoGz1Jzyo8savIrn7c1b4PDAY9l5iTkOumQ83KBjzehC-UDTDDm26S8xhYQCFwhgpb2rmdGXsU-h3XUytTDc4"
];

const Gallery: React.FC = () => {
    return (
        <section className="bg-background-light dark:bg-background-dark py-20 px-4 md:px-20">
            <div className="flex items-center justify-between mb-12">
                <h2 className="serif-title text-2xl md:text-3xl font-bold text-primary">Những Khoảnh Khắc Gia Đình</h2>
                <div className="h-px flex-1 bg-primary/20 mx-8"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`aspect-square bg-cover bg-center rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform ${idx % 2 !== 0 ? 'md:mt-8' : ''}`}
                        style={{ backgroundImage: `url("${img}")` }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
