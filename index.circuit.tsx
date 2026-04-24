const UsbCPlug = (props: any) => (
  <connector
    {...props}
    supplierPartNumbers={{ jlcpcb: ["C165948"] }}
    footprint="kicad:Connector_USB/USB_C_Receptacle_HRO_TYPE-C-31-M-12"
    pinLabels={{
      pin1: "GND_A1",
      pin2: "VBUS_A4",
      pin3: "CC1",
      pin4: "D_POS_A6",
      pin5: "D_NEG_A7",
      pin6: "SBU1",
      pin7: "VBUS_A9",
      pin8: "GND_A12",
      pin9: "GND_B1",
      pin10: "VBUS_B4",
      pin11: "SBU2",
      pin12: "D_NEG_B7",
      pin13: "D_POS_B6",
      pin14: "CC2",
      pin15: "VBUS_B9",
      pin16: "GND_B12",
      pin17: "SHIELD_1",
      pin18: "SHIELD_2",
      pin19: "SHIELD_3",
      pin20: "SHIELD_4",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VBUS_A4", "VBUS_A9", "VBUS_B4", "VBUS_B9", "CC1", "CC2"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["GND_A1", "GND_A12", "GND_B1", "GND_B12", "SHIELD_1", "SHIELD_2"],
      },
    }}
  />
)

const Fusb302 = (props: any) => (
  <chip
    {...props}
    footprint="kicad:Package_DFN_QFN/WQFN-14-1EP_2.5x2.5mm_P0.5mm_EP1.45x1.45mm"
    supplierPartNumbers={{ jlcpcb: ["C132291"] }}
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
  <chip
    {...props}
    footprint="kicad:Package_SO/TSSOP-20_4.4x6.5mm_P0.65mm"
    supplierPartNumbers={{ jlcpcb: ["C89040"] }}
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
      pin14: "PB1",
      pin15: "VSS",
      pin16: "VDD",
      pin17: "PA9_SCL",
      pin18: "PA10_SDA",
      pin19: "PA13_INT",
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
        pins: ["PB1", "PF0_OSC_IN", "PF1_OSC_OUT", "BOOT0", "NRST", "VSS"],
      },
      bottomSide: {
        direction: "left-to-right",
        pins: ["VDDA", "VDD", "PA9_SCL", "PA10_SDA", "PA13_INT", "PA14_SWCLK"],
      },
    }}
  />
)

const Ldo3V3 = (props: any) => (
  <chip
    {...props}
    footprint="kicad:Package_TO_SOT_SMD/SOT-223-3_TabPin2"
    supplierPartNumbers={{ jlcpcb: ["C6186"] }}
    pinLabels={{
      pin1: "GND",
      pin2: "VOUT",
      pin3: "VIN",
      pin4: "VOUT_TAB",
    }}
    pinAttributes={{
      VIN: { requiresPower: true },
      VOUT: { providesPower: true },
      VOUT_TAB: { providesPower: true },
      GND: { requiresPower: true, requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VIN", "GND"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["VOUT", "VOUT_TAB"],
      },
    }}
  />
)

const EsdDiode = (props: any) => (
  <diode
    {...props}
    footprint="kicad:Diode_SMD/D_SOD-323"
    supplierPartNumbers={{ jlcpcb: ["C5261083"] }}
  />
)

const PowerDiode = (props: any) => (
  <diode
    {...props}
    footprint="kicad:Diode_SMD/D_SOD-323"
    supplierPartNumbers={{ jlcpcb: ["C191023"] }}
  />
)

const RgbLed = (props: any) => (
  <chip
    {...props}
    footprint="kicad:LED_SMD/LED_RGB_5050-6"
    supplierPartNumbers={{ jlcpcb: ["C2843868"] }}
    pinLabels={{
      pin1: "GREEN_K",
      pin2: "RED_K",
      pin3: "ANODE",
      pin4: "BLUE_K",
    }}
    pinAttributes={{
      ANODE: { requiresPower: true },
      GREEN_K: { requiresGround: true },
      RED_K: { requiresGround: true },
      BLUE_K: { requiresGround: true },
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["BLUE_K", "ANODE"],
      },
      rightSide: {
        direction: "top-to-bottom",
        pins: ["GREEN_K", "RED_K"],
      },
    }}
  />
)

const PushButton2Pin = (props: any) => (
  <chip
    {...props}
    footprint="kicad:Button_Switch_SMD/SW_SPST_B3U-1000P-B"
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
  <connector
    {...props}
    footprint="kicad:TerminalBlock/TerminalBlock_MaiXu_MX126-5.0-02P_1x02_P5.00mm"
    supplierPartNumbers={{ jlcpcb: ["C8445"] }}
    pinLabels={{
      pin1: "VBUS",
      pin2: "GND",
    }}
    schPinArrangement={{
      leftSide: {
        direction: "top-to-bottom",
        pins: ["VBUS", "GND"],
      },
    }}
  />
)

export default () => (
  <board width="128mm" height="56mm" layers={2} >
    <group pcbX="-41mm" pcbY="0mm">
      <UsbCPlug name="USB2" pcbX="-9mm" pcbY="0mm" pcbRotation={270} schX="-19mm" schY="-2mm" />
      <resistor name="R1" resistance="100ohm" footprint="0402" pcbX="8mm" pcbY="-5.5mm" schX="-13mm" schY="-3.5mm" />
      <resistor name="R2" resistance="100ohm" footprint="0402" pcbX="8mm" pcbY="5.5mm" schX="-13mm" schY="2.5mm" />
      <EsdDiode name="D1" pcbX="12mm" pcbY="-5.5mm" pcbRotation={180} schX="-10mm" schY="-4mm" />
      <EsdDiode name="D2" pcbX="12mm" pcbY="5.5mm" pcbRotation={180} schX="-10mm" schY="3mm" />
      <Fusb302 name="U1" pcbX="20mm" pcbY="0mm" schX="-5mm" schY="0mm" />
    </group>

    <group pcbX="-12mm" pcbY="17mm">
      <PowerDiode name="D3" pcbX="-10mm" pcbY="0mm" schX="-15mm" schY="10mm" />
      <capacitor name="C2" capacitance="100nF" footprint="0402" pcbX="-3mm" pcbY="-6mm" schX="-12mm" schY="11mm" />
      <capacitor name="C4" capacitance="10uF" footprint="0603" pcbX="-3mm" pcbY="6mm" schX="-10.5mm" schY="11mm" />
      <Ldo3V3 name="U3" pcbX="7mm" pcbY="0mm" schX="-6.5mm" schY="10.5mm" />
      <capacitor name="C5" capacitance="10uF" footprint="0603" pcbX="18mm" pcbY="-6mm" schX="-3.5mm" schY="11mm" />
      <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX="18mm" pcbY="6mm" schX="-1.5mm" schY="11mm" />
    </group>

    <group pcbX="10mm" pcbY="-2mm">
      <Stm32F030 name="U2" pcbX="0mm" pcbY="0mm" schX="7mm" schY="-1mm" />
      <resistor name="R3" resistance="2.2kohm" footprint="0402" pcbX="-11mm" pcbY="-7mm" schX="1mm" schY="-8mm" />
      <resistor name="R4" resistance="2.2kohm" footprint="0402" pcbX="-11mm" pcbY="-3.5mm" schX="-1mm" schY="-8mm" />
      <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX="11mm" pcbY="5mm" schX="12mm" schY="5mm" />
      <PushButton2Pin name="SW1" pcbX="16mm" pcbY="-14mm" schX="4mm" schY="10mm" />
      <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX="23mm" pcbY="-14mm" schX="6.5mm" schY="10mm" />
    </group>

    <group pcbX="30mm" pcbY="12mm">
      <RgbLed name="LED1" pcbX="-2mm" pcbY="0mm" schX="13mm" schY="10mm" />
      <resistor name="R7" resistance="2.2kohm" footprint="0402" pcbX="-12mm" pcbY="4mm" schX="9.5mm" schY="12mm" />
      <resistor name="R6" resistance="5.6kohm" footprint="0402" pcbX="7mm" pcbY="-6mm" schX="18mm" schY="10mm" />
      <resistor name="R5" resistance="2.2kohm" footprint="0402" pcbX="7mm" pcbY="6mm" schX="18mm" schY="12mm" />
    </group>

    <TerminalBlock2 name="CN1" pcbX="52mm" pcbY="-14mm" pcbRotation={90} schX="20mm" schY="-6mm" />
    <trace from="USB2.VBUS_A4" to="net.VBUS" />
    <trace from="USB2.VBUS_A9" to="net.VBUS" />
    <trace from="USB2.VBUS_B4" to="net.VBUS" />
    <trace from="USB2.VBUS_B9" to="net.VBUS" />
    <trace from="USB2.GND_A1" to="net.GND" />
    <trace from="USB2.GND_A12" to="net.GND" />
    <trace from="USB2.GND_B1" to="net.GND" />
    <trace from="USB2.GND_B12" to="net.GND" />
    <trace from="USB2.SHIELD_1" to="net.GND" />
    <trace from="USB2.SHIELD_2" to="net.GND" />
    <trace from="USB2.SHIELD_3" to="net.GND" />
    <trace from="USB2.SHIELD_4" to="net.GND" />
    <trace from="USB2.CC2" to="R1.pin1" />
    <trace from="USB2.CC1" to="R2.pin1" />

    <trace from="R1.pin2" to="U1.CC2_A" />
    <trace from="R1.pin2" to="U1.CC2_B" />
    <trace from="R2.pin2" to="U1.CC1_A" />
    <trace from="R2.pin2" to="U1.CC1_B" />
    <trace from="R1.pin2" to="D1.pin1" />
    <trace from="D1.pin2" to="net.GND" />
    <trace from="R2.pin2" to="D2.pin1" />
    <trace from="D2.pin2" to="net.GND" />

    <trace from="U1.VBUS" to="net.VBUS" />
    <trace from="U1.VDD_A" to="net.V3_3" />
    <trace from="U1.VDD_B" to="net.V3_3" />
    <trace from="U1.GND_A" to="net.GND" />
    <trace from="U1.GND_B" to="net.GND" />
    <trace from="U1.EP" to="net.GND" />
    <trace from="U1.INT_N" to="net.INT" />
    <trace from="U1.SCL" to="net.SCL" />
    <trace from="U1.SDA" to="net.SDA" />

    <trace from="net.VBUS" to="D3.pin1" />
    <trace from="D3.pin2" to="net.VBUS_PROTECTED" />
    <trace from="C2.pin1" to="net.VBUS_PROTECTED" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C4.pin1" to="net.VBUS_PROTECTED" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="U3.VIN" to="net.VBUS_PROTECTED" />
    <trace from="U3.GND" to="net.GND" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="U3.VOUT_TAB" to="net.V3_3" />
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
    <trace from="U2.PA13_INT" to="net.INT" />
    <trace from="U2.PF1_OSC_OUT" to="net.BTN" />

    <trace from="R3.pin1" to="net.V3_3" />
    <trace from="R3.pin2" to="net.SDA" />
    <trace from="R4.pin1" to="net.V3_3" />
    <trace from="R4.pin2" to="net.SCL" />

    <trace from="SW1.A" to="net.BTN" />
    <trace from="SW1.B" to="net.GND" />
    <trace from="C6.pin1" to="net.BTN" />
    <trace from="C6.pin2" to="net.GND" />

    <trace from="LED1.ANODE" to="net.V3_3" />
    <trace from="U2.PA7_LED_B" to="R7.pin1" />
    <trace from="R7.pin2" to="LED1.BLUE_K" />
    <trace from="U2.PA6_LED_G" to="R6.pin1" />
    <trace from="R6.pin2" to="LED1.GREEN_K" />
    <trace from="U2.PA5_LED_R" to="R5.pin1" />
    <trace from="R5.pin2" to="LED1.RED_K" />

    <trace from="CN1.VBUS" to="net.VBUS" />
    <trace from="CN1.GND" to="net.GND" />
  </board>
)
