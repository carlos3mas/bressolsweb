
export default function Footer() {
  return (
    <footer className="bg-bressols text-center text-sm text-gray-700 py-6  font-nunito">
      <div className="max-w-4xl mx-auto px-4 space-y-2">
        <p className="font-semibold">C.E.I. Bressols</p>
        <p>Avinguda del Mar, Onda</p>
        <p>Telèfon: 123 456 789 | Email: info@bressols.com</p>

        {/* ICONOS DE REDES */}
       <div className="flex justify-center gap-6 pt-4 text-gray-700">
  <a
    href="https://www.facebook.com/Bressolsonda/?locale=es_LA"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-black"
    aria-label="Facebook"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.01 3.66 9.16 8.44 9.88v-6.99H8.1v-2.89h2.34V9.41c0-2.3 1.37-3.57 3.46-3.57.99 0 2.03.18 2.03.18v2.25h-1.14c-1.13 0-1.48.7-1.48 1.42v1.71h2.5l-.4 2.89h-2.1v6.99C18.34 21.23 22 17.08 22 12.07z" />
    </svg>
  </a>
  <a
    href="https://www.instagram.com/bressolsonda/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-black"
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5ZM4.5 7.75a3.25 3.25 0 0 1 3.25-3.25h8.5a3.25 3.25 0 0 1 3.25 3.25v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5a3.25 3.25 0 0 1-3.25-3.25v-8.5Zm12.5-.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    </svg>
  </a>
</div>


        <div className="pt-4">
          © {new Date().getFullYear()} Bressols. Tots els drets reservats.
        </div>
      </div>
    </footer>
  );
}
