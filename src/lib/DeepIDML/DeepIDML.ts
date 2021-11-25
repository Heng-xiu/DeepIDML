import * as CSS from 'csstype';
import * as fxparser from 'fast-xml-parser';

import { StyleTransformFactory } from '../styleTransfrom/StyleTransformFactory';

export class DeepIDML implements IDeepIDML {
  private xml = '';
  private json: object = {};
  private cssStyle: CSS.Properties = {};

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
    throw new Error('Method not implemented.');
  }
  convertStyleToCss() {
    if (
      Object.keys(this.json).length === 0 &&
      this.json.constructor === Object
    ) {
      this.parseXML();
    }
    const mappingKeys = StyleTransformFactory.getKey();
    mappingKeys.forEach((prop) => {
      const factory = StyleTransformFactory.getStyleTransform(prop);
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
}
