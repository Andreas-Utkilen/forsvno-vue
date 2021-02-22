<template>
    <div
      class="map-header__wrapper article__top"
    >
      <div
        class="page-top__wrapper hug-top bg beige-light"
      >
        <div
          ref="wrapper"
          :class="['map-header__page-top', fullscreen ? 'map-header__fullscreen' : '']"
        >
          <div
            id="mapContainer"
          >
          </div>
          <HeaderText
            ref="headerText"
            :enterFullScreen="enterFullScreen"
            :header="header"
            :subheader="subheader"
            :buttonText="buttonText"
          />
          <button
            @click="exitFullScreen"
            v-show="fullscreen"
            class="map-header__exit-button"
          >
            <img
              :src="icons.arrowRight"
              class="map-header__exit-button-img"
              alt="Pil venstre"
            >
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import HeaderText from "./HeaderText.vue";
import getJsonFromUrl from "./utils";
import locations from "./locations.json";

delete L.Icon.Default.prototype._getIconUrl;

export default {
  name: "MapHeader",
  components: {
    HeaderText
  },
  data: () => ({
    filteredData: null,
    center: [26, 8],
    zoom: 4,
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
     * Button text
     *
     * @value string
     */
    buttonText: {
      type: String,
      default: ""
    },
    /**
     * Data
     *
     * @value [{
     *  country: "Albania",
     *  region: "Europe",
     *  lat: "41.153332",
     *  lng: "20.168331",
     *  yearFrom: 1990,
     *  yearTo: 1991,
     *  operationText: "UN Observation mission",
     *  operationLink: "https://link"
     * }]
     */
    data: {
      type: Array
    },
    /**
     * icons
     *
     * @values {
     *   key: string,
     * }
     */
    icons: {
      type: Object
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
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: this.icons.markerRetina,
      iconUrl: this.icons.marker,
      shadowUrl: this.icons.shadow
    });
  },
  mounted() {
    const params = getJsonFromUrl(window.location.href);
    let regions = params.region;
    const lat = params.lat;
    const lng = params.lng;

    if (regions) {
      regions = regions.split(",");
      this.filteredData = this.data.filter((country) => regions.includes(country.region));
      if (this.filteredData.length === 0) {
        this.filteredData = this.data;
      } else if (window.innerWidth < 767) {
        console.log("small screen");
        this.center = this.getLatLngCenter(this.filteredData);
      } else {
        const data = locations.filter((co) => regions.includes(co.name));
        this.center = this.getLatLngCenter(data);
      }
    }
    if (lat && lng) {
      this.center = [lat, lng];
    }
    this.setupLeafletMap();
  },
  methods: {
    setupLeafletMap: function () {
      const corner1 = L.latLng(-90, -200);
      const corner2 = L.latLng(90, 200);
      const bounds = L.latLngBounds(corner1, corner2);
      this.map = L.map("mapContainer", {
        attributionControl: false,
        zoomControl: false,
        minZoom: 3,
        maxZoom: 6,
        scrollWheelZoom: !this.isTouchDevice(),
        maxBoundsViscosity: 1.0,
        maxBounds: bounds
      }).setView(this.center, this.zoom);

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: false
        }
      ).addTo(this.map);

      const marker = L.icon({
        iconUrl: this.icons.marker,
        iconSize: [25, 39], // size of the icon
        iconAnchor: [12, 39] // point of the icon which will correspond to marker's location
      });
      (this.filteredData || this.data).forEach((mark) => {
        L.marker([mark.lat, mark.lng], { icon: marker }).bindPopup(`
          <img class="map-header__marker" src="${this.icons.marker}"/>
          <div class="map-header__marker-info">
            <h2>${mark.country}</h2>
            <div class="map-header__info">
              <img src="${mark.image}" class="map-header__info-img"/>
              <div class="map-header__info-text">
                <p>${mark.yearFrom}-${mark.yearTo}</p>
                <a href="${mark.operationLink}" class="">${mark.operationText}</a>
              </div>
            </div>
            <a href="#" class="map-header__action">Se alle operasjoner i ${mark.country}</a>
          </div>
        `).addTo(this.map).on("click", this.centerMap);
      });
      this.map._handlers.forEach((handler) => handler.disable());
      this.map.on("zoomend", (e) => {
        if (e.target._animateToZoom < 4) {
          this.exitFullScreen();
        }
      });
    },
    centerMap: function (e) {
      const center = [e.latlng.lat, e.latlng.lng];
      this.map.panTo(center);
    },
    enterFullScreen: function () {
      this.map.invalidateSize();
      try {
        this.$refs.wrapper.animate([
          {
            height: window.innerWidth > 767 ? "100vh" : "-webkit-fill-available"
          }
        ], {
          duration: 150,
          easing: "ease-out",
          fill: "forwards"
        });
      } catch {
        this.$refs.wrapper.style.height = window.innerWidth > 767 ? "100vh" : "-webkit-fill-available";
      }
      this.fullscreen = true;
      this.map._handlers.forEach((handler) => handler.enable());
    },
    exitFullScreen: function () {
      try {
        this.$refs.wrapper.animate([
          {
            height: window.innerWidth > 767 ? "900px" : "-webkit-fill-available"
          }
        ], {
          duration: 150,
          easing: "ease-out",
          fill: "forwards"
        });
      } catch {
        this.$refs.wrapper.style.height = window.innerWidth > 767 ? "900px" : "-webkit-fill-available";
      }
      this.$refs.headerText._exitFullScreen();
      this.fullscreen = false;
      this.map._handlers.forEach((handler) => handler.disable());
      this.map.closePopup();
      this.map.setZoom(this.zoom);
    },
    isTouchDevice: function () {
      return (("ontouchstart" in window)
        || (navigator.maxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
    },
    getLatLngCenter: function (data) {
      let sumX = 0;
      let sumY = 0;
      let sumZ = 0;
      const length = data.length;

      data.forEach((mark) => {
        const lat = this.degr2rad(mark.lat);
        const lng = this.degr2rad(mark.lng);
        // sum of cartesian coordinates
        sumX += Math.cos(lat) * Math.cos(lng);
        sumY += Math.cos(lat) * Math.sin(lng);
        sumZ += Math.sin(lat);
      });

      const avgX = sumX / length;
      const avgY = sumY / length;
      const avgZ = sumZ / length;

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
