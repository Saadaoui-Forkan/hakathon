import Image from "next/image";

export default function Avatar({ src, fallback }: { src?: string, fallback?: string }) {
    return (
        <div className="rounded-full text-white flex-shrink-0 w-[40px] h-[40px] flex items-center justify-center bg-slate-800">
            {src ? <Image src={src} alt="" width={40} height={40} /> : fallback || "You"}
        </div>
    )
};
