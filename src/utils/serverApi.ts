"use server";

import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

// 최신 버전 정보
export async function fetchLatestVersion(): Promise<string> {
    const response = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");

    if (!response.ok) {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const versions = await response.json();
    return versions[0];
}

// 챔피언 목록
export async function fetchChampionList(): Promise<Champion[]> {
    const version = await fetchLatestVersion(); // 최신 버전 정보를 가져옴
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`, {
        next: {
            revalidate: 86400, // 하루
        },
    });

    if (!response.ok) {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const data = await response.json();
    return Object.values(data.data); // 챔피언 목록을 배열 형태로 반환
}

// 챔피언 상세
export async function fetchChampionDetail(id: string): Promise<Champion> {
    const version = await fetchLatestVersion(); // 최신 버전 정보를 가져옴
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`, {
        cache: "no-store",
    });

    if (!response.ok) {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const data: { data: Record<string, Champion> } = await response.json();
    return Object.values(data.data)[0]; // 챔피언 데이터 반환
}

// 아이템 목록
export async function fetchItemList(): Promise<Item[]> {
    const version = await fetchLatestVersion(); // 최신 버전 정보를 가져옴
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`, {
        next: {
            revalidate: 86400, // 하루
        },
    });

    if (!response.ok) {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const data = await response.json();
    return Object.values(data.data); // 아이템 목록을 배열 형태로 반환
}
