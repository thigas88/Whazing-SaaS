'use strict';
function a() {
    const z = [
        'ls/AutoRep',
        'IONED_TICK',
        'IaQxs',
        'ERR_AUTO_R',
        'where',
        'EPLY_RELAT',
        'findOne',
        'erty',
        'default',
        '2841MJcuAJ',
        'SNvtT',
        '../../erro',
        'autoReplyI',
        '817148HteKBx',
        'UND',
        'ls/Ticket',
        'value',
        '__esModule',
        '304688kaucZA',
        '14vQnFyN',
        '2792502WtsqAa',
        'destroy',
        'defineProp',
        '../../mode',
        'rs/AppErro',
        '808fWJnmz',
        'tenantId',
        '297734PaksVv',
        '5394140BBdNuA',
        'O_REPLY_FO',
        '__importDe',
        '6661737pEuath',
        'ERR_NO_AUT',
        'fault'
    ];
    a = function () {
        return z;
    };
    return a();
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1a5)) / (0x21d7 + -0x1106 + -0x10d0) + -parseInt(t(0x1a3)) / (-0x42e * -0x4 + -0x202e + 0x3de * 0x4) * (-parseInt(s(0x1b5)) / (0x252e * 0x1 + 0x19 * -0x10d + 0x3 * -0x3a2)) + -parseInt(t(0x197)) / (0x198d + 0x1 * -0x12df + -0x6aa) + parseInt(t(0x1a6)) / (-0x18cf + -0x34d * 0x3 + 0x22bb) + parseInt(s(0x19e)) / (0xaf0 + -0xcd3 + 0xa3 * 0x3) + parseInt(s(0x19d)) / (-0x24fa * 0x1 + 0x26e7 * 0x1 + -0x1e6) * (-parseInt(s(0x19c)) / (0x24a * 0x3 + -0x1f0a + 0xc1a * 0x2)) + -parseInt(t(0x1a9)) / (0x1e1 * -0x13 + -0x1991 + -0x1 * -0x3d4d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x92849 + 0x1a57 * -0x19 + -0x1 * -0x2b2f5));
var __importDefault = this && this[u(0x1a8) + v(0x1ab)] || function (c) {
    const w = v;
    return c && c[w(0x19b)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2359 * -0x1 + 0xe13 * -0x2 + -0x2cf * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[u(0x19a)] = !![], Object[u(0x1a0) + u(0x1b3)](exports, v(0x19b), k);
const AutoReply_1 = __importDefault(require(v(0x1a1) + v(0x1ac) + 'ly')), AppError_1 = __importDefault(require(v(0x195) + u(0x1a2) + 'r')), Ticket_1 = __importDefault(require(v(0x1a1) + u(0x199))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = v, y = v, j = {};
        j[x(0x1ae)] = y(0x1af) + x(0x1b1) + y(0x1ad) + 'ET', j[y(0x1b6)] = y(0x1aa) + x(0x1a7) + y(0x198);
        const l = j, m = {};
        m['id'] = h, m[y(0x1a4)] = i;
        const n = {};
        n[x(0x1b0)] = m;
        const o = await AutoReply_1[y(0x1b4)][y(0x1b2)](n), p = {};
        p[x(0x196) + 'd'] = h;
        const q = {};
        q[y(0x1b0)] = p;
        const r = await Ticket_1[x(0x1b4)][x(0x1b2)](q);
        if (r)
            throw new AppError_1[(y(0x1b4))](l[x(0x1ae)], 0x8b7 + -0x37a * -0x4 + 0x1 * -0x150b);
        if (!o)
            throw new AppError_1[(x(0x1b4))](l[x(0x1b6)], 0x2233 + -0x3ad * -0x5 + -0x3300);
        await o[y(0x19f)]();
    };
exports[u(0x1b4)] = DeleteAutoReplyService;