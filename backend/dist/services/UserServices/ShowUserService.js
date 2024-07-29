'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1189 + -0x8 * 0x343 + 0x954);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '342ujQeAU',
        'tCUwL',
        'rs/AppErro',
        'ls/Queue',
        '647786raAHaC',
        'email',
        'R_FOUND',
        'xeSpf',
        'attributes',
        'jcsqy',
        'bIlQp',
        'fault',
        'default',
        '../../mode',
        'tenantId',
        '603021efJZhr',
        '__esModule',
        'QwTPc',
        '__importDe',
        'tokenVersi',
        'include',
        'PoAFh',
        '../../erro',
        'ls/User',
        '1864144CEDoZq',
        'nbJhD',
        '79790nNiKuk',
        'profile',
        'ZvSpu',
        'defineProp',
        'name',
        'erty',
        'queues',
        'ERR_NO_USE',
        '284035KTaMXI',
        'findByPk',
        '7sckQjV',
        '1565376KufNMq',
        '1tHGlKY',
        '282288ICePNb',
        'value'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xdd)) / (0x1e9 + 0xa1 + 0x1 * -0x289) * (-parseInt(n(0xe4)) / (0x1d34 + 0x802 + 0x129a * -0x2)) + parseInt(n(0xc6)) / (-0xbc9 + -0xc * -0x14b + -0x3b8) + parseInt(n(0xde)) / (0xb85 + -0x1a3 * -0xa + -0x1bdf * 0x1) + parseInt(o(0xd9)) / (0x1 * 0x1b07 + -0x79 * -0x47 + -0x3c91) + parseInt(o(0xdc)) / (0x626 + 0x6f1 + -0xd11) * (parseInt(o(0xdb)) / (0x1d89 + -0x1ae5 + -0x29d)) + parseInt(o(0xcf)) / (0x305 * 0x5 + 0x303 * -0x7 + -0x5 * -0x134) + -parseInt(o(0xe0)) / (-0x843 * -0x1 + 0x1d0f + -0x2549) * (parseInt(n(0xd1)) / (-0x1cd2 + -0x1 * -0x186d + -0x46f * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xccd8 + -0x487ba + 0x84f17));
var __importDefault = this && this[p(0xc9) + q(0xeb)] || function (c) {
    const r = q;
    return c && c[r(0xc7)] ? c : { 'default': c };
};
const k = {};
k[q(0xdf)] = !![], Object[q(0xd4) + p(0xd6)](exports, p(0xc7), k);
const User_1 = __importDefault(require(p(0xed) + p(0xce))), AppError_1 = __importDefault(require(q(0xcd) + p(0xe2) + 'r')), Queue_1 = __importDefault(require(q(0xed) + p(0xe3))), ShowUserService = async (e, f) => {
        const s = p, t = q, g = {};
        g[s(0xd3)] = s(0xd5), g[s(0xcc)] = s(0xe5), g[t(0xc8)] = s(0xd2), g[t(0xea)] = t(0xca) + 'on', g[t(0xe9)] = s(0xc5), g[t(0xd0)] = s(0xd7), g[t(0xe7)] = function (l, m) {
            return l !== m;
        }, g[s(0xe1)] = t(0xd8) + s(0xe6);
        const h = g, i = {};
        i[s(0xe8)] = [
            h[s(0xd3)],
            'id',
            h[s(0xcc)],
            h[t(0xc8)],
            h[t(0xea)],
            h[t(0xe9)]
        ], i[t(0xcb)] = [{
                'model': Queue_1[s(0xec)],
                'as': h[t(0xd0)]
            }];
        const j = await User_1[t(0xec)][s(0xda)](e, i);
        if (!j || h[s(0xe7)](j[s(0xc5)], f))
            throw new AppError_1[(t(0xec))](h[t(0xe1)], 0x4ff + 0x96f + 0x5 * -0x292);
        return j;
    };
exports[p(0xec)] = ShowUserService;