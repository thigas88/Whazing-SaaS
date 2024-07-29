'use strict';
const M = b, N = b;
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0x148)) / (0x49 * 0x67 + -0x1 * -0x2609 + -0x9a1 * 0x7) * (parseInt(K(0x132)) / (-0x878 + 0xc23 + -0x3a9 * 0x1)) + parseInt(L(0x153)) / (-0x494 + -0x6b * 0x6 + 0x719) + parseInt(K(0x14d)) / (-0x6d * -0xb + -0x19fd + 0x2 * 0xaa9) * (-parseInt(K(0x136)) / (0x20d2 + 0x5 * 0x2e + -0x1 * 0x21b3)) + -parseInt(L(0x128)) / (0x1bce + 0x2 * 0xe9b + 0x5b3 * -0xa) + -parseInt(L(0x127)) / (-0x3 * 0xa88 + 0x2301 + -0x362) * (-parseInt(K(0x13a)) / (0x2271 + 0x14 * -0x11c + -0x7 * 0x1bf)) + parseInt(L(0x12b)) / (-0x2379 + -0x2d4 + -0x2bd * -0xe) * (-parseInt(L(0x14e)) / (-0x1 * -0xd49 + 0x1 * 0x99f + -0x16de)) + parseInt(K(0x133)) / (-0xaf * -0x31 + -0x12e1 + -0xe93);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6a7c0 + 0x10f * 0x347 + -0xb * 0x5dbc));
var __importDefault = this && this[M(0x124) + N(0x150)] || function (c) {
    const O = N;
    return c && c[O(0x12e)] ? c : { 'default': c };
};
const I = {};
I[N(0x13e)] = !![], Object[M(0x120) + M(0x14a)](exports, N(0x12e), I), exports[M(0x157) + M(0x147)] = exports[N(0x13f) + M(0x122)] = void (0x4 * -0x502 + -0x1dc6 + -0x109a * -0x3);
const messaging_api_messenger_1 = require(N(0x151) + M(0x121) + N(0x15a)), process_1 = __importDefault(require(N(0x149))), AppError_1 = __importDefault(require(M(0x126) + M(0x14f))), logger_1 = require(M(0x146) + M(0x135)), sessionsMessenger = [], initMessengerBot = async e => {
        const P = N, Q = N, f = {};
        f[P(0x14b)] = P(0x158) + P(0x123), f[Q(0x15b)] = function (h, i) {
            return h === i;
        }, f[P(0x142)] = function (h, i) {
            return h !== i;
        }, f[Q(0x15c)] = P(0x12f), f[P(0x12a)] = function (h, i) {
            return h === i;
        }, f[P(0x129)] = Q(0x130), f[P(0x131)] = P(0x125), f[P(0x144)] = P(0x13c), f[P(0x145)] = function (h, i) {
            return h !== i;
        }, f[P(0x138)] = Q(0x159);
        const g = f;
        try {
            if (g[Q(0x142)](g[Q(0x15c)], g[Q(0x15c)])) {
                const j = f[Q(0x141)](k => k['id'] == j);
                return h[j];
            } else {
                const i = e[P(0x14c)], j = process_1[P(0x137)][P(0x156)][Q(0x12d) + Q(0x140)];
                if (!i) {
                    if (g[Q(0x12a)](g[P(0x129)], g[Q(0x129)]))
                        throw new Error(g[Q(0x14b)]);
                    else
                        g['id'] = h['id'], i[P(0x139)](j);
                }
                const k = {};
                k[P(0x154) + 'n'] = i, k[Q(0x134)] = j;
                const l = new messaging_api_messenger_1[(P(0x152)) + (P(0x12c))](k);
                l['id'] = e['id'];
                const m = sessionsMessenger[P(0x141)](o => o['id'] === e['id']);
                if (g[Q(0x15b)](m, -(0x55 * 0x15 + -0x7dc * -0x3 + 0x2e * -0xaa))) {
                    if (g[P(0x142)](g[Q(0x131)], g[P(0x131)])) {
                        const p = n[Q(0x14c)], q = o[P(0x137)][P(0x156)][P(0x12d) + Q(0x140)];
                        if (!p)
                            throw new y(g[Q(0x14b)]);
                        const r = {};
                        r[Q(0x154) + 'n'] = p, r[Q(0x134)] = q;
                        const s = new q[(Q(0x152)) + (P(0x12c))](r);
                        s['id'] = r['id'];
                        const t = s[Q(0x141)](J => J['id'] === z['id']);
                        return g[P(0x15b)](t, -(-0xc4c * -0x1 + 0x79e + -0x3 * 0x6a3)) ? (s['id'] = z['id'], A[Q(0x139)](s)) : (s['id'] = B['id'], C[t] = s), s;
                    } else
                        l['id'] = e['id'], sessionsMessenger[P(0x139)](l);
                } else {
                    if (g[P(0x142)](g[P(0x144)], g[Q(0x144)])) {
                        g[Q(0x13d)][P(0x155)](P(0x13f) + P(0x143) + Q(0x13b) + ':\x20' + h);
                        throw new i[(Q(0x137))]('' + j, 0x2 * 0xd25 + -0x488 + -0x142e);
                    } else
                        l['id'] = e['id'], sessionsMessenger[m] = l;
                }
                return l;
            }
        } catch (q) {
            if (g[P(0x145)](g[Q(0x138)], g[P(0x138)]))
                throw new d(g[Q(0x14b)]);
            else {
                logger_1[P(0x13d)][Q(0x155)](P(0x13f) + P(0x143) + Q(0x13b) + ':\x20' + q);
                throw new AppError_1[(Q(0x137))]('' + q, 0x1020 + 0x1ef0 + -0x2d7c);
            }
        }
    };
function a() {
    const S = [
        'AppError',
        'fault',
        'messaging-',
        'MessengerC',
        '1538034RmdFKa',
        'accessToke',
        'error',
        'env',
        'getMesseng',
        'Not\x20token\x20',
        'MGGUE',
        'ger',
        'zZGhy',
        'Incbd',
        'defineProp',
        'api-messen',
        'gerBot',
        'configured',
        '__importDe',
        'NteCr',
        '../errors/',
        '35hevlmR',
        '1206234wMZQBt',
        'DhXWY',
        'FLwmE',
        '1737piGDTP',
        'lient',
        'FACEBOOK_A',
        '__esModule',
        'AxjAN',
        'tKEBU',
        'YuFrH',
        '10032aJodGU',
        '10639970uBKjRD',
        'appId',
        'ogger',
        '3214600pHCasp',
        'default',
        'rxNon',
        'push',
        '997352gxjCgQ',
        'or\x20|\x20Error',
        'oAUPk',
        'logger',
        'value',
        'initMessen',
        'PP_ID',
        'findIndex',
        'xnbeV',
        'gerBot\x20err',
        'mXoVA',
        'CfoEF',
        '../utils/l',
        'erBot',
        '27BFzRIE',
        'process',
        'erty',
        'kBvnF',
        'tokenAPI',
        '4kKLbEp',
        '37530CgEssT'
    ];
    a = function () {
        return S;
    };
    return a();
}
exports[N(0x13f) + M(0x122)] = initMessengerBot;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12cc + 0x1527 + 0x26d3 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const getMessengerBot = c => {
    const R = N, d = sessionsMessenger[R(0x141)](e => e['id'] == c);
    return sessionsMessenger[d];
};
exports[N(0x157) + N(0x147)] = getMessengerBot;