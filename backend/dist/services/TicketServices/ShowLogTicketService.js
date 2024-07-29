'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xe7)) / (-0x44d * 0x1 + -0xbe3 * -0x1 + -0x1 * 0x795) + parseInt(q(0xd9)) / (-0x2536 + -0x17e7 + 0x3d1f * 0x1) + -parseInt(r(0xe0)) / (0x964 + 0x1bef + -0x2550) * (parseInt(r(0xd3)) / (-0x687 + -0x213 + 0x89e)) + parseInt(q(0xd4)) / (-0xecb + -0x1d30 + -0xb00 * -0x4) + parseInt(q(0xd5)) / (0x6f5 * 0x1 + -0x105 * -0x9 + 0x80e * -0x2) * (-parseInt(r(0xcf)) / (0x2 * -0x48a + -0xa2d + 0x8 * 0x269)) + parseInt(q(0xde)) / (-0x2a * 0x19 + -0x936 * 0x2 + -0x2 * -0xb47) + parseInt(q(0xdf)) / (0x1 * 0xeb7 + 0xfd9 + -0x1e87);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd4ba + 0xf29 * -0xa + 0x4b5 * 0xba));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1343 + -0x3cc * 0x3 + -0x717);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xce) + s(0xdc)] || function (c) {
    const u = t;
    return c && c[u(0xca)] ? c : { 'default': c };
};
function a() {
    const x = [
        '684568fFbZUI',
        '3062160CJNYar',
        '21171olAOby',
        'ls/LogTick',
        'RPGIL',
        'model',
        'ticketId',
        'value',
        'ls/User',
        '241329OEUlZZ',
        'DESC',
        'default',
        'erty',
        'where',
        'queue',
        '../../mode',
        'BWojN',
        '__esModule',
        'defineProp',
        'user',
        'include',
        '__importDe',
        '126BIaada',
        'name',
        'order',
        'MjGuS',
        '124ztJqUm',
        '895860aMoGfg',
        '47622ZpMXHh',
        'findAll',
        'ls/Queue',
        'createdAt',
        '257682iHkBfG',
        'rgWIO',
        'evmhd',
        'fault',
        'attributes'
    ];
    a = function () {
        return x;
    };
    return a();
}
const k = {};
k[t(0xe5)] = !![], Object[s(0xcb) + s(0xea)](exports, t(0xca), k);
const LogTicket_1 = __importDefault(require(t(0xc8) + s(0xe1) + 'et')), User_1 = __importDefault(require(t(0xc8) + s(0xe6))), Queue_1 = __importDefault(require(t(0xc8) + s(0xd7))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = t, w = s, i = {};
        i[v(0xe2)] = w(0xcc), i[v(0xdb)] = w(0xd0), i[w(0xda)] = v(0xec), i[w(0xd2)] = w(0xd8), i[v(0xc9)] = v(0xe8);
        const j = i, l = {};
        l[w(0xe4)] = h;
        const m = {};
        m[w(0xe3)] = User_1[w(0xe9)], m['as'] = j[w(0xe2)], m[v(0xdd)] = [
            'id',
            j[w(0xdb)]
        ];
        const n = {};
        n[v(0xe3)] = Queue_1[v(0xe9)], n['as'] = j[v(0xda)], n[w(0xdd)] = [
            'id',
            j[v(0xda)]
        ];
        const o = {};
        o[v(0xeb)] = l, o[v(0xcd)] = [
            m,
            n
        ], o[v(0xd1)] = [[
                j[v(0xd2)],
                j[w(0xc9)]
            ]];
        const p = await LogTicket_1[w(0xe9)][v(0xd6)](o);
        return p;
    };
exports[t(0xe9)] = ShowLogTicketService;