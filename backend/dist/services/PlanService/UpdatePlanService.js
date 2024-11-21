'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xbc)) / (-0x14b * 0x1 + -0x5cf + -0x1 * -0x71b) * (parseInt(q(0xc9)) / (-0x6 * 0x293 + -0x9b4 + -0x2 * -0xc94)) + -parseInt(r(0xc2)) / (0xfeb + -0x52 * -0x60 + 0xbaa * -0x4) * (parseInt(r(0xc0)) / (-0x1 * -0x21a3 + 0x1b * 0x139 + -0x42a2)) + -parseInt(r(0xc5)) / (0x383 * 0xb + -0x14b * -0xd + -0x376b) * (-parseInt(r(0xcd)) / (0xce6 + 0x195e + -0xb2 * 0x37)) + -parseInt(r(0xbd)) / (0x1 * 0x224e + 0x23a7 + 0x1 * -0x45ee) * (-parseInt(q(0xc4)) / (-0xf29 + -0x13 * 0x10 + 0x1061)) + parseInt(q(0xca)) / (-0x93b + -0x15d7 * -0x1 + -0xc93) + parseInt(r(0xb8)) / (0x15 * 0xb9 + 0x6 * 0x10d + 0x1f3 * -0xb) + parseInt(q(0xba)) / (0x1 * -0x485 + 0x1 * 0xdb7 + -0x1 * 0x927) * (-parseInt(r(0xc1)) / (-0x7c1 * 0x5 + 0x2020 + 0x6b1 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1decc * -0x2 + -0x7 * 0xc51a + 0x13ae1a));
var __importDefault = this && this[s(0xcf) + t(0xd6)] || function (c) {
    const u = s;
    return c && c[u(0xd2)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0xd6c + -0x233e * -0x1 + -0x3d5e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[t(0xc7)] = !![], Object[s(0xd0) + s(0xcc)](exports, s(0xd2), k);
function a() {
    const x = [
        'fault',
        'N_FOUND',
        'ERR_NO_PLA',
        '1488070aKykUG',
        'rs/AppErro',
        '9887075WzFEBu',
        '../../mode',
        '2RAgSag',
        '357665xtEHNr',
        'isPublic',
        'update',
        '354556jSnnlc',
        '12Quavwv',
        '42hehaDV',
        'ZgYxX',
        '96iTevYV',
        '982245KwWiWy',
        'maxUsers',
        'value',
        'ls/Plan',
        '371186eQWDAk',
        '9587439Remyny',
        'maxConnect',
        'erty',
        '42fIpRkM',
        'default',
        '__importDe',
        'defineProp',
        'name',
        '__esModule',
        'ions',
        '../../erro',
        'findByPk'
    ];
    a = function () {
        return x;
    };
    return a();
}
const AppError_1 = __importDefault(require(s(0xd4) + t(0xb9) + 'r')), Plan_1 = __importDefault(require(s(0xbb) + t(0xc8))), UpdatePlanService = async e => {
        const v = s, w = t, f = {};
        f[v(0xc3)] = v(0xd8) + w(0xd7);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0xce)][w(0xd5)](h);
        if (!o)
            throw new AppError_1[(v(0xce))](g[w(0xc3)], 0x241a * -0x1 + -0x1319 * -0x1 + 0x47 * 0x43);
        const p = {};
        return p[v(0xd1)] = i, p[w(0xc6)] = j, p[w(0xcb) + v(0xd3)] = l, p[w(0xc7)] = m, p[v(0xbe)] = n, await o[v(0xbf)](p), o;
    };
exports[s(0xce)] = UpdatePlanService;