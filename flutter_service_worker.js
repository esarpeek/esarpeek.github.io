'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2b600252eadc3213833922ab15da67de",
"version.json": "e8e571c7200ba55483258e285e4e089f",
"index.html": "e08e2dd12161a04bd66538269ff1b17b",
"/": "e08e2dd12161a04bd66538269ff1b17b",
"main.dart.js": "8897813fcf9ea32e104d74b943253050",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "1b948fbe8830d772c8eca0d6271a0efd",
"icons/Icon-192.png": "fec1b49b712c3f34e2af6c987a2037e9",
"icons/Icon-maskable-192.png": "fec1b49b712c3f34e2af6c987a2037e9",
"icons/Icon-maskable-512.png": "57797e0fcff240d2efe36de9eddc983c",
"icons/Icon-512.png": "57797e0fcff240d2efe36de9eddc983c",
"manifest.json": "5034ff79d75506e722a1ecf095778e16",
".git/config": "707a63619dffdb16f3ba61fc08afd921",
".git/objects/61/024cb623308b198f2236c01956190edae58157": "8334c6c76857c316d25183a0a3c415d0",
".git/objects/0c/107689132012976cd73718eddd738f4c9d7227": "1348115526360d77c929febdc19b02cf",
".git/objects/66/0d9f5de6493764ff69d9a48e474ba969d0d13d": "ced18c7f08b0ab3fff60e12a1f181df2",
".git/objects/3b/b46b55403710ca5b732789a59e6d23e76c3e9b": "327cb82e919d955403aa51a6268cc36a",
".git/objects/6f/21b7f6a478501f7b9ce3205bc0e33b229137bf": "d3fdf0a35ed612eec5e8a1b0c25e867b",
".git/objects/03/ed46a178ca6ecbb727271974504c1e7a92cac3": "4c3b2523561bca2c5fa2a077248ed1ff",
".git/objects/04/4093ffa168e7b1533334cccc56bfc177ae1d1e": "d7ba21e8593d3956b19055ad66227b6e",
".git/objects/6a/dd7e14e5bb8013bafef1011747171064830d64": "4f961f7080a0aff0a239e3fb051b0524",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/32/9d792303d76640205576295a1ae25819c2c38f": "faac820cb3edb147fb4ac23193fa91fd",
".git/objects/32/719ea375bdcd0497eb659f2d1c4e01f2b9faeb": "8307d54587d9496cc1baaa28df50b3b5",
".git/objects/35/8fedeae2ced8b556fb2a99478852221f65ab67": "118b497747219ac2b55b069ae0cbbc2e",
".git/objects/56/dffaaa48bd2c15a27bfeb0c3cb71dca5841f93": "b1f6ff291a2076f2770d2a129c2d4577",
".git/objects/3d/c0f5b356c57dbcfb4ad11705df8cc91a92490c": "0c7863441f72cc03bf98fa9ef5408a4d",
".git/objects/58/859468908b36367a012c15f4d7af9ec4d35581": "290a2c04cb72291c01cfe21aac316e56",
".git/objects/67/e45e6a63452b079cea8f85b9c5cbbfbd8df1db": "e07fcf3923a146b7901c2de9bcf5c34b",
".git/objects/94/86dda15f90be37905604ce1dfb3479fffed57a": "1370fc38974749ff9d0c49d3ef786b8c",
".git/objects/94/24e758a623912ad36ec89cb92f08b5f5be72bf": "80e1104913b97e9eb2496823988d4d08",
".git/objects/94/b66142beef06b0dbb7682568a0c645a2644835": "2fea19d199beaabb4a78d3c44ccdbf27",
".git/objects/0e/f0c4e3e1cad86e432908a7935d1009039e2aa6": "6a8de051358c591b9dd9d84c18c017d6",
".git/objects/0e/91384c02f12dde98f5efd8e7539377935b0856": "000570170c24f92018ffa5cdc8d8fff3",
".git/objects/60/18ddc0b9472353b2da24cb28e92908c8a71854": "fad1bd8bc9e3293fd55096f012415ef9",
".git/objects/5f/b6d7da62816a94257b6a7d37be5599986875db": "c089860269ec6b26df92b75a15b68f1f",
".git/objects/5f/6a97fe63cc20d359eb2dcf8858e6b32ce644f2": "6efd65cc278ef166179ac08f8cbeea21",
".git/objects/a4/bbdac514324b8d770330afed7fb19e70a9b063": "1454c5bef67744c642e842e7b21859c8",
".git/objects/ac/3e5ac5d0cfc2a726f5a13de0d69d0926fb6cb1": "4cb98442d941c6882df9acbbccd81bfc",
".git/objects/ad/89c858729a9772a5bad85106a3d3c28732e742": "388a43ba4fa10ebe0aaf60320c11bfc4",
".git/objects/bb/48f81f116ca8a3e5b053acf7e938b707f9e550": "20818b00113d5b29a254d4665666a289",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "1020ea7c17300eba0f2921dfe6fff24e",
".git/objects/d7/780c5a17ad5810b015e356ba9000ec0fe324ec": "5d6dc37bde3d2b0387a06c167b6ee68a",
".git/objects/b3/d6da2ca5268f821606994b05fe4a750bf0aa2a": "0860dfc8f88f2c2aeb3ebe058fa2520e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "534f3183d78a0e2c26089d1cf390b6ce",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "82e430c7914db0541e984f274d07421f",
".git/objects/d6/fe428aa83bf4ffc1add34de18370c5f4994d65": "6c5975912eedc914ed73b96dd393f396",
".git/objects/d6/393375ff7bd1c77b0afc5d4d15ab999f2299fc": "f79e2de481c773eba6bd12201ba539e4",
".git/objects/ae/1cdbb566a144cd384d80f7e61c36b2b15b17f7": "faa3069bc241fc60c2606ccdc36ce09f",
".git/objects/ae/c6c1aa6da63ca62513b7ad9bfe3f35c6a30c5b": "d7a928ddc775c459f2ec413a927fad9c",
".git/objects/d8/4cac688f6f5464530e6acb3555ef49adc1ec18": "88e287a7f38019d40e830a5c86bf6270",
".git/objects/e5/d10099a1fc2c5dc9234fb16d43b161ed1e0626": "5f84cec0fd0bb04c9448c838ab0dedbe",
".git/objects/c9/23ca0ff7f8aaa06ec21a1827119fbcf89556bc": "a2cad960386e470a546b59912873aeef",
".git/objects/fd/f93d0b683239735f2073e512ce41b33a56e0ad": "66ebc8fa486359304687975fef5bc799",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/c19ae8052f998b2152a9b8c1c147a74cd983e1": "abb58ccd29d02a3ce5dce8482a7fe841",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "f05cd6518ce8707c95991516f18e1588",
".git/objects/cf/c2011f790409938b7eee2034a478d905912558": "bd09e5d36c6356b772edb214e68d3355",
".git/objects/ca/88af560e2d3cf9f26d36b199e2c5b22bf7a55a": "6b745543c9f9d033ff17892a0efac50d",
".git/objects/e4/7f004adc972c60b97644bc7412115126b2a249": "412fd4afbcba9d797f8f74ef05549e02",
".git/objects/fe/eca048a9b6185042e5cc1659034eb3740675f3": "ed5f57adfcdfa04eaae8c8e4649e8856",
".git/objects/fe/aee6980e39aaa296572aea5fb22bd87497553b": "28ea5823171096126c12ad62a39c438d",
".git/objects/fe/77e6a17320148e195654d1b557dc605f2683cb": "0a60b9676c91b3528249674bc7449b5e",
".git/objects/c8/2da230f8217f09e9bfe7283c28fff041b368d8": "a5d81785286846ac4c29b821ff7d1745",
".git/objects/c8/a80c25d53b276ccc5ce52484a1997c5bc18da1": "6d86096c058bc6f3f1832c0cc5f9c418",
".git/objects/fb/6eec1755f7db5fd2c362b604ed91ba30f21a3c": "5072414eac4f3c2684ab79c5e0eaa1d9",
".git/objects/ed/e83d89db24329519d992416dfb08d945e7908d": "bfc6390a5744e434ee09231240d48557",
".git/objects/ec/75fc86cb945dbe7f677a58bab3b623c05057ac": "bf7e82855957694be772cc13c9fad059",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/18/1a1944418359546a5b90a7c3380c21a3971912": "b9b07b6c8a58ca7616cd44a1bc2e8782",
".git/objects/4b/a0a826a8077fa0975e112bf12c9643a94bda38": "48cc91e5c8fab405d27cd7145b8cafc9",
".git/objects/4b/81147717708668a9bb326f14a2a3ae112e17a9": "643a0793c00ea9b20e4f7da958528224",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "f8f6b511803d1ec2105c6b98b1e575e4",
".git/objects/10/8ce1df70dc054a71e922919609e92724b833f6": "f8adf8e118fc0044ba6f526e3256d228",
".git/objects/19/c0e3746b72cda7aa1d7a3f3aebaabf1cd418e6": "0e3127d63a156fbc4c562b91b446cb94",
".git/objects/19/9b4e391e958b574249b09ec97e60a0e3f7ab72": "d2b8c1f12b4897fa5b652a359e5abaf6",
".git/objects/26/c4f2e5adc76029ef6e071e76e68a5502a3e1d1": "61f52be0227b3cecd2804996a313f803",
".git/objects/21/a4e97afe0d61a67f0ca729fb5153a93df6dbe9": "dffaf6278e8c63aa5c5cbcd032d27543",
".git/objects/4d/288a7997655e8380e3dfda80e07b2eb97c744a": "7a954a09092cabe24a25c1cf9c1ebbf4",
".git/objects/81/5516f29a0df37ecd02a9a89c61e99e60db3a64": "5b29a03f9f90ab57bfcaa1cf36c5388a",
".git/objects/6b/b2c41f83f8576216aaebcad05909ec4bc5f854": "91ad7958daf1168f7e205b3a03cbd42f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/9a/0ea24f30d40a1f3afef0d1c2fad1fd31a7ae29": "4507db4ffbfcb3e71aeaf1859cf61d33",
".git/objects/5c/36172ff82e8a191f6a508ac6b10cf12bb72667": "4606f32d9d1f71913d5e97812c456ce3",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "0b30f43422760406bff290ede5e4dee5",
".git/objects/65/a7c2216d9690d782b5244290e00a11e845385c": "cfb46e6367731ab89fa08ec3ee42828a",
".git/objects/62/51a20ba1ecab195460604ad6d188239aab94f6": "60590a4e5285ce9b86422f5df900fb58",
".git/objects/96/db2ce4ed23cc7bfb45a3c1c18cf6dc1bbda2ba": "f159fec65de3a12be1cc4860b2375a78",
".git/objects/3a/6afcf34c85b87a028ccdb999e6bc7be01376c5": "a64362be24777a60e480f5bcf24adb04",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "98dc92399f0c19aa26b49bce570be57e",
".git/objects/3f/fc485ec41424d821d45e42c20934de22c6b25e": "23f6c53041f057a0366b16f97e463aa9",
".git/objects/5e/55e49ef82991b8e285dda310b58e4c92974cc5": "fdbdeb87d0918ac63d7779b92766201c",
".git/objects/39/aeb4f0c840ba5d391b6a0a03af4ef0be4fd53a": "3e3fb908461ae04f810091051ffad3c2",
".git/objects/39/57bfe7016f678352f954becbd4ea388ea40d26": "81f44a85947be61c154623670ae1eabd",
".git/objects/55/b2f88ad0480e26b01e004bead73a1574f1dc3d": "85f463bd22a05189fcf381c53ac7fe73",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/d4/2a9d4d69eccafc886b6feb416dd5802e7214af": "2c2773da90da41287b79ab45a35830ba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/bd5edbc9306359ac36e7080b4e36771039fd6b": "b026b104db9235ff467d55ca683c35d2",
".git/objects/ba/8d046cfb915c764fc1289c4dd84ea8b117c362": "4e186b93a60cce328aaad657196e79b8",
".git/objects/b8/9e766cd2ae6deff997df5b7f107a00b81480fb": "1bec456b49866e4243a8704500eca114",
".git/objects/b1/539e17de66e6d2b1604b6435b6e7da82fe807b": "8e4373f465b0bb1591dfcc5c0526c91f",
".git/objects/dd/45daad718aa6f7be0393f2a31672745200f16c": "81f040aeea70ed31d628d077605e33de",
".git/objects/dc/c91ec05bb3f630ae304ddafbebda9261abfd4e": "3edc8c65b37a493e71c849b32d674006",
".git/objects/a9/0c7b57989380ec9f179635aa5c4389d0d3f018": "da95c5dd70618d522c826d100139d843",
".git/objects/d2/c07b5fa18bf8187a8cd94716094e8304810120": "3e553f1f5e6771300951b6e3f14aea97",
".git/objects/d2/246ae44a311c55883c5ec80d73fa618d7296e0": "961de6ec0b654aec389c81259a3e4946",
".git/objects/a8/ec53a0fe13a4390252ffbb467bcf9f2ea95afa": "5722f32d3608ab907fefcbf64aca9dd3",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "af8b18331833a6e0073792e94ede8dfe",
".git/objects/b0/5c7521a8b39871f33bb9a977e78a338915a00f": "543236ec409a1269316d9d7a02437e2a",
".git/objects/e1/173751dec2aacb205cedd6f90cb822c24eb175": "530224fa364afba7a305ce291964a96e",
".git/objects/e1/e61f0b8b0cf574e2ee2a4d1419ca8e3f6cf411": "8362eb6206bae4237d8fdf60e18257ea",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "6078dfba0d9dfa654b1e692f5dc30d82",
".git/objects/f9/4009061da3b06334be438c75bfc730f7463f5d": "6fe14391299965bc517522a4e367b1da",
".git/objects/f7/8a2d78f5f8627c4932ecade15874d68e85b932": "77a01ba9785806fae9ffc07013f58ff3",
".git/objects/c5/8bf81b9765b3a13a1007873c0fde523e783dd7": "53579cd1cf715177a7b209fe5c8ae27c",
".git/objects/c5/4574bd9701f42da706555eb6ac9483e1703fc6": "21f1d86dd8195ce12c0f11817f67e6a4",
".git/objects/c5/87385317489deda61543c75d1c28a4e8ffa3b6": "4d6c02efd8b5b00e2db3aad1bc95adf6",
".git/objects/e7/4940e24389c921433e28e5927562e67460bd5a": "e3034452670fc9d43d3b98a8498d13e8",
".git/objects/f8/a7742948557e9292cf6896ee0d6434ff802b42": "44b984588d869e133340385cfa700dcb",
".git/objects/2c/d1c83ccb30810d19664862b1a65b47cdb6b078": "1dec6b716be66c96a2086c3a243b626d",
".git/objects/83/505f699aca9196732f9624dcecf9f5ec28063c": "909d2ea5e35d43f773d35c8218f51faa",
".git/objects/48/22dd88aaa87f1d5a6b4bf22eca8b11db13a5bc": "dca96e9c2774ece0435de04b2cdbb127",
".git/objects/70/9394e896fafb2d11780d43f383e33849239f2d": "9e5c411de2c731b9e353b2b6e523ac19",
".git/objects/1e/177f8b2083a3723e0876e93b1ed62c6bd462e6": "f58bf880395439d0d9df185e3bf73045",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/24/30b4794ce08b099e375adddce9e35435d3a881": "6adab5fb28c2184f5fc3cb175edd7ed7",
".git/objects/24/9d31cd2dbca2e51c7e0fc2dfe919c3f5c5e6e7": "ba1f47b3b2257fcdab3758b9461e26fd",
".git/objects/23/fc00ec3603d806af4968a0a5d2592ac22a0719": "3c9999e2ee2248fb51625f89ef5ace38",
".git/objects/12/119a538f78cc98ba539b432d5c2e880bec846c": "8b9aec153d1b06948e41d32aa8a5214f",
".git/objects/85/5cb28acafc367a6088b84b4a70434bc9bf791b": "ffcb32afd4a1dfeced45adc0d1b8915c",
".git/objects/71/cad9d3be95f8fddee4b660c38ab9b28180159c": "720bc18bdf6749f6079ba61990cc63db",
".git/objects/82/26c84a9a585f3df3a7f0d0ffa102854ab5dce3": "71b8f7606571e043230cf1fcc7069408",
".git/objects/49/8afe73ae56a6e7482ad6ad519de8f26b6652c7": "d497533d95763ce1676e060e741c170a",
".git/objects/49/b2e1c1b2d8fdd45521dac6a149200f441e3d5f": "540e2cef63b8f93b557dd14b169a27fd",
".git/objects/2e/72fcf18c06adf61a44fb72b84f0aa613ca629d": "746c5fa30b5155530271cf49b204524f",
".git/objects/25/2eab49cfb6cf77b4933601e1309f04a4db3d36": "6704678f76607e0ce66b24a8d61df580",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "783fb9832871a64c355a3b5d2044c864",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "be2cda589e0b8528bb9e5bf1bba66778",
".git/logs/refs/heads/main": "be2cda589e0b8528bb9e5bf1bba66778",
".git/logs/refs/remotes/origin/main": "f10ae677cc4668cacb7d1e4100906a76",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1f5ca276ade3b462da79ed1880c06eac",
".git/refs/remotes/origin/main": "1f5ca276ade3b462da79ed1880c06eac",
".git/index": "f6853c2e22def480ddb7e0971dc5a31f",
".git/COMMIT_EDITMSG": "be24489781b53b00b63927eb615fb4ef",
"assets/AssetManifest.json": "a6ad92a5a0afd0da6f0d438211291c7f",
"assets/NOTICES": "f829f5d306fd97a6236b64caba4be9c8",
"assets/FontManifest.json": "b58031e51561a32cd5e4308f3b929e09",
"assets/AssetManifest.bin.json": "692a7cb12a29219d0ccf6a5d2bd5e061",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6fe9739cdf1ea30a26da496e3cb837c2",
"assets/fonts/MaterialIcons-Regular.otf": "afa212d518c8fccbb19b650a1475036d",
"assets/assets/svg/search.svg": "93908ae1d286be70b16bbb2e4f44ef52",
"assets/assets/svg/wind.svg": "115f93bb173d087ba160daf2b8f3d698",
"assets/assets/svg/skype_icon.svg": "38c2f89756e60d10feeebfdd7c04206a",
"assets/assets/svg/distance.svg": "04ebe03355fa88675711ef92640eff04",
"assets/assets/svg/remote.svg": "0b54c23419c77499ae81e9b7ae154312",
"assets/assets/svg/home.svg": "cf6b258752d57b52ec605c3eb56d4936",
"assets/assets/svg/sleep.svg": "6430bf754369547fb87ecb09b7adf9c4",
"assets/assets/svg/happy_students.svg": "d3381752c0ab6b653a55cd998d54fe5a",
"assets/assets/svg/professional_teachers.svg": "3d1965caffea1c5b6acbeed8b4cb63d7",
"assets/assets/svg/steps.svg": "99d568f08403d1fc3301694015861139",
"assets/assets/svg/experience.svg": "ba34a3f146b6de3c655ce8accc0d67e7",
"assets/assets/svg/book.svg": "c36f097a780324616843b4a6081886ad",
"assets/assets/svg/bell.svg": "c3aacd5675a34626a5ee5e8b8848ba2d",
"assets/assets/svg/plant.svg": "00194ee0ed73b3a8fe926368baa6398f",
"assets/assets/svg/thermometer.svg": "660c1b2d12bb61c851069ae08a79ae7f",
"assets/assets/svg/share-2.svg": "3897841f44cf16ff16f59cd78d615eed",
"assets/assets/svg/teachers.svg": "82a1abfd6bfece5d4bf7bace29f1b4d1",
"assets/assets/svg/fan_open.svg": "7439efd8355bee53023691eca62d0b18",
"assets/assets/svg/burn.svg": "17878d64166afc53d13e59310ef0715c",
"assets/assets/svg/countries.svg": "fb1a6f9dee8290b6c36ba31769b93e1c",
"assets/assets/svg/setting.svg": "45d4d8a6a8dbdc4c57b46de74ae672bd",
"assets/assets/svg/female_teacher.svg": "e93702c68ff906b0e55a83f2b32ad4bc",
"assets/assets/svg/humid.svg": "a44c899522b27dd90a08aeb7e7252877",
"assets/assets/svg/whatsapp_icon.svg": "6125e6a9838707ebd355d556623f1d40",
"assets/assets/svg/more.svg": "beac4b50442fde8b2e171116f03f0b4e",
"assets/assets/svg/water_not.svg": "ccc93080b8f446f31e7b8379b9d6ace9",
"assets/assets/svg/sun.svg": "db1a0e94011cdf2a2446893558086099",
"assets/assets/svg/signout.svg": "f00d50221b54596fcc1f85ac83590583",
"assets/assets/svg/exercise.svg": "742d6c5a839fbdd352ba279d7a41a86c",
"assets/assets/svg/facebook_icon.svg": "922ff813a59acc995613e3ab06d8d3dd",
"assets/assets/svg/fan_close.svg": "5587122a49d3a7865a36e8ffb8dd4613",
"assets/assets/svg/profile.svg": "4c8bbe7a24e05b79fd5228d16f8346d8",
"assets/assets/svg/water.svg": "18a02c4663617931098bf3fb343a06ab",
"assets/assets/svg/slack.svg": "77f6de10b99abd743344a93a3d2b9247",
"assets/assets/svg/soil.svg": "fbbf7b8737d59bf3faa85339d5ed70fa",
"assets/assets/svg/window.svg": "4e9f94027fdb6c74e5ae53d3a52dccc0",
"assets/assets/svg/window_close.svg": "ebf9ff5bd9fc0716d3696b508a9ff562",
"assets/assets/svg/skype.svg": "4ded9ff9cbaa347094f55268329acc3a",
"assets/assets/svg/humidity-svgrepo-com.svg": "6836d4c63099546e1bb6d47f9fed9bf5",
"assets/assets/svg/history.svg": "86fcbe39b9bce9664e88283b1a260b98",
"assets/assets/images/background_image.png": "9b31f8ed37edc24073e05797035e5cfa",
"assets/assets/images/bg_image_2.jpg": "9dcc66d5a4c0c876a794d6fd7164eef6",
"assets/assets/images/avatar.png": "e4becf1fbe611ef75115221ff4221562",
"assets/assets/images/logo.jpg": "cd27c8dd4b54639f59e4bad63be849e0",
"assets/assets/images/logo.png": "0edff25a5be51e2dd844b323c58c47e2",
"assets/assets/images/line.png": "c1471343b9855febe9fd6d2033f6956b",
"assets/assets/fonts/IBMPlexSans-Medium.ttf": "424d6e28fe50c7fb5d665d4b0fdf0cb1",
"assets/assets/fonts/IBMPlexSans-SemiBold.ttf": "f1f29edcd875f315e596c24b9fbb8c19",
"assets/assets/fonts/IBMPlexSans-ExtraLight.ttf": "89293b5a931434322648d5ccb769202f",
"assets/assets/fonts/IBMPlexSans-Thin.ttf": "a825187b19b83404f4be06879a9895eb",
"assets/assets/fonts/IBMPlexSans-Light.ttf": "341cd5ba84b31a9a949eac15e96e2bf5",
"assets/assets/fonts/IBMPlexSans-Regular.ttf": "2470b0f5dce95a820b228c5bdfc95eca",
"assets/assets/fonts/IBMPlexSans-Bold.ttf": "999fb50e1c3537c3e5039f3cf8579347",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
