'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x13f)) / (0xc40 + 0x1a * 0x30 + -0x9 * 0x1e7) * (-parseInt(m(0x145)) / (0xcdf * 0x1 + 0x20a5 + -0x2d82)) + parseInt(n(0x14e)) / (0x36f * 0x1 + 0x26eb + -0x2a57 * 0x1) + -parseInt(m(0x151)) / (0x23bc + 0x65f + 0x2a17 * -0x1) + -parseInt(m(0x148)) / (0x62 * -0x5 + -0x894 + 0xa83) + -parseInt(m(0x13a)) / (-0x8 * -0x73 + -0x371 * -0x3 + -0xde5) * (parseInt(n(0x13e)) / (0x817 + 0x12d1 * -0x1 + 0xac1)) + -parseInt(m(0x14a)) / (0x75a * 0x2 + -0x35 * 0x5 + 0xda3 * -0x1) + parseInt(m(0x14d)) / (-0x3 * 0x854 + -0x22 * 0xc1 + 0x32a7 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc768e + -0x2d7ec + 0x19ab2b));
var __importDefault = this && this[o(0x146) + o(0x149)] || function (c) {
    const q = p;
    return c && c[q(0x150)] ? c : { 'default': c };
};
function a() {
    const t = [
        'defineProp',
        '1962905XBAHyp',
        'fault',
        '7981232JMYAJb',
        '../../mode',
        'default',
        '36901323gzlqME',
        '2086350xvyTIb',
        'destroy',
        '__esModule',
        '4844532zIGQSU',
        'value',
        'eadhk',
        '2094FJstDz',
        'where',
        'findOne',
        'ERR_NO_TAS',
        '18977WFEPlz',
        '189667XgGbFn',
        'erty',
        '../../erro',
        'K_FOUND',
        'ls/Tasks',
        'rs/AppErro',
        '6WUaEYt',
        '__importDe'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2a * 0x57 + 0x3 * -0x16f + -0x8c1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x138)] = !![], Object[o(0x147) + p(0x140)](exports, o(0x150), k);
const Tasks_1 = __importDefault(require(o(0x14b) + p(0x143))), AppError_1 = __importDefault(require(o(0x141) + p(0x144) + 'r')), DeleteTasksService = async f => {
        const r = o, s = o, g = {};
        g[r(0x139)] = s(0x13d) + r(0x142);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x13b)] = i;
        const l = await Tasks_1[s(0x14c)][r(0x13c)](j);
        if (!l)
            throw new AppError_1[(s(0x14c))](h[r(0x139)], 0x2699 * -0x1 + -0x1dea + -0x3 * -0x175d);
        await l[s(0x14f)]();
    };
exports[p(0x14c)] = DeleteTasksService;