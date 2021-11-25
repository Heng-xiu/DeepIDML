import { FirstLineIndentStyleTransform } from './StyleTransformSet/FirstLineIndentStyleTransform';

export class StyleTransformFactory {
  private static _instance: StyleTransformFactory;
  private static _styleTransfroms: {
    [key: string]: StyleTransformStrategy;
  };
  private constructor() {
    StyleTransformFactory._styleTransfroms = {
      '@_FirstLineIndent': new FirstLineIndentStyleTransform(),
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
