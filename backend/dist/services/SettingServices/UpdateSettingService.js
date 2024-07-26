'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xa6)) / (-0x1f36 + 0x1 * 0x26b3 + -0x77c) + -parseInt(p(0x99)) / (-0x2 * -0x94d + -0x1ac1 + -0x829 * -0x1) * (-parseInt(p(0xa1)) / (0xbc7 + -0x2320 + -0x175c * -0x1)) + parseInt(p(0x93)) / (0x27 * 0xad + 0x757 * -0x4 + -0x1 * -0x305) * (-parseInt(p(0x9a)) / (0x1563 + 0x1963 * 0x1 + -0x2ec1)) + parseInt(p(0x98)) / (-0x1d6f + -0x1c07 + 0x397c) + -parseInt(p(0x92)) / (0x7ee + -0x13ab * 0x1 + 0xbc4) + parseInt(q(0x9e)) / (0x4d * -0x3b + 0x40 * -0x25 + 0x1b07) * (parseInt(q(0x95)) / (-0x1a75 * -0x1 + 0x29 * -0x1 + -0x1a43)) + parseInt(q(0xa7)) / (-0x176 * -0xa + 0x10f4 + 0x10d * -0x1e) * (parseInt(p(0xa0)) / (0x104b + 0x9 * 0xbc + -0x85 * 0x2c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x44cf5 + -0x29d3 * 0x15 + 0xb6bf4));
var __importDefault = this && this[r(0x9b) + s(0x96)] || function (c) {
    const t = r;
    return c && c[t(0x9c)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e4d + -0x26da * 0x1 + 0x45b8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x9d)] = !![], Object[s(0x91) + r(0x9f)](exports, s(0x9c), k);
const Setting_1 = __importDefault(require(r(0x97) + s(0xa9))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const u = s, v = r, j = {};
        j[u(0xa5)] = g, j[v(0xa4)] = i;
        const l = {};
        l[u(0xa2)] = j;
        let m = await Setting_1[v(0xaa)][u(0xa3)](l);
        if (!m) {
            const n = {};
            n[v(0xa5)] = g, n[v(0x9d)] = h, n[u(0xa4)] = i, m = await Setting_1[u(0xaa)][u(0xa8)](n);
        } else {
            const o = {};
            o[v(0x9d)] = h, await m[u(0x94)](o);
        }
        return m;
    };
function a() {
    const w = [
        'erty',
        '85294EcHlMY',
        '18BzYKFY',
        'where',
        'findOne',
        'tenantId',
        'key',
        '103366juuLxW',
        '680SQgUPC',
        'create',
        'ls/Setting',
        'default',
        'defineProp',
        '2902151Iwlvuv',
        '6964ZaopuB',
        'update',
        '281007OOhZrh',
        'fault',
        '../../mode',
        '1290432dUdqGR',
        '50192EAxAIh',
        '1010KpwYGg',
        '__importDe',
        '__esModule',
        'value',
        '56XALONN'
    ];
    a = function () {
        return w;
    };
    return a();
}
exports[s(0xaa)] = UpdateSettingService;