import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="text-center bg-[#ed145b] text-white font-semibold text-4xl p-5 space-x-5">
        <Link to='/'>Home</Link>
        <span>|</span>
        <Link to='/produtos'>Produtos</Link>
    </nav>
  );
}