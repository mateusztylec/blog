import LayoutShell from "@/components/LayoutShell";
import { getSEOTags } from "@/lib/seo";

export const metadata = {
  ...getSEOTags({
    canonicalUrlRelative: "/",
    languages: { en: "/", pl: "/pl", "x-default": "/" },
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
  return <LayoutShell locale="en">{children}</LayoutShell>;
}
