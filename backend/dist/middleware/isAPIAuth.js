'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xbab + 0x93 * 0x43 + 0x2 * -0xd28);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        '3322745tDOpWH',
        '18jDlLId',
        'tenantId',
        'AzqBi',
        '292NqpLZk',
        'ion',
        'fXxrn',
        'secret',
        '1160350fSZaib',
        'apiId',
        'zFiDU',
        'AppError',
        '__importDe',
        '../errors/',
        '../config/',
        '264509uZweza',
        'auth',
        'not\x20provid',
        'XzoLC',
        'ken.',
        'erty',
        'APIAuth',
        'GozBH',
        'sessionId',
        '810997aZGOby',
        'Invalid\x20to',
        'defineProp',
        '50346KtSqqJ',
        'fault',
        'authorizat',
        'TQFPh',
        'XWbjR',
        '__esModule',
        'rDLXP',
        'nFtLa',
        '14588864EScPVC',
        '174mAWRrv',
        'WvVxS',
        'GfvMz',
        'Token\x20was\x20',
        'aRnkG',
        'default',
        'CeXYw',
        'ZhxLM',
        'ed.',
        '11377890UlJvXs',
        'headers',
        'split',
        'value',
        'jsonwebtok',
        'verify'
    ];
    a = function () {
        return I;
    };
    return a();
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xac)) / (0x14fc + -0x7 * 0x13f + -0xc42) + parseInt(B(0x9c)) / (-0x164 * -0x1 + 0xfb5 * -0x2 + 0x1e08) + -parseInt(B(0xaf)) / (-0xf23 * -0x2 + -0x130a + -0xb39) * (-parseInt(C(0x98)) / (-0x79a + -0x2060 + -0x13ff * -0x2)) + -parseInt(B(0x94)) / (-0x11 * 0x1f7 + 0xc69 * 0x1 + 0x1e9 * 0xb) + -parseInt(B(0x85)) / (0xbbd + -0x3 * -0x125 + -0xf26) * (-parseInt(B(0xa3)) / (0x818 + 0x1 * 0x23ad + -0x2bbe)) + parseInt(B(0x84)) / (0x3ae + -0x217a + 0x1dd4) + parseInt(B(0x95)) / (0x3e * 0x95 + -0x1 * -0xc0d + -0x301a) * (-parseInt(B(0x8e)) / (0x397 * 0xa + -0xc25 + -0x17b7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2f * 0x8780 + 0x19a3 * -0xe5 + 0xce94f));
var __importDefault = this && this[D(0xa0) + E(0xb0)] || function (c) {
    const F = E;
    return c && c[F(0x81)] ? c : { 'default': c };
};
const A = {};
A[D(0x91)] = !![], Object[E(0xae) + E(0xa8)](exports, E(0x81), A);
const jsonwebtoken_1 = require(E(0x92) + 'en'), AppError_1 = __importDefault(require(E(0xa1) + E(0x9f))), auth_1 = __importDefault(require(D(0xa2) + D(0xa4))), isAPIAuth = (d, e, f) => {
        const G = E, H = D, g = {
                'TQFPh': G(0xad) + G(0xa7),
                'GozBH': G(0x88) + H(0xa5) + H(0x8d),
                'AzqBi': function (j, k) {
                    return j === k;
                },
                'CeXYw': G(0x8c),
                'XzoLC': H(0x89),
                'WvVxS': H(0x83),
                'zFiDU': H(0x82),
                'XWbjR': H(0x87),
                'fXxrn': function (j) {
                    return j();
                }
            }, h = d[G(0x8f)][G(0x7e) + H(0x99)];
        if (!h) {
            if (g[G(0x97)](g[H(0x8b)], g[G(0xa6)]))
                throw new d[(G(0x8a))](g[G(0x7f)], 0x1 * 0x24a3 + 0x1878 + 0xa * -0x5f4);
            else
                throw new AppError_1[(H(0x8a))](g[H(0xaa)], 0x1 * 0x1633 + 0x2 * 0x4c0 + -0x1e20);
        }
        const [, i] = h[H(0x90)]('\x20');
        try {
            if (g[G(0x97)](g[H(0x86)], g[H(0x86)])) {
                const k = (-0x810 + 0x1 * 0x76e + 0xa2, jsonwebtoken_1[G(0x93)])(i, auth_1[H(0x8a)][G(0x9b)]), {
                        apiId: l,
                        sessionId: m,
                        tenantId: n
                    } = k, o = {};
                o[G(0x9d)] = l, o[H(0xab)] = m, o[H(0x96)] = n, d[H(0xa9)] = o;
            } else
                throw new d[(H(0x8a))](g[G(0xaa)], -0x5a5 + 0x1421 + -0xce9);
        } catch (q) {
            if (g[G(0x97)](g[H(0x9e)], g[H(0x80)])) {
                const s = {};
                return s[G(0x8a)] = j, g && h[H(0x81)] ? i : s;
            } else
                throw new AppError_1[(G(0x8a))](g[H(0x7f)], -0x13fe * -0x1 + -0x1c43 * 0x1 + 0x9d8);
        }
        return g[G(0x9a)](f);
    };
exports[E(0x8a)] = isAPIAuth;