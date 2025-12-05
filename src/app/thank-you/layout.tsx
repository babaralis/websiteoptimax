import { ReactNode } from "react";

// This layout overrides the default layout to remove Header/Footer
// The page will render without the default site header and footer
export default function ThankYouLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

