'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x206)) / (-0xace + -0x1eb0 + -0x1 * -0x297f) + -parseInt(s(0x203)) / (0x3f * -0x19 + 0xfd * -0xb + 0x1108) + parseInt(s(0x218)) / (0x739 + -0x2 * 0xdee + 0x14a6) * (parseInt(s(0x20a)) / (0x1 * -0x25e8 + 0x752 * 0x5 + 0x152)) + parseInt(s(0x1f1)) / (0x3 * 0xcae + -0x3 * -0xb51 + -0x47f8) + -parseInt(r(0x208)) / (0xd8a + -0x25c * 0x2 + -0x2 * 0x466) * (-parseInt(s(0x219)) / (-0x193e + -0x9fa + -0x1 * -0x233f)) + parseInt(r(0x200)) / (-0x210e + 0x32e + -0xc * -0x27e) + -parseInt(r(0x21d)) / (0x1fd6 + 0x23dc + -0x1 * 0x43a9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5c15 + 0x2996 + -0x2d78d * -0x1));
var __importDefault = this && this[t(0x204) + u(0x209)] || function (c) {
    const v = t;
    return c && c[v(0x1ff)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x240b + -0x114a + -0x10d1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x1fa)] = !![], Object[u(0x20f) + u(0x1fb)](exports, t(0x1ff), k);
function a() {
    const y = [
        '519592YAEGTD',
        '__importDe',
        'etService',
        '15764gMZGgc',
        '../service',
        '322440tDIhJd',
        'fault',
        '2740pDxGrO',
        'rvices/Cre',
        's/AutoRepl',
        'ateLogTick',
        'channel',
        'defineProp',
        'substr',
        'telegram',
        'autoReplyI',
        'plyId',
        'ShowStepAu',
        'yServices/',
        'uuEhQ',
        'update',
        '1497VNXiES',
        '14khdvzf',
        'TfFwf',
        '../models/',
        'RTvGN',
        '761409gtkFrP',
        'findByPk',
        'contactId',
        'type',
        's/TicketSe',
        'chatBot',
        '246285MsdkmJ',
        'ticketId',
        'indexOf',
        'number',
        'KYguc',
        'Contact',
        'toReplyMes',
        'userId',
        'stepAutoRe',
        'value',
        'erty',
        'sageServic',
        'default',
        'tenantId',
        '__esModule',
        '279480WInuzy',
        'autoReply',
        'isGroup'
    ];
    a = function () {
        return y;
    };
    return a();
}
const Contact_1 = __importDefault(require(u(0x21b) + u(0x1f6))), ShowStepAutoReplyMessageService_1 = __importDefault(require(t(0x207) + u(0x20c) + u(0x215) + u(0x214) + t(0x1f7) + u(0x1fc) + 'e')), CreateLogTicketService_1 = __importDefault(require(u(0x207) + u(0x221) + t(0x20b) + u(0x20d) + t(0x205))), AutoReplyWelcome = async f => {
        const w = t, x = t, g = {};
        g[w(0x21c)] = function (p, q) {
            return p === q;
        }, g[x(0x216)] = function (p, q) {
            return p !== q;
        }, g[x(0x1f5)] = x(0x211), g[x(0x21a)] = x(0x1f0);
        const h = g;
        if (f[w(0x1f8)] || f[x(0x202)])
            return;
        const i = await (0xbac + -0x1f * -0x6c + -0x18c0, ShowStepAutoReplyMessageService_1[w(0x1fd)])(0x36b + -0x1472 + 0x1107 * 0x1, -0x45b + -0x1 * -0x1dd7 + 0x65f * -0x4, 0x2 * -0x1184 + 0x59 * 0x1b + 0x19a5, !![], f[w(0x1fe)]);
        if (!i)
            return;
        const j = await Contact_1[w(0x1fd)][w(0x21e)](f[w(0x21f)]), {celularTeste: l} = i[x(0x201)], m = j?.[x(0x1f4)];
        if (l && h[w(0x21c)](m?.[x(0x1f3)](l[w(0x210)](0xfd * 0x9 + -0x9 * -0x293 + -0x200f)), -(0x1 * 0x93b + -0x6d * -0x48 + -0x1 * 0x27e2)) || !m) {
            if (h[x(0x216)](f[x(0x20e)], h[w(0x1f5)]))
                return;
        }
        const n = {};
        n[x(0x212) + 'd'] = i[x(0x201)]['id'], n[x(0x1f9) + x(0x213)] = i['id'], await f[x(0x217)](n);
        const o = {};
        o[x(0x1f2)] = f['id'], o[w(0x220)] = h[w(0x21a)], await (0x217a + -0x1e24 + -0x1ab * 0x2, CreateLogTicketService_1[x(0x1fd)])(o);
    };
exports[u(0x1fd)] = AutoReplyWelcome;