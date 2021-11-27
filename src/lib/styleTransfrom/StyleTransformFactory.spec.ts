import test from 'ava';

import { StyleTransformFactory } from './StyleTransformFactory';

test('Factory is singleton', async (t) => {
    const factory1 = StyleTransformFactory.getInstance();
    const factory2 = StyleTransformFactory.getInstance();
    t.is(factory1, factory2);
});

test('Number of methods in Factory is the same as *ts file in StyleTransformset dir', async(t) => {
    const factory = StyleTransformFactory.getInstance();
    const factoryMethods = factory.getNumberOfStyleTransform();

    // Get number of files in StyleTransformset dir 
    const styleTransformsetDir = './src/lib/styleTransfrom/StyleTransformset';
    const files = await (await import('fs')).promises.readdir(styleTransformsetDir);
    const numberOfFiles = files.length;
    t.is(factoryMethods, numberOfFiles);
});
