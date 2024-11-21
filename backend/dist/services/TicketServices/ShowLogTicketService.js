'use strict';
const s = b, t = b;
function a() {
    const x = [
        'queue',
        'createdAt',
        'user',
        'model',
        'include',
        'pBbAC',
        'default',
        'fault',
        '3688971NSQXTo',
        'gZLll',
        '__esModule',
        'defineProp',
        'ticketId',
        'Lxvjg',
        '108774FcZunE',
        'findAll',
        '712zGZLlb',
        'ls/Queue',
        'ls/LogTick',
        '../../mode',
        '7124WefjeP',
        'erty',
        'ls/User',
        'order',
        'value',
        '17949950teZiJA',
        '712025NJlXUA',
        '1549380ImgXWk',
        'attributes',
        'where',
        '6634110VcsmEs',
        '7xMCDUJ',
        '__importDe',
        'WVvxU',
        'Oasel',
        'DESC',
        '183vGkNie',
        'name'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x193)) / (0x34 * 0x8 + -0x17b2 + 0x1613) * (-parseInt(r(0x1a9)) / (-0xfc2 * 0x1 + -0x9a7 * -0x4 + -0x16d8)) + -parseInt(q(0x19d)) / (0x2604 + -0x242 * -0x1 + -0x2843) + -parseInt(q(0x1b0)) / (-0x1f8c + -0x5b * 0x21 + 0x2b4b) + -parseInt(q(0x1af)) / (-0x157 * -0x1a + -0x1b * -0x61 + 0xf04 * -0x3) + parseInt(q(0x1b3)) / (-0x1fca + -0xa77 + -0x1 * -0x2a47) * (-parseInt(q(0x1b4)) / (-0xcdb + 0x1 * 0x1286 + -0x4 * 0x169)) + parseInt(r(0x1a5)) / (0x7ba * -0x2 + -0x26f1 + -0x366d * -0x1) * (parseInt(q(0x1a3)) / (-0xd25 + 0x103 * 0x15 + -0x811)) + parseInt(r(0x1ae)) / (-0x295 * 0xd + -0xaf3 * -0x2 + 0xbb5 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10bd97 * -0x1 + 0x108f14 + 0xa367e));
var __importDefault = this && this[s(0x18f) + s(0x19c)] || function (c) {
    const u = s;
    return c && c[u(0x19f)] ? c : { 'default': c };
};
const k = {};
k[t(0x1ad)] = !![], Object[t(0x1a0) + t(0x1aa)](exports, s(0x19f), k);
const LogTicket_1 = __importDefault(require(s(0x1a8) + t(0x1a7) + 'et')), User_1 = __importDefault(require(s(0x1a8) + s(0x1ab))), Queue_1 = __importDefault(require(t(0x1a8) + t(0x1a6))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = s, w = s, i = {};
        i[v(0x1a2)] = v(0x197), i[w(0x19a)] = v(0x194), i[w(0x190)] = w(0x195), i[w(0x191)] = v(0x196), i[v(0x19e)] = v(0x192);
        const j = i, l = {};
        l[w(0x1a1)] = h;
        const m = {};
        m[v(0x198)] = User_1[v(0x19b)], m['as'] = j[w(0x1a2)], m[w(0x1b1)] = [
            'id',
            j[v(0x19a)]
        ];
        const n = {};
        n[w(0x198)] = Queue_1[w(0x19b)], n['as'] = j[v(0x190)], n[v(0x1b1)] = [
            'id',
            j[w(0x190)]
        ];
        const o = {};
        o[v(0x1b2)] = l, o[v(0x199)] = [
            m,
            n
        ], o[w(0x1ac)] = [[
                j[w(0x191)],
                j[w(0x19e)]
            ]];
        const p = await LogTicket_1[w(0x19b)][v(0x1a4)](o);
        return p;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x88 * -0xb + 0x16e2 + -0xf7b);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0x19b)] = ShowLogTicketService;