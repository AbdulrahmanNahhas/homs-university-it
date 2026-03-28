import { Noto_Sans_Arabic } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic", "latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      className={notoSansArabic.className}
      suppressHydrationWarning
    >
      <body dir="rtl" className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
