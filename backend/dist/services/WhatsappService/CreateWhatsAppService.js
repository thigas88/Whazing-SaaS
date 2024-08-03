'use strict';
const O = b, P = b;
(function (c, d) {
    const M = b, N = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(M(0xb9)) / (0x17c9 * 0x1 + 0x1 * 0xb57 + -0x231f) * (parseInt(N(0xd4)) / (0x2 * -0xdd3 + 0x1091 + -0xa7 * -0x11)) + -parseInt(N(0x10a)) / (-0x1f5 * -0xd + 0xdab * 0x1 + 0x1 * -0x2719) * (-parseInt(N(0xa5)) / (0xed + -0x937 * -0x1 + 0x4 * -0x288)) + parseInt(M(0xff)) / (0x4ea + 0xda7 + -0x128c) * (parseInt(N(0xce)) / (0x14b0 + -0x22b7 + 0xe0d)) + -parseInt(N(0xb7)) / (0x3f6 * 0x1 + -0x6c3 * -0x5 + -0x25be) + -parseInt(N(0xc1)) / (-0x29 * 0x5e + -0x194f + -0x47d * -0x9) * (-parseInt(M(0xb1)) / (-0x1 * 0xe43 + -0x20 * -0xe9 + 0x92 * -0x1a)) + -parseInt(M(0xfa)) / (-0x1 * 0xc0b + 0x1 * -0x1345 + -0x1 * -0x1f5a) + -parseInt(N(0xc3)) / (-0x23f3 * -0x1 + 0x89 * 0x31 + -0x5 * 0xc6d) * (parseInt(N(0xd0)) / (0x1231 * -0x1 + 0x18f + 0x10ae));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x59153 * -0x1 + 0x1b19c + 0xa9b13 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa14 + -0x5b * 0x11 + 0x7 * 0x265);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[O(0xe1) + P(0xf3)] || function (c) {
    const Q = O;
    return c && c[Q(0xd1)] ? c : { 'default': c };
};
const k = {};
k[P(0xbb)] = !![], Object[O(0xf2) + O(0xfd)](exports, O(0xd1), k);
const AppError_1 = __importDefault(require(P(0xb8) + P(0xd8) + 'r')), socket_1 = require(P(0xd2) + P(0xb4)), Whatsapp_1 = __importDefault(require(O(0xd9) + O(0xca) + 'p')), logger_1 = require(O(0xa6) + O(0xf0)), CreateWhatsAppService = async ({
        name: j,
        status: status = P(0xf6) + 'ED',
        tenantId: l,
        tokenTelegram: m,
        instagramUser: n,
        instagramKey: o,
        type: p,
        wabaBSP: q,
        tokenAPI: r,
        fbPageId: s,
        farewellMessage: t,
        isDefault: isDefault = ![]
    }) => {
        const R = P, S = P, u = {};
        u[R(0xc6)] = S(0xe0) + S(0x103), u[S(0xc8)] = R(0xdc) + R(0xe2) + R(0xa8) + R(0xc2), u[R(0xcf)] = S(0xcd) + R(0xd3) + R(0x107) + S(0x108) + S(0xf8) + S(0xeb), u[S(0xa7)] = R(0xfe) + S(0xe7) + S(0xe6) + R(0xf9), u[R(0xb3)] = function (z, A) {
            return z === A;
        }, u[S(0xd5)] = S(0x105), u[R(0xd6)] = function (z, A) {
            return z || A;
        }, u[R(0xcc)] = function (z, A) {
            return z === A;
        }, u[R(0xc7)] = R(0xe5), u[R(0xaa)] = R(0xdf), u[R(0xdb)] = function (z, A) {
            return z === A;
        }, u[R(0xda)] = S(0xea), u[S(0xe4)] = function (z, A) {
            return z !== A;
        }, u[S(0xfb)] = R(0xf5), u[R(0xe9)] = function (z, A) {
            return z === A;
        }, u[R(0xb0)] = R(0x106), u[S(0xc0)] = S(0xef), u[R(0x102)] = S(0x104), u[R(0x10b)] = S(0xf4), u[R(0xab)] = R(0xed), u[R(0xb6)] = S(0xbf), u[R(0xae)] = S(0xa4);
        const v = u;
        if (v[S(0xb3)](p, v[S(0xd5)]) && v[R(0xd6)](!r, !q)) {
            if (v[R(0xcc)](v[R(0xc7)], v[R(0xaa)]))
                x = !f;
            else
                throw new AppError_1[(S(0x100))](v[R(0xc8)]);
        }
        if (v[S(0xdb)](p, v[S(0xda)]) && !n) {
            if (v[R(0xe4)](v[S(0xfb)], v[S(0xfb)])) {
                f[S(0xb5)][S(0xf1)](g);
                throw new h[(R(0x100))](v[S(0xc6)], 0x4 * 0x334 + 0x10ad + -0x1be9);
            } else
                throw new AppError_1[(S(0x100))](v[S(0xcf)]);
        }
        if (v[R(0xe9)](p, v[R(0xb0)]) && !m) {
            if (v[R(0xe4)](v[R(0xc0)], v[R(0x102)]))
                throw new AppError_1[(S(0x100))](v[S(0xa7)]);
            else {
                const C = {};
                return C[R(0x100)] = j, g && h[R(0xd1)] ? i : C;
            }
        }
        const w = {};
        w[S(0xd7)] = l, w[S(0xe3)] = !![];
        const x = {};
        x[S(0xee)] = w;
        const y = await Whatsapp_1[R(0x100)][S(0xa9)](x);
        if (!y) {
            if (v[R(0xdb)](v[S(0x10b)], v[R(0x10b)]))
                isDefault = !y;
            else
                throw new w[(R(0x100))](v[S(0xc8)]);
        }
        if (isDefault) {
            if (v[R(0xcc)](v[R(0xab)], v[R(0xab)])) {
                if (y) {
                    if (v[R(0xe9)](v[S(0xb6)], v[R(0xb6)])) {
                        const D = {};
                        D[R(0xe3)] = ![], await y[R(0xa4)](D);
                    } else
                        throw new w[(R(0x100))](v[R(0xcf)]);
                }
            } else
                throw new w[(R(0x100))](v[R(0xa7)]);
        }
        try {
            const G = {};
            G[R(0xad)] = j, G[S(0xfc)] = status, G[R(0xe3)] = isDefault, G[R(0xd7)] = l, G[S(0xdd) + R(0xec)] = m, G[S(0xba) + R(0xac)] = n, G[R(0xaf) + 'ey'] = o, G[S(0x109)] = p, G[S(0xbc)] = q, G[R(0xbe)] = r, G[S(0xde)] = s, G[S(0xc5) + R(0xc4)] = t;
            const H = await Whatsapp_1[R(0x100)][S(0x10c)](G), I = (0x8 * -0x1bd + -0x362 * -0x4 + 0x60, socket_1[S(0xe8)])(), J = {};
            J[S(0xc9)] = v[R(0xae)], J[R(0xbd)] = H, I[S(0x101)](l + R(0xb2), J);
            const K = {};
            return K[S(0xbd)] = H, K[R(0xcb) + S(0xf7)] = y, K;
        } catch (L) {
            logger_1[S(0xb5)][R(0xf1)](L);
            throw new AppError_1[(R(0x100))](v[R(0xc6)], 0x11f6 + 0x254d * -0x1 + 0x14eb);
        }
    };
function a() {
    const T = [
        '\x20a\x20BSP',
        '6124085GJasJd',
        'ssage',
        'farewellMe',
        'DjMxK',
        'zcCJK',
        'ntsPN',
        'action',
        'ls/Whatsap',
        'oldDefault',
        'lCcvD',
        'Instagram:',
        '1166616ZSXXSN',
        'XjANo',
        '24Phdjwp',
        '__esModule',
        '../../libs',
        '\x20favor\x20inf',
        '20bfeDjP',
        'KjHvn',
        'CPfld',
        'tenantId',
        'rs/AppErro',
        '../../mode',
        'vaDkq',
        'xaPrR',
        'WABA:\x20favo',
        'tokenTeleg',
        'fbPageId',
        'bNmbk',
        'ERR_CREATE',
        '__importDe',
        'r\x20informar',
        'isDefault',
        'KqUhR',
        'etMtZ',
        'rmar\x20o\x20Tok',
        'favor\x20info',
        'getIO',
        'pFBUM',
        'instagram',
        'amente.',
        'ram',
        'bkSGy',
        'where',
        'mbkmq',
        's/logger',
        'error',
        'defineProp',
        'fault',
        'NXzmM',
        'sSRQt',
        'DISCONNECT',
        'Whatsapp',
        'nha\x20corret',
        'en.',
        '7832740qXGjpa',
        'HoSkm',
        'status',
        'erty',
        'Telegram:\x20',
        '20lmUmQr',
        'default',
        'emit',
        'gTAjF',
        '_WAPP',
        'QMtCY',
        'waba',
        'telegram',
        'ormar\x20o\x20Us',
        'uário\x20e\x20se',
        'type',
        '6Hdhzkx',
        'uaeXa',
        'create',
        'update',
        '942824nKoRcM',
        '../../util',
        'wHGUX',
        '\x20o\x20Token\x20e',
        'findOne',
        'vraOa',
        'SahwV',
        'ser',
        'name',
        'Reghg',
        'instagramK',
        'RrfkT',
        '18LRGFEf',
        ':whatsapp',
        'snFzn',
        '/socket',
        'logger',
        'iCDmn',
        '3931550FdrkAS',
        '../../erro',
        '88227lcaDcu',
        'instagramU',
        'value',
        'wabaBSP',
        'whatsapp',
        'tokenAPI',
        'YZqYk',
        'eeDJB',
        '3072592lzhNbe'
    ];
    a = function () {
        return T;
    };
    return a();
}
exports[P(0x100)] = CreateWhatsAppService;