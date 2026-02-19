
import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

export function useGyroscope() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        const handleOrientation = (event: DeviceOrientationEvent) => {
            const beta = event.beta ? Math.min(Math.max(event.beta, -45), 45) : 0; // X-axis tilt (-180 to 180)
            const gamma = event.gamma ? Math.min(Math.max(event.gamma, -45), 45) : 0; // Y-axis tilt (-90 to 90)

            // Normalize to -0.5 to 0.5 range
            x.set(gamma / 90);
            y.set(beta / 90);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const xPct = (mouseX / width) - 0.5;
            const yPct = (mouseY / height) - 0.5;

            x.set(xPct);
            y.set(yPct);
        };

        // Detect if device supports orientation (mobile)
        if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
            window.addEventListener("deviceorientation", handleOrientation);
        } else {
            // Fallback to mouse movement for desktop
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            window.removeEventListener("deviceorientation", handleOrientation);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [x, y]);

    return { x, y };
}
