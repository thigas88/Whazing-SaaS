'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x82)) / (-0x1d * 0x6b + 0x25 * 0x2 + 0xbd6) * (parseInt(p(0x76)) / (-0x1 * -0x188d + -0x546 + -0x1345 * 0x1)) + parseInt(p(0x7d)) / (0x1468 + 0x1 * -0x161 + -0x1304) * (parseInt(q(0x80)) / (0x84 * 0x2f + 0x12e6 + -0x2b1e)) + parseInt(p(0x85)) / (-0x68d + 0x24eb * -0x1 + 0x2b7d) + -parseInt(q(0x77)) / (0x1540 + 0x29d + 0x11 * -0x167) + parseInt(p(0x7c)) / (-0x21e6 + -0x3 * 0xaa9 + 0x41e8) + parseInt(q(0x79)) / (0x1932 * 0x1 + -0x1 * -0x2659 + -0x47 * 0xe5) + parseInt(q(0x88)) / (-0x141 * -0x1b + -0x1240 + -0x1 * 0xf92) * (-parseInt(q(0x84)) / (-0x36 + -0x21e + -0x65 * -0x6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x85d1c + -0xcd02 * -0x1 + 0xc139e));
var __importDefault = this && this[r(0x8d) + s(0x86)] || function (c) {
    const t = r;
    return c && c[t(0x89)] ? c : { 'default': c };
};
function a() {
    const w = [
        'istProtoco',
        'value',
        'lService',
        '../service',
        '2DHRFVu',
        '138900ibbZxQ',
        'pageNumber',
        '3263920FRCmCP',
        'json',
        'protocols',
        '1458037lYlPAZ',
        '147657NkhPPw',
        'user',
        'searchPara',
        '48qngOMc',
        'hasMore',
        '977iSPEQM',
        'default',
        '10ZWyKyG',
        '2340595yBoTxm',
        'fault',
        'count',
        '12213387LYYhhe',
        '__esModule',
        'listProtoc',
        'Services/L',
        'erty',
        '__importDe',
        'defineProp',
        's/Protocol',
        'query',
        'tenantId'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x53c * -0x1 + -0x3ca + 0x975);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x73)] = !![], Object[s(0x8e) + s(0x8c)](exports, r(0x89), k), exports[r(0x8a) + 'ol'] = void (0x23de * -0x1 + 0x964 + 0x1a7a);
const ListProtocolService_1 = __importDefault(require(s(0x75) + r(0x6f) + r(0x8b) + r(0x72) + s(0x74))), listProtocol = async (e, f) => {
        const u = r, v = s, {tenantId: g} = e[u(0x7e)], {
                searchParam: h,
                pageNumber: i
            } = e[v(0x70)], j = {};
        j[u(0x7f) + 'm'] = h, j[v(0x78)] = i, j[u(0x71)] = g;
        const {
                protocols: l,
                count: m,
                hasMore: n
            } = await (-0x1be7 + -0x218e + 0x3d75, ListProtocolService_1[v(0x83)])(j), o = {};
        return o[v(0x7b)] = l, o[v(0x87)] = m, o[u(0x81)] = n, f[v(0x7a)](o);
    };
exports[r(0x8a) + 'ol'] = listProtocol;