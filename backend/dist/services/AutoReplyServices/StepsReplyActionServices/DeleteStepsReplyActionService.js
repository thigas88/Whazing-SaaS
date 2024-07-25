'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1f4)) / (0x1 * 0x24fb + -0x796 * -0x1 + -0x10 * 0x2c9) * (parseInt(m(0x1fe)) / (0x224f + -0x1a83 * 0x1 + -0x1 * 0x7ca)) + parseInt(m(0x1ea)) / (-0x9 * -0x79 + -0xb7c + 0x26a * 0x3) * (-parseInt(m(0x1f2)) / (-0x91a * -0x4 + 0x49b * 0x1 + -0x1 * 0x28ff)) + -parseInt(m(0x1e3)) / (0x5e9 + -0x49 * 0x7f + 0x1e53) * (-parseInt(n(0x1fb)) / (-0xe * 0x269 + -0x92e + 0x2af2)) + parseInt(m(0x1e5)) / (-0x249 + 0x19d5 + 0x29d * -0x9) + parseInt(m(0x1fd)) / (0xb50 + 0x51 * -0x59 + 0x10e1) * (parseInt(m(0x1f1)) / (-0x61 * 0xa + -0x1a04 + 0x1dd7)) + -parseInt(n(0x1eb)) / (-0xb2 * 0xa + 0x788 + -0x8a) * (parseInt(n(0x1f8)) / (-0x2160 + 0x2b * -0x1 + -0x10cb * -0x2)) + -parseInt(m(0x1ed)) / (0xa5b + 0x15b3 + 0x1001 * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7a525 + -0xd * -0x7ef7 + -0x2 * -0x3764d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1d2d + -0x3a * 0x6d + 0x29b * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1e6) + o(0x1e1)] || function (c) {
    const q = p;
    return c && c[q(0x1f3)] ? c : { 'default': c };
};
const k = {};
k[o(0x1ec)] = !![], Object[o(0x1f0) + p(0x1ff)](exports, o(0x1f3), k);
function a() {
    const t = [
        '../../../m',
        '66979NbuOnu',
        'destroy',
        'OUND',
        '142584mxIGod',
        '../../../e',
        '160BgXtDg',
        '2ClWSMu',
        'erty',
        'ERR_NO_STE',
        'fault',
        'rror',
        '125BIFQOb',
        'default',
        '2273460EfJoZs',
        '__importDe',
        'ersOJ',
        'rrors/AppE',
        'where',
        '3141iqcvHL',
        '570HplfVD',
        'value',
        '7804524TzadRZ',
        'sReplyActi',
        'PS_REPLY_F',
        'defineProp',
        '5553Dpkkhv',
        '1012VkDnwH',
        '__esModule',
        '706417epneDr',
        'findOne',
        'odels/Step'
    ];
    a = function () {
        return t;
    };
    return a();
}
const StepsReplyAction_1 = __importDefault(require(o(0x1f7) + p(0x1f6) + p(0x1ee) + 'on')), AppError_1 = __importDefault(require(p(0x1fc) + o(0x1e8) + o(0x1e2))), DeleteStepsReplyActionService = async f => {
        const r = p, s = p, g = {};
        g[r(0x1e7)] = s(0x1e0) + r(0x1ef) + s(0x1fa);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x1e9)] = i;
        const l = await StepsReplyAction_1[s(0x1e4)][r(0x1f5)](j);
        if (!l)
            throw new AppError_1[(r(0x1e4))](h[r(0x1e7)], 0x1b01 + -0x16d2 + 0x1 * -0x29b);
        await l[s(0x1f9)]();
    };
exports[o(0x1e4)] = DeleteStepsReplyActionService;