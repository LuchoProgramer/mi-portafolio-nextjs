declare module 'leaflet.awesome-markers' {
    import * as L from 'leaflet';

    namespace AwesomeMarkers {
        function icon(options: any): L.Icon;
    }

    export default AwesomeMarkers;
}
