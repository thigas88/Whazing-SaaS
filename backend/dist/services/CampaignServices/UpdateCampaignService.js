'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0x147)) / (-0x38f * 0x5 + 0x225f * 0x1 + 0x1093 * -0x1) * (parseInt(F(0x150)) / (0x1c2 + -0x2697 + 0x24d7)) + parseInt(F(0x145)) / (-0x24bc * 0x1 + 0xb1f * -0x3 + 0x461c) + -parseInt(E(0x176)) / (-0x15d + 0xb4 * 0x2e + -0x1 * 0x1ef7) + parseInt(F(0x16e)) / (0x1 * 0xded + -0x281 * 0xe + 0x2 * 0xa93) + parseInt(F(0x13f)) / (-0x228a * 0x1 + 0x785 + 0x1b0b * 0x1) * (-parseInt(F(0x146)) / (-0x60d * -0x6 + 0x3 * -0x2e9 + -0x1b8c)) + parseInt(F(0x154)) / (0x4f * -0x13 + -0x203b + 0x2620) * (parseInt(F(0x15f)) / (-0x2549 + 0xa12 * -0x1 + 0x7e6 * 0x6)) + parseInt(E(0x172)) / (-0x23c8 + 0x2a1 * -0xd + 0x45ff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x18de * 0xd5 + 0x13b205 + 0xe0903 * 0x1));
var __importDefault = this && this[G(0x151) + G(0x15b)] || function (c) {
    const I = H;
    return c && c[I(0x18d)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd * 0x212 + 0x1aec + 0x133);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        'getTime',
        'pHtjQ',
        '2jSOZfD',
        '__importDe',
        'KdyYk',
        'status',
        '8KDxrdI',
        'rofyc',
        'lYrBS',
        'CJdBU',
        'ENDING',
        '../../util',
        'AKxuY',
        'fault',
        'CANCELED_P',
        'null',
        'logger',
        '8289153uQiJUe',
        'filename',
        'indexOf',
        'findOne',
        'CfNcP',
        'canceled',
        'tuJtf',
        'value',
        'XVgZb',
        'ERR_NO_CAM',
        'aJzVn',
        'FOstR',
        'BNHIr',
        'tenantId',
        'start',
        '1113105EcbLEJ',
        'PvVpL',
        'oUZPs',
        'mimetype',
        '4416250Xkhoyv',
        'ixkcW',
        'update',
        'iwQtU',
        '5119460IWxtSV',
        'substr',
        'HEjgT',
        's/logger',
        'UCThc',
        'ATE_CAMPAI',
        'map',
        'pEcQe',
        'pending',
        'PAIGN_FOUN',
        'GN_NOT_IN_',
        'ls/Campaig',
        'BPPey',
        'split',
        'upDUX',
        '../../erro',
        'error',
        'where',
        'MQZef',
        '../../mode',
        'yPLiY',
        'ADZnT',
        'bjioz',
        '__esModule',
        'OHDQh',
        'erty',
        'rs/AppErro',
        'mediaUrl',
        'KgUVk',
        'vTTTp',
        'default',
        'cvbqJ',
        'XjuzB',
        'ysDbm',
        '3374724ElJRUt',
        'all',
        'lHZri',
        'Ztiqf',
        'length',
        'mYpJm',
        '1804401jDEjYL',
        '7oUvMst',
        '510199hKmUFw',
        'mediaType',
        'defineProp',
        'Lhass',
        'isArray',
        'ERR_NO_UPD',
        'reload'
    ];
    a = function () {
        return P;
    };
    return a();
}
const D = {};
D[H(0x166)] = !![], Object[H(0x149) + H(0x136)](exports, H(0x18d), D);
const AppError_1 = __importDefault(require(H(0x185) + H(0x137) + 'r')), Campaign_1 = __importDefault(require(G(0x189) + H(0x181) + 'n')), logger_1 = require(H(0x159) + H(0x179)), cArquivoName = d => {
        const J = H, K = H, e = {};
        e[J(0x152)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[J(0x183)]('/'), h = g[f[J(0x152)](g[K(0x143)], -0x1ba * -0xd + -0x26e8 + 0x34b * 0x5)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = H, M = H, j = {
                'tuJtf': L(0x14c) + M(0x17b) + L(0x180) + M(0x15c) + L(0x158),
                'ixkcW': function (p, q) {
                    return p === q;
                },
                'upDUX': M(0x170),
                'UCThc': L(0x13c),
                'aJzVn': function (p, q) {
                    return p !== q;
                },
                'KgUVk': M(0x14f),
                'ADZnT': L(0x144),
                'bjioz': M(0x16b),
                'ysDbm': function (p, q) {
                    return p !== q;
                },
                'iwQtU': M(0x156),
                'CfNcP': function (p, q) {
                    return p - q;
                },
                'XjuzB': function (p, q) {
                    return p(q);
                },
                'rofyc': L(0x17e),
                'AKxuY': M(0x164),
                'vTTTp': function (p, q) {
                    return p === q;
                },
                'BPPey': L(0x141),
                'XVgZb': M(0x157),
                'Ztiqf': L(0x16a),
                'yPLiY': function (p, q) {
                    return p === q;
                },
                'PvVpL': M(0x15d),
                'OHDQh': M(0x14a),
                'pEcQe': L(0x188),
                'HEjgT': M(0x168) + L(0x17f) + 'D'
            };
        let k, l = {
                ...f,
                'mediaUrl': j[M(0x13d)](cArquivoName, f[M(0x138)]),
                'start': f[M(0x16d)]
            };
        const m = {};
        m['id'] = h, m[M(0x16c)] = i;
        const n = {};
        n[M(0x187)] = m;
        const o = await Campaign_1[M(0x13b)][L(0x162)](n);
        if (j[M(0x169)](o?.[L(0x153)], j[M(0x155)]) && j[M(0x13e)](o?.[M(0x153)], j[M(0x15a)])) {
            if (j[L(0x13a)](j[M(0x182)], j[M(0x167)]))
                throw new n[(L(0x13b))](j[M(0x165)], -0x20c9 + -0x20e4 + 0x4341);
            else
                throw new AppError_1[(M(0x13b))](j[M(0x165)], 0x178b + -0x1 * 0x17cb + 0x9c * 0x3);
        }
        if (g && Array[L(0x14b)](g) && g[M(0x143)]) {
            if (j[L(0x13e)](j[M(0x142)], j[M(0x142)])) {
                if (!i[M(0x160)]) {
                    const s = o[L(0x171)][M(0x183)]('/')[0x2 * 0xaf6 + -0x5a * -0x6b + -0x3b89 * 0x1][M(0x183)](';')[-0x1 * 0x23e9 + 0x152d + 0xebc];
                    p[M(0x160)] = new q()[M(0x14e)]() + '.' + s;
                }
                m = n;
            } else
                await Promise[L(0x140)](g[M(0x17c)](async r => {
                    const N = L, O = M;
                    if (j[N(0x173)](j[N(0x184)], j[N(0x17a)])) {
                        const t = {};
                        return t[O(0x13b)] = j, g && h[O(0x18d)] ? i : t;
                    } else
                        try {
                            if (j[O(0x169)](j[N(0x139)], j[O(0x18b)])) {
                                if (!r[O(0x160)]) {
                                    if (j[O(0x169)](j[N(0x18c)], j[O(0x18c)])) {
                                        const u = { ...f };
                                        u[O(0x138)] = '', u[N(0x148)] = '', u = u;
                                    } else {
                                        const u = r[N(0x171)][N(0x183)]('/')[0x1288 + 0x2 * 0x2e5 + -0x1851][O(0x183)](';')[0x3de + 0x20 * 0x134 + -0x2a5e];
                                        r[O(0x160)] = new Date()[N(0x14e)]() + '.' + u;
                                    }
                                }
                                k = r;
                            } else
                                try {
                                    if (!q[N(0x160)]) {
                                        const w = w[N(0x171)][O(0x183)]('/')[-0x4d4 + 0x59 * 0x6d + -0x170 * 0x17][N(0x183)](';')[-0x19d7 + 0x10 * -0x18c + -0x59f * -0x9];
                                        x[N(0x160)] = new y()[N(0x14e)]() + '.' + w;
                                    }
                                    u = v;
                                } catch (x) {
                                    A[N(0x15e)][O(0x186)](x);
                                }
                        } catch (w) {
                            j[N(0x13e)](j[O(0x175)], j[O(0x175)]) ? e[O(0x15e)][O(0x186)](f) : logger_1[O(0x15e)][N(0x186)](w);
                        }
                })), l = {
                    ...f,
                    'mediaUrl': k?.[L(0x160)],
                    'mediaType': k?.[L(0x171)][M(0x177)](0x407 + 0x1103 + -0x150a * 0x1, k[L(0x171)][L(0x161)]('/'))
                };
        } else {
            if (j[M(0x18a)](f[L(0x138)], j[M(0x16f)])) {
                if (j[M(0x169)](j[L(0x135)], j[L(0x135)])) {
                    if (!e)
                        return '';
                    const s = f[M(0x183)]('/'), t = s[j[L(0x163)](s[L(0x143)], -0xbb4 + 0x3 * 0x97d + -0x10c2)];
                    return t;
                } else {
                    const s = { ...f };
                    s[L(0x138)] = '', s[M(0x148)] = '', l = s;
                }
            }
        }
        if (!o) {
            if (j[L(0x13a)](j[L(0x17d)], j[M(0x17d)]))
                throw new AppError_1[(L(0x13b))](j[L(0x178)], 0xa3 * 0x2b + 0xf06 * -0x1 + -0xac7);
            else {
                const u = f[M(0x171)][L(0x183)]('/')[-0x86e + -0x2 * -0xf23 + -0x15d7][L(0x183)](';')[-0xd * 0x5c + -0x3 * 0x2f5 + 0xd8b];
                g[M(0x160)] = new h()[M(0x14e)]() + '.' + u;
            }
        }
        return await o[L(0x174)](l), await o[M(0x14d)](), o;
    };
exports[G(0x13b)] = UpdateCampaignService;