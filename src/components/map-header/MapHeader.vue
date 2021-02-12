<template>
    <div
      class="map-header__wrapper article__top"
    >
      <div
        class="page-top__wrapper hug-top bg beige-light"
      >
        <div
          :class="['map-header__page-top', fullscreen ? 'map-header__fullscreen' : '']"
        >
          <div id="mapContainer"></div>
          <HeaderText
            v-show="!fullscreen"
            :enterFullScreen="enterFullScreen"
          />
        </div>
      </div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import HeaderText from "./HeaderText.vue";
import getJsonFromUrl from "./utils";
import data from "./operations.json";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("@/assets/images/marker.png"),
  iconUrl: require("@/assets/images/marker.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "MapHeader",
  components: {
    HeaderText
  },
  data: () => ({
    data: [],
    center: [60, 5],
    zoom: 3,
    map: null,
    fullscreen: false
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
    this.data = data;
  },
  mounted() {
    const params = getJsonFromUrl(window.location.href);
    let regions = params.region;
    const lat = params.lat;
    const lng = params.lng;
    console.log(regions);
    if (regions) {
      regions = regions.split(",");
      this.data = this.data.filter((country) => regions.includes(country.region));
      this.zoom = 4;
    }
    if (lat && lng) {
      this.center = [lat, lng];
    } else {
      const center = this.getLatLngCenter();
      this.center = center;
    }
    this.setupLeafletMap();
  },
  methods: {
    setupLeafletMap: function () {
      this.map = L.map("mapContainer", {
        attributionControl: false,
        zoomControl: false,
        minZoom: 4,
        maxZoom: 6
      }).setView(this.center, this.zoom);
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: false
        }
      ).addTo(this.map);
      const marker = L.icon({
        iconUrl: require("@/assets/images/marker.png"),
        iconSize: [25, 39], // size of the icon
        iconAnchor: [12, 39] // point of the icon which will correspond to marker's location
      });
      this.data.forEach((mark) => {
        L.marker([mark.lat, mark.lng], { icon: marker }).bindPopup(`
          <img class="map-header__marker" src="${require("@/assets/images/marker.png")}"/>
          <div class="map-header__marker-info">
            <h2>${mark.country}</h2>
            <div class="map-header__info">
              <img src="${require("@/assets/images/angola.png")}" class="map-header__info-img"/>
              <div class="map-header__info-text">
                <p>${mark.yearFrom}-${mark.yearTo}</p>
                <a href="${mark.operationLink}" class="">${mark.operationText}</a>
              </div>
            </div>
            <a href="#" class="map-header__action">Se alle operasjoner i ${mark.country}</a>
          </div>
        `).addTo(this.map).on("click", this.centerMap);
      });
    },
    centerMap: function (e) {
      this.center = [e.latlng.lat, e.latlng.lng];
      this.map.panTo(this.center);
    },
    enterFullScreen: function () {
      this.fullscreen = true;
    },
    getLatLngCenter: function () {
      let sumX = 0;
      let sumY = 0;
      let sumZ = 0;

      this.data.forEach((mark) => {
        const lat = this.degr2rad(mark.lat);
        const lng = this.degr2rad(mark.lng);
        // sum of cartesian coordinates
        sumX += Math.cos(lat) * Math.cos(lng);
        sumY += Math.cos(lat) * Math.sin(lng);
        sumZ += Math.sin(lat);
      });

      const avgX = sumX / this.data.length;
      const avgY = sumY / this.data.length;
      const avgZ = sumZ / this.data.length;

      // convert average x, y, z coordinate to latitude and lnggtitude
      const lng = Math.atan2(avgY, avgX);
      const hyp = Math.sqrt((avgX * avgX) + (avgY * avgY));
      const lat = Math.atan2(avgZ, hyp);

      return [this.rad2degr(lat), this.rad2degr(lng)];
    },
    rad2degr: function (rad) { return (rad * 180) / Math.PI; },
    degr2rad: function (degr) { return (degr * Math.PI) / 180; }
  }
};
</script>
<style lang="scss">
.map-header__wrapper{
  .map-header__page-top{
    position: relative;
    height: 70vh;
    width: 100%;
  }
  .map-header__fullscreen{
    position: fixed;
    height: 100vh;
  }
  a {
    color: #191B21;
    font-weight: 500;
    font-size: 15px;
    margin-top: .75rem;
    display: block;
  }
  #mapContainer {
    width: 100%;
    height: 100%;
  }
  .map-header__marker{
    position: relative;
    z-index: 2;
    transform: translate(-6px, -33px);
  }
  .leaflet-container {
    z-index: 0;
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
    -webkit-filter: brightness(55%) i !important;
    filter: brightness(55%) !important;
}
</style>
