import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { base_url } from "../../../Config/Auth";
import { FlexContainer } from "../../../Components/UI/Layout";
import {
  MultiAvatar,
  Title,
  JumpStartBox,
  Spacer,
} from "../../../Components/UI/Elements";
import { AddressComponent, CurrencySymbol } from "../../../Components/Common";
import CurrencyCompressor from "../../../Components/Common/CurrencyCompressor";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function AccountMapPopupMarker({ mark }) {
  console.log(mark);
  const {
    accountName,
    imageId,
    imageURL,
    address,
    metaData,
    wonCount,
    lostCount,
  } = mark && mark.data;

  const actualFunnel = metaData ? metaData.funnel.actualFunnel : 0;
  const Won = wonCount ? wonCount : 0;
  const Lost = lostCount ? lostCount : 0;
  const currency = metaData && metaData.funnel.currency;
  let picture;
  if (imageId) {
    picture = `${base_url}/image/${imageId}`;
  } else if (imageURL) {
    picture = imageURL;
  } else {
    picture = require("leaflet/dist/images/marker-icon.png");
  }
  const image = new L.Icon({
    iconUrl: picture,
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: mark.type === "Headquarters" ? [40, 40] : [25, 25], // size of the icon
    shadowSize: mark.type === "Headquarters" ? [80, 60] : [50, 50], // size of the shadow
    // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [15, 40], // the same for the shadow
    // popupAnchor: [-3, -76]// point from which the popup should open relative to the iconAnchor
  });

  return (
    <Marker position={[mark.lat, mark.lng]} icon={image}>
      <Popup className="popup-wrapper">
        <div className="details">
          <Title
            fontSize="1.1rem"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="normal"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {mark.name}
          </Title>
          &nbsp;&nbsp;
          <div>
            {address &&
              address.map((components, i) => {
                if (
                  Number(components.latitude) === mark.lat &&
                  Number(components.longitude) === mark.lng
                ) {
                  return <AddressComponent components={components} key={i} />;
                }
              })}
          </div>
        </div>
        <Spacer />
        <FlexContainer style={{ width: "100%" }} justifyContent="space-between">
          <div
            style={{
              width: "49%",
              padding: "0px 0px",
              textAlign: "center",
              background: "#0073a8",
              color: "white",
              border: "0.0625em solid #ddd",
              borderRadius: "0.3rem",
              boxShadow: "0 8px 6px -6px rgb(46,44,44)",
            }}
          >
            <h3 style={{ color: "white" }}>Proposal</h3>
            <CurrencySymbol currencyType={currency} />{" "}
            {CurrencyCompressor(actualFunnel) || 0}
          </div>
          <div
            style={{
              width: "49%",
              padding: "0px 0px",
              textAlign: "center",
              background: "#24b9fe",
              color: "white",
              border: "0.0625em solid #ddd",
              borderRadius: "0.3rem",
              boxShadow: "0 8px 6px -6px rgb(46,44,44)",
            }}
          >
            <h3 style={{ color: "white" }}>Win Rate</h3>
            {`${Won || 0} / ${(Lost || 0) + (Won || 0) || 0}`}
          </div>
          {/* <JumpStartBox
            noProgress
          
            value={actualFunnel.toFixed(2) || ""}
            title="Proposal"
            currencyType={currency}
            bgColor="#F3967E"
            style={{ fontSize: "0.75em" }}
          />
          <JumpStartBox
            noProgress
            stringValue
           
            value={`${Won || 0} / ${(Lost || 0) + (Won || 0) || 0}`}
            title="Win Rate"
            bgColor="#24B47E"
          /> */}
        </FlexContainer>
        {/* <div className="avatar-bg" style={{ borderRadius: "50%" }}>
              <MultiAvatar
                // primaryTitle={accountName || ''}
                imageId={imageId}
                imageURL={imageURL}
              />
              &nbsp;&nbsp;
            </div> */}
        {/* 
             
            
             
            </div> */}
        {/* <FlexContainer style={{ width: "80%" }}>
              <JumpStartBox
                noProgress
                // isLoading={fetchingFunnelValueByContactId}
                value={actualFunnel.toFixed(2) || ""}
                title="Proposal"
                currencyType={currency}
                bgColor="#F3967E"
                style={{fontSize:"0.75em"}}
              />
              <JumpStartBox
                noProgress
                stringValue
                // isLoading={fetchingOpportunityListByContactId}
                // value={`${(Won && Won) || 0} / ${(Won && Won) ||
                //   0 + (Lost && Lost) ||
                //   0}`}
                value={`${Won || 0} / ${(Lost || 0) + (Won || 0) || 0}`}
                title="Win Rate"
                bgColor="#24B47E"
                
              />
            </FlexContainer> */}
      </Popup>
    </Marker>
  );
}
