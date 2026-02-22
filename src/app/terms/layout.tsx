import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | AutoParts Leads",
    description:
        "Terms and conditions governing the use of AutoParts Leads services.",
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
