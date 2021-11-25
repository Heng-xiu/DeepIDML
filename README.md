# DeepIDML

[npm](https://img.shields.io/npm/v/csstype.svg)](https://www.npmjs.com/package/deep-idml)

Some description

**Usage**
```ts
import * as CSS from 'csstype';

const style: CSS.Properties = {
  colour: 'white', // Type error on property
  textAlign: 'middle', // Type error on value
};

import { DeepIDML } from 'deep-idml';

const paraXml: string = `<ParagraphStyle FillColor="Color/Black" FontStyle="Regular" PointSize="12"> </ParagraphStyle>``

const deeper: DeepIDML = new DeepIDML();
deeper.setXML(XMLdata);
console.log(deeper.getJSON());
console.log(deeper.getCss());

```

## Getting started

```sh
$ npm i deep-idml
```