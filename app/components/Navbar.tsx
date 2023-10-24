import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-2'>
      <div className="flex gap-5 items-center">
        <Link href="/" passHref>
          <h1 className="text-3xl text-white">WsWork</h1>
        </Link>
        <Link href="/carlist" passHref>
          <h1 className="text-2xl text-white">Carros</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
