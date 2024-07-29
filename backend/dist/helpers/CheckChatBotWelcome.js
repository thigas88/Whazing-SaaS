'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a05 * -0x1 + 0xbbd + 0x86 * 0x1f);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1f4)) / (-0x19ba + 0x2 * -0x764 + 0xd81 * 0x3) + parseInt(r(0x200)) / (0x106a + 0x2e1 * -0xd + 0x1 * 0x1505) + parseInt(s(0x205)) / (-0x1d8b + -0x1a27 + 0x1 * 0x37b5) * (-parseInt(s(0x203)) / (0x1811 + 0x3a1 + -0x1bae)) + -parseInt(r(0x1f2)) / (0x3 * -0x81 + -0x1402 + -0x72e * -0x3) * (parseInt(r(0x20f)) / (-0x1f87 + 0x5 * -0x2ad + -0xd5 * -0x36)) + -parseInt(s(0x215)) / (0x717 * -0x2 + -0xefd + -0x25 * -0xca) * (-parseInt(r(0x20e)) / (-0x2 * -0xefd + 0x1720 + -0x3512)) + -parseInt(s(0x20c)) / (0x1333 * 0x1 + -0x1029 + 0x1 * -0x301) + parseInt(s(0x208)) / (-0x180f + 0x2557 + -0x2 * 0x69f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf0518 + -0x71c9f + 0x2d6b3));
var __importDefault = this && this[t(0x210) + t(0x20d)] || function (c) {
    const v = u;
    return c && c[v(0x1f5)] ? c : { 'default': c };
};
const k = {};
k[t(0x214)] = !![], Object[u(0x211) + u(0x21e)](exports, t(0x1f5), k);
function a() {
    const y = [
        'plyId',
        'toReplyMes',
        '2068306YklORA',
        'userId',
        '../service',
        '236PuyrDs',
        'tenantId',
        '50682nUhdkx',
        'ateLogTick',
        'telegram',
        '33011100tUogkZ',
        'iQspv',
        'yServices/',
        'contactId',
        '11764206SNFWfc',
        'fault',
        '8016PyyYwj',
        '2910wVWmQo',
        '__importDe',
        'defineProp',
        's/TicketSe',
        'type',
        'value',
        '1932UyKcIr',
        'ShowStepAu',
        'indexOf',
        'isGroup',
        'stepAutoRe',
        'TEelf',
        'rvices/Cre',
        'substr',
        'default',
        'erty',
        'Contact',
        'zjOfW',
        'findByPk',
        'autoReplyI',
        'OmMmp',
        'etService',
        '7430JLaszZ',
        '../models/',
        '882925SoHrQH',
        '__esModule',
        'chatBot',
        'autoReply',
        'sageServic',
        'ticketId',
        'channel',
        'update',
        'number',
        's/AutoRepl'
    ];
    a = function () {
        return y;
    };
    return a();
}
const Contact_1 = __importDefault(require(u(0x1f3) + t(0x21f))), ShowStepAutoReplyMessageService_1 = __importDefault(require(t(0x202) + t(0x1fd) + t(0x20a) + t(0x216) + t(0x1ff) + u(0x1f8) + 'e')), CreateLogTicketService_1 = __importDefault(require(u(0x202) + t(0x212) + t(0x21b) + t(0x206) + t(0x224))), AutoReplyWelcome = async f => {
        const w = t, x = u, g = {};
        g[w(0x209)] = function (p, q) {
            return p === q;
        }, g[w(0x21a)] = function (p, q) {
            return p !== q;
        }, g[x(0x220)] = x(0x207), g[w(0x223)] = w(0x1f6);
        const h = g;
        if (f[x(0x201)] || f[w(0x218)])
            return;
        const i = await (0x9b7 + -0xfde + 0x627, ShowStepAutoReplyMessageService_1[x(0x21d)])(0x70a + -0x7e * 0x17 + -0x8 * -0x89, 0x3c * -0x94 + 0x193a + 0x7 * 0x15a, 0xa * -0x1e7 + -0xe64 * 0x2 + 0x2fce, !![], f[x(0x204)]);
        if (!i)
            return;
        const j = await Contact_1[w(0x21d)][w(0x221)](f[x(0x20b)]), {celularTeste: l} = i[w(0x1f7)], m = j?.[x(0x1fc)];
        if (l && h[x(0x209)](m?.[x(0x217)](l[w(0x21c)](0x1ee2 * -0x1 + -0x17c4 + -0x11 * -0x337)), -(0x218b + 0x1 * 0x181d + -0x39a7)) || !m) {
            if (h[x(0x21a)](f[w(0x1fa)], h[w(0x220)]))
                return;
        }
        const n = {};
        n[x(0x222) + 'd'] = i[x(0x1f7)]['id'], n[w(0x219) + x(0x1fe)] = i['id'], await f[w(0x1fb)](n);
        const o = {};
        o[x(0x1f9)] = f['id'], o[x(0x213)] = h[w(0x223)], await (0x32d * -0x9 + 0x132f + 0x191 * 0x6, CreateLogTicketService_1[w(0x21d)])(o);
    };
exports[t(0x21d)] = AutoReplyWelcome;