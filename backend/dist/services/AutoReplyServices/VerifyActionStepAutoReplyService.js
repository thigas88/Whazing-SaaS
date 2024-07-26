'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3bd * -0x3 + 0x2623 + -0x1a72);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x8d)) / (0x2 * -0x5ed + -0xb3 * -0x2b + 0x29a * -0x7) * (parseInt(n(0x98)) / (-0x1657 + 0x4a3 + 0x11b6)) + parseInt(n(0x84)) / (-0x235d + -0x1c63 + 0x1 * 0x3fc3) * (parseInt(n(0x8a)) / (0x1 * -0x1d5 + -0xd56 + 0xf2f)) + -parseInt(m(0x81)) / (0x3 * 0x9a5 + 0x142f + -0x3119) + parseInt(m(0x97)) / (-0x1 * 0xdd3 + 0x1fd0 + -0x11f7) + parseInt(m(0x9a)) / (0x1fa2 * 0x1 + -0x524 * 0x6 + -0x5 * 0x27) * (-parseInt(n(0x90)) / (-0x1031 + 0x2a * 0x17 + -0x1 * -0xc73)) + -parseInt(m(0x96)) / (0x10 * 0x3f + -0x1 * 0x177b + -0x1394 * -0x1) + parseInt(m(0x93)) / (-0x1868 + -0x748 + 0x106 * 0x1f) * (parseInt(n(0x85)) / (-0x1 * 0x1ab3 + 0x10a6 + 0x4 * 0x286));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x13ed7 + -0xb4995 * 0x1 + 0x10dd21));
function a() {
    const t = [
        '__importDe',
        'col',
        'ply',
        'defineProp',
        'stepsReply',
        'where',
        'lDybR',
        'fault',
        '2540640etHRTY',
        'value',
        'autoReply',
        '241611xUlvEB',
        '341ugjEWH',
        'AJjpW',
        'lower',
        'erty',
        '../../mode',
        '44UlHsux',
        'ls/StepsRe',
        'sequelize',
        '151sVINYT',
        'STacm',
        'findOne',
        '2384ZIWrec',
        'JShFo',
        '__esModule',
        '196310VYrghh',
        'plyAction',
        'default',
        '7209558zIgafW',
        '2656530IBbukN',
        '4100GitFut',
        'tenantId',
        '11522zWKDNx',
        'ls/AutoRep',
        'words'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x9d) + p(0x80)] || function (c) {
    const q = o;
    return c && c[q(0x92)] ? c : { 'default': c };
};
const k = {};
k[p(0x82)] = !![], Object[p(0x7c) + p(0x88)](exports, o(0x92), k);
const sequelize_1 = require(p(0x8c)), AutoReply_1 = __importDefault(require(o(0x89) + o(0x9b) + 'ly')), StepsReply_1 = __importDefault(require(o(0x89) + p(0x8b) + p(0x7b))), StepsReplyAction_1 = __importDefault(require(o(0x89) + p(0x8b) + o(0x94))), VerifyActionStepAutoReplyService = async (e, f, g) => {
        const r = p, s = p, h = {};
        h[r(0x86)] = s(0x87), h[r(0x7f)] = r(0x9c), h[r(0x8e)] = s(0x7d), h[s(0x91)] = r(0x83);
        const i = h;
        if (!f)
            return null;
        const j = {};
        j[r(0x99)] = g;
        const l = await StepsReplyAction_1[r(0x95)][r(0x8f)]({
            'where': {
                'stepReplyId': e,
                'words': (-0x3 * -0x4ec + -0x1bd0 + 0xd0c, sequelize_1[r(0x7e)])((-0xb18 + -0xab3 + 0x15cb, sequelize_1['fn'])(i[r(0x86)], (0x63a + -0xdb * -0x2 + -0x7f * 0x10, sequelize_1[s(0x7a)])(i[r(0x7f)])), (-0xb * 0x1bb + 0x1 * -0x9f8 + 0x1d01, sequelize_1['fn'])(i[r(0x86)], f))
            },
            'include': [{
                    'model': StepsReply_1[r(0x95)],
                    'as': i[s(0x8e)],
                    'include': [{
                            'model': AutoReply_1[s(0x95)],
                            'as': i[r(0x91)],
                            'where': j
                        }]
                }]
        });
        return l;
    };
exports[o(0x95)] = VerifyActionStepAutoReplyService;