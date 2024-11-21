'use strict';
const I = b, J = b;
function a() {
    const N = [
        '771CQkyjc',
        '587637smvzld',
        'gte',
        'KmulL',
        'owner',
        'ls/Tasks',
        '4810790XBUrKY',
        'delayed',
        'ibtlJ',
        '14528096qrcaJq',
        'value',
        'limitDate',
        'default',
        '6qynphq',
        'sequelize',
        '232fLLKxB',
        'getDate',
        'fault',
        'count',
        '594558BGxJae',
        'status',
        'setDate',
        'setHours',
        'defineProp',
        '__importDe',
        '12vRNVne',
        '__esModule',
        'tenantId',
        '4696104XbuapL',
        'erty',
        'finished',
        'venceHoje',
        '15568csCDlb',
        'where',
        '7163690Xsxgyt',
        '../../mode'
    ];
    a = function () {
        return N;
    };
    return a();
}
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x18c)) / (0x7e9 + -0x1aa1 + 0x12b9) * (parseInt(H(0x16e)) / (-0xbbf + 0x3 * -0x385 + -0x38 * -0x66)) + -parseInt(G(0x17f)) / (0x2 * 0x117f + -0x541 + -0x1dba) * (parseInt(G(0x17b)) / (0x538 + 0x23 * -0xbb + 0x145d * 0x1)) + parseInt(G(0x185)) / (-0x1d60 + -0x1 * 0x1807 + 0x4 * 0xd5b) * (parseInt(G(0x174)) / (0x1 * -0x1c2a + 0x1 * -0x1f7 + 0x1e27)) + -parseInt(H(0x177)) / (0x11b0 + -0x1835 + 0x68c) + parseInt(H(0x18e)) / (0xf0a + 0x330 * -0xc + 0x1 * 0x173e) * (parseInt(H(0x180)) / (-0x13 * -0x1c3 + -0x41b * -0x6 + -0x3a12)) + -parseInt(H(0x17d)) / (-0xbb7 + 0xb86 + -0x1 * -0x3b) + parseInt(H(0x188)) / (0x2403 + 0x23ac + -0x47a4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1731c + -0x73f55 + -0x6da5d * -0x3));
var __importDefault = this && this[I(0x173) + J(0x190)] || function (c) {
    const K = J;
    return c && c[K(0x175)] ? c : { 'default': c };
};
const k = {};
k[I(0x189)] = !![], Object[I(0x172) + I(0x178)](exports, I(0x175), k);
const sequelize_1 = require(I(0x18d)), Tasks_1 = __importDefault(require(J(0x17e) + J(0x184))), GetTaskSummaryService = async ({
        tenantId: n,
        owner: o
    }) => {
        const L = I, M = J, p = {};
        p[L(0x182)] = function (E, F) {
            return E + F;
        }, p[M(0x187)] = L(0x179);
        const q = p, r = new Date();
        r[L(0x171)](0x2c + -0x102a + 0xffe, 0x213c + 0xbaf + 0xef9 * -0x3, -0x986 + 0x22ad + -0x2f * 0x89, -0x1 * -0xa13 + -0x1bec + 0x11d9);
        const s = new Date(r);
        s[M(0x170)](q[L(0x182)](r[M(0x18f)](), 0x952 + 0x15d3 + -0x1f24));
        const t = { [sequelize_1['Op']['lt']]: r }, u = { [sequelize_1['Op']['ne']]: q[L(0x187)] }, v = {};
        v[M(0x176)] = n, v[M(0x183)] = o, v[L(0x18a)] = t, v[M(0x16f)] = u;
        const w = {};
        w[M(0x17c)] = v;
        const x = await Tasks_1[L(0x18b)][L(0x191)](w), y = {
                [sequelize_1['Op'][M(0x181)]]: r,
                [sequelize_1['Op']['lt']]: s
            }, z = { [sequelize_1['Op']['ne']]: q[L(0x187)] }, A = {};
        A[M(0x176)] = n, A[L(0x183)] = o, A[M(0x18a)] = y, A[M(0x16f)] = z;
        const B = {};
        B[M(0x17c)] = A;
        const C = await Tasks_1[L(0x18b)][M(0x191)](B), D = {};
        return D[L(0x186)] = x, D[L(0x17a)] = C, D;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f5a + 0x12cb + -0x30b7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[J(0x18b)] = GetTaskSummaryService;