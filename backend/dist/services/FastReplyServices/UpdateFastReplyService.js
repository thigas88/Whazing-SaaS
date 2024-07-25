'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ff2 + 0x3 * 0x32b + -0x2803);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x186)) / (0x441 + 0x2065 + -0x24a5) * (-parseInt(w(0x187)) / (-0x1 * 0x6ec + -0xb15 + -0x57 * -0x35)) + -parseInt(x(0x18f)) / (0x1 * 0x149d + -0x17f * 0x13 + 0x7d3 * 0x1) + parseInt(w(0x188)) / (-0x5 * -0x773 + -0x3 * 0xcbc + 0xf9 * 0x1) + -parseInt(w(0x180)) / (0x2327 * -0x1 + 0x7c3 + 0x923 * 0x3) * (parseInt(w(0x172)) / (0xc9 + 0x3 * -0x289 + -0x6d8 * -0x1)) + parseInt(w(0x185)) / (-0x772 + -0x24b * 0x4 + 0x10a5) + parseInt(w(0x175)) / (0xb98 + -0x1444 + 0x22d * 0x4) + -parseInt(x(0x176)) / (0x254c + 0x761 * -0x4 + 0x7bf * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfe3 * 0x9e + 0x42 * 0x71 + -0x4b8c7));
var __importDefault = this && this[y(0x17d) + y(0x193)] || function (c) {
    const A = y;
    return c && c[A(0x177)] ? c : { 'default': c };
};
const k = {};
k[z(0x18a)] = !![], Object[y(0x18d) + z(0x190)](exports, y(0x177), k);
const AppError_1 = __importDefault(require(y(0x171) + z(0x18e) + 'r')), FastReply_1 = __importDefault(require(y(0x178) + y(0x189) + 'ly')), updateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const B = z, C = y, j = {};
        j[B(0x18b)] = C(0x174), j[B(0x18c)] = C(0x184), j[B(0x17b)] = B(0x181), j[B(0x17c)] = C(0x179), j[C(0x182)] = C(0x183) + B(0x192) + B(0x17a);
        const l = j, {
                key: m,
                message: n,
                media: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x17e)] = q;
        const s = {};
        s[B(0x170)] = r, s[B(0x191)] = [
            'id',
            l[B(0x18b)],
            l[B(0x18c)],
            l[C(0x17b)],
            l[C(0x17c)]
        ];
        const t = await FastReply_1[B(0x194)][B(0x17f)](s);
        if (!t)
            throw new AppError_1[(B(0x194))](l[C(0x182)], 0x1 * 0x225 + -0x19de + 0x194d);
        const u = {};
        u[B(0x174)] = m, u[C(0x184)] = n, u[C(0x181)] = o, u[B(0x179)] = p, await t[C(0x195)](u);
        const v = {};
        return v[C(0x191)] = [
            'id',
            l[B(0x18b)],
            l[B(0x18c)],
            l[B(0x17b)],
            l[C(0x17c)]
        ], await t[C(0x173)](v), t;
    };
function a() {
    const D = [
        'fault',
        'default',
        'update',
        'where',
        '../../erro',
        '205518tpYmVq',
        'reload',
        'key',
        '1430896wZhqQA',
        '260730WWbUto',
        '__esModule',
        '../../mode',
        'userId',
        'UND',
        'VDUYN',
        'EaQbj',
        '__importDe',
        'tenantId',
        'findOne',
        '90KYBOaq',
        'media',
        'xcjMR',
        'ERR_NO_FAS',
        'message',
        '2004121YboPed',
        '206933UJhEpC',
        '4kTDmcH',
        '1317992vBIAPx',
        'ls/FastRep',
        'value',
        'tkZoY',
        'tiUWl',
        'defineProp',
        'rs/AppErro',
        '667224WNRlKx',
        'erty',
        'attributes',
        'T_REPLY_FO'
    ];
    a = function () {
        return D;
    };
    return a();
}
exports[z(0x194)] = updateFastReplyService;