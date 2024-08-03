'use strict';
const s = b, t = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * 0x36b + 0x3 * -0x7d9 + -0x28e * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x13e)) / (-0x1c9 * -0x6 + 0x14 * -0xaf + 0x21 * 0x17) * (-parseInt(r(0x148)) / (0x1 * -0x259d + 0x24a7 + 0xf8)) + parseInt(q(0x152)) / (-0xa6 * 0x4 + -0x2677 + 0x2912) + parseInt(r(0x142)) / (-0x1c52 + 0x9ad + 0x12a9) + -parseInt(q(0x14c)) / (-0x2154 + 0xbae + 0x3 * 0x739) + parseInt(r(0x14f)) / (0x11c7 * -0x1 + 0xb * 0x2b0 + -0xbc3) * (parseInt(r(0x13f)) / (0x1469 + 0x3 * -0x7ca + 0x2 * 0x17e)) + -parseInt(r(0x13d)) / (0x48d + 0xf42 + 0x3d * -0x53) * (parseInt(r(0x13c)) / (-0x1832 + 0x1 * -0x41b + 0x1c56 * 0x1)) + parseInt(q(0x137)) / (0x9 * -0x219 + 0xe24 * 0x2 + -0x95d) * (parseInt(r(0x150)) / (-0x16e + 0x1 * -0x1467 + 0x15e0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xedd12 + -0x128f39 + 0x2ee07b));
var __importDefault = this && this[s(0x13b) + t(0x14d)] || function (c) {
    const u = s;
    return c && c[u(0x147)] ? c : { 'default': c };
};
const k = {};
k[t(0x149)] = !![], Object[s(0x153) + t(0x13a)](exports, t(0x147), k);
const AppError_1 = __importDefault(require(t(0x155) + t(0x143) + 'r')), Plan_1 = __importDefault(require(t(0x145) + t(0x136))), UpdatePlanService = async e => {
        const v = t, w = s, f = {};
        f[v(0x154)] = w(0x144) + v(0x139);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0x14a)][v(0x14e)](h);
        if (!o)
            throw new AppError_1[(w(0x14a))](g[w(0x154)], -0x24 * -0x20 + 0xf01 * 0x1 + -0x11ed);
        const p = {};
        return p[v(0x151)] = i, p[v(0x146)] = j, p[w(0x141) + v(0x14b)] = l, p[v(0x149)] = m, p[v(0x140)] = n, await o[v(0x138)](p), o;
    };
function a() {
    const x = [
        'ls/Plan',
        '10OPaUBv',
        'update',
        'N_FOUND',
        'erty',
        '__importDe',
        '9966501lDxVLf',
        '8MxRmPf',
        '1CcaOGR',
        '10965486KkESXR',
        'isPublic',
        'maxConnect',
        '1188300nUOOMI',
        'rs/AppErro',
        'ERR_NO_PLA',
        '../../mode',
        'maxUsers',
        '__esModule',
        '1301450JgSNzG',
        'value',
        'default',
        'ions',
        '6449860fOXRHa',
        'fault',
        'findByPk',
        '6VeoUwl',
        '18646991ZPfkbn',
        'name',
        '1113132Thxowz',
        'defineProp',
        'dOIHv',
        '../../erro'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[s(0x14a)] = UpdatePlanService;