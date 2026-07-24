import LayoutShell from "@/components/LayoutShell";
import { getSEOTags } from "@/lib/seo";

export const metadata = {
  ...getSEOTags({
    description:
      "Programista AI i indie hacker budujący produkty oparte na AI. Organizator Claude Community Kraków.",
    canonicalUrlRelative: "/pl",
    languages: { en: "/", pl: "/pl", "x-default": "/" },
    ogLocale: "pl_PL",
  }),
  title: {
    default: "Mateusz Tylec | ai dev & indie hacker",
    template: "%s | Mateusz Tylec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LayoutShell locale="pl">{children}</LayoutShell>;
}
