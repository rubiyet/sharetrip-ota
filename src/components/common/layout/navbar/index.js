import Image from 'next/image';
import Logo from '@/assets/images/logo.png';

const Navbar = () => {
  return (
    <div className="bg-white">
    <div className="w-9/12 m-auto h-[68px] flex items-center">
      <Image src={Logo} alt="logo" width={144} height={40} />
    </div>
  </div>
  );
}

export default Navbar;