export class BasedOnTransform implements StyleTransformStrategy {

    IDMLAttr: string = '@_BasedOn';

    transform(jsonObj: object, propName: string): object {
        //throw new Error("Method not implemented.");
        return {jsonObj, propName}
    }

    // Extract substring from first slash in given string
    // and if substring contains '$ID/', then return substring after '$ID/'
    extractSubstring(str: string): string {
        const index = str.indexOf('/');
        if(str.substring(index + 1).indexOf('$ID') > -1) {
            return str.substring(index + 1).substring(str.substring(index + 1).indexOf('$ID/') + 4);
        }
        return str.substring(index + 1);
    }
    transformV2(jsonObj: any, propName: string): object {
        let style: object = {};
        if (propName !== this.IDMLAttr) return {};
        console.log("jsonObj[propName]=>", jsonObj[propName])
        const basedOnPropsName = this.extractSubstring(jsonObj[propName]);
        style = {
            [this.IDMLAttr]: unescape(basedOnPropsName),
        }
        return style
    }
}