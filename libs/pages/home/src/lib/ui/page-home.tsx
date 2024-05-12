import { classNames } from '@nooota/utils';
import { Icon } from '@nooota/ui';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    "id": "Dissatisfied",
    "data": [
      {
        "x": "Lundi",
        "y": 138
      },
      {
        "x": "Mardi",
        "y": 104
      },
      {
        "x": "Mercredi",
        "y": 101
      },
      {
        "x": "Jeudi",
        "y": 130
      },
      {
        "x": "Vendredi",
        "y": 98
      },
      {
        "x": "Samedi",
        "y": 78
      },
      {
        "x": "Dimanche",
        "y": 88
      },
    ]
  },
  {
    "id": "Neutral",
    "data": [
      {
        "x": "Lundi",
        "y": 100
      },
      {
        "x": "Mardi",
        "y": 121
      },
      {
        "x": "Mercredi",
        "y": 105
      },
      {
        "x": "Jeudi",
        "y": 117
      },
      {
        "x": "Vendredi",
        "y": 100
      },
      {
        "x": "Samedi",
        "y": 73
      },
      {
        "x": "Dimanche",
        "y": 98
      },
    ]
  },
  {
    "id": "Satisfied",
    "data": [
      {
        "x": "Lundi",
        "y": 110
      },
      {
        "x": "Mardi",
        "y": 140
      },
      {
        "x": "Mercredi",
        "y": 100
      },
      {
        "x": "Jeudi",
        "y": 154
      },
      {
        "x": "Vendredi",
        "y": 156
      },
      {
        "x": "Samedi",
        "y": 188
      },
      {
        "x": "Dimanche",
        "y": 122
      },
    ]
  },
]
const stats = [
  { name: 'Revenue', value: '$50,000', change: '6%', changeType: 'positive', icon: 'solar:card-recive-linear' },
  { name: 'Conversion Rate', value: '60%', change: '7%', changeType: 'positive', icon: 'solar:card-recive-linear' },
  { name: 'Average Order Value', value: '$250', change: '3%', changeType: 'negative', icon: 'solar:card-recive-linear' },
]

export function PageHome() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 flex flex-col">
          <div>
            <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white p-6 rounded-lg border border-gray-300 sm:px-6 xl:px-8"
                >
                  <div className="flex items-center gap-2 text-gray-900">
                    <Icon name={stat.icon} className="text-2xl" />
                    <span className="text-sm leading-6 font-semibold">{stat.name}</span>
                  </div>


                  <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                    {stat.value}
                  </dd>

                  <div className="flex items-center gap-2">
                    <span
                      className={classNames(
                        stat.changeType === 'positive' ? 'text-green-600 bg-green-100/20' : 'text-red-600 bg-red-100/20',
                        'text-sm font-medium leading-6 flex items-center gap-1 border rounded-full px-1'
                      )}
                    >
                      {stat.changeType === 'positive' ? (
                        <Icon name={'material-symbols:arrow-upward-alt-rounded'} />
                      ) : (
                        <Icon name={'material-symbols:arrow-downward-alt-rounded'} />
                      )}
                      {stat.change}
                    </span>

                    <span className="text-gray-400">vs last month</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-300 p-4 rounded-lg mt-4 flex flex-col">

              <span className="text-lg text-gray-800 font-bold">Customer activities</span>

              <div className="pt-4 grid grid-cols-4">
                <div className="flex  flex-col gap-1">
                  <span className="text-xs text-gray-500">Visitor</span>

                  <span className="font-bold text-lg">1400</span>

                  <div className="flex items-center gap-2">
                    <span
                      className={classNames(
                        'text-green-600 bg-green-100/20',
                        'text-xs font-medium leading-6 flex items-center gap-1 border rounded-full px-1'
                      )}
                    >
                     <Icon name={'material-symbols:arrow-upward-alt-rounded'} />
                      5%
                    </span>

                    <span className="text-gray-400 text-xs">vs last month</span>
                  </div>
                </div>

                <div className="flex  flex-col gap-1">
                  <span className="text-xs text-gray-500">Add to Cart</span>

                  <span className="font-bold text-lg">300</span>

                  <div className="flex items-center gap-2">
                    <span
                      className={classNames(
                        'text-red-600 bg-red-100/20',
                        'text-xs font-medium leading-6 flex items-center gap-1 border rounded-full px-1'
                      )}
                    >
                     <Icon name={'material-symbols:arrow-downward-alt-rounded'} />
                      7.14%
                    </span>

                    <span className="text-gray-400 text-xs">vs last month</span>
                  </div>
                </div>

                <div className="flex  flex-col gap-1">
                  <span className="text-xs text-gray-500">Check out</span>

                  <span className="font-bold text-lg">75</span>

                  <div className="flex items-center gap-2">
                    <span
                      className={classNames(
                        'text-green-600 bg-green-100/20',
                        'text-xs font-medium leading-6 flex items-center gap-1 border rounded-full px-1'
                      )}
                    >
                     <Icon name={'material-symbols:arrow-upward-alt-rounded'} />
                      6.12%
                    </span>

                    <span className="text-gray-400 text-xs">vs last month</span>
                  </div>
                </div>
              </div>
              <div className="h-[500px]">
                <ResponsiveBar
                  data={[
                    {
                      'country': 'AD',
                      'hot dog': 103,
                      'hot dogColor': 'hsl(269, 70%, 50%)',
                      'burger': 69,
                      'burgerColor': 'hsl(171, 70%, 50%)',
                      'sandwich': 74,
                      'sandwichColor': 'hsl(177, 70%, 50%)'
                    },
                    {
                      'country': 'AE',
                      'hot dog': 191,
                      'hot dogColor': 'hsl(269, 70%, 50%)',
                      'burger': 138,
                      'burgerColor': 'hsl(173, 70%, 50%)',
                      'sandwich': 20,
                      'sandwichColor': 'hsl(33, 70%, 50%)'
                    },
                    {
                      "country": "AF",
                      "hot dog": 79,
                      "hot dogColor": "hsl(269, 70%, 50%)",
                      "burger": 95,
                      "burgerColor": "hsl(33, 70%, 50%)",
                      "sandwich": 18,
                      "sandwichColor": "hsl(187, 70%, 50%)",
                    },
                    {
                      "country": "AG",
                      "hot dog": 32,
                      "hot dogColor": "hsl(269, 70%, 50%)",
                      "burger": 102,
                      "burgerColor": "hsl(22, 70%, 50%)",
                      "sandwich": 128,
                      "sandwichColor": "hsl(237, 70%, 50%)",
                    },
                    {
                      "country": "AI",
                      "hot dog": 19,
                      "hot dogColor": "hsl(336, 70%, 50%)",
                      "burger": 9,
                      "burgerColor": "hsl(155, 70%, 50%)",
                      "sandwich": 69,
                      "sandwichColor": "hsl(124, 70%, 50%)",
                    },
                    {
                      "country": "AL",
                      "hot dog": 87,
                      "hot dogColor": "hsl(130, 70%, 50%)",
                      "burger": 16,
                      "burgerColor": "hsl(38, 70%, 50%)",
                      "sandwich": 75,
                      "sandwichColor": "hsl(147, 70%, 50%)",
                    },
                    {
                      "country": "AM",
                      "hot dog": 79,
                      "hot dogColor": "hsl(9, 70%, 50%)",
                      "burger": 161,
                      "burgerColor": "hsl(268, 70%, 50%)",
                      "sandwich": 21,
                      "sandwichColor": "hsl(85, 70%, 50%)",
                    }
                  ]}
                  keys={[
                    'hot dog',
                    'burger',
                    'sandwich',
                  ]}
                  indexBy="country"
                  margin={{ top: 50, right: 30, bottom: 100, left: 30 }}
                  padding={0.5}
                  colors={{ scheme: 'paired' }}
                  enableLabel={false}
                  innerPadding={4}
                  groupMode="grouped"
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}

                  fill={[
                    {
                      match: {
                        id: 'fries'
                      },
                      id: 'dots'
                    },
                    {
                      match: {
                        id: 'sandwich'
                      },
                      id: 'lines'
                    }
                  ]}
                  borderRadius={2}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 11,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 32,
                    truncateTickAt: 0
                  }}
                  axisLeft={{
                    tickSize: 0,
                    tickPadding: 9,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    truncateTickAt: 0
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{
                    from: 'color',
                    modifiers: [
                      [
                        'darker',
                        1.6
                      ]
                    ]
                  }}
                  legends={[
                    {
                      dataFrom: 'keys',
                      anchor: 'bottom-left',
                      direction: 'row',
                      justify: false,
                      translateX: -14,
                      translateY: 56,
                      itemsSpacing: 3,
                      itemWidth: 80,
                      itemHeight: 22,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 11,
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemOpacity: 1
                          }
                        }
                      ]
                    }
                  ]}
                  role="application"
                  ariaLabel="Nivo bar chart demo"
                  barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="bg-white border rounded-lg border-gray-300 p-6">
            <div className="">
              <h2 className="text-lg font-semibold leading-8 text-gray-900">
                Satisfaction
              </h2>
            </div>
            <div className="w-full h-96 pt-4">
              <ResponsiveLine
                animate
                areaOpacity={0.07}
                colors={[
                  'rgb(97, 205, 187)',
                  'rgb(244, 117, 96)'
                ]}
                crosshairType="cross"
                curve="monotoneX"
                enablePoints={false}
                enableGridX={false}
                axisBottom={{
                  tickValues: 5
                }}
                axisLeft={{
                  tickValues: 5,
                }}
                data={[
                  {
                    data: [
                      {
                        x: 0,
                        y: 0.7
                      },
                      {
                        x: 1,
                        y: 0.9
                      },
                      {
                        x: 2,
                        y: 0.8
                      },
                      {
                        x: 3,
                        y: 0.6
                      },
                      {
                        x: 4,
                        y: 0.3
                      },
                      {
                        x: 5,
                        y: 0
                      },

                      {
                        x: 8,
                        y: null
                      },
                      {
                        x: 9,
                        y: null
                      },
                      {
                        x: 10,
                        y: null
                      },
                      {
                        x: 11,
                        y: 0
                      },
                      {
                        x: 12,
                        y: 0.4
                      },
                      {
                        x: 13,
                        y: 0.6
                      },
                      {
                        x: 14,
                        y: 0.5
                      },
                      {
                        x: 15,
                        y: 0.3
                      },
                      {
                        x: 16,
                        y: 0.4
                      },
                      {
                        x: 17,
                        y: 0
                      }
                    ],
                    id: 'positive :)'
                  },
                  {
                    data: [
                      {
                        x: 5,
                        y: 0
                      },
                      {
                        x: 6,
                        y: -0.3
                      },
                      {
                        x: 7,
                        y: -0.5
                      },
                      {
                        x: 8,
                        y: -0.9
                      },
                      {
                        x: 9,
                        y: -0.2
                      },
                      {
                        x: 10,
                        y: -0.4
                      },
                      {
                        x: 11,
                        y: 0
                      },
                      {
                        x: 12,
                        y: null
                      },
                      {
                        x: 13,
                        y: null
                      },
                      {
                        x: 14,
                        y: null
                      },
                      {
                        x: 15,
                        y: null
                      },
                      {
                        x: 16,
                        y: null
                      },
                      {
                        x: 17,
                        y: 0
                      },
                    ],
                    id: 'negative :('
                  }
                ]}
                enableArea
                enablePointLabel
                enableTouchCrosshair
                margin={{
                  bottom: 50,
                  left: 15,
                  right: 0,
                  top: 20
                }}
                pointBorderColor={{
                  from: 'color',
                  modifiers: [
                    [
                      'darker',
                      0.3
                    ]
                  ]
                }}
                pointBorderWidth={1}
                pointLabelYOffset={-20}
                pointSize={14}
                useMesh
                //width={900}
                xScale={{
                  type: 'linear'
                }}
                yScale={{
                  max: 1,
                  min: -1,
                  stacked: false,
                  type: 'linear'
                }}
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
