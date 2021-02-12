<template>
  <main>
    <div class="media-player__wrapper">
      <MapHeader
      />
    </div>
    <div class="stepper__wrapper">
      <Stepper
      :steps="stepper.steps"
      :arrowRight="stepper.icon"
      />
    </div>
  </main>
</template>

<script>
import MapHeader from "./components/map-header/MapHeader.vue";
import Stepper from "./components/stepper/Stepper.vue";

export default {
  name: "App",
  components: {
    MapHeader,
    Stepper
  },
  data: () => ({
    stepper: {
      steps: [
        {
          "text": "Start",
          "active": false,
          "link": {
            "id": "cb962fe3-fae5-4693-b8fe-ee9300b7ad62"
          }
        },
        {
          "text": "Planning",
          "active": true
        },
        {
          "text": "Production",
          "active": false
        },
        {
          "text": "Finish",
          "active": false,
          "link": {
            "id": "ad1b7d34-565a-45b9-8578-0d1f0ac99ee6"
          }
        }
      ],
      icon: require("@/assets/images/spotify.svg")
    },
    mediaplayer: {
      title: "Episode 1",
      image: "https://thumborcdn.acast.com/qvuqJgOCsWGpyd1FNBslwMbSpQQ=/500x500/https%3A%2F%2Fmediacdn.acast.com%2Fassets%2F875f5680-6bf6-46ad-8689-44aeb78b4b86%2F-jz2ldxt6-pod_f5_3.jpeg",
      subtitle: "Der ingen andre vil fly",
      ingress: "På bakken i Gao dukker det opp en uanmeldt passasjer. Geir må ta en avgjørelse. Og Tom står like ved når det smeller. Fram til november 2019 er norske soldater på oppdrag i Mali. Der deltar de i det som omtales som verdens farligste FN-oppdrag. Del 2 av 2.",
      link: {
        link: "https://google.com/",
        text: "Les mer"
      },
      icons: {
        arrowRight: require("@/assets/images/arrow-right.svg"),
        play: require("@/assets/images/play.svg"),
        pause: require("@/assets/images/pause.svg"),
        volume0: require("@/assets/images/Volume-0.svg"),
        volume33: require("@/assets/images/Volume-33.svg"),
        volume66: require("@/assets/images/Volume-66.svg"),
        volume100: require("@/assets/images/Volume-100.svg")
      },
      mediaHeader: "Våre historier - en podkast fra forsvaret",
      audio: {
        title: "Der ingen andre vil fly",
        header: "Teaser: Epsiode 1",
        description: "På bakken i Gao dukker det opp en uanmeldt passasjer. Geir må ta en avgjørelse. Og Tom står like ved når det smeller.",
        cover: "https://thumborcdn.acast.com/qvuqJgOCsWGpyd1FNBslwMbSpQQ=/500x500/https%3A%2F%2Fmediacdn.acast.com%2Fassets%2F875f5680-6bf6-46ad-8689-44aeb78b4b86%2F-jz2ldxt6-pod_f5_3.jpeg",
        src: "https://embed.acast.com/forsvaret/deringenandrevilfly-2-2-"
      },
      linksHeader: "Strømming",
      links: [
        {
          title: "Der ingen andre vil fly",
          subtitle: "Lytt til episode 1 i Spotify",
          link: "https://spotify.com",
          icon: require("@/assets/images/spotify.svg")
        },
        {
          title: "Der ingen andre vil fly",
          subtitle: "Lytt til episode 1 i Apple Podcasts",
          link: "https://apple.com",
          icon: require("@/assets/images/apple-podcasts.svg")
        },
        {
          title: "Der ingen andre vil fly",
          subtitle: "Lytt til episode 1 i Acast",
          link: "https://acast.com",
          icon: require("@/assets/images/castbox.svg")
        }
      ]
    },
    promocards: [
      {
        title: "2011",
        decoration: {
          icon: {
            src: require("@/assets/images/medalje.svg")
          },
          caption: "Post Mortem"
        },
        text: "Trond André Bolle"
      },
      {
        title: "02",
        text: "De fleste konflikter krever territoriell kontroll ved nærvær av soldater på bakken og her har Hæren den viktigste rollen."
      },
      {
        title: "03",
        text: "De fleste konflikter krever territoriell kontroll ved nærvær av soldater på bakken og her har Hæren den viktigste rollen."
      }
    ],
    soundIcons: {
      off: require("@/assets/images/sound-off.svg"),
      on: require("@/assets/images/sound-on.svg")
    },
    stories: [
      {
        title: "Hæren",
        profilePic: "https://s3.amazonaws.com/idme-wordpress-military/wp-content/uploads/2016/03/30093822/9e59fb402b777f6ba30668ad38ef9640_original.png",
        storyItems: [
          {
            type: "image",
            image: "https://images.unsplash.com/photo-1587390307784-d2769f6457e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
          }
        ]
      },
      {
        title: "Sjøforsvaret",
        profilePic: "https://images.dn.no/image/cDVHKytINUZRNmtoTnUrYWpJNXF1WGRYSFVqVG9NeGNxZFIwTk9IWGxBaz0=/nhst/binary/7288c27075eb527a34b284bb2569f689?image_version=800",
        storyItems: [
          {
            type: "video",
            qbrick: {
              _id: "55ab855c-e640-4125-8871-c85fe1cc0f1a",
              _name: "qbm",
              _path: "/no/qbm",
              creator: "user:system:ole.saggau",
              modifier: "user:system:anonymous",
              createdTime: "2020-06-30T10:23:25.567888Z",
              modifiedTime: "2020-06-30T10:42:03.993048Z",
              owner: "user:system:ole.saggau",
              type: "no.bouvet.forsvaret:video-qbrick",
              displayName: "qbm",
              hasChildren: true,
              language: "no",
              valid: true,
              childOrder: "modifiedtime DESC",
              data: {
                mediaId: "94ccc6f0-00090342-f4f60650",
                image: "4c14a3d7-895f-43e1-a6f8-e35694ddc4d9",
                qbrick: {
                  id: "94ccc6f0-00090342-f4f60650",
                  created: "2020-06-24T09:43:17+00:00",
                  updated: "2020-06-29T08:02:36+00:00",
                  asset: {
                    id: "94ccc6f0-00090342",
                    created: "2020-06-24T09:44:53+00:00",
                    updated: "2020-06-29T08:02:36+00:00",
                    createdBy: {
                      id: "UseowkQ67oCKkSSO3DXztWgdw"
                    },
                    updatedBy: {
                      id: "sagauser"
                    },
                    name: "94ccc6f0-00090342",
                    resources: [
                      {
                        type: "image",
                        id: "1592991893407",
                        language: "en",
                        renditions: [
                          {
                            type: "image",
                            width: 640,
                            height: 360,
                            id: "9f2ea5072cf8bc0e0b52e4fa2273acaf",
                            size: 39609,
                            links: {
                              href: "https://b04c4cdda535481481752ac48c29793d-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_360p_01.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 256,
                            height: 144,
                            id: "9caf75db36edc92393a5552df84bdf74",
                            size: 8336,
                            links: {
                              href: "https://8515106773e40f0c2cb00e6491e743c4-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_144p_01.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 1280,
                            height: 720,
                            id: "c50288a815e0f654e10aed7d5ba859cf",
                            size: 103249,
                            links: {
                              href: "https://672899b72e6fda98e3ba58934ddc213f-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_720p_01.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 1024,
                            height: 576,
                            id: "26fc4f4f13ef17d9e01388b327f2879a",
                            size: 76054,
                            links: {
                              href: "https://297d3e219ff12fc0bc7bdb4d692c55f9-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_576p_01.jpg",
                              mimeType: "image/jpg"
                            }
                          }
                        ]
                      },
                      {
                        type: "image",
                        id: "1592991893442",
                        language: "en",
                        rel: "thumbnail",
                        renditions: [
                          {
                            type: "image",
                            width: 1280,
                            height: 720,
                            id: "a77b6dcaaeb0ae85d8203d92dac838cb",
                            size: 89410,
                            links: {
                              href: "https://3ebb95722148869f5e2c6c3cb399eddb-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_720p_02.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 1024,
                            height: 576,
                            id: "e576592aaca8587de1b324441ea30192",
                            size: 65574,
                            links: {
                              href: "https://ef2cea1e068e39a4fc4e45895ae1bcf9-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_576p_02.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 640,
                            height: 360,
                            id: "73533fbe01541bb0d068aea2e2efd1c9",
                            size: 33516,
                            links: {
                              href: "https://1964b9b72be3b1b1f48046455888052c-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_360p_02.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 256,
                            height: 144,
                            id: "f5207f1fa3c230f7314f160ca3b48dac",
                            size: 9285,
                            links: {
                              href: "https://62e0d94a08179c2a51c0c9ecb6c39d48-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_144p_02.jpg",
                              mimeType: "image/jpg"
                            }
                          }
                        ]
                      },
                      {
                        type: "index",
                        id: "1592991893331",
                        language: "en",
                        renditions: {
                          type: "index",
                          references: [
                            {
                              order: 1,
                              item: {
                                resource: {
                                  id: "1592991893148"
                                },
                                rendition: {
                                  id: "1"
                                }
                              }
                            },
                            {
                              order: 2,
                              item: {
                                resource: {
                                  id: "1592991893148"
                                },
                                rendition: {
                                  id: "5"
                                }
                              }
                            },
                            {
                              order: 3,
                              item: {
                                resource: {
                                  id: "1592991893148"
                                },
                                rendition: {
                                  id: "3"
                                }
                              }
                            },
                            {
                              order: 4,
                              item: {
                                resource: {
                                  id: "1592991893148"
                                },
                                rendition: {
                                  id: "7"
                                }
                              }
                            },
                            {
                              order: 5,
                              item: {
                                resource: {
                                  id: "1592991893148"
                                },
                                rendition: {
                                  id: "0"
                                }
                              }
                            },
                            {
                              order: 6,
                              item: {
                                resource: {
                                  id: "1592991893148"
                                },
                                rendition: {
                                  id: "6"
                                }
                              }
                            },
                            {
                              order: 7,
                              item: {
                                resource: {
                                  id: "1592991893148"
                                },
                                rendition: {
                                  id: "4"
                                }
                              }
                            },
                            {
                              order: 8,
                              item: {
                                resource: {
                                  id: "1592991893148"
                                },
                                rendition: {
                                  id: "2"
                                }
                              }
                            }
                          ],
                          id: "94ccc6f0-00090342-043cc4e3",
                          size: 755,
                          links: [
                            {
                              href: "https://3cefe0d8473a961bb6eec47069440da9-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge.smil",
                              mimeType: "application/smil+xml"
                            },
                            {
                              href: "https://3cefe0d8473a961bb6eec47069440da9-httpcache0-90342-cacheod0.dna.ip-only.net/90342-cacheod0/_definst_/smil:assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge/playlist.m3u8",
                              mimeType: "application/x-mpegURL"
                            },
                            {
                              href: "https://3cefe0d8473a961bb6eec47069440da9-httpcache0-90342-cacheod0.dna.ip-only.net/90342-cacheod0/_definst_/smil:assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge/manifest.f4m",
                              mimeType: "application/hds+xml"
                            },
                            {
                              href: "https://3cefe0d8473a961bb6eec47069440da9-httpcache0-90342-cacheod0.dna.ip-only.net/90342-cacheod0/_definst_/smil:assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge/manifest.mpd",
                              mimeType: "application/dash+xml"
                            },
                            {
                              href: "https://3cefe0d8473a961bb6eec47069440da9-httpcache0-90342-cacheod0.dna.ip-only.net/90342-cacheod0/_definst_/smil:assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge/Manifest",
                              mimeType: "application/vnd.ms-sstr+xml"
                            }
                          ]
                        }
                      },
                      {
                        type: "video",
                        id: "1592991893148",
                        language: "en",
                        renditions: [
                          {
                            type: "video",
                            videos: {
                              bitrate: 2496000,
                              codec: "H.264",
                              width: 1024,
                              height: 576,
                              duration: 64.017,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "1",
                            size: 18843333,
                            links: {
                              href: "https://f5c01fb01605c6c977cc4b8c7765ea6b-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_576p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 3628000,
                              codec: "H.264",
                              width: 1280,
                              height: 720,
                              duration: 64.017,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "3",
                            size: 27377587,
                            links: {
                              href: "https://7ea2d69edfa817f3a36ac3ac448c5d3b-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_720p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 5128000,
                              codec: "H.264",
                              width: 1920,
                              height: 1080,
                              duration: 64.017,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "5",
                            size: 38838573,
                            links: {
                              href: "https://20d55f1807c011af1b67ab5f88526f62-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_1080p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 496000,
                              codec: "H.264",
                              width: 512,
                              height: 288,
                              duration: 64.017,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "6",
                            size: 3842124,
                            links: {
                              href: "https://405dc56d6f87b9fdd5bd96e8906a8e21-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_288p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 1696000,
                              codec: "H.264",
                              width: 768,
                              height: 432,
                              duration: 64.017,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "7",
                            size: 12813075,
                            links: {
                              href: "https://a3b7f2687a1093e3ea3860310a3b2656-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_432p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 164000,
                              codec: "H.264",
                              width: 256,
                              height: 144,
                              duration: 64.017,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "2",
                            size: 1289046,
                            links: {
                              href: "https://095bca5a911dbf260c6e61e8059b3baf-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_144p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 1096000,
                              codec: "H.264",
                              width: 640,
                              height: 360,
                              duration: 64.017,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "0",
                            size: 8305885,
                            links: {
                              href: "https://13e23b3900c7234063bde2eb8128f8b7-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_360p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 260000,
                              codec: "H.264",
                              width: 384,
                              height: 216,
                              duration: 64.017,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "4",
                            size: 2035536,
                            links: {
                              href: "https://7f7419a499e8cc04a10629feed1236a0-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/94/94ccc6f0-00090342/KNM%20Maud%20overtatt%20av%20Norge_216p.mp4",
                              mimeType: "video/mp4"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  metadata: {
                    title: "KNM Maud overtatt av Norge.mp4",
                    description: "asdfasda.  sdasd sdsdasd sd"
                  },
                  catalog: {
                    id: "2bf0a76a-f4db-46e3-a765-849f55be8cd5"
                  },
                  html: {
                    "data-gobrain-widgetId": "55ab855c-e640-4125-8871-c85fe1cc0f1a-1593513723904-player",
                    "data-gobrain-autoplay": "false",
                    "data-gobrain-repeat": "false",
                    "data-gobrain-moduleSettings": "{&quot;Controls&quot;:{&quot;download&quot;:{&quot;enabled&quot;:false},&quot;sharing&quot;:{&quot;enabled&quot;:false}}}",
                    "data-gobrain-config": "//video.qbrick.com/play2/api/v1/accounts/AcctIaRI6GYGUWLBk6zITyt2A/configurations/default",
                    "data-gobrain-data": "//api.qbrick.com/api/v1/public/accounts/AcctIaRI6GYGUWLBk6zITyt2A/medias/94ccc6f0-00090342-f4f60650"
                  },
                  script: "<script src=\"//play2.qbrick.com/framework/GoBrain.min.js\"/>"
                },
                description: "asdfasda.  sdasd sdsdasd sd"
              },
              x: {
                "com-enonic-app-metafields": {
                  "meta-data": {
                    blockRobots: false
                  }
                }
              },
              page: {},
              attachments: {},
              publish: {}
            }
          },
          {
            type: "image",
            image: "https://images.unsplash.com/photo-1587390307784-d2769f6457e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
          },
          {
            type: "video",
            qbrick: {
              _id: "d4011318-f56f-43da-9b3e-0fb36402b7e1",
              _name: "qbm9-16",
              _path: "/no/qbm9-16",
              creator: "user:system:ole.saggau",
              modifier: "user:system:anonymous",
              createdTime: "2020-07-31T08:02:45.565125Z",
              modifiedTime: "2020-07-31T08:12:51.660173Z",
              owner: "user:system:ole.saggau",
              type: "no.bouvet.forsvaret:video-qbrick",
              displayName: "qbm9-16",
              hasChildren: true,
              language: "no",
              valid: true,
              childOrder: "modifiedtime DESC",
              data: {
                mediaId: "afaac66f-00090342-68e29f3e",
                image: "fa114a31-7018-4264-a43f-6e28b3b0ae8d",
                qbrick: {
                  id: "afaac66f-00090342-68e29f3e",
                  created: "2020-07-31T08:11:14+00:00",
                  updated: "2020-07-31T08:12:18+00:00",
                  asset: {
                    id: "afaac66f-00090342",
                    created: "2020-07-31T08:12:18+00:00",
                    updated: "2020-07-31T08:12:28+00:00",
                    createdBy: {
                      id: "UseowkQ67oCKkSSO3DXztWgdw"
                    },
                    updatedBy: {
                      id: "UseowkQ67oCKkSSO3DXztWgdw"
                    },
                    name: "afaac66f-00090342",
                    resources: [
                      {
                        type: "image",
                        id: "1596183138277",
                        language: "en",
                        renditions: [
                          {
                            type: "image",
                            width: 576,
                            height: 1024,
                            id: "2bd14f1e11dc23e59af52b31c12f6f06",
                            size: 83602,
                            links: {
                              href: "https://8164890cbc3958d36274a205caff9d00-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_576p_01.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 288,
                            height: 512,
                            id: "1f9129e81fac6bbe12d3fa2884f0a280",
                            size: 33400,
                            links: {
                              href: "https://aab13bfe895e65079baa6a10f7ffb986-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_288p_01.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 360,
                            height: 640,
                            id: "9132994498af835c99f9b784bc6b0021",
                            size: 45222,
                            links: {
                              href: "https://fe03ac3ca3464b7d3db0fa8a41dece0f-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_360p_01.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 144,
                            height: 256,
                            id: "cc3691b907ffd4a5365f98fe96d07d13",
                            size: 13088,
                            links: {
                              href: "https://287f54f84df811240bfd23c8a49c7e8f-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_144p_01.jpg",
                              mimeType: "image/jpg"
                            }
                          }
                        ]
                      },
                      {
                        type: "image",
                        id: "1596183138311",
                        language: "en",
                        rel: "thumbnail",
                        renditions: [
                          {
                            type: "image",
                            width: 576,
                            height: 1024,
                            id: "912504fb58839a792223bdb4c76d8f1d",
                            size: 92915,
                            links: {
                              href: "https://38b1d80a4ea388a6bc1f4e5c0f58251c-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_576p_02.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 360,
                            height: 640,
                            id: "083683cfa847e75e89ad645ff239d742",
                            size: 50145,
                            links: {
                              href: "https://378980315bf037d6d341ca9eb844cf8f-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_360p_02.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 288,
                            height: 512,
                            id: "869d5a91c6598a93749feb1f26a83877",
                            size: 37170,
                            links: {
                              href: "https://7ac85074b3013877f21b7537326c2767-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_288p_02.jpg",
                              mimeType: "image/jpg"
                            }
                          },
                          {
                            type: "image",
                            width: 144,
                            height: 256,
                            id: "4e3efec4b06b05eaa9c9b673775388d9",
                            size: 14381,
                            links: {
                              href: "https://c19f894d5470c704ed1f9aafc7894008-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_144p_02.jpg",
                              mimeType: "image/jpg"
                            }
                          }
                        ]
                      },
                      {
                        type: "index",
                        id: "1596183138209",
                        language: "en",
                        renditions: {
                          type: "index",
                          references: [
                            {
                              order: 1,
                              item: {
                                resource: {
                                  id: "1596183138082"
                                },
                                rendition: {
                                  id: "3"
                                }
                              }
                            },
                            {
                              order: 2,
                              item: {
                                resource: {
                                  id: "1596183138082"
                                },
                                rendition: {
                                  id: "5"
                                }
                              }
                            },
                            {
                              order: 3,
                              item: {
                                resource: {
                                  id: "1596183138082"
                                },
                                rendition: {
                                  id: "1"
                                }
                              }
                            },
                            {
                              order: 4,
                              item: {
                                resource: {
                                  id: "1596183138082"
                                },
                                rendition: {
                                  id: "6"
                                }
                              }
                            },
                            {
                              order: 5,
                              item: {
                                resource: {
                                  id: "1596183138082"
                                },
                                rendition: {
                                  id: "2"
                                }
                              }
                            },
                            {
                              order: 6,
                              item: {
                                resource: {
                                  id: "1596183138082"
                                },
                                rendition: {
                                  id: "4"
                                }
                              }
                            },
                            {
                              order: 7,
                              item: {
                                resource: {
                                  id: "1596183138082"
                                },
                                rendition: {
                                  id: "0"
                                }
                              }
                            }
                          ],
                          id: "afaac66f-00090342-f9472827",
                          size: 755,
                          links: [
                            {
                              href: "https://e0d2e4974326d3e90ee7377ee012b093-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916.smil",
                              mimeType: "application/smil+xml"
                            },
                            {
                              href: "https://e0d2e4974326d3e90ee7377ee012b093-httpcache0-90342-cacheod0.dna.ip-only.net/90342-cacheod0/_definst_/smil:assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916/playlist.m3u8",
                              mimeType: "application/x-mpegURL"
                            },
                            {
                              href: "https://e0d2e4974326d3e90ee7377ee012b093-httpcache0-90342-cacheod0.dna.ip-only.net/90342-cacheod0/_definst_/smil:assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916/manifest.f4m",
                              mimeType: "application/hds+xml"
                            },
                            {
                              href: "https://e0d2e4974326d3e90ee7377ee012b093-httpcache0-90342-cacheod0.dna.ip-only.net/90342-cacheod0/_definst_/smil:assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916/manifest.mpd",
                              mimeType: "application/dash+xml"
                            },
                            {
                              href: "https://e0d2e4974326d3e90ee7377ee012b093-httpcache0-90342-cacheod0.dna.ip-only.net/90342-cacheod0/_definst_/smil:assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916/Manifest",
                              mimeType: "application/vnd.ms-sstr+xml"
                            }
                          ]
                        }
                      },
                      {
                        type: "video",
                        id: "1596183138082",
                        language: "en",
                        renditions: [
                          {
                            type: "video",
                            videos: {
                              bitrate: 164000,
                              codec: "H.264",
                              width: 144,
                              height: 256,
                              duration: 10.055,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "0",
                            size: 217580,
                            links: {
                              href: "https://fb8118fe966d68bf31fefb9b62cb23dd-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_144p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 496000,
                              codec: "H.264",
                              width: 288,
                              height: 512,
                              duration: 10.055,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "2",
                            size: 644884,
                            links: {
                              href: "https://ddd55adb0285414f15fd00fb9d170e35-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_288p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 3628000,
                              codec: "H.264",
                              width: 720,
                              height: 1280,
                              duration: 10.055,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "5",
                            size: 4712976,
                            links: {
                              href: "https://85ff9ca5448dda68ff76dc4db06641d7-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_720p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 260000,
                              codec: "H.264",
                              width: 216,
                              height: 384,
                              duration: 10.055,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "4",
                            size: 338164,
                            links: {
                              href: "https://c6b3ed1165b893a4930086f1fe3e6450-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_216p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 1696000,
                              codec: "H.264",
                              width: 432,
                              height: 768,
                              duration: 10.055,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "1",
                            size: 2202729,
                            links: {
                              href: "https://1ff317d377f3f3e232a3ce39129ddeac-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_432p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 2496000,
                              codec: "H.264",
                              width: 576,
                              height: 1024,
                              duration: 10.055,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "3",
                            size: 3287940,
                            links: {
                              href: "https://909a4b10ba792cefddd268bb08ab2866-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_576p.mp4",
                              mimeType: "video/mp4"
                            }
                          },
                          {
                            type: "video",
                            videos: {
                              bitrate: 1096000,
                              codec: "H.264",
                              width: 360,
                              height: 640,
                              duration: 10.055,
                              audios: {
                                codec: "HE-AAC",
                                sampleRate: 48000,
                                bitDepth: 16,
                                channels: 2
                              }
                            },
                            id: "6",
                            size: 1421540,
                            links: {
                              href: "https://e1687cc401e9497af59a45184c42d151-httpcache0-90342-cachedown0.dna.ip-only.net/90342-cachedown0/assets/af/afaac66f-00090342/Marinejegeren%20og%20opptaket%20-%20test%203%20916_360p.mp4",
                              mimeType: "video/mp4"
                            }
                          }
                        ]
                      }
                    ],
                    references: {
                      id: "afaac66f-00090342-68e29f3e",
                      type: "Media"
                    }
                  },
                  metadata: {
                    title: "Marinejegeren og opptaket - test 3 916.mp4"
                  },
                  catalog: {
                    id: "2bf0a76a-f4db-46e3-a765-849f55be8cd5"
                  },
                  html: {
                    "data-gobrain-widgetId": "d4011318-f56f-43da-9b3e-0fb36402b7e1-1596183171535-player",
                    "data-gobrain-autoplay": "false",
                    "data-gobrain-repeat": "false",
                    "data-gobrain-moduleSettings": "{&quot;Controls&quot;:{&quot;download&quot;:{&quot;enabled&quot;:false},&quot;sharing&quot;:{&quot;enabled&quot;:false}}}",
                    "data-gobrain-config": "//video.qbrick.com/play2/api/v1/accounts/AcctIaRI6GYGUWLBk6zITyt2A/configurations/default",
                    "data-gobrain-data": "//api.qbrick.com/api/v1/public/accounts/AcctIaRI6GYGUWLBk6zITyt2A/medias/afaac66f-00090342-68e29f3e"
                  },
                  script: "<script src=\"//play2.qbrick.com/framework/GoBrain.min.js\" />"
                }
              },
              x: {
                "com-enonic-app-metafields": {
                  "meta-data": {
                    blockRobots: false
                  }
                }
              },
              page: {},
              attachments: {},
              publish: {}
            }
          }
        ]
      },
      {
        title: "Luftforsvaret",
        profilePic: "https://pbs.twimg.com/profile_images/1177676760768532481/Q9f_EyrG_400x400.jpg",
        storyItems: [
          {
            type: "image",
            image: "https://images.unsplash.com/photo-1587390307784-d2769f6457e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
          },
          {
            type: "image",
            image: "https://images.unsplash.com/photo-1587390307784-d2769f6457e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
          },
          {
            type: "image",
            image: "https://images.unsplash.com/photo-1587390307784-d2769f6457e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
          }
        ]
      }
    ],
    questions: [
      {
        text: "Test spørsmål",
        desc: "Beskrivelse",
        isImageLeft: false,
        options: [
          {
            text: "Test1",
            isCorrect: true
          },
          {
            text: "Test2",
            isCorrect: false
          }
        ]
      }
    ]
  })
};
</script>
