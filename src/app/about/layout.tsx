import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | AutoParts Store",
    description:
        "Learn about our mission to provide the highest quality auto parts to drivers and mechanics nationwide.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
