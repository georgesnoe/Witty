import { Link } from "@/i18n/navigation";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface INavAnchors {
  anchor: string;
  text: string;
}

export default function Home() {
  const t = useTranslations("HomePage");

  const navAnchors: INavAnchors[] = [
    "features",
    "howdoesitwork",
    "community",
    "jokes",
    "ranking",
    "download",
  ].map((navAnchor) => ({
    anchor: t(`Header.Navbar.${navAnchor}_anchor`),
    text: t(`Header.Navbar.${navAnchor}_text`),
  }));

  return (
    <>
      <header className="h-16 sticky w-full top-0 border-b border-b-gray-100 px-4 md:px-8 lg:px-16 font-semibold">
        <div className="container mx-auto h-full flex justify-between items-center">
          <section>
            <Image width="64" height="32" src="/logo.png" alt={t("Header.Logo.alt")} />
          </section>
          <section className="hidden lg:block">
            <nav>
              <ul className="flex items-center justify-center gap-8">
                {
                  navAnchors.map((anchor) => (
                    <li key={anchor.anchor} className="text-gray-500 hover:text-purple-700">
                      <NextLink href={anchor.anchor}>{anchor.text}</NextLink>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </section>
          <section>
            <Link href="/login" className="px-8 py-4 bg-black text-white hover:bg-purple-700">
              {t("Header.Auth.login")}
            </Link>
          </section>
        </div>
      </header>
    </>
  );
}
