'use strict';
const s = b, t = b;
function a() {
    const x = [
        '27660cCkllN',
        'ls/Queue',
        'createdAt',
        '8ROwwMl',
        'include',
        '3329FFUIUb',
        'qoLAw',
        'ls/User',
        '../../mode',
        'defineProp',
        '3575658kjLvRm',
        'queue',
        'gRTjq',
        '26ASMUrk',
        'xlIxd',
        'value',
        'ticketId',
        'erty',
        'model',
        'where',
        '__esModule',
        'findAll',
        'ls/LogTick',
        'user',
        '7795314XQyJkR',
        'fault',
        'order',
        '1258446ajcqkJ',
        'ExXQF',
        'default',
        '151832vQwNqu',
        '1634415yUfFpf',
        'name',
        '__importDe',
        '36hZVoZK',
        'DESC',
        'hTtIc',
        'attributes'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3c6 + 0x9b9 + 0x542 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xb3)) / (-0x1 * 0x2459 + -0x1 * -0x59f + 0x1 * 0x1ebb) * (parseInt(r(0xbb)) / (0x226c + -0x2ab + -0x1fbf)) + parseInt(q(0xd0)) / (0x41c * 0x2 + 0x18d + 0x2 * -0x4e1) * (-parseInt(r(0xcc)) / (-0x1 * 0x19b6 + -0x1 * -0xe09 + -0x49 * -0x29)) + -parseInt(r(0xcd)) / (0x1976 * -0x1 + -0x119 + 0x17a * 0x12) + parseInt(r(0xb8)) / (-0x1f8 * 0x2 + -0xf3 * 0x13 + 0x15ff * 0x1) + -parseInt(r(0xc9)) / (0x1ae5 + 0x6ac * -0x1 + -0x1432) + -parseInt(q(0xb1)) / (-0xbe0 + 0xbef + -0x7) * (-parseInt(r(0xc6)) / (0xc81 + 0x119 * 0x22 + -0x31ca)) + -parseInt(q(0xd4)) / (0x3b * -0x6b + 0x937 + 0xf7c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1d6b + -0x1 * 0x420e1 + 0xb2b4d));
var __importDefault = this && this[s(0xcf) + s(0xc7)] || function (c) {
    const u = s;
    return c && c[u(0xc2)] ? c : { 'default': c };
};
const k = {};
k[t(0xbd)] = !![], Object[t(0xb7) + s(0xbf)](exports, t(0xc2), k);
const LogTicket_1 = __importDefault(require(s(0xb6) + s(0xc4) + 'et')), User_1 = __importDefault(require(s(0xb6) + s(0xb5))), Queue_1 = __importDefault(require(t(0xb6) + t(0xd5))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = s, w = t, i = {};
        i[v(0xca)] = w(0xc5), i[v(0xbc)] = w(0xce), i[w(0xb4)] = w(0xb9), i[v(0xba)] = w(0xd6), i[w(0xd2)] = w(0xd1);
        const j = i, l = {};
        l[v(0xbe)] = h;
        const m = {};
        m[v(0xc0)] = User_1[w(0xcb)], m['as'] = j[v(0xca)], m[v(0xd3)] = [
            'id',
            j[w(0xbc)]
        ];
        const n = {};
        n[v(0xc0)] = Queue_1[w(0xcb)], n['as'] = j[v(0xb4)], n[v(0xd3)] = [
            'id',
            j[w(0xb4)]
        ];
        const o = {};
        o[w(0xc1)] = l, o[v(0xb2)] = [
            m,
            n
        ], o[v(0xc8)] = [[
                j[v(0xba)],
                j[w(0xd2)]
            ]];
        const p = await LogTicket_1[v(0xcb)][v(0xc3)](o);
        return p;
    };
exports[s(0xcb)] = ShowLogTicketService;