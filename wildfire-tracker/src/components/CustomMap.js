import React, { useState, useEffect } from 'react';
import { Map, AdvancedMarker, Pin} from "@vis.gl/react-google-maps";
import LocationInfoBox from './LocationInfoBox'

const CustomMap = ({ eventData }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.filter(ev => ev.categories[0]?.id === 8).map(ev => {
        return (
            <AdvancedMarker
                key={ev.id}
                position={{
                    lat: ev.geometries[0].coordinates[1],
                    lng: ev.geometries[0].coordinates[0],
                }}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            >
                <Pin background={'#D73502'} glyphColor={'#FAC000'} borderColor={'#FC6400'} />
            </AdvancedMarker>
        );
    });

    return (
        <div className="map-container">
            <Map
                style={{ borderRadius: "20px" }}
                defaultZoom={8}
                defaultCenter={{ lat: 37.3265, lng: -121.8756 }}
                mapId='b7ab67342d112631'
                gestureHandling={"greedy"}
                disableDefaultUI
            >
                {/* <AdvancedMarker position={{ lat: 37.3265, lng: -121.8756 }}>
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker> */}
                {markers}
            </Map>
            {locationInfo && (<LocationInfoBox info={locationInfo} onClose={() => setLocationInfo(null)}/>)}
        </div>
    );
};

export default CustomMap;