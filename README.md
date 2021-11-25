# DeepIDML

[![npm](https://img.shields.io/npm/v/deep-idml.svg)](https://www.npmjs.com/package/deep-idml)

DeepIDML is a parser focus on grabbing information from IDML file.

*Usage*
```ts
import { DeepIDML } from 'deep-idml';

const paraXml: string = `<ParagraphStyle 
  FillColor="Color/Black" 
  FontStyle="Regular" 
  PointSize="12"> 
  </ParagraphStyle>`

const deeper: DeepIDML = new DeepIDML();
deeper.setXML(XMLdata);
console.log(deeper.getJSON());
console.log(deeper.getCss());

```

## Getting started

```sh
$ npm i deep-idml
```