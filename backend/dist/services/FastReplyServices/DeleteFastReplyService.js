'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1b0)) / (0x1860 + 0x4 * 0x467 + -0x29fb) + -parseInt(o(0x1aa)) / (-0xb9 * -0x1d + -0x2 * -0x527 + -0x1f41 * 0x1) * (parseInt(p(0x1b7)) / (-0x1e09 + 0x48b + 0x1981)) + -parseInt(p(0x1a7)) / (0x17af + -0x4bd * 0x1 + -0x1 * 0x12ee) + parseInt(p(0x1b8)) / (-0x240c + 0x55 * -0x14 + -0x1 * -0x2ab5) + -parseInt(p(0x1bb)) / (-0xd2b * 0x1 + 0x2293 * 0x1 + -0x1562) * (parseInt(p(0x1c0)) / (-0x2cf * 0xb + 0x2330 + -0x444)) + -parseInt(p(0x1ac)) / (-0x2 * -0x1342 + -0xd7 * 0x23 + -0x917) * (-parseInt(p(0x1c5)) / (-0x4 * -0x34b + 0x754 + -0x1477)) + parseInt(p(0x1bc)) / (0x241 * 0x1 + 0x26d6 + -0x290d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3f91e * -0x4 + -0xf03b1 + 0x274dad));
var __importDefault = this && this[q(0x1ad) + r(0x1b6)] || function (c) {
    const s = q;
    return c && c[s(0x1c1)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a77 + -0xb9e + 0x27bc);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x1ab)] = !![], Object[r(0x1ba) + q(0x1b2)](exports, q(0x1c1), k);
const AppError_1 = __importDefault(require(r(0x1ae) + r(0x1a8) + 'r')), FastReply_1 = __importDefault(require(r(0x1b5) + r(0x1b4) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x1bf)] = u(0x1a9) + t(0x1c3) + t(0x1c4), h[u(0x1c2)] = u(0x1b1) + u(0x1b3) + 'S';
        const i = h, j = {};
        j['id'] = f, j[u(0x1c6)] = g;
        const l = {};
        l[t(0x1bd)] = j;
        const m = await FastReply_1[t(0x1b9)][u(0x1af)](l);
        if (!m)
            throw new AppError_1[(u(0x1b9))](i[t(0x1bf)], -0x1 * 0x6c5 + -0x1 * 0x2008 + -0x1 * -0x2861);
        try {
            await m[u(0x1be)]();
        } catch (n) {
            throw new AppError_1[(t(0x1b9))](i[u(0x1c2)], 0x914 + -0x3 * -0x27 + -0x7f5 * 0x1);
        }
    };
function a() {
    const v = [
        '../../mode',
        'fault',
        '165JzmlFz',
        '2945035ixENNo',
        'default',
        'defineProp',
        '222qwmXoY',
        '35572190YpJYdv',
        'where',
        'destroy',
        'fUQhu',
        '176673gSzYfN',
        '__esModule',
        'KrVZo',
        'T_REPLY_FO',
        'UND',
        '15291KTeIQI',
        'tenantId',
        '3539764XisvlA',
        'rs/AppErro',
        'ERR_NO_FAS',
        '31762CIPuVQ',
        'value',
        '872aySxHb',
        '__importDe',
        '../../erro',
        'findOne',
        '1088902zJMffY',
        'ERR_FAST_R',
        'erty',
        'EPLY_EXIST',
        'ls/FastRep'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[q(0x1b9)] = DeleteFastReplyService;