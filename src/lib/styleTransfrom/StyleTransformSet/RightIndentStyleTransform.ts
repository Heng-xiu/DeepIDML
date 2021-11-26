import * as CSS from 'csstype';

export class RightIndentStyleTransform implements StyleTransformStrategy {
    
    IDMLAttr: string = '@_RightIndent';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const rightIndentValue = jsonObj['ParagraphStyle'][propName];
        style = {
            marginRight: `${rightIndentValue}`,
        };
        return style;
    }
    transformV2(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const rightIndentValue = jsonObj[propName];
        style = {
            marginRight: `${rightIndentValue}`,
        };
        return style;
    }

}