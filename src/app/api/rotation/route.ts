import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.RIOT_API_KEY;

    // API 키가 없을 경우
    if (!apiKey) {
        return NextResponse.json({ error: "API 키가 필요합니다." }, { status: 401 });
    }

    try {
        const response = await fetch("https://kr.api.riotgames.com/lol/platform/v3/champion-rotations", {
            method: "GET",
            headers: {
                "X-Riot-Token": apiKey,
            },
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
