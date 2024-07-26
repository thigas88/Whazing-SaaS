'use strict';
const q = b, r = b;
function a() {
    const v = [
        '10QIHiCU',
        'T_REPLY_FO',
        '../../mode',
        'erty',
        '3cNjcgJ',
        '1697511eNbZHy',
        '1208IlFmAC',
        'kAcHh',
        '557838hncjRq',
        '38819209bQynGK',
        'default',
        'value',
        '../../erro',
        '7146216vCGaqV',
        'ERR_FAST_R',
        '__importDe',
        'findOne',
        '85cfoFUg',
        'fault',
        'where',
        'EPLY_EXIST',
        '1540508wjhiXh',
        '__esModule',
        'tenantId',
        'rs/AppErro',
        'destroy',
        'defineProp',
        '2174787MqtncJ',
        'EXAVk',
        'ERR_NO_FAS',
        'ls/FastRep',
        '6041aWRYWX',
        'UND'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xe5)) / (0x1431 + 0x1073 + -0x1 * 0x24a3) + parseInt(p(0xf5)) / (0x2160 + -0xdc1 * -0x2 + -0x3ce0) * (-parseInt(o(0xe4)) / (0x2 * 0x82c + -0x16d3 + 0x67e)) + -parseInt(o(0xed)) / (-0x1 * 0x7af + -0xc * -0x13c + -0x3 * 0x25f) + -parseInt(o(0xf1)) / (0xe3 * -0x29 + -0x4 * -0x9b1 + -0x264) * (parseInt(o(0xe8)) / (-0x1d81 + -0x1df6 + 0x9d * 0x61)) + -parseInt(p(0xde)) / (0x1162 + -0x1d * 0xc7 + -0x298 * -0x2) * (-parseInt(p(0xe6)) / (-0x228 + 0x1302 + 0x869 * -0x2)) + parseInt(o(0xfb)) / (0x2e + -0x1 * 0x1bd2 + 0x1bad) * (-parseInt(o(0xe0)) / (0x1 * -0x125 + -0x2339 + 0x14 * 0x1d2)) + parseInt(o(0xe9)) / (-0x23 * 0x115 + 0x11de + 0x140c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x124bbf + 0x210c7 * 0x1 + 0x1f26b3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfdc + 0x11 * -0x14e + 0x72e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0xef) + r(0xf2)] || function (c) {
    const s = r;
    return c && c[s(0xf6)] ? c : { 'default': c };
};
const k = {};
k[r(0xeb)] = !![], Object[q(0xfa) + q(0xe3)](exports, q(0xf6), k);
const AppError_1 = __importDefault(require(r(0xec) + r(0xf8) + 'r')), FastReply_1 = __importDefault(require(q(0xe2) + q(0xdd) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0xe7)] = t(0xdc) + u(0xe1) + t(0xdf), h[t(0xfc)] = t(0xee) + t(0xf4) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0xf7)] = g;
        const l = {};
        l[t(0xf3)] = j;
        const m = await FastReply_1[u(0xea)][t(0xf0)](l);
        if (!m)
            throw new AppError_1[(t(0xea))](i[u(0xe7)], 0x5a5 * 0x1 + 0x2 + 0x95 * -0x7);
        try {
            await m[u(0xf9)]();
        } catch (n) {
            throw new AppError_1[(t(0xea))](i[u(0xfc)], 0x21c * -0x5 + -0x3e3 * -0x3 + 0x77);
        }
    };
exports[q(0xea)] = DeleteFastReplyService;