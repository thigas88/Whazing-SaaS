'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15b6 + -0x1f * 0x10d + 0xc8b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1ca)) / (0x1c27 * 0x1 + 0x1 * -0xa57 + -0x11cf) + parseInt(q(0x1b3)) / (-0x13a0 + 0x1897 + -0x4f5) + parseInt(p(0x1b6)) / (0x2062 + -0x50a + -0x1b55) + -parseInt(p(0x1c5)) / (0x4 * 0x1b2 + -0x1 * -0x1877 + 0xa69 * -0x3) + parseInt(q(0x1b1)) / (-0x11d2 + 0x1299 + -0x61 * 0x2) + -parseInt(p(0x1c7)) / (0xbe3 + 0x1cb + -0xda8) + parseInt(q(0x1c4)) / (-0x6fb + -0x919 * -0x1 + -0x217) * (parseInt(p(0x1c1)) / (0x10f * -0xd + 0x3 * -0xa09 + 0x2be6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15e33d + -0x231 * 0x674 + -0x2 * -0x21d03));
var __importDefault = this && this[r(0x1bf) + r(0x1bc)] || function (c) {
    const t = r;
    return c && c[t(0x1b0)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        '4703368bNzXie',
        'value',
        'listProtoc',
        '7xHVPbL',
        '4686052Qeosln',
        'hasMore',
        '4282056IbMhkw',
        'searchPara',
        'default',
        '434054zbeCdw',
        'erty',
        'istProtoco',
        'pageNumber',
        '__esModule',
        '1211325kChlQI',
        'query',
        '1911944PYeyXa',
        'lService',
        'tenantId',
        '1348896JTXFEy',
        's/Protocol',
        'count',
        'protocols',
        'defineProp',
        'Services/L',
        'fault',
        'json',
        '../service',
        '__importDe',
        'user'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[s(0x1c2)] = !![], Object[r(0x1ba) + s(0x1cb)](exports, s(0x1b0), k), exports[r(0x1c3) + 'ol'] = void (-0x369 * -0x3 + 0x1 * 0xc62 + -0x33b * 0x7);
const ListProtocolService_1 = __importDefault(require(r(0x1be) + r(0x1b7) + s(0x1bb) + r(0x1ae) + r(0x1b4))), listProtocol = async (e, f) => {
        const u = s, v = r, {tenantId: g} = e[u(0x1c0)], {
                searchParam: h,
                pageNumber: i
            } = e[v(0x1b2)], j = {};
        j[u(0x1c8) + 'm'] = h, j[u(0x1af)] = i, j[u(0x1b5)] = g;
        const {
                protocols: l,
                count: m,
                hasMore: n
            } = await (-0x9c + -0x1c4f + 0x1ceb, ListProtocolService_1[v(0x1c9)])(j), o = {};
        return o[u(0x1b9)] = l, o[v(0x1b8)] = m, o[u(0x1c6)] = n, f[u(0x1bd)](o);
    };
exports[s(0x1c3) + 'ol'] = listProtocol;