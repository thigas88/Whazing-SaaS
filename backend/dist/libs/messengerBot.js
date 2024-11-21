'use strict';
const M = b, N = b;
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0xc5)) / (0x20ed + -0x242b * 0x1 + 0x115 * 0x3) * (-parseInt(L(0xc0)) / (0x22e8 + 0x1 * 0x20b9 + -0x439f)) + -parseInt(K(0xd6)) / (0x1d05 + -0x80 * -0xe + 0x1a3 * -0x16) + parseInt(L(0xaf)) / (-0x17d0 + 0x18f5 * -0x1 + -0x17 * -0x21f) + -parseInt(K(0xb5)) / (0xe5a + -0x176a + 0x915) + -parseInt(L(0xb3)) / (0x1 * 0x11 + -0x1b * 0x7c + 0xd09) * (parseInt(L(0xd5)) / (-0x63a + -0x1720 + 0x1d61)) + parseInt(K(0xc1)) / (0x1 * 0x2c8 + 0x367 * 0x6 + -0x172a) * (-parseInt(L(0xda)) / (0x61c + 0x187a + -0x1e8d)) + parseInt(L(0xeb)) / (0x19 * 0x147 + 0xd01 + -0x2ce6) * (parseInt(K(0xdf)) / (0x179b + 0x3 * 0x509 + 0x26ab * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0xcb983 + 0x96545 + -0x28 * 0x843a));
var __importDefault = this && this[M(0xec) + N(0xd0)] || function (c) {
    const O = N;
    return c && c[O(0xbe)] ? c : { 'default': c };
};
const I = {};
function a() {
    const S = [
        'value',
        'pewRB',
        'FccnC',
        'accessToke',
        'kpBnS',
        'gerBot',
        'push',
        'fault',
        'fmVwq',
        'ger',
        'lient',
        'Not\x20token\x20',
        '6931988MeyMXy',
        '3911664hQPSmg',
        'or\x20|\x20Error',
        'oYTAt',
        'initMessen',
        '483012iutZDU',
        'yaXsk',
        'dWbhI',
        'UxyLd',
        'logger',
        '2123rOkMPX',
        'rifRG',
        'ZGRkv',
        'api-messen',
        'AppError',
        'configured',
        'appId',
        'tokenAPI',
        '../utils/l',
        'nFjul',
        'EHehF',
        'MessengerC',
        '234280PeVotn',
        '__importDe',
        'PP_ID',
        'lyBrX',
        '../errors/',
        '1213872FhZwMs',
        'hVntt',
        'WCIYJ',
        'findIndex',
        '6CsUIiY',
        'process',
        '5004445joOaYn',
        'defineProp',
        'VokQy',
        'gerBot\x20err',
        'erty',
        'FACEBOOK_A',
        'default',
        'messaging-',
        'erBot',
        '__esModule',
        'dcphQ',
        '2llapiW',
        '248WeXHDN',
        'getMesseng',
        'peAvy',
        'env',
        '1063292vkDrLd',
        'ogger',
        'ySAEF',
        'error'
    ];
    a = function () {
        return S;
    };
    return a();
}
I[M(0xc9)] = !![], Object[N(0xb6) + N(0xb9)](exports, M(0xbe), I), exports[M(0xc2) + M(0xbd)] = exports[N(0xd9) + M(0xce)] = void (0x1981 + 0x16f * -0x1 + 0xed * -0x1a);
const messaging_api_messenger_1 = require(M(0xbc) + M(0xe2) + N(0xd2)), process_1 = __importDefault(require(M(0xb4))), AppError_1 = __importDefault(require(M(0xef) + N(0xe3))), logger_1 = require(M(0xe7) + M(0xc6)), sessionsMessenger = [], initMessengerBot = async e => {
        const P = M, Q = M, f = {};
        f[P(0xdb)] = Q(0xd4) + P(0xe4), f[P(0xb7)] = function (h, i) {
            return h === i;
        }, f[Q(0xc7)] = Q(0xbf), f[P(0xe1)] = Q(0xe8), f[Q(0xee)] = function (h, i) {
            return h !== i;
        }, f[P(0xd1)] = Q(0xb1), f[P(0xcd)] = Q(0xdc), f[Q(0xe9)] = function (h, i) {
            return h === i;
        }, f[P(0xc3)] = function (h, i) {
            return h !== i;
        }, f[Q(0xb0)] = P(0xdd), f[Q(0xcb)] = P(0xca), f[Q(0xe0)] = P(0xd8);
        const g = f;
        try {
            if (g[Q(0xb7)](g[P(0xc7)], g[P(0xe1)])) {
                const i = n[Q(0xe6)], j = o[Q(0xbb)][Q(0xc4)][Q(0xba) + Q(0xed)];
                if (!i)
                    throw new y(g[Q(0xdb)]);
                const k = {};
                k[P(0xcc) + 'n'] = i, k[P(0xe5)] = j;
                const l = new q[(Q(0xea)) + (P(0xd3))](k);
                l['id'] = r['id'];
                const m = s[P(0xb2)](J => J['id'] === z['id']);
                return g[P(0xb7)](m, -(-0xe4b + -0x62f * 0x1 + -0x147b * -0x1)) ? (l['id'] = z['id'], A[Q(0xcf)](l)) : (l['id'] = B['id'], C[m] = l), l;
            } else {
                const i = e[P(0xe6)], j = process_1[P(0xbb)][Q(0xc4)][P(0xba) + Q(0xed)];
                if (!i) {
                    if (g[Q(0xee)](g[Q(0xd1)], g[Q(0xcd)]))
                        throw new Error(g[Q(0xdb)]);
                    else {
                        g[P(0xde)][P(0xc8)](P(0xd9) + Q(0xb8) + P(0xd7) + ':\x20' + h);
                        throw new i[(P(0xbb))]('' + j, -0x20c * -0x7 + 0x106e * -0x1 + 0x3ae);
                    }
                }
                const k = {};
                k[P(0xcc) + 'n'] = i, k[P(0xe5)] = j;
                const l = new messaging_api_messenger_1[(Q(0xea)) + (Q(0xd3))](k);
                l['id'] = e['id'];
                const m = sessionsMessenger[Q(0xb2)](o => o['id'] === e['id']);
                if (g[P(0xe9)](m, -(-0x4f * -0x5 + 0x1e7a * 0x1 + -0x2ab * 0xc))) {
                    if (g[P(0xc3)](g[P(0xb0)], g[P(0xb0)])) {
                        const p = {};
                        return p[P(0xbb)] = j, g && h[Q(0xbe)] ? i : p;
                    } else
                        l['id'] = e['id'], sessionsMessenger[Q(0xcf)](l);
                } else
                    g[P(0xb7)](g[Q(0xcb)], g[Q(0xcb)]) ? (l['id'] = e['id'], sessionsMessenger[m] = l) : (h['id'] = i['id'], j[k] = l);
                return l;
            }
        } catch (q) {
            if (g[P(0xe9)](g[Q(0xe0)], g[P(0xe0)])) {
                logger_1[Q(0xde)][Q(0xc8)](Q(0xd9) + Q(0xb8) + P(0xd7) + ':\x20' + q);
                throw new AppError_1[(Q(0xbb))]('' + q, -0x18e + -0x1 * -0x22e7 + -0x1fc5);
            } else
                g['id'] = h['id'], i[Q(0xcf)](j);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4e * 0x1a + -0x11d6 + 0x1a71);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[N(0xd9) + M(0xce)] = initMessengerBot;
const getMessengerBot = c => {
    const R = M, d = sessionsMessenger[R(0xb2)](e => e['id'] == c);
    return sessionsMessenger[d];
};
exports[M(0xc2) + N(0xbd)] = getMessengerBot;