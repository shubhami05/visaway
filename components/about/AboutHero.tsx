import Image from "next/image"
import { BadgeCheck, Users } from "lucide-react"

const BADGES = [
    { icon: BadgeCheck, label: "10+ Years Experience" },
    { icon: Users, label: "500+ Students Guided" },
]

export default function AboutHero() {
    return (
        <section className="bg-offwhite dark:bg-gray-900 py-16 md:py-24">
            <div className="container-custom flex flex-col md:flex-row items-center gap-12">

                {/* Photo */}
                <div className="shrink-0">
                    <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/12066361/pexels-photo-12066361.jpeg"
                            alt="Jasmin Patel – Founder and Educational Consultant"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                {/* Text */}
                <div>
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                        Founder and Educational Consultant
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight mb-4">
                        I'm Jasmin Patel.
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
                        With over a decade of experience in academic advisory and
                        institutional growth, I have dedicated my career to demystifying
                        the educational journey for students and families worldwide.
                    </p>
                    {/* Badge pills */}
                    <div className="flex flex-wrap gap-3">
                        {BADGES.map((b) => (
                            <div
                                key={b.label}
                                className="flex items-center gap-2 bg-primary-light dark:bg-primary/20 text-primary text-sm font-medium px-4 py-2 rounded-full"
                            >
                                <b.icon size={15} />
                                {b.label}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}