import Icons from "@/components/global/icons";
import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

      <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
            <Icons.logo className="w-7 h-7" />
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start">
            Kod yazmadan güzel, işlevsel web siteleri oluşturun
          </p>
          <span className="mt-4 text-neutral-200 text-sm flex items-center">
            <Link href="https://github.com/ebrartamer/buildify" target="_blank" className="hover:text-foreground transition-all duration-300">
              ebrartamer
            </Link>
            <span className="mx-1">ve</span>
            <Link href="https://github.com/buzzkaan" target="_blank" className="hover:text-foreground transition-all duration-300">
              buzzkaan
            </Link>
          </span>
          <span className="mt-2 text-neutral-200 text-sm flex items-center">
            tarafından yapıldı<Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
          </span>

        </div>

        <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Ürün</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/buildfy"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Başla
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Sosyal Medya</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href="https://github.com/ebrartamer/buildify"
                    target="_blank"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Kaynaklar</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="https://github.com/ebrartamer/buildify"
                    target="_blank"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Kaynak Kod
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Geliştiriciler</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link
                    href="https://github.com/ebrartamer"
                    target="_blank"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Ebrar Tamer
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="https://github.com/buzzkaan"
                    target="_blank"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Kaan Demir
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Buildfy AI AŞ. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
