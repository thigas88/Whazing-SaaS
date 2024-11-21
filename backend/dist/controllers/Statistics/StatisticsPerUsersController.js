'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x70)) / (-0x14f * -0x8 + 0xf7a + -0x1d * 0xe5) + -parseInt(l(0x74)) / (-0x79a + 0xbbe + -0x422) * (parseInt(m(0x80)) / (-0xf53 + -0x1 * -0xd73 + 0x1e3)) + parseInt(m(0x7a)) / (-0x1 * -0x201d + -0x2 * -0x6ae + -0x2d75) * (parseInt(l(0x73)) / (0x3e * 0x65 + -0x1bf * -0x7 + 0x26 * -0xf7)) + parseInt(m(0x85)) / (-0x6 * 0x305 + 0x697 * 0x5 + -0xecf) + -parseInt(m(0x7b)) / (-0x714 + 0x1589 + -0xe6e) + parseInt(m(0x79)) / (-0x955 + 0x1aba * 0x1 + -0x115d) + parseInt(l(0x75)) / (0x341 + 0x3 * -0x32e + -0x652 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4f * 0x1c9 + 0x1 * 0x651ea + 0x4e93e * 0x1));
var __importDefault = this && this[n(0x6c) + n(0x6e)] || function (c) {
    const p = n;
    return c && c[p(0x7e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x2443 + 0x336 + -0x1387 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x6b)] = !![], Object[n(0x72) + n(0x7f)](exports, n(0x7e), k), exports[o(0x71)] = void (-0x881 + -0x1cbb * -0x1 + -0x143a);
function a() {
    const s = [
        'index',
        'defineProp',
        '130OfEPop',
        '2PyIclU',
        '5462847naIzPG',
        'user',
        'ices/Stati',
        'sers',
        '8728720KOiShH',
        '150504TRflee',
        '9255589NtdOoE',
        'default',
        'startDate',
        '__esModule',
        'erty',
        '1758405xbZQdZ',
        'stics/Stat',
        'query',
        '../../serv',
        'json',
        '4172304VxgcVg',
        'isticsPerU',
        'value',
        '__importDe',
        'tenantId',
        'fault',
        'endDate',
        '763434azXumr'
    ];
    a = function () {
        return s;
    };
    return a();
}
const StatisticsPerUsers_1 = __importDefault(require(o(0x83) + n(0x77) + o(0x81) + n(0x86) + o(0x78))), index = async (d, e) => {
        const q = n, r = o, {tenantId: f} = d[q(0x76)], {
                startDate: g,
                endDate: h
            } = d[r(0x82)], i = {};
        i[r(0x7d)] = g, i[q(0x6f)] = h, i[r(0x6d)] = f;
        const j = await (-0x17a5 + 0x1aa4 + -0x2ff, StatisticsPerUsers_1[r(0x7c)])(i);
        return e[q(0x84)](j);
    };
exports[o(0x71)] = index;