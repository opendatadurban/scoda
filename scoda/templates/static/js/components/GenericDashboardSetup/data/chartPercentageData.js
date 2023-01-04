import { travelTimeColors } from "../helpers/helpers"

const travel_time_1 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            58401.3343395,
            268123.4761099,
            233689.5634183,
            203762.3028345,
            62851.040806,
            29131.8898088,
            149075.7750325,
            157097.2210428
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            29289.5824001,
            232092.6522537,
            234259.0410487,
            197298.5610506,
            49076.8957126,
            37077.1868478,
            172071.6882204,
            221509.6608034
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            48437.3209737,
            229184.4341658,
            217228.552849,
            185010.921584,
            48439.11298590001,
            49393.58678480001,
            157195.7471794,
            222948.1493764001
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            50311.9949114,
            224106.1613964,
            238930.5312845,
            219659.9045962,
            63570.31044840001,
            60441.9078605,
            172057.2271706,
            228927.3238957
        ],
        "year": "2018"
    }
]

const travel_time_2 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            118497.4858092,
            571019.7283454001,
            648267.6423488001,
            488590.5615772001,
            95084.56431299998,
            239303.9673889,
            405221.0860231,
            485188.0177462
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            104828.5612235,
            561523.3718858,
            680280.5466939,
            509300.5583521,
            121885.6560664,
            263557.368599,
            358271.6114314,
            553571.3067134001
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            115199.3557824,
            559108.2996408,
            669525.9020814,
            475395.7623028,
            101732.9719917,
            266746.1013496,
            378861.6092703,
            522887.603324
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            132178.513181,
            557619.3286995001,
            657252.7671487,
            513143.3697758001,
            88678.32312389999,
            232273.943734,
            475707.7907139,
            570679.1944148
        ],
        "year": "2018"
    }
]

const travel_time_3 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            34418.7988874,
            488435.2380923,
            674309.6215926,
            407127.8201641,
            46183.80169209999,
            31242.80067730001,
            423160.7216726,
            424631.2227223
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            47936.1052009,
            522538.0996088,
            674675.9428186,
            403077.0744133,
            40260.2044368,
            27698.5079155,
            465022.8619147,
            398938.6109411
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            44043.4740322,
            594921.3117951,
            670151.7656255001,
            389317.511625,
            43147.9529424,
            24079.6049423,
            409416.3490262,
            355503.1431997999
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            42997.4317786,
            584004.1497076001,
            736476.6215151,
            398138.2631445,
            37821.2159239,
            39057.3465384,
            421281.1266789,
            312225.1644333999
        ],
        "year": "2018"
    }
]

const travel_time_4 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            4975.173368100001,
            152878.0112111,
            197310.2531253,
            61558.14851109999,
            15528.1810086,
            2890.5514884,
            124305.353363,
            85787.470977
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            8595.5771907,
            157824.4815314,
            205847.3919257,
            80601.69439270001,
            8618.4860559,
            1595.3156441,
            147615.4908553,
            76921.6308063
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            3541.2369943,
            144612.9121908,
            211427.8124265,
            70347.19505499999,
            10907.9435824,
            0,
            132033.106417,
            75787.9475053
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            4505.958873199999,
            155224.8123776,
            210776.3079799,
            83811.3202403,
            12305.0014233,
            861.7884849,
            133539.943365,
            67619.06860510001
        ],
        "year": "2018"
    }
]

const travel_time_5 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            0,
            12639.31335,
            39225.3522193,
            17717.9180691,
            1334.9487069,
            1492.1089109,
            28958.4026677,
            16028.4171186
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            0,
            15683.4519967,
            37589.273481,
            11455.186914,
            1804.6789215,
            0,
            22444.8604367,
            2986.9355155
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            760.6971432,
            10409.3946457,
            36214.57963860001,
            15056.9164251,
            1504.6783918,
            0,
            24984.6633031,
            5683.3476528
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            0,
            6650.836148299999,
            25439.5208378,
            17519.4138633,
            968.8623986,
            0,
            26415.3543214,
            3682.3812122
        ],
        "year": "2018"
    }
]

const transport_mode_1 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            142383.8056876,
            534657.0858143,
            794945.3671619,
            490461.0124462,
            180123.3301874,
            235071.3305618,
            475348.1861099,
            696653.4479105999
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            143007.5789012,
            521758.5802286,
            860337.3736777,
            488279.5113637,
            184653.2979915,
            240429.8145766,
            465342.7835489,
            653617.3720031
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            129909.6844144,
            540839.7962196,
            822925.8414075999,
            529920.6829415001,
            183141.8329809,
            227113.1633831,
            496979.206334,
            631610.9647934
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            131431.688545,
            538863.6386945,
            853083.9484691,
            531174.8487504,
            172450.1106336,
            230455.1933991,
            516867.0744479,
            668759.8243294999
        ],
        "year": "2018"
    }
]

const transport_mode_2 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            4569.228685300001,
            20900.84235,
            20870.5175583,
            32026.7075541,
            4730.8705294,
            2756.1561489,
            20244.3428027,
            1498.4018569
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            2747.3181835,
            18352.9739725,
            25998.9816238,
            23999.4401797,
            6393.737784200001,
            1446.3513251,
            27327.3385296,
            10175.9995925
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            5282.2414159,
            21578.879922,
            31192.1941352,
            22370.5831286,
            12148.0684914,
            4970.0970869,
            26361.3565297,
            5368.3979435
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            1749.8649544,
            33681.974868,
            21123.5995025,
            25603.5325888,
            7414.6327203,
            10776.2577573,
            20246.1212267,
            5722.4583981
        ],
        "year": "2018"
    }
]

const transport_mode_3 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            87019.52021550002,
            331778.4588601,
            874649.2197453,
            430038.1303894,
            92532.98280209998,
            123668.5367188,
            376899.5897811,
            548186.0670609002
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            101578.4383568,
            335299.7728692,
            817142.3389678999,
            484407.2274495001,
            88956.1813204,
            143425.047824,
            443112.0056988,
            621329.4172079001
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            97068.9831457,
            361446.4215505,
            791471.1978460001,
            446859.2170183,
            83902.5554009,
            126494.442951,
            412330.1579869,
            504556.7066298
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            112383.4739118,
            425018.7430985,
            911542.9998977999,
            503837.8559031,
            83109.9751374,
            130066.9006505,
            464831.8217002,
            528940.7337637
        ],
        "year": "2018"
    }
]

const transport_mode_4 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            5624.6750027,
            189306.1632448,
            110732.9095575,
            52012.3565931,
            38627.4558383,
            40741.21072439999,
            125117.4787452,
            92273.2462502
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            4854.2280535,
            189794.2309795,
            74099.1522633,
            34602.2262093,
            41297.215472,
            41660.0580695,
            110457.5821149,
            67780.6696706
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            6476.0523171,
            178269.5296908,
            118735.9488079,
            49626.4606995,
            38485.5067509,
            36831.6910641,
            91043.9616463,
            63161.3744598
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            11728.6943915,
            200548.866669,
            106654.3989751,
            44471.9434679,
            35533.0146227,
            29033.8520821,
            99735.35856470001,
            59670.9920722
        ],
        "year": "2018"
    }
]

const transport_mode_5 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            12574.8645702,
            237544.1872977,
            83395.88725769999,
            130854.6676172,
            0,
            3184.7208443,
            75735.4053408,
            62757.88875059999
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            9954.678545800001,
            213769.0451989,
            74677.92281019999,
            122586.2071995,
            448.9739305,
            3909.0415301,
            67190.2909367,
            69948.84537430001
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            9265.6644978,
            182756.7496196,
            72815.8736425,
            83690.8885032,
            816.2957524,
            604.3572616,
            53023.2622419,
            66914.1002141
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            7450.3188495,
            120964.3374763,
            63733.8114683,
            72627.7214843,
            1771.9566436,
            1499.0462889,
            65523.1881945,
            60081.1492607
        ],
        "year": "2018"
    }
]

const transport_mode_6 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            16467.5512673,
            22886.4018037,
            17116.3562109,
            28530.6348602,
            4175.0527992,
            4935.8415276,
            15662.6473174,
            9314.4848398
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            9485.623075399999,
            22750.6716119,
            25055.2428312,
            24721.2470169,
            5049.3656469,
            5673.2275508,
            20868.4725008,
            22769.739121
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            18607.6728549,
            24372.4659632,
            21056.8083837,
            25757.099591,
            3573.3790748,
            5528.6240298,
            40588.0950619,
            10788.2598045
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            12620.39638,
            20831.7958814,
            19622.3501885,
            22435.90361249999,
            4592.988001600001,
            7099.1784742,
            44255.9483038,
            16958.2643107
        ],
        "year": "2018"
    }
]

const transport_mode_7 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            29464.2294753,
            147322.4579366,
            227664.0914669,
            178744.0279876,
            9711.018817200002,
            40895.6210693,
            133127.9337526,
            119206.1358474
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            30987.305139,
            149877.1224873,
            234691.7447234,
            186631.7317655,
            9704.909548,
            47127.3408826,
            111266.2646537,
            147940.7373069
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            30425.5160671,
            188491.6404062,
            258284.3486296,
            194431.3768364,
            12904.2593299,
            41012.5533036,
            146793.4639953,
            193883.2169265
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            35210.6305055,
            177373.4783241,
            239470.0030221,
            172895.1562044,
            5992.859354300001,
            47073.4390385,
            184073.090773,
            162523.4018282
        ],
        "year": "2018"
    }
]

const transport_mode_8 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            126245.4618292,
            893739.9543381,
            861068.2093197,
            653714.6159902001,
            122687.2633363,
            175656.5285933,
            701015.7963839,
            498907.8173801
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            87539.0791876,
            955059.9930297,
            912354.3087494001,
            680420.5649390001,
            118764.7185834,
            187928.25854,
            750972.0233573,
            475996.2571893
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            106191.7377163,
            967878.5662846001,
            938954.2553102,
            656727.8618595001,
            99575.8969252,
            207971.945719,
            727021.4903141999,
            541068.4512823999
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            109925.6206486,
            945244.4668201001,
            887042.4947805998,
            688072.4660544,
            118342.6845765,
            201413.92541,
            750258.422685,
            546607.8734765
        ],
        "year": "2018"
    }
]

const transport_mode_9 = [
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            2642.7936577,
            3461.1560394,
            22595.6179384,
            13986.5377109,
            0,
            0,
            4351.5446885,
            11262.3313486
        ],
        "year": "2015"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            2254.037171,
            5831.912691,
            12525.9078056,
            20539.7472341,
            0,
            601.7780856,
            7686.127643100001,
            6235.9638061
        ],
        "year": "2016"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            2937.3443876,
            8039.3737029,
            9332.7294311,
            12068.2197968,
            3181.3666792,
            2341.5567377,
            1635.4661588,
            1484.3762635
        ],
        "year": "2017"
    },
    {
        "labels": [
            "Buffalo City",
            "City of Cape Town",
            "City of Joburg",
            "Ekurhuleni",
            "Mangaung",
            "Nelson Mandela Bay",
            "Tshwane",
            "eThekwini"
        ],
        "values": [
            0,
            3682.838819,
            16084.507213,
            10393.176085,
            916.8672027999999,
            2356.9853533,
            14985.092342,
            6767.8774888
        ],
        "year": "2018"
    }
]

const travel_time_second_1 = [
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                18703.4820142,
                58475.87666669999,
                43397.5887049,
                50891.105837,
                82365.19418600001,
                20553.4060755,
                4711.3805294,
                41432.43376
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                11847.0420093,
                53222.5511302,
                48662.5986516,
                73880.636661,
                91163.96282310001,
                19597.959473,
                15470.0097713,
                37833.1672212
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                16745.1203085,
                63081.5893007,
                58317.4719984,
                70909.7850786,
                85332.8835519,
                18206.740331,
                12810.6832926,
                35319.1778439
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                19635.8535123,
                67535.8923768,
                63065.9077625,
                73812.4311869,
                107431.5587625,
                13396.7732883,
                16528.8488236,
                60285.2071849
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                10817.2517333,
                43904.5303289,
                60533.9851466,
                52570.5961803,
                96731.3672538,
                14848.1493718,
                26777.0344947,
                48092.915699
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                14257.7530795,
                52168.0340188,
                53906.3717821,
                43948.0768111,
                115236.0240398,
                15014.3993444,
                26765.8915287,
                38050.0376171
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                14877.5003879,
                54055.3756257,
                59891.2989867,
                35226.2084497,
                107079.1197058,
                9110.824256799999,
                33199.7233442,
                33397.4824535
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                19087.764889,
                52729.7551492,
                49633.59032430001,
                40828.083668,
                82232.7290986,
                14385.9539328,
                24051.8428546,
                51766.5006431
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2366.7807628,
                14803.0488481,
                22035.9547457,
                20088.0264998,
                29180.0682399,
                10378.8547466,
                4986.465752399999,
                21849.0393041
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                7915.110498399999,
                14829.0761158,
                15577.8104015,
                34630.2668783,
                51799.2910582,
                5890.3234802,
                3262.5058036,
                23655.24887
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2805.5574876,
                16166.9108516,
                29668.1638788,
                14771.2550557,
                19620.2723588,
                2998.8479115,
                3342.2115082,
                23665.4712307
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                5145.191309100001,
                22419.7559395,
                23356.7673011,
                14021.824916,
                19472.6766004,
                6866.547096799999,
                1869.6787756,
                33863.1799703
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                950.8782062999999,
                1543.1983028,
                6457.4990449,
                6139.321495800001,
                718.0972941000001,
                1100.4501303,
                7724.457214200001
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                466.6368858,
                4196.2466549,
                5285.0721312,
                5073.3647517,
                3020.2769833,
                611.7644205,
                0,
                5778.297321800001
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                4175.4577633,
                2620.3919515,
                4313.422892000001,
                13340.7084738,
                2275.7779903,
                0,
                13830.6126609
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                766.0462485,
                9224.065857700001,
                1989.2163255,
                1973.1170488,
                8173.3445356,
                608.1270677,
                0,
                4851.776035
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                699.8009989,
                0,
                7141.2111237,
                0,
                826.4949144999999,
                1508.7013898
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                1324.531945,
                0,
                0,
                4292.5860066,
                0,
                0,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                760.6971432,
                0,
                1492.2763322,
                839.8946562000001,
                3345.7501364,
                1504.6783918,
                0,
                4706.5650205
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                837.9184631,
                850.3402553999999,
                0,
                0,
                0,
                0,
                0
            ],
            "year": "2018"
        }
    ]
]

const travel_time_second_2 = [
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                717.340055,
                2969.8909737,
                2920.4856488,
                0,
                961.0262408,
                0,
                677.2153071,
                778.7654928999999
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                790.5253491000001,
                2119.4531146,
                6622.6235273,
                696.7811403,
                2120.6590518,
                0,
                736.385449,
                1803.2444484
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                865.4689645,
                4528.2460014,
                1266.2140532,
                0,
                3264.7906927,
                4381.4235918,
                1276.2789717,
                0
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2017.38323,
                3129.5948408,
                0,
                0,
                0,
                722.7274995,
                0
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                536.7326008,
                6412.17815,
                10427.33478,
                502.4573865,
                2705.0417616,
                1278.9108126,
                955.0334588,
                3984.4434856
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                576.2104632999999,
                7708.8105916,
                557.9464471,
                2910.6180689,
                7311.849637899999,
                1817.1258667,
                709.9658761,
                3464.2568571
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                397.854305,
                7651.7299128,
                10081.3832841,
                2512.7510406,
                6868.993442800001,
                2923.2993965,
                1744.7761211,
                7674.5795404
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                17498.4342461,
                8449.3151816,
                1522.4095187,
                5367.0081984,
                0,
                5897.6523593,
                5378.5740854
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2972.1967709,
                4729.4318236,
                0,
                3361.891826,
                567.1741461,
                597.634846,
                5763.814496600001
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                5178.236789,
                5311.8471267,
                0,
                5031.6890347,
                0,
                0,
                13186.4388289
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                3607.6347057,
                1118.8706995,
                918.4145095000001,
                5979.418882999999,
                2261.6125343,
                0,
                6409.766031
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                4921.249118399999,
                5571.695559100001,
                775.3285073,
                6007.0058016,
                1502.0370777,
                2822.8002505,
                5224.0985665
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2750.9682553,
                0,
                0,
                2048.7076797,
                0,
                0,
                799.6334144
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                1376.6757875,
                877.4229148000001,
                2205.0778113,
                0,
                0,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                1380.8351473,
                0,
                0,
                2960.2301881
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                1128.5781425,
                1822.0409753,
                0,
                975.1034612999999,
                0,
                0,
                1689.6270932
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                995.9444704,
                607.600132,
                0,
                0,
                0
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                1078.7320442,
                0,
                7312.314294600001,
                0,
                0,
                1487.4728013
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "year": "2018"
        }
    ]
]

const travel_time_second_3 = [
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                8468.402739899999,
                24835.8565999,
                27125.3319462,
                39119.2946531,
                38458.6486817,
                11163.0542685,
                6550.0187268,
                13694.8204793
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                6229.6351615,
                15434.7932225,
                25495.6346169,
                50451.5829365,
                28011.7070912,
                9550.005925,
                6084.425369,
                26358.6709387
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                7681.901911399999,
                16382.512411,
                31027.2580696,
                61064.21579630001,
                28414.5948385,
                8195.020543800001,
                8286.8907872,
                32821.54983220001
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                9941.7332642,
                15861.0282271,
                26474.985554,
                58607.5449237,
                35923.3867865,
                19490.8828209,
                19774.2943285,
                24513.4040024
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                51487.3402419,
                120242.1411461,
                149122.0338692,
                203180.6979708,
                237667.9700854,
                38054.3738964,
                72610.47329339999,
                105949.3735062
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                44125.15864719999,
                127606.9522769,
                167961.1390695,
                268057.8116854,
                235806.3423602,
                49598.8779629,
                93255.4677787,
                94360.35617989999
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                49471.0796361,
                153846.904668,
                158366.9227738,
                173712.0821714,
                247644.6140928,
                41729.5815919,
                82329.31590839999,
                115175.5308646
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                61952.3649594,
                157409.8833071,
                192310.8043817,
                213907.3557485,
                300512.2707349,
                31991.141624,
                70746.0603645,
                148812.7427037
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                10568.947887,
                94669.65722339999,
                152026.5074328,
                182771.3717755,
                335060.2459316,
                13621.2909244,
                15853.5074958,
                132926.2209125
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                22197.9341465,
                101463.1291946,
                171668.4692309,
                186259.0971537,
                292341.6475049,
                9935.0778909,
                10903.4073023,
                158858.3659468
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                16163.1031794,
                116444.8069444,
                163227.5122892,
                164576.8157446,
                274734.3210813,
                16420.7037916,
                10113.0257275,
                144517.1726309
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                20961.3066627,
                131210.2997588,
                165104.0019174,
                147544.1201763,
                345585.450922,
                12376.9979456,
                20642.6373497,
                142463.8453448
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1130.5857712,
                29715.3673431,
                26781.8679725,
                28094.4647679,
                100960.5061181,
                2769.4470487,
                1189.3943455,
                33547.4965408
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2953.9712665,
                23569.2884777,
                32812.6324309,
                27223.4443978,
                98077.8143063,
                609.7043095,
                659.8301045,
                60408.2137941
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1264.0145152,
                20467.3797557,
                28057.5075623,
                30728.3681442,
                81436.045784,
                707.2566437,
                0,
                35172.5502441
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                696.5535318,
                27678.4382707,
                28714.6791956,
                39109.7135146,
                95971.3061253,
                0,
                0,
                37051.1296605
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                1780.8413793,
                4705.5937499,
                6077.4680797,
                15208.9065199,
                595.0351607000001,
                665.6139964,
                5453.4249652
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                1334.0419281,
                4954.8689,
                728.1925645,
                12681.2998571,
                490.1500391,
                0,
                6156.461482399999
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                4189.7040241,
                2260.6581874,
                2304.6271738,
                10918.4453791,
                0,
                0,
                3156.9537818
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                2439.5793804,
                2014.510759,
                12125.5686352,
                481.9791839,
                0,
                4996.9512779
            ],
            "year": "2018"
        }
    ]
]

const travel_time_second_4 = [
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                6962.263079699999,
                842.4654634999999,
                961.9599207999998,
                3184.6410651,
                510.0737255,
                661.9688641,
                979.4555192
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                4635.6728306,
                0,
                5369.5459393,
                2380.166386,
                1071.2891255,
                1176.649019,
                1376.9637824
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                8190.227798800001,
                560.6372828,
                6230.7781483,
                3464.6644277,
                766.7984646000001,
                0,
                1334.8338156
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                1062.5601272,
                2276.2778832,
                3541.2878977,
                841.0349239,
                824.9725581,
                1412.19066,
                0
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                44936.7554518,
                2887.7438242,
                16150.801349,
                14809.748117,
                4392.5621415,
                21512.539482,
                10708.8082977
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1051.1734298,
                41453.64056969999,
                501.1886309,
                28939.112848,
                1375.120894,
                3003.971352,
                17870.5093088,
                9789.8232067
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                757.7359261,
                26307.549917,
                1496.8461592,
                13208.7634796,
                9736.248207100001,
                5041.482129999999,
                18499.3092288,
                7768.0971538
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1586.813637,
                23463.4136601,
                2096.5509566,
                10285.6040714,
                8882.5826222,
                2581.2560259,
                7400.586418299999,
                11665.7834552
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                3609.8253867,
                58536.81666139999,
                4295.709486399999,
                34168.121855,
                35455.4818239,
                7281.414518500001,
                3916.5041959,
                41903.1690336
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1785.0326423,
                59987.3107903,
                3921.1070026,
                10189.4734157,
                25586.6096737,
                11332.5397025,
                3180.7658095,
                31335.4939863
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2725.378174,
                62153.291277,
                4575.794707399999,
                10514.3373234,
                29648.0437272,
                10336.4705308,
                4441.8564657,
                20750.7731077
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1968.2590235,
                73733.6253791,
                6577.187916399999,
                23615.7977529,
                32777.3900771,
                9007.4924299,
                3140.8715624,
                19401.0405906
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                35679.4454385,
                1421.5508786,
                7967.4993551,
                9686.9159729,
                9006.5969178,
                600.7070126,
                13343.020668
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                35733.1436669,
                1076.0311716,
                6502.352823899999,
                12831.5983771,
                7397.0173259,
                935.4855395999999,
                21086.3938712
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                771.8368827,
                34044.31257520001,
                1040.5373363,
                6236.704250199999,
                26933.5728058,
                6687.116719600001,
                0,
                14753.7425045
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                627.1995512,
                45976.0100551,
                520.7102791,
                1840.258382,
                18488.7328847,
                11127.0834183,
                0,
                9850.507418000001
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                1758.1313168,
                0,
                4153.4981703,
                5067.1528315,
                0,
                0,
                6246.3553133
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2752.9771671,
                0,
                0,
                2546.5531588,
                0,
                0,
                1840.8765151
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2994.3471619,
                0,
                0,
                2528.2104889,
                0,
                0,
                4980.6003425
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                311.1291283,
                0,
                0,
                3307.138802,
                486.8832147,
                0,
                1545.1788897
            ],
            "year": "2018"
        }
    ]
]

const travel_time_second_5 = [
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                9022.7002744,
                3639.449832,
                1963.3675868,
                2966.8716333,
                0,
                0,
                3625.7148178
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                6110.5398953,
                1690.1198688,
                2159.5296904,
                1573.2978663,
                0,
                537.891812,
                3608.596289
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                3296.6610847,
                1737.1284792,
                1012.0122474,
                743.8182889999999,
                0,
                0,
                661.418222
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                846.0233707,
                4637.3816634,
                3347.5259256,
                3137.4478219,
                0,
                0,
                0
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2876.1322846,
                55027.5354108,
                41433.653628,
                8803.5366575,
                16855.118503,
                0,
                0,
                6595.5303914
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                596.7908765999999,
                36771.3563175,
                44688.7479579,
                11978.3908444,
                11851.0451333,
                448.9739305,
                0,
                7375.732933
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                336.3002903,
                25354.28547,
                23578.4723316,
                13624.6047247,
                14442.8901315,
                0,
                0,
                10187.7941012
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2768.3903901,
                12960.8278087,
                13951.4020923,
                15928.4898365,
                12555.5571926,
                0,
                0,
                10569.7560479
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                4762.118120800001,
                94256.7774424,
                52598.71168119999,
                38515.3125989,
                34983.5860301,
                0,
                1130.1654511,
                29977.2970999
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                3544.620076300001,
                94481.3417345,
                42969.228512,
                28296.4735192,
                24006.3092145,
                0,
                1704.02649,
                25039.7263315
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                6408.2635669,
                94001.7313671,
                32798.8296885,
                33955.3405225,
                19400.4651136,
                0,
                0,
                20642.7642251
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1641.0792497,
                72563.9824583,
                27108.8203122,
                21564.6781473,
                23848.7160735,
                0,
                875.0635314,
                30636.3553108
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1171.6782954,
                47567.6944827,
                8554.274458,
                4435.7851892,
                15224.6662877,
                0,
                0,
                16398.8267372
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2728.5075364,
                41042.5258928,
                10505.8152604,
                16803.4016369,
                22003.1351035,
                0,
                0,
                18709.2663334
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                676.7931512,
                32245.6199309,
                5379.2686271,
                8870.390749600001,
                14353.8285589,
                0,
                0,
                16055.7042749
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                20054.6937669,
                13970.4479092,
                11198.7504169,
                13645.8298971,
                0,
                0,
                12740.6255732
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                889.2762417000001,
                5935.2739751,
                795.2567762,
                874.7260976,
                0,
                0,
                2777.8876217
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2793.4304522,
                808.609483,
                2258.742951,
                2149.5609584,
                0,
                0,
                2193.5453755
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2451.2839565,
                1791.7534234,
                706.3975429999999,
                6037.4307938,
                0,
                0,
                1668.478387
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                1024.7785188,
                3506.4060107,
                1667.8704532,
                2397.9967839,
                0,
                0,
                1122.443092
            ],
            "year": "2018"
        }
    ]
]

const travel_time_second_6 = [
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                625.1854882,
                10429.1361592,
                7260.5949059,
                2546.2618569,
                1995.3166367,
                0,
                0,
                4294.0729993
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2888.9358626,
                7224.733293699999,
                6084.6227154,
                6198.164294100001,
                0,
                734.2959993,
                3117.4074322
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1536.7490774,
                1895.0502392,
                249.3120481,
                9004.0507941,
                2513.3727491,
                0,
                0,
                782.3607413999999
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                726.1932188,
                2333.6569397,
                2266.9971362,
                6626.478056,
                5512.8109268,
                1296.7241682,
                1357.9673124,
                0
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                504.5023183999999,
                16967.6990814,
                9727.0229109,
                11629.5184316,
                18235.3921867,
                517.3613849999999,
                2145.1761127,
                4628.559547600001
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1892.689537,
                18882.4893212,
                15376.747015,
                21294.4931224,
                11459.784275,
                2012.3345499,
                3622.9985118,
                5138.2685124
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2871.4001675,
                11796.6450284,
                12591.1276893,
                48398.8278591,
                13645.5744744,
                1535.5400032,
                6846.7338043,
                11750.4941114
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2962.0854331,
                11831.2632579,
                13615.1994736,
                34097.8123572,
                13779.6058649,
                0,
                5954.825956600001,
                12945.4584168
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                664.0731901,
                19289.8516269,
                14184.1154301,
                11882.0815293,
                8473.9273402,
                517.3613849999999,
                874.9168202999999,
                9035.659758299998
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1568.3527327,
                17028.0316622,
                10439.6950098,
                16113.193443,
                20382.2953442,
                551.0245798999999,
                709.9658761,
                12721.9826133
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                23646.7768102,
                10596.6391378,
                27371.7684432,
                16037.2985752,
                0,
                630.4150302999999,
                4452.472636199999
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1603.8918956,
                16581.6878033,
                8732.2423755,
                9353.0777145,
                10906.3909205,
                0,
                0,
                13151.2003411
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                3162.6977171,
                4093.270798699999,
                654.1867379,
                7964.1565491,
                611.0347292,
                0,
                3931.2134463
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                2037.4793148,
                1362.8453326,
                1530.8372752,
                9847.1753079,
                0,
                0,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                3126.8030326,
                2589.3309217,
                1285.8393809,
                6011.969521600001,
                0,
                0,
                5914.5543462
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                5251.171226699999,
                1173.4071567,
                968.2162511,
                8268.882051800001,
                0,
                0,
                2680.7970046
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                445.2901579,
                0,
                0,
                0,
                0,
                0,
                867.2724043
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                801.310203,
                0,
                0,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                1806.764355,
                0,
                0,
                0
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                899.6443208999999,
                0,
                1025.1621512,
                0,
                0,
                562.56884
            ],
            "year": "2018"
        }
    ]
]

const travel_time_second_7 = [
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                29886.9240422,
                155427.7523563,
                113052.6351891,
                60061.5899713,
                98443.659769,
                30624.5067365,
                16531.3063814,
                84270.511964
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                9925.5738125,
                146249.1822849,
                104833.9610237,
                80870.03502869999,
                101211.9095595,
                18857.6411891,
                11735.7513426,
                97973.6381085
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                21608.0807119,
                131810.14733,
                88842.8173563,
                73707.06553949999,
                90079.9518186,
                16889.1300547,
                25831.4348882,
                86276.4067243
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                20008.2149161,
                134449.6171249,
                114786.3527958,
                81290.8921083,
                86084.2920629,
                28560.9576129,
                19708.5775285,
                85837.65525160001
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                51761.1726923,
                283528.8887764001,
                212845.8419201,
                187432.6578584,
                260478.1886195,
                35993.20670569999,
                115303.7105473,
                224500.3114304
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                41743.5690932,
                276279.5143163,
                223848.3080259,
                173144.5086935,
                293053.1097102,
                49989.97306,
                121332.5355949,
                199585.3370739
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                44459.7251153,
                279304.1932088,
                208046.7679714,
                235740.2311076,
                269110.0034933,
                41392.2446133,
                122972.9850502,
                192907.6310454
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                43821.0938724,
                281725.7512704001,
                229163.5146488,
                254109.4392145,
                230994.1135968,
                39719.97154119999,
                116803.2921353,
                234568.9753618
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                11167.1980989,
                202860.0421291,
                157257.3895643,
                136007.6218269,
                220254.1816848,
                13817.7059715,
                3883.6061158,
                181705.5210676
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                10925.0551047,
                229570.9733224,
                150794.4226419,
                123450.1065312,
                252101.8909807,
                12551.2387833,
                7937.836634,
                200225.6053379
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                15941.1716243,
                278191.8856592,
                146528.0147556,
                103395.2116009,
                302185.7865413,
                10459.7144251,
                5552.096210600001,
                188021.5954493
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                11677.703638,
                260703.6424588,
                160854.848632,
                93677.7406127,
                296179.1084096,
                7151.274171100001,
                9706.2950688,
                174534.5878932
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2672.9093015,
                33050.9597681,
                19163.9861005,
                38178.035882,
                54381.57419580001,
                2423.0050188,
                0,
                47167.4448306
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1930.2067119,
                50131.7552187,
                28182.6222785,
                18910.807006,
                57862.31403630001,
                0,
                0,
                41633.31953480001
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                828.5924452,
                50553.33913309999,
                30660.1586561,
                24353.2220884,
                67970.8521351,
                610.3538327,
                0,
                43345.7121983
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2416.1595417,
                45911.855058,
                35620.8183989,
                11951.3414775,
                65253.10902409999,
                569.7909373,
                861.7884849,
                62533.0374327
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                7765.774254299999,
                6377.2493452,
                4006.249622,
                10325.7555146,
                739.9135462,
                0,
                12104.7609734
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                7478.470504299999,
                5691.708531,
                0,
                15117.9632971,
                1314.5288824,
                0,
                12253.9770637
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                774.0595032000001,
                6901.7056366,
                1832.4282798,
                4265.6641908,
                0,
                0,
                8984.59297
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                3528.3932725,
                9823.4438959,
                0,
                6583.6544655,
                0,
                0,
                18188.2122218
            ],
            "year": "2018"
        }
    ]
]

const travel_time_second_8 = [
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                5523.751144100001,
                1553.6412169,
                5314.2052057,
                0,
                0,
                0
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                496.8060677,
                1431.523913,
                2768.8900686,
                1996.9266918,
                1599.1739767,
                0,
                601.7780856,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                3010.0822964,
                1020.2417722,
                3414.4764815,
                0,
                1188.2988451,
                0
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                3022.4069603,
                1701.1637975,
                0,
                0,
                937.301708,
                1420.9607317
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                514.3539379,
                0,
                1612.9454982,
                4917.7519121,
                784.8158218,
                0,
                0,
                761.1436652000001
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                585.2160968999999,
                652.5744738,
                2460.1094237,
                3298.2946397,
                4187.2706435,
                0,
                0,
                507.7990513
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                2027.7599542,
                791.6158101,
                1342.9431067,
                464.1344913,
                998.4585337000001,
                0,
                1153.2578926,
                0
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                3922.9927169,
                0,
                2928.8998403,
                0,
                1419.6836454,
                0
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                1279.8554411,
                1046.8473901,
                0,
                1198.6866369,
                7540.2387161,
                0,
                0,
                0
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                2394.4944879,
                0,
                3426.2100077,
                0,
                0,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                708.2741798999999,
                803.6864682,
                0,
                2546.1593451,
                670.6037491000001,
                0,
                956.3337152999999
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                1869.9067914,
                832.6991307999999,
                1672.5966064,
                1699.8827104,
                916.8672027999999,
                0,
                2006.8186616
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                904.4048262,
                0,
                0,
                1393.2605115
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                516.2547901,
                1114.0423056,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                0,
                627.4383961,
                0,
                0
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                577.6715142,
                0,
                0,
                0,
                2142.4431478
            ],
            "year": "2018"
        }
    ],
    [
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "year": "2015"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "year": "2016"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                0,
                1531.7908013,
                0,
                0,
                0,
                0,
                0
            ],
            "year": "2017"
        },
        {
            "labels": [
                "BUF",
                "CPT",
                "EKU",
                "ETH",
                "JHB",
                "MAN",
                "NMA",
                "TSH"
            ],
            "values": [
                0,
                948.6167655999999,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "year": "2018"
        }
    ]
]



export const treatTravelTimeDataPerCity = (singleCityIndex) => {

    const allTravelTimeCategories = [travel_time_second_1, travel_time_second_2, travel_time_second_3, travel_time_second_4,
        travel_time_second_5, travel_time_second_6, travel_time_second_7, travel_time_second_8]

    const newYears = ["15mins or less", "15 - 30mins", "31 - 60mins", "61 - 90mins ", "More than 90mins"]

    const treatedDataForPercentageToggle = allTravelTimeCategories.map((dataset,datasetIndex) => {

        const mutatedChart = newYears.map((travelDuration, travelDurationIndex) => {

            let newLabels = []
            let valuesByTravelDuration = []
    
            dataset[travelDurationIndex].forEach((chartItem, chartItemIndex) => {
                
                newLabels.push(chartItem.year)
                valuesByTravelDuration.push(chartItem.values[singleCityIndex])
            })
    
            let numberChart = {
                year: travelDuration,
                labels: newLabels,
                color: travelTimeColors[travelDurationIndex],
                values: valuesByTravelDuration
            }
    
            return numberChart
        })

        return mutatedChart
    })
    return treatedDataForPercentageToggle
}

export const getTravelTimeAverages = (year, label, dropdownName, genericIndex, treatedToggleDataPerCity) => {

    const allCharts = (dropdownName === "Travel Time" && genericIndex === 0) ? [travel_time_1, travel_time_2, travel_time_3, travel_time_4, travel_time_5]
        : dropdownName === "Transport Mode" ? [transport_mode_1, transport_mode_2, transport_mode_3, transport_mode_4, transport_mode_5, transport_mode_6, transport_mode_7, transport_mode_8, transport_mode_9]
            : (dropdownName === "Travel Time" && genericIndex === 1) ?
                treatedToggleDataPerCity
                : []

        if (allCharts.length > 0) {

        let denominator = 0
        
        allCharts.forEach((chart, chartIndex) => {
         
            chart.forEach((chartChunk, chunchIndex) => {

                if (chartChunk.year === year) {

                    chartChunk.values.forEach((value, valueIndex) => {
                           
                        if (chartChunk.labels[valueIndex] === label) {
                            denominator += value
                        }
                    })
                }
            })
        })

        return denominator
    } else {

        return 1
    }
}