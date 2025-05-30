sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'videos',
            componentId: 'ZC_FMB_VIDEOObjectPage',
            contextPath: '/ZC_FMB_VIDEO'
        },
        CustomPageDefinitions
    );
});