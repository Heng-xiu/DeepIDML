import * as CSS from 'csstype';

enum Position_EnumValue {
    NORMAL = 'Normal',
    SUPERSCRIPT = 'Superscript',    //上標
    SUBSCRIPT = 'Subscript',    //下標
    OTSUPERSCRIPT = 'OTSuperscript',
    OTSUBSCRIPT = 'OTSubscript',
    OTNUMERATOR = 'OTNumerator',
    OTDENOMINATOR = 'OTDenominator',
}

export class PositionTransform implements StyleTransformStrategy {
    IDMLAttr: string = "@_Position";

    transform(jsonObj: object, propName: string): object {
        return {...jsonObj, propName};
    }
    transformV2(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const positionValue = jsonObj[propName];
        switch (positionValue) {
            case Position_EnumValue.NORMAL:
                style = {  };
                break;
            case Position_EnumValue.SUPERSCRIPT:
                style = { 
                    fontVariantPosition: 'super',
                };
                break;
            case Position_EnumValue.SUBSCRIPT:
                style = {
                    fontVariantPosition: 'sub',
                };
                break;
            default:
                style = {};
                break;
        }
        return style;
    }
}