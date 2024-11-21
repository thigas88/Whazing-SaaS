'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0xdd)) / (-0x2627 * 0x1 + 0x194c + 0xcdc) + -parseInt(F(0xd0)) / (-0x1e * 0xdf + 0x9 * 0x13 + 0x1979) + -parseInt(E(0xe9)) / (0x16f0 + -0x1 * -0x166d + -0x2d5a) + -parseInt(F(0xda)) / (0xd * 0x202 + 0x751 + 0x1f7 * -0x11) * (parseInt(F(0xbc)) / (0x2257 + -0xee1 * -0x1 + -0x3133)) + parseInt(F(0xca)) / (-0x1c86 + 0x2336 + -0x6aa) + -parseInt(F(0xc3)) / (0x7 * -0x434 + -0x4 * -0x3c + -0x1c83 * -0x1) * (-parseInt(F(0xc9)) / (0x26fe + -0x1bdc + 0xe * -0xcb)) + parseInt(E(0xc6)) / (0x1 * 0xb2e + 0x16d4 * 0x1 + -0x21f9 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1bb * 0x5f4 + -0xac59c + 0x66218));
function a() {
    const Q = [
        'SZDqb',
        's/logger',
        'JBwoL',
        'iUzks',
        'dBsTO',
        '__importDe',
        'NIcvJ',
        'findOne',
        'reload',
        'mimetype',
        'null',
        'ATE_CAMPAI',
        '../../erro',
        'iHYFs',
        'rs/AppErro',
        'dpSYg',
        'status',
        'default',
        '3020vBDCmw',
        'error',
        'bOpYw',
        'bpjMQ',
        'jEMuD',
        'isArray',
        'jmFUy',
        '61761SwNyBZ',
        'NyHlS',
        'fault',
        '8164377auOKEg',
        'getTime',
        'TviwB',
        '216AyyEjr',
        '1636674faIBtX',
        'CANCELED_P',
        'tenantId',
        'bBOxs',
        'PAIGN_FOUN',
        'vPHVt',
        '1540420BaDgvM',
        'GN_NOT_IN_',
        'mediaUrl',
        'where',
        'ENDING',
        'start',
        'GguMu',
        'length',
        'fyyjg',
        'Jnmjx',
        '548TSlRUG',
        'QBRKp',
        'filename',
        '68963ezhuRz',
        'aaztL',
        'map',
        'ERR_NO_UPD',
        'WDcOI',
        'tlazU',
        'update',
        'split',
        'pending',
        'logger',
        'canceled',
        'ARPdV',
        '326160BpMTyc',
        'substr',
        'ERR_NO_CAM',
        'erty',
        'bEiSi',
        'jDhRL',
        'ILltv',
        'ysnAc',
        'oCwXt',
        'NoQZe',
        'mediaType',
        'mkEwO',
        'nKPzJ',
        'Ukrqc',
        'FLqwW',
        'qQeDB',
        'value',
        'jsPzG',
        'HULSb',
        '__esModule',
        '../../util',
        'AXMjS',
        '../../mode',
        'indexOf',
        'all',
        'ls/Campaig',
        'defineProp'
    ];
    a = function () {
        return Q;
    };
    return a();
}
var __importDefault = this && this[G(0xaf) + G(0xc5)] || function (c) {
    const I = H;
    return c && c[I(0xa2)] ? c : { 'default': c };
};
const D = {};
D[H(0x9f)] = !![], Object[H(0xa9) + G(0xec)](exports, G(0xa2), D);
const AppError_1 = __importDefault(require(G(0xb6) + G(0xb8) + 'r')), Campaign_1 = __importDefault(require(H(0xa5) + G(0xa8) + 'n')), logger_1 = require(G(0xa3) + G(0xab)), cArquivoName = d => {
        const J = G, K = H, e = {};
        e[J(0xa0)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[K(0xe4)]('/'), h = g[f[J(0xa0)](g[J(0xd7)], -0x209c + -0xfc6 + 0x3063)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = G, M = H, j = {
                'oCwXt': function (p, q) {
                    return p - q;
                },
                'NoQZe': L(0xeb) + M(0xce) + 'D',
                'WDcOI': function (p, q) {
                    return p !== q;
                },
                'TviwB': L(0xbe),
                'bEiSi': function (p, q) {
                    return p === q;
                },
                'fyyjg': L(0xf0),
                'bBOxs': L(0xd9),
                'jEMuD': function (p, q) {
                    return p === q;
                },
                'aaztL': L(0x9c),
                'HULSb': M(0xe0) + L(0xb5) + L(0xd1) + L(0xcb) + L(0xd4),
                'qQeDB': function (p, q) {
                    return p(q);
                },
                'GguMu': function (p, q) {
                    return p !== q;
                },
                'FLqwW': L(0xe5),
                'bpjMQ': function (p, q) {
                    return p !== q;
                },
                'QBRKp': L(0xe7),
                'ARPdV': L(0xef),
                'vPHVt': function (p, q) {
                    return p !== q;
                },
                'NIcvJ': L(0xa4),
                'nKPzJ': L(0xac),
                'jmFUy': function (p, q) {
                    return p === q;
                },
                'dpSYg': L(0xb4),
                'SZDqb': L(0xb7),
                'tlazU': L(0xad),
                'mkEwO': M(0xc4)
            };
        let k, l = {
                ...f,
                'mediaUrl': j[L(0x9e)](cArquivoName, f[M(0xd2)]),
                'start': f[L(0xd5)]
            };
        const m = {};
        m['id'] = h, m[M(0xcc)] = i;
        const n = {};
        n[L(0xd3)] = m;
        const o = await Campaign_1[M(0xbb)][L(0xb1)](n);
        if (j[L(0xd6)](o?.[M(0xba)], j[M(0x9d)]) && j[M(0xbf)](o?.[M(0xba)], j[L(0xdb)])) {
            if (j[M(0xbf)](j[L(0xe8)], j[L(0xe8)])) {
                const q = {};
                return q[M(0xbb)] = j, g && h[L(0xa2)] ? i : q;
            } else
                throw new AppError_1[(M(0xbb))](j[L(0xa1)], -0x231b + 0x22ca + 0x1e5);
        }
        if (g && Array[L(0xc1)](g) && g[M(0xd7)]) {
            if (j[M(0xcf)](j[L(0xb0)], j[M(0x9b)]))
                await Promise[L(0xa7)](g[M(0xdf)](async q => {
                    const O = L, P = L, r = {
                            'jDhRL': function (s, t) {
                                const N = b;
                                return j[N(0xf1)](s, t);
                            },
                            'dBsTO': j[O(0xf2)]
                        };
                    if (j[P(0xe1)](j[O(0xc8)], j[O(0xc8)])) {
                        const t = { ...f };
                        t[P(0xd2)] = '', t[O(0xf3)] = '', t = t;
                    } else
                        try {
                            if (j[O(0xed)](j[P(0xd8)], j[O(0xd8)])) {
                                if (!q[P(0xdc)]) {
                                    if (j[O(0xed)](j[P(0xcd)], j[P(0xcd)])) {
                                        const t = q[P(0xb3)][P(0xe4)]('/')[0x6f6 * -0x3 + -0x205e * -0x1 + -0xb7b * 0x1][O(0xe4)](';')[0x2301 + -0x1 * 0xa47 + -0x18ba];
                                        q[P(0xdc)] = new Date()[P(0xc7)]() + '.' + t;
                                    } else {
                                        if (!e)
                                            return '';
                                        const v = f[O(0xe4)]('/'), w = v[r[P(0xee)](v[P(0xd7)], 0xbd * -0x16 + 0x355 + 0xcea)];
                                        return w;
                                    }
                                }
                                k = q;
                            } else {
                                const w = f[O(0xb3)][O(0xe4)]('/')[0x1 * 0x11f + 0x100e + 0x274 * -0x7][P(0xe4)](';')[-0x143b + 0x21ae + -0xd73];
                                g[P(0xdc)] = new h()[P(0xc7)]() + '.' + w;
                            }
                        } catch (w) {
                            if (j[P(0xc0)](j[P(0xde)], j[P(0xde)]))
                                logger_1[O(0xe6)][O(0xbd)](w);
                            else
                                throw new n[(P(0xbb))](r[P(0xae)], -0x1f6a + 0xcdc * 0x2 + 0x746);
                        }
                })), l = {
                    ...f,
                    'mediaUrl': k?.[M(0xdc)],
                    'mediaType': k?.[L(0xb3)][M(0xea)](0x631 + 0x1 * -0x1bf7 + -0x742 * -0x3, k[M(0xb3)][M(0xa6)]('/'))
                };
            else
                try {
                    if (!q[M(0xdc)]) {
                        const r = w[L(0xb3)][L(0xe4)]('/')[0x469 + 0x6a * -0x42 + 0x16ec][L(0xe4)](';')[0x2670 + 0x2125 + 0x5 * -0xe51];
                        x[L(0xdc)] = new y()[L(0xc7)]() + '.' + r;
                    }
                    u = v;
                } catch (s) {
                    A[L(0xe6)][M(0xbd)](s);
                }
        } else {
            if (j[M(0xc2)](f[L(0xd2)], j[M(0xb9)])) {
                if (j[M(0xc0)](j[M(0xaa)], j[M(0xaa)])) {
                    const r = { ...f };
                    r[M(0xd2)] = '', r[M(0xf3)] = '', l = r;
                } else
                    e[M(0xe6)][L(0xbd)](f);
            }
        }
        if (!o) {
            if (j[M(0xd6)](j[M(0xe2)], j[M(0xf4)]))
                throw new AppError_1[(M(0xbb))](j[L(0xf2)], 0x1de3 + -0x1 * -0x225a + 0x1 * -0x3ea9);
            else
                throw new n[(M(0xbb))](j[M(0xa1)], 0x14a1 * 0x1 + -0x27d * -0x1 + -0x6 * 0x397);
        }
        return await o[M(0xe3)](l), await o[M(0xb2)](), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x821 + 0x1ab0 + -0x9d3);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[G(0xbb)] = UpdateCampaignService;