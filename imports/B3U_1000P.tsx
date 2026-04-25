import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const B3U_1000P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C231329"
  ]
}}
      manufacturerPartNumber="B3U_1000P"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="1.6999966mm" pcbY="0mm" width="0.7999984mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.6999966mm" pcbY="0mm" width="0.7999984mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":1.2499848000001066},{"x":1.4999969999998939,"y":1.249959399999966}]} />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":-1.2500356000000465},{"x":1.4999969999998939,"y":-1.250010199999906}]} />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":1.081150999999977},{"x":-1.4999970000000076,"y":1.2499848000001066}]} />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":1.2499848000001066},{"x":1.4999969999998939,"y":1.2499848000001066}]} />
<silkscreenpath route={[{"x":1.4999969999998939,"y":1.2499848000001066},{"x":1.4999969999998939,"y":1.081125600000064}]} />
<silkscreenpath route={[{"x":1.4999969999998939,"y":-1.081150999999977},{"x":1.4999969999998939,"y":-1.250010199999906}]} />
<silkscreenpath route={[{"x":1.4999969999998939,"y":-1.250010199999906},{"x":-1.4999970000000076,"y":-1.250010199999906}]} />
<silkscreenpath route={[{"x":-1.4999970000000076,"y":-1.250010199999906},{"x":-1.4999970000000076,"y":-1.0868659999998727}]} />
<silkscreentext text="{NAME}" pcbX="-0.016256mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.3617559999999003,"y":1.5199999999999818},{"x":2.329244000000017,"y":1.5199999999999818},{"x":2.329244000000017,"y":-1.5199999999999818},{"x":-2.3617559999999003,"y":-1.5199999999999818},{"x":-2.3617559999999003,"y":1.5199999999999818}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C231329.obj?uuid=d904b040d8194ce99b3ace65083437b8",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C231329.step?uuid=d904b040d8194ce99b3ace65083437b8",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.01 },
      }}
      {...props}
    />
  )
}