'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xe3)) / (0x5d7 * -0x5 + 0x26 * -0xfe + -0x10ba * -0x4) + -parseInt(l(0xce)) / (0xc0a * 0x3 + -0x11 * -0x7b + -0x2c47) + parseInt(l(0xd9)) / (-0x16d7 + -0xf11 + 0x25eb) * (-parseInt(l(0xde)) / (0x220 + 0x24e7 + -0x1 * 0x2703)) + parseInt(m(0xdd)) / (0x23de * 0x1 + 0x1a3a + -0x3e13) * (-parseInt(l(0xd7)) / (-0x1 * 0x2187 + -0xfd6 + -0x2f * -0x10d)) + -parseInt(m(0xd1)) / (-0x1703 + -0x1b15 + 0xd * 0x3db) * (parseInt(m(0xdc)) / (0x15 * -0x127 + -0x1303 + -0x2e2 * -0xf)) + -parseInt(m(0xd4)) / (0x3 * 0xc2f + 0x1 * -0x1869 + -0xc1b) + parseInt(l(0xe7)) / (-0x3 * -0x245 + 0x14 * -0x4 + -0x675);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xad3 * -0x13 + -0x106b3a + 0x17d769));
var __importDefault = this && this[n(0xe4) + n(0xe2)] || function (c) {
    const p = o;
    return c && c[p(0xd3)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3bc * -0x7 + 0x37 * -0x96 + 0x874 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '__importDe',
        'ices/Stati',
        'endDate',
        '38648590sWuART',
        'isticsPerU',
        'user',
        'sers',
        '207738evGEyq',
        'startDate',
        'value',
        '7PblWyc',
        'stics/Stat',
        '__esModule',
        '4286556FKlLqj',
        'erty',
        'index',
        '2514ktLTrJ',
        'default',
        '12mRWjeZ',
        'defineProp',
        '../../serv',
        '4121768JAyPSG',
        '9710xEGvMN',
        '1004440IcrGIO',
        'query',
        'json',
        'tenantId',
        'fault',
        '412251YSRwRu'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[n(0xd0)] = !![], Object[o(0xda) + o(0xd5)](exports, n(0xd3), k), exports[o(0xd6)] = void (0x254 * 0x2 + -0x111f + -0x1 * -0xc77);
const StatisticsPerUsers_1 = __importDefault(require(o(0xdb) + n(0xe5) + o(0xd2) + n(0xe8) + n(0xea))), index = async (d, e) => {
        const q = o, r = n, {tenantId: f} = d[q(0xe9)], {
                startDate: g,
                endDate: h
            } = d[r(0xdf)], i = {};
        i[q(0xcf)] = g, i[r(0xe6)] = h, i[r(0xe1)] = f;
        const j = await (-0x180 + 0x1d * 0x56 + -0x83e, StatisticsPerUsers_1[q(0xd8)])(i);
        return e[q(0xe0)](j);
    };
exports[n(0xd6)] = index;