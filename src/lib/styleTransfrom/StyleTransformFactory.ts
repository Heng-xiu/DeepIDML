import { AppliedFontTransform } from './StyleTransformSet/AppliedFontTransform';
import { AppliedLanguageTransform } from './StyleTransformSet/AppliedLanguageTransform';
import { BasedOnTransform } from './StyleTransformSet/BasedOnTransform';
import { FillColorStyleTransform } from './StyleTransformSet/FillColorStyleTransform';
import { FirstLineIndentStyleTransform } from './StyleTransformSet/FirstLineIndentStyleTransform';
import { FontStyleTransform } from './StyleTransformSet/FontStyleTransform';
import { JustificationStyleTransform } from './StyleTransformSet/JustificationStyleTransform';
import { LeftIndentStyleTransform } from './StyleTransformSet/LeftIndentStyleTransform';
import { PointSizeStyleTransform } from './StyleTransformSet/PointSizeStyleTransform';
import { PositionTransform } from './StyleTransformSet/PositionTransform';
import { RightIndentStyleTransform } from './StyleTransformSet/RightIndentStyleTransform';
import { SkewStyleTransform } from './StyleTransformSet/SkewStyleTransform';
import { SpaceAfterStyleTransform } from './StyleTransformSet/SpaceAfterTransform';
import { SpaceBeforeStyleTransform } from './StyleTransformSet/SpaceBeforeTransform';
import { TrackingStyleTransform } from './StyleTransformSet/TrackingStyleTransform';
import { UnderlineOffsetStyleTransform } from './StyleTransformSet/UnderlineOffsetStyleTransform';
import { UnderlineStyleTransform } from './StyleTransformSet/UnderlineStyleTransform';
import { UnderlineWeightStyleTransform } from './StyleTransformSet/UnderlineWeightStyleTransform';

export class StyleTransformFactory {
  private static _instance: StyleTransformFactory;
  private static _styleTransfroms: {
    [key: string]: StyleTransformStrategy;
  };
  private constructor() {
    StyleTransformFactory._styleTransfroms = {
    '@_Skew': new SkewStyleTransform(),
    '@_FontStyle': new FontStyleTransform(),
    '@_FirstLineIndent': new FirstLineIndentStyleTransform(),
    '@_FillColor': new FillColorStyleTransform(),
    '@_Tracking': new TrackingStyleTransform(),
    '@_Underline': new UnderlineStyleTransform(),
    '@_UnderlineOffset': new UnderlineOffsetStyleTransform(),
    '@_UnderlineWeight': new UnderlineWeightStyleTransform(),
    '@_PointSize': new PointSizeStyleTransform(),
    '@_Justification': new JustificationStyleTransform(),
    '@_LeftIndent': new LeftIndentStyleTransform(),
    '@_RightIndent': new RightIndentStyleTransform(),
    '@_BasedOn': new BasedOnTransform(),
    '@_AppliedFont': new AppliedFontTransform(),
    '@_AppliedLanguage': new AppliedLanguageTransform(),
    '@_SpaceBefore': new SpaceBeforeStyleTransform(),
    '@_SpaceAfter': new SpaceAfterStyleTransform(),
    '@_PositionTransform': new PositionTransform(),
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
  // Get number of style transform in factory (for testing) 
  getNumberOfStyleTransform() {
    return Object.keys(StyleTransformFactory._styleTransfroms).length;
  }
}
