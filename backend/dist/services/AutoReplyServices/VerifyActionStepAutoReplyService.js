'use strict';
function a() {
    const t = [
        '1565022mTzGxL',
        'ls/StepsRe',
        '3718586yBONZl',
        '__importDe',
        '../../mode',
        '__esModule',
        'fault',
        'where',
        'default',
        'NXkhP',
        'words',
        'erty',
        '8suASIH',
        'tenantId',
        'sequelize',
        '257856sLtFze',
        '4333326JImfVn',
        'defineProp',
        'ls/AutoRep',
        '8032370zFXYhB',
        'LNEsC',
        'TGWkW',
        'ply',
        'col',
        'findOne',
        'stepsReply',
        '23513959BIMUWJ',
        '4518816wEAptA',
        'value',
        'JZlmr',
        'lower',
        'plyAction',
        'autoReply'
    ];
    a = function () {
        return t;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x8d)) / (-0x143 * -0x2 + -0x1996 + 0x1711) + -parseInt(m(0x8f)) / (-0xb * -0x1d3 + 0x160e + -0x2a1d) + -parseInt(m(0x9c)) / (-0x89 * -0x35 + -0x16c3 * -0x1 + -0xa39 * 0x5) + -parseInt(n(0x87)) / (-0xf78 + -0x1343 + 0x22bf) + -parseInt(m(0xa0)) / (-0x4f * -0x3f + 0xc3 * -0x2b + 0xd55) + parseInt(n(0x9d)) / (0x2 * 0x2b + 0x813 + -0x863 * 0x1) + parseInt(n(0x86)) / (0x22 * -0x4 + 0x1aa7 * 0x1 + -0xa * 0x29c) * (parseInt(m(0x99)) / (-0x59e * 0x2 + -0x1a03 + 0x3 * 0xc6d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x17 * -0xc39d + 0x688b + 0x1fe3ed));
var __importDefault = this && this[o(0x90) + p(0x93)] || function (c) {
    const q = o;
    return c && c[q(0x92)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x5fd + -0x1981 * 0x1 + 0x2cf * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x88)] = !![], Object[p(0x9e) + o(0x98)](exports, o(0x92), k);
const sequelize_1 = require(o(0x9b)), AutoReply_1 = __importDefault(require(o(0x91) + p(0x9f) + 'ly')), StepsReply_1 = __importDefault(require(p(0x91) + o(0x8e) + p(0xa3))), StepsReplyAction_1 = __importDefault(require(p(0x91) + o(0x8e) + o(0x8b))), VerifyActionStepAutoReplyService = async (e, f, g) => {
        const r = o, s = o, h = {};
        h[r(0x96)] = r(0x8a), h[s(0x89)] = s(0x97), h[s(0xa1)] = r(0x85), h[r(0xa2)] = s(0x8c);
        const i = h;
        if (!f)
            return null;
        const j = {};
        j[r(0x9a)] = g;
        const l = await StepsReplyAction_1[s(0x95)][s(0x84)]({
            'where': {
                'stepReplyId': e,
                'words': (-0xaca + 0xbf5 * -0x2 + -0x8ad * -0x4, sequelize_1[s(0x94)])((-0x1 * -0x1435 + 0xed2 + -0x2307, sequelize_1['fn'])(i[r(0x96)], (-0x1 * 0x147e + -0x14ea * -0x1 + -0x12 * 0x6, sequelize_1[s(0xa4)])(i[s(0x89)])), (0x744 * -0x3 + 0x6ed + 0xedf, sequelize_1['fn'])(i[s(0x96)], f))
            },
            'include': [{
                    'model': StepsReply_1[s(0x95)],
                    'as': i[r(0xa1)],
                    'include': [{
                            'model': AutoReply_1[s(0x95)],
                            'as': i[r(0xa2)],
                            'where': j
                        }]
                }]
        });
        return l;
    };
exports[p(0x95)] = VerifyActionStepAutoReplyService;