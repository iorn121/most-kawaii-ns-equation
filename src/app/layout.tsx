import "./globals.css";
import {
  notojp,
  notosjp,
  eb,
  mplus,
  mplus1,
  nanum,
  nanumgo,
  handlee,
  gothic,
} from "./fonts";

export const metadata = {
  title: "Most Kawaii N-S Equation",
  description: "Vote for the most kawaii N-S equation!",
  type: "website",
  Image: "/most-kawaii-ns-equation.png",
  url: "https://most-kawaii-ns-equation.vercel.app",
  site_name: "Most Kawaii N-S Equation",
  locale: "en_US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${handlee.variable} ${notojp.variable} ${notosjp.variable} ${eb.variable} ${mplus.variable} ${mplus1.variable} ${nanum.variable} ${nanumgo.variable} ${gothic.variable}`}
    >
      <body>
        <header className="bg-emerald-400 text-center text-white py-4 text-3xl mb-4 font-handlee">
          Most Kawaii N-S Equation
        </header>
        {children}
      </body>
    </html>
  );
}
