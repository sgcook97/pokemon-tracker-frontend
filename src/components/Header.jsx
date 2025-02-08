import { Link } from 'react-router';

function Header() {
    return (
        <div className="w-[98%] flex justify-between
        items-center px-5 py-2 bg-white bg-opacity-85
        rounded-full mt-3 border-gray/70 border-solid border-[2px]
        fixed top-0 z-10 h-16">
            <h1 className="text-3xl font-bold"><Link to='/home'>Pokémon TCG Tracker</Link></h1>
            <nav>
                <ul className="flex gap-2">
                    <li className='hover:bg-black/30 hover:text-white hover:transition
                    rounded-lg px-2 py-1'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='hover:bg-black/30 hover:text-white hover:transition
                    rounded-lg px-2 py-1'>
                        <Link to='/collections'>Collections</Link>
                    </li>
                    <li className='hover:bg-black/30 hover:text-white hover:transition
                    rounded-lg px-2 py-1'>
                        <Link to='/stats'>Stats</Link>
                    </li>
                    <li className='hover:bg-black/30 hover:text-white hover:transition
                    rounded-lg px-2 py-1'>
                        <Link to='/profile'>Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;