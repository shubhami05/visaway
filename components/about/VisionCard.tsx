
import { Eye } from "lucide-react"

export default function VisionCard() {
    return (
        <section className="py-16 md:py-20 bg-white dark:bg-gray-950">
            <div className="container-custom max-w-4xl">
                <div className="bg-dark rounded-3xl px-8 py-14 md:px-16 md:py-20 text-center relative overflow-hidden">

                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-center mb-4">
                            <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center">
                                <Eye size={18} className="text-primary" />
                            </div>
                        </div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-6 block">
                            Our Vision
                        </span>
                        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-snug">
                            "To redefine educational consulting as a journey of{" "}
                            <span className="text-primary">discovery</span> rather than just
                            a destination, ensuring every student has the clarity and courage
                            to pursue their highest potential."
                        </blockquote>
                        <p className="mt-8 text-sm tracking-widest uppercase text-gray-500">
                            — Jasmin Patel
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}