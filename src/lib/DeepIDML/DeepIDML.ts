import * as CSS from 'csstype';
import * as fxparser from 'fast-xml-parser';

import { StyleTransformFactory } from '../styleTransfrom/StyleTransformFactory';

type propertiesRecord = Record<string, any>;
type paraGraphStyleRecord = Record<
  string,
  CSS.Properties & CSS.PropertiesHyphen
>;

export class DeepIDML implements IDeepIDML {
  private xml = '';
  private json: object = {};
  private cssStyle: CSS.Properties = {};
  private factory: StyleTransformFactory = StyleTransformFactory.getInstance();

  setXML(xmlString: string) {
    if (fxparser.validate(this.xml)) {
      this.xml = xmlString;
    } else {
      throw Error('It is not xml format');
    }
  }
  getXML() {
    return this.xml;
  }
  parseXML() {
    const xmlParserOptions = {
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
    };
    if (fxparser.validate(this.xml)) {
      this.json = fxparser.parse(this.xml, xmlParserOptions);
    } 
  }
  parseXMLToJSON(xml: string) {
    const xmlParserOptions = {
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
    };
    if (fxparser.validate(xml)) {
      return fxparser.parse(xml, xmlParserOptions);
    }
  }
  convertToCss(json: any) {
    let tmpJson: any = {};
    let tmpCssStyle = {};
    const mappingKeys = this.factory.getKey();

    Object.keys(json).forEach((key: string) => {
      tmpCssStyle = {};
      mappingKeys.forEach((prop: string) => {
        const factory = this.factory.getStyleTransform(prop);
        if (prop in json[key]) {
          const result = factory.transformV2(json[key], prop);
          tmpCssStyle = { ...tmpCssStyle, ...result };
        }
      });
      tmpJson[key] = tmpCssStyle;
    })
    
    return tmpJson;
  }
  convertStyleToCss() {
    if (
      Object.keys(this.json).length === 0 &&
      this.json.constructor === Object
    ) {
      this.parseXML();
    }
    const mappingKeys = this.factory.getKey();
    mappingKeys.forEach((prop: string) => {
      const factory = this.factory.getStyleTransform(prop);
      const result = factory.transform(this.json, prop);
      this.cssStyle = { ...this.cssStyle, ...result };
    });
  }
  getJSON() {
    if (
      Object.keys(this.json).length === 0 &&
      this.json.constructor === Object
    ) {
      this.parseXML();
      return this.json;
    } else {
      return this.json;
    }
  }
  getCss() {
    if (Object.keys(this.cssStyle).length === 0) {
      this.convertStyleToCss();
      return this.cssStyle;
    } else {
      return this.cssStyle;
    }
  }
  handleProperties(styleValue: any): object {
    let properties: propertiesRecord = {};
    Object.keys(styleValue['Properties']).forEach((prop) => {
      let propName = '@_' + prop;
      let propValue = {};
      if (styleValue['Properties'][prop]['#text'] !== undefined) {
        propValue = styleValue['Properties'][prop]['#text'];
      } else {
        propValue = styleValue['Properties'][prop];
      }
      properties = { ...properties, ...{ [propName]: propValue } };
    });
    return properties;
  }
  // parse default paragraph style groups
  parseDefaultParagraphStyleGroups(xml: string) {
    const jObj = this.parseXMLToJSON(xml);
    const rootParaStyleGroup = jObj['idPkg:Styles']['RootParagraphStyleGroup']['ParagraphStyle'];
    let defaultParaStyleMapList: paraGraphStyleRecord = {};

    Object.keys(rootParaStyleGroup).forEach((key) => {
      let paragraphStyleList = rootParaStyleGroup[key];
      let styleName = paragraphStyleList['@_Name'].split('/')[1];
      let styleValue = paragraphStyleList;
      //Handle Properties property
      let properties = this.handleProperties(styleValue);
      if (styleValue.hasOwnProperty('Properties')) {
        delete styleValue['Properties'];
      }
      let tmpStyle: paraGraphStyleRecord = {
        [styleName]: { ...styleValue, ...properties },
      };
      defaultParaStyleMapList = {
        ...defaultParaStyleMapList,
        ...tmpStyle,
      };
    });
    return this.convertToCss(defaultParaStyleMapList);
  }
}
