import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className="flex flex-col text-black-100 dark:text-white mt-5 border-t border-gray-100 dark:border-gray-500">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image
                        src="/Logo.svg"
                        alt="logo"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                    <p className="text-base text-gray-400">
                        {`Car Landing ${date}`}
                        <br /> Todos los derechos reservados &copy;
                    </p>
                </div>
                <div className="footer__links">
                    {footerLinks.map(link => (
                        <div className="footer__link" key={link.title}>
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map(link => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="hover:text-primary-blue transition duration-150"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 dark:border-gray-500 sm:px-16 px-6 py-10">
                <p className="text-gray-400">{`@${date} Todos los derechos reservados`}</p>
                <div className="footer__copyrights-link">
                    <Link href="/" className="text-gray-400">
                        Política de privacidad
                    </Link>
                    <Link href="/" className="text-gray-400">
                        Términos de uso
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
