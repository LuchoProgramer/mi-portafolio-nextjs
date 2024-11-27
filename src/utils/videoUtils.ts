export const parseVideoUrl = async (url: string): Promise<string | null> => {
    if (!url) {
        console.error("La URL proporcionada está vacía.");
        return null;
    }

    try {
        let resolvedUrl = url;

        // Verificar si es una URL corta de TikTok
        if (url.includes("vm.tiktok.com")) {
            // Resolver la URL corta
            const response = await fetch(url, {
                method: 'HEAD',
                redirect: 'follow',
            });
            resolvedUrl = response.url;
            console.log("URL resuelta de TikTok:", resolvedUrl);
        }

        const parsedUrl = new URL(resolvedUrl);
        console.log("URL analizada:", parsedUrl);

        // Manejo de TikTok
        if (parsedUrl.hostname.includes("tiktok.com")) {
            const paths = parsedUrl.pathname.split("/").filter(Boolean);
            console.log("Paths de TikTok:", paths);
            const videoIndex = paths.findIndex((segment) => segment === "video");
            const videoId = videoIndex !== -1 ? paths[videoIndex + 1] : null;

            if (videoId) {
                const embedUrl = `https://www.tiktok.com/embed/${videoId}`;
                console.log("Embed URL de TikTok:", embedUrl);
                return embedUrl;
            } else {
                console.error("No se encontró el ID del video de TikTok.");
                return null;
            }
        }

        // Manejo de YouTube y Vimeo (puedes incluir el código aquí si lo necesitas)

        console.error("La plataforma de video no es compatible.");
        return null;
    } catch (error) {
        console.error("Error procesando la URL:", error);
        return null;
    }
};
