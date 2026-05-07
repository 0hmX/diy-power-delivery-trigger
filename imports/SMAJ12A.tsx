import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["C"],
  pin2: ["A"]
} as const

export const SMAJ12A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C113957"
  ]
}}
      manufacturerPartNumber="SMAJ12A"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="2.192528mm" pcbY="0mm" width="1.7999964mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.192528mm" pcbY="0mm" width="1.7999964mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":-1.196822599999905,"y":1.4012164000000666},{"x":-1.196822599999905,"y":-1.401216399999953}]} />
<silkscreenpath route={[{"x":-2.7262328000001617,"y":1.4012164000000666},{"x":2.7262327999999343,"y":1.4012164000000666}]} />
<silkscreenpath route={[{"x":-2.7262328000001617,"y":-1.401216399999953},{"x":2.7262327999999343,"y":-1.401216399999953}]} />
<silkscreenpath route={[{"x":2.7262327999999343,"y":1.4012164000000666},{"x":2.7262327999999343,"y":0.999693200000138}]} />
<silkscreenpath route={[{"x":2.7262327999999343,"y":-1.401216399999953},{"x":2.7262327999999343,"y":-0.9996932000000243}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="2.4732mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.348799999999983,"y":1.7232000000000198},{"x":3.348799999999983,"y":1.7232000000000198},{"x":3.348799999999983,"y":-1.7231999999999061},{"x":-3.348799999999983,"y":-1.7231999999999061},{"x":-3.348799999999983,"y":1.7232000000000198}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C113957.obj?uuid=972d26354d034239a6c09eb6538bb96b",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C113957.step?uuid=972d26354d034239a6c09eb6538bb96b",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.1 },
      }}
      {...props}
    />
  )
}