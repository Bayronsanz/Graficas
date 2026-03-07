'use client'
import { useRouter } from "next/navigation";

export default function Home() {

   const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <button type="button" onClick={() => router.push('/conteo-productos')}> cargar grafico lineal</button>
        <button type="button" onClick={() => router.push('/total-productos')}> cargar grafico 2</button>
        <button type="button" onClick={() => router.push('/valores-productos')}> Cargar Grafico</button>

      </main>
    </div>
  );
}
