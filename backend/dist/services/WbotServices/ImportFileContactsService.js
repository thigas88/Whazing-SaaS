'use strict';
const W = b, X = b;
(function (c, d) {
    const U = b, V = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(U(0x142)) / (0x1 * -0x19d1 + -0x26 * -0x25 + 0xa2a * 0x2) * (parseInt(V(0x133)) / (0x848 + -0x1963 + 0x111d)) + parseInt(V(0x14b)) / (-0x7c3 * 0x5 + 0x243d + 0x295 * 0x1) + parseInt(V(0x162)) / (0x270a + -0x17de + -0xf28) * (-parseInt(U(0x158)) / (0x2 * 0x597 + 0x3a * -0x52 + 0x76b)) + parseInt(V(0x1a5)) / (-0x485 * 0x4 + -0x546 + -0x8 * -0x2ec) * (parseInt(U(0x1ae)) / (-0xb61 + -0x1738 + -0x454 * -0x8)) + -parseInt(U(0x160)) / (-0x22e0 + -0x21ec + 0x5 * 0xdc4) * (-parseInt(V(0x191)) / (0x7e7 + -0x20a * -0x3 + -0xdfc)) + parseInt(V(0x153)) / (0x6 * 0x361 + -0x250d + 0x10d1) + -parseInt(U(0x13a)) / (0x75e * 0x3 + -0x123f + 0xf4 * -0x4) * (parseInt(V(0x149)) / (-0xc2 * 0x5 + -0x267a + 0x1 * 0x2a50));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1467a0 + -0x3e89 * -0x30 + -0x1263ef));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26d7 * -0x1 + 0x2c7 * -0xb + -0x71d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[W(0x167) + W(0x19b)] || function (c) {
    const Y = X;
    return c && c[Y(0x134)] ? c : { 'default': c };
};
const q = {};
q[X(0x170)] = !![], Object[W(0x14f) + X(0x15c)](exports, W(0x134), q), exports[X(0x187) + X(0x168) + W(0x19e)] = void (0x22b1 + 0x20b1 * -0x1 + -0x200);
const lodash_1 = require(X(0x12d)), xlsx_1 = __importDefault(require(W(0x165))), Contact_1 = __importDefault(require(W(0x196) + X(0x17d))), Whatsapp_1 = __importDefault(require(X(0x196) + W(0x1b3) + 'p')), AppError_1 = __importDefault(require(X(0x16e) + X(0x19f) + 'r')), wbot_baileys_1 = require(X(0x14a) + X(0x148) + X(0x1b2));
async function ImportFileContactsService(m, n, o, p) {
    const Z = X, a0 = X, r = {};
    r[Z(0x1a4)] = a0(0x159), r[a0(0x192)] = a0(0x1a1), r[Z(0x1ac)] = Z(0x1b1), r[a0(0x146)] = Z(0x194), r[Z(0x176)] = function (z, A) {
        return z !== A;
    }, r[a0(0x16d)] = a0(0x16c), r[a0(0x1b5)] = a0(0x161), r[a0(0x172)] = Z(0x143), r[Z(0x140)] = a0(0x166), r[Z(0x189)] = function (z, A) {
        return z === A;
    }, r[a0(0x16a)] = Z(0x18f), r[Z(0x171)] = a0(0x139), r[a0(0x1af)] = Z(0x184), r[Z(0x19c)] = a0(0x144), r[a0(0x18d)] = a0(0x136), r[Z(0x154)] = Z(0x173), r[a0(0x13f)] = Z(0x180), r[a0(0x14c)] = Z(0x1a0), r[Z(0x16f)] = Z(0x13d), r[Z(0x145)] = function (z, A) {
        return z || A;
    }, r[Z(0x169)] = function (z, A) {
        return z && A;
    }, r[Z(0x19d)] = function (z, A) {
        return z >= A;
    }, r[Z(0x150)] = Z(0x181), r[a0(0x17e)] = Z(0x193), r[a0(0x130)] = Z(0x19a) + Z(0x15f) + a0(0x178), r[a0(0x1a3)] = a0(0x1aa) + a0(0x15a), r[a0(0x1ab)] = a0(0x17a), r[Z(0x182)] = Z(0x177), r[Z(0x151)] = function (z, A) {
        return z === A;
    }, r[a0(0x174)] = Z(0x163), r[Z(0x185)] = function (z, A) {
        return z == A;
    }, r[Z(0x141)] = Z(0x17f), r[a0(0x18e)] = function (z, A) {
        return z !== A;
    }, r[Z(0x15d)] = Z(0x13e), r[Z(0x18a)] = Z(0x13c), r[a0(0x131)] = a0(0x156);
    const s = r, t = xlsx_1[Z(0x1a2)][Z(0x179)](n?.[a0(0x197)]), u = (0x2 * 0x3cb + -0xcc3 + 0x52d, lodash_1[Z(0x15b)])(Object[a0(0x183)](t[a0(0x135)])), v = {};
    v[Z(0x15e)] = 0x0;
    const w = xlsx_1[a0(0x1a2)][a0(0x1b4)][Z(0x1a8) + Z(0x147)](u, v), x = [];
    w[a0(0x164)](z => {
        const a1 = a0, a2 = Z, A = {};
        A[a1(0x1a7)] = s[a2(0x1ac)], A[a2(0x1a9)] = s[a2(0x146)];
        const B = A;
        if (s[a2(0x176)](s[a2(0x16d)], s[a2(0x1b5)])) {
            let C = '', D = '', E = '';
            ((-0x25f1 * 0x1 + 0x1e3c + -0x7b5 * -0x1, lodash_1[a2(0x195)])(z, s[a1(0x172)]) || (0x2331 + -0x1741 + -0xbf0, lodash_1[a1(0x195)])(z, s[a2(0x140)])) && (s[a2(0x189)](s[a1(0x16a)], s[a2(0x171)]) ? A[a2(0x186)](f) : C = z[a2(0x143)] || z[a2(0x166)]);
            ((-0x6b * 0x1b + 0x765 * 0x1 + -0x3 * -0x14c, lodash_1[a1(0x195)])(z, s[a2(0x1af)]) || (-0x112 + -0x11 * -0x1a + -0xa8, lodash_1[a1(0x195)])(z, s[a2(0x1ac)]) || (-0x63 * -0x21 + -0x20d4 + 0x1411, lodash_1[a1(0x195)])(z, s[a1(0x19c)]) || (-0x2e * -0x85 + 0x4eb * 0x5 + 0x1 * -0x307d, lodash_1[a2(0x195)])(z, s[a1(0x146)])) && (s[a1(0x189)](s[a1(0x18d)], s[a1(0x154)]) ? (j = k[a1(0x184)] || l[B[a2(0x1a7)]] || m[a1(0x144)] || n[B[a2(0x1a9)]], o = ('' + p)[a2(0x17b)](/\D/g, '')) : (D = z[a1(0x184)] || z[s[a2(0x1ac)]] || z[a1(0x144)] || z[s[a2(0x146)]], D = ('' + D)[a2(0x17b)](/\D/g, '')));
            ((0x100e + -0x1 * -0xa5c + -0x2 * 0xd35, lodash_1[a1(0x195)])(z, s[a2(0x13f)]) || (-0x20cd + 0x646 * 0x4 + -0x1 * -0x7b5, lodash_1[a2(0x195)])(z, s[a1(0x1a4)]) || (-0x2 * 0xb5 + -0x1fd * -0x7 + -0x1 * 0xc81, lodash_1[a1(0x195)])(z, s[a2(0x14c)]) || (0x15fc + 0xa * -0x275 + -0x2 * -0x14b, lodash_1[a1(0x195)])(z, s[a1(0x192)])) && (s[a1(0x176)](s[a1(0x16f)], s[a2(0x16f)]) ? f = g[a1(0x143)] || h[a1(0x166)] : E = z[a2(0x180)] || z[s[a2(0x1a4)]] || z[a2(0x1a0)] || z[s[a1(0x192)]]);
            C = s[a1(0x145)](C, D);
            if (s[a2(0x169)](C, D) && s[a2(0x19d)](D[a1(0x1b0)], 0x1 * -0x157f + -0x2036 + 0x35bf * 0x1)) {
                if (s[a1(0x176)](s[a1(0x150)], s[a1(0x17e)])) {
                    const I = {};
                    I[a1(0x188)] = C, I[a2(0x17c)] = D, I[a2(0x180)] = E, I[a1(0x16b)] = m, x[a1(0x186)](I);
                } else {
                    const K = {};
                    return K[a1(0x1a2)] = j, K && h[a1(0x134)] ? i : K;
                }
            }
        } else
            h = i[a2(0x180)] || j[s[a2(0x1a4)]] || k[a2(0x1a0)] || l[s[a1(0x192)]];
    });
    const y = [];
    for (const z of x) {
        try {
            z[a0(0x17c)] = z[Z(0x17c)][a0(0x17b)]('-', '')[Z(0x17b)]('\x20', '')[Z(0x17b)]('(', '')[a0(0x17b)](')', '');
            const A = {};
            A[Z(0x14e)] = s[Z(0x1ab)], A[a0(0x16b)] = m, A[a0(0x1a6)] = s[a0(0x182)];
            const B = {};
            B[Z(0x1ad)] = A;
            const C = await Whatsapp_1[a0(0x1a2)][Z(0x199)](B);
            if (!C) {
                if (s[a0(0x151)](s[a0(0x174)], s[Z(0x174)]))
                    throw new AppError_1[(a0(0x1a2))](s[a0(0x130)], 0x2c7 + -0x145 * 0xf + -0x1 * -0x11d8);
                else
                    throw new v[(Z(0x1a2))](s[a0(0x130)], 0x9 * -0xa + 0x1820 + 0x2 * -0xb19);
            }
            const D = (0x1bd7 + -0x5 * 0xb8 + -0x183f, wbot_baileys_1[Z(0x152)])(C['id']), E = z[a0(0x17c)] + (Z(0x175) + a0(0x132)), F = await D[Z(0x12e)](E);
            if (s[Z(0x185)](F[0xb54 + 0x17e2 * 0x1 + -0x2 * 0x119b][Z(0x1b6)], ![])) {
                if (s[Z(0x151)](s[a0(0x141)], s[Z(0x141)]))
                    throw new AppError_1[(a0(0x1a2))](s[Z(0x1a3)], 0x1 * -0x56 + -0x1a94 + 0x209 * 0xe);
                else
                    throw new v[(Z(0x1a2))](s[Z(0x1a3)], -0x2485 + 0x5 * -0x2da + 0x345b);
            }
            z[a0(0x17c)] = F[0x109e + 0x2 * 0x104f + 0xc4f * -0x4][Z(0x137)][a0(0x155)]('@')[-0x1 * -0x158f + 0x1e50 + -0x33df];
            const G = {};
            G[Z(0x17c)] = z[a0(0x17c)], G[a0(0x16b)] = z[Z(0x16b)];
            const H = {};
            H[a0(0x1ad)] = G, H[Z(0x13b)] = z;
            const [I, J] = await Contact_1[Z(0x1a2)][a0(0x198) + 'te'](H), K = I;
            if (J) {
                if (s[a0(0x18e)](s[Z(0x15d)], s[a0(0x15d)])) {
                    const O = {};
                    O[Z(0x188)] = O, O[Z(0x17c)] = j, O[a0(0x180)] = k, O[a0(0x16b)] = l, H[Z(0x186)](O);
                } else
                    y[Z(0x186)](I);
            }
            if (o?.[Z(0x1b0)]) {
                if (s[Z(0x189)](s[a0(0x18a)], s[a0(0x131)]))
                    A[Z(0x190)](Z(0x138) + a0(0x18b) + a0(0x14d) + B[Z(0x17c)]);
                else {
                    const P = {};
                    P[Z(0x16b)] = m;
                    const Q = {};
                    Q[a0(0x12f)] = P, await K[a0(0x18c)](o, Q);
                }
            }
            if (p?.[Z(0x1b0)]) {
                const R = {};
                R[a0(0x16b)] = m;
                const S = {};
                S[a0(0x12f)] = R, await K[Z(0x157)](p, S);
            }
        } catch (T) {
            console[Z(0x190)](a0(0x138) + Z(0x18b) + a0(0x14d) + z[a0(0x17c)]);
        }
    }
    return y;
}
exports[W(0x187) + X(0x168) + X(0x19e)] = ImportFileContactsService;
function a() {
    const a3 = [
        '8RGWgMs',
        'CWRxa',
        '295700dvEBUN',
        'DbtEI',
        'forEach',
        'xlsx',
        'Nome',
        '__importDe',
        'ContactsSe',
        'SQCCC',
        'qxBVr',
        'tenantId',
        'lRqkS',
        'JHYCx',
        '../../erro',
        'vuovK',
        'value',
        'eEruH',
        'GFBeQ',
        'lPCTU',
        'kvZog',
        '@$s.whatsa',
        'GqBOm',
        'whatsapp',
        'ONNECTED',
        'readFile',
        'CONNECTED',
        'replace',
        'number',
        'ls/Contact',
        'iLQTw',
        'SUkrs',
        'email',
        'oyrjQ',
        'OkNMT',
        'values',
        'numero',
        'XFvqW',
        'push',
        'ImportFile',
        'name',
        'NtyQt',
        'HDrzs',
        '\x20é\x20uma\x20con',
        'setTags',
        'UBPwK',
        'Wtdqo',
        'MfXDs',
        'error',
        '2856177mTojdW',
        'YONQY',
        'iNOco',
        'Número',
        'has',
        '../../mode',
        'path',
        'findOrCrea',
        'findOne',
        'NOT_FOUND_',
        'fault',
        'PzXiw',
        'NlyZC',
        'rvice',
        'rs/AppErro',
        'Email',
        'E-mail',
        'default',
        'HtFih',
        'cbMra',
        '366QuTGAa',
        'type',
        'NkhKU',
        'sheet_to_j',
        'rusOC',
        'CONTACT_NO',
        'GtxQe',
        'XPHHe',
        'where',
        '201922tZOXoP',
        'dpqLV',
        'length',
        'número',
        'eys',
        'ls/Whatsap',
        'utils',
        'ESNdX',
        'exists',
        'lodash',
        'onWhatsApp',
        'through',
        'uNoUC',
        'ZajNh',
        'pp.net',
        '3371162YUCVtF',
        '__esModule',
        'Sheets',
        'knUvk',
        'jid',
        'Número\x20não',
        'WpkaK',
        '4037198kbamjE',
        'defaults',
        'QBrgt',
        'WfSIJ',
        'ULHGp',
        'HNNRt',
        'vbzYw',
        'ABJca',
        '1aYgyEO',
        'nome',
        'Numero',
        'ylZyz',
        'AIoej',
        'son',
        '/wbot-bail',
        '48lqhwNE',
        '../../libs',
        '4422789vuivyC',
        'RuyWk',
        'ta\x20válida\x20',
        'status',
        'defineProp',
        'ZEbJJ',
        'XRWoc',
        'getWbot',
        '10203550HRCmcs',
        'MYKYH',
        'split',
        'eydlQ',
        'setWallets',
        '35jeqgZj',
        'e-mail',
        'T_FOUND',
        'head',
        'erty',
        'OZqdY',
        'header',
        'WHATSAPP_C'
    ];
    a = function () {
        return a3;
    };
    return a();
}