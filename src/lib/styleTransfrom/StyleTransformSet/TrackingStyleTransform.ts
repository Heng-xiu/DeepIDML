import * as CSS from 'csstype';

export class TrackingStyleTransform implements StyleTransformStrategy {
    
    IDMLAttr: string = '@_Tracking';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const trackingValue = jsonObj['ParagraphStyle'][propName];
        style = {
            letterSpacing: `${trackingValue}`,
        };
        return style;
    }
    transformV2(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const trackingValue = jsonObj[propName];
        style = {
            letterSpacing: `${trackingValue}`,
        };
        return style;
    }

}