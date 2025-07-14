import Link from "next/link";
import {
  Camera,
  PencilLine,
  Settings,
  Refrigerator,
  BookOpenText,
} from "lucide-react";

export default function App() {
  return (
    <main className="w-screen h-screen bg-zinc-100 flex items-center justify-center">
      <div className="w-full h-full p-6 max-w-sm flex flex-col justify-between">
        {/* Header */}
        <header className="pt-6 text-center">
          <h1 className="text-3xl font-bold text-zinc-800 tracking-wide">
            Fryskoll
          </h1>
          <p className="text-sm text-zinc-500 mt-1">Smart frysloggning</p>
        </header>

        {/* Main Navigation */}
        <nav className="flex flex-col gap-5">
          {/* Lägg till: scanning */}
          <Link
            href="/scanning"
            className="flex items-center gap-3 px-4 py-3 bg-white shadow rounded-lg hover:bg-zinc-50 transition"
          >
            <Camera className="w-5 h-5 text-blue-600" />
            <span className="text-zinc-800 font-medium">
              Lägg till med kamera
            </span>
          </Link>

          {/* Lägg till: manuell */}
          <Link
            href="/manual-entry"
            className="flex items-center gap-3 px-4 py-3 bg-white shadow rounded-lg hover:bg-zinc-50 transition"
          >
            <PencilLine className="w-5 h-5 text-purple-600" />
            <span className="text-zinc-800 font-medium">
              Lägg till manuellt
            </span>
          </Link>

          {/* Min Frys */}
          <Link
            href="/my-freezer"
            className="flex items-center gap-3 px-4 py-3 bg-white shadow rounded-lg hover:bg-zinc-50 transition"
          >
            <Refrigerator className="w-5 h-5 text-emerald-600" />
            <span className="text-zinc-800 font-medium">Min frys</span>
          </Link>

          {/* Recept */}
          <Link
            href="/recipes"
            className="flex items-center gap-3 px-4 py-3 bg-white shadow rounded-lg hover:bg-zinc-50 transition"
          >
            <BookOpenText className="w-5 h-5 text-orange-600" />
            <span className="text-zinc-800 font-medium">Recept</span>
          </Link>
        </nav>

        {/* Footer */}
        <footer className="pb-6 text-center">
          <Link href="/settings">
            <div className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-700 transition">
              <Settings className="w-5 h-5" />
              <span className="text-sm">Inställningar</span>
            </div>
          </Link>
        </footer>
      </div>
    </main>
  );
}
