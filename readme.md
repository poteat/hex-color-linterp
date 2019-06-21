# hex-color-linterp

Linearly interpolate between two hex color values.

## Installation

```sh
npm i hex-color-linterp
```

## Usage

```js
import { hexColorLinterp } from "hex-color-linterp"
const interp = hexColorLinterp(0.75, "FF0000", "00CC00"); // i.e. "3f9900"
```