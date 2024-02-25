import { trending_data } from "@/data/trending";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-500">
      <section className=" max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-white text-5xl">Find your next Stay</h2>
        <h3 className="text-white py-5 text-xl">
          Anywhere in the world at the lowest prices and much much more..
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        {/* Search Form*/}
      </section>

      <section className="max-w-7xl mx-auto p-6 m-10 bg-white rounded-t-lg ">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            These are some of the most popular choices...
          </p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />

              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
