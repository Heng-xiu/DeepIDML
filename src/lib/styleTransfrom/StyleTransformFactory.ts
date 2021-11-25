import { FillColorStyleTransform } from './StyleTransformSet/FillColorStyleTransform';
import { FirstLineIndentStyleTransform } from './StyleTransformSet/FirstLineIndentStyleTransform';
import { FontStyleTransform } from './StyleTransformSet/FontStyleTransform';
import { PointSizeStyleTransform } from './StyleTransformSet/PointSizeStyleTransform';

export class StyleTransformFactory {
  private static _instance: StyleTransformFactory;
  private static _styleTransfroms: {
    [key: string]: StyleTransformStrategy;
  };
  private constructor() {
    StyleTransformFactory._styleTransfroms = {
      '@_FirstLineIndent': new FirstLineIndentStyleTransform(),
      '@_FontStyle': new FontStyleTransform(),
      '@_FillColor': new FillColorStyleTransform(),
      '@_PointSize': new PointSizeStyleTransform(),
    };
  }
  static getInstance(): StyleTransformFactory {
    if (!StyleTransformFactory._instance) {
      StyleTransformFactory._instance = new StyleTransformFactory();
    }
    return StyleTransformFactory._instance;
  }
  getStyleTransform(
    styleTransfromIDEMLAttr: string
  ): StyleTransformStrategy {
    return StyleTransformFactory._styleTransfroms[styleTransfromIDEMLAttr];
  }
  getKey() {
    return Object.keys(StyleTransformFactory._styleTransfroms);
  }
}
