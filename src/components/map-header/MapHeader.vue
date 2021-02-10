<template>
    <div
      class="map-header__wrapper article__top"
    >
        <div
          class="page-top__wrapper hug-top bg beige-light"
        >
          <div>
            <div id="mapContainer"></div>
              <h1>
                {{ header }}
              </h1>
          </div>
        </div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import data from "./operations.json";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("@/assets/images/marker.png"),
  iconUrl: require("@/assets/images/marker.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "MapHeader",
  data: () => ({
    center: [60, 5]
  }),
  props: {
    /**
     * Header
     *
     * @value string
     */
    header: {
      type: String,
      default: ""
    },
    /**
     * Subheader text
     *
     * @value string
     */
    subheader: {
      type: String,
      default: ""
    },
    /**
     * Localization
     *
     * @values {
     *   key: string,
     * }
     */
    localize: {
      type: Object
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    this.setupLeafletMap();
    console.log(window.location.search);
  },
  methods: {
    setupLeafletMap: function () {
      const mapDiv = L.map("mapContainer", {
        attributionControl: false,
        zoomControl: false,
        minZoom: 4,
        maxZoom: 6
      }).setView(this.center, 3);
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: false
        }
      ).addTo(mapDiv);
      const marker = L.icon({
        iconUrl: require("@/assets/images/marker.png"),
        iconSize: [25, 39], // size of the icon
        iconAnchor: [12, 39] // point of the icon which will correspond to marker's location
      });
      data.forEach((mark) => {

        L.marker([mark.lat, mark.lon], { icon: marker }).bindPopup(`
          <img class="map-header__marker" src="${require("@/assets/images/marker.png")}"/>
          <div class="map-header__marker-info">
            <h2>${mark.country}</h2>
            <div class="map-header__info">
              <img src="${require("@/assets/images/angola.png")}" class="map-header__info-img"/>
              <div class="map-header__info-text">
                <p>${mark.yearFrom === mark.yearTo ? mark.yearFrom : mark.yearFrom + "-" + mark.yearTo}</p>
                <a href="${mark.operationLink}" class="">${mark.operationText}</a>
              </div>
            </div>
            <a href="#" class="map-header__action">Se alle operasjoner i ${mark.country}</a>
          </div>
        `).addTo(mapDiv);
      });
    },
    onClick: function (e) {
      e.target.setIcon(fullMarker);
    }
  },
  computed: {
    comp: function () {
      return null;
    }
  }
};
</script>
<style lang="scss">
.map-header__wrapper{
  a {
    color: #191B21;
    font-weight: 500;
    font-size: 15px;
    margin-top: .75rem;
    display: block;
  }
  #mapContainer {
    width: 100%;
    height: 70vh;
  }
  .map-header__marker{
    position: relative;
    z-index: 2;
    transform: translate(-6px, -33px);
  }
  .leaflet-popup{
    bottom: unset !important;
    left: 0px !important;
    .leaflet-popup-content-wrapper {
      width: unset !important;
      background: transparent;
      border-radius: 0;
      box-shadow: none;
      transform: translate(-7px, -7px);
      .leaflet-popup-content {
        margin: 0;
      }
    }
    .leaflet-popup-tip-container {
      display: none;
    }
    a.leaflet-popup-close-button {
      display: none;
    }
  }
  

  

  
  .map-header__marker-info{
    position: relative;
    background: white;
    padding: 1.5rem 2rem 1.5rem 2rem;
    width: 380px;
    height: 225px;
    transform: translate(-11px, -48px);
    box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    * {
      margin: 0;
      font-family: 'Cera Pro', sans-serif;
    }
    .map-header__info{
      display: flex;
      .map-header__info-text {
        display: flex;
        justify-content: center;
        padding: 1rem;
        flex-direction: column;
        a {
          margin: 0;
        }
        p {
          color: #191B21;
          margin: 0;
          font-weight: 400;
          font-size: 14px;
        }
      }
      .map-header__info-img{
        width: 100px;
        height: 100px;
      }
    }
    .map-header__action{
      margin-top: .5rem;
    }
  }
  
}
/* Quickfix? */
.leaflet-tile-container img {
    width: 256.5px !important;
    height: 256.5px !important;
}
</style>
