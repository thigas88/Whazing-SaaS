'use strict';
const q = b, r = b;
function a() {
    const v = [
        'default',
        '192040erzwYN',
        'defineProp',
        'erty',
        '441233PFKcdm',
        '9IEqqqz',
        'ls/ApiConf',
        '__esModule',
        'tenantId',
        'order',
        'findAll',
        'ASC',
        'where',
        '1QAmybH',
        'apis',
        '96pyVsuh',
        '265028gPZGCj',
        'name',
        'value',
        'XuDNQ',
        'dyKNI',
        '166131WroONK',
        '18MsAilC',
        '../../mode',
        '1243048yhKOlC',
        '6XORJJE',
        '48466RxgYej',
        '__importDe',
        '380498lAcLEd',
        '40sInNZy',
        'fault'
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
            const f = parseInt(o(0x9e)) / (-0xb * 0x2fd + 0x21ed + -0x1 * 0x10d) * (-parseInt(o(0xad)) / (0x2e1 + 0x2df + -0x1ea * 0x3)) + parseInt(o(0xaa)) / (-0xb * 0x329 + 0xad * 0x4 + 0x2012) * (-parseInt(p(0xa1)) / (0x1e8e + -0x1c31 * 0x1 + -0x259)) + -parseInt(p(0x92)) / (-0x2fc + -0x2 * -0xb15 + -0x1329) + parseInt(p(0xa7)) / (0x3 * -0xb86 + -0x2e * 0x25 + 0x293e) * (parseInt(p(0xa6)) / (-0xf * 0xc7 + 0x158 * 0x12 + 0xc80 * -0x1)) + -parseInt(p(0xa9)) / (0x2 * -0xaee + -0x6 * -0x39a + 0x18 * 0x3) * (-parseInt(p(0x96)) / (-0xaed + -0x207e + 0x2b74)) + parseInt(o(0xae)) / (-0xec2 + 0xf85 + -0xb9) * (parseInt(p(0xab)) / (0xc2e + 0x37 * -0x4f + -0x1 * -0x4d6)) + -parseInt(o(0xa0)) / (0xa * 0x392 + -0x8fa + -0xa * 0x2ab) * (-parseInt(p(0x95)) / (-0xa8e + 0x2 * -0x355 + 0x1145));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x44e05 + -0x1b778 + 0x4309f * 0x2));
var __importDefault = this && this[q(0xac) + q(0x90)] || function (c) {
    const s = r;
    return c && c[s(0x98)] ? c : { 'default': c };
};
const k = {};
k[r(0xa3)] = !![], Object[q(0x93) + r(0x94)](exports, r(0x98), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x236e + 0x2165 + 0x4b * -0xe9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const ApiConfig_1 = __importDefault(require(r(0xa8) + r(0x97) + 'ig')), ListApiConfigService = async ({tenantId: g}) => {
        const t = q, u = q, h = {};
        h[t(0xa4)] = u(0xa2), h[t(0xa5)] = u(0x9c);
        const i = h, j = {};
        j[u(0x99)] = g;
        const l = {};
        l[t(0x9d)] = j, l[t(0x9a)] = [[
                i[u(0xa4)],
                i[t(0xa5)]
            ]];
        const m = await ApiConfig_1[u(0x91)][t(0x9b)](l), n = {};
        return n[t(0x9f)] = m, n;
    };
exports[q(0x91)] = ListApiConfigService;