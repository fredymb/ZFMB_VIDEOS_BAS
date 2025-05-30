sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'videos',
            componentId: 'ZC_FMB_VIDEOList',
            contextPath: '/ZC_FMB_VIDEO'
        },
        CustomPageDefinitions
    );
});