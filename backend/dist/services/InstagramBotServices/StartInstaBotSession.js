'use strict';
const r = b, s = b;
function a() {
    const y = [
        'erty',
        'logger',
        'tredN',
        'ERROR_CONN',
        '\x20|\x20Error:\x20',
        'RVAL',
        'iciada\x20|\x20E',
        'Conexão\x20In',
        'update',
        'mpresa:\x20',
        '__importDe',
        'defineProp',
        '../../libs',
        'DISCONNECT',
        '__esModule',
        'fault',
        'tener',
        'status',
        'default',
        'ECT_INSTAG',
        'ner',
        'ession',
        'CHECK_INTE',
        'vDvlV',
        'OPENING',
        'info',
        'value',
        'StartInsta',
        'gesSystem',
        'ssageListe',
        'initInstaB',
        '4390729mFDyGX',
        'getIO',
        'stagram\x20in',
        'ckMessages',
        'BotSession',
        '/InstaBot',
        '2345424sZzTsC',
        'MessageLis',
        '1006959zOYSAK',
        './Instagra',
        '585700nbMmfz',
        'ERROR:\x20che',
        '2124090WfqvrW',
        'JKytn',
        '/socket',
        '6FgFwpA',
        ':whatsappS',
        'RAM:\x20',
        '../../erro',
        'InstaBotMe',
        'RQKty',
        's/logger',
        '../../util',
        'mSendMessa',
        'rs/AppErro',
        '1869980DKOYQn',
        'tenantId',
        '\x20Tenant:\x20',
        'LFvjP',
        'emit',
        'env',
        'CONNECTED',
        '2PqeriH',
        './InstaBot',
        '16854768lPACLU',
        'error'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1ab)) / (0x32 * 0x27 + 0x1 * -0x1dfe + -0x1 * -0x1661) + parseInt(q(0x17e)) / (0x1 * 0x7ac + -0x99b * 0x2 + 0xb8c) * (-parseInt(p(0x1a9)) / (0x1 * 0x15f9 + -0x355 * -0x1 + 0xaf * -0x25)) + -parseInt(p(0x177)) / (0x1 * -0xc23 + 0xdfa + -0x1d3) + -parseInt(q(0x1ad)) / (0x1 * -0x1801 + 0x25 * 0x46 + 0x6f4 * 0x2) + -parseInt(q(0x1b0)) / (0x1 * 0x211c + -0x2289 * -0x1 + -0x439f) * (-parseInt(p(0x1a1)) / (0x1 * -0x169e + 0xa31 * 0x3 + -0x7ee)) + -parseInt(q(0x1a7)) / (-0x1495 + 0x13be + 0xdf) + parseInt(q(0x180)) / (-0xd4f + -0x2 * -0x1282 + 0x25e * -0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3c4fd + -0x39 * -0x15ad + -0x4f13b * -0x1));
var __importDefault = this && this[r(0x18c) + s(0x191)] || function (c) {
    const t = r;
    return c && c[t(0x190)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e79 + 0x17a7 * -0x1 + 0x3790);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x19c)] = !![], Object[r(0x18d) + r(0x182)](exports, s(0x190), k), exports[s(0x19d) + s(0x1a5)] = void (-0x169 + -0x1020 + 0x1189);
const AppError_1 = __importDefault(require(s(0x170) + r(0x176) + 'r')), InstaBot_1 = require(r(0x18e) + r(0x1a6)), socket_1 = require(r(0x18e) + s(0x1af)), logger_1 = require(s(0x174) + r(0x173)), InstaBotMessageListener_1 = require(r(0x17f) + r(0x1a8) + s(0x192)), InstagramSendMessagesSystem_1 = __importDefault(require(r(0x1aa) + r(0x175) + r(0x19e))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = r, v = s;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (0x106f + -0xccd + -0x5d * 0xa, InstagramSendMessagesSystem_1[u(0x194)])(c, d);
        } catch (e) {
            logger_1[v(0x183)][v(0x181)](u(0x1ac) + u(0x1a4) + u(0x179) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = r, x = r, g = {
                'RQKty': w(0x19a),
                'LFvjP': w(0x18a),
                'tredN': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'vDvlV': x(0x17d),
                'JKytn': w(0x18f) + 'ED'
            }, h = (0x62f * 0x4 + -0xa85 + -0xe37, socket_1[x(0x1a2)])(), i = {};
        i[x(0x193)] = g[x(0x172)], await f[w(0x18a)](i), h[x(0x17b)](f[w(0x178)] + (x(0x1b1) + x(0x197)), {
            'action': g[x(0x17a)],
            'session': f
        });
        try {
            const j = await (0x1 * 0x21d3 + 0x156c + -0x1 * 0x373f, InstaBot_1[x(0x1a0) + 'ot'])(f);
            (-0x2065 + -0x1e3f + 0x3ea4, InstaBotMessageListener_1[x(0x171) + w(0x19f) + w(0x196)])(j), g[x(0x184)](setInterval, checkMessages, +(process[w(0x17c)][w(0x198) + x(0x187)] || 0xa9d + 0x465 + 0x486), j, f[w(0x178)]), logger_1[x(0x183)][w(0x19b)](w(0x189) + w(0x1a3) + x(0x188) + w(0x18b) + f[x(0x178)]);
            const l = {};
            l[x(0x193)] = g[x(0x199)], await f[x(0x18a)](l), h[w(0x17b)](f[x(0x178)] + (x(0x1b1) + x(0x197)), {
                'action': g[x(0x17a)],
                'session': f
            });
        } catch (m) {
            logger_1[w(0x183)][w(0x181)](w(0x19d) + x(0x1a5) + w(0x186) + m);
            const n = {};
            n[w(0x193)] = g[x(0x1ae)], await f[w(0x18a)](n), h[x(0x17b)](f[w(0x178)] + (x(0x1b1) + w(0x197)), {
                'action': g[w(0x17a)],
                'session': f
            });
            throw new AppError_1[(x(0x194))](x(0x185) + x(0x195) + w(0x1b2) + m, 0x21f6 + 0x9e8 + 0x1525 * -0x2);
        }
    };
exports[r(0x19d) + r(0x1a5)] = StartInstaBotSession;