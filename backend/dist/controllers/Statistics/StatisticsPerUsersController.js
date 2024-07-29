'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1bd)) / (0x1 * 0xf6b + 0x21ce + -0xfc * 0x32) + parseInt(m(0x1b5)) / (0x580 + -0x37 * -0x65 + -0x1b31) * (parseInt(l(0x1b3)) / (0xfbf + -0xb65 + -0x1 * 0x457)) + parseInt(l(0x1ab)) / (-0x257f + 0x2395 + 0x1ee) + -parseInt(m(0x1bf)) / (0x1ac6 + 0x4a8 * -0x4 + -0x821) * (-parseInt(l(0x1c0)) / (-0x1 * 0x14e7 + -0x1396 + 0x2883)) + parseInt(m(0x1bb)) / (-0xab * -0x4 + -0xb23 + 0x1 * 0x87e) + parseInt(m(0x1b9)) / (-0xcba + -0x2 * 0xc5 + 0x131 * 0xc) * (-parseInt(l(0x1ae)) / (-0x3 * -0x7e3 + 0x20ab * 0x1 + -0x1 * 0x384b)) + -parseInt(m(0x1a9)) / (0x1416 + 0xef * -0x17 + -0x5 * -0x49);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15d7 * -0x3b + -0xd90f1 + 0xfd984));
var __importDefault = this && this[n(0x1a8) + n(0x1b2)] || function (c) {
    const p = n;
    return c && c[p(0x1b0)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e95 + -0x5 * -0x18d + 0x187b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const s = [
        '../../serv',
        '27XdmdZJ',
        'isticsPerU',
        '__esModule',
        'default',
        'fault',
        '66ggcDRj',
        'json',
        '40504Hojsun',
        'ices/Stati',
        'sers',
        'endDate',
        '564856sAyLwy',
        'user',
        '2948652jjlLpI',
        'erty',
        '716802pRBTWd',
        'tenantId',
        '1069570QfGFhg',
        '12qREdWQ',
        'startDate',
        'query',
        'value',
        'stics/Stat',
        '__importDe',
        '13710470xtojBu',
        'index',
        '203912asJZSd',
        'defineProp'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[n(0x1c3)] = !![], Object[n(0x1ac) + n(0x1bc)](exports, n(0x1b0), k), exports[o(0x1aa)] = void (-0x9aa * -0x1 + 0x1159 * -0x1 + 0x7af);
const StatisticsPerUsers_1 = __importDefault(require(n(0x1ad) + o(0x1b6) + o(0x1a7) + n(0x1af) + o(0x1b7))), index = async (d, e) => {
        const q = o, r = n, {tenantId: f} = d[q(0x1ba)], {
                startDate: g,
                endDate: h
            } = d[q(0x1c2)], i = {};
        i[q(0x1c1)] = g, i[r(0x1b8)] = h, i[q(0x1be)] = f;
        const j = await (0xb * 0x2 + -0x3 * 0xc3a + -0x2 * -0x124c, StatisticsPerUsers_1[q(0x1b1)])(i);
        return e[r(0x1b4)](j);
    };
exports[n(0x1aa)] = index;