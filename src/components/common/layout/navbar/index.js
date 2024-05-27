import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const Navbar = () => (
  <div className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
    <div className="w-9/12 m-auto h-[68px] flex items-center">
      <Image src={Logo} alt="logo" width={144} height={40} />
    </div>
  </div>
);

export default Navbar;
