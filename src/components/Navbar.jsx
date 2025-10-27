import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#111217] text-[#e6eef0] flex items-center justify-between px-8 py-3 shadow-lg sticky top-0 z-10">
      <div className="text-xl font-bold text-[#00e6ff] tracking-wide drop-shadow">Gordofobia</div>
      <ul className="flex gap-5 m-0 p-0 list-none">
        <li>
          <a href="/" className="text-[#e6eef0] font-medium px-3 py-1 rounded-md transition hover:bg-[#00e6ff22] hover:text-[#00e6ff]">Home</a>
        </li>
        <li>
          <a href="/formulario" className="text-[#e6eef0] font-medium px-3 py-1 rounded-md transition hover:bg-[#00e6ff22] hover:text-[#00e6ff]">Formulário</a>
        </li>
        <li>
          <a href="/dados" className="text-[#e6eef0] font-medium px-3 py-1 rounded-md transition hover:bg-green-500/20 hover:text-green-400">Dados</a>
        </li>
      </ul>
    </nav>
  );
}
