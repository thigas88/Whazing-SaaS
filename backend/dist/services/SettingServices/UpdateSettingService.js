'use strict';
function a() {
    const w = [
        'key',
        'create',
        'where',
        '1622590ArtvQu',
        '356myPaLa',
        '__esModule',
        '334426LMVGGF',
        '__importDe',
        'findOne',
        'erty',
        '4JczNGj',
        '../../mode',
        'ls/Setting',
        '671013IPtVQb',
        'default',
        '7fwIIQz',
        '15656892ZZWgWc',
        'fault',
        '11PvtUmM',
        '4895988QMoJyK',
        '1809165TkJhhX',
        'update',
        'value',
        'tenantId',
        'defineProp',
        '32eUHwIP',
        '26045RdtWgP'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xf3)) / (0x2355 + 0xe81 + 0x1 * -0x31d5) * (-parseInt(q(0xef)) / (-0x22f7 * -0x1 + -0x3 * 0x7cc + 0x7 * -0x1a7)) + parseInt(q(0xe2)) / (0x1 * -0x1e3b + 0x79d * 0x5 + -0x1 * 0x7d3) + parseInt(q(0xed)) / (0x9 * -0x14d + 0xc3d + -0x42 * 0x2) * (-parseInt(q(0xe8)) / (0x24d * 0x10 + 0x19b9 + -0x3e84)) + parseInt(p(0xe1)) / (-0x1 * 0x19b + 0x71 + 0x13 * 0x10) * (-parseInt(q(0xdd)) / (0x1fc8 + 0x1 * 0x23ab + -0x436c)) + -parseInt(p(0xe7)) / (0xff + 0xba5 * -0x2 + -0x5 * -0x477) * (-parseInt(p(0xf6)) / (-0x5b3 + -0x13a3 + 0x195f)) + -parseInt(q(0xec)) / (-0x76 * 0x4f + 0xda + 0x239a) * (-parseInt(p(0xe0)) / (0xf57 + -0x1186 + -0x72 * -0x5)) + parseInt(p(0xde)) / (0xf * -0xe7 + -0x26c1 + 0x3456);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc7fb9 * -0x1 + 0x2e74d * 0x2 + -0xbe65b));
var __importDefault = this && this[r(0xf0) + r(0xdf)] || function (c) {
    const t = r;
    return c && c[t(0xee)] ? c : { 'default': c };
};
const k = {};
k[r(0xe4)] = !![], Object[r(0xe6) + s(0xf2)](exports, s(0xee), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x24a8 * -0x1 + -0x138b + 0xa * -0x1a0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Setting_1 = __importDefault(require(r(0xf4) + s(0xf5))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const u = s, v = s, j = {};
        j[u(0xe9)] = g, j[u(0xe5)] = i;
        const l = {};
        l[u(0xeb)] = j;
        let m = await Setting_1[v(0xf7)][u(0xf1)](l);
        if (!m) {
            const n = {};
            n[v(0xe9)] = g, n[u(0xe4)] = h, n[v(0xe5)] = i, m = await Setting_1[u(0xf7)][v(0xea)](n);
        } else {
            const o = {};
            o[u(0xe4)] = h, await m[u(0xe3)](o);
        }
        return m;
    };
exports[r(0xf7)] = UpdateSettingService;