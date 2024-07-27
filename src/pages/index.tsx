import DefaultLayout from "@/layouts/default";

import Table from "@/components/Table";
import { Counter } from "@/components/counter/counter";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl2 text-center justify-center mb-6">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <h2 className="text-center text-4xl font-bold text-pretty text-gray-700 dark:text-gray-50 sm:text-7xl">
              Gaming UP <br />
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-gray-700 to-purple-500 bg-[100%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:to-violet-400">
                SoloQ Challenge
              </span>
            </h2>

            <span className="font-semibold inline-flex animate-background-shine bg-[linear-gradient(110deg,#374151,45%,#a855f7,55%,#374151)] dark:bg-[linear-gradient(110deg,#f3e8ff,45%,#8b5cf6,55%,#f3e8ff)] bg-[length:250%_100%] bg-clip-text text-xl sm:text-2xl text-transparent">
              Fomentamos la unión y diversión a través de los videojuegos
            </span>

            <p className="dark:text-gray-50 text-gray-700 text-sm">Comunidad gamer de la <span className="text-primary">Universidad del Pacífico </span></p>


          </div>
        </div>

        <div className="flex flex-col items-center mt-4">
          <p className="tracking-widest mb-2 text-gray-700 dark:text-gray-50">El desafío termina en:</p>
          <Counter />
        </div>

        
      </section>

      <Table />
    </DefaultLayout>
  );
}
