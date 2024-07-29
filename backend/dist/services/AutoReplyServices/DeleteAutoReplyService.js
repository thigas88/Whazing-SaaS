'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1a6)) / (-0x33 * 0x3 + 0x5 * 0x505 + 0x1 * -0x187f) * (-parseInt(t(0x1b2)) / (-0x1 * 0x1c2e + 0x1 * 0x2012 + -0x3e2)) + parseInt(t(0x1ab)) / (-0x24a3 * -0x1 + 0x1cea + 0x20c5 * -0x2) + -parseInt(s(0x1a2)) / (-0xe1 * -0x26 + -0x2276 * -0x1 + -0x43d8) + parseInt(t(0x19a)) / (-0x13f3 * -0x1 + -0x9 * -0x1e7 + -0x250d) * (-parseInt(s(0x1b1)) / (-0x181 + -0x7c * 0x25 + 0x1373)) + -parseInt(s(0x199)) / (-0x1 * 0x6be + -0x1 * 0xcb3 + -0x4de * -0x4) * (-parseInt(s(0x1b4)) / (0x243e + -0x22eb + -0x14b)) + parseInt(t(0x1b9)) / (-0x1bc8 + -0x3 * -0xc93 + -0x9e8) + -parseInt(s(0x1b5)) / (0x8 * -0xd3 + -0x85b * -0x3 + -0x126f) * (-parseInt(s(0x1b6)) / (-0x413 * -0x4 + 0x2013 + -0x3054));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x165ba2 + 0x1 * 0x1a4d94 + -0xa4 * 0x345a));
var __importDefault = this && this[u(0x1a8) + u(0x19b)] || function (c) {
    const w = v;
    return c && c[w(0x1b0)] ? c : { 'default': c };
};
function a() {
    const z = [
        'EPLY_RELAT',
        'erty',
        '3954501toGofz',
        'value',
        'VUcgE',
        'ERR_AUTO_R',
        '4823BkMRdE',
        '20XnVYWL',
        'fault',
        '../../mode',
        'ls/AutoRep',
        'UND',
        'ERR_NO_AUT',
        'defineProp',
        'O_REPLY_FO',
        '4929100VzTocE',
        'destroy',
        '../../erro',
        'autoReplyI',
        '25lQlGjm',
        'ls/Ticket',
        '__importDe',
        'IONED_TICK',
        'findOne',
        '3855624CiQbdE',
        'tenantId',
        'default',
        'where',
        'rs/AppErro',
        '__esModule',
        '2137026nUytob',
        '18256JvwwMt',
        'cszJk',
        '18488YhVOTx',
        '1030010koKKFI',
        '11zykKTQ'
    ];
    a = function () {
        return z;
    };
    return a();
}
const k = {};
k[u(0x1ba)] = !![], Object[u(0x1a0) + u(0x1b8)](exports, v(0x1b0), k);
const AutoReply_1 = __importDefault(require(v(0x19c) + u(0x19d) + 'ly')), AppError_1 = __importDefault(require(v(0x1a4) + v(0x1af) + 'r')), Ticket_1 = __importDefault(require(u(0x19c) + v(0x1a7))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x1bb)] = y(0x1bc) + y(0x1b7) + y(0x1a9) + 'ET', j[x(0x1b3)] = x(0x19f) + x(0x1a1) + x(0x19e);
        const l = j, m = {};
        m['id'] = h, m[y(0x1ac)] = i;
        const n = {};
        n[x(0x1ae)] = m;
        const o = await AutoReply_1[x(0x1ad)][x(0x1aa)](n), p = {};
        p[y(0x1a5) + 'd'] = h;
        const q = {};
        q[y(0x1ae)] = p;
        const r = await Ticket_1[x(0x1ad)][x(0x1aa)](q);
        if (r)
            throw new AppError_1[(y(0x1ad))](l[y(0x1bb)], -0x124 * -0x8 + -0xc97 + 0x50b);
        if (!o)
            throw new AppError_1[(y(0x1ad))](l[x(0x1b3)], -0x79 * -0x5 + 0x14ff + 0x88 * -0x29);
        await o[x(0x1a3)]();
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xcc6 + 0x24cd + -0x42 * 0x57);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[u(0x1ad)] = DeleteAutoReplyService;