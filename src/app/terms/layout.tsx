import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | AutoParts Store",
    description:
        "Terms and conditions governing the use of AutoParts Store services.",
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
