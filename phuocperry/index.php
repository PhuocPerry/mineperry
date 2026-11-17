<?php
// =========================================================================
// CẤU HÌNH THÔNG TIN CÁ NHÂN & LIÊN KẾT (CHỈNH SỬA TẠI ĐÂY)
// =========================================================================
$profile = [
    'name' => 'PhuocPerry',
    'handle' => '@phuocperry',
    'verified' => true, // Đổi thành false nếu không muốn hiện tích xanh
    'bio' => 'Digital Creator • Automation & Tech Enthusiast 🚀<br>Cung cấp dịch vụ & giải pháp công nghệ tự động.',
    // Thay link ảnh đại diện của bạn vào đây
    'avatar' => 'https://ui-avatars.com/api/?name=Phuoc+Perry&background=0D8ABC&color=fff&size=256&bold=true',
    'status_text' => 'Đang hoạt động • Hỗ trợ 24/7',
];

// Danh sách các nút liên kết (Có thể thêm, bớt hoặc đổi thứ tự tùy ý)
$links = [
    [
        'title' => 'Website Chính Thức',
        'subtitle' => 'mineperry.com - Hệ thống tự động',
        'url' => 'https://mineperry.com',
        'icon' => 'fa-solid fa-globe',
        'color' => '#38bdf8', // Xanh dương sáng
        'highlight' => true, // Hiệu ứng nổi bật viền phát sáng
    ],
    [
        'title' => 'Nhắn tin qua Zalo',
        'subtitle' => 'Tư vấn & hỗ trợ trực tiếp',
        'url' => 'https://zalo.me/',
        'icon' => 'fa-solid fa-comment-dots',
        'color' => '#0068ff',
        'highlight' => false,
    ],
    [
        'title' => 'Tham gia Cộng đồng Discord',
        'subtitle' => 'Giao lưu, cập nhật thông báo mới nhất',
        'url' => 'https://discord.com/',
        'icon' => 'fa-brands fa-discord',
        'color' => '#5865F2',
        'highlight' => false,
    ],
    [
        'title' => 'Kênh TikTok',
        'subtitle' => 'Video chia sẻ mẹo hay & công nghệ',
        'url' => 'https://tiktok.com/',
        'icon' => 'fa-brands fa-tiktok',
        'color' => '#ff0050',
        'highlight' => false,
    ],
    [
        'title' => 'GitHub Projects',
        'subtitle' => 'Mã nguồn mở & dự án cá nhân',
        'url' => 'https://github.com/phuocperry',
        'icon' => 'fa-brands fa-github',
        'color' => '#e2e8f0',
        'highlight' => false,
    ],
];

// Các icon mạng xã hội nhỏ ở hàng dưới cùng
$socials = [
    ['icon' => 'fa-brands fa-facebook-f', 'url' => 'https://facebook.com'],
    ['icon' => 'fa-brands fa-youtube', 'url' => 'https://youtube.com'],
    ['icon' => 'fa-brands fa-telegram', 'url' => 'https://t.me'],
    ['icon' => 'fa-solid fa-envelope', 'url' => 'mailto:contact@example.com'],
];
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <!-- Khóa zoom trên điện thoại để giao diện luôn cố định như App -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title><?= htmlspecialchars($profile['name']) ?> | Bio Link</title>
    
    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https
