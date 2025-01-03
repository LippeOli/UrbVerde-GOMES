import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.opencagedata.com/geocode/v1/json', () => HttpResponse.json({
    documentation: 'https://opencagedata.com/api',
    licenses: [
      {
        name: 'see attribution guide',
        url: 'https://opencagedata.com/credits'
      }
    ],
    rate: {
      limit: 2500,
      remaining: 2419,
      reset: 1735948800
    },
    results: [
      {
        annotations: {
          DMS: {
            lat: "10° 19' 59.99988'' S",
            lng: "53° 12' 0.00000'' W"
          },
          MGRS: '22LBP5908356902',
          Maidenhead: 'GH39jq60aa',
          Mercator: {
            x: -5922196.91,
            y: -1148929.02
          },
          OSM: {
            edit_url: 'https://www.openstreetmap.org/edit?relation=59470#map=17/-10.33333/-53.20000',
            note_url: 'https://www.openstreetmap.org/note/new#map=17/-10.33333/-53.20000&layers=N',
            url: 'https://www.openstreetmap.org/?mlat=-10.33333&mlon=-53.20000#map=17/-10.33333/-53.20000'
          },
          UN_M49: {
            regions: {
              AMERICAS: '019',
              BR: '076',
              LATIN_AMERICA: '419',
              SOUTH_AMERICA: '005',
              WORLD: '001'
            },
            statistical_groupings: ['LEDC']
          },
          callingcode: 55,
          currency: {
            decimal_mark: ',',
            html_entity: 'R$',
            iso_code: 'BRL',
            iso_numeric: '986',
            name: 'Brazilian Real',
            smallest_denomination: 5,
            subunit: 'Centavo',
            subunit_to_unit: 100,
            symbol: 'R$',
            symbol_first: 1,
            thousands_separator: '.'
          },
          flag: '🇧🇷',
          geohash: '6y4jjqugyphcferweqpx',
          qibla: 69.34,
          roadinfo: {
            drive_on: 'right',
            speed_in: 'km/h'
          },
          sun: {
            rise: {
              apparent: 1735895820,
              astronomical: 1735891200,
              civil: 1735894440,
              nautical: 1735892820
            },
            set: {
              apparent: 1735941480,
              astronomical: 1735946100,
              civil: 1735942860,
              nautical: 1735944480
            }
          },
          timezone: {
            name: 'America/Cuiaba',
            now_in_dst: 0,
            offset_sec: -14400,
            offset_string: '-0400',
            short_name: '-04'
          },
          what3words: {
            words: 'muffled.deduced.tempo'
          },
          wikidata: 'Q155'
        },
        bounds: {
          northeast: {
            lat: 5.2695808,
            lng: -28.6289646
          },
          southwest: {
            lat: -33.8694284,
            lng: -73.9830625
          }
        },
        components: {
          'ISO_3166-1_alpha-2': 'BR',
          'ISO_3166-1_alpha-3': 'BRA',
          _category: 'place',
          _type: 'country',
          continent: 'South America',
          country: 'Brasil',
          country_code: 'br'
        },
        confidence: 1,
        formatted: 'Brasil',
        geometry: {
          lat: -10.3333333,
          lng: -53.2
        }
      }
    ],
    status: {
      code: 200,
      message: 'OK'
    },
    stay_informed: {
      blog: 'https://blog.opencagedata.com',
      mastodon: 'https://en.osm.town/@opencage'
    },
    thanks: 'For using an OpenCage API',
    timestamp: {
      created_http: 'Fri, 03 Jan 2025 17:05:40 GMT',
      created_unix: 1735923940
    },
    total_results: 1,
  })),
];
