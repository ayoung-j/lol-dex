"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchLatestVersion, fetchChampionList } from "@/utils/serverApi";
import Loading from "@/components/loading";

const ChampionRotationList = () => {
    const [version, setVersion] = useState<string>("");
    const [championRotation, setChampionRotation] = useState<ChampionRotation>();
    const [champions, setChampions] = useState<Champion[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const [latestVersion, rotationResponse, championsData] = await Promise.all([
                fetchLatestVersion(),
                fetch("/api/rotation"),
                fetchChampionList(),
            ]);
            const rotationData = await rotationResponse.json();

            setVersion(latestVersion);
            setChampionRotation(rotationData);
            setChampions(championsData);
        } catch (error) {
            let message;
            if (error instanceof Error) message = error.message;
            else message = String(error); // 아닐 경우, 오류를 문자열로 변환

            setError(message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    const championRotationList = champions.filter((champion) =>
        championRotation?.freeChampionIds?.includes(Number(champion.key))
    );

    return (
        <ul className="grid grid-cols-3 gap-6">
            {championRotationList.map((champion) => (
                <li key={champion.id}>
                    <Link href={`/champions/${champion.id}`} className="card flex gap-6 items-center">
                        <Image
                            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
                            alt={champion.name}
                            width={64}
                            height={64}
                        />
                        <div>
                            <div className="text-lg font-bold mb-1">{champion.name}</div>
                            <div className="text-zinc-400">{champion.title}</div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ChampionRotationList;
