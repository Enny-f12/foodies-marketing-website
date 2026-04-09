"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AppStoreButtons } from "../ui/AppStoreButtons";

/* ── Easing ── */
type Bezier = [number, number, number, number];
const spring1: Bezier = [0.22, 0.68, 0, 1.1];

const screens = [
    { id: 0, src: "/assets/download/Splash screen.png",     label: "Splash"     },
    { id: 1, src: "/assets/download/Welcome screen.png",    label: "Welcome 1"  },
    { id: 2, src: "/assets/download/Splash screen (1).png", label: "Welcome 2"  },
    { id: 3, src: "/assets/download/Splash screen (2).png", label: "Tracking"   },
    { id: 4, src: "/assets/download/Welcome screen (1).png",label: "Welcome 3"  },
    { id: 5, src: "/assets/download/Get Started.png",       label: "Get Started"},
    { id: 6, src: "/assets/download/Create Account.png",    label: "Sign Up"    },
    { id: 7, src: "/assets/download/Home (1).png",          label: "Home"       },
];

/* ── Smooth crossfade + slide — no black gap ── */
const variants = {
    enter:  {
        x: "100%",
        opacity: 1,                                                      // starts fully visible
    },
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: spring1 },
    },
    exit:   {
        x: "-30%",                                                       // exits slower, shorter distance
        opacity: 0,                                                      // fades out so no black flash
        transition: { duration: 0.7, ease: spring1 },
    },
};

const wordUnmaskContainer = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const wordUnmask = {
    hidden:  { opacity: 0, y: 44, skewY: 3 },
    visible: { opacity: 1, y: 0,  skewY: 0, transition: { duration: 0.7, ease: spring1 } },
};

export default function DownloadHero() {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % screens.length);
        }, 3000);                                                        // 3s gives transition room to breathe
    };

    useEffect(() => {
        startTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, []);

    const goTo = (idx: number) => {
        setCurrent(idx);
        startTimer();
    };

    return (
        <section
            className="relative overflow-hidden"
            style={{ background: "var(--color-surface-ink)", paddingTop: "72px" }}
        >
            {/* Ambient glow */}
            <motion.div
                className="absolute pointer-events-none"
                style={{
                    width:        "600px",
                    height:       "600px",
                    background:   "var(--color-primary)",
                    filter:       "blur(140px)",
                    borderRadius: "50%",
                    top:          "-100px",
                    right:        "-100px",
                }}
                animate={{ opacity: [0.08, 0.16, 0.08] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div
                className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-12 flex-wrap"
                style={{ padding: "clamp(4rem,8vw,7rem) clamp(1.25rem,5vw,3rem) clamp(3rem,6vw,5rem)" }}
            >

                {/* ══ LEFT — text content ══ */}
                <div className="flex-1 min-w-70 w-full sm:w-2/3">

                    <motion.h1
                        className="font-display font-bold leading-none mb-6"
                        style={{
                            textTransform: "capitalize",
                            fontSize:      "clamp(2.8rem,7vw,6rem)",
                            letterSpacing: "-0.03em",
                            color:         "var(--color-on-ink)",
                        }}
                        variants={wordUnmaskContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {["Download", "the"].map((w) => (
                            <span
                                key={w}
                                style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em" }}
                            >
                                <motion.span style={{ display: "inline-block" }} variants={wordUnmask}>
                                    {w}
                                </motion.span>
                            </span>
                        ))}
                        <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.3em" }}>
                            <motion.span style={{ display: "inline-block", color: "var(--color-primary)" }} variants={wordUnmask}>
                                Foodies
                            </motion.span>
                        </span>
                        <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
                            <motion.span style={{ display: "inline-block" }} variants={wordUnmask}>
                                App
                            </motion.span>
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mb-10 leading-relaxed"
                        style={{
                            fontSize: "clamp(0.95rem,1.8vw,1.05rem)",
                            color:    "var(--color-on-ink-muted)",
                            maxWidth: "420px",
                        }}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: spring1, delay: 0.55 }}
                    >
                        Your passport to premium Nigerian dining, now in your pocket.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-2 gap-3 mb-10"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: spring1, delay: 0.7 }}
                    >
                        {[
                            "Seamless food ordering",
                            "Live delivery tracking",
                            "Table reservations",
                            "Loyalty rewards & offers",
                        ].map((feat) => (
                            <div key={feat} className="flex items-center gap-3">
                                <div
                                    className="flex items-center justify-center shrink-0"
                                    style={{
                                        width:        "20px",
                                        height:       "20px",
                                        borderRadius: "50%",
                                        background:   "rgba(225,11,28,0.15)",
                                    }}
                                >
                                    <svg width="10" height="10" viewBox="0 0 10 10">
                                        <path d="M1.5 5l2 2 5-4" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span style={{ fontSize: "0.9rem", color: "var(--color-on-ink-muted)" }}>{feat}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: spring1, delay: 0.85 }}
                    >
                        <AppStoreButtons align="left" />

                        
                                {/* Divider text */}
                                <motion.p
                                  className="text-sm mb-4 mt-4"
                                  style={{ color: "var(--color-on-ink-muted)" }}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.6, ease: spring1, delay: 0.85 }}
                                >
                                  Or scan to download:
                                </motion.p>
                        
                                {/* QR Code — pops in with rotation */}
                                <motion.div
                                  className="flex justify-left mb-2"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.6, ease: spring1, delay: 0.85 }}
                                >
                                  <motion.div
                                    className="w-24 h-24 flex items-center justify-center rounded-lg bg-white p-2"
                                    whileHover={{
                                      scale: 1.08,
                                      rotate: 2,
                                      boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
                                      transition: { duration: 0.3, ease: spring1 },
                                    }}
                                  >
                                    <Image
                                      src="https://i.pinimg.com/1200x/0e/97/27/0e972709749e682fb5bf8d85dcb2e35d.jpg"
                                      alt="Scan to download Foodies app"
                                      width={112}
                                      height={112}
                                    />
                                  </motion.div>
                                </motion.div>
                    </motion.div>
                </div>

                {/* ══ RIGHT — animated phone ══ */}
                <div className="flex flex-col items-center gap-5 shrink-0 w-full sm:w-1/3">

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ position: "relative" }}
                    >
                        {/* gradient ring */}
                        <div style={{
                            position:     "absolute",
                            inset:        "-2px",
                            borderRadius: "44px",
                            background:   "linear-gradient(145deg, rgba(225,11,28,0.5), rgba(255,255,255,0.04), rgba(225,11,28,0.25))",
                            zIndex:       0,
                        }} />

                        {/* phone shell */}
                        <div style={{
                            width:        "240px",
                            height:       "490px",
                            background:   "#0a0a0a",
                            borderRadius: "40px",
                            border:       "1.5px solid rgba(255,255,255,0.08)",
                            position:     "relative",
                            overflow:     "hidden",
                            zIndex:       1,
                            boxShadow:    "0 50px 100px rgba(0,0,0,0.7), inset 0 0 0 0.5px rgba(255,255,255,0.04)",
                        }}>

                            {/* notch */}
                            <div style={{
                                position:     "absolute",
                                top:          0,
                                left:         "50%",
                                transform:    "translateX(-50%)",
                                width:        "75px",
                                height:       "22px",
                                background:   "#0a0a0a",
                                borderRadius: "0 0 13px 13px",
                                zIndex:       30,
                            }} />

                            {/* ── screen viewport ── */}
                            <div style={{ position: "absolute", inset: 0, borderRadius: "38px", overflow: "hidden" }}>
                                <AnimatePresence initial={false} mode="sync">
                                    <motion.div
                                        key={current}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        style={{
                                            position: "absolute",
                                            inset:    0,
                                            // new screen always renders on top during transition
                                            zIndex:   1,
                                        }}
                                    >
                                        <Image
                                            src={screens[current].src}
                                            alt={screens[current].label}
                                            fill
                                            className="object-cover object-top"
                                            sizes="240px"
                                            priority={current === 0}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* home bar */}
                            <div style={{
                                position:     "absolute",
                                bottom:       "6px",
                                left:         "50%",
                                transform:    "translateX(-50%)",
                                width:        "60px",
                                height:       "3px",
                                background:   "rgba(255,255,255,0.3)",
                                borderRadius: "2px",
                                zIndex:       30,
                            }} />
                        </div>

                        {/* side buttons */}
                        <div style={{ position: "absolute", left: "-5px", top: "80px",  width: "3px", height: "24px", background: "rgba(255,255,255,0.1)", borderRadius: "2px 0 0 2px" }} />
                        <div style={{ position: "absolute", left: "-5px", top: "112px", width: "3px", height: "24px", background: "rgba(255,255,255,0.1)", borderRadius: "2px 0 0 2px" }} />
                        <div style={{ position: "absolute", right: "-5px", top: "96px", width: "3px", height: "36px", background: "rgba(255,255,255,0.1)", borderRadius: "0 2px 2px 0" }} />
                    </motion.div>

                    {/* dot indicators */}
                    <div className="flex items-center gap-1.5">
                        {screens.map((s, i) => (
                            <motion.button
                                key={s.id}
                                onClick={() => goTo(i)}
                                animate={{
                                    width:      i === current ? 20 : 6,
                                    background: i === current ? "var(--color-primary)" : "rgba(255,255,255,0.2)",
                                }}
                                transition={{ duration: 0.3 }}
                                style={{ height: "3px", borderRadius: "2px", border: "none", padding: 0, cursor: "pointer" }}
                            />
                        ))}
                    </div>

                    {/* progress bar */}
                    <div style={{ width: "240px", height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}>
                        <motion.div
                            key={current}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "linear" }}
                            style={{ height: "100%", background: "var(--color-primary)", borderRadius: "1px" }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}