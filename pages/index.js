import Link from "next/link";
export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ConstatPro 🚗</h1>
      <Link href="/upload">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Créer un constat
        </button>
      </Link>
    </div>
  );
}