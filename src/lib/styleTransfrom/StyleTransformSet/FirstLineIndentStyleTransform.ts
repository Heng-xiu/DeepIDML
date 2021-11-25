import * as CSS from 'csstype';

export class FirstLineIndentStyleTransform implements StyleTransformStrategy {
  readonly IDMLAttr = '@_FirstLineIndent';

  transform(
    jsonObj: { readonly ParagraphStyle: any },
    propName: string
  ): object {
    if (propName !== this.IDMLAttr) return {};
    const value = jsonObj['ParagraphStyle'][propName];
    const style: CSS.Properties & CSS.PropertiesHyphen = {
      'text-indent': `${value}px`,
    };
    return style;
  }
}
