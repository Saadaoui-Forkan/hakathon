import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-6"
      style={{
        backgroundImage: 'url(/home-bg.jpg)',
      }}
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-[#610072] to-[#FFFFFF] opacity-50"></div>
      <div className="w-full max-w-2xl text-center z-10">
        <button className="absolute top-8 right-6 bg-crystalTeal text-pureWhite px-6 py-1 rounded-xl font-semibold text-sm">
          Log in
        </button>
        <h1 className="text-pureWhite text-xl font-bold my-8">
          Learn through discussion - every question takes you to a new level
        </h1>
        <Link href={'/specializations'} className="bg-electricMagenta text-pureWhite px-12 py-2 rounded-[15px] font-bold">
          Start Now
        </Link>
      </div>
    </div>
  );
}
