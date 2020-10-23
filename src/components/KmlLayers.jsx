import React from 'react';
import { KmlLayer } from '@react-google-maps/api';

function generateRandom() {
  return Math.random() * 10000000000000000;
}

const KmlLayers = () => (
  <>
    <KmlLayer
      url={`https://www.google.com/maps/d/kml?mid=1lHXdmJbygBq3sfnb6DBxjNU_HVcD_fdr&ver=${generateRandom()}`}
      options={{ preserveViewport: true }}
    />
    <KmlLayer
      // url="https://www.google.com/maps/d/kml?mid=1z4rr032owH_VlORaVO50sof9rpWhJolO"
      url={`https://www.google.com/maps/d/kml?mid=1z4rr032owH_VlORaVO50sof9rpWhJolO&ver=${generateRandom()}`}
      options={{ preserveViewport: true }}
    />
    <KmlLayer
      url={`https://www.google.com/maps/d/kml?mid=1_OITW9EF4lJg6NHGbbQkYrp-2STuKZ1r&ver=${generateRandom()}`}
      options={{ preserveViewport: true }}
    />
  </>
);

export default KmlLayers;
