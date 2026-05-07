import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const NLV32T_6R8J_PF = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C89023"
  ]
}}
      manufacturerPartNumber="NLV32T_6R8J_PF"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="1.561973mm" pcbY="0mm" width="1.1999976mm" height="1.999996mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.561973mm" pcbY="0mm" width="1.1999976mm" height="1.999996mm" shape="rect" />
<silkscreenpath route={[{"x":-1.4349730000001273,"y":1.2700000000000955},{"x":1.3590269999999691,"y":1.2700000000000955}]} />
<silkscreenpath route={[{"x":-1.56197300000008,"y":-1.2699999999999818},{"x":1.4860269999999218,"y":-1.2699999999999818}]} />
<silkscreentext text="{NAME}" pcbX="-0.012573mm" pcbY="2.27mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-2.4215729999999667,"y":1.5200000000000955},{"x":2.396427000000017,"y":1.5200000000000955},{"x":2.396427000000017,"y":-1.5199999999999818},{"x":-2.4215729999999667,"y":-1.5199999999999818},{"x":-2.4215729999999667,"y":1.5200000000000955}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C89023.obj?uuid=9068841e93dc49a4a4c155ffc16c3f52",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C89023.step?uuid=9068841e93dc49a4a4c155ffc16c3f52",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.08 },
      }}
      {...props}
    />
  )
}
