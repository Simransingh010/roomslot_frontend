import Link from "next/link";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50">
      <ul>
        <div className="container-fluid py-3">
          <div className="row flex items-center justify-between w-full">
            <div>
              <Link href="/" className="flex items-center space-x-2 px-4 select-none group">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:from-pink-400 group-hover:to-amber-400">
                  Room
                </span>
                <span className="text-2xl font-extrabold tracking-tight text-white bg-black/70 px-2 py-1 rounded-lg shadow group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-amber-400 group-hover:text-white transition-all duration-300">
                  Slot
                </span>
              </Link>
            </div>
            <div>
                
              <Link
                href="/dashboard"
                className=" inline-flex items-center px-5 py-2 rounded-4xl bg-amber-50 hover:bg-amber-100 text-black font-semibold shadow transition-colors duration-200 ml-2"
              >
                Add listing
              </Link>
              <Link href='/login' className="px-2 underline whitespace-nowrap"> Login</Link>
            </div>
          </div>
        </div>
      </ul>
      
    </nav>
  );
}
