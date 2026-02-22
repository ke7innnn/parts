import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | AutoParts Leads",
    description:
        "Learn about our mission to connect auto parts suppliers with ready-to-buy customers nationwide.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
