export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black gap-4">
      <div className="relative">
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse">
          ibrahim.com
        </h1>
        <h1 className="absolute top-0 left-0 text-7xl md:text-9xl font-black text-cyan-400 blur-xl opacity-70 animate-pulse">
          ibrahim.com
        </h1>
      </div>
      
      <p className="text-xl md:text-2xl text-gray-300 tracking-[0.3em] animate-pulse">
        FUTURE OF E-COMMERCE
      </p>
    </main>
  )
}1