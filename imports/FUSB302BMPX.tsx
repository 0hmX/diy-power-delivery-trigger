import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["CC21"],
  pin2: ["VBUS"],
  pin3: ["VDD1"],
  pin4: ["VDD2"],
  pin5: ["INT_N"],
  pin6: ["SCL"],
  pin7: ["SDA"],
  pin8: ["GND1"],
  pin9: ["GND2"],
  pin10: ["CC11"],
  pin11: ["CC12"],
  pin12: ["VCONN1"],
  pin13: ["VCONN2"],
  pin14: ["CC22"],
  pin15: ["EP"]
} as const

export const FUSB302BMPX = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C132291"
  ]
}}
      manufacturerPartNumber="FUSB302BMPX"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.499872mm" pcbY="-1.177544mm" width="0.2800096mm" height="0.5050028mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0mm" pcbY="-1.177544mm" width="0.2800096mm" height="0.5050028mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.500126mm" pcbY="-1.177544mm" width="0.2800096mm" height="0.5050028mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="1.177544mm" pcbY="-0.750062mm" width="0.5050028mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="1.177544mm" pcbY="-0.249936mm" width="0.5050028mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="1.177544mm" pcbY="0.249936mm" width="0.5050028mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="1.177544mm" pcbY="0.750062mm" width="0.5050028mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="0.500126mm" pcbY="1.177544mm" width="0.2800096mm" height="0.5050028mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="1.177544mm" width="0.2800096mm" height="0.5050028mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="-0.499872mm" pcbY="1.177544mm" width="0.2800096mm" height="0.5050028mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="-1.177544mm" pcbY="0.750062mm" width="0.5050028mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="-1.177544mm" pcbY="0.249936mm" width="0.5050028mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="-1.177544mm" pcbY="-0.249936mm" width="0.5050028mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="-1.177544mm" pcbY="-0.750062mm" width="0.5050028mm" height="0.2800096mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0mm" pcbY="0mm" width="1.3750036mm" height="1.3750036mm" shape="rect" />
<silkscreenpath route={[{"x":-1.326210200000105,"y":1.0804906000000756},{"x":-1.326210200000105,"y":1.326210200000105},{"x":-0.830503799999974,"y":1.326210200000105}]} />
<silkscreenpath route={[{"x":1.3262101999999913,"y":1.0804906000000756},{"x":1.3262101999999913,"y":1.326210200000105},{"x":0.830503799999974,"y":1.326210200000105}]} />
<silkscreenpath route={[{"x":-1.326210200000105,"y":-1.0804906000000756},{"x":-1.326210200000105,"y":-1.326210200000105},{"x":-0.830503799999974,"y":-1.326210200000105}]} />
<silkscreenpath route={[{"x":1.3262101999999913,"y":-1.0804906000000756},{"x":1.3262101999999913,"y":-1.326210200000105},{"x":0.830503799999974,"y":-1.326210200000105}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="2.4224mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.6724000000000387,"y":1.672399999999925},{"x":1.6978000000000293,"y":1.672399999999925},{"x":1.6978000000000293,"y":-2.053399999999897},{"x":-1.6724000000000387,"y":-2.053399999999897},{"x":-1.6724000000000387,"y":1.672399999999925}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C132291.obj?uuid=15f87957851c46e8a4907d2de7265707",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C132291.step?uuid=15f87957851c46e8a4907d2de7265707",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}