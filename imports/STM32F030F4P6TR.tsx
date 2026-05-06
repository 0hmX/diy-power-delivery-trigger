import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["BOOT0"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["NRST"],
  pin5: ["VDDA"],
  pin6: ["PA0"],
  pin7: ["PA1"],
  pin8: ["PA2"],
  pin9: ["PA3"],
  pin10: ["PA4"],
  pin11: ["PA5"],
  pin12: ["PA6"],
  pin13: ["PA7"],
  pin14: ["PB1"],
  pin15: ["VSS"],
  pin16: ["VDD"],
  pin17: ["PA9"],
  pin18: ["PA10"],
  pin19: ["pin19"],
  pin20: ["pin20"]
} as const

export const STM32F030F4P6TR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
  "jlcpcb": [
    "C89040"
  ]
}}
      manufacturerPartNumber="STM32F030F4P6TR"
      footprint={<footprint>
        <smtpad portHints={["pin5"]} pcbX="-0.32512mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.323596mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="0.974852mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="1.624838mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="-2.274824mm" pcbY="2.996057mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-2.274824mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.625092mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-0.974852mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="2.275078mm" pcbY="3.001137mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.625092mm" pcbY="3.001137mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="0.975106mm" pcbY="3.001137mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="0.32512mm" pcbY="3.001137mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="-0.324866mm" pcbY="3.001137mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="-0.974852mm" pcbY="3.001137mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="2.274824mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="-1.625092mm" pcbY="2.996057mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.925064mm" pcbY="-3.001137mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="2.92481mm" pcbY="-3.000883mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="2.925064mm" pcbY="3.001137mm" width="0.350012mm" height="1.49352mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="-2.925064mm" pcbY="3.001137mm" width="0.450012mm" height="1.49352mm" shape="rect" />
<silkscreenpath route={[{"x":3.3106360000001587,"y":-1.9721829999999727},{"x":-3.2908239999999296,"y":-1.9721829999999727}]} />
<silkscreenpath route={[{"x":3.3106360000001587,"y":1.9140169999999443},{"x":-3.3187639999999874,"y":1.9140169999999443}]} />
<silkscreenpath route={[{"x":3.3106360000001587,"y":-1.9721829999999727},{"x":3.3106360000001587,"y":1.9140169999999443}]} />
<silkscreenpath route={[{"x":-3.3187639999999874,"y":-1.9721829999999727},{"x":-3.3187639999999874,"y":-0.6005830000000287}]} />
<silkscreenpath route={[{"x":-3.3187639999999874,"y":0.5170170000000098},{"x":-3.3187639999999874,"y":1.9140169999999443}]} />
<silkscreenpath route={[{"x":-3.3187639999999874,"y":0.5170170000000098},{"x":-3.3187639999999874,"y":-0.575208400000065}]} />
<silkscreentext text="{NAME}" pcbX="-0.10922mm" pcbY="4.755517mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.775519999999915,"y":4.005516999999941},{"x":3.5570800000001555,"y":4.005516999999941},{"x":3.5570800000001555,"y":-3.9874829999999974},{"x":-3.775519999999915,"y":-3.9874829999999974},{"x":-3.775519999999915,"y":4.005516999999941}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C89040.obj?uuid=249766f0d87f42aa9cac81470f61c365",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C89040.step?uuid=249766f0d87f42aa9cac81470f61c365",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.1 },
      }}
      {...props}
    />
  )
}
