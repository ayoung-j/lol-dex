import Image from "next/image";
import { Item } from "@/types/Item";
import { fetchItemList, fetchLatestVersion } from "@/utils/serverApi";

const ItemsPage = async () => {
    const version = await fetchLatestVersion();
    const items: Item[] = await fetchItemList();

    return (
        <div>
            <h2 className="title">아이템 목록</h2>
            <ul className="grid grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="card flex gap-6 items-center">
                            <Image
                                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                                alt={item.name}
                                width={32}
                                height={32}
                            />
                            <div>
                                <div className="text-lg font-bold mb-1">{item.name}</div>
                                <div className="text-zinc-400">{item.plaintext}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemsPage;
