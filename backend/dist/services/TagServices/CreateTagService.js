'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1cb)) / (0x14dc + -0x1af + -0x4 * 0x4cb) * (parseInt(l(0x1b8)) / (-0x25c6 + -0xf6d + -0x35 * -0x101)) + parseInt(m(0x1c0)) / (0x49 * -0x67 + -0xcbb + 0x2a1d) * (-parseInt(m(0x1c9)) / (-0x75 * -0x5 + -0x1c45 * 0x1 + 0x1a00)) + parseInt(l(0x1c8)) / (0x108b + -0x22cf + 0x1249) * (-parseInt(l(0x1c2)) / (-0x7 * -0x23d + 0x409 * 0x4 + -0x1fc9)) + parseInt(m(0x1bb)) / (-0x107 * 0x15 + 0x1 * -0x3a0 + 0x193a) * (parseInt(m(0x1b7)) / (-0x1 * -0x2a5 + -0x1480 + -0x1 * -0x11e3)) + parseInt(l(0x1c6)) / (-0x1 * 0x7bb + -0xda * -0x8 + -0x1 * -0xf4) * (parseInt(m(0x1b5)) / (0x7fd * -0x4 + -0x1 * -0x1e3d + 0x1 * 0x1c1)) + parseInt(l(0x1c4)) / (-0x27 * -0x25 + -0x1d91 + 0x13 * 0x143) + -parseInt(m(0x1b3)) / (0x4 * 0x641 + -0x22c3 * 0x1 + -0x1 * -0x9cb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1286f7 + 0x35 * -0x3e1d + 0x74a54));
var __importDefault = this && this[n(0x1ba) + o(0x1b9)] || function (c) {
    const p = n;
    return c && c[p(0x1cd)] ? c : { 'default': c };
};
function a() {
    const s = [
        '35GcOpWV',
        '4hRgeGr',
        'color',
        '2EifoCg',
        'value',
        '__esModule',
        '39027240NtoMyq',
        'create',
        '350aHCxvJ',
        'tenantId',
        '3394648nLkEnD',
        '1299262ISATma',
        'fault',
        '__importDe',
        '21yCTaqH',
        'tag',
        'ls/Tag',
        'defineProp',
        'isActive',
        '3616233DSKCTT',
        'userId',
        '90318bssubf',
        '../../mode',
        '15397888WzlQCi',
        'default',
        '370341WnUJsY',
        'erty'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[o(0x1cc)] = !![], Object[n(0x1be) + n(0x1c7)](exports, n(0x1cd), k);
const Tag_1 = __importDefault(require(o(0x1c3) + n(0x1bd))), CreateTagService = async ({
        tag: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = o, r = n, i = {};
        i[q(0x1bc)] = d, i[q(0x1ca)] = e, i[q(0x1bf)] = f, i[r(0x1c1)] = g, i[r(0x1b6)] = h;
        const j = await Tag_1[q(0x1c5)][r(0x1b4)](i);
        return j;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x99e + 0x22f4 + -0x3 * 0x7e1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0x1c5)] = CreateTagService;