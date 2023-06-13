import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Header = () => {
    return (
        <header className="absolute w-full z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link
                    className="flex justify-center items-center gap-2"
                    href="/"
                >
                    <Image
                        className="object-contain"
                        src="/Logo.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                    <h3 className="dark:text-white font-bold uppercase">
                        Car Landing
                    </h3>
                </Link>
                <CustomButton
                    title="Iniciar Sesión"
                    containerStyles="text-primary-blue bg-white dark:bg-gray-800 rounded-full min-w-[130px]"
                    typeBtn="button"
                />
            </nav>
        </header>
    );
};

export default Header;
