'use strict';
function a() {
    const t = [
        'tenantId',
        'col',
        'stepsReply',
        '9917460dIyMnZ',
        'DDmGc',
        'VXcOR',
        '1092816sCiLmK',
        'ls/AutoRep',
        '3038575uhhajV',
        '7920080mNGDwx',
        '2iLQOQD',
        'defineProp',
        'OYGSW',
        'value',
        '6588EPNOnw',
        '694699rlkzPu',
        'default',
        'words',
        'fault',
        '__esModule',
        '244310idsYOe',
        'autoReply',
        'kHkrW',
        '6VvLxHk',
        'plyAction',
        'ply',
        'sequelize',
        '40865TCFlLr',
        '__importDe',
        'ls/StepsRe',
        'findOne',
        '6ebrgeV',
        '324VGUIuB',
        'where',
        '../../mode',
        'lower',
        'erty'
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
            const f = -parseInt(m(0x6f)) / (0x225b * -0x1 + 0x631 * -0x6 + 0x153 * 0x36) * (parseInt(n(0x6a)) / (-0x2b3 + -0x111c + -0x13 * -0x10b)) + parseInt(m(0x7f)) / (0x47 * 0x49 + -0x1980 + 0x544) * (parseInt(m(0x66)) / (0x794 * 0x1 + -0x1b5 * 0x14 + 0x1a94)) + parseInt(m(0x68)) / (-0x1bf1 + 0x2e3 + 0x1913) * (parseInt(m(0x77)) / (0x3b9 * 0x1 + -0x2 * -0x373 + -0xa99)) + -parseInt(m(0x88)) / (-0x644 * -0x6 + 0x397 * -0x7 + 0xc7 * -0x10) + -parseInt(n(0x69)) / (0xec * 0x20 + -0x1a09 + 0x36f * -0x1) + parseInt(m(0x80)) / (-0x7 * 0x281 + 0x1c9 * -0xd + 0xd5 * 0x31) * (parseInt(n(0x74)) / (-0x9 * -0x15a + -0x5 * 0x65b + -0x27 * -0x81)) + parseInt(m(0x7b)) / (-0xebd + -0x1661 + 0x2529) * (parseInt(m(0x6e)) / (-0x74f * -0x2 + -0x2db * 0x9 + 0xb21));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x261d * -0x91 + -0x1 * -0x1203c1 + 0x126651));
var __importDefault = this && this[o(0x7c) + p(0x72)] || function (c) {
    const q = o;
    return c && c[q(0x73)] ? c : { 'default': c };
};
const k = {};
k[o(0x6d)] = !![], Object[o(0x6b) + p(0x84)](exports, p(0x73), k);
const sequelize_1 = require(o(0x7a)), AutoReply_1 = __importDefault(require(o(0x82) + p(0x67) + 'ly')), StepsReply_1 = __importDefault(require(p(0x82) + p(0x7d) + p(0x79))), StepsReplyAction_1 = __importDefault(require(o(0x82) + p(0x7d) + o(0x78))), VerifyActionStepAutoReplyService = async (e, f, g) => {
        const r = p, s = p, h = {};
        h[r(0x89)] = s(0x83), h[s(0x65)] = s(0x71), h[r(0x6c)] = s(0x87), h[s(0x76)] = r(0x75);
        const i = h;
        if (!f)
            return null;
        const j = {};
        j[s(0x85)] = g;
        const l = await StepsReplyAction_1[s(0x70)][s(0x7e)]({
            'where': {
                'stepReplyId': e,
                'words': (-0x24d7 * 0x1 + -0xd7 * 0x2e + 0x4b79, sequelize_1[s(0x81)])((-0x14f * 0xb + 0x3ce * 0x3 + 0x2fb, sequelize_1['fn'])(i[r(0x89)], (0x1330 + -0xd67 + 0x1 * -0x5c9, sequelize_1[s(0x86)])(i[s(0x65)])), (0x160b + 0x15e2 + -0x41 * 0xad, sequelize_1['fn'])(i[s(0x89)], f))
            },
            'include': [{
                    'model': StepsReply_1[s(0x70)],
                    'as': i[s(0x6c)],
                    'include': [{
                            'model': AutoReply_1[r(0x70)],
                            'as': i[r(0x76)],
                            'where': j
                        }]
                }]
        });
        return l;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e03 + 0x1c0a + 0x25e);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0x70)] = VerifyActionStepAutoReplyService;