import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["B_NEG"],
  pin2: ["R_NEG"],
  pin3: ["G_NEG"],
  pin4: ["G_POS"],
  pin5: ["R_POS"],
  pin6: ["B_POS"]
} as const

export const XL_5050RGBC = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C2843868"
  ]
}}
      manufacturerPartNumber="XL_5050RGBC"
      footprint={<footprint>
        <smtpad portHints={["pin6"]} pcbX="2.22758mm" pcbY="1.599946mm" width="2.1049996mm" height="0.9800082mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="2.22758mm" pcbY="0mm" width="2.1049996mm" height="0.9800082mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="2.22758mm" pcbY="-1.599946mm" width="2.1049996mm" height="0.9800082mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-2.22758mm" pcbY="-1.599946mm" width="2.1049996mm" height="0.9800082mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.22758mm" pcbY="0mm" width="2.1049996mm" height="0.9800082mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.22758mm" pcbY="1.599946mm" width="2.1049996mm" height="0.9800082mm" shape="rect" />
<silkscreenpath route={[{"x":-2.5762204000002384,"y":2.576220400000011},{"x":2.576220400000011,"y":2.576220400000011}]} />
<silkscreenpath route={[{"x":-2.5762204000002384,"y":-2.576220400000011},{"x":2.576220400000011,"y":-2.576220400000011}]} />
<silkscreentext text="{NAME}" pcbX="-0.2159mm" pcbY="3.5908mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.9583999999999833,"y":2.8407999999999447},{"x":3.5265999999999167,"y":2.8407999999999447},{"x":3.5265999999999167,"y":-2.840800000000172},{"x":-3.9583999999999833,"y":-2.840800000000172},{"x":-3.9583999999999833,"y":2.8407999999999447}]} />
      </footprint>}
      
      {...props}
    />
  )
}