import { AP63203WU_7 } from "./imports/AP63203WU_7"
import { B3U_1000P } from "./imports/B3U_1000P"
import { BSMD1206_200_12V } from "./imports/BSMD1206_200_12V"
import { FUSB302BMPX } from "./imports/FUSB302BMPX"
import { NLV32T_6R8J_PF } from "./imports/NLV32T_6R8J_PF"
import { PESD5V0S1BA } from "./imports/PESD5V0S1BA"
import { SMAJ12A } from "./imports/SMAJ12A"
import { STM32F030F4P6TR } from "./imports/STM32F030F4P6TR"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"
import { WJ2EDGVC_5_08_02P_14_00A } from "./imports/WJ2EDGVC_5_08_02P_14_00A"
import { XL_5050RGBC } from "./imports/XL_5050RGBC"

const UsbCPlug = (props: any) => (
  <TYPE_C_31_M_12
    {...props}
    pinLabels={{
      pin1: "SHIELD_A",
      pin2: "SHIELD_B",
      pin3: "SHIELD_C",
      pin4: "SHIELD_D",
      pin5: "SBU2",
      pin6: "CC1",
      pin7: "D_N2",
      pin8: "D_P1",
      pin9: "D_N1",
      pin10: "D_P2",
      pin11: "SBU1",
      pin12: "CC2",
      pin13: "GND_A",
      pin14: "GND_B",
      pin15: "VBUS_A",
      pin16: "VBUS_B",
    }}
    pinAttributes={{
      SHIELD_A: { requiresGround: true },
      SHIELD_B: { requiresGround: true },
      SHIELD_C: { requiresGround: true },
      SHIELD_D: { requiresGround: true },
      CC1: { mustBeConnected: true },
      CC2: { mustBeConnected: true },
      GND_A: { requiresPower: true, requiresGround: true },
      GND_B: { requiresPower: true, requiresGround: true },
      VBUS_A: { requiresPower: true },
      VBUS_B: { requiresPower: true },
    }}
  />
)

const Fusb302 = (props: any) => (
  <FUSB302BMPX
    {...props}
    pinLabels={{
      pin1: "CC2_B",
      pin2: "VBUS",
      pin3: "VDD_A",
      pin4: "VDD_B",
      pin5: "INT_N",
      pin6: "SCL",
      pin7: "SDA",
      pin8: "GND_A",
      pin9: "GND_B",
      pin10: "CC1_B",
      pin11: "CC1_A",
      pin12: "VCONN_B",
      pin13: "VCONN_A",
      pin14: "CC2_A",
      pin15: "EP",
    }}
    pinAttributes={{
      VBUS: { requiresPower: true },
      VDD_A: { requiresPower: true },
      VDD_B: { requiresPower: true },
      GND_A: { requiresPower: true, requiresGround: true },
      GND_B: { requiresPower: true, requiresGround: true },
      EP: { requiresPower: true, requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["CC2_A", "VCONN_A", "VCONN_B", "CC1_A", "CC1_B", "GND_A", "GND_B"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["CC2_B", "VBUS", "VDD_A", "VDD_B", "INT_N", "SCL", "SDA"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["EP"],
      },
    }}
  />
)

const Stm32F030 = (props: any) => (
  <STM32F030F4P6TR
    {...props}
    pinLabels={{
      pin1: "BOOT0",
      pin2: "PF0_OSC_IN",
      pin3: "PF1_OSC_OUT",
      pin4: "NRST",
      pin5: "VDDA",
      pin6: "PA0",
      pin7: "PA1",
      pin8: "PA2_TX",
      pin9: "PA3_RX",
      pin10: "PA4",
      pin11: "PA5_LED_R",
      pin12: "PA6_LED_G",
      pin13: "PA7_LED_B",
      pin14: "PB1_INT",
      pin15: "VSS",
      pin16: "VDD",
      pin17: "PA9_SCL",
      pin18: "PA10_SDA",
      pin19: "PA13_SWDIO",
      pin20: "PA14_SWCLK",
    }}
    pinAttributes={{
      VDDA: { requiresPower: true },
      VDD: { requiresPower: true },
      VSS: { requiresPower: true, requiresGround: true },
      BOOT0: { mustBeConnected: true },
      NRST: { mustBeConnected: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["PA0", "PA1", "PA2_TX", "PA3_RX", "PA4", "PA5_LED_R", "PA6_LED_G", "PA7_LED_B"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["PB1_INT", "PF0_OSC_IN", "PF1_OSC_OUT", "BOOT0", "NRST", "VSS"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["VDDA", "VDD", "PA9_SCL", "PA10_SDA", "PA13_SWDIO", "PA14_SWCLK"],
      },
    }}
  />
)

const Buck3V3 = (props: any) => (
  <AP63203WU_7
    {...props}
    pinAttributes={{
      VIN: { requiresPower: true },
      GND: { requiresPower: true, requiresGround: true },
      SW: { mustBeConnected: true },
      FB: { mustBeConnected: true },
      EN: { mustBeConnected: true },
      BST: { mustBeConnected: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "EN", "FB"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["BST", "SW", "GND"],
      },
    }}
  />
)

const EsdDiode = (props: any) => (
  <PESD5V0S1BA
    {...props}
    pinLabels={{
      pin1: "pin1",
      pin2: "pin2",
    }}
    pinAttributes={{
      pin1: { mustBeConnected: true },
      pin2: { requiresPower: true, requiresGround: true },
    }}
  />
)

const RgbLed = (props: any) => (
  <XL_5050RGBC
    {...props}
    pinLabels={{
      pin1: "BLUE_K",
      pin2: "RED_K",
      pin3: "GREEN_K",
      pin4: "ANODE_G",
      pin5: "ANODE_R",
      pin6: "ANODE_B",
    }}
    pinAttributes={{
      ANODE_G: { requiresPower: true },
      ANODE_R: { requiresPower: true },
      ANODE_B: { requiresPower: true },
      GREEN_K: { requiresGround: true },
      RED_K: { requiresGround: true },
      BLUE_K: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["BLUE_K", "GREEN_K"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["RED_K"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["ANODE_G", "ANODE_R", "ANODE_B"],
      },
    }}
  />
)

const PushButton2Pin = (props: any) => (
  <B3U_1000P
    {...props}
    pinLabels={{
      pin1: "A",
      pin2: "B",
    }}
    pinAttributes={{
      A: { mustBeConnected: true },
      B: { requiresPower: true, requiresGround: true },
    }}
  />
)

const TerminalBlock2 = (props: any) => (
  <WJ2EDGVC_5_08_02P_14_00A
    {...props}
    pinLabels={{
      pin1: "VBUS",
      pin2: "GND",
    }}
    pinAttributes={{
      VBUS: { requiresPower: true },
      GND: { requiresPower: true, requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VBUS", "GND"],
      },
    }}
  />
)

const PowerInductor = (props: any) => (
  <NLV32T_6R8J_PF
    {...props}
    pinAttributes={{
      pin1: { requiresPower: true, mustBeConnected: true },
      pin2: { providesPower: true, mustBeConnected: true },
    }}
  />
)

const VbusTvs = (props: any) => (
  <SMAJ12A
    {...props}
    pinLabels={{
      pin1: "VBUS",
      pin2: "GND",
    }}
    pinAttributes={{
      VBUS: { requiresPower: true },
      GND: { requiresPower: true, requiresGround: true },
    }}
  />
)

const ResettableFuse = (props: any) => (
  <BSMD1206_200_12V
    {...props}
    pinLabels={{
      pin1: "IN",
      pin2: "OUT",
    }}
    pinAttributes={{
      IN: { requiresPower: true },
      OUT: { providesPower: true },
    }}
  />
)

const SwdHeader = (props: any) => (
  <pinheader
    {...props}
    pinCount={5}
    gender="female"
    pitch="2.54mm"
    showSilkscreenPinLabels={true}
    pinLabels={["3V3", "SWDIO", "SWCLK", "NRST", "GND"]}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: [1, 2, 3, 4, 5],
      },
    }}
  />
)

export default () => (
  <board width="86mm" height="36mm" layers={4} minViaHoleDiameter={0.3} minViaPadDiameter={0.45}>
    <group pcbX="-26.5mm" pcbY="0mm">
      <UsbCPlug name="USB2" pcbX="-11mm" pcbY="0mm" pcbRotation={270} schX="-19mm" schY="-2mm" />
      <resistor name="R1" resistance="100ohm" footprint="0402" pcbX="1mm" pcbY="-4.5mm" schX="-13mm" schY="-3.5mm" />
      <resistor name="R2" resistance="100ohm" footprint="0402" pcbX="1mm" pcbY="4.5mm" schX="-13mm" schY="2.5mm" />
      <EsdDiode name="D1" pcbX="1mm" pcbY="-8mm" schX="-10mm" schY="-4mm" />
      <EsdDiode name="D2" pcbX="1mm" pcbY="8mm" pcbRotation={180} schX="-10mm" schY="3mm" />
      <capacitor name="C9" capacitance="220pF" footprint="0402" pcbX="7mm" pcbY="-8mm" schX="-4mm" schY="-6mm" />
      <capacitor name="C10" capacitance="220pF" footprint="0402" pcbX="8.5mm" pcbY="6.5mm" schX="-4mm" schY="6mm" />
      <Fusb302 name="U1" pcbX="17mm" pcbY="0mm" schX="-5mm" schY="0mm" />
      <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX="22mm" pcbY="-4mm" schX="-1mm" schY="-5mm" />
      <capacitor name="C8" capacitance="1uF" footprint="0603" pcbX="23mm" pcbY="4mm" schX="1mm" schY="-5mm" />
    </group>

    <VbusTvs name="D3" pcbX="-31mm" pcbY="0mm" pcbRotation={90} schX="-15mm" schY="-11mm" />
    <ResettableFuse name="F1" pcbX="-27mm" pcbY="13mm" schX="-10mm" schY="-11mm" />

    <group pcbX="-10mm" pcbY="10mm">
      <capacitor name="C2" capacitance="100nF" footprint="0603" pcbX="-11.5mm" pcbY="-6mm" schX="-13mm" schY="10mm" />
      <capacitor name="C4" capacitance="10uF" footprint="1206" pcbX="-11.5mm" pcbY="5mm" schX="-11mm" schY="10mm" />
      <Buck3V3 name="U3" pcbX="0mm" pcbY="0mm" schX="-6.5mm" schY="10.5mm" />
      <capacitor name="C11" capacitance="100nF" footprint="0402" pcbX="0mm" pcbY="-7mm" schX="-4mm" schY="14mm" />
      <PowerInductor name="L1" pcbX="10mm" pcbY="0mm" schX="-1mm" schY="10.5mm" />
      <capacitor name="C5" capacitance="22uF" footprint="1206" pcbX="21mm" pcbY="-4mm" schX="3mm" schY="12mm" />
      <capacitor name="C3" capacitance="22uF" footprint="1206" pcbX="21mm" pcbY="4mm" schX="5mm" schY="10mm" />
    </group>

    <group pcbX="8.5mm" pcbY="-1mm">
      <Stm32F030 name="U2" pcbX="0mm" pcbY="0mm" schX="7mm" schY="-1mm" />
      <resistor name="R3" resistance="2.2kohm" footprint="0402" pcbX="-13mm" pcbY="-7.5mm" schX="1mm" schY="-8mm" />
      <resistor name="R4" resistance="2.2kohm" footprint="0402" pcbX="-10.5mm" pcbY="-2.8mm" schX="-1mm" schY="-8mm" />
      <resistor name="R8" resistance="4.7kohm" footprint="0402" pcbX="-8.5mm" pcbY="0.8mm" schX="1mm" schY="-10mm" />
      <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX="-2.5mm" pcbY="-5mm" pcbRotation={90} schX="12mm" schY="5mm" />
      <resistor name="R9" resistance="10kohm" footprint="0402" pcbX="3.5mm" pcbY="-8mm" schX="3mm" schY="12mm" />
      <PushButton2Pin name="SW1" pcbX="3.5mm" pcbY="-13mm" schX="4mm" schY="10mm" />
      <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX="8.5mm" pcbY="-13mm" schX="6.5mm" schY="10mm" />
    </group>

    <group pcbX="23mm" pcbY="10mm">
      <RgbLed name="LED1" pcbX="0mm" pcbY="0mm" schX="13mm" schY="10mm" />
      <resistor name="R7" resistance="2.2kohm" footprint="0402" pcbX="-6mm" pcbY="3mm" schX="9.5mm" schY="12mm" />
      <resistor name="R6" resistance="5.6kohm" footprint="0402" pcbX="6mm" pcbY="-3mm" schX="18mm" schY="10mm" />
      <resistor name="R5" resistance="2.2kohm" footprint="0402" pcbX="6mm" pcbY="3mm" schX="18mm" schY="12mm" />
    </group>

    <SwdHeader name="J1" pcbX="32mm" pcbY="-9mm" pcbRotation={90} schX="20mm" schY="6mm" />
    <TerminalBlock2 name="CN1" pcbX="36mm" pcbY="10mm" pcbRotation={90} schX="20mm" schY="-6mm" />
    <trace
      from="USB2.VBUS_A"
      to="net.VBUS_RAW"
      thickness="1.0mm"
      pcbRouteHints={[
        { x: -31, y: -2, via: true, to_layer: "inner2", trace_width: "1.0mm" },
      ]}
    />
    <trace
      from="USB2.VBUS_B"
      to="net.VBUS_RAW"
      thickness="1.0mm"
      pcbRouteHints={[
        { x: -31, y: 2, via: true, to_layer: "inner2", trace_width: "1.0mm" },
      ]}
    />
    <trace from="USB2.GND_A" to="net.GND" />
    <trace from="USB2.GND_B" to="net.GND" />
    <trace from="USB2.SHIELD_A" to="net.GND" />
    <trace from="USB2.SHIELD_B" to="net.GND" />
    <trace from="USB2.SHIELD_C" to="net.GND" />
    <trace from="USB2.SHIELD_D" to="net.GND" />
    <trace from="USB2.CC2" to="R1.pin1" />
    <trace from="USB2.CC1" to="R2.pin1" />

    <trace from="R1.pin2" to="C9.pin1" />
    <trace from="C9.pin1" to="D1.pin1" />
    <trace from="C9.pin1" to="U1.CC2_A" />
    <trace from="U1.CC2_A" to="U1.CC2_B" />
    <trace from="C9.pin2" to="net.GND" />
    <trace from="R2.pin2" to="C10.pin1" />
    <trace from="C10.pin1" to="D2.pin1" />
    <trace
      from="C10.pin1"
      to="U1.CC1_A"
      pcbRouteHints={[
        { x: -18.5, y: 7.2 },
        { x: -12.6, y: 7.2 },
        { x: -12.6, y: 1.4 },
      ]}
    />
    <trace from="U1.CC1_A" to="U1.CC1_B" />
    <trace from="C10.pin2" to="net.GND" />
    <trace from="D1.pin2" to="net.GND" />
    <trace from="D2.pin2" to="net.GND" />
    <trace from="D3.VBUS" to="net.VBUS_RAW" thickness="1.0mm" />
    <trace from="D3.GND" to="net.GND" thickness="1.0mm" />
    <trace from="F1.IN" to="net.VBUS_RAW" thickness="1.2mm" />
    <trace from="F1.OUT" to="net.VBUS" thickness="1.2mm" />

    <trace
      from="U1.VBUS"
      to="net.VBUS"
      thickness="0.5mm"
      pcbRouteHints={[
        { x: -14, y: 1.5, via: true, to_layer: "inner2", trace_width: "0.5mm" },
      ]}
    />
    <trace from="U1.VDD_A" to="net.V3_3" />
    <trace from="U1.VDD_B" to="net.V3_3" />
    <trace from="C7.pin1" to="net.V3_3" />
    <trace from="C7.pin2" to="U1.EP" />
    <trace from="C8.pin1" to="net.V3_3" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="U1.GND_A" to="U1.EP" />
    <trace from="U1.GND_B" to="U1.EP" />
    <trace from="U1.EP" to="net.GND" />
    <trace from="U1.INT_N" to="net.INT" />
    <trace from="U1.SCL" to="net.SCL" />
    <trace from="U1.SDA" to="net.SDA" />

    <trace
      from="C2.pin1"
      to="net.VBUS"
      thickness="0.9mm"
      pcbRouteHints={[
        { x: -22, y: 6, via: true, to_layer: "inner2", trace_width: "0.9mm" },
      ]}
    />
    <trace from="C2.pin2" to="net.GND" />
    <trace
      from="C4.pin1"
      to="net.VBUS"
      thickness="0.9mm"
      pcbRouteHints={[
        { x: -22, y: 14, via: true, to_layer: "inner2", trace_width: "0.9mm" },
      ]}
    />
    <trace from="C4.pin2" to="net.GND" />
    <trace
      from="U3.VIN"
      to="net.VBUS"
      thickness="0.9mm"
      pcbRouteHints={[
        { x: -14, y: 12, via: true, to_layer: "inner2", trace_width: "0.9mm" },
      ]}
    />
    <trace from="U3.EN" to="U3.VIN" thickness="0.35mm" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.SW" to="L1.pin1" />
    <trace from="L1.pin2" to="net.V3_3" />
    <trace from="U3.FB" to="net.V3_3" />
    <trace from="U3.BST" to="C11.pin1" />
    <trace from="C11.pin2" to="U3.SW" />
    <trace from="C5.pin1" to="net.V3_3" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="C3.pin1" to="net.V3_3" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="U2.VDD" to="net.V3_3" />
    <trace from="U2.VDDA" to="net.V3_3" />
    <trace from="U2.VSS" to="net.GND" />
    <trace from="U2.BOOT0" to="net.GND" />
    <trace from="U2.NRST" to="C1.pin1" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="U2.PA9_SCL" to="net.SCL" />
    <trace from="U2.PA10_SDA" to="net.SDA" />
    <trace from="U2.PB1_INT" to="net.INT" />
    <trace from="U2.PF1_OSC_OUT" to="net.BTN" />

    <trace from="R3.pin1" to="net.V3_3" />
    <trace from="R3.pin2" to="net.SDA" />
    <trace from="R4.pin1" to="net.V3_3" />
    <trace from="R4.pin2" to="net.SCL" />
    <trace from="R8.pin1" to="net.V3_3" />
    <trace from="R8.pin2" to="net.INT" />

    <trace from="R9.pin1" to="net.V3_3" />
    <trace from="R9.pin2" to="net.BTN" />
    <trace from="SW1.A" to="net.BTN" />
    <trace from="SW1.B" to="net.GND" />
    <trace from="C6.pin1" to="net.BTN" />
    <trace from="C6.pin2" to="net.GND" />

    <trace from="LED1.ANODE_G" to="net.V3_3" />
    <trace from="LED1.ANODE_R" to="net.V3_3" />
    <trace from="LED1.ANODE_B" to="net.V3_3" />
    <trace from="U2.PA7_LED_B" to="R7.pin1" />
    <trace from="R7.pin2" to="LED1.BLUE_K" />
    <trace from="U2.PA6_LED_G" to="R6.pin1" />
    <trace from="R6.pin2" to="LED1.GREEN_K" />
    <trace from="U2.PA5_LED_R" to="R5.pin1" />
    <trace from="R5.pin2" to="LED1.RED_K" />

    <trace from="J1.pin1" to="net.V3_3" />
    <trace from="J1.pin2" to="U2.PA13_SWDIO" />
    <trace
      from="J1.pin3"
      to="U2.PA14_SWCLK"
      pcbRouteHints={[
        { x: 29, y: -8.25, via: true, to_layer: "inner2" },
        { x: 12, y: 3.3 },
        { x: 6, y: 3.3 },
        { x: 5.8, y: 2.45, via: true, to_layer: "top" },
      ]}
    />
    <trace from="J1.pin4" to="U2.NRST" />
    <trace from="J1.pin5" to="net.GND" />

    <trace
      from="CN1.VBUS"
      to="net.VBUS"
      thickness="1.2mm"
    />
    <trace
      from="CN1.GND"
      to="net.GND"
      thickness="1.2mm"
    />
    <copperpour
      name="INNER1_GND_PLANE"
      connectsTo="net.GND"
      layer="inner1"
      clearance="0.2mm"
      boardEdgeMargin="0.25mm"
    />
    <copperpour
      name="INNER2_VBUS_TRUNK"
      connectsTo="net.VBUS"
      layer="inner2"
      clearance="0.25mm"
      outline={[
        { x: -31, y: 4.5 },
        { x: 42, y: 4.5 },
        { x: 42, y: 16 },
        { x: -31, y: 16 },
      ]}
    />
    <copperpour
      name="BOTTOM_GND_POUR"
      connectsTo="net.GND"
      layer="bottom"
      clearance="0.2mm"
      boardEdgeMargin="0.25mm"
    />
  </board>
)
