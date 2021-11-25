import * as CSS from 'csstype';

enum Justification_EnumValue {
    LEFTALIGN = 'LeftAlign',
    CENTERALIGN = 'CenterAlign',
    RIGHTALIGN = 'RightAlign',
    LEFTJUSTIFIED = 'LeftJustified',
    RIGHTJUSTIFIED = 'RightJustified',
    CENTERJUSTIFIED = 'CenterJustified',
    FULLYJUSTIFIED = 'FullyJustified',
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