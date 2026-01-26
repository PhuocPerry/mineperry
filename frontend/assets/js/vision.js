// Vision Mind Map - Draw SVG Lines
document.addEventListener('DOMContentLoaded', function() {
    const svgContainer = document.querySelector('.vision-svg');
    if (!svgContainer) return;

    function drawMindMap() {
        // Clear previous SVG
        svgContainer.innerHTML = '';

        // Create SVG element
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 1100 700');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

        // Create defs for gradients and filters
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

        // Gradient for lines
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'redGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:#7a0000;stop-opacity:0.9');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:#c41e1e;stop-opacity:0.9');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);

        // Glow filter
        const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        filter.setAttribute('id', 'glow');
        const blur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
        blur.setAttribute('stdDeviation', '2.5');
        blur.setAttribute('result', 'coloredBlur');
        const merge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
        const mergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
        mergeNode1.setAttribute('in', 'coloredBlur');
        const mergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
        mergeNode2.setAttribute('in', 'SourceGraphic');
        merge.appendChild(mergeNode1);
        merge.appendChild(mergeNode2);
        filter.appendChild(blur);
        filter.appendChild(merge);
        defs.appendChild(filter);

        svg.appendChild(defs);

        // Center coordinates
        const centerX = 550;
        const centerY = 350;

        // Node positions in hexagon pattern - calculated from CSS positioning
        // These match the CSS positioning with 140px node size
        const nodePositions = [
            { x: 550, y: 91 },      // Top (Excellence)
            { x: 755, y: 224 },     // Top-Right (Security)
            { x: 755, y: 476 },     // Bottom-Right (Community)
            { x: 550, y: 609 },     // Bottom (Innovation)
            { x: 345, y: 476 },     // Bottom-Left (24/7 Support)
            { x: 345, y: 224 }      // Top-Left (Gaming First)
        ];

        // Draw connecting lines with animation
        nodePositions.forEach((pos, index) => {
            // Draw glow line (background)
            const glowLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            glowLine.setAttribute('d', `M ${centerX} ${centerY} L ${pos.x} ${pos.y}`);
            glowLine.setAttribute('stroke', '#7a0000');
            glowLine.setAttribute('stroke-width', '8');
            glowLine.setAttribute('fill', 'none');
            glowLine.setAttribute('stroke-linecap', 'round');
            glowLine.setAttribute('opacity', '0.2');
            glowLine.setAttribute('filter', 'url(#glow)');
            
            // Animate glow
            const glowLength = glowLine.getTotalLength();
            glowLine.style.strokeDasharray = glowLength;
            glowLine.style.strokeDashoffset = glowLength;
            glowLine.style.transition = `stroke-dashoffset 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.12}s`;
            
            svg.appendChild(glowLine);

            // Main line
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            line.setAttribute('d', `M ${centerX} ${centerY} L ${pos.x} ${pos.y}`);
            line.setAttribute('class', 'branch-line');
            line.setAttribute('stroke-width', '2.5');
            
            svg.appendChild(line);

            // Animate main line
            const length = line.getTotalLength();
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;
            line.style.transition = `stroke-dashoffset 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.12}s`;
            
            // Trigger animation
            setTimeout(() => {
                line.style.strokeDashoffset = '0';
                glowLine.style.strokeDashoffset = '0';
            }, 50);
        });

        svgContainer.appendChild(svg);
    }

    // Draw on load
    drawMindMap();

    // Redraw on resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(drawMindMap, 300);
    });
});
