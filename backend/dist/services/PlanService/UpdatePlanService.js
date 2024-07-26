'use strict';
const s = b, t = b;
function a() {
    const x = [
        'N_FOUND',
        '529470KKOYmf',
        '__importDe',
        '3754904kjbpEN',
        '8SKJTsi',
        'erty',
        '35094cWkPGA',
        'rs/AppErro',
        'WXdAo',
        '../../mode',
        'defineProp',
        '2161EmJdcE',
        '896730OfAprA',
        'maxConnect',
        'value',
        'isPublic',
        '584770NfjCNH',
        'ERR_NO_PLA',
        'name',
        'update',
        '2240703lVAPKT',
        'fault',
        'ls/Plan',
        '357EQRlbW',
        'maxUsers',
        '__esModule',
        'default',
        '706bUfOhf',
        '../../erro',
        'ions',
        'findByPk'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x83)) / (-0x6 * 0x40d + -0x3 * 0x56b + 0x2890) * (-parseInt(r(0x93)) / (-0x114 + -0x1569 * 0x1 + 0x167f)) + -parseInt(r(0x8c)) / (0x24a8 + -0x1 * -0xad + 0x12a9 * -0x2) + parseInt(q(0x7c)) / (0x2263 * -0x1 + 0x1cf2 + -0x7f * -0xb) * (-parseInt(r(0x88)) / (-0xc2e * -0x2 + 0x15c * 0x3 + 0xf * -0x1e5)) + -parseInt(q(0x7e)) / (-0x20a7 * -0x1 + 0xe5e * 0x1 + -0x2eff) * (-parseInt(q(0x8f)) / (0x3 * 0x3ff + 0x1330 + -0x1 * 0x1f26)) + parseInt(r(0x7b)) / (-0xbf1 * 0x3 + 0x1 * -0x17a1 + 0x3b7c) + -parseInt(r(0x98)) / (0x1417 + 0x199d * 0x1 + -0x2dab) + -parseInt(r(0x84)) / (-0x1dae + -0x1c57 + 0x59 * 0xa7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8890f + -0x584d4 * -0x1 + -0xa93b * 0xc));
var __importDefault = this && this[s(0x99) + s(0x8d)] || function (c) {
    const u = t;
    return c && c[u(0x91)] ? c : { 'default': c };
};
const k = {};
k[t(0x86)] = !![], Object[t(0x82) + t(0x7d)](exports, s(0x91), k);
const AppError_1 = __importDefault(require(t(0x94) + t(0x7f) + 'r')), Plan_1 = __importDefault(require(s(0x81) + s(0x8e))), UpdatePlanService = async e => {
        const v = s, w = s, f = {};
        f[v(0x80)] = v(0x89) + v(0x97);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0x92)][w(0x96)](h);
        if (!o)
            throw new AppError_1[(w(0x92))](g[v(0x80)], -0x1 * -0x1faf + -0x129f + -0xb7c);
        const p = {};
        return p[v(0x8a)] = i, p[w(0x90)] = j, p[v(0x85) + v(0x95)] = l, p[w(0x86)] = m, p[v(0x87)] = n, await o[w(0x8b)](p), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x676 + 0x1 * -0x73b + -0xa0 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x92)] = UpdatePlanService;