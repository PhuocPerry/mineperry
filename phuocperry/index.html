<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <!-- Khóa zoom trên điện thoại để giao diện luôn cố định như App -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>PhuocPerry | Bio Link</title>
    
    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <style>
        :root {
            --bg-outer: #050508;
            --bg-phone: #0b0f19;
            --card-bg: rgba(255, 255, 255, 0.04);
            --card-border: rgba(255, 255, 255, 0.09);
            --card-hover: rgba(255, 255, 255, 0.08);
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #38bdf8;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-outer);
            color: var(--text-main);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100dvh;
            overflow-x: hidden;
        }

        /* Khung cố định chuẩn giao diện điện thoại */
        .mobile-viewport {
            width: 100%;
            max-width: 430px; /* Kích thước chuẩn iPhone Pro Max */
            min-height: 100dvh;
            background: var(--bg-phone);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            padding: 28px 20px 24px;
            box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
        }

        /* Khi mở trên màn hình PC sẽ bo góc như khung điện thoại */
        @media (min-width: 450px) {
            body {
                padding: 20px 0;
                background: radial-gradient(circle at center, #111827 0%, #030712 100%);
            }
            .mobile-viewport {
                min-height: 840px;
                max-height: 880px;
                border-radius: 38px;
                border: 1px solid rgba(255, 255, 255, 0.12);
                overflow-y: auto;
            }
            /* Ẩn thanh cuộn cho gọn */
            .mobile-viewport::-webkit-scrollbar {
                display: none;
            }
        }

        /* Hiệu ứng đốm sáng nền (Ambient Glow) */
        .glow-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(75px);
            z-index: 0;
            pointer-events: none;
            opacity: 0.45;
        }
        .orb-1 {
            width: 240px;
            height: 240px;
            background: #2563eb;
            top: -60px;
            left: -60px;
        }
        .orb-2 {
            width: 220px;
            height: 220px;
            background: #7c3aed;
            bottom: 80px;
            right: -70px;
        }

        .content-wrapper {
            position: relative;
            z-index: 1;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        /* Thanh trạng thái trên cùng */
        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            background: rgba(16, 185, 129, 0.12);
            border: 1px solid rgba(16, 185, 129, 0.25);
            color: #34d399;
            font-size: 11.5px;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 99px;
        }

        .status-dot {
            width: 7px;
            height: 7px;
            background: #10b981;
            border-radius: 50%;
            box-shadow: 0 0 8px #10b981;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(0.95); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.8; }
        }

        .share-btn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            color: var(--text-main);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .share-btn:active {
            transform: scale(0.9);
            background: var(--card-hover);
        }

        /* Khu vực Profile */
        .profile-section {
            text-align: center;
            margin-bottom: 26px;
        }

        .avatar-ring {
            width: 98px;
            height: 98px;
            margin: 0 auto 14px;
            padding: 3px;
            border-radius: 50%;
            background: linear-gradient(135deg, #38bdf8, #818cf8, #c084fc);
            box-shadow: 0 10px 25px -5px rgba(56, 189, 248, 0.35);
        }

        .avatar-img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--bg-phone);
            display: block;
        }

        .profile-name {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: -0.3px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .verified-icon {
            color: #38bdf8;
            font-size: 16px;
        }

        .profile-handle {
            font-size: 13px;
            color: var(--text-muted);
            margin-top: 2px;
            font-weight: 500;
        }

        .profile-bio {
            font-size: 13.5px;
            line-height: 1.55;
            color: #cbd5e1;
            margin-top: 10px;
            padding: 0 8px;
        }

        /* Danh sách thẻ Link */
        .links-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 26px;
        }

        .link-card {
            display: flex;
            align-items: center;
            padding: 13px 15px;
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            border-radius: 18px;
            text-decoration: none;
            color: var(--text-main);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            transition: transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.2s ease, border-color 0.2s ease;
            position: relative;
            overflow: hidden;
        }

        .link-card:active {
            transform: scale(0.97);
            background: var(--card-hover);
        }

        /* Nút nổi bật (Highlight) */
        .link-card.is-highlight {
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.14), rgba(129, 140, 248, 0.1));
            border: 1px solid rgba(56, 189, 248, 0.4);
            box-shadow: 0 8px 24px -6px rgba(56, 189, 248, 0.2);
        }

        .link-icon-box {
            width: 44px;
            height: 44px;
            border-radius: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 19px;
            flex-shrink: 0;
            margin-right: 14px;
            background: rgba(255, 255, 255, 0.06);
        }

        .link-info {
            flex: 1;
            min-width: 0;
        }

        .link-title {
            font-size: 15px;
            font-weight: 700;
            color: var(--text-main);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .link-subtitle {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .link-arrow {
            color: var(--text-muted);
            font-size: 13px;
            margin-left: 10px;
            transition: transform 0.2s ease;
        }

        .link-card:hover .link-arrow {
            transform: translateX(3px);
            color: var(--text-main);
        }

        /* Hàng icon mạng xã hội dưới cùng */
        .socials-row {
            display: flex;
            justify-content: center;
            gap: 14px;
            margin-top: auto;
            padding-top: 8px;
        }

        .social-btn {
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--card-bg);
            border: 1px solid var(--card-border);
            color: var(--text-main);
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 17px;
            transition: all 0.2s ease;
        }

        .social-btn:active {
            transform: scale(0.9);
            background: var(--card-hover);
        }

        .footer-copy {
            text-align: center;
            font-size: 11px;
            color: #64748b;
            margin-top: 18px;
        }

        /* Thông báo Toast khi bấm sao chép link */
        .toast {
            position: fixed;
            bottom: 28px;
            left: 50%;
            transform: translateX(-50%) translateY(80px);
            background: #f8fafc;
            color: #0f172a;
            font-size: 13px;
            font-weight: 700;
            padding: 10px 18px;
            border-radius: 99px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
            z-index: 99;
            pointer-events: none;
        }
        .toast.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    </style>
</head>
<body>

<div class="mobile-viewport">
    <!-- Hiệu ứng ánh sáng nền -->
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>

    <div class="content-wrapper">
        <!-- Thanh trạng thái & Nút chia sẻ -->
        <div class="top-bar">
            <div class="status-badge">
                <span class="status-dot"></span>
                <span>Đang hoạt động • Hỗ trợ 24/7</span>
            </div>
            <button class="share-btn" onclick="copyProfileLink()" title="Sao chép liên kết">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </button>
        </div>

        <!-- Thông tin cá nhân -->
        <div class="profile-section">
            <div class="avatar-ring">
                <!-- Thay link ảnh đại diện của bạn vào src bên dưới -->
                <img src="https://ui-avatars.com/api/?name=Phuoc+Perry&background=0D8ABC&color=fff&size=256&bold=true" alt="Avatar" class="avatar-img">
            </div>
            <h1 class="profile-name">
                PhuocPerry
                <i class="fa-solid fa-circle-check verified-icon"></i>
            </h1>
            <div class="profile-handle">@phuocperry</div>
            <p class="profile-bio">Digital Creator • Automation & Tech Enthusiast 🚀<br>Cung cấp dịch vụ & giải pháp công nghệ tự động.</p>
        </div>

        <!-- Danh sách liên kết -->
        <div class="links-container">
            <!-- Nút nổi bật (Highlight) -->
            <a href="https://mineperry.com" target="_blank" rel="noopener noreferrer" class="link-card is-highlight">
                <div class="link-icon-box" style="color: #38bdf8;">
                    <i class="fa-solid fa-globe"></i>
                </div>
                <div class="link-info">
                    <div class="link-title">Website Chính Thức</div>
                    <div class="link-subtitle">mineperry.com - Hệ thống tự động</div>
                </div>
                <i class="fa-solid fa-chevron-right link-arrow"></i>
            </a>

            <!-- Nút liên kết thường -->
            <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" class="link-card">
                <div class="link-icon-box" style="color: #0068ff;">
                    <i class="fa-solid fa-comment-dots"></i>
                </div>
                <div class="link-info">
                    <div class="link-title">Nhắn tin qua Zalo</div>
                    <div class="link-subtitle">Tư vấn & hỗ trợ trực tiếp</div>
                </div>
                <i class="fa-solid fa-chevron-right link-arrow"></i>
            </a>

            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" class="link-card">
                <div class="link-icon-box" style="color: #5865F2;">
                    <i class="fa-brands fa-discord"></i>
                </div>
                <div class="link-info">
                    <div class="link-title">Tham gia Cộng đồng Discord</div>
                    <div class="link-subtitle">Giao lưu, cập nhật thông báo mới nhất</div>
                </div>
                <i class="fa-solid fa-chevron-right link-arrow"></i>
            </a>

            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" class="link-card">
                <div class="link-icon-box" style="color: #ff0050;">
                    <i class="fa-brands fa-tiktok"></i>
                </div>
                <div class="link-info">
                    <div class="link-title">Kênh TikTok</div>
                    <div class="link-subtitle">Video chia sẻ mẹo hay & công nghệ</div>
                </div>
                <i class="fa-solid fa-chevron-right link-arrow"></i>
            </a>

            <a href="https://github.com/phuocperry" target="_blank" rel="noopener noreferrer" class="link-card">
                <div class="link-icon-box" style="color: #e2e8f0;">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div class="link-info">
                    <div class="link-title">GitHub Projects</div>
                    <div class="link-subtitle">Mã nguồn mở & dự án cá nhân</div>
                </div>
                <i class="fa-solid fa-chevron-right link-arrow"></i>
            </a>
        </div>

        <!-- Mạng xã hội phụ -->
        <div class="socials-row">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-btn">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-btn">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" class="social-btn">
                <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="mailto:contact@example.com" class="social-btn">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>

        <div class="footer-copy">
            © 2026 PhuocPerry. All rights reserved.
        </div>
    </div>
</div>

<!-- Thông báo copy link -->
<div id="toast" class="toast">✓ Đã sao chép liên kết Bio!</div>

<script>
    function copyProfileLink() {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: url
            }).catch(() => {});
        } else {
            navigator.clipboard.writeText(url).then(() => {
                const toast = document.getElementById('toast');
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2200);
            });
        }
    }
</script>

</body>
</html>
