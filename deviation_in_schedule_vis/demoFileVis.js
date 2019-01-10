var stations = {//need to start with 11150
    11297:	[31.247889, 34.797645],
    13105:	[31.265114, 34.798262],
    13100:	[31.271627, 34.796557],
    11342:  [31.256047,34.798745],
    11289: [31.238624 , 34.792202],
    13107:[31.247534, 34.797807],
    10925: [31.260415 , 34.757413],
    11089:[31.266671,34.782575],
    10930:[31.260027,34.758722],
    10936:[31.259223 , 34.762421],
    18610:[31.267535,34.764890],
    13907:[31.243017,34.796743],
    15248:[31.241949,34.753397],
    15238:[31.241311,34.767034],
    14400:[31.219722,34.804661],
    13919:[31.271125,34.797919],
    13896:[31.244300,34.792005],
    13554:[31.278679,34.820942],
    13543:[31.260985,34.763692],
    13518:[31.260867,34.801416],
    16516:[31.223670,34.800215],
    15334:[31.255030,34.798474],
    15245:[31.241097,34.761360],
    10941:[31.255148,34.764740],
    10979:[31.258928,34.771868],
    10988:[31.257504,34.773720],
    11097:[31.247446,34.784837],
    11113:[31.241096,34.788568],
    11173:[31.240805,34.795691],
    13149:[31.260159,34.770545],
    10053:[31.252864,34.766504],
    10056:[31.246145,34.783544],
    10846:[31.261086,34.808640],
    10920:[31.266404,34.755250],
    10928:[31.241466,34.758030],
    10964:[31.237348,34.768934],
    10969:[31.235159,34.769423],
    10980:[31.259131,34.771456],
    11073:[31.230430,34.779423],
    11096:[31.268219,34.785149],
    11106:[31.257843,34.787526],
    11150:[31.264681,34.793710],
    11176:[31.240598,34.795585],
    11226:[31.268002,34.800403],
    11228:[31.221683,34.801301],
    11229:[31.279626,34.802006],
    11230:[31.247462,34.801972],
    11233:[31.252915,34.804382],
    13228:[31.224200,34.776640],
    13312:[31.274996,34.815760],
    13323:[31.258909,34.775533],
    13338:[31.245323,34.780701],
    13552:[31.264665,34.778719],
    15307:[31.244781,34.789819],
    10981:[31.266951,34.772289],
    10984:[33.110697,35.572446],
    10986:[31.253099,34.772592],
    10987:[31.253167,34.772662],
    10989:[31.260473,34.773182],
    10990:[31.260570,34.773460],
    10992:[31.238423,34.773727],
    11000:[31.261546,34.774767],
    11072:[31.245556,34.779142],
    11077:[31.255626,34.778930],
    11083:[31.248856,34.780860],
    11101:[31.259008,34.785641],
    15332:[31.260305,34.798017],
    15333:[31.260114,34.798256],
    15542:[31.254414,34.761429],
    15551:[31.252417,34.769507],
    15657:[31.242693,34.797163],
    16353:[31.251820,34.792427],
    16354:[31.270410,34.782122],
    19398:[31.242414,34.750689],
    13503:[31.236360,34.786746],
    13508:[31.262034,34.776242],
    13510:[31.263886,34.767570],
    13512:[31.231038,34.771283],
    19379:[31.241665,34.796479],
    19405:[31.240722,34.767939],
    13526:[31.246113,34.804099],
    13536:[31.254343,34.817078],
    13542:[31.262783,34.765259],
    13557:[31.257754,34.813377],
    13695:[31.269806,34.804244],
    13928:[31.238381,34.798341],
    13933:[31.238190,34.798108],
    13943:[31.260919,34.799354],
    13949:[31.261086,34.800344],
    13961:[31.242226,34.802043],
    13962:[31.231030,34.802674],
    14015:[31.250160,34.819163],
    14330:[31.245275,34.796175],
    14340:[31.245795,34.796257],
    14379:[31.258113,34.811784],
    14382:[31.257881,34.827078],
    10968:[31.264097,34.769941],
    10983:[31.265848,34.771791],
    11274:[31.249569,34.818188],
    11290:[31.238828,34.796232]



};

var avergae_early={
    11297: 2.5,
    13105: 5,
    13100:2.5,
    11342:5.6,
    11289: 6,
    13107:2.75,
    10925:10,
    11089:2,
    10930:25,
    10936:16.75,
    18610:0.65,
    13907:0,
    15248:1.25,
    15238:4.16,
    14400:4.1,
    13919:10.6,
    13896:10.6,
    13554:8.8,
    13543:10.6,
    13518:4.566,
    16516:5,
    15334:1,
    15245:5.6,
    10941:9.2,
    10979:11,
    10988:6.2,
    11097:4.4,
    11113:4,
    11173:5,
    13149:5.4,
    10053:6.14,
    10056:4.33,
    10846:5,
    10920:3.76,
    10928:5,
    10964:2,
    10969:3,
    10980:5,
    11073:5,
    11096:5,
    11106:4.2,
    11150:5,
    11176:5,
    11226:5,
    11228:5,
    11229:5,
    11230:5,
    11233:5,
    13228:5,
    13312:5,
    13323:5,
    13338:5,
    13552:5,
    15307:5,
    10981:5,
    10984:5,
    10986:5,
    10987:5,
    10989:5,
    10990:5,
    10992:5,
    11000:5,
    11072:5,
    11077:5,
    11083:5,
    11101:5,
    15332:5,
    15333:5,
    15542:5,
    15551:5,
    15657:5,
    16353:5,
    16354:5,
    19398:5,
    13503:5,
    13508:5,
    13510:5,
    13512:5,
    19379:5,
    19405:5,
    13526:5,
    13536:5,
    13542:5,
    13557:5,
    13695:5,
    13928:5,
    13933:5,
    13943:5,
    13949:5,
    13961:5,
    13962:5,
    14015:5,
    14330:5,
    14340:5,
    14379:5,
    14382:5,
    10968:5,
    10983:5,
    11274:5,
    11290:5



}

var  avrage_late={
    11297: 5,
    13105: 2.5,
    13100:5,
    11342:0.3,
    11289: 0,
    13107:0.395,
    10925:0,
    11089:0,
    10930:0,
    10936:0,
    18610:0.3,
    13907:2.45,
    15248:0,
    15238:0,
    14400:0.3,
    13919:0.095,
    13896:0,
    13554:0.13,
    13543:0,
    13518:0,
    16516:0,
    15334:0,
    15245:0.12,
    10941:7,
    10979:11,
    10988:6.2,
    11097:5,
    11113:5,
    11173:5,
    13149:5,
    10053:6,
    10056:5,
    10846:5,
    10920:4,
    10928:5,
    10964:3,
    10969:4,
    10980:5,
    11073:5,
    11096:5,
    11106:5,
    11150:5,
    11176:5,
    11226:5,
    11228:5,
    11229:5,
    11230:5,
    11233:5,
    13228:5,
    13312:5,
    13323:5,
    13338:5,
    13552:5,
    15307:5,
    10981:5,
    10984:5,
    10986:5,
    10987:5,
    10989:5,
    10990:5,
    10992:5,
    11000:5,
    11072:5,
    11077:5,
    11083:5,
    11101:5,
    15332:5,
    15333:5,
    15542:5,
    15551:5,
    15657:5,
    16353:5,
    16354:5,
    19398:5,
    13503:5,
    13508:5,
    13510:5,
    13512:5,
    19379:5,
    19405:5,
    13526:5,
    13536:5,
    13542:5,
    13557:5,
    13695:5,
    13928:5,
    13933:5,
    13943:5,
    13949:5,
    13961:5,
    13962:5,
    14015:5,
    14330:5,
    14340:5,
    14379:5,
    14382:5,
    10968:5,
    10983:5,
    11274:5,
    11290:5

}

var lines_in_stations_early={
    11297:	["line 1 : 3.5 minutes ","line 2: 4 minutes , line 3: 0 minutes"],
    13105:	["line 1 : 5 minutes ","line 2: 10 minutes , line 3: 0 minutes"],
    13100:	["line 1 : 3.5 minutes ","line 2: 4 minutes , line 3: 0 minutes"],
    11342:  ["line 469 : 6 minutes ","line 450: 3.5 minutes , line 4: 7.5 minutes"],
    11289:["line 469 : 6 minutes"],
    13107: ["line 469: 2.5 minutes , line 37: 3 minutes"],
    10925: ["line 18:10 minutes"],
    11089:["line 25: 0 minutes,line 3: 4 minutes"],
    10930 : ["line 18: 25 minutes"],
    10936: ["line 18: 24 minutes,line 8:32 minutes,line 8: 4 minutes, line 8:7 minutes"],
    18610:["line 112: 0.65 minutes ,line 112:0.65 minutes"],
    13907:[""],
    15248:["line 25: 1 minutes , line 25 : 1.5 minutes"],
    15238:["line 7 : 4 minutes , line 25: 5 minutes,line 7 : 3.5 minutes"],
    14400:["line 359 :15 minutes , line 45: 1 minutes, line 45: 2 minutes, line 45 : 1 minutes, line 64: 1.5 minutes"],
    13919:["line 446:7 minutes, line 370:14 minutes , line 369: 21 minutes, line 348: 21 minutes,line 57 : 1 minute,line 57: 0 minutes"],
    13896:["line 371: 10 minutes, line 353: 9 minutes, line 353: 2 minutes ,line 353: 20 minutes,line 371:12 minutes"],
    13554:["line 24 : 12 minutes , line 2 : 1 minutes, line 24 : 14 minutes,line 24 : 13 minutes ,line 24 : 4 minutes"],
    13543:["line 8 : 12 minutes , line 11 : 18 minutes , line 112 : 14 minutes , line 4 : 6 minutes,line 4: 3 minutes"],
    13518:["line 4: 1 minute ,line 49 : 2.23 minutes,line 62 : 3.5 minutes, line 16 : 7 minutes,line 25: 9.1 minutes "],
    16516:["linr 112: 1 minute ,line 8 : 9 minutes "],
    15334:["line 369: 0 minutes, line 367: 2 minutes "],
    15245:["line 25: 0.53 minutes,line 13: 2 minutes, line 13 : 17 minutes, line 13 : 3 minutes"],
    10941:["line 18 : 16 minutes , line 8 : 30 minutes,line 8 : 0 minutes , line 8 : 0 minutes , line 18: 0 minutes"],
    10979:["line 3 : 5 minutes,line 3: 5 minutes, line 3: 20 minutes, line 18 : 6 minutes, line 18 : 19 minutes"],
    10988:["line 18: 18 minutes ,line 18 : 10 minutes,line 3 : 0 minutes,line 18 : 3 minutes, line 18 : 0 minutes"],
    11097:["line 18 : 8 minutes ,line 18 : 10 minutes , line 9 : 4 minutes , line 9 : 0 minutes, line 9 : 0 minutes"],
    11113:["line 18 : 3.5 minutes,line 5: 10 minutes, line 18 : 3.5 minutes, line 5 :3 minutes, line 5 : 0 minutes"],
    11173:["line 18 : 0.4 ,line 8: 0.6 minutes , line 2 : 1 minutes , line 22 : 1, line 7: 22"],
    13149:["line 16 : 0 minutes ,line 16 : 3 minutes , line 18 : 10 minutes, line 9 : 4 minutes ,line 9 : 10 minutes"],
    10053:["line 330 : 3.2 , line 364: 13 minutes, line 35 : 14 minutes,line 4 : 0.5 minutes,line 333 : 0 minutes"],
    10056:["line 4 : 0.15 minutes,line 353: 1.5 minutes , line 14 : 2 minutes, line 4 : 8 minutes,line 14: 10 minutes"],
    10846:["line 14: 4.5 minutes,line 14 : 8 minutes, line 67 : 9 minutes ,line 9 :3.5, line 9 : 0 minutes"],
    10920:["line 11 : 0.3 minutes , line 11 :6.5 minutes ,line 22 : 4 minutes , line 11 : 7 minutes , line 11 : 1 minute"],
    10928:["line 7 : 7 minutes , line 5 : 6 minutes, line 13 :5 minutes ,line 7 : 4 minutes, line 13: 3 minutes "],
    10964:["line 25 : 2.5 minutes, line 25 : 2 minutes ,line 25 : 1.5 minutes, line 25 : 2 minutes,line 25: 2 minutes "],
    10969:["line 7: 3 minutes , line 5 : 6 minutes, line 5 : 5 minutes, line 7 : 1 minute , line 7 : 0 minutes"],
    10980:["line 18 : 2 minutes , line 3 : 6 minutes , line 3 : 11 minutes, line 18 : 1 minute, line 3 : 5 minutes"],
    11073:["line 2: 9 minutes, line 2 : 8 minutes , line 2 : 6 minutes, line 2 : 2 minutes , line 2 : 0 minutes "],
    11096:["line 8 : 6 minutes, line 8 :5.5 minutes , line 6 : 6.5 minutes, line 8 : 5 minutes, line 6 : 2 minutes"],
    11106:["line 22 : 5 minutes, line 22 : 4 minutes , line 22 : 5 minutes , line 22 : 3 minutes ,line 22 : 4 minutes "],
    11150:[""],
    11176:[""],
    11226:[""],
    11228:[""],
    11229:[""],
    11230:[""],
    11233:[""],
    13228:[""],
    13312:[""],
    13323:[""],
    13338:[""],
    13552:[""],
    15307:[""],
    10981:[""],
    10984:[""],
    10986:[""],
    10987:[""],
    10989:[""],
    10990:[""],
    10992:[""],
    11000:[""],
    11072:[""],
    11077:[""],
    11083:[""],
    11101:[""],
    15332:[""],
    15333:[""],
    15542:[""],
    15551:[""],
    15657:[""],
    16353:[""],
    16354:[""],
    19398:[""],
    13503:[""],
    13508:[""],
    13510:[""],
    13512:[""],
    19379:[""],
    19405:[""],
    13526:[""],
    13536:[""],
    13542:[""],
    13557:[""],
    13695:[""],
    13928:[""],
    13933:[""],
    13943:[""],
    13949:[""],
    13961:[""],
    13962:[""],
    14015:[""],
    14330:[""],
    14340:[""],
    14379:[""],
    14382:[""],
    10968:[""],
    10983:[""],
    11274:[""],
    11290:[""]
}

var lines_in_stations_late={
    11297:	["line 1 : 13 minutes ","line 2: 2 minutes , line 3: 0 minutes"],
    13105:	["line 1 : 3 minutes ","line 2: 4.5 minutes , line 3: 0 minutes"],
    13100:	["line 1 : 13 minutes ","line 2: 2 minutes , line 3: 0 minutes"],
    11342:  ["line 47 : 0.3 minutes "],
    11289: [""],
    13107: ["line 62: 0.39 minutes , line 386: 0.4 minutes"],
    10925: [""],
    11089:["line 25: 0 minutes"],
    10930 : [""],
    10936: [""],
    18610:["line 4: 0.3 minutes"],
    13907:["line 399: 0 minutes, line 140 : 5 minutes,line 10 : 0 minutes, line 26: 0.4 minutes,line 370: 0.3 minutes,line 44: 9 minutes "],
    15248:[""],
    14400:["line 58: 0.3 minutes"],
    13919:["line 57 : 0.19 minutes ,line 57: 0 minutes"],
    13896:[""],
    13554:["line 4:0.13 minutes"],
    13543:[""],
    13518:[""],
    16516:[""],
    15334:[""],
    15245:["line 5 : 0.12 minutes"],
    10941:["line 18 : 10 minutes , line 8 : 25 minutes,line 8 : 0 minutes , line 8 : 0 minutes , line 18: 0 minutes"],
    10979:["line 3 : 4 minutes,line 3: 4 minutes, line 3: 20 minutes, line 18 : 7 minutes, line 18 : 20 minutes"],
    10988:["line 18: 10 minutes ,line 18 : 20 minutes,line 3 : 0 minutes,line 18 : 1 minutes, line 18 : 0 minutes"],
    11097:["line 18 : 10 minutes ,line 18 : 10 minutes , line 9 : 4 minutes , line 9 : 0 minutes, line 9 : 0 minutes"],
    11113:["line 18 : 4 minutes,line 5: 10 minutes, line 18 : 4 minutes, line 5 :7 minutes, line 5 : 0 minutes"],
    11173:["line 18 : 5 ,line 8: 3 minutes , line 2 : 2 minutes , line 22 : 5, line 7: 10"],
    13149:["line 16 : 0 minutes ,line 16 : 3.55 minutes , line 18 : 10 minutes, line 9 : 0.45 minutes ,line 9 : 11 minutes"],
    10053:["line 371 : 2.5 , line 364: 11 minutes, line 35 : 14 minutes,line 4 : 2.5 minutes,line 333 : 0 minutes"],
    10056:["line 4 : 2 minutes,line 353: 2 minutes , line 14 : 2 minutes, line 4 : 8 minutes,line 14: 11 minutes"],
    10846:["line 14: 5 minutes,line 14 : 7 minutes, line 67 : 10 minutes ,line 9 :3, line 9 : 0 minutes"],
    10920:["line 11 : 1 minutes , line 11 :7 minutes ,line 22 : 4 minutes , line 11 : 7 minutes , line 11 : 1 minute"],
    10928:["line 7 : 5 minutes , line 5 : 5 minutes, line 13 :5 minutes ,line 7 : 5 minutes, line 13: 5"],
    10964:["line 25 : 3.5 minutes, line 25 : 3 minutes ,line 25 : 2.5 minutes, line 25 : 3 minutes,line 25: 3 minutes "],
    10969:["line 7: 4 minutes , line 5 : 7 minutes, line 5 : 6 minutes , line 7 : 3 minutes , line 7 : 0 minutes"],
    10980:["line 18 : 1 minutes , line 3 : 6 minutes , line 3 : 10 minutes, line 18 : 2 minute, line 3 : 6 minutes"],
    11073:["line 2: 10 minutes, line 2 : 7 minutes , line 2 : 5 minutes, line 2 : 3 minutes , line 2 : 0 minutes "],
    11096:["line 8 : 7 minutes, line 8 :4.5 minutes , line 6 : 5.5 minutes, line 8 : 4 minutes, line 6 : 4 minutes"],
    11106:["line 22 : 6 minutes, line 22 : 5 minutes , line 22 : 6 minutes , line 22 : 3 minutes ,line 22 : 5 minutes "],
    11150:[""],
    11176:[""],
    11226:[""],
    11228:[""],
    11229:[""],
    11230:[""],
    11233:[""],
    13228:[""],
    13312:[""],
    13323:[""],
    13338:[""],
    13552:[""],
    15307:[""],
    10981:[""],
    10984:[""],
    10986:[""],
    10987:[""],
    10989:[""],
    10990:[""],
    10992:[""],
    11000:[""],
    11072:[""],
    11077:[""],
    11083:[""],
    11101:[""],
    15332:[""],
    15333:[""],
    15542:[""],
    15551:[""],
    15657:[""],
    16353:[""],
    16354:[""],
    19398:[""],
    13503:[""],
    13508:[""],
    13510:[""],
    13512:[""],
    19379:[""],
    19405:[""],
    13526:[""],
    13536:[""],
    13542:[""],
    13557:[""],
    13695:[""],
    13928:[""],
    13933:[""],
    13943:[""],
    13949:[""],
    13961:[""],
    13962:[""],
    14015:[""],
    14330:[""],
    14340:[""],
    14379:[""],
    14382:[""],
    10968:[""],
    10983:[""],
    11274:[""],
    11290:[""]

}

