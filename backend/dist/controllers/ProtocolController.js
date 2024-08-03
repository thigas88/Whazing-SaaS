'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd29 * 0x1 + -0x22f6 + 0x16b8);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xf3)) / (-0x1f * -0x1f + -0x229a + 0x1eda) * (-parseInt(q(0x109)) / (0x223e + -0x35 * -0x43 + 0x1009 * -0x3)) + -parseInt(q(0xfb)) / (-0x1c23 + 0x1a49 * -0x1 + -0xae3 * -0x5) * (-parseInt(p(0xf5)) / (0x493 * -0x8 + -0x3ce + 0xe * 0x2e3)) + -parseInt(p(0x100)) / (-0x18b0 + -0x11c1 + -0xa * -0x43f) * (-parseInt(q(0xf7)) / (-0x37 * 0x21 + 0x1793 + 0x1076 * -0x1)) + parseInt(q(0x105)) / (-0x1 * 0x1b4f + -0xe4d + -0xb * -0x3c9) + parseInt(p(0x10a)) / (0x611 * -0x3 + -0x891 * 0x4 + 0x347f) + parseInt(q(0xf4)) / (0x13d2 + 0x67c + -0x541 * 0x5) + -parseInt(q(0x102)) / (-0x1726 + 0xa3 * 0x3d + -0xfa7 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xb9bf2 + 0x155b6b + -0x23 * 0x982f));
var __importDefault = this && this[r(0xff) + s(0xf6)] || function (c) {
    const t = r;
    return c && c[t(0x103)] ? c : { 'default': c };
};
const k = {};
k[s(0xeb)] = !![], Object[r(0xfc) + s(0xfa)](exports, r(0x103), k), exports[s(0xfe) + 'ol'] = void (0x10af + -0x1fc9 + 0xf1a);
function a() {
    const w = [
        'count',
        '46257870glMCTY',
        '__esModule',
        '../service',
        '3665795waRfFM',
        'Services/L',
        'user',
        'json',
        '2sNcGOz',
        '12074064YhXrrQ',
        'value',
        'searchPara',
        'pageNumber',
        'default',
        'query',
        'hasMore',
        'tenantId',
        'istProtoco',
        '1229502RRgSLn',
        '12407895BCSDHm',
        '149272MUuZkf',
        'fault',
        '6xmKCQy',
        's/Protocol',
        'lService',
        'erty',
        '15saxUsB',
        'defineProp',
        'protocols',
        'listProtoc',
        '__importDe',
        '2975045TGjeqN'
    ];
    a = function () {
        return w;
    };
    return a();
}
const ListProtocolService_1 = __importDefault(require(s(0x104) + r(0xf8) + s(0x106) + s(0xf2) + r(0xf9))), listProtocol = async (e, f) => {
        const u = s, v = s, {tenantId: g} = e[u(0x107)], {
                searchParam: h,
                pageNumber: i
            } = e[v(0xef)], j = {};
        j[u(0xec) + 'm'] = h, j[v(0xed)] = i, j[v(0xf1)] = g;
        const {
                protocols: l,
                count: m,
                hasMore: n
            } = await (-0x18a9 * 0x1 + 0x3 * -0x40b + 0x24ca, ListProtocolService_1[v(0xee)])(j), o = {};
        return o[v(0xfd)] = l, o[v(0x101)] = m, o[v(0xf0)] = n, f[u(0x108)](o);
    };
exports[s(0xfe) + 'ol'] = listProtocol;