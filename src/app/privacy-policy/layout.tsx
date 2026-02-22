import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | AutoParts Store",
    description:
        "Learn how AutoParts Store collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
