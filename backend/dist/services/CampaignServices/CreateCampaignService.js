'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0xd7)) / (0x1 * 0x154c + -0x10 * 0x16c + 0x175) * (parseInt(F(0xeb)) / (-0x21ab + 0xaae * 0x1 + 0x16ff)) + parseInt(E(0xf0)) / (-0x1 * 0x140c + 0x2018 + -0x27 * 0x4f) * (parseInt(F(0xd0)) / (0x9a + -0x1b35 + 0x1a9f)) + parseInt(F(0xcb)) / (0x1386 + 0x2 * 0xae9 + -0x47 * 0x95) + parseInt(F(0xcd)) / (0x9e6 + -0x26d * 0x7 + 0x71b) * (-parseInt(F(0xc7)) / (0x133b + 0x1 * -0x2135 + 0xe01)) + -parseInt(F(0xc2)) / (0x1188 + 0x2 * 0x2a7 + -0x3cd * 0x6) + parseInt(E(0xe8)) / (0x13a6 + 0x1a * -0x173 + 0x1211) * (-parseInt(F(0xfc)) / (0x2226 + 0x1 * 0x238a + -0x45a6)) + parseInt(E(0xdf)) / (-0x243a + 0x8cb + -0x1b7a * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x194568 + 0x951b8 + -0x159d08));
var __importDefault = this && this[G(0xef) + H(0xe0)] || function (c) {
    const I = G;
    return c && c[I(0xf7)] ? c : { 'default': c };
};
const D = {};
D[H(0xcf)] = !![], Object[G(0xf6) + H(0xff)](exports, G(0xf7), D);
const date_fns_1 = require(H(0xcc)), logger_1 = require(G(0xf2) + H(0xdc)), Campaign_1 = __importDefault(require(H(0xe3) + H(0xde) + 'n')), CreateCampaignService = async ({
        campaign: d,
        medias: e
    }) => {
        const J = H, K = G, f = {};
        f[J(0xee)] = function (k, l) {
            return k !== l;
        }, f[J(0xfd)] = J(0xfb), f[J(0xda)] = function (k, l) {
            return k === l;
        }, f[K(0xe4)] = J(0xc9), f[K(0xdb)] = function (k, l) {
            return k === l;
        }, f[K(0xec)] = K(0xd9), f[J(0xed)] = J(0xf9), f[J(0xca)] = J(0xfa), f[J(0xc6)] = K(0xe6), f[J(0xe2)] = function (k, l) {
            return k !== l;
        }, f[J(0xd6)] = K(0xf4);
        const g = f;
        let h;
        if (e) {
            if (g[J(0xe2)](g[J(0xd6)], g[J(0xd6)])) {
                if (!i[K(0xe5)]) {
                    const l = o[K(0xc8)][J(0xf3)]('/')[-0x1e58 * -0x1 + 0xef6 + -0x1 * 0x2d4d][K(0xf3)](';')[0x1bf0 + 0x1370 + 0x10 * -0x2f6];
                    p[K(0xe5)] = new q()[J(0xf1)]() + '.' + l;
                }
                m = n;
            } else
                await Promise[K(0xfe)](e[K(0xf5)](async l => {
                    const L = K, M = J;
                    if (g[L(0xee)](g[M(0xfd)], g[L(0xfd)]))
                        e[M(0xce)][M(0xd5)](f);
                    else
                        try {
                            if (g[L(0xda)](g[M(0xe4)], g[M(0xe4)])) {
                                if (!l[M(0xe5)]) {
                                    if (g[M(0xdb)](g[M(0xec)], g[L(0xed)])) {
                                        const o = {};
                                        return o[M(0xd4)] = j, g && h[M(0xf7)] ? i : o;
                                    } else {
                                        const o = l[L(0xc8)][L(0xf3)]('/')[-0x1f24 + 0x266f * -0x1 + 0x22ca * 0x2][M(0xf3)](';')[-0x65 * -0x11 + -0x1c84 + 0x15cf * 0x1];
                                        l[M(0xe5)] = new Date()[M(0xf1)]() + '.' + o;
                                    }
                                }
                                h = l;
                            } else
                                try {
                                    if (!q[M(0xe5)]) {
                                        const q = w[M(0xc8)][L(0xf3)]('/')[0xc11 * 0x1 + 0xba2 + -0x17b2][M(0xf3)](';')[0xe74 + -0x21 * -0x65 + 0x1 * -0x1b79];
                                        x[L(0xe5)] = new y()[M(0xf1)]() + '.' + q;
                                    }
                                    u = v;
                                } catch (r) {
                                    A[L(0xce)][M(0xd5)](r);
                                }
                        } catch (q) {
                            if (g[M(0xee)](g[L(0xca)], g[L(0xc6)]))
                                logger_1[L(0xce)][M(0xd5)](q);
                            else {
                                const s = f[L(0xc8)][M(0xf3)]('/')[0x528 + 0x14e * 0x15 + -0x281 * 0xd][M(0xf3)](';')[0x351 * 0x2 + 0x1d * 0x45 + -0xe73];
                                g[L(0xe5)] = new h()[M(0xf1)]() + '.' + s;
                            }
                        }
                }));
        }
        const i = {
                'name': d[J(0xd2)],
                'start': (-0x1a17 * 0x1 + -0xf28 + 0x293f, date_fns_1[K(0xe1)])(d[K(0xc5)]),
                'message1': d[J(0xf8)],
                'message2': d[K(0xd1)],
                'message3': d[J(0xea)],
                'userId': d[K(0xd3)],
                'delay': d[K(0xc4)],
                'mediaUrl': h?.[K(0xe5)],
                'mediaType': h?.[J(0xc8)][J(0xc3)](-0x176b * -0x1 + 0xc * -0x108 + -0xb0b * 0x1, h[K(0xc8)][K(0xd8)]('/')),
                'sessionId': d[K(0xdd)],
                'tenantId': d[K(0xe9)]
            }, j = await Campaign_1[J(0xd4)][K(0xe7)](i);
        return j;
    };
exports[G(0xd4)] = CreateCampaignService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f47 + -0x2241 * -0x1 + -0x2 * 0x11c);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const N = [
        'vSsNO',
        '40kNFxvc',
        'LiqKh',
        'all',
        'erty',
        '5310176OvcJPx',
        'substr',
        'delay',
        'start',
        'zSydB',
        '70RRbkrI',
        'mimetype',
        'WosjW',
        'nTljB',
        '6428470DhYeoZ',
        'date-fns',
        '97158iSXnqy',
        'logger',
        'value',
        '40hBaAHc',
        'message2',
        'name',
        'userId',
        'default',
        'error',
        'AxwJT',
        '135764IlapvX',
        'indexOf',
        'RZPdJ',
        'kBMJm',
        'acjVg',
        's/logger',
        'sessionId',
        'ls/Campaig',
        '4489078dzJNxk',
        'fault',
        'parseISO',
        'mVPhB',
        '../../mode',
        'IKJzl',
        'filename',
        'JWByW',
        'create',
        '2869731NaSzlt',
        'tenantId',
        'message3',
        '6NYOevN',
        'oRvnV',
        'HVPwY',
        'lvtgv',
        '__importDe',
        '255153SXlSCU',
        'getTime',
        '../../util',
        'split',
        'ZJdxu',
        'map',
        'defineProp',
        '__esModule',
        'message1',
        'tOCVz',
        'kMHSN'
    ];
    a = function () {
        return N;
    };
    return a();
}