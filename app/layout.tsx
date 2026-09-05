import "./globals.css";

export const metadata = {
  title: "Bloom App Preflight",
  description: "Independent product exploration"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
