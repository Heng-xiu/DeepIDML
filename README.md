# DeepIDML

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![License - MIT](https://img.shields.io/badge/License-MIT-2ea44f?logo=license)](LICENSE)

DeepIDML is a parser focus on grabbing information from IDML file.

## Usage
```ts
import { DeepIDML } from 'deep-idml';

const paraXml: string = `<ParagraphStyle 
  FillColor="Color/Black" 
  FontStyle="Regular" 
  PointSize="12"> 
  </ParagraphStyle>`

const deeper: DeepIDML = new DeepIDML();
deeper.setXML(paraXml);
console.log(deeper.getJSON());
console.log(deeper.getCss());

```

## Getting started

```sh
$ npm i deep-idml
```

## Examples
In most situations, any information about styles are in the Resources/Styles.xml which unzip from IDML file.
And the snippet shows as below:
```ts
<idPkg:Styles>
	...
	<RootParagraphStyleGroup Self="u74">
    	<ParagraphStyle Self="ParagraphStyle/Table%3a12-13w table (7/9 80%25)" Name="Table:12-13w table (7/9 80%)">
	        <Properties>
            	<BasedOn type="object">ParagraphStyle/Table%3a12-13 table (7/9 80%25)</BasedOn>
            </Properties>
        </ParagraphStyle>
    </RootParagraphStyleGroup>
    ...
</idPkg:Styles>
```

With DeepIDML, people can simply set Resources/Style.xml file as parameter into function, and it will return parsed css property
```ts
const deeper: DeepIDML = new DeepIDML();
const parsedCssProps = deeper.getTraversaledParagraphStyleGroups(paraXml);
console.log(parsedCssProps);

// Result 
'Table:12-13w table (7/9 80%)': {
    transform: 'skewX(0)',
    'font-style': 'Regular',
    'text-indent': '0px',
    color: 'Black',
    letterSpacing: '0',
    textDecoration: 'underline',
    fontSize: '7',
    textAlign: 'left',
    marginLeft: '0',
    marginRight: '0',
    '@_BasedOn': 'Table:12-13 table (7/9 80%)'
  },
```

## Other APIS(experiments)
```ts
import { DeepIDML } from 'deep-idml';

const styleXMLString: string = fs.readFileSync('./Resources/styles.xml', 'utf8');

const deeper: DeepIDML = new DeepIDML();
const css = deeper.getCSSFromXML(styleXMLString);

// Result 
.Table:10-11 table 03 DL (7/9 90%) { 
  transform:skewX(0);
  font-style:Regular;
  text-indent:0px;
  color:Black;
  letter-spacing:0;
  text-decoration:underline;
  font-size:7;
  text-align:left;
  margin-left:0;
  margin-right:0;
  font-family:CompositeFont/$ID/宋+Times;
  margin-top:0;margin-bottom:0; 
}
```


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/deep-idml.svg?logo=npm
[npm-url]: https://www.npmjs.com/package/deep-idml
[node-version-image]: https://img.shields.io/node/v/deep-idml.svg?logo=node.js
[node-version-url]: https://nodejs.org/en/download
[downloads-image]: https://img.shields.io/npm/dm/deep-idml.svg
[downloads-url]: https://npmjs.org/package/deep-idml