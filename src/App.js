import { useState } from "react";

const categories = ["Todos", "Muebles", "Decoración", "Rejas", "Portones"];

const productsData = [
  {
    id: 1,
    name: "Mesa de hierro forjado",
    description: "Mesa artesanal con acabado envejecido.",
    image: "https://via.placeholder.com/300x200?text=Mesa",
    category: "Muebles"
  },
  {
    id: 2,
    name: "Farol de pared",
    description: "Farol rústico para exteriores.",
    image: "https://via.placeholder.com/300x200?text=Farol",
    category: "Decoración"
  },
  {
    id: 3,
    name: "Reja clásica",
    description: "Reja forjada con diseño ornamental.",
    image: "https://via.placeholder.com/300x200?text=Reja",
    category: "Rejas"
  }
];

export default function HomePage() {
  const [category, setCategory] = useState("Todos");

  const filteredProducts =
    category === "Todos"
      ? productsData
      : productsData.filter((p) => p.category === category);

  return (
    <main className="min-h-screen bg-[#f7f2ec] text-[#3a2e25] p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-serif font-bold">Casa Rústica</h1>
        <p className="text-lg italic mt-2">Forjando calidad con alma artesanal</p>
      </header>

      <section className="flex justify-center gap-4 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              category === cat
                ? "bg-[#3a2e25] text-white"
                : "bg-transparent border-[#3a2e25] text-[#3a2e25] hover:bg-[#3a2e25] hover:text-white"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#e8dfd4] rounded-2xl shadow-md overflow-hidden"
          >
            <div className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm mb-2 text-[#5a4b3e]">{product.description}</p>
              <p className="text-sm italic text-[#7c6a5b]">Categoría: {product.category}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

