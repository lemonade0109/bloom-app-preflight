// The stylesheet is handled by Next.js at build time; TypeScript may not have
// a declaration for side-effect-only CSS imports in this project.
// @ts-expect-error Next.js resolves this global stylesheet outside TypeScript.
import "./globals.css";

export const metadata = {
  title: "Bloom App Preflight",
  description: "Independent product exploration"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
