'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1d9)) / (0x238e + -0xd * 0x2f9 + -0x4 * -0xc6) * (-parseInt(r(0x1e5)) / (0x1788 + -0x1036 + 0x24 * -0x34)) + parseInt(r(0x1da)) / (-0xc * 0x214 + 0x1487 + 0x46c) + parseInt(q(0x1f9)) / (-0x11 * 0x1b + -0x18f1 * 0x1 + 0x1ac0) * (parseInt(q(0x1d7)) / (0x41 + -0x23 * -0x107 + -0x2431)) + -parseInt(q(0x1e8)) / (-0x423 + -0x9 * -0x337 + -0x18c6) + parseInt(q(0x1e9)) / (0x2082 + -0x1 * -0x1841 + -0x38bc) * (parseInt(r(0x1dd)) / (0x3a + -0x121b + 0x11e9)) + parseInt(q(0x1e3)) / (-0x1865 + 0x15d * 0x12 + -0x1c) + parseInt(q(0x1db)) / (0x1 * -0x197 + -0x1cd * 0x7 + 0xe3c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12636a * -0x1 + -0x1 * 0xe0159 + 0x2eb11c));
var __importDefault = this && this[s(0x1d5) + s(0x1dc)] || function (c) {
    const u = s;
    return c && c[u(0x1f8)] ? c : { 'default': c };
};
const k = {};
k[t(0x1ed)] = !![], Object[s(0x1f2) + t(0x1de)](exports, s(0x1f8), k);
const LogTicket_1 = __importDefault(require(t(0x1df) + t(0x1e1) + 'et')), User_1 = __importDefault(require(s(0x1df) + t(0x1f0))), Queue_1 = __importDefault(require(s(0x1df) + s(0x1e0))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = t, w = s, i = {};
        i[v(0x1ee)] = v(0x1f5), i[v(0x1ec)] = v(0x1e6), i[v(0x1d4)] = v(0x1f6), i[v(0x1d8)] = w(0x1f1), i[w(0x1eb)] = v(0x1ea);
        const j = i, l = {};
        l[v(0x1e7)] = h;
        const m = {};
        m[v(0x1f7)] = User_1[w(0x1f3)], m['as'] = j[w(0x1ee)], m[w(0x1e4)] = [
            'id',
            j[w(0x1ec)]
        ];
        const n = {};
        n[w(0x1f7)] = Queue_1[v(0x1f3)], n['as'] = j[v(0x1d4)], n[w(0x1e4)] = [
            'id',
            j[v(0x1d4)]
        ];
        const o = {};
        o[w(0x1e2)] = l, o[w(0x1ef)] = [
            m,
            n
        ], o[v(0x1f4)] = [[
                j[w(0x1d8)],
                j[w(0x1eb)]
            ]];
        const p = await LogTicket_1[v(0x1f3)][v(0x1d6)](o);
        return p;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0xf7e + -0x453 * 0x1 + -0x737 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'aABNg',
        '63506itxJwR',
        '3697545jXvyAL',
        '9727980goiZzz',
        'fault',
        '168hFSfnV',
        'erty',
        '../../mode',
        'ls/Queue',
        'ls/LogTick',
        'where',
        '1451574vmtDxP',
        'attributes',
        '2vMNYNt',
        'name',
        'ticketId',
        '10823334QjyujS',
        '14511XGPlNn',
        'DESC',
        'GJJgE',
        'ChqIV',
        'value',
        'xRGEo',
        'include',
        'ls/User',
        'createdAt',
        'defineProp',
        'default',
        'order',
        'user',
        'queue',
        'model',
        '__esModule',
        '34288qYmMsr',
        'RZZAU',
        '__importDe',
        'findAll',
        '230JaAAnD'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[t(0x1f3)] = ShowLogTicketService;