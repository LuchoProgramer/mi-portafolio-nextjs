import * as L from 'leaflet';

declare module 'leaflet' {
    namespace AwesomeMarkers {
        interface AwesomeMarkerOptions extends L.IconOptions {
            icon: string;
            markerColor: string;
            prefix: 'fa' | 'glyphicon';
            iconColor?: string;
        }

        function icon(options: AwesomeMarkerOptions): L.Icon;
    }
}