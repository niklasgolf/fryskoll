import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function App() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fryskoll</h1>
      <Button>Skapa ny vara</Button>
      <nav>
        <ul>
          <li>
            <Link href="/scanning">Scanning</Link>
          </li>
          <li>
            <Link href="/manual-entry">Manual Entry</Link>
          </li>
          <li>
            <Link href="/my-freezer">My Freezer</Link>
          </li>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
