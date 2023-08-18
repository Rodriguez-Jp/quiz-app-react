export default function Header() {
  return (
    <header className="w-full h-20 bg-slate-900 flex justify-between text-white">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="Quiz App Logo"
            height={80}
            width={80}
          />
        </Link>
        <Link href={"/"} className="ml-5 text-2xl font-bold">
          Quiz App
        </Link>
      </div>
      <nav className="flex items-center mr-20">
        <ul className="flex">
          <Link className="p-2" href={"/"}>
            Home
          </Link>
          <Link className="p-2" href={"/quizes"}>
            Quizes
          </Link>
          <Link className="p-2" href={"/about"}>
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
}
