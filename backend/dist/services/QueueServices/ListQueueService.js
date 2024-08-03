'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1b7)) / (0xafd * 0x2 + -0x17f * -0x11 + 0x2f68 * -0x1) * (parseInt(m(0x1be)) / (0x29 * -0xd7 + -0x9cc + 0x2c3d * 0x1)) + parseInt(n(0x1b8)) / (0xca6 + -0x529 + -0x77a) * (-parseInt(m(0x1ad)) / (-0x2 * -0x52f + -0x25e1 * 0x1 + 0x92d * 0x3)) + -parseInt(n(0x1b1)) / (-0x1069 * -0x1 + 0x2036 + -0x1 * 0x309a) * (-parseInt(m(0x1c3)) / (-0x1a2f + -0xb26 + -0x83 * -0x49)) + parseInt(n(0x1c1)) / (0x16a6 + 0x413 * -0x7 + 0x5e6) * (parseInt(n(0x1bf)) / (0x10ea + 0x5ef * -0x1 + -0xaf3 * 0x1)) + -parseInt(n(0x1c0)) / (0x2401 + -0x1df3 + -0x605 * 0x1) + parseInt(m(0x1aa)) / (-0xee4 + -0x74 * -0x5 + 0x1 * 0xcaa) + parseInt(m(0x1b4)) / (-0x159f + 0x142e + 0x17c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3105f * -0x5 + -0x1 * -0x3ddaa + 0x1371df));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1dd3 * 0x1 + -0x2 * 0xab + -0x1ad3);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1bd) + o(0x1b5)] || function (c) {
    const q = p;
    return c && c[q(0x1ae)] ? c : { 'default': c };
};
const k = {};
k[p(0x1bb)] = !![], Object[p(0x1c4) + p(0x1ab)](exports, p(0x1ae), k);
function a() {
    const t = [
        'queue',
        '11491139rptqyN',
        'fault',
        'xUDdw',
        '146954hNfXav',
        '2473917YvLtJD',
        'findAll',
        '../../mode',
        'value',
        'where',
        '__importDe',
        '8tYFAHi',
        '24EILHZL',
        '6877134DxiTbU',
        '1176973JIWbVx',
        'ASC',
        '7152VylejU',
        'defineProp',
        'tenantId',
        '6887130iuqOaG',
        'erty',
        'ZsNoC',
        '4VOCYAa',
        '__esModule',
        'default',
        'order',
        '1940uawsqK',
        'ls/Queue'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Queue_1 = __importDefault(require(p(0x1ba) + o(0x1b2))), ListQueueService = async ({tenantId: f}) => {
        const r = o, s = p, g = {};
        g[r(0x1b6)] = r(0x1b3), g[s(0x1ac)] = r(0x1c2);
        const h = g, i = {};
        i[s(0x1c5)] = f;
        const j = {};
        j[s(0x1bc)] = i, j[r(0x1b0)] = [[
                h[r(0x1b6)],
                h[s(0x1ac)]
            ]];
        const l = await Queue_1[s(0x1af)][s(0x1b9)](j);
        return l;
    };
exports[p(0x1af)] = ListQueueService;