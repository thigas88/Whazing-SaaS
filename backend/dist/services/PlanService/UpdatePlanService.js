'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x15c)) / (0x1f * 0x7d + -0xeca + 0x1 * -0x58) + parseInt(r(0x156)) / (-0x21 * 0xe3 + -0x21b2 + -0x9 * -0x6ff) + parseInt(q(0x174)) / (-0x391 + 0x3 * -0x24d + -0xa7b * -0x1) + -parseInt(q(0x16d)) / (-0x535 + -0x5 * -0x108 + -0x1 * -0x11) + -parseInt(q(0x173)) / (-0xaf4 + -0x2fa + 0xdf3) * (-parseInt(r(0x168)) / (0x1c63 + 0x6b3 * 0x2 + -0x1 * 0x29c3)) + -parseInt(r(0x167)) / (-0x152b + 0x1cb5 + 0x783 * -0x1) * (parseInt(q(0x15a)) / (-0xb25 + 0x22a5 + 0xbbc * -0x2)) + -parseInt(q(0x16f)) / (-0xb0f + 0x38c * -0x8 + 0x2778) * (parseInt(r(0x16a)) / (0x7 * -0x455 + -0x2f5 + 0x5 * 0x6aa));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x941dc + 0x2 * -0xb6fb + -0x27bb * -0x9));
var __importDefault = this && this[s(0x172) + s(0x158)] || function (c) {
    const u = t;
    return c && c[u(0x15e)] ? c : { 'default': c };
};
function a() {
    const x = [
        'erty',
        'fault',
        'ddpcC',
        '139768iXnyrb',
        'findByPk',
        '141680pZYGwd',
        'rs/AppErro',
        '__esModule',
        'default',
        '../../erro',
        'ERR_NO_PLA',
        'ls/Plan',
        'value',
        'isPublic',
        'update',
        'maxUsers',
        '21tmuCEj',
        '1893084ZzqRIr',
        'maxConnect',
        '274460byzbkn',
        '../../mode',
        'ions',
        '2014372RwZvsd',
        'defineProp',
        '9aOKvia',
        'name',
        'N_FOUND',
        '__importDe',
        '15lTWQIk',
        '218850zsLjLF',
        '53634jvdBVG'
    ];
    a = function () {
        return x;
    };
    return a();
}
const k = {};
k[s(0x163)] = !![], Object[s(0x16e) + t(0x157)](exports, s(0x15e), k);
const AppError_1 = __importDefault(require(s(0x160) + s(0x15d) + 'r')), Plan_1 = __importDefault(require(t(0x16b) + s(0x162))), UpdatePlanService = async e => {
        const v = t, w = t, f = {};
        f[v(0x159)] = v(0x161) + v(0x171);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0x15f)][v(0x15b)](h);
        if (!o)
            throw new AppError_1[(v(0x15f))](g[w(0x159)], 0xb84 + 0x2e3 * -0xb + -0x5 * -0x45d);
        const p = {};
        return p[w(0x170)] = i, p[w(0x166)] = j, p[v(0x169) + v(0x16c)] = l, p[v(0x163)] = m, p[w(0x164)] = n, await o[v(0x165)](p), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1531 + 0x585 + 0x1102);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0x15f)] = UpdatePlanService;