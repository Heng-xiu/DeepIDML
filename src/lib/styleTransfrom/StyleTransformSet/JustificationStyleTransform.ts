import * as CSS from 'csstype';

enum Justification_EnumValue {
    LEFTALIGN = 'LeftAlign',    //靠左對齊
    CENTERALIGN = 'CenterAlign',//置中對齊
    RIGHTALIGN = 'RightAlign',  //靠右對齊

    LEFTJUSTIFIED = 'LeftJustified',    //(末行靠左對齊)
    RIGHTJUSTIFIED = 'RightJustified',  //(末行靠右對齊)
    CENTERJUSTIFIED = 'CenterJustified',//(末行置中對齊)
    FULLYJUSTIFIED = 'FullyJustified',  //(強制對齊)

    TOBINDINGSIDE = 'ToBindingSide',
    AWAYFROMBINDINGSIDE = 'AwayFromBindingSide',
}

export class JustificationStyleTransform implements StyleTransformStrategy {
    
    IDMLAttr: string = '@_Justification';

    transform(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const justificationValue = jsonObj['ParagraphStyle'][propName];
        switch (justificationValue) {
        case Justification_EnumValue.LEFTALIGN:
            style = { textAlign: 'left' };
            break;
        case Justification_EnumValue.CENTERALIGN:
            style = { textAlign: 'center' };
            break;
        case Justification_EnumValue.RIGHTALIGN:
            style = { textAlign: 'right' };
            break;
        case Justification_EnumValue.LEFTJUSTIFIED:
            style = { 
                textAlign: 'justify',
                textAlignLast: 'left',
            };
            break;
        case Justification_EnumValue.RIGHTJUSTIFIED:
            style = { 
                textAlign: 'justify',
                textAlignLast: 'right',
            };
            break;
        case Justification_EnumValue.CENTERJUSTIFIED:
            style = { 
                textAlign: 'justify',
                textAlignLast: 'center',
            };
            break;
        case Justification_EnumValue.FULLYJUSTIFIED:
            style = { 
                textAlign: 'justify',
                textAlignLast: 'justify',
            };
            break;
        default:
            style = { textAlign: 'left'};
            break;
        }
        return style;
    }
    transformV2(jsonObj: any, propName: string): object {
        let style: CSS.Properties & CSS.PropertiesHyphen = {};
        if (propName !== this.IDMLAttr) return {};
        const justificationValue = jsonObj[propName];
        switch (justificationValue) {
        case Justification_EnumValue.LEFTALIGN:
            style = { textAlign: 'left' };
            break;
        case Justification_EnumValue.CENTERALIGN:
            style = { textAlign: 'center' };
            break;
        case Justification_EnumValue.RIGHTALIGN:
            style = { textAlign: 'right' };
            break;
        case Justification_EnumValue.CENTERJUSTIFIED:
            style = { textAlign: 'justify' };
            break;
        default:
            style = { textAlign: 'left'};
            break;
        }
        return style;
    }

}