import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | AutoParts Leads",
    description:
        "Get in touch with our team. Contact us by phone, email, or fill out the form to start receiving auto parts leads.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
