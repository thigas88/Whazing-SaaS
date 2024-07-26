'use strict';
function a() {
    const v = [
        'destroy',
        '1939945QGTych',
        '46286wVyqcd',
        'ERR_GRUOP_',
        '41166ALecUP',
        '../../mode',
        'rs/AppErro',
        'value',
        'defineProp',
        '../../erro',
        'gevXi',
        '112facfSQ',
        'default',
        '9WxtBRi',
        '6192790BAAJCW',
        '1024384OiAOCP',
        '96404AxKYme',
        'ls/Group',
        '__importDe',
        '__esModule',
        'ERR_NO_GRO',
        'NO_EXISTS',
        'findOne',
        '48RGBQDb',
        '780756dxaWdX',
        'erty',
        'UP_FOUND',
        'tenantId',
        'sAgUR',
        'fault',
        'where'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x13b)) / (-0x2 * 0xbbf + 0x196b + 0x6 * -0x52) + parseInt(o(0x132)) / (0x1184 + -0xd42 + -0x40 * 0x11) + parseInt(p(0x131)) / (-0x1327 + -0x1355 * 0x1 + -0x3 * -0xcd5) * (-parseInt(p(0x12a)) / (-0xb64 + -0x17 * -0x15b + -0x13c5)) + -parseInt(o(0x13a)) / (-0x152d + -0x1a0a + 0xbcf * 0x4) + -parseInt(p(0x13d)) / (0x1ac0 + 0xaac + -0x2566) * (-parseInt(p(0x125)) / (-0x2 * 0x124 + 0x120 * -0x1f + 0x252f)) + -parseInt(p(0x129)) / (-0xf65 + -0x1acf + 0x2a3c) + -parseInt(o(0x127)) / (-0x12 * 0x17e + -0x11d1 + 0x2cb6) * (-parseInt(o(0x128)) / (0x904 * 0x2 + 0x1177 + -0x139 * 0x1d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7cc17 + 0x6252c + -0x6fe1 * -0xd));
var __importDefault = this && this[q(0x12c) + r(0x137)] || function (c) {
    const s = r;
    return c && c[s(0x12d)] ? c : { 'default': c };
};
const k = {};
k[q(0x121)] = !![], Object[q(0x122) + r(0x133)](exports, q(0x12d), k);
const AppError_1 = __importDefault(require(q(0x123) + q(0x13f) + 'r')), Group_1 = __importDefault(require(r(0x13e) + q(0x12b))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x124)] = u(0x12e) + u(0x134), h[u(0x136)] = u(0x13c) + u(0x12f);
        const i = h, j = {};
        j['id'] = f, j[u(0x135)] = g;
        const l = {};
        l[u(0x138)] = j;
        const m = await Group_1[t(0x126)][u(0x130)](l);
        if (!m)
            throw new AppError_1[(t(0x126))](i[t(0x124)], -0x114 * -0x4 + 0x1b1 + -0x46d * 0x1);
        try {
            await m[t(0x139)]();
        } catch (n) {
            throw new AppError_1[(t(0x126))](i[u(0x136)], -0x1103 + -0x119 * 0x2 + 0x14c9);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2301 + 0x1 * -0x7a + -0x2166);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0x126)] = DeleteGroupService;