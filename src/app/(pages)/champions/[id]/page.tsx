import { Suspense } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchChampionDetail, fetchLatestVersion } from "@/utils/serverApi";
import Loading from "@/components/loading";

type Props = {
    params: {
        id: string;
    };
};

// generateMetadata
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const champion = await fetchChampionDetail(params.id);

    return {
        title: `${champion.name} - LOL Dex`,
        description: champion.blurb,
    };
};

const ChampionDetailPage = async ({ params }: Props) => {
    const version = await fetchLatestVersion();
    const champion = await fetchChampionDetail(params.id);

    return (
        <>
            <div className="flex items-center gap-6">
                <Suspense fallback={<Loading />}>
                    <Image
                        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
                        alt={champion.name}
                        width={128}
                        height={128}
                    />
                </Suspense>
                <Suspense fallback={<Loading />}>
                    <div className="flex flex-col">
                        <div className="text-2xl font-bold mb-2">{champion.name}</div>
                        <div className="text-lg text-zinc-400">{champion.title}</div>
                        <ul className="flex gap-2 mt-3">
                            {champion.tags.map((tag) => (
                                <li key={tag}>
                                    <span className="label">{tag}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Suspense>
            </div>

            <Suspense fallback={<Loading />}>
                <div className="flex flex-col">
                    <ul className="flex gap-3 mt-6">
                        <li>
                            <span className="label text-base bg-primary text-zinc-900">
                                공격력 : <b>{champion.info.attack}</b>
                            </span>
                        </li>
                        <li>
                            <span className="label text-base bg-primary text-zinc-900">
                                방어력 : <b>{champion.info.defense}</b>
                            </span>
                        </li>
                        <li>
                            <span className="label text-base bg-primary text-zinc-900">
                                마법력 : <b>{champion.info.magic}</b>
                            </span>
                        </li>
                        <li>
                            <span className="label text-base bg-primary text-zinc-900">
                                난이도 : <b>{champion.info.difficulty}</b>
                            </span>
                        </li>
                    </ul>
                    <div className="text-zinc-400 mt-6">{champion.blurb}</div>
                    <Link className="button inline-flex mt-10 ml-auto" href="/champions">
                        리스트
                    </Link>
                </div>
            </Suspense>
        </>
    );
};

export default ChampionDetailPage;
