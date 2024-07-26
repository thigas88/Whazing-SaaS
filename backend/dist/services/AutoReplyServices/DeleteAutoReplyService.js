'use strict';
const u = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25c0 + 0x231 + 0x241e);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xa7)) / (0x844 + -0x1e97 * -0x1 + -0x2 * 0x136d) * (parseInt(t(0xa9)) / (0x1f94 + -0xf * 0x151 + 0x1 * -0xbd3)) + parseInt(t(0x93)) / (0x2550 + -0x63 * 0x1b + -0x1adc) + parseInt(t(0x8f)) / (0x75b + 0x99c + -0x10f3) * (parseInt(t(0x9c)) / (0x169b + 0x1b13 + -0x1 * 0x31a9)) + -parseInt(s(0xb1)) / (0x1366 + 0x8d + -0x1 * 0x13ed) * (parseInt(s(0xae)) / (0xb6 * 0x17 + 0x3a * 0x7e + -0xef5 * 0x3)) + -parseInt(t(0x92)) / (0x5d1 * 0x2 + -0x24bb + 0x397 * 0x7) * (-parseInt(s(0xa3)) / (-0x12e0 + -0x1229 + 0x82 * 0x49)) + parseInt(s(0x97)) / (-0x82c + -0x19 * 0x55 + -0x3 * -0x581) + -parseInt(t(0xab)) / (-0x24ff * -0x1 + 0x14d4 + -0x39c8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0xd8c1 + 0x50f2 + 0x313b0));
var __importDefault = this && this[u(0x9a) + v(0xac)] || function (c) {
    const w = u;
    return c && c[w(0xa8)] ? c : { 'default': c };
};
function a() {
    const z = [
        'VsqMI',
        '7847LGsMYB',
        'erty',
        'autoReplyI',
        '600TytOms',
        'rs/AppErro',
        '13548JpElhd',
        'tenantId',
        'ERR_NO_AUT',
        '3128ZuUbod',
        '166167sirwAB',
        'destroy',
        'ERR_AUTO_R',
        'default',
        '1277860NTFdCt',
        'EPLY_RELAT',
        'WMasn',
        '__importDe',
        'defineProp',
        '120fUSAmU',
        'UND',
        'ls/Ticket',
        'findOne',
        'O_REPLY_FO',
        'where',
        'ls/AutoRep',
        '2484fDmEji',
        'value',
        '../../mode',
        'IONED_TICK',
        '59697sRLqdE',
        '__esModule',
        '2mYAMxn',
        '../../erro',
        '981090Xxfejd',
        'fault'
    ];
    a = function () {
        return z;
    };
    return a();
}
const k = {};
k[v(0xa4)] = !![], Object[v(0x9b) + u(0xaf)](exports, u(0xa8), k);
const AutoReply_1 = __importDefault(require(v(0xa5) + v(0xa2) + 'ly')), AppError_1 = __importDefault(require(u(0xaa) + u(0xb2) + 'r')), Ticket_1 = __importDefault(require(u(0xa5) + v(0x9e))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x99)] = y(0x95) + y(0x98) + y(0xa6) + 'ET', j[x(0xad)] = x(0x91) + x(0xa0) + y(0x9d);
        const l = j, m = {};
        m['id'] = h, m[y(0x90)] = i;
        const n = {};
        n[y(0xa1)] = m;
        const o = await AutoReply_1[y(0x96)][x(0x9f)](n), p = {};
        p[x(0xb0) + 'd'] = h;
        const q = {};
        q[y(0xa1)] = p;
        const r = await Ticket_1[x(0x96)][x(0x9f)](q);
        if (r)
            throw new AppError_1[(y(0x96))](l[y(0x99)], 0xe * 0x7 + 0x1c51 * -0x1 + 0x1d83 * 0x1);
        if (!o)
            throw new AppError_1[(x(0x96))](l[y(0xad)], 0xcaf * -0x3 + -0x49f + 0x20 * 0x162);
        await o[x(0x94)]();
    };
exports[u(0x96)] = DeleteAutoReplyService;