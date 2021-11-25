import * as CSS from 'csstype';

export class LeftIndentStyleTransform implements StyleTransformStrategy {
    IDMLAttr: string = '@_LeftIndent';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const leftIndentValue = jsonObj['ParagraphStyle'][propName];
        style = {
            marginLeft: `${leftIndentValue}`,
        };
        return style;
    }

}