import {
  Map,
  APILoader,
  ScaleControl,
  ToolBarControl,
  ControlBarControl,
  Geolocation,
  Marker,
  Circle
} from "@uiw/react-amap";
import "./home.css";
import { useMapContext, Provider } from '@uiw/react-amap';
import FontBar from "../component/fontBar/fontBar";
import { useState } from "react";
import PostControl from "./postControl/control";
const posi={
  status: 0,
  code: 0,
  info: "SUCCESS",
  position: [
    121.503544,
    31.347942
  ],
  location_type: "html5",
  message: "Get ipLocation failed.Get geolocation success.Convert Success.",
  accuracy: 19,
  isConverted: false,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  speed: null
};
function Demo() {
  const img=document.getElementsByClassName("amap-geolocation-marker");
  const { AMaps } = useMapContext();  
  const [data, setData] = useState(posi);

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <Map zoom={4}>
        
        <ScaleControl offset={[16, 30]} position="LB" />    {/* 比例尺控件 10公里 */}
        {/* <ToolBarControl offset={[16, 10]} position="RB" />     缩放工具条 */}
        <ControlBarControl offset={[16, 180]} position="RB" />    {/*  地图控件 */}
        <Geolocation       
          maximumAge={100000}
          borderRadius="5px"
          position="RB"
          offset={[16, 80]}
          zoomToAccuracy={true}
          showCircle={true}
            onComplete={(data) => {
      
            console.log('返回数据：', data);
            setData(data);
          }}
          onError={(data) => {
 
            console.log('错误返回数据：', data);
            setData(data);
          }}
        />
        {/* <Circle 
          radius={50}
          strokeWeight={0}
          strokeColor="#fff"
          fillColor="#001010"
          center={[147.283042, 31.86119]}
        /> */}

      </Map>
      {/* <Map>
        {({ AMap, map, container }) => {
          return;
        }}
      </Map> */}
    </div>
  );
}

export default function Home() {
  return <div>
<PostControl/>
  <APILoader akay="b2dfda5f741a4bf15d3cd2aaea696768">
      <Demo />
    </APILoader>
   <FontBar />
   </div>
}
