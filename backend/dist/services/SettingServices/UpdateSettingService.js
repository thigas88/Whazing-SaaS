'use strict';
const r = b, s = b;
function a() {
    const w = [
        'value',
        'key',
        '__importDe',
        '41188gRuexy',
        'defineProp',
        '191520DBrpnA',
        '446958PbxIcC',
        'create',
        'default',
        'ls/Setting',
        '3420465tomjJu',
        '49ZuwgBS',
        'update',
        '23473970eQgsGf',
        '477591LiyTjx',
        '80CtICTm',
        'where',
        'findOne',
        '../../mode',
        '1793838CFtnxt',
        '24GKOqbs',
        'erty',
        '__esModule',
        'tenantId',
        'fault'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x18c)) / (0x2ba + -0x1433 * 0x1 + 0x2 * 0x8bd) * (parseInt(p(0x184)) / (-0xa6 * 0x9 + 0x782 + 0x1 * -0x1aa)) + -parseInt(p(0x18f)) / (-0x2 * 0x507 + -0x1875 + -0x1143 * -0x2) * (-parseInt(p(0x195)) / (-0x21e3 + -0x1c4 * 0x1 + -0x1 * -0x23ab)) + -parseInt(p(0x18b)) / (0x1 * -0x377 + 0x1 * 0x100f + -0x1d * 0x6f) + -parseInt(p(0x194)) / (-0x1c5 * 0x14 + 0x20c0 + 0x2aa) + parseInt(p(0x186)) / (-0x851 * -0x1 + 0x117d + -0x19c7) + parseInt(p(0x190)) / (0xe * -0x1c0 + -0x141b + 0x2ca3) * (-parseInt(q(0x187)) / (-0x1e8d + -0x2412 + 0x42a8)) + parseInt(q(0x18e)) / (-0x1d3b + -0x191c + 0x3661);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x27392 + 0x11ff30 + 0x289ad * -0x3));
var __importDefault = this && this[r(0x183) + s(0x180)] || function (c) {
    const t = r;
    return c && c[t(0x197)] ? c : { 'default': c };
};
const k = {};
k[r(0x181)] = !![], Object[r(0x185) + s(0x196)](exports, s(0x197), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x20e6 + 0x1 * 0x1184 + 0x10e1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Setting_1 = __importDefault(require(s(0x193) + s(0x18a))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const u = r, v = r, j = {};
        j[u(0x182)] = g, j[v(0x17f)] = i;
        const l = {};
        l[v(0x191)] = j;
        let m = await Setting_1[u(0x189)][u(0x192)](l);
        if (!m) {
            const n = {};
            n[u(0x182)] = g, n[v(0x181)] = h, n[v(0x17f)] = i, m = await Setting_1[u(0x189)][v(0x188)](n);
        } else {
            const o = {};
            o[v(0x181)] = h, await m[v(0x18d)](o);
        }
        return m;
    };
exports[r(0x189)] = UpdateSettingService;