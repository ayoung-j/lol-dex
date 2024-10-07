export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="grow py-16 mt-[64px]">
            <div className="container mx-auto">{children}</div>
        </main>
    );
}
