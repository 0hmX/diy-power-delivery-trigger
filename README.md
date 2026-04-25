# DIY Power Delivery Trigger

This project is a compact USB-C Power Delivery trigger board built in `tscircuit`. It accepts power from a USB-C receptacle, uses an `FUSB302` USB-PD controller to negotiate the requested power profile, and routes the negotiated VBUS output to a 2-pin terminal block for external use.

An `STM32F030` microcontroller manages the PD controller over I2C, reads the interrupt line, and drives a status RGB LED and pushbutton interface. The board also includes a 3.3 V buck regulator for local logic power, ESD protection on the USB-C CC lines, local filtering/decoupling, and a simple SWD programming header (`J1`) for flashing and debugging the MCU.

## Main Features

- USB-C power input
- `FUSB302` USB Power Delivery controller
- `STM32F030` control MCU
- 3.3 V buck regulator
- RGB status LED and pushbutton
- 2-pin VBUS/GND output terminal block
- 5-pin SWD programming/debug header

## Files

- [index.circuit.tsx](./index.circuit.tsx): main tscircuit source
- [board-layout.svg](./board-layout.svg): exported board layout view
- [dist/index/circuit.json](./dist/index/circuit.json): generated circuit output
