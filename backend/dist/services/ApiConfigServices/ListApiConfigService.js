'use strict';
function a() {
    const v = [
        'defineProp',
        'apis',
        'default',
        'ASC',
        'ls/ApiConf',
        'where',
        'tenantId',
        'name',
        '8dllPLl',
        '4429929PdOkDM',
        '__esModule',
        'vmzJs',
        '2937711oUkvIo',
        'findAll',
        'order',
        '6728236XAOFcU',
        '__importDe',
        'WEfwS',
        'erty',
        'fault',
        '5vXpRaV',
        '1285180SDqeeR',
        '108olClQg',
        '6097716oeZsko',
        '2122194AZAMey',
        '715643KZhorf',
        '../../mode',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x141 * 0x7 + 0x2103 + -0x168d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1ca)) / (-0x14f6 + 0x4aa * 0x8 + 0x2d * -0x5d) + -parseInt(o(0x1c9)) / (-0x2 * 0x457 + 0xec * 0x18 + -0x4 * 0x35c) + parseInt(p(0x1ba)) / (-0x62c + 0xfa * 0x24 + -0x1cf9) + parseInt(o(0x1c0)) / (0x184f + -0x25e3 + 0xc * 0x122) * (-parseInt(o(0x1c5)) / (-0x2fd + -0x2059 + 0x235b)) + parseInt(o(0x1c8)) / (0xc0a + -0xc9 + 0x7d * -0x17) + parseInt(p(0x1bd)) / (0x8a2 + -0x2 * 0x11dd + -0x35 * -0x83) * (parseInt(p(0x1b9)) / (0x7 * -0x12 + 0x1 * -0x1d3b + 0x1dc1)) + -parseInt(o(0x1c7)) / (0xdbf + 0x2 * 0x1202 + -0x4f9 * 0xa) * (-parseInt(p(0x1c6)) / (-0x1c95 * 0x1 + -0x20df + 0x3d7e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10f653 + 0x9 * 0xa5ef + 0x1 * 0x1a539f));
var __importDefault = this && this[q(0x1c1) + q(0x1c4)] || function (c) {
    const s = q;
    return c && c[s(0x1bb)] ? c : { 'default': c };
};
const k = {};
k[q(0x1b0)] = !![], Object[q(0x1b1) + r(0x1c3)](exports, r(0x1bb), k);
const ApiConfig_1 = __importDefault(require(q(0x1af) + q(0x1b5) + 'ig')), ListApiConfigService = async ({tenantId: g}) => {
        const t = r, u = r, h = {};
        h[t(0x1c2)] = u(0x1b8), h[t(0x1bc)] = t(0x1b4);
        const i = h, j = {};
        j[u(0x1b7)] = g;
        const l = {};
        l[t(0x1b6)] = j, l[t(0x1bf)] = [[
                i[t(0x1c2)],
                i[u(0x1bc)]
            ]];
        const m = await ApiConfig_1[t(0x1b3)][u(0x1be)](l), n = {};
        return n[t(0x1b2)] = m, n;
    };
exports[q(0x1b3)] = ListApiConfigService;