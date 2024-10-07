import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Home() {
    // if (Math.random() < 0.5) throw new Error("오류!");

    return (
        <main className="flex grow mt-[64px]">
            <div className="grow flex items-center justify-center">
                <video className="background-video" width="100%" height="100vh" autoPlay muted loop playsInline>
                    <source
                        src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <Image
                            src={logo}
                            width={300}
                            height={130}
                            className="mx-auto mb-4"
                            alt="LEAGUE OF League of Legends"
                        />
                        <p className="text-lg text-zinc-300">
                            Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <Link href="/champions" className="button">
                            챔피언 목록
                        </Link>
                        <Link href="/items" className="button">
                            아이템 목록
                        </Link>
                        <Link href="/rotation" className="button">
                            챔피언 로테이션
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
