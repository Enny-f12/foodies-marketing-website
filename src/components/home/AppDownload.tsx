import Image from "next/image";
import Link from "next/link";
import { Apple, Play } from "lucide-react";

export default function AppDownload() {
    return (
       
        <section
            className="py-20 px-6 text-center"
            style={{ background: "var(--color-surface-ink)" }}
        >
            <div className="max-w-2xl mx-auto">

                {/* Headline */}
                <h2
                    className="font-display font-bold leading-none mb-4"
                    style={{
                        fontSize: "clamp(2rem,4vw,3rem)",
                        letterSpacing: "-0.03em",
                        color: "var(--color-on-ink)",
                    }}
                >
                    Ready to Experience the Future of Nigerian Dining?
                </h2>

                {/* Subtext */}
                <p
                    className="mb-8 text-sm leading-relaxed"
                    style={{ color: "var(--color-on-ink-muted)" }}
                >
                    Download the Foodies app today and get{" "}
                    <strong>₦2,000 off</strong> your first order.
                </p>

                {/* App Buttons */}
                <div
                    className="fade-up flex flex-wrap items-center gap-3 mb-4 mx-auto justify-center"

                >
                    {/* App Store */}
                    <Link
                        href="/download"
                        className="btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 font-bold rounded-xl transition-all hover:opacity-90 active:scale-95"
                        style={{
                            background: "var(--color-on-ink)",
                            color: "var(--color-surface-ink)",
                        }}
                    >
                        {/* Clean Lucide Apple Icon */}
                        <Apple size={22} strokeWidth={2.5} fill="currentColor" />

                        <span className="flex flex-col text-left leading-tight">
                            <span className="text-[9px] uppercase tracking-widest opacity-60 font-semibold">
                                Download on the
                            </span>
                            <span className="text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-helvena)" }}>
                                App Store
                            </span>
                        </span>
                    </Link>

                    {/* Google Play */}
                    <Link
                        href="/download"
                        className="btn-shimmer inline-flex items-center gap-3 px-6 py-3.5 font-bold rounded-xl transition-all hover:opacity-90 active:scale-95"
                        style={{
                            background: "var(--color-primary)",
                            color: "var(--color-on-ink)",
                        }}
                    >
                        {/* Clean Lucide Play Icon */}
                        <Play size={20} strokeWidth={2.5} fill="currentColor" />

                        <span className="flex flex-col text-left leading-tight">
                            <span className="text-[9px] uppercase tracking-widest opacity-80 font-semibold">
                                Get it on
                            </span>
                            <span className="text-sm font-black tracking-tight" style={{ fontFamily: "var(--font-helvena)" }}>
                                Google Play
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Divider */}
                <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-on-ink-muted)" }}
                >
                    Or scan to download:
                </p>

                {/* QR Code */}
                <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 flex items-center justify-center rounded-lg bg-white p-2">
                        <Image
                            src="/qr-code.png"
                            alt="Scan to download Foodies app"
                            width={112}
                            height={112}
                        />
                    </div>
                </div>

                {/* Terms */}
                <p
                    className="text-xs"
                    style={{ color: "var(--color-on-ink-muted)" }}
                >
                    *Terms and conditions apply. New users only.
                </p>

            </div>
        </section>
    );
}