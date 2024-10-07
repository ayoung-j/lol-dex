"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    const { refresh } = useRouter();

    return (
        <main className="grow py-16 mt-[64px]">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="title text-white">{error.message}</h2>
                    <button
                        className="button mx-auto"
                        onClick={() =>
                            startTransition(() => {
                                refresh();
                                reset();
                            })
                        }>
                        재시도
                    </button>
                </div>
            </div>
        </main>
    );
}
