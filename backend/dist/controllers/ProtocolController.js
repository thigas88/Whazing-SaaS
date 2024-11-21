'use strict';
function a() {
    const w = [
        'hasMore',
        '__importDe',
        's/Protocol',
        'query',
        '3465ynieEM',
        'Services/L',
        '4fJoHlh',
        'istProtoco',
        'value',
        '1110804byNCiu',
        'defineProp',
        'listProtoc',
        '../service',
        'tenantId',
        '195015YAHQGK',
        'lService',
        'default',
        'protocols',
        'searchPara',
        '52544mZTdFv',
        'pageNumber',
        '393631OQvkxl',
        'json',
        'user',
        '__esModule',
        '25486pmzreP',
        'erty',
        'count',
        '61044lenODh',
        'fault'
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
            const f = parseInt(p(0x124)) / (-0x1 * -0x1a3e + -0x420 * 0x2 + -0x11fd) + -parseInt(p(0x127)) / (-0x1094 + 0x128 * -0x10 + -0x5d9 * -0x6) + parseInt(p(0x12d)) / (0x16b7 * 0x1 + -0x39 * 0x1c + 0x83c * -0x2) + -parseInt(p(0x12f)) / (0x9 * 0x381 + 0x21b * 0x6 + -0x1 * 0x2c27) * (-parseInt(q(0x137)) / (0xeff + 0x1fbc + -0x2eb6)) + parseInt(q(0x132)) / (-0x1d21 + 0x1bf1 + 0x136 * 0x1) + -parseInt(p(0x13e)) / (-0xe4 + 0x4f * 0x1e + -0x857) + parseInt(q(0x13c)) / (-0x196c + -0x2197 * -0x1 + -0x823);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x36d * 0x5 + -0x2e214 + 0x56b52));
var __importDefault = this && this[r(0x12a) + r(0x128)] || function (c) {
    const t = r;
    return c && c[t(0x123)] ? c : { 'default': c };
};
const k = {};
k[s(0x131)] = !![], Object[s(0x133) + r(0x125)](exports, s(0x123), k), exports[s(0x134) + 'ol'] = void (-0x693 + 0x780 + 0x1 * -0xed);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1542 + -0xe4 * 0x1a + -0xc2 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const ListProtocolService_1 = __importDefault(require(r(0x135) + r(0x12b) + r(0x12e) + s(0x130) + r(0x138))), listProtocol = async (e, f) => {
        const u = r, v = s, {tenantId: g} = e[u(0x122)], {
                searchParam: h,
                pageNumber: i
            } = e[u(0x12c)], j = {};
        j[u(0x13b) + 'm'] = h, j[v(0x13d)] = i, j[v(0x136)] = g;
        const {
                protocols: l,
                count: m,
                hasMore: n
            } = await (-0xc7 * -0x1d + -0x14e0 + -0x3d * 0x7, ListProtocolService_1[u(0x139)])(j), o = {};
        return o[v(0x13a)] = l, o[v(0x126)] = m, o[u(0x129)] = n, f[u(0x13f)](o);
    };
exports[r(0x134) + 'ol'] = listProtocol;