import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-top space-y-10 p-24">
      <div>
        UPIŠITE URL I PROVJERITE INTERNETSKU TRGOVINU
      </div>
      <form className="flex items-center gap-4">
        <input type="text" className="border border-gray-300 rounded px-4 py-2" />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
          Submit
        </button>
      </form>
    </main>
  );
}
