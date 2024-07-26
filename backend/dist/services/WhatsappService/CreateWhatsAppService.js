'use strict';
const O = b, P = b;
(function (c, d) {
    const M = b, N = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(M(0x14f)) / (-0x6 * 0x1cb + 0x26d2 + 0x28d * -0xb) + parseInt(N(0x186)) / (-0x2489 + 0x2404 * 0x1 + 0x3 * 0x2d) + parseInt(N(0x18b)) / (0x2 * -0x9d2 + -0x1 * 0x2303 + 0x1 * 0x36aa) + -parseInt(M(0x155)) / (0x2367 + 0x1bd + 0x84 * -0x48) * (parseInt(N(0x134)) / (0x11d1 * 0x1 + -0x340 + 0x1 * -0xe8c)) + parseInt(M(0x151)) / (0xbf6 * -0x1 + -0x2 * 0xdc9 + -0x3d * -0xa6) * (parseInt(N(0x149)) / (-0x1132 + 0x1a * -0xb0 + -0x3 * -0xbb3)) + -parseInt(M(0x16f)) / (-0x6 * 0x3b + 0x1b64 * 0x1 + -0x1db * 0xe) + -parseInt(M(0x16a)) / (-0x2085 + 0x13 * 0x5f + 0x1981) * (parseInt(M(0x170)) / (0x21d * 0x11 + -0x1 * -0x29d + 0xb0 * -0x38));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x764d0 + -0x7 * -0x9bb7 + 0xe6061));
function a() {
    const T = [
        'name',
        'type',
        'ram',
        'QVfrg',
        'uozUc',
        'ser',
        'default',
        'findOne',
        '262622WvccqI',
        'rmar\x20o\x20Tok',
        'instagramK',
        'farewellMe',
        'NOsfX',
        '2337036GmMmoS',
        'action',
        'JRfZq',
        'QXIxd',
        'qCkSs',
        'gFVJi',
        'vhefN',
        'oldDefault',
        'rs/AppErro',
        'tokenTeleg',
        'efaVG',
        'nBrct',
        'Whatsapp',
        'wdGLM',
        'instagramU',
        'luBer',
        '20pkGEKN',
        'status',
        'value',
        'xqyvB',
        'fbPageId',
        's/logger',
        'qaNWQ',
        'tokenAPI',
        'ssage',
        'oWAMX',
        '\x20a\x20BSP',
        'favor\x20info',
        'getIO',
        'telegram',
        'whatsapp',
        '../../libs',
        'vWXRg',
        'zEUJv',
        'tglPq',
        '__esModule',
        'fault',
        '528661eBXkOc',
        'uário\x20e\x20se',
        'waba',
        '../../util',
        'OeZXI',
        'en.',
        '1146186mzkMJP',
        'instagram',
        '114kSROTw',
        'isDefault',
        'amente.',
        'nha\x20corret',
        '419376YfmQQg',
        'VFGjD',
        'zcTIE',
        'mhnez',
        'where',
        'ERR_CREATE',
        'YOfOv',
        '../../erro',
        '/socket',
        'piclu',
        'Instagram:',
        'wabaBSP',
        'ls/Whatsap',
        'NyAVn',
        '\x20favor\x20inf',
        'dZiar',
        ':whatsapp',
        'tenantId',
        'KWyql',
        'ormar\x20o\x20Us',
        'defineProp',
        '9ztWRnG',
        'WABA:\x20favo',
        '_WAPP',
        '__importDe',
        'emit',
        '8270984PTsmYu',
        '13015390bkYzya',
        'pkQhv',
        'DISCONNECT',
        'erty',
        'logger',
        '\x20o\x20Token\x20e',
        'error',
        'r\x20informar',
        'Zqssg',
        'create',
        '../../mode',
        'UHIBD',
        'Telegram:\x20',
        'update'
    ];
    a = function () {
        return T;
    };
    return a();
}
var __importDefault = this && this[O(0x16d) + O(0x148)] || function (c) {
    const Q = P;
    return c && c[Q(0x147)] ? c : { 'default': c };
};
const k = {};
k[O(0x136)] = !![], Object[P(0x169) + P(0x173)](exports, P(0x147), k);
const AppError_1 = __importDefault(require(P(0x15c) + P(0x12c) + 'r')), socket_1 = require(P(0x143) + O(0x15d)), Whatsapp_1 = __importDefault(require(P(0x17a) + P(0x161) + 'p')), logger_1 = require(P(0x14c) + O(0x139)), CreateWhatsAppService = async ({
        name: j,
        status: status = P(0x172) + 'ED',
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
        const R = P, S = O, u = {};
        u[R(0x12a)] = S(0x15a) + S(0x16c), u[R(0x13d)] = R(0x16b) + R(0x177) + S(0x175) + S(0x13e), u[S(0x178)] = S(0x15f) + S(0x163) + S(0x168) + R(0x14a) + S(0x154) + S(0x153), u[R(0x18a)] = S(0x17c) + S(0x13f) + R(0x187) + R(0x14e), u[S(0x145)] = function (z, A) {
            return z === A;
        }, u[R(0x167)] = R(0x14b), u[S(0x128)] = function (z, A) {
            return z || A;
        }, u[S(0x129)] = R(0x157), u[S(0x181)] = S(0x18e), u[R(0x131)] = R(0x150), u[R(0x14d)] = function (z, A) {
            return z !== A;
        }, u[S(0x15e)] = R(0x164), u[S(0x133)] = function (z, A) {
            return z === A;
        }, u[S(0x18d)] = S(0x141), u[R(0x162)] = S(0x137), u[R(0x12e)] = function (z, A) {
            return z !== A;
        }, u[R(0x15b)] = R(0x13a), u[S(0x158)] = S(0x156), u[R(0x144)] = function (z, A) {
            return z === A;
        }, u[S(0x12f)] = R(0x146), u[S(0x17b)] = R(0x171), u[R(0x182)] = S(0x17d);
        const v = u;
        if (v[S(0x145)](p, v[R(0x167)]) && v[R(0x128)](!r, !q)) {
            if (v[S(0x145)](v[S(0x129)], v[R(0x181)])) {
                f[R(0x174)][R(0x176)](g);
                throw new h[(S(0x184))](v[R(0x12a)], 0x1dec + -0x2 * -0xe38 + -0x1 * 0x38c8);
            } else
                throw new AppError_1[(R(0x184))](v[S(0x13d)]);
        }
        if (v[S(0x145)](p, v[S(0x131)]) && !n) {
            if (v[S(0x14d)](v[S(0x15e)], v[R(0x15e)]))
                x = !f;
            else
                throw new AppError_1[(S(0x184))](v[R(0x178)]);
        }
        if (v[R(0x133)](p, v[S(0x18d)]) && !m) {
            if (v[S(0x14d)](v[R(0x162)], v[S(0x162)])) {
                const C = {};
                return C[S(0x184)] = j, g && h[S(0x147)] ? i : C;
            } else
                throw new AppError_1[(R(0x184))](v[S(0x18a)]);
        }
        const w = {};
        w[R(0x166)] = l, w[R(0x152)] = !![];
        const x = {};
        x[R(0x159)] = w;
        const y = await Whatsapp_1[R(0x184)][R(0x185)](x);
        if (!y) {
            if (v[S(0x12e)](v[S(0x15b)], v[S(0x158)]))
                isDefault = !y;
            else
                throw new w[(R(0x184))](v[S(0x13d)]);
        }
        if (isDefault) {
            if (v[S(0x144)](v[S(0x12f)], v[R(0x12f)])) {
                if (y) {
                    if (v[S(0x12e)](v[R(0x17b)], v[S(0x17b)]))
                        throw new w[(S(0x184))](v[S(0x178)]);
                    else {
                        const E = {};
                        E[R(0x152)] = ![], await y[S(0x17d)](E);
                    }
                }
            } else
                throw new w[(S(0x184))](v[R(0x18a)]);
        }
        try {
            const G = {};
            G[S(0x17e)] = j, G[R(0x135)] = status, G[S(0x152)] = isDefault, G[R(0x166)] = l, G[S(0x12d) + S(0x180)] = m, G[R(0x132) + R(0x183)] = n, G[S(0x188) + 'ey'] = o, G[S(0x17f)] = p, G[S(0x160)] = q, G[R(0x13b)] = r, G[R(0x138)] = s, G[R(0x189) + S(0x13c)] = t;
            const H = await Whatsapp_1[R(0x184)][S(0x179)](G), I = (0x2c8 + -0x1 * -0x14c2 + 0x17 * -0x106, socket_1[R(0x140)])(), J = {};
            J[R(0x18c)] = v[S(0x182)], J[S(0x142)] = H, I[R(0x16e)](l + R(0x165), J);
            const K = {};
            return K[R(0x142)] = H, K[R(0x12b) + R(0x130)] = y, K;
        } catch (L) {
            logger_1[S(0x174)][R(0x176)](L);
            throw new AppError_1[(S(0x184))](v[R(0x12a)], -0x35 * 0x2b + 0x1f47 + 0xa66 * -0x2);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x15cd + 0x5 * -0x161 + -0xdc0);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[O(0x184)] = CreateWhatsAppService;