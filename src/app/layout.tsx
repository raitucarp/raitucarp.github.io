import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { ColorModeButton } from "@/components/ui/color-mode";

export const metadata: Metadata = {
  title: "Ribhararnus Pracutiar",
  description: "Personal Website of Ribhararnus Pracutiar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <ColorModeButton
            position="fixed"
            top="1rem"
            right="1rem"
            variant="subtle"
            rounded="full"
          />
          {children}
        </Provider>
      </body>
    </html>
  );
}
