import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | AutoParts Store",
    description:
        "Get in touch with our team. Contact us by phone, email, or fill out the form to easily find the parts you need.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
