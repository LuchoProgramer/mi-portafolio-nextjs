export const parseVideoUrl = (url: string): string | null => {
    if (!url) return null;

    try {
        const parsedUrl = new URL(url);

        // Manejo de YouTube
        if (parsedUrl.hostname.includes("youtube.com") || parsedUrl.hostname.includes("youtu.be")) {
            if (parsedUrl.hostname === "youtu.be") {
                // Formato corto de YouTube
                return `https://www.youtube.com/embed/${parsedUrl.pathname.split("/").pop()}`;
            }

            // Manejo de Shorts
            if (parsedUrl.pathname.startsWith("/shorts")) {
                const videoId = parsedUrl.pathname.split("/")[2]; // Obtener el ID del video
                return `https://www.youtube.com/embed/${videoId}`;
            }

            // Videos normales de YouTube
            const videoId = parsedUrl.searchParams.get("v");
            return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
        }

        // Manejo de TikTok
        if (parsedUrl.hostname.includes("tiktok.com")) {
            const paths = parsedUrl.pathname.split("/");
            const videoId = paths.includes("video") ? paths.pop() : null;
            return videoId ? `https://www.tiktok.com/embed/v2/${videoId}` : null;
        }

        // Manejo de Vimeo
        if (parsedUrl.hostname.includes("vimeo.com")) {
            const videoId = parsedUrl.pathname.split("/").pop();
            return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
        }

        // Otras plataformas pueden agregarse aquí...

        // Si no coincide con ninguna plataforma conocida
        return null;
    } catch (error) {
        console.error("URL inválida:", error);
        return null;
    }
};