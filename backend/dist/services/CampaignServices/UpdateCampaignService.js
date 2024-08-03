'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x1fa)) / (0x31 * 0x2b + -0x144a + 0xc10) + -parseInt(F(0x1df)) / (0x17 * 0x85 + -0xefa + 0x309) + parseInt(F(0x1f2)) / (-0x9 * -0x28b + 0x1 * -0x8fe + -0xde2) + -parseInt(E(0x1cc)) / (-0x978 + 0x1f4b * 0x1 + -0x3 * 0x745) * (-parseInt(F(0x1f3)) / (-0x16cb + 0x536 * 0x3 + 0x72e)) + -parseInt(F(0x1b0)) / (-0x234d + 0x64 + 0x22ef) * (parseInt(E(0x1b6)) / (-0x14a0 + -0x149 * 0x11 + 0x2a80)) + parseInt(E(0x1f9)) / (0x6c4 * -0x2 + 0x1e * -0x32 + 0x16 * 0xe2) + -parseInt(F(0x1fb)) / (-0x1 * 0x53 + 0x4d * -0x3e + 0x1302 * 0x1) * (-parseInt(F(0x204)) / (0x6e * 0xb + 0x21a3 + -0x2653));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xa0fe5 + -0x1 * -0x68476 + 0x109709 * 0x1));
var __importDefault = this && this[G(0x1ab) + H(0x1c6)] || function (c) {
    const I = G;
    return c && c[I(0x1fd)] ? c : { 'default': c };
};
const D = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1eab + -0x2 * 0xc37 + 0x2 * -0x24b);
        let h = e[f];
        return h;
    }, b(c, d);
}
D[H(0x1d9)] = !![], Object[H(0x1ad) + G(0x1a7)](exports, H(0x1fd), D);
const AppError_1 = __importDefault(require(G(0x1c9) + H(0x1cb) + 'r')), Campaign_1 = __importDefault(require(H(0x1d2) + H(0x1d0) + 'n')), logger_1 = require(G(0x1d5) + G(0x1d3)), cArquivoName = d => {
        const J = G, K = G, e = {};
        e[J(0x1e0)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[K(0x1d4)]('/'), h = g[f[J(0x1e0)](g[J(0x206)], 0x821 * -0x1 + -0x1 * 0x39e + 0xbc0)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = G, M = G, j = {
                'JGKfj': L(0x203) + M(0x1e2) + 'D',
                'azKcV': function (p, q) {
                    return p === q;
                },
                'WIgnF': L(0x1c4),
                'bcRVk': function (p, q) {
                    return p !== q;
                },
                'sSlii': L(0x1dd),
                'ZPqvL': function (p, q) {
                    return p !== q;
                },
                'eaPyv': M(0x1a8),
                'bJtNh': M(0x1b4),
                'TwrES': function (p, q) {
                    return p !== q;
                },
                'OzqPf': L(0x1e7),
                'UDbOW': L(0x1e9),
                'pYdKj': L(0x1f7) + M(0x1f4) + M(0x1cf) + L(0x1c0) + M(0x1b2),
                'GtZMF': function (p, q) {
                    return p(q);
                },
                'Cugvw': function (p, q) {
                    return p !== q;
                },
                'gqcpJ': M(0x1b8),
                'tbgLG': function (p, q) {
                    return p !== q;
                },
                'YgLjI': L(0x1b7),
                'qWtwN': function (p, q) {
                    return p !== q;
                },
                'IRxsq': M(0x1bf),
                'tqkGr': M(0x1b5),
                'KZNGn': L(0x1e1),
                'nfXvq': function (p, q) {
                    return p === q;
                },
                'PqNEy': M(0x1af),
                'vrrWj': L(0x205),
                'nZWdL': M(0x1be),
                'iSsyo': function (p, q) {
                    return p === q;
                },
                'VjWCw': L(0x1e6),
                'djoce': M(0x1bb)
            };
        let k, l = {
                ...f,
                'mediaUrl': j[M(0x1ea)](cArquivoName, f[L(0x1cd)]),
                'start': f[L(0x1f6)]
            };
        const m = {};
        m['id'] = h, m[M(0x1b9)] = i;
        const n = {};
        n[L(0x1ac)] = m;
        const o = await Campaign_1[M(0x201)][L(0x1ba)](n);
        if (j[M(0x1ec)](o?.[M(0x1eb)], j[L(0x1bc)]) && j[M(0x1ae)](o?.[M(0x1eb)], j[M(0x1c5)])) {
            if (j[L(0x1f8)](j[L(0x1a9)], j[M(0x1a9)])) {
                const q = { ...f };
                q[M(0x1cd)] = '', q[M(0x1de)] = '', q = q;
            } else
                throw new AppError_1[(L(0x201))](j[M(0x1c8)], -0x125d + 0x19f * 0x11 + -0x79e);
        }
        if (g && Array[L(0x1ef)](g) && g[M(0x206)]) {
            if (j[M(0x1c1)](j[M(0x1f5)], j[M(0x1c3)]))
                throw new n[(M(0x201))](j[L(0x1ce)], 0x27 * 0xc1 + 0x2f1 * 0xa + -0x393d);
            else
                await Promise[M(0x1c2)](g[L(0x1e8)](async r => {
                    const N = M, O = M;
                    if (j[N(0x1c1)](j[O(0x1bd)], j[O(0x1bd)]))
                        try {
                            if (j[N(0x1ee)](j[N(0x1f0)], j[O(0x1f0)])) {
                                if (!i[N(0x1db)]) {
                                    const t = o[O(0x1aa)][N(0x1d4)]('/')[0x172f + 0x226c + -0x399a][O(0x1d4)](';')[-0x10e + 0x2f * -0x3a + 0x5da * 0x2];
                                    p[N(0x1db)] = new q()[O(0x1da)]() + '.' + t;
                                }
                                m = n;
                            } else {
                                if (!r[N(0x1db)]) {
                                    if (j[N(0x1b1)](j[O(0x1ca)], j[O(0x1ff)])) {
                                        const t = r[O(0x1aa)][O(0x1d4)]('/')[0x80a + -0x182b + -0x5 * -0x33a][N(0x1d4)](';')[-0x49a + -0x27 * -0x10 + 0x22a];
                                        r[O(0x1db)] = new Date()[N(0x1da)]() + '.' + t;
                                    } else {
                                        const v = {};
                                        return v[O(0x201)] = j, g && h[O(0x1fd)] ? i : v;
                                    }
                                }
                                k = r;
                            }
                        } catch (v) {
                            if (j[N(0x1e5)](j[N(0x202)], j[O(0x1d1)]))
                                logger_1[N(0x1fe)][N(0x1d6)](v);
                            else
                                try {
                                    if (!q[N(0x1db)]) {
                                        const x = w[N(0x1aa)][O(0x1d4)]('/')[-0x6a * 0x1f + -0x1 * 0x1d99 + 0x2a70][O(0x1d4)](';')[-0x2 * -0x917 + 0x1ef1 + -0x311f * 0x1];
                                        x[O(0x1db)] = new y()[N(0x1da)]() + '.' + x;
                                    }
                                    u = v;
                                } catch (y) {
                                    A[N(0x1fe)][N(0x1d6)](y);
                                }
                        }
                    else {
                        const y = f[O(0x1aa)][O(0x1d4)]('/')[-0x40f * -0x8 + -0x1 * 0x23f9 + 0x1c1 * 0x2][O(0x1d4)](';')[0x75e + -0x1bdc * 0x1 + -0x1 * -0x147e];
                        g[O(0x1db)] = new h()[N(0x1da)]() + '.' + y;
                    }
                })), l = {
                    ...f,
                    'mediaUrl': k?.[M(0x1db)],
                    'mediaType': k?.[L(0x1aa)][M(0x1c7)](-0x2345 * -0x1 + 0x1 * -0x1f87 + -0x3be, k[M(0x1aa)][M(0x1ed)]('/'))
                };
        } else {
            if (j[M(0x200)](f[L(0x1cd)], j[L(0x1fc)])) {
                if (j[M(0x1c1)](j[M(0x1d8)], j[L(0x1f1)]))
                    throw new n[(M(0x201))](j[L(0x1c8)], -0x669 + -0x1 * 0x24e + -0x1 * -0xa4b);
                else {
                    const s = { ...f };
                    s[M(0x1cd)] = '', s[L(0x1de)] = '', l = s;
                }
            }
        }
        if (!o) {
            if (j[L(0x1d7)](j[L(0x1e4)], j[L(0x1b3)]))
                e[L(0x1fe)][M(0x1d6)](f);
            else
                throw new AppError_1[(L(0x201))](j[L(0x1ce)], -0x15d + -0x1b63 + -0x1e54 * -0x1);
        }
        return await o[L(0x1dc)](l), await o[L(0x1e3)](), o;
    };
function a() {
    const P = [
        '102bmaviq',
        'ZPqvL',
        'ENDING',
        'djoce',
        'tOmyQ',
        'gAeKI',
        '125027ZEVAJv',
        'canceled',
        'pending',
        'tenantId',
        'findOne',
        'WDFar',
        'gqcpJ',
        'WIgnF',
        'irgnb',
        'KmCOn',
        'CANCELED_P',
        'azKcV',
        'all',
        'KZNGn',
        'zmObC',
        'YgLjI',
        'fault',
        'substr',
        'pYdKj',
        '../../erro',
        'eaPyv',
        'rs/AppErro',
        '55912SMgFQY',
        'mediaUrl',
        'JGKfj',
        'GN_NOT_IN_',
        'ls/Campaig',
        'UDbOW',
        '../../mode',
        's/logger',
        'split',
        '../../util',
        'error',
        'iSsyo',
        'vrrWj',
        'value',
        'getTime',
        'filename',
        'update',
        'GIFZy',
        'mediaType',
        '1195150OSvFXV',
        'qAmXf',
        'GmhwV',
        'PAIGN_FOUN',
        'reload',
        'VjWCw',
        'TwrES',
        'woRcl',
        'YAZuZ',
        'map',
        'GWokA',
        'GtZMF',
        'status',
        'Cugvw',
        'indexOf',
        'bcRVk',
        'isArray',
        'sSlii',
        'nZWdL',
        '3591285vGyKlx',
        '315VPtXFp',
        'ATE_CAMPAI',
        'tqkGr',
        'start',
        'ERR_NO_UPD',
        'qWtwN',
        '6243248VmtVgW',
        '1585206rIqyyE',
        '99TqfOyH',
        'PqNEy',
        '__esModule',
        'logger',
        'bJtNh',
        'nfXvq',
        'default',
        'OzqPf',
        'ERR_NO_CAM',
        '439310jLhNOa',
        'lqAAe',
        'length',
        'erty',
        'uALOJ',
        'IRxsq',
        'mimetype',
        '__importDe',
        'where',
        'defineProp',
        'tbgLG',
        'null'
    ];
    a = function () {
        return P;
    };
    return a();
}
exports[G(0x201)] = UpdateCampaignService;