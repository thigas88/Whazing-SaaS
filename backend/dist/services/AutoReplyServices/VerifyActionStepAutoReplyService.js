'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x135)) / (0x2b6 * 0xb + -0x277 * -0x7 + -0x2f12) * (parseInt(m(0x127)) / (0x16c7 + 0x9bb * -0x1 + -0xd0a)) + parseInt(n(0x12a)) / (0x1981 + -0x18 * 0xc7 + -0x6d6) * (parseInt(n(0x129)) / (-0x118f + 0x531 * 0x7 + 0x12c4 * -0x1)) + parseInt(n(0x122)) / (0x2466 + 0x1c0b + -0x10a * 0x3e) + parseInt(m(0x141)) / (0x6 * 0x17e + 0xf82 * 0x2 + -0x27f2) + parseInt(n(0x13a)) / (-0x18cd + 0x63 * 0x9 + 0x1559) + -parseInt(n(0x126)) / (-0x16 * 0x170 + -0xad4 + -0x153e * -0x2) * (parseInt(m(0x13e)) / (-0x5 * -0x64c + -0x9 * -0x3b3 + 0x2 * -0x205f)) + -parseInt(n(0x138)) / (-0x1c0c * -0x1 + -0x1 * 0x5f2 + 0x2c2 * -0x8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xaf9f1 + 0x4e1 * -0x47 + 0x16adfc));
function a() {
    const t = [
        '6858768gxWKQI',
        'WzvIh',
        'ls/AutoRep',
        'sequelize',
        '2786800xgesmc',
        'ply',
        'default',
        'stepsReply',
        '8UdhPki',
        '2mVQenH',
        '__importDe',
        '2208836nkCadR',
        '6jURksS',
        '__esModule',
        'findOne',
        'bONrt',
        'fault',
        'erty',
        'words',
        'where',
        'col',
        'xGIBe',
        'autoReply',
        '548523agKaCe',
        '../../mode',
        'lower',
        '14203220PDBzjS',
        'value',
        '7374514IREpue',
        'defineProp',
        'azWBr',
        'plyAction',
        '10901295wQfgas',
        'tenantId',
        'ls/StepsRe'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x128) + p(0x12e)] || function (c) {
    const q = p;
    return c && c[q(0x12b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x34 * -0x6a + -0x1456 + -0x11);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0x139)] = !![], Object[p(0x13b) + o(0x12f)](exports, p(0x12b), k);
const sequelize_1 = require(o(0x121)), AutoReply_1 = __importDefault(require(o(0x136) + o(0x143) + 'ly')), StepsReply_1 = __importDefault(require(p(0x136) + o(0x140) + p(0x123))), StepsReplyAction_1 = __importDefault(require(p(0x136) + o(0x140) + o(0x13d))), VerifyActionStepAutoReplyService = async (e, f, g) => {
        const r = p, s = o, h = {};
        h[r(0x13c)] = s(0x137), h[s(0x133)] = r(0x130), h[s(0x142)] = s(0x125), h[s(0x12d)] = s(0x134);
        const i = h;
        if (!f)
            return null;
        const j = {};
        j[s(0x13f)] = g;
        const l = await StepsReplyAction_1[s(0x124)][r(0x12c)]({
            'where': {
                'stepReplyId': e,
                'words': (0xdff + -0x1319 + 0x28d * 0x2, sequelize_1[r(0x131)])((-0x8 * -0x1c2 + -0x144f + -0x7b * -0xd, sequelize_1['fn'])(i[r(0x13c)], (-0x435 + 0x26ae + -0x5 * 0x6e5, sequelize_1[r(0x132)])(i[s(0x133)])), (0xf7b + 0x1 * 0x2442 + 0x5 * -0xa59, sequelize_1['fn'])(i[r(0x13c)], f))
            },
            'include': [{
                    'model': StepsReply_1[r(0x124)],
                    'as': i[s(0x142)],
                    'include': [{
                            'model': AutoReply_1[s(0x124)],
                            'as': i[s(0x12d)],
                            'where': j
                        }]
                }]
        });
        return l;
    };
exports[p(0x124)] = VerifyActionStepAutoReplyService;