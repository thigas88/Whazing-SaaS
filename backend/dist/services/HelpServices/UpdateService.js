'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x193)) / (0x24ec + 0x1 * -0x1225 + -0x59 * 0x36) * (-parseInt(l(0x17d)) / (0x1 * -0x16f9 + -0x833 + 0x1f2e)) + -parseInt(l(0x190)) / (0x2077 * 0x1 + -0x212 * 0xf + -0x166) + -parseInt(m(0x191)) / (-0x17e2 + -0x114d + 0x2933) + -parseInt(m(0x187)) / (0x2668 * 0x1 + -0x20b * -0x12 + -0x4b29) * (parseInt(l(0x188)) / (0x47e * 0x7 + 0x1ce4 + -0x3c50)) + parseInt(l(0x18d)) / (0x5f * 0x67 + -0x257 * 0xe + -0x570) + parseInt(l(0x194)) / (0x1 * -0x131b + 0x1 * -0x1322 + 0x61 * 0x65) + parseInt(m(0x18a)) / (0xb82 + 0x14 * 0x1b1 + -0x2d4d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x46058 + 0x589fe + 0x1d * -0x3c34));
var __importDefault = this && this[n(0x18c) + n(0x17e)] || function (c) {
    const p = o;
    return c && c[p(0x18b)] ? c : { 'default': c };
};
function a() {
    const s = [
        'erty',
        '602894ttNHuM',
        'fault',
        'findByPk',
        'ls/Help',
        'ERR_NO_HEL',
        'default',
        '../../erro',
        'value',
        '../../mode',
        'defineProp',
        '667345pDdhIa',
        '6FjTKxO',
        'rs/AppErro',
        '5220504RUQfqi',
        '__esModule',
        '__importDe',
        '729463xOvLIm',
        'ZIsNa',
        'update',
        '995478FXDHQA',
        '279508ARcHYl',
        'P_FOUND',
        '1lnCAzb',
        '2841760CtejcE'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x791 * 0x1 + 0x1 * -0x4cd + 0xdda);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x184)] = !![], Object[o(0x186) + n(0x17c)](exports, n(0x18b), k);
const AppError_1 = __importDefault(require(o(0x183) + o(0x189) + 'r')), Help_1 = __importDefault(require(o(0x185) + n(0x180))), UpdateService = async d => {
        const q = n, r = o, e = {};
        e[q(0x18e)] = r(0x181) + r(0x192);
        const f = e, {id: g} = d, h = await Help_1[q(0x182)][q(0x17f)](g);
        if (!h)
            throw new AppError_1[(q(0x182))](f[q(0x18e)], -0x1c8a + -0x646 + 0x11 * 0x224);
        return await h[q(0x18f)](d), h;
    };
exports[n(0x182)] = UpdateService;