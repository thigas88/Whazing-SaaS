'use strict';
function a() {
    const y = [
        'fault',
        '13042128DgSPBP',
        'substr',
        'indexOf',
        '../service',
        'rvices/Cre',
        'default',
        '1336wliMRl',
        '2080500hXEgIV',
        'ticketId',
        'etService',
        'ateLogTick',
        's/TicketSe',
        'update',
        '__esModule',
        '411258LKTGBy',
        'sageServic',
        'Contact',
        'toReplyMes',
        'erty',
        'defineProp',
        '4994742TXjpyA',
        'value',
        's/AutoRepl',
        'channel',
        '2567828owuNLb',
        'telegram',
        'contactId',
        'type',
        '220842rOmTGp',
        'autoReply',
        'yServices/',
        'tenantId',
        '__importDe',
        'number',
        'stepAutoRe',
        'plyId',
        'lNnPV',
        'findByPk',
        'userId',
        '3ELAeup',
        'bKRGr',
        '460gEyVwW',
        'isGroup',
        '5jWyhIV',
        'ShowStepAu',
        'Rurew',
        'autoReplyI',
        'kvCPe',
        '12222buavwk',
        '../models/',
        'chatBot'
    ];
    a = function () {
        return y;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x9f)) / (0x7 * -0x481 + 0x1 * 0xf47 + 0x1041) * (-parseInt(s(0xb6)) / (-0x9 * 0xb3 + -0x25fb + 0x2c48)) + parseInt(s(0x9b)) / (0x86 + -0x63f + 0x1 * 0x5bc) * (parseInt(r(0xc0)) / (-0x1744 + 0xbf * 0xc + 0xe54)) + -parseInt(r(0xaf)) / (0xf34 + 0x11f0 * 0x2 + -0x330f) + -parseInt(s(0xbc)) / (-0x1017 + -0x1b8b + 0x3f8 * 0xb) + parseInt(r(0xa4)) / (0x1002 + -0x1 * -0xfdd + -0x1fd8) * (parseInt(s(0xae)) / (0x2 * -0xe0 + -0x1 * -0x8ef + -0x727)) + parseInt(r(0xc4)) / (0x71 * -0x21 + 0x1 * -0x1aec + 0x2986) * (parseInt(s(0x9d)) / (0x1 * -0x26e + -0x26ab + 0x1 * 0x2923)) + -parseInt(s(0xa8)) / (0x4fa + 0xb * -0x1c9 + 0xeb4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x562db + 0x44a69 + 0x7 * 0x19643));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1349 + 0x1 * -0x1b83 + 0x8d0);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0xc8) + u(0xa7)] || function (c) {
    const v = t;
    return c && c[v(0xb5)] ? c : { 'default': c };
};
const k = {};
k[u(0xbd)] = !![], Object[t(0xbb) + u(0xba)](exports, t(0xb5), k);
const Contact_1 = __importDefault(require(t(0xa5) + t(0xb8))), ShowStepAutoReplyMessageService_1 = __importDefault(require(u(0xab) + t(0xbe) + u(0xc6) + t(0xa0) + t(0xb9) + t(0xb7) + 'e')), CreateLogTicketService_1 = __importDefault(require(u(0xab) + u(0xb3) + u(0xac) + t(0xb2) + t(0xb1))), AutoReplyWelcome = async f => {
        const w = t, x = u, g = {};
        g[w(0xa3)] = function (p, q) {
            return p === q;
        }, g[x(0x9c)] = function (p, q) {
            return p !== q;
        }, g[x(0x98)] = x(0xc1), g[w(0xa1)] = w(0xa6);
        const h = g;
        if (f[x(0x9a)] || f[x(0x9e)])
            return;
        const i = await (0x79 * 0xb + 0x15cf + 0x1b02 * -0x1, ShowStepAutoReplyMessageService_1[x(0xad)])(-0x2539 + 0x1c82 + 0x8b7, -0x30d * 0x4 + -0x7d4 + 0x8 * 0x281, 0x2488 + -0x2403 * 0x1 + 0x1 * -0x85, !![], f[x(0xc7)]);
        if (!i)
            return;
        const j = await Contact_1[x(0xad)][x(0x99)](f[w(0xc2)]), {celularTeste: l} = i[w(0xc5)], m = j?.[x(0xc9)];
        if (l && h[x(0xa3)](m?.[w(0xaa)](l[x(0xa9)](-0x171d * -0x1 + 0x152 * -0x1c + 0xddc)), -(0xa * -0x185 + 0x22d4 + -0x13a1)) || !m) {
            if (h[w(0x9c)](f[x(0xbf)], h[x(0x98)]))
                return;
        }
        const n = {};
        n[x(0xa2) + 'd'] = i[w(0xc5)]['id'], n[w(0x96) + w(0x97)] = i['id'], await f[w(0xb4)](n);
        const o = {};
        o[x(0xb0)] = f['id'], o[x(0xc3)] = h[x(0xa1)], await (0x2 * -0x9dd + -0x151d + 0x28d7, CreateLogTicketService_1[x(0xad)])(o);
    };
exports[u(0xad)] = AutoReplyWelcome;