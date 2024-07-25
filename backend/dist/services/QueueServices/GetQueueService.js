'use strict';
const n = b, o = b;
function a() {
    const s = [
        'defineProp',
        'fault',
        'default',
        '../../mode',
        '41732mWgSXi',
        'ERR_NO_QUE',
        '__importDe',
        '__esModule',
        'ls/Queue',
        'value',
        'erty',
        '6508392RDkdiy',
        '../../erro',
        '763ilTMWz',
        '11075960EkAbIN',
        '10ewDtUE',
        '665402VelknB',
        '92556hIznys',
        'findByPk',
        'utFTQ',
        'rs/AppErro',
        '22614rKRmYx',
        '24Qcwsxx',
        '4820445tByhgC',
        'UE_FOUND'
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
            const f = parseInt(l(0x1e8)) / (0x11 * -0x1b1 + 0x12af * -0x1 + 0x6c7 * 0x7) + -parseInt(m(0x1dc)) / (-0x196d + -0xf6 * 0xb + 0xd * 0x2c5) * (-parseInt(l(0x1d5)) / (-0x1451 + -0x9f7 * -0x1 + -0x1 * -0xa5d)) + parseInt(l(0x1d0)) / (0x5fb + 0x5 * -0x362 + 0xaf3) * (parseInt(l(0x1e7)) / (0x52a * -0x1 + -0x2218 + 0x2747)) + -parseInt(l(0x1d4)) / (0x305 * -0xa + -0x2292 + -0x40ca * -0x1) * (-parseInt(l(0x1e5)) / (-0x2051 + -0x3 * 0x9a + -0x2f * -0xba)) + parseInt(m(0x1e3)) / (-0x167a + 0x116b + 0x517) + -parseInt(m(0x1d6)) / (-0x187d + 0x2112 + -0x88c * 0x1) + -parseInt(l(0x1e6)) / (-0x15bb + -0x3ae * 0x9 + 0x36e3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7b779 + 0xd62c5 + -0xe163d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc58 + 0x170b + 0xf * -0x23d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x1de) + n(0x1d9)] || function (c) {
    const p = n;
    return c && c[p(0x1df)] ? c : { 'default': c };
};
const k = {};
k[o(0x1e1)] = !![], Object[o(0x1d8) + o(0x1e2)](exports, n(0x1df), k);
const AppError_1 = __importDefault(require(n(0x1e4) + o(0x1d3) + 'r')), Queue_1 = __importDefault(require(o(0x1db) + o(0x1e0))), GetQueueService = async d => {
        const q = o, r = o, e = {};
        e[q(0x1d2)] = r(0x1dd) + r(0x1d7);
        const f = e, g = await Queue_1[q(0x1da)][q(0x1d1)](d);
        if (!g)
            throw new AppError_1[(r(0x1da))](f[r(0x1d2)], -0x2 * -0xef + -0x1 * 0x20b + 0x1c1);
        return g;
    };
exports[o(0x1da)] = GetQueueService;