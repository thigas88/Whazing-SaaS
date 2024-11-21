'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xeb)) / (-0x2fe + -0xeb7 + 0x1 * 0x11b6) * (parseInt(o(0xdc)) / (0xd64 + 0x9 * -0x383 + -0xf * -0x137)) + -parseInt(n(0xdb)) / (-0x1 * -0x121c + -0x1a1a + 0x801 * 0x1) + -parseInt(o(0xe1)) / (-0x1 * -0x1745 + 0x1 * 0x1705 + -0x2e46) + parseInt(n(0xe8)) / (0x4 * 0x23f + 0x12fc + -0x1bf3) * (-parseInt(o(0xdf)) / (0x6 * -0x565 + 0xf00 + -0x8b2 * -0x2)) + parseInt(n(0xde)) / (-0xa75 + 0x113a + -0x6be * 0x1) + parseInt(n(0xef)) / (-0x1688 + 0xcb * 0x11 + 0x915) * (parseInt(n(0xf4)) / (-0x4fc * -0x6 + -0xc13 * 0x1 + -0x11cc)) + parseInt(o(0xf7)) / (-0x7ab + 0xbe9 * -0x1 + -0x2 * -0x9cf) * (parseInt(o(0xd4)) / (0x6eb * -0x2 + -0x9e3 + 0x17c4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2900c + -0x16d8dc + 0x5fe * 0x638));
var __importDefault = this && this[p(0xe7) + p(0xf9)] || function (c) {
    const r = p;
    return c && c[r(0xe5)] ? c : { 'default': c };
};
const k = {};
k[q(0xd9)] = !![], Object[p(0xea) + q(0xd6)](exports, p(0xe5), k);
function a() {
    const u = [
        '65CNwGPa',
        'findByPk',
        'defineProp',
        '157yXUuxx',
        'default',
        'profile',
        'rDyKL',
        '2728vucrYJ',
        'attributes',
        'queues',
        'ls/Queue',
        'bIjvh',
        '33039CpkrSM',
        'include',
        'rs/AppErro',
        '3020szrycU',
        'Tgmze',
        'fault',
        'nMLFk',
        '../../mode',
        'email',
        'name',
        'kanbanOrde',
        'wXNPe',
        '25993fPHsaL',
        'R_FOUND',
        'erty',
        'ERR_NO_USE',
        'tenantId',
        'value',
        'jDztJ',
        '2556132QxZPzY',
        '3602lvQoNV',
        'VtUxg',
        '9438863zOtPXx',
        '426444uIXGvp',
        'GhZIC',
        '4174900vKzRtf',
        'tokenVersi',
        'ls/User',
        'XJglF',
        '__esModule',
        '../../erro',
        '__importDe'
    ];
    a = function () {
        return u;
    };
    return a();
}
const User_1 = __importDefault(require(p(0xfb) + q(0xe3))), AppError_1 = __importDefault(require(q(0xe6) + q(0xf6) + 'r')), Queue_1 = __importDefault(require(p(0xfb) + p(0xf2))), ShowUserService = async (e, f) => {
        const s = p, t = q, g = {};
        g[s(0xe0)] = s(0xfd), g[t(0xf8)] = t(0xfc), g[t(0xda)] = s(0xed), g[t(0xfa)] = s(0xe2) + 'on', g[t(0xee)] = t(0xd8), g[t(0xe4)] = s(0xd2) + 'r', g[s(0xdd)] = s(0xf1), g[t(0xf3)] = function (l, m) {
            return l !== m;
        }, g[t(0xd3)] = s(0xd7) + s(0xd5);
        const h = g, i = {};
        i[t(0xf0)] = [
            h[s(0xe0)],
            'id',
            h[s(0xf8)],
            h[t(0xda)],
            h[s(0xfa)],
            h[s(0xee)],
            h[t(0xe4)]
        ], i[t(0xf5)] = [{
                'model': Queue_1[s(0xec)],
                'as': h[t(0xdd)]
            }];
        const j = await User_1[s(0xec)][s(0xe9)](e, i);
        if (!j || h[t(0xf3)](j[s(0xd8)], f))
            throw new AppError_1[(t(0xec))](h[t(0xd3)], -0xb87 * -0x1 + 0x1451 + -0x791 * 0x4);
        return j;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2170 + -0x2571 + -0x4d3 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0xec)] = ShowUserService;