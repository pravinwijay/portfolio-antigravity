'use client';

import { useEffect, useRef } from 'react';

export function ParticleGalaxy() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;
        let animationFrameId: number;

        // Mouse tracking
        let mouseX = width / 2;
        let mouseY = height / 2;
        let isMouseActive = false;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            isMouseActive = true;
        };

        const handleMouseLeave = () => {
            isMouseActive = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        const particles: any[] = [];
        const numParticles = 400;

        for (let i = 0; i < numParticles; i++) {
            const dist = Math.pow(Math.random(), 1.5);
            const radius = dist * (Math.max(width, height) * 0.9);
            const armOffset = (i % 3) * ((Math.PI * 2) / 3);
            const angle = armOffset + (radius * 0.005) + (Math.random() * 1);
            const size = Math.random() * 2 + 0.5;
            const colors = ['#3B82F6', '#6366F1', '#8B5CF6', '#60A5FA', '#93C5FD', '#F8FAFC', '#2DD4BF'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const speed = (0.2 + Math.random() * 0.5) / (radius * 0.01 + 1);

            particles.push({
                angle,
                radius,
                size,
                color,
                speed,
                baseRadius: radius,
                opacity: 0,
                delay: Math.random() * 100,
                xOffset: 0,
                yOffset: 0,
            });
        }

        let frameCount = 0;

        const render = () => {
            const currentWidth = canvas.offsetWidth;
            const currentHeight = canvas.offsetHeight;

            if (canvas.width !== currentWidth || canvas.height !== currentHeight) {
                width = canvas.width = currentWidth;
                height = canvas.height = currentHeight;
            }

            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.classList.contains('dark');
            const cx = width / 2;
            const cy = height / 2;

            frameCount++;

            // Target center for the galaxy (shifts towards mouse slightly)
            const targetCx = isMouseActive ? cx + (mouseX - cx) * 0.05 : cx;
            const targetCy = isMouseActive ? cy + (mouseY - cy) * 0.05 : cy;

            particles.forEach((p) => {
                p.angle -= p.speed * 0.015;

                if (frameCount > p.delay && p.opacity < 1) {
                    p.opacity += 0.005;
                }

                let x = cx + Math.cos(p.angle) * p.radius;
                let y = cy + Math.sin(p.angle) * p.radius * 0.7;

                // Mouse interaction - Repulsion
                if (isMouseActive) {
                    const dx = mouseX - x;
                    const dy = mouseY - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    const repelRadius = 200;
                    if (dist < repelRadius) {
                        const force = (repelRadius - dist) / repelRadius;
                        p.xOffset -= (dx / dist) * force * 3;
                        p.yOffset -= (dy / dist) * force * 3;
                    }
                }

                // Return to original position smoothly
                p.xOffset += (0 - p.xOffset) * 0.05;
                p.yOffset += (0 - p.yOffset) * 0.05;

                x += p.xOffset;
                y += p.yOffset;

                // Overall galaxy shift based on mouse relative to center
                x += (targetCx - cx) * (1 - p.radius / (Math.max(width, height)));
                y += (targetCy - cy) * (1 - p.radius / (Math.max(width, height)));

                ctx.beginPath();
                ctx.arc(x, y, p.size, 0, Math.PI * 2);

                const maxRadius = Math.max(width, height) * 0.75;
                const distanceFade = p.radius > maxRadius * 0.6
                    ? Math.max(0, 1 - ((p.radius - maxRadius * 0.6) / (maxRadius * 0.4)))
                    : 1;

                ctx.fillStyle = p.color;
                const baseAlpha = isDark ? 0.8 : 0.6;
                ctx.globalAlpha = distanceFade * p.opacity * baseAlpha;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    );
}
