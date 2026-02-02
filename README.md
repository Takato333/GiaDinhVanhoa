# Dự án Gia Đình Văn Hóa - TypeScript Migration

Dự án này đã được chuyển đổi từ một tệp HTML duy nhất sang một cấu trúc ứng dụng React + TypeScript hiện đại, sử dụng Vite và Tailwind CSS.

## Cấu trúc thư mục
- `src/components/`: Chứa các thành phần giao diện tách biệt (Header, Hero, Intro, Categories, Gallery, Footer).
- `src/App.tsx`: Thành phần chính lắp ráp các bộ phận của website.
- `src/index.css`: Định nghĩa các kiểu dáng Tailwind và các lớp tùy chỉnh (silk-texture, serif-title).
- `tailwind.config.js`: Cấu hình hệ thống màu sắc (primary, traditional-brown, ivory) và phông chữ (Lexend, Noto Serif).

## Công nghệ sử dụng
- **React 18**: Thư viện UI.
- **TypeScript**: Đảm bảo an toàn kiểu dữ liệu.
- **Tailwind CSS**: Framework CSS tiện lợi cho việc thiết kế giao diện cao cấp.
- **Vite**: Công cụ build siêu nhanh.

## Hướng dẫn chạy dự án
1. Mở terminal trong thư mục `GDVH_web`.
2. Chạy lệnh: `npm install` để cài đặt các thư viện cần thiết.
3. Chạy lệnh: `npm run dev` để bắt đầu môi trường phát triển.
4. Truy cập vào địa chỉ localhost hiển thị trên terminal.

## Các tính năng nổi bật
- **Giao diện đẳng cấp**: Sự kết hợp giữa tông màu truyền thống (Brown/Ivory) và phong cách thiết kế hiện đại.
- **Responsive**: Tối ưu hóa cho mọi thiết bị từ điện thoại đến máy tính để bàn.
- **Dark Mode**: Hỗ trợ chế độ tối với bảng màu được tinh chỉnh riêng.
- **Cấu trúc linh hoạt**: Dễ dàng mở rộng thêm các chương học hoặc tài liệu mới.
