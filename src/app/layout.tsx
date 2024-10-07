import { Suspense } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import LoadingPage from "./loading";

const pretendard = localFont({
    src: "./fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "45 920",
    variable: "--font-pretendard",
});

export const metadata: Metadata = {
    title: "LOL Dex",
    description: "Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko-kr">
            <body className={`${pretendard.className} antialiased flex flex-col min-h-screen`}>
                <header className="fixed top-0 z-10 w-full bg-black/50 text-white py-3">
                    <div className="container mx-auto">
                        <nav className="flex justify-between items-center -mr-7">
                            <div>
                                <Link href="/">
                                    <Image
                                        src={logo}
                                        width={96}
                                        height={42}
                                        style={{ width: "auto" }}
                                        alt="LEAGUE OF League of Legends"
                                    />
                                    <span className="sr-only">홈</span>
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href="/champions"
                                    className="font-medium hover:text-primary px-7 py-5 transition-all">
                                    챔피언 목록
                                </Link>
                                <Link href="/items" className="font-medium hover:text-primary px-7 py-5 transition-all">
                                    아이템 목록
                                </Link>
                                <Link
                                    href="/rotation"
                                    className="font-medium hover:text-primary px-7 py-5 transition-all">
                                    챔피언 로테이션
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                <Suspense fallback={<LoadingPage />}>{children}</Suspense>

                <footer className="bg-black/50 text-zinc-500 py-6">
                    <div className="container mx-auto">
                        <div className="text-sm text-center">
                            ⓒ 2024. JoAyoung All rights reserved.
                            <p className="text-xs pt-2">
                                LOL Dex is not endorsed by Riot Games and does not reflect the views or opinions of Riot
                                Games or anyone officially involved in producing or managing Riot Games properties.
                                <br />
                                Riot Games and all associated properties are trademarks or registered trademarks of Riot
                                Games, Inc.
                            </p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
