"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "@fortawesome/fontawesome-free/css/all.css";
import styles from "./TravelMap.module.css";
import { useTheme } from "@/context/ThemeContext";
import { LatLngTuple } from "leaflet";
import { travelRoute } from "./TravelImages";
import type { Map, TileLayer } from "leaflet";

function TravelMap() {
    const { isDark } = useTheme();
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);
    const tileLayerRef = useRef<TileLayer | null>(null);
    const LRef = useRef<typeof import("leaflet") | null>(null);

    useEffect(() => {
        const initializeMap = async () => {
            if (!LRef.current) {
                const { default: L } = await import("leaflet");
                (window as { L: typeof L }).L = L;
                await import("leaflet.awesome-markers");
                LRef.current = L;
            }

            const L = LRef.current;

            if (!mapRef.current) {
                mapRef.current = L.map(mapContainerRef.current!, {
                    center: [-20.0, -60.0],
                    zoom: 3,
                });

                if (mapRef.current) {
                    tileLayerRef.current = L.tileLayer(
                        isDark
                            ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                        {
                            attribution: "&copy; <a href='https://carto.com/attributions'>CARTO</a>",
                        }
                    ).addTo(mapRef.current);
                }

                travelRoute.forEach((location) => {
                    if (mapRef.current) {
                        L.marker(location.coords as LatLngTuple, {
                            icon: L.AwesomeMarkers.icon({
                                icon: "map-marker-alt",
                                markerColor: "blue",
                                prefix: "fa",
                                iconColor: "white",
                            }),
                        })
                            .bindPopup(
                                `<div class="${styles["popup-container"]}">
                                    <img src="${location.img}" alt="${location.name}" class="${styles["popup-image"]}">
                                </div>`
                            )
                            .addTo(mapRef.current);
                    }
                });
            }
        };

        initializeMap();

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [isDark]);

    useEffect(() => {
        if (tileLayerRef.current) {
            const newUrl = isDark
                ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
            tileLayerRef.current.setUrl(newUrl);
        }
    }, [isDark]);

    return (
        <section id="travel" className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Lugares que he Visitado</h2>
                <div
                    ref={mapContainerRef}
                    className={styles["map-container"]}
                ></div>
            </div>
        </section>
    );
}

export default TravelMap;