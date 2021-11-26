import * as CSS from 'csstype';

export class FillColorStyleTransform implements StyleTransformStrategy {
    
    IDMLAttr: string = '@_FillColor';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const colorValueList = jsonObj['ParagraphStyle'][propName].split('/');
    
        switch (colorValueList[0].toLowerCase()) {
          case 'color':
            style = {
              color: colorValueList[1],
            };
            break;
          default:
            console.log('default');
            break;
        }
        return style;
    }
    transformV2(jsonObj: any, propName: string): object {
      let style: CSS.Properties & CSS.PropertiesHyphen = {};
      if (propName !== this.IDMLAttr) return {};
      const colorValueList = jsonObj[propName].split('/');
  
      switch (colorValueList[0].toLowerCase()) {
        case 'color':
          style = {
            color: colorValueList[1],
          };
          break;
        default:
          console.log('default');
          break;
      }
      return style;
    }

}