'use strict';
const q = b, r = b;
function a() {
    const v = [
        'ASC',
        'name',
        '2962134lCqMke',
        'ls/ApiConf',
        'defineProp',
        'where',
        '604875qrPgOA',
        '222389aRxmku',
        '68028UUwprX',
        'default',
        'tenantId',
        '42MuNeEn',
        'findAll',
        'fault',
        '__importDe',
        '872826vRdATR',
        '6060200HoMetB',
        'apis',
        'erty',
        'value',
        '__esModule',
        '4bafSWA',
        'order',
        '8gArQaf',
        '4917177vpBpgc',
        'snCYz',
        '../../mode',
        'zciEi'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x12b)) / (-0x9e * 0x8 + 0x1 * -0x2065 + -0xb1 * -0x36) * (-parseInt(o(0x11d)) / (0x1f9 * -0x3 + -0x4d6 * 0x8 + -0x9 * -0x4f5)) + parseInt(p(0x12f)) / (-0x1 * -0x24 + 0x45 * 0x33 + -0xde0 * 0x1) * (-parseInt(o(0x12c)) / (0x11e9 + -0x2442 + -0x61f * -0x3)) + parseInt(p(0x12a)) / (0x2 * 0x742 + -0x2a6 + 0x3 * -0x3f3) + parseInt(o(0x117)) / (-0x1 * 0x11f1 + -0x211b + 0x3312) + -parseInt(p(0x126)) / (0x1468 + 0x2489 + -0x38ea) + -parseInt(o(0x11f)) / (0xdb4 + 0x17b * 0x17 + -0x2fb9) * (-parseInt(o(0x120)) / (-0xb55 * -0x3 + 0x1d01 + -0xc7 * 0x51)) + parseInt(o(0x118)) / (-0xf9d + -0x17d * -0xf + -0x2 * 0x356);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2156d + -0x15 * 0x635b + 0x2b1 * 0x407));
var __importDefault = this && this[q(0x116) + r(0x115)] || function (c) {
    const s = r;
    return c && c[s(0x11c)] ? c : { 'default': c };
};
const k = {};
k[q(0x11b)] = !![], Object[q(0x128) + r(0x11a)](exports, q(0x11c), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x13a + 0x1 * 0x14bf + -0x14e5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const ApiConfig_1 = __importDefault(require(q(0x122) + r(0x127) + 'ig')), ListApiConfigService = async ({tenantId: g}) => {
        const t = r, u = r, h = {};
        h[t(0x121)] = t(0x125), h[t(0x123)] = t(0x124);
        const i = h, j = {};
        j[u(0x12e)] = g;
        const l = {};
        l[u(0x129)] = j, l[t(0x11e)] = [[
                i[u(0x121)],
                i[u(0x123)]
            ]];
        const m = await ApiConfig_1[u(0x12d)][u(0x114)](l), n = {};
        return n[t(0x119)] = m, n;
    };
exports[q(0x12d)] = ListApiConfigService;