import * as publicApi from './public-api';

describe('GIVEN: public_api.ts', () => {
    it('THEN: file exports should contain object(FeatureToggleService)', () => {
        const hasExport = 'FeatureToggleService' in publicApi;
        expect(hasExport).toBe(true);
    });
});
