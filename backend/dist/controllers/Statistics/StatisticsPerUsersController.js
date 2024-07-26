'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0x495 + -0x2431 + 0x1259);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
function a() {
    const s = [
        '59733yUJvcb',
        '58390rFgjgT',
        '360150UUQIeh',
        'stics/Stat',
        '20031DbSGMM',
        'isticsPerU',
        'ices/Stati',
        'endDate',
        'user',
        'query',
        '__importDe',
        '1828554Dbxhpj',
        'default',
        '../../serv',
        'tenantId',
        'defineProp',
        '985904HhOqQE',
        'json',
        '__esModule',
        'value',
        'startDate',
        '6vOSDgP',
        'sers',
        'index',
        'erty',
        '44ZDzCFR',
        'fault',
        '2265669rNLsiG'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x8b)) / (-0x23e0 + -0x97c + 0x2d5d) + -parseInt(m(0x84)) / (-0x213e + -0x89f + -0x4a7 * -0x9) * (-parseInt(l(0x8f)) / (-0x4 * 0x21a + -0x296 * -0x3 + 0xa9)) + parseInt(l(0x88)) / (0x2 * 0x8bd + 0x107d + -0x21f3) * (parseInt(l(0x8c)) / (-0xc14 + -0x248d + 0x30a6)) + parseInt(l(0x96)) / (-0x11bd + -0x1a03 + -0xd * -0x35e) + parseInt(l(0x8d)) / (0xf61 * -0x2 + 0x1ba7 + 0x322) + -parseInt(l(0x7f)) / (-0x9a5 + -0x2b1 * -0x5 + -0x3c8) + -parseInt(l(0x8a)) / (0x106e * 0x2 + -0x2 * 0x3be + -0x1957);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2e0 * 0x17 + 0x1c11e + -0x2cf6 * -0x5));
var __importDefault = this && this[n(0x95) + o(0x89)] || function (c) {
    const p = o;
    return c && c[p(0x81)] ? c : { 'default': c };
};
const k = {};
k[o(0x82)] = !![], Object[n(0x7e) + o(0x87)](exports, n(0x81), k), exports[n(0x86)] = void (-0xd8d + 0x2f * -0x12 + 0x10db);
const StatisticsPerUsers_1 = __importDefault(require(o(0x7c) + o(0x91) + n(0x8e) + n(0x90) + o(0x85))), index = async (d, e) => {
        const q = o, r = n, {tenantId: f} = d[q(0x93)], {
                startDate: g,
                endDate: h
            } = d[q(0x94)], i = {};
        i[q(0x83)] = g, i[q(0x92)] = h, i[r(0x7d)] = f;
        const j = await (0x22b3 + 0xa7f * 0x3 + 0x6 * -0xb08, StatisticsPerUsers_1[r(0x97)])(i);
        return e[r(0x80)](j);
    };
exports[o(0x86)] = index;