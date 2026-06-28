import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center">
            <Image
              src="/logo/kawafarm-logo-dark.png"
              alt="Kawafarm"
              width={1840}
              height={265}
              className="h-8 w-auto dark:hidden"
            />
            <Image
              src="/logo/kawafarm-logo-white.png"
              alt="Kawafarm"
              width={1840}
              height={265}
              className="h-8 w-auto hidden dark:block"
            />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            Farm first. Learn deeply. Build technology that matters.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Quick links</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 hover:text-farm dark:text-slate-300 dark:hover:text-amber">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Social</h2>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Kawafarm social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-farm hover:bg-farm hover:text-white dark:border-white/10 dark:text-slate-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-7 text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Kawafarm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
