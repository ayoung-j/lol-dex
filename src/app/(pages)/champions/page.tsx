import Image from "next/image";
import Link from "next/link";
import { Champion } from "@/types/Champion";
import { fetchLatestVersion, fetchChampionList } from "@/utils/serverApi";

const ChampionsPage = async () => {
    const version = await fetchLatestVersion();
    const champions: Champion[] = await fetchChampionList();

    return (
        <div>
            <h2 className="title">챔피언 목록</h2>
            <ul className="grid grid-cols-3 gap-6">
                {champions.map((champion) => (
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
        </div>
    );
};

export default ChampionsPage;
