'use strict';
const q = b, r = b;
function a() {
    const v = [
        'destroy',
        'UND',
        '1389283FlltFO',
        '../../mode',
        'where',
        '946780UCQSId',
        '../../erro',
        'EPLY_EXIST',
        'ERR_NO_FAS',
        '2929554ZqYYGs',
        'value',
        'ERR_FAST_R',
        'T_REPLY_FO',
        'erty',
        '5551300KngikU',
        '1145552IMnZOv',
        'tenantId',
        '__esModule',
        'QfWum',
        'fault',
        'findOne',
        '159538Sojhal',
        '16AREINQ',
        '9YJWNxz',
        '__importDe',
        'defineProp',
        'ls/FastRep',
        '1eaTtfp',
        'default',
        'raWgI',
        '936870bLETXC',
        'rs/AppErro'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b2a + -0x17f5 + 0x89 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xa4)) / (0x1f0f * 0x1 + 0xc1b + -0x2b29) * (-parseInt(p(0x9e)) / (0x1 * 0x3b5 + -0x208d + -0x1 * -0x1cda)) + parseInt(p(0xa7)) / (-0x9b * -0x2 + -0x57d * 0x6 + 0x1fbb * 0x1) + parseInt(p(0x98)) / (0xd * -0x2ce + 0x257 * 0x8 + 0x11c2) + parseInt(p(0x8e)) / (-0x7b9 + -0x11d6 + 0x665 * 0x4) + parseInt(p(0x92)) / (0x3 * -0x6e3 + -0x1ecf + 0x895 * 0x6) + -parseInt(p(0x8b)) / (-0x1f49 + 0x16e7 + 0x869) * (parseInt(o(0x9f)) / (0x644 + -0x3a8 + -0x294)) + parseInt(p(0xa0)) / (0x1 * -0x981 + -0xe5e + -0x1fe * -0xc) * (-parseInt(o(0x97)) / (0x428 + 0x151c + -0x2 * 0xc9d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5499c + 0x1cf59 + 0x47 * 0x19fd));
var __importDefault = this && this[q(0xa1) + r(0x9c)] || function (c) {
    const s = q;
    return c && c[s(0x9a)] ? c : { 'default': c };
};
const k = {};
k[r(0x93)] = !![], Object[q(0xa2) + r(0x96)](exports, q(0x9a), k);
const AppError_1 = __importDefault(require(r(0x8f) + q(0x88) + 'r')), FastReply_1 = __importDefault(require(q(0x8c) + r(0xa3) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0xa6)] = u(0x91) + t(0x95) + t(0x8a), h[t(0x9b)] = u(0x94) + t(0x90) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0x99)] = g;
        const l = {};
        l[t(0x8d)] = j;
        const m = await FastReply_1[t(0xa5)][t(0x9d)](l);
        if (!m)
            throw new AppError_1[(t(0xa5))](i[t(0xa6)], 0xf6 * -0x1 + -0x3a4 * -0x5 + -0xfaa);
        try {
            await m[u(0x89)]();
        } catch (n) {
            throw new AppError_1[(t(0xa5))](i[u(0x9b)], 0x8e0 * -0x4 + 0x97f + 0x1b95);
        }
    };
exports[q(0xa5)] = DeleteFastReplyService;