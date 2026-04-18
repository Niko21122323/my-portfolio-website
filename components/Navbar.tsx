import Link from "next/link";
import Image from "next/image";
import myImage from "../public/assets/photos/my-photos/my-image.png";
import NavigationMenu from "./NavigationMenu";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full h-auto">
      <div className="container">
        <div className="flex items-center justify-between gap-6 pt-6">
          <Link href="/">
            <Image
              src={myImage}
              alt="my image"
              className="size-12 rounded-full object-cover"
            />
          </Link>
          <NavigationMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
