"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, Volume2, VolumeX, Play } from "lucide-react";

export default function WrappedPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.error("Autoplay failed:", error);
            });
        }
    }, []);

    const handleStartWithSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            setIsMuted(false);
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setShowOverlay(false);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const closeWrapped = () => {
        router.push("/");
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden font-sans">
            <button
                onClick={closeWrapped}
                className="absolute top-6 right-6 z-[120] p-2 bg-black/40 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-xl border border-white/10 group"
                aria-label="Close"
            >
                <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
            </button>

            {/* Mute toggle for after overlay is gone */}
            {!showOverlay && (
                <button
                    onClick={toggleMute}
                    className="absolute bottom-6 right-6 z-[120] p-3 bg-black/40 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-all backdrop-blur-xl border border-white/10"
                >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
            )}

            {showOverlay && (
                <div className="absolute inset-0 z-[115] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center text-white p-6 text-center animate-in fade-in duration-700">
                    <div className="max-w-md space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                2025 WRAPPED
                            </h1>
                        </div>

                        <button
                            onClick={handleStartWithSound}
                            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-purple-600 rounded-full hover:bg-purple-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                        >
                            <Play className="w-6 h-6 mr-3 fill-current" />
                            <span>PLAY WITH SOUND</span>
                        </button>


                    </div>
                </div>
            )}

            <video
                ref={videoRef}
                className="h-full aspect-[9/16] object-cover pointer-events-none shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                src="/videos/wrapped2025.mp4"
                playsInline
                onEnded={() => setShowOverlay(true)}
            />

            {/* Decorative gradients */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/60" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
    );
}
