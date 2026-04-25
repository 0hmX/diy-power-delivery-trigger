import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const PESD5V0S1BA = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C5261083"
  ]
}}
      manufacturerPartNumber="PESD5V0S1BA"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="1.204976mm" pcbY="0mm" width="0.7999984mm" height="0.7999984mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.204976mm" pcbY="0mm" width="0.7999984mm" height="0.7999984mm" shape="rect" />
<silkscreenpath route={[{"x":-0.005968999999936386,"y":0.14168119999999362},{"x":-0.005968999999936386,"y":-0.11231880000013916}]} />
<silkscreenpath route={[{"x":0.12103100000001632,"y":0.014681200000040917},{"x":-0.009017000000085318,"y":0.014681200000040917},{"x":-0.2599690000000692,"y":-0.11231880000013916},{"x":-0.2599690000000692,"y":0.14168119999999362},{"x":-0.2599690000000692,"y":0.14168119999999362},{"x":-0.008204200000022865,"y":0.01767840000002252}]} />
<silkscreenpath route={[{"x":-0.13296900000011647,"y":0.014681200000040917},{"x":-0.0029210000000148284,"y":0.014681200000040917},{"x":0.24803099999996903,"y":0.14168119999999362},{"x":0.24803099999996903,"y":-0.11231880000013916},{"x":0.24803099999996903,"y":-0.11231880000013916},{"x":-0.003733800000077281,"y":0.011607799999978852}]} />
<silkscreenpath route={[{"x":-0.8551164000000426,"y":-0.684834799999976},{"x":0.8449055999999473,"y":-0.684834799999976}]} />
<silkscreenpath route={[{"x":-0.8551164000000426,"y":0.7151624000000538},{"x":0.8449055999999473,"y":0.7151624000000538}]} />
<silkscreentext text="{NAME}" pcbX="-0.007112mm" pcbY="1.706374mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.8573120000000927,"y":0.9563740000000962},{"x":1.8430879999998524,"y":0.9563740000000962},{"x":1.8430879999998524,"y":-0.940625999999952},{"x":-1.8573120000000927,"y":-0.940625999999952},{"x":-1.8573120000000927,"y":0.9563740000000962}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5261083.obj?uuid=5284e5723bda45e1a33dc55b8531c926",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5261083.step?uuid=5284e5723bda45e1a33dc55b8531c926",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: 0 },
      }}
      {...props}
    />
  )
}