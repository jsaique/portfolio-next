import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "John Aries Saique",
  description: "Portfolio-Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="pt-navigation-height">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
