'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x125)) / (-0x23c + 0x345 * 0xb + -0x21ba) * (-parseInt(n(0x12e)) / (-0x2 * -0x35f + -0x21f9 + -0x1b3d * -0x1)) + -parseInt(o(0x12d)) / (-0x1add + 0xb1 + 0x1a2f) + -parseInt(o(0x13b)) / (-0x1 * -0x1442 + 0x5a1 + 0x25 * -0xb3) * (-parseInt(o(0x13d)) / (-0x6f7 + 0x22d0 + 0x224 * -0xd)) + -parseInt(o(0x137)) / (-0x625 + -0x1 * 0xbbe + -0x83 * -0x23) + parseInt(n(0x12a)) / (0x6cd + 0x11c8 + 0x7 * -0x382) + parseInt(o(0x13a)) / (0x6a7 * 0x1 + 0x11d0 + 0x1 * -0x186f) + parseInt(o(0x130)) / (-0x6ab * 0x5 + 0x11d1 * -0x2 + 0x323 * 0x16);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15891 + 0x1 * 0x2676b + 0x3a529 * 0x1));
var __importDefault = this && this[p(0x12c) + q(0x135)] || function (c) {
    const r = p;
    return c && c[r(0x13f)] ? c : { 'default': c };
};
const k = {};
k[p(0x13c)] = !![], Object[q(0x132) + q(0x124)](exports, p(0x13f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x969 + 0x2346 + -0x18bf * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'gfbyP',
        'ERR_NO_CON',
        'erty',
        '211BUiJBl',
        'mCWRA',
        'APJtL',
        'ls/Contact',
        'include',
        '553245DUsYMJ',
        '../../erro',
        '__importDe',
        '1676337fGBFiC',
        '1676IQYKxg',
        'rs/AppErro',
        '5197347KKJtQW',
        'gxKSD',
        'defineProp',
        'findByPk',
        'wallets',
        'fault',
        'default',
        '2248140WIEOTb',
        '../../mode',
        'cMenU',
        '2853296aXvUie',
        '810668BBpKcc',
        'value',
        '10nPJimr',
        'extraInfo',
        '__esModule',
        'tags',
        'TACT_FOUND',
        'CCUiY',
        'name',
        'tenantId'
    ];
    a = function () {
        return u;
    };
    return a();
}
const Contact_1 = __importDefault(require(q(0x138) + p(0x128))), AppError_1 = __importDefault(require(q(0x12b) + q(0x12f) + 'r')), ShowContactService = async ({
        id: e,
        tenantId: f
    }) => {
        const s = p, t = q, g = {};
        g[s(0x122)] = t(0x13e), g[s(0x127)] = t(0x140), g[s(0x126)] = s(0x134), g[t(0x11f)] = s(0x120), g[t(0x131)] = function (l, m) {
            return l !== m;
        }, g[s(0x139)] = s(0x123) + s(0x11e);
        const h = g, i = {};
        i[s(0x129)] = [
            h[t(0x122)],
            h[s(0x127)],
            {
                'association': h[s(0x126)],
                'attributes': [
                    'id',
                    h[s(0x11f)]
                ]
            }
        ];
        const j = await Contact_1[s(0x136)][t(0x133)](e, i);
        if (!j || h[t(0x131)](j[s(0x121)], f))
            throw new AppError_1[(t(0x136))](h[t(0x139)], 0x1ca0 + 0x1954 + 0x8 * -0x68c);
        return j;
    };
exports[p(0x136)] = ShowContactService;