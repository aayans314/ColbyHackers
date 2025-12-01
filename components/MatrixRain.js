import { useEffect, useRef } from 'react';

const MatrixRain = ({ color = '#0F0', speed = 50 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const columns = Math.floor(width / 20);
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()';

        const draw = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'; // Fade effect with bg-navy color
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#ededed'; // Text color (offwhite)
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];

                // Randomly vary the color for a "glitch" effect
                if (Math.random() > 0.98) {
                    ctx.fillStyle = '#ffffff'; // Bright white
                } else {
                    ctx.fillStyle = 'rgba(237, 237, 237, 0.3)'; // Dimmer offwhite
                }

                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, speed);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            // Re-initialize drops on resize to avoid gaps
            const newColumns = Math.floor(width / 20);
            for (let i = 0; i < newColumns; i++) {
                if (!drops[i]) drops[i] = Math.floor(Math.random() * height / 20);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, [color, speed]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-20"
            style={{ background: 'transparent' }}
        />
    );
};

export default MatrixRain;
