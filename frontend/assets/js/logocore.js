async function loadComponent() {
    try {
        const response = await fetch('./frontend/assets/elements/logocore.html');
        if (!response.ok) throw new Error("Lỗi tải file");
        
        const data = await response.text();
        document.getElementById('load-logo').innerHTML = data;
    } catch (error) {
        console.error('Lỗi hệ thống:', error);
    }
}

loadComponent();