(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_225B77C9_32DA_6ECD_41B8_878E8E80CB85], 'cardboardAvailable')",
 "data": {
  "name": "Player6764"
 },
 "children": [
  "this.MainViewer",
  "this.IconButton_225B77C9_32DA_6ECD_41B8_878E8E80CB85"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 20,
 "paddingBottom": 0,
 "layout": "absolute",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.42,
  "pitch": 0
 },
 "id": "camera_23B30326_32FA_A746_4197_A0C3E9BCD702",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_t.jpg",
 "overlays": [
  "this.panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_tcap0",
  "this.overlay_4D93B9F1_54C5_F5EF_41C0_E5C9421A2DB8",
  "this.overlay_4CB40DF9_54C6_6DDF_41C2_AAA9E4C468E6"
 ],
 "partial": false,
 "pitch": 8.98,
 "class": "Panorama",
 "label": "after BB",
 "id": "panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 161.29,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5",
   "backwardYaw": 1.37,
   "yaw": -148.93,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB",
   "backwardYaw": 100.96,
   "yaw": 83.14,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_t.jpg",
 "overlays": [
  "this.panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_tcap0",
  "this.overlay_4E2E9B06_54C3_F635_41CC_666CEE6EB166",
  "this.overlay_4EA72CDF_54DE_13D3_41BC_6D4AEE202600"
 ],
 "partial": false,
 "pitch": 8.75,
 "class": "Panorama",
 "label": "Hostel 2",
 "id": "panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 161.75,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF52B05_54C2_1637_41D1_061657889C89",
   "backwardYaw": -179.85,
   "yaw": 180,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB",
   "backwardYaw": -1.08,
   "yaw": 0.97,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.29,
  "pitch": 0
 },
 "id": "camera_23D53298_32FA_A14B_41C2_22DCB2F2FE49",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.22,
  "pitch": 0
 },
 "id": "camera_212F517D_32FA_A3C5_41C7_6C6B6C970699",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_t.jpg",
 "overlays": [
  "this.overlay_4F167895_54C6_3257_41B2_12A2AC615B20",
  "this.overlay_4F612CAC_54C6_1275_41D4_DEC619A06BFA",
  "this.overlay_48A14B06_54C6_1635_41C0_7B41D6B71F4E",
  "this.panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_tcap0"
 ],
 "partial": false,
 "pitch": 6.73,
 "class": "Panorama",
 "label": "G",
 "id": "panorama_5BC4B186_54C2_3235_4196_10B49B93AF19",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 160.44,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF",
   "backwardYaw": -79.83,
   "yaw": -92.41,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C",
   "backwardYaw": -85.45,
   "yaw": 89.02,
   "distance": 1
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_t.jpg",
 "class": "Panorama",
 "label": "IT start",
 "id": "panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "rowCount": 14,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "height": 7168
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "pitch": 5.47,
 "vfov": 117.09,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_4108771F_54C6_1E53_41D0_89CBD1EA701E",
  "this.overlay_41724C53_54C6_F2D2_41C3_18D9B025FDB0",
  "this.overlay_42FEC32C_54C6_3670_41C8_5FF450421C92",
  "this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D",
   "backwardYaw": -57.6,
   "yaw": -1.9,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705",
   "backwardYaw": -178.42,
   "yaw": -89.96,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C",
   "backwardYaw": 81.24,
   "yaw": 180,
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_t.jpg",
 "overlays": [
  "this.panorama_5BF52B05_54C2_1637_41D1_061657889C89_tcap0",
  "this.overlay_4F9DB53D_54DE_3257_41C7_4F3D107B241A",
  "this.overlay_4EFC8246_54DE_3635_41C4_D0EE4626F41F"
 ],
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "label": "Internationla hostel",
 "id": "panorama_5BF52B05_54C2_1637_41D1_061657889C89",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 155.87,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D",
   "backwardYaw": -179.85,
   "yaw": 87.79,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6",
   "backwardYaw": 180,
   "yaw": -179.85,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_23D89298_32FA_A14B_41B9_970E11B3F0B0",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.44,
  "pitch": 0
 },
 "id": "camera_239202F6_32FA_A6C7_41C3_6AB449E84E79",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.71,
  "pitch": 0
 },
 "id": "camera_26DFF191_32FA_A35D_41B8_18A0D585BE91",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.98,
  "pitch": 0
 },
 "id": "camera_23C192A8_32FA_A14A_41BD_889D9A5A02A7",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.17,
  "pitch": 0
 },
 "id": "camera_216B312F_32FA_A345_41B0_21EDBC05AAF0",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_t.jpg",
 "overlays": [
  "this.panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_tcap0",
  "this.overlay_4ACF59E7_5547_F5F3_41CE_0CEF4A9CFA33",
  "this.overlay_4AE96EDE_5546_2FD5_41D2_4CD1607C9297"
 ],
 "partial": false,
 "pitch": 8.54,
 "class": "Panorama",
 "label": "Center of C and G block",
 "id": "panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 156.83,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8",
   "backwardYaw": 118.57,
   "yaw": -120.29,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C"
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_t.jpg",
 "overlays": [
  "this.panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_tcap0",
  "this.overlay_4F393B63_54C3_F6F3_41CE_51E682182798",
  "this.overlay_4F781B9E_54C2_F652_41CB_DA0E58CDAEBA"
 ],
 "partial": false,
 "pitch": 9.86,
 "class": "Panorama",
 "label": "IT BLOCK",
 "id": "panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 159.54,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A",
   "backwardYaw": 180,
   "yaw": 81.24,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC4B186_54C2_3235_4196_10B49B93AF19",
   "backwardYaw": 89.02,
   "yaw": -85.45,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.03,
  "pitch": 0
 },
 "id": "camera_23FF62D7_32FA_A6C5_41AA_5C6575338596",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.92,
  "pitch": 0
 },
 "id": "camera_23F192C7_32FA_A6C5_41BB_2AF1A6A688DC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_t.jpg",
 "overlays": [
  "this.panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_tcap0",
  "this.overlay_4BAF3E0F_5542_2E33_41CA_F2402C3B99BC",
  "this.overlay_4BF01F3A_5546_EE5D_41A6_3B3B67E28298"
 ],
 "partial": false,
 "pitch": 12.33,
 "class": "Panorama",
 "label": "C block",
 "id": "panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 154.59,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705",
   "backwardYaw": -90.78,
   "yaw": -46.54,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A",
   "backwardYaw": -120.29,
   "yaw": 118.57,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.35,
  "pitch": 0
 },
 "id": "camera_231693B3_32FA_A75E_41BE_83DCCC01C906",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonCardboardView": "this.IconButton_225B77C9_32DA_6ECD_41B8_878E8E80CB85",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.4,
  "pitch": 0
 },
 "id": "camera_2102D14F_32FA_A3C6_41B2_DD1BC55B8491",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.2,
  "pitch": 0
 },
 "id": "camera_237D6393_32FA_A75D_41B1_393385DFF961",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_t.jpg",
 "overlays": [
  "this.overlay_4DCCE7CF_54C6_FE33_41C2_9ECDCD7903CA",
  "this.overlay_4C04AE97_54C5_EE53_41BD_FCF9BD9A014F",
  "this.panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_tcap0"
 ],
 "partial": false,
 "pitch": 5.39,
 "class": "Panorama",
 "label": "Hostel 1 part 2",
 "id": "panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 169.22,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6",
   "backwardYaw": 0.97,
   "yaw": -1.08,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86",
   "backwardYaw": 83.14,
   "yaw": 100.96,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_t.jpg",
 "overlays": [
  "this.overlay_43CE7AA2_54C2_166D_41D4_3BC5E78D0F68",
  "this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_tcap0",
  "this.overlay_4C5733FF_54C2_15D2_41D1_60011AA24A5C",
  "this.overlay_4D2CBD0B_54C2_1233_41CA_BC6291779923"
 ],
 "partial": false,
 "pitch": 8.75,
 "class": "Panorama",
 "label": "Spark Back Coloured",
 "id": "panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 161.76,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A",
   "backwardYaw": -1.9,
   "yaw": -57.6,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5",
   "backwardYaw": 179.8,
   "yaw": 44.03,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF52B05_54C2_1637_41D1_061657889C89",
   "backwardYaw": 87.79,
   "yaw": -179.85,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_t.jpg",
 "overlays": [
  "this.overlay_40312594_54C6_1255_41CA_DE561577FB01",
  "this.overlay_41BED11C_54C6_7255_41D1_4F801F66B496",
  "this.overlay_40A174DA_54C6_13DD_41B1_942745060C7A",
  "this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_tcap0"
 ],
 "partial": false,
 "pitch": 3.59,
 "class": "Panorama",
 "label": "Outside of spark entrance",
 "id": "panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 162.2,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705",
   "backwardYaw": 0.56,
   "yaw": 88.71,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F",
   "backwardYaw": 92.71,
   "yaw": -1.49,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5",
   "backwardYaw": -139.31,
   "yaw": -89.24,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.76,
  "pitch": 0
 },
 "id": "camera_213DF16E_32FA_A3C7_41C0_AC4D481B6EAA",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_t.jpg",
 "overlays": [
  "this.panorama_5BCB170C_54CE_7E35_4195_0B532C643229_tcap0",
  "this.overlay_742F9F48_54C6_2E3D_41D5_1290AE5971E0"
 ],
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "label": "Audit",
 "id": "panorama_5BCB170C_54CE_7E35_4195_0B532C643229",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 155.9,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.15,
  "pitch": 0
 },
 "id": "camera_23CA52BE_32FA_A147_41C7_0B5E50E62B8B",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.63,
  "pitch": 0
 },
 "id": "camera_235F7364_32FA_A7FB_41C3_3F9DBB0D1DBE",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_t.jpg",
 "overlays": [
  "this.overlay_41F2E480_54C2_122D_41B2_1F47CAA217D2",
  "this.panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_tcap0"
 ],
 "partial": false,
 "pitch": 11.44,
 "class": "Panorama",
 "label": "SPARK ENTRY",
 "id": "panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 156.38,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8",
   "backwardYaw": -1.49,
   "yaw": 92.71,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_t.jpg",
 "overlays": [
  "this.overlay_4BBB98D5_54C2_13D7_41C9_D639FC275EC0",
  "this.overlay_493ABD3D_54C2_1257_41CF_DDE6E18AC144",
  "this.panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_tcap0"
 ],
 "partial": false,
 "pitch": 14.59,
 "class": "Panorama",
 "label": "fc1",
 "id": "panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 150.06,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF",
   "backwardYaw": -179.65,
   "yaw": 179.8,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BCB170C_54CE_7E35_4195_0B532C643229"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.01,
  "pitch": 0
 },
 "id": "camera_268461DC_32FA_A2CA_41AF_599089440A50",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -46.54,
  "pitch": 0
 },
 "id": "camera_269BD1CC_32FA_A2CB_41AC_C4BCB2A6903F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.38,
  "pitch": 0
 },
 "id": "camera_231C03C2_32FA_A73F_41BB_A4D1163AA664",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BF52B05_54C2_1637_41D1_061657889C89_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_5BF52B05_54C2_1637_41D1_061657889C89",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BF52B05_54C2_1637_41D1_061657889C89_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_5BC4B186_54C2_3235_4196_10B49B93AF19",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "media": "this.panorama_5BCB170C_54CE_7E35_4195_0B532C643229",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BCB170C_54CE_7E35_4195_0B532C643229_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_t.jpg",
 "overlays": [
  "this.overlay_4CF2A7F6_54CE_3DD5_41B5_CEE4317E5356",
  "this.overlay_43605DC1_54CF_F22F_41C5_E2DBCA9C8AFE",
  "this.panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_tcap0"
 ],
 "partial": false,
 "pitch": 9.19,
 "class": "Panorama",
 "label": "BB",
 "id": "panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 160.87,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D",
   "backwardYaw": 44.03,
   "yaw": 179.8,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86",
   "backwardYaw": -148.93,
   "yaw": 1.37,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.63,
  "pitch": 0
 },
 "id": "camera_2308D3D2_32FA_A6DF_41BE_6D55FAEBD86F",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.76,
  "pitch": 0
 },
 "id": "camera_233483E1_32FA_A6FD_41C3_59563AD6FF2D",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_26F901AD_32FA_A345_41BA_6A4FF691FD92",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -61.43,
  "pitch": 0
 },
 "id": "camera_26E9B1BC_32FA_A34B_4194_CFE2BA307E94",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.51,
  "pitch": 0
 },
 "id": "camera_23B94335_32FA_A745_41BC_39119A0E91B2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.15,
  "pitch": 0
 },
 "id": "camera_26C9F19D_32FA_A345_4199_76F33F4BC44D",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_t.jpg",
 "overlays": [
  "this.overlay_45175D75_54DE_12D7_41AE_06021EE5F5DC",
  "this.overlay_459C50B8_54C2_725D_41B2_448329609574",
  "this.overlay_46D2AA05_54C2_F637_41B3_3DAA8A670ADE",
  "this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_tcap0"
 ],
 "partial": false,
 "pitch": 10.14,
 "class": "Panorama",
 "label": "Before Spark",
 "id": "panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 159.04,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1",
   "backwardYaw": 146.62,
   "yaw": 133.46,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450",
   "backwardYaw": 73.37,
   "yaw": 44.99,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8",
   "backwardYaw": -89.24,
   "yaw": -139.31,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_t.jpg",
 "overlays": [
  "this.overlay_401816A8_54C2_1E7D_41C6_909F8BEEB10A",
  "this.panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_tcap0"
 ],
 "partial": false,
 "pitch": 10.78,
 "class": "Panorama",
 "label": "CSE Front",
 "id": "panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 157.7,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5"
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_t.jpg",
 "overlays": [
  "this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_tcap0",
  "this.overlay_49F9224F_54C2_3633_41C2_06449E17F928",
  "this.overlay_481A158C_54C2_1235_41D5_0D6AAE7B58B6",
  "this.overlay_49CE6CC2_54C2_122D_41C3_D83ABD562995"
 ],
 "partial": false,
 "pitch": 5.17,
 "class": "Panorama",
 "label": "IT and FC connect",
 "id": "panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 163.54,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0",
   "backwardYaw": 96.8,
   "yaw": 82.58,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7",
   "backwardYaw": 179.8,
   "yaw": -179.65,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC4B186_54C2_3235_4196_10B49B93AF19",
   "backwardYaw": -92.41,
   "yaw": -79.83,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_t.jpg",
 "overlays": [
  "this.panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_tcap0",
  "this.overlay_4A37E9CC_54CE_1235_41C4_592815261166"
 ],
 "partial": false,
 "pitch": 1.99,
 "class": "Panorama",
 "label": "F",
 "id": "panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 159.97,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF",
   "backwardYaw": 82.58,
   "yaw": 96.8,
   "distance": 1
  }
 ]
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_t.jpg",
 "overlays": [
  "this.overlay_42D7A181_54FE_122F_41AA_B927F7C4158D",
  "this.overlay_415E16C8_54FE_1E3D_41D2_03FA756182E1",
  "this.overlay_4141C71E_54FE_1E55_41D2_297E89306962",
  "this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_tcap0"
 ],
 "partial": false,
 "pitch": 6.51,
 "class": "Panorama",
 "label": "Outside spark",
 "id": "panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 161.78,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A",
   "backwardYaw": -89.96,
   "yaw": -178.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8",
   "backwardYaw": -46.54,
   "yaw": -90.78,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8",
   "backwardYaw": 88.71,
   "yaw": 0.56,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12,
  "pitch": -18.73
 },
 "id": "panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.86,
  "pitch": 0
 },
 "id": "camera_23E5D2E7_32FA_A6C6_41C1_6859D33E4012",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.58,
  "pitch": 0
 },
 "id": "camera_210C915E_32FA_A3C7_41C2_AA8235B3BB4C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BCB170C_54CE_7E35_4195_0B532C643229_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.46,
  "pitch": 0
 },
 "id": "camera_23D37288_32FA_A14B_41A4_C947CE9E7558",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_t.jpg",
 "overlays": [
  "this.overlay_448B64DF_54DE_13D3_41D4_C27A839608C7",
  "this.panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0"
 ],
 "partial": false,
 "pitch": 10.76,
 "class": "Panorama",
 "label": "After main gate",
 "id": "panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 157.73,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5",
   "backwardYaw": 44.99,
   "yaw": 73.37,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.21,
  "pitch": 0
 },
 "id": "camera_236AC3A3_32FA_A77D_41C3_91E2E008E49C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -79.04,
  "pitch": 0
 },
 "id": "camera_2344F374_32FA_A7DB_41A5_1C5E33C15B6B",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.04,
  "pitch": 0
 },
 "id": "camera_2640620B_32FA_A14D_41A0_ABB593032B75",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.2,
  "pitch": 0
 },
 "id": "camera_26A651FB_32FA_A2CD_4190_1F19D360A04A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 87.59,
  "pitch": 0
 },
 "id": "camera_2657920B_32FA_A14D_41C7_AAE1C76433F6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.55,
  "pitch": 0
 },
 "id": "camera_2117613F_32FA_A345_41A9_C70FEB1901A2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_t.jpg",
 "overlays": [
  "this.overlay_47EB0374_54C6_36D5_41AB_24EDF1C2E0DA",
  "this.overlay_47C36E05_54C6_EE37_41BA_680DBA7EEB25",
  "this.panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_tcap0"
 ],
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "label": "Library",
 "id": "panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1",
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "rowCount": 7,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "height": 3584
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "hfov": 360,
 "vfov": 158.6,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5",
   "backwardYaw": 133.46,
   "yaw": 146.62,
   "distance": 1
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.29,
  "pitch": 0
 },
 "id": "camera_23996306_32FA_A747_4185_C3AEDC3FD1EC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.1,
  "pitch": 0
 },
 "id": "camera_23709386_32FA_A747_41C1_77BABFFC1521",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.07,
  "pitch": 0
 },
 "id": "camera_23537354_32FA_A7DB_41BE_5FEE5640CC9A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.97,
  "pitch": 0
 },
 "id": "camera_23A5F345_32FA_A7C5_41AE_36C741BC041D",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 40.69,
  "pitch": 0
 },
 "id": "camera_23863315_32FA_A745_41AA_F101D6F41CCD",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.2,
  "pitch": 0
 },
 "id": "camera_26B581EB_32FA_A2CD_41B5_1A6FA2DC3787",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "minWidth": 100,
 "borderSize": 0,
 "playbackBarHeadHeight": 15,
 "toolTipBorderColor": "#767676",
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "shadow": false,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "transitionDuration": 500,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "maxHeight": 55,
 "data": {
  "name": "IconButton6860"
 },
 "id": "IconButton_225B77C9_32DA_6ECD_41B8_878E8E80CB85",
 "backgroundOpacity": 0,
 "width": 56,
 "right": "4.17%",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "transparencyActive": false,
 "bottom": "9.41%",
 "minWidth": 1,
 "borderSize": 0,
 "mode": "push",
 "class": "IconButton",
 "shadow": false,
 "height": 55,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 56,
 "iconURL": "skin/IconButton_225B77C9_32DA_6ECD_41B8_878E8E80CB85.png"
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 55.5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5, this.camera_235F7364_32FA_A7FB_41C3_3F9DBB0D1DBE); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D9C8CC_5542_7235_41CC_3EBDB39BC80E",
   "pitch": -1.93,
   "yaw": -148.93,
   "hfov": 44.09,
   "distance": 100
  }
 ],
 "id": "overlay_4D93B9F1_54C5_F5EF_41C0_E5C9421A2DB8",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -1.93,
   "hfov": 44.09
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB, this.camera_2344F374_32FA_A7DB_41A5_1C5E33C15B6B); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D808CC_5542_7235_41A3_CCDF0DD7AA0E",
   "pitch": -18.93,
   "yaw": 83.14,
   "hfov": 37.58,
   "distance": 100
  }
 ],
 "id": "overlay_4CB40DF9_54C6_6DDF_41C2_AAA9E4C468E6",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 83.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -18.93,
   "hfov": 37.58
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 54
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB, this.camera_23F192C7_32FA_A6C5_41BB_2AF1A6A688DC); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DB48CC_5542_7235_41C9_DE2EA7D8346D",
   "pitch": -3.36,
   "yaw": 0.97,
   "hfov": 47.31,
   "distance": 100
  }
 ],
 "id": "overlay_4E2E9B06_54C3_F635_41CC_666CEE6EB166",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.36,
   "hfov": 47.31
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF52B05_54C2_1637_41D1_061657889C89, this.camera_23CA52BE_32FA_A147_41C7_0B5E50E62B8B); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DBF8CC_5542_7235_41C9_A791226011C7",
   "pitch": -5.07,
   "yaw": 180,
   "hfov": 49.77,
   "distance": 100
  }
 ],
 "id": "overlay_4EA72CDF_54DE_13D3_41BC_6D4AEE202600",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -5.07,
   "hfov": 49.77
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF, this.camera_216B312F_32FA_A345_41B0_21EDBC05AAF0); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DDD8DB_5542_73D3_41D0_B47AC9BC0DC5",
   "pitch": -3.98,
   "yaw": -92.41,
   "hfov": 47.28,
   "distance": 100
  }
 ],
 "id": "overlay_4F167895_54C6_3257_41B2_12A2AC615B20",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.98,
   "hfov": 47.28
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C, this.camera_2117613F_32FA_A345_41A9_C70FEB1901A2); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DC78DB_5542_73D3_41CF_EBFC6AB37263",
   "pitch": -4.39,
   "yaw": 89.02,
   "hfov": 47.25,
   "distance": 100
  }
 ],
 "id": "overlay_4F612CAC_54C6_1275_41D4_DEC619A06BFA",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -4.39,
   "hfov": 47.25
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DCA8DB_5542_73D3_41CF_581720DDF984",
   "pitch": -23.02,
   "yaw": 52.7,
   "hfov": 27.27,
   "distance": 100
  }
 ],
 "id": "overlay_48A14B06_54C6_1635_41C0_7B41D6B71F4E",
 "data": {
  "label": "Arrow 04a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_1_HS_2_0_0_map.gif",
      "width": 22,
      "height": 16
     }
    ]
   },
   "pitch": -23.02,
   "hfov": 27.27
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 55.5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705, this.camera_210C915E_32FA_A3C7_41C2_AA8235B3BB4C); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A608CC_5542_7235_41A8_E9774CB47D50",
   "pitch": -4.79,
   "yaw": -89.96,
   "hfov": 47.23,
   "distance": 100
  }
 ],
 "id": "overlay_4108771F_54C6_1E53_41D0_89CBD1EA701E",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -4.79,
   "hfov": 47.23
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D, this.camera_2102D14F_32FA_A3C6_41B2_DD1BC55B8491); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A6B8CC_5542_7235_41C3_24661DB6A211",
   "pitch": -5.61,
   "yaw": -1.9,
   "hfov": 47.16,
   "distance": 100
  }
 ],
 "id": "overlay_41724C53_54C6_F2D2_41C3_18D9B025FDB0",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -5.61,
   "hfov": 47.16
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C, this.camera_213DF16E_32FA_A3C7_41C0_AC4D481B6EAA); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A6E8CC_5542_7235_41BC_4A876E4B16A0",
   "pitch": -8.27,
   "yaw": 180,
   "hfov": 75.39,
   "distance": 100
  }
 ],
 "id": "overlay_42FEC32C_54C6_3670_41C8_5FF450421C92",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_1_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -8.27,
   "hfov": 75.39
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 109.5
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BF52B05_54C2_1637_41D1_061657889C89_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 45
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6, this.camera_26F901AD_32FA_A345_41BA_6A4FF691FD92); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DA78DB_5542_73D3_41CE_2D4F4272747E",
   "pitch": -16.89,
   "yaw": -179.85,
   "hfov": 51.23,
   "distance": 100
  }
 ],
 "id": "overlay_4F9DB53D_54DE_3257_41C7_4F3D107B241A",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -16.89,
   "hfov": 51.23
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D, this.camera_26C9F19D_32FA_A345_4199_76F33F4BC44D); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DAE8DB_5542_73D3_41C3_4E81663E28FE",
   "pitch": -17.1,
   "yaw": 87.79,
   "hfov": 45.3,
   "distance": 100
  }
 ],
 "id": "overlay_4EFC8246_54DE_3635_41C4_D0EE4626F41F",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -17.1,
   "hfov": 45.3
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 64.5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DE58DB_5542_73D3_41C2_6BA6C28F8050",
   "pitch": -16.03,
   "yaw": -4.18,
   "hfov": 30.3,
   "distance": 100
  }
 ],
 "id": "overlay_4ACF59E7_5547_F5F3_41CE_0CEF4A9CFA33",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -16.03,
   "hfov": 30.3
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8, this.camera_26E9B1BC_32FA_A34B_4194_CFE2BA307E94); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DEF8DB_5542_73D3_41B1_35E0DF381BC2",
   "pitch": -5.59,
   "yaw": -120.29,
   "hfov": 47.14,
   "distance": 100
  }
 ],
 "id": "overlay_4AE96EDE_5546_2FD5_41D2_4CD1607C9297",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -5.59,
   "hfov": 47.14
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 60
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A, this.camera_23D89298_32FA_A14B_41B9_970E11B3F0B0); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DD08DB_5542_73D3_41D0_1AB752D462A5",
   "pitch": -3.36,
   "yaw": 81.24,
   "hfov": 47.31,
   "distance": 100
  }
 ],
 "id": "overlay_4F393B63_54C3_F6F3_41CE_51E682182798",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.36,
   "hfov": 47.31
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC4B186_54C2_3235_4196_10B49B93AF19, this.camera_23C192A8_32FA_A14A_41BD_889D9A5A02A7); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DDA8DB_5542_73D3_41CE_A4C01627FD9C",
   "pitch": -2.14,
   "yaw": -85.45,
   "hfov": 47.36,
   "distance": 100
  }
 ],
 "id": "overlay_4F781B9E_54C2_F652_41CB_DA0E58CDAEBA",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -2.14,
   "hfov": 47.36
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 78
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705, this.camera_212F517D_32FA_A3C5_41C7_6C6B6C970699); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D178DB_5542_73D3_41B2_FE57020681CF",
   "pitch": -7.47,
   "yaw": -46.54,
   "hfov": 46.99,
   "distance": 100
  }
 ],
 "id": "overlay_4BAF3E0F_5542_2E33_41CA_F2402C3B99BC",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -7.47,
   "hfov": 46.99
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A, this.camera_26DFF191_32FA_A35D_41B8_18A0D585BE91); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D198DB_5542_73D3_41CA_3C8EC362B23C",
   "pitch": -19.55,
   "yaw": 118.57,
   "hfov": 33.96,
   "distance": 100
  }
 ],
 "id": "overlay_4BF01F3A_5546_EE5D_41A6_3B3B67E28298",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 118.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -19.55,
   "hfov": 33.96
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86, this.camera_23E5D2E7_32FA_A6C6_41C1_6859D33E4012); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D898CC_5542_7235_41A6_14E1A8C7413D",
   "pitch": -27.95,
   "yaw": 100.96,
   "hfov": 27.49,
   "distance": 100
  }
 ],
 "id": "overlay_4DCCE7CF_54C6_FE33_41C2_9ECDCD7903CA",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -27.95,
   "hfov": 27.49
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6, this.camera_23FF62D7_32FA_A6C5_41AA_5C6575338596); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D8C8CC_5542_7235_41B0_3CCD0D58B233",
   "pitch": -5.02,
   "yaw": -1.08,
   "hfov": 47.21,
   "distance": 100
  }
 ],
 "id": "overlay_4C04AE97_54C5_EE53_41BD_FCF9BD9A014F",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -5.02,
   "hfov": 47.21
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 57
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5, this.camera_237D6393_32FA_A75D_41B1_393385DFF961); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D968CC_5542_7235_41D4_16829A147DB7",
   "pitch": -24.06,
   "yaw": 44.03,
   "hfov": 29.92,
   "distance": 100
  }
 ],
 "id": "overlay_43CE7AA2_54C2_166D_41D4_3BC5E78D0F68",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -24.06,
   "hfov": 29.92
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 55.5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A, this.camera_23709386_32FA_A747_41C1_77BABFFC1521); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A618CC_5542_7235_41C1_45675D5C891F",
   "pitch": -7.06,
   "yaw": -57.6,
   "hfov": 47.03,
   "distance": 100
  }
 ],
 "id": "overlay_4C5733FF_54C2_15D2_41D1_60011AA24A5C",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -7.06,
   "hfov": 47.03
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF52B05_54C2_1637_41D1_061657889C89, this.camera_236AC3A3_32FA_A77D_41C3_91E2E008E49C); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A6A8CC_5542_7235_41C9_5687A7CBEB16",
   "pitch": -3.17,
   "yaw": -179.85,
   "hfov": 45.27,
   "distance": 100
  }
 ],
 "id": "overlay_4D2CBD0B_54C2_1233_41CA_BC6291779923",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_1_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.17,
   "hfov": 45.27
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5, this.camera_23863315_32FA_A745_41AA_F101D6F41CCD); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A548BC_5542_7255_41C0_5E243CE2A1FB",
   "pitch": -4.08,
   "yaw": -89.24,
   "hfov": 45.59,
   "distance": 100
  }
 ],
 "id": "overlay_40312594_54C6_1255_41CA_DE561577FB01",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -4.08,
   "hfov": 45.59
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F, this.camera_23996306_32FA_A747_4185_C3AEDC3FD1EC); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A5C8BC_5542_7255_41A0_494BD16A0D75",
   "pitch": -5.72,
   "yaw": -1.49,
   "hfov": 42.62,
   "distance": 100
  }
 ],
 "id": "overlay_41BED11C_54C6_7255_41D1_4F801F66B496",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -5.72,
   "hfov": 42.62
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705, this.camera_239202F6_32FA_A6C7_41C3_6AB449E84E79); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A408BC_5542_7255_41B0_042D78F9B49A",
   "pitch": -3.67,
   "yaw": 88.71,
   "hfov": 47.24,
   "distance": 100
  }
 ],
 "id": "overlay_40A174DA_54C6_13DD_41B1_942745060C7A",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_1_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.67,
   "hfov": 47.24
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 58.5
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BCB170C_54CE_7E35_4195_0B532C643229_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 49.5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D028EB_5542_73F3_41C9_630B9A8C3AF3",
   "pitch": -28.35,
   "yaw": -77.61,
   "hfov": 28.11,
   "distance": 50
  }
 ],
 "id": "overlay_742F9F48_54C6_2E3D_41D5_1290AE5971E0",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -77.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -28.35,
   "hfov": 28.11
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8, this.camera_23B94335_32FA_A745_41BC_39119A0E91B2); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A488BC_5542_7255_41D2_4BF07E8FD0C7",
   "pitch": -5,
   "yaw": 92.71,
   "hfov": 47.21,
   "distance": 100
  }
 ],
 "id": "overlay_41F2E480_54C2_122D_41B2_1F47CAA217D2",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -5,
   "hfov": 47.21
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_tcap0",
 "inertia": true,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 72
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF, this.camera_231693B3_32FA_A75E_41BE_83DCCC01C906); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DF58DB_5542_73D3_418D_6D0C7CE44640",
   "pitch": -3.74,
   "yaw": 179.8,
   "hfov": 51.84,
   "distance": 100
  }
 ],
 "id": "overlay_4BBB98D5_54C2_13D7_41C9_D639FC275EC0",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.74,
   "hfov": 51.84
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DF88DB_5542_73D3_41BD_1B8FCFA133BE",
   "pitch": -17.79,
   "yaw": -63.82,
   "hfov": 31.94,
   "distance": 100
  }
 ],
 "id": "overlay_493ABD3D_54C2_1257_41CF_DDE6E18AC144",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -17.79,
   "hfov": 31.94
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 88.5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86, this.camera_23537354_32FA_A7DB_41BE_5FEE5640CC9A); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A6C8CC_5542_7235_41D5_3610BF62F993",
   "pitch": -5.81,
   "yaw": 1.37,
   "hfov": 47.15,
   "distance": 100
  }
 ],
 "id": "overlay_4CF2A7F6_54CE_3DD5_41B5_CEE4317E5356",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -5.81,
   "hfov": 47.15
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D, this.camera_23A5F345_32FA_A7C5_41AE_36C741BC041D); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73D958CC_5542_7235_41D0_5A7C9E89122C",
   "pitch": -7.79,
   "yaw": 179.8,
   "hfov": 62.08,
   "distance": 100
  }
 ],
 "id": "overlay_43605DC1_54CF_F22F_41C5_E2DBCA9C8AFE",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -7.79,
   "hfov": 62.08
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 58.5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450, this.camera_2308D3D2_32FA_A6DF_41BE_6D55FAEBD86F); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A368BC_5542_7255_41D2_40D4A937555F",
   "pitch": -6.83,
   "yaw": 44.99,
   "hfov": 56.41,
   "distance": 100
  }
 ],
 "id": "overlay_45175D75_54DE_12D7_41AE_06021EE5F5DC",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -6.83,
   "hfov": 56.41
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1, this.camera_231C03C2_32FA_A73F_41BB_A4D1163AA664); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A3A8BC_5542_7255_41D0_02C53A471D1B",
   "pitch": -3.14,
   "yaw": 133.46,
   "hfov": 41.19,
   "distance": 100
  }
 ],
 "id": "overlay_459C50B8_54C2_725D_41B2_448329609574",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.14,
   "hfov": 41.19
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8, this.camera_233483E1_32FA_A6FD_41C3_59563AD6FF2D); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A3E8BC_5542_7255_41A0_6472F89B51F9",
   "pitch": -3.75,
   "yaw": -139.31,
   "hfov": 42.79,
   "distance": 100
  }
 ],
 "id": "overlay_46D2AA05_54C2_F637_41B3_3DAA8A670ADE",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_1_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.75,
   "hfov": 42.79
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 63
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A518BC_5542_7255_41D2_C735D8CFEE60",
   "pitch": -25.67,
   "yaw": 107.39,
   "hfov": 38.92,
   "distance": 100
  }
 ],
 "id": "overlay_401816A8_54C2_1E7D_41C6_909F8BEEB10A",
 "data": {
  "label": "Arrow 04b"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.67,
   "hfov": 38.92
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 67.5
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 51
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0, this.camera_26B581EB_32FA_A2CD_41B5_1A6FA2DC3787); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DF78DB_5542_73D3_41D4_97CD2CB709E8",
   "pitch": -3.5,
   "yaw": 82.58,
   "hfov": 47.25,
   "distance": 100
  }
 ],
 "id": "overlay_49F9224F_54C2_3633_41C2_06449E17F928",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.5,
   "hfov": 47.25
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC4B186_54C2_3235_4196_10B49B93AF19, this.camera_2657920B_32FA_A14D_41C7_AAE1C76433F6); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DF98DB_5542_73D3_41CE_FB7487DE7DD3",
   "pitch": -3.5,
   "yaw": -79.83,
   "hfov": 47.25,
   "distance": 100
  }
 ],
 "id": "overlay_481A158C_54C2_1235_41D5_0D6AAE7B58B6",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.5,
   "hfov": 47.25
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7, this.camera_26A651FB_32FA_A2CD_4190_1F19D360A04A); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DE28DB_5542_73D3_41C9_3A208467E95E",
   "pitch": -3.91,
   "yaw": -179.65,
   "hfov": 47.23,
   "distance": 100
  }
 ],
 "id": "overlay_49CE6CC2_54C2_122D_41C3_D83ABD562995",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_1_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.91,
   "hfov": 47.23
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 54
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF, this.camera_23B30326_32FA_A746_4197_A0C3E9BCD702); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73DEB8DB_5542_73D3_41D3_A9D2124683E2",
   "pitch": -3.62,
   "yaw": 96.8,
   "hfov": 47.3,
   "distance": 100
  }
 ],
 "id": "overlay_4A37E9CC_54CE_1235_41C4_592815261166",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.62,
   "hfov": 47.3
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8, this.camera_23D53298_32FA_A14B_41C2_22DCB2F2FE49); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A738CC_5542_7235_41C9_EBBCCB4AC6FD",
   "pitch": -3.97,
   "yaw": 0.56,
   "hfov": 47.28,
   "distance": 100
  }
 ],
 "id": "overlay_42D7A181_54FE_122F_41AA_B927F7C4158D",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -3.97,
   "hfov": 47.28
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8, this.camera_23D37288_32FA_A14B_41A4_C947CE9E7558); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A758CC_5542_7235_41D1_F58BD6AA1CDF",
   "pitch": -4.38,
   "yaw": -90.78,
   "hfov": 47.25,
   "distance": 100
  }
 ],
 "id": "overlay_415E16C8_54FE_1E3D_41D2_03FA756182E1",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -4.38,
   "hfov": 47.25
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A, this.camera_2640620B_32FA_A14D_41A0_ABB593032B75); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A7E8CC_5542_7235_41B5_4801F883E444",
   "pitch": -6.43,
   "yaw": -178.42,
   "hfov": 47.09,
   "distance": 100
  }
 ],
 "id": "overlay_4141C71E_54FE_1E55_41D2_297E89306962",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -178.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_1_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -6.43,
   "hfov": 47.09
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 54
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5, this.camera_268461DC_32FA_A2CA_41AF_599089440A50); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A1F8AC_5542_7275_41B6_C5C54EF3FA4F",
   "pitch": -2.42,
   "yaw": 73.37,
   "hfov": 44.43,
   "distance": 100
  }
 ],
 "id": "overlay_448B64DF_54DE_13D3_41D4_C27A839608C7",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -2.42,
   "hfov": 44.43
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 67.5
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5, this.camera_269BD1CC_32FA_A2CB_41AC_C4BCB2A6903F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A258BC_5542_7255_41C4_129F8A043309",
   "pitch": -9.85,
   "yaw": 146.62,
   "hfov": 33.49,
   "distance": 100
  }
 ],
 "id": "overlay_47EB0374_54C6_36D5_41AB_24EDF1C2E0DA",
 "data": {
  "label": "Circle 03c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -9.85,
   "hfov": 33.49
  }
 ],
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_73A298BC_5542_7255_4155_4F798A3675CA",
   "pitch": -29.46,
   "yaw": -36.52,
   "hfov": 24.49,
   "distance": 50
  }
 ],
 "id": "overlay_47C36E05_54C6_EE37_41BA_680DBA7EEB25",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -36.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_1_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -29.46,
   "hfov": 24.49
  }
 ],
 "rollOverDisplay": false
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_tcap0",
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_tcap0.png",
    "width": 500,
    "height": 500
   }
  ]
 },
 "hfov": 49.5
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D9C8CC_5542_7235_41CC_3EBDB39BC80E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_4486AFBC_54CE_EE55_41C1_4C53385FEB86_1_HS_1_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D808CC_5542_7235_41A3_CCDF0DD7AA0E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DB48CC_5542_7235_41C9_DE2EA7D8346D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC56746_54C2_FE35_41C9_5BC6CE9201B6_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DBF8CC_5542_7235_41C9_A791226011C7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DDD8DB_5542_73D3_41D0_B47AC9BC0DC5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DC78DB_5542_73D3_41CF_EBFC6AB37263",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC4B186_54C2_3235_4196_10B49B93AF19_1_HS_2_0.png",
   "width": 480,
   "height": 510
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DCA8DB_5542_73D3_41CF_581720DDF984",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A608CC_5542_7235_41A8_E9774CB47D50",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A6B8CC_5542_7235_41C3_24661DB6A211",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC5D061_54C2_32EE_41B3_EC4006213C3A_1_HS_2_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A6E8CC_5542_7235_41BC_4A876E4B16A0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DA78DB_5542_73D3_41CE_2D4F4272747E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF52B05_54C2_1637_41D1_061657889C89_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DAE8DB_5542_73D3_41C3_4E81663E28FE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_1_HS_0_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DE58DB_5542_73D3_41C2_6BA6C28F8050",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B8815E5_54C2_1DF7_41C7_0AF57317965A_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DEF8DB_5542_73D3_41B1_35E0DF381BC2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DD08DB_5542_73D3_41D0_1AB752D462A5",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BE3BD62_54C2_72ED_41B1_A5E706B0FC0C_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DDA8DB_5542_73D3_41CE_A4C01627FD9C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D178DB_5542_73D3_41B2_FE57020681CF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BFE7002_54CD_F22D_41C6_D56F0F8537F8_1_HS_1_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D198DB_5542_73D3_41CA_3C8EC362B23C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_1_HS_0_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D898CC_5542_7235_41A6_14E1A8C7413D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B8D53C9_54C2_163F_41C3_4F1BBB5C10EB_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D8C8CC_5542_7235_41B0_3CCD0D58B233",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_1_HS_0_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D968CC_5542_7235_41D4_16829A147DB7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A618CC_5542_7235_41C1_45675D5C891F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF53A2A_54C2_167D_41AD_77D1AC9D647D_1_HS_2_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A6A8CC_5542_7235_41C9_5687A7CBEB16",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A548BC_5542_7255_41C0_5E243CE2A1FB",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A5C8BC_5542_7255_41A0_494BD16A0D75",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BFCC209_54C2_163F_41B0_5464915FCEC8_1_HS_2_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A408BC_5542_7255_41B0_042D78F9B49A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BCB170C_54CE_7E35_4195_0B532C643229_1_HS_0_0.png",
   "width": 520,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D028EB_5542_73F3_41C9_630B9A8C3AF3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC46C8D_54C2_7237_41AF_7CE1706EF82F_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A488BC_5542_7255_41D2_4BF07E8FD0C7",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DF58DB_5542_73D3_418D_6D0C7CE44640",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B886FFE_54C2_6DD5_41D1_A9C798D928B7_1_HS_1_0.png",
   "width": 480,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DF88DB_5542_73D3_41BD_1B8FCFA133BE",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A6C8CC_5542_7235_41D5_3610BF62F993",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BEFD86F_54CE_12F3_41A1_2CB631085EA5_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73D958CC_5542_7235_41D0_5A7C9E89122C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A368BC_5542_7255_41D2_40D4A937555F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A3A8BC_5542_7255_41D0_02C53A471D1B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF82C47_54CE_3233_41D0_7AC3154714C5_1_HS_2_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A3E8BC_5542_7255_41A0_6472F89B51F9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC4F932_54C2_326D_41A7_CE4A3EC0A92A_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A518BC_5542_7255_41D2_C735D8CFEE60",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DF78DB_5542_73D3_41D4_97CD2CB709E8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DF98DB_5542_73D3_41CE_FB7487DE7DD3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BFCA59B_54C2_1253_41C6_4B3BBEE774DF_1_HS_2_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DE28DB_5542_73D3_41C9_3A208467E95E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC4DD2C_54C2_1275_41BE_94EB2A662FE0_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73DEB8DB_5542_73D3_41D3_A9D2124683E2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A738CC_5542_7235_41C9_EBBCCB4AC6FD",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_1_HS_1_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A758CC_5542_7235_41D1_F58BD6AA1CDF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5B8AF854_54C2_32D5_41B3_19B2F335F705_1_HS_2_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A7E8CC_5542_7235_41B5_4801F883E444",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BF1DE6D_54CE_2EF7_4198_021BF5BE8450_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A1F8AC_5542_7275_41B6_C5C54EF3FA4F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_1_HS_0_0.png",
   "width": 1080,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A258BC_5542_7255_41C4_129F8A043309",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5BC5CD30_54C2_126D_41B1_ACA19BE26BA1_1_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_73A298BC_5542_7255_4155_4F798A3675CA",
 "frameDuration": 41
}],
 "minWidth": 20,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "existsKey": function(key){  return key in window; },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
