import * as CSS from 'csstype';

export class UnderlineStyleTransform implements StyleTransformStrategy {
    IDMLAttr: string = '@_Underline';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const underlineValue = jsonObj['ParagraphStyle'][propName];
        style = {
            textDecoration: underlineValue ? 'underline' : 'none',
        };
        return style;
    }

}