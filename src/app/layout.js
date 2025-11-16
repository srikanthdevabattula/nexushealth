export const metadata = {
  title: "NexusHealth",
  description: "Copilot page",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
