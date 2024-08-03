'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xd4)) / (0x883 * 0x3 + 0x3cc + -0xeaa * 0x2) + parseInt(r(0xac)) / (0x1e9d * -0x1 + -0x23b * -0x1 + -0x17 * -0x13c) * (-parseInt(r(0xa8)) / (0x2a5 + 0x1 * 0x455 + -0x1 * 0x6f7)) + parseInt(s(0xcf)) / (-0x344 + 0x1668 + -0x1320) + -parseInt(s(0xbc)) / (0x144e + -0x6 * 0x1de + 0x1f * -0x4b) + parseInt(r(0xbe)) / (0x25 * 0x92 + 0x1af7 + -0x1 * 0x300b) + parseInt(r(0xd1)) / (-0xa * 0x19 + 0x4be * -0x1 + 0x5bf) + parseInt(s(0xa7)) / (0x24bb * 0x1 + -0x920 * -0x2 + -0x36f3) * (-parseInt(r(0xb0)) / (-0x13ec + -0xcb6 * 0x3 + 0x3 * 0x135d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x47cb8 + -0x18e1e + 0xa6195 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x427 * 0x9 + 0x1ed7 * -0x1 + -0x2 * -0x226d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0xb9) + u(0xd5)] || function (c) {
    const v = t;
    return c && c[v(0xd2)] ? c : { 'default': c };
};
function a() {
    const y = [
        'number',
        'userId',
        'ateLogTick',
        'tenantId',
        'toReplyMes',
        'value',
        '__importDe',
        'MBQHJ',
        'defineProp',
        '1370030GqbmLH',
        'contactId',
        '703014qdbiTj',
        'stepAutoRe',
        's/AutoRepl',
        'mudKD',
        'isGroup',
        'Contact',
        'erty',
        's/TicketSe',
        'chatBot',
        'telegram',
        'ShowStepAu',
        'indexOf',
        '../service',
        'ticketId',
        'channel',
        'type',
        'rvices/Cre',
        '759840XqdBKL',
        'etService',
        '2910495lsyuiM',
        '__esModule',
        'autoReply',
        '496807dMRssK',
        'fault',
        'snTjn',
        'EAqiE',
        'substr',
        '8584sdoyvO',
        '141WqDezj',
        'autoReplyI',
        'default',
        'plyId',
        '20518mxprcX',
        'update',
        'sageServic',
        '../models/',
        '1503dSndIj',
        'findByPk',
        'yServices/'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[u(0xb8)] = !![], Object[u(0xbb) + u(0xc4)](exports, t(0xd2), k);
const Contact_1 = __importDefault(require(t(0xaf) + u(0xc3))), ShowStepAutoReplyMessageService_1 = __importDefault(require(u(0xca) + u(0xc0) + u(0xb2) + u(0xc8) + t(0xb7) + u(0xae) + 'e')), CreateLogTicketService_1 = __importDefault(require(u(0xca) + u(0xc5) + u(0xce) + u(0xb5) + u(0xd0))), AutoReplyWelcome = async f => {
        const w = t, x = t, g = {};
        g[w(0xa4)] = function (p, q) {
            return p === q;
        }, g[x(0xa5)] = function (p, q) {
            return p !== q;
        }, g[w(0xba)] = x(0xc7), g[x(0xc1)] = x(0xc6);
        const h = g;
        if (f[x(0xb4)] || f[x(0xc2)])
            return;
        const i = await (-0x10a9 + 0x1 * 0x17c2 + -0x719, ShowStepAutoReplyMessageService_1[w(0xaa)])(-0x157 * 0xb + 0x1 * -0x1229 + 0x20e6, 0xfe8 + -0x1224 + 0x23c, 0x566 + -0x1f * -0xd + -0x6f9, !![], f[x(0xb6)]);
        if (!i)
            return;
        const j = await Contact_1[w(0xaa)][x(0xb1)](f[w(0xbd)]), {celularTeste: l} = i[w(0xd3)], m = j?.[w(0xb3)];
        if (l && h[w(0xa4)](m?.[w(0xc9)](l[x(0xa6)](-0x2262 + 0x8 * 0xca + 0x1 * 0x1c13)), -(0x2db * 0x6 + -0x22b6 * -0x1 + -0x17 * 0x241)) || !m) {
            if (h[w(0xa5)](f[w(0xcc)], h[w(0xba)]))
                return;
        }
        const n = {};
        n[w(0xa9) + 'd'] = i[x(0xd3)]['id'], n[w(0xbf) + w(0xab)] = i['id'], await f[x(0xad)](n);
        const o = {};
        o[x(0xcb)] = f['id'], o[w(0xcd)] = h[x(0xc1)], await (-0x15 * 0x164 + 0x64a + 0x16ea, CreateLogTicketService_1[w(0xaa)])(o);
    };
exports[t(0xaa)] = AutoReplyWelcome;