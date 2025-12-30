 
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-bold text-[#539c9f]">404</h1>
      <p className="text-2xl text-gray-700 mt-4">
        Kechirasiz, siz qidirgan sahifa topilmadi.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#539c9f] text-white text-lg rounded-lg shadow transition hover:bg-[#417f81]"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}

export default Notfound;
