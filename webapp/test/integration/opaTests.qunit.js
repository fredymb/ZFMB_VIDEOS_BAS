sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'videos/test/integration/FirstJourney',
		'videos/test/integration/pages/ZC_FMB_VIDEOList',
		'videos/test/integration/pages/ZC_FMB_VIDEOObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_FMB_VIDEOList, ZC_FMB_VIDEOObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('videos') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_FMB_VIDEOList: ZC_FMB_VIDEOList,
					onTheZC_FMB_VIDEOObjectPage: ZC_FMB_VIDEOObjectPage
                }
            },
            opaJourney.run
        );
    }
);