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
  nanumbrush,
} from "./fonts";

export const metadata = {
  title: "Most Kawaii N-S Equation",
  description: "Vote for the most kawaii N-S equation!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${handlee.variable} ${notojp.variable} ${notosjp.variable} ${eb.variable} ${mplus.variable} ${mplus1.variable} ${nanum.variable} ${nanumgo.variable} ${gothic.variable} ${nanumbrush.variable}`}
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
