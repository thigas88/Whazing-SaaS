'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x148d + -0x1531 + 0x19e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const G = b, H = b;
function a() {
    const P = [
        'findOne',
        '68596UOVwmG',
        'HuxQn',
        'CANCELED_P',
        '../../erro',
        'tenantId',
        'wTzXi',
        'jXCCH',
        '9PWSLRB',
        'hcFeM',
        'ls/Campaig',
        'rxOGg',
        'QnPoW',
        '47812MwFjfU',
        '202329fzvkzV',
        'error',
        '3519948mBAsdw',
        'gsADB',
        '../../util',
        'SWpPL',
        'isArray',
        'ZFxcw',
        'defineProp',
        'reload',
        'map',
        'ATE_CAMPAI',
        'mDiPy',
        'yoqWi',
        'mimetype',
        'eJsVL',
        '10cQhcJK',
        '__importDe',
        'PlXnR',
        'GN_NOT_IN_',
        'WTjuM',
        'status',
        'ERR_NO_CAM',
        'getTime',
        'update',
        'filename',
        'nqPNp',
        'ZQcCr',
        'indexOf',
        'pending',
        's/logger',
        'ERR_NO_UPD',
        'erty',
        'oatdG',
        'fault',
        '54770kHHoJi',
        'mediaUrl',
        'MgkSH',
        'canceled',
        'tZhBN',
        'trsFM',
        'bDfPd',
        'bwvbD',
        'njcNG',
        'pDCXZ',
        'OLoyj',
        'where',
        'KbZAp',
        '1955789bPHKUd',
        '2107EJyVPx',
        'hMHuQ',
        'value',
        'OCvkD',
        '6BCOQuP',
        'length',
        'vqFAr',
        'substr',
        'ZtzEV',
        'PAIGN_FOUN',
        'PSIZO',
        'start',
        'iHePB',
        'eedtf',
        'VqAQs',
        '184rYKklo',
        'default',
        '__esModule',
        'logger',
        'split',
        'JQvSn',
        'blfrf',
        'all',
        'AWYjy',
        '../../mode',
        'rs/AppErro',
        'tGObS',
        'mediaType',
        'null',
        'ENDING',
        '1iYmuKa'
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
            const f = -parseInt(E(0x103)) / (0x3 * -0x907 + -0x14 * 0x1ab + 0x3c72) * (-parseInt(E(0x105)) / (0x3a4 + 0x13c * 0x1f + -0x1 * 0x29e6)) + -parseInt(E(0x10c)) / (0x202c + -0x7b * -0x2e + -0x3643) * (parseInt(F(0x111)) / (0x1930 + 0x1f85 * 0x1 + -0x38b1)) + parseInt(E(0x135)) / (-0x1 * -0x590 + 0xd14 + -0x129f) * (-parseInt(F(0x147)) / (0x9 * 0x153 + -0x11e7 * 0x2 + -0x17e9 * -0x1)) + -parseInt(F(0x143)) / (-0x1589 + 0x1e6b + -0x8db) * (-parseInt(E(0x152)) / (-0x936 + -0x4 * -0x3af + -0x57e)) + -parseInt(E(0x112)) / (0x13bf + 0x161b + -0x85d * 0x5) * (-parseInt(E(0x122)) / (0xf12 + -0x843 + -0x6c5)) + -parseInt(F(0x142)) / (0xbad + 0x2c1 + -0xe63) + parseInt(F(0x114)) / (0x2 * -0xe09 + -0x4a1 * 0x7 + 0x3c85);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xfbda + -0x968 + -0x12fd * -0x29));
var __importDefault = this && this[G(0x123) + G(0x134)] || function (c) {
    const I = H;
    return c && c[I(0x154)] ? c : { 'default': c };
};
const D = {};
D[G(0x145)] = !![], Object[H(0x11a) + G(0x132)](exports, G(0x154), D);
const AppError_1 = __importDefault(require(G(0x108) + H(0xfe) + 'r')), Campaign_1 = __importDefault(require(G(0xfd) + H(0x10e) + 'n')), logger_1 = require(G(0x116) + H(0x130)), cArquivoName = d => {
        const J = H, K = G, e = {};
        e[J(0x10f)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[K(0x156)]('/'), h = g[f[J(0x10f)](g[J(0x148)], -0xc3b + -0x772 + 0x13ae)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = H, M = G, j = {
                'mDiPy': L(0x131) + M(0x11d) + M(0x125) + L(0x107) + L(0x102),
                'SWpPL': M(0x128) + L(0x14c) + 'D',
                'OLoyj': function (p, q) {
                    return p !== q;
                },
                'ZQcCr': M(0x13c),
                'tZhBN': M(0xff),
                'eedtf': function (p, q) {
                    return p === q;
                },
                'ZFxcw': L(0x106),
                'hMHuQ': function (p, q) {
                    return p !== q;
                },
                'PlXnR': L(0x13e),
                'eJsVL': L(0x157),
                'QnPoW': L(0x13d),
                'yoqWi': function (p, q) {
                    return p - q;
                },
                'ZtzEV': function (p, q) {
                    return p(q);
                },
                'VqAQs': function (p, q) {
                    return p !== q;
                },
                'bDfPd': M(0x12f),
                'PSIZO': M(0x138),
                'gsADB': M(0x126),
                'OCvkD': L(0x149),
                'AWYjy': function (p, q) {
                    return p === q;
                },
                'blfrf': L(0x101),
                'wTzXi': function (p, q) {
                    return p === q;
                },
                'MgkSH': L(0x10d),
                'KbZAp': M(0x133),
                'iHePB': M(0x12c)
            };
        let k, l = {
                ...f,
                'mediaUrl': j[M(0x14b)](cArquivoName, f[L(0x136)]),
                'start': f[L(0x14e)]
            };
        const m = {};
        m['id'] = h, m[M(0x109)] = i;
        const n = {};
        n[L(0x140)] = m;
        const o = await Campaign_1[L(0x153)][L(0x104)](n);
        if (j[M(0x151)](o?.[L(0x127)], j[M(0x13b)]) && j[M(0x144)](o?.[M(0x127)], j[L(0x14d)])) {
            if (j[L(0x150)](j[L(0x115)], j[M(0x115)]))
                throw new AppError_1[(L(0x153))](j[L(0x11e)], -0x1b78 + -0x7 * -0x355 + -0x125 * -0x5);
            else {
                const q = {};
                return q[L(0x153)] = j, g && h[L(0x154)] ? i : q;
            }
        }
        if (g && Array[M(0x118)](g) && g[L(0x148)]) {
            if (j[M(0x151)](j[M(0x146)], j[L(0x146)])) {
                const r = f[L(0x120)][L(0x156)]('/')[-0x79 * -0x26 + 0x187b + -0x2a70][M(0x156)](';')[-0x1cff + 0xd4f + 0xfb0];
                g[M(0x12b)] = new h()[L(0x129)]() + '.' + r;
            } else
                await Promise[L(0xfb)](g[L(0x11c)](async r => {
                    const N = M, O = L, s = {};
                    s[N(0x10b)] = j[N(0x11e)], s[O(0x13a)] = j[O(0x117)];
                    const t = s;
                    if (j[N(0x13f)](j[O(0x12d)], j[O(0x139)]))
                        try {
                            if (j[O(0x150)](j[O(0x119)], j[O(0x119)])) {
                                if (!r[O(0x12b)]) {
                                    if (j[O(0x144)](j[O(0x124)], j[N(0x121)])) {
                                        const u = r[N(0x120)][N(0x156)]('/')[-0x119 + -0xfc3 * -0x1 + -0xea9][O(0x156)](';')[0x144c * -0x1 + -0x24b1 + -0x12ff * -0x3];
                                        r[O(0x12b)] = new Date()[N(0x129)]() + '.' + u;
                                    } else
                                        try {
                                            if (!q[O(0x12b)]) {
                                                const w = w[O(0x120)][N(0x156)]('/')[0x6 * -0x40e + 0x1b78 + -0x323][N(0x156)](';')[0x463 * 0x1 + -0x218 * 0x4 + 0x1 * 0x3fd];
                                                x[O(0x12b)] = new y()[N(0x129)]() + '.' + w;
                                            }
                                            u = v;
                                        } catch (x) {
                                            A[N(0x155)][O(0x113)](x);
                                        }
                                }
                                k = r;
                            } else
                                throw new n[(O(0x153))](t[O(0x10b)], 0x1 * -0x1afa + -0x9 * -0x2d9 + -0x1 * -0x2ed);
                        } catch (x) {
                            j[O(0x13f)](j[N(0x110)], j[O(0x110)]) ? s[N(0x155)][N(0x113)](f) : logger_1[N(0x155)][N(0x113)](x);
                        }
                    else
                        throw new n[(O(0x153))](t[O(0x13a)], -0x208b + 0x1ba + -0x1 * -0x2065);
                })), l = {
                    ...f,
                    'mediaUrl': k?.[L(0x12b)],
                    'mediaType': k?.[M(0x120)][L(0x14a)](-0x334 + 0x375 + 0x41 * -0x1, k[L(0x120)][L(0x12e)]('/'))
                };
        } else {
            if (j[M(0xfc)](f[M(0x136)], j[L(0xfa)])) {
                if (j[M(0x10a)](j[L(0x137)], j[L(0x141)])) {
                    if (!e)
                        return '';
                    const s = f[L(0x156)]('/'), t = s[j[M(0x11f)](s[M(0x148)], 0xd93 + -0x3e7 + -0x9ab)];
                    return t;
                } else {
                    const s = { ...f };
                    s[L(0x136)] = '', s[L(0x100)] = '', l = s;
                }
            }
        }
        if (!o) {
            if (j[L(0xfc)](j[M(0x14f)], j[M(0x14f)]))
                throw new AppError_1[(L(0x153))](j[M(0x117)], 0x4d7 + 0xfb * 0x7 + -0xa20);
            else {
                if (!i[L(0x12b)]) {
                    const u = o[M(0x120)][L(0x156)]('/')[-0x53 * 0x1 + -0x1 * 0xdf + 0x133][L(0x156)](';')[0x325 + -0x3b * 0xe + 0x15];
                    p[L(0x12b)] = new q()[M(0x129)]() + '.' + u;
                }
                m = n;
            }
        }
        return await o[L(0x12a)](l), await o[L(0x11b)](), o;
    };
exports[H(0x153)] = UpdateCampaignService;