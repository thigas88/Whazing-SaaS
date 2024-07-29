'use strict';
const G = b, H = b;
function a() {
    const P = [
        'cEcsy',
        'reload',
        'nFajf',
        '__esModule',
        's/logger',
        'EmKyz',
        'JeiBW',
        'BrwZe',
        'OTpdW',
        '179240EOzLzr',
        '__importDe',
        'value',
        'mimetype',
        'getTime',
        'logger',
        'GjZEm',
        '101577ymQxyn',
        'split',
        'findOne',
        '645909SqiHWs',
        'ATE_CAMPAI',
        '27MIlypN',
        'null',
        'vGTVg',
        'fault',
        'AJBGI',
        'azkfY',
        'start',
        'tenantId',
        'CANCELED_P',
        'qSBgi',
        '266187vPXteR',
        'default',
        'sOgIQ',
        'indexOf',
        'PAIGN_FOUN',
        'where',
        'CYvfS',
        'canceled',
        'TYxHP',
        'CPjiT',
        'ERR_NO_UPD',
        'ToZcE',
        'rs/AppErro',
        'goNUe',
        'filename',
        'length',
        'HnqKL',
        'status',
        'qKLGA',
        'update',
        'YZTJB',
        'substr',
        'ERR_NO_CAM',
        'gBdSl',
        '../../mode',
        'ls/Campaig',
        '248610XbZEkI',
        'BZdRc',
        'ByKJe',
        'erty',
        'pending',
        'nhQUR',
        'XUzxG',
        'all',
        'fWUxd',
        '2OKjhUf',
        '25HgQJrx',
        '309420UMdEoH',
        'defineProp',
        'XBbnF',
        'Cstvc',
        'nLxJR',
        'MMvLT',
        'yqmHp',
        '76XnuObX',
        'eclzw',
        'DPhzF',
        'error',
        'TXeZT',
        '../../util',
        'GN_NOT_IN_',
        'map',
        '../../erro',
        'lVfgM',
        'Vmvkf',
        'pghDb',
        'mediaUrl',
        'rrbGg',
        'isArray',
        'WCCXv',
        'XHGIa',
        'ENDING',
        '630854whEIvC',
        'TsAwG',
        'iChKP',
        'CjhGy',
        'mediaType',
        'MCTfX'
    ];
    a = function () {
        return P;
    };
    return a();
}
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x1f7)) / (0x2 * -0x1065 + 0x542 * 0x2 + 0x1647) * (parseInt(F(0x1b7)) / (-0x6f * 0x49 + -0x943 + -0x1476 * -0x2)) + parseInt(F(0x1e8)) / (-0x208a + 0x1cfd + 0x390) * (parseInt(E(0x1c0)) / (0x1b4f * -0x1 + -0x14a0 + 0x2ff3)) + parseInt(F(0x1b8)) / (-0x1114 * -0x1 + 0xdee + -0x1efd * 0x1) * (parseInt(E(0x1ae)) / (0x1 * -0x46a + -0xb2e + 0xf9e)) + -parseInt(E(0x1d2)) / (0x290 + -0x6e0 + 0x457) + -parseInt(E(0x1e1)) / (0x21fc + -0x10fb + -0x4f * 0x37) * (parseInt(E(0x1ed)) / (0x1283 + -0x425 + 0x3 * -0x4c7)) + -parseInt(E(0x1b9)) / (0x1b29 + 0x21 * -0x36 + -0x1 * 0x1429) + -parseInt(F(0x1eb)) / (0x133b + -0x17ba + 0x48a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x48d7f + -0x4f3e0 + 0xea6fe));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a0 + -0x29 * 0xf1 + 0x29ce);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[G(0x1e2) + H(0x1f0)] || function (c) {
    const I = G;
    return c && c[I(0x1db)] ? c : { 'default': c };
};
const D = {};
D[G(0x1e3)] = !![], Object[H(0x1ba) + G(0x1b1)](exports, G(0x1db), D);
const AppError_1 = __importDefault(require(H(0x1c8) + G(0x1a0) + 'r')), Campaign_1 = __importDefault(require(G(0x1ac) + G(0x1ad) + 'n')), logger_1 = require(H(0x1c5) + G(0x1dc)), cArquivoName = d => {
        const J = G, K = H, e = {};
        e[J(0x19a)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[J(0x1e9)]('/'), h = g[f[J(0x19a)](g[K(0x1a3)], -0x112f + -0x9 * -0x3be + -0x107e)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = G, M = H, j = {
                'TYxHP': L(0x1aa) + L(0x198) + 'D',
                'nhQUR': function (p, q) {
                    return p === q;
                },
                'GjZEm': M(0x1af),
                'goNUe': L(0x1cd),
                'OTpdW': function (p, q) {
                    return p !== q;
                },
                'qKLGA': M(0x1bb),
                'vGTVg': M(0x1b4),
                'lVfgM': function (p, q) {
                    return p !== q;
                },
                'nLxJR': L(0x1dd),
                'BrwZe': L(0x1c4),
                'MCTfX': function (p, q) {
                    return p !== q;
                },
                'fWUxd': M(0x1d5),
                'HnqKL': M(0x1d8),
                'sOgIQ': M(0x19e) + L(0x1ec) + L(0x1c6) + M(0x1f5) + L(0x1d1),
                'DPhzF': function (p, q) {
                    return p - q;
                },
                'ByKJe': function (p, q) {
                    return p(q);
                },
                'eclzw': M(0x1b2),
                'iChKP': function (p, q) {
                    return p !== q;
                },
                'TsAwG': M(0x19b),
                'JeiBW': L(0x1bc),
                'ToZcE': M(0x1cf),
                'AJBGI': function (p, q) {
                    return p === q;
                },
                'gBdSl': M(0x1a8),
                'qSBgi': M(0x1ee),
                'MMvLT': M(0x1cb),
                'azkfY': function (p, q) {
                    return p !== q;
                },
                'yqmHp': L(0x1da),
                'Vmvkf': M(0x1d0)
            };
        let k, l = {
                ...f,
                'mediaUrl': j[M(0x1b0)](cArquivoName, f[L(0x1cc)]),
                'start': f[M(0x1f3)]
            };
        const m = {};
        m['id'] = h, m[M(0x1f4)] = i;
        const n = {};
        n[M(0x199)] = m;
        const o = await Campaign_1[M(0x195)][M(0x1ea)](n);
        if (j[M(0x1c9)](o?.[M(0x1a5)], j[M(0x1c1)]) && j[M(0x1d4)](o?.[M(0x1a5)], j[M(0x1d3)])) {
            if (j[M(0x1b3)](j[M(0x1de)], j[L(0x19f)])) {
                const q = {};
                return q[L(0x195)] = j, g && h[M(0x1db)] ? i : q;
            } else
                throw new AppError_1[(M(0x195))](j[L(0x196)], 0x6 * 0x1d + 0x181f + -0x4a5 * 0x5);
        }
        if (g && Array[L(0x1ce)](g) && g[M(0x1a3)]) {
            if (j[L(0x1f1)](j[M(0x1ab)], j[M(0x1ab)]))
                await Promise[M(0x1b5)](g[M(0x1c7)](async q => {
                    const N = M, O = L, r = {};
                    r[N(0x19d)] = j[N(0x19c)];
                    const s = r;
                    if (j[N(0x1b3)](j[N(0x1e7)], j[N(0x1a1)])) {
                        const u = f[O(0x1e4)][O(0x1e9)]('/')[0x819 + -0x3 * 0xca + -0x5ba][N(0x1e9)](';')[0x201 + 0x1c * 0x85 + -0x1 * 0x108d];
                        g[N(0x1a2)] = new h()[O(0x1e5)]() + '.' + u;
                    } else
                        try {
                            if (j[O(0x1e0)](j[N(0x1a6)], j[N(0x1ef)])) {
                                if (!q[N(0x1a2)]) {
                                    if (j[O(0x1c9)](j[N(0x1bd)], j[N(0x1df)])) {
                                        const u = q[N(0x1e4)][N(0x1e9)]('/')[0x1b72 + 0x1 * 0x593 + -0x841 * 0x4][N(0x1e9)](';')[-0x139 * 0xa + -0x231e + 0x2f58];
                                        q[O(0x1a2)] = new Date()[O(0x1e5)]() + '.' + u;
                                    } else
                                        r[N(0x1e6)][N(0x1c3)](f);
                                }
                                k = q;
                            } else {
                                if (!i[O(0x1a2)]) {
                                    const x = o[O(0x1e4)][N(0x1e9)]('/')[0x1f * -0x106 + -0x1f0 + 0x21ab][N(0x1e9)](';')[-0x11 * -0x13f + -0x7 * 0x3b0 + 0x4a1];
                                    p[O(0x1a2)] = new q()[O(0x1e5)]() + '.' + x;
                                }
                                m = n;
                            }
                        } catch (x) {
                            if (j[N(0x1d7)](j[O(0x1b6)], j[N(0x1a4)]))
                                logger_1[N(0x1e6)][N(0x1c3)](x);
                            else
                                throw new n[(N(0x195))](s[N(0x19d)], 0x23b1 * 0x1 + 0x2b9 * 0x1 + -0x19a * 0x17);
                        }
                })), l = {
                    ...f,
                    'mediaUrl': k?.[L(0x1a2)],
                    'mediaType': k?.[L(0x1e4)][M(0x1a9)](-0xabd * -0x3 + 0x162b + -0x3662, k[L(0x1e4)][L(0x197)]('/'))
                };
            else
                throw new n[(L(0x195))](j[L(0x196)], 0x312 + -0x2666 + 0x4 * 0x93a);
        } else {
            if (j[L(0x1f1)](f[L(0x1cc)], j[M(0x1f6)])) {
                if (j[M(0x1f1)](j[L(0x1be)], j[M(0x1be)])) {
                    const r = { ...f };
                    r[M(0x1cc)] = '', r[M(0x1d6)] = '', l = r;
                } else {
                    if (!e)
                        return '';
                    const t = f[M(0x1e9)]('/'), u = t[j[M(0x1c2)](t[L(0x1a3)], 0x1e1a * -0x1 + -0x1 * 0x24ad + 0x42c8)];
                    return u;
                }
            }
        }
        if (!o) {
            if (j[M(0x1f2)](j[L(0x1bf)], j[L(0x1ca)]))
                throw new AppError_1[(M(0x195))](j[M(0x19c)], 0x19d2 + 0x1d8b + -0x7af * 0x7);
            else
                try {
                    if (!q[M(0x1a2)]) {
                        const u = w[M(0x1e4)][L(0x1e9)]('/')[0x4 * -0x4b5 + -0x1 * 0x11df + 0x24b4][M(0x1e9)](';')[-0x3 * 0xc43 + 0x170b + 0xdbe];
                        x[M(0x1a2)] = new y()[M(0x1e5)]() + '.' + u;
                    }
                    u = v;
                } catch (v) {
                    A[L(0x1e6)][M(0x1c3)](v);
                }
        }
        return await o[L(0x1a7)](l), await o[M(0x1d9)](), o;
    };
exports[G(0x195)] = UpdateCampaignService;