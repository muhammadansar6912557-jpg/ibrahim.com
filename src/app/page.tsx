export default function Home() {
  const products = [
    { id: 1, name: "Neon Headphones", price: "₨ 8,999", img: "🎧" },
    { id: 2, name: "RGB Keyboard", price: "₨ 12,500", img: "⌨️" },
    { id: 3, name: "Gaming Mouse", price: "₨ 5,500", img: "🖱️" },
    { id: 4, name: "Smart Watch", price: "₨ 15,999", img: "⌚" },
    { id: 5, name: "Wireless Speaker", price: "₨ 9,999", img: "🔊" },
    { id: 6, name: "Phone Stand", price: "₨ 2,500", img: "📱" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold text-center text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.9)] mb-4">
        ibrahim.com
      </h1>
      <p className="text-center text-gray-400 mb-16">FUTURE OF E-COMMERCE</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all">
            <div className="text-6xl text-center mb-4">{product.img}</div>
            <h3 className="text-xl font-bold text-cyan-300 mb-2">{product.name}</h3>
            <p className="text-2xl font-bold text-white mb-4">{product.price}</p>
            <button className="w-full bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(0,255,255,0.6)]">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}