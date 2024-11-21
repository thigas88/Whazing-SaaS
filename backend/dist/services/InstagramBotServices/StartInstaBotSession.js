'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x135 + 0x10bb + -0x126d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xd4)) / (0x19de + -0x29b + -0x1742) * (-parseInt(q(0xeb)) / (-0x1a20 + 0x162f + -0x3 * -0x151)) + -parseInt(p(0xc9)) / (-0x1e3 * -0xf + 0x17 * -0x66 + 0x10 * -0x132) * (-parseInt(p(0xce)) / (0x224b + -0x1d3a + -0x50d)) + parseInt(p(0xf1)) / (0x17ff * -0x1 + 0x12bb * -0x1 + 0x2abf * 0x1) + parseInt(q(0xe6)) / (0x1 * -0x12a3 + 0x15d1 + -0x328) * (-parseInt(p(0xf7)) / (-0x1 * -0xd8b + 0x1 * 0x175b + -0x24df)) + parseInt(q(0xc7)) / (-0x7 * 0x53a + -0x1b95 + 0xcd7 * 0x5) * (-parseInt(q(0xe8)) / (0x226c + 0x22 * 0x65 + -0x2fcd)) + -parseInt(q(0xf8)) / (0x1b1f + 0x1dcc * 0x1 + -0x38e1) * (parseInt(p(0xde)) / (0x1 * -0xf54 + -0x1f04 + 0x13 * 0x271)) + parseInt(q(0xb9)) / (0x1 * -0x24af + -0x5f * -0x1d + -0x8 * -0x33f) * (parseInt(p(0xb8)) / (-0x162e + 0x3d7 * 0x1 + 0x1264));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x87f3a + -0x4 * -0x1d7d + -0x1 * -0xcbeb6));
var __importDefault = this && this[r(0xfe) + s(0xe3)] || function (c) {
    const t = r;
    return c && c[t(0xc0)] ? c : { 'default': c };
};
const k = {};
k[s(0xc6)] = !![], Object[s(0xda) + s(0xdb)](exports, r(0xc0), k), exports[r(0xe2) + s(0xed)] = void (-0xb5 * -0x2f + -0x1fa2 + 0x1 * -0x199);
const AppError_1 = __importDefault(require(s(0xcd) + s(0xdc) + 'r')), InstaBot_1 = require(r(0xc4) + s(0xd2)), socket_1 = require(s(0xc4) + r(0xf9)), logger_1 = require(s(0xcb) + r(0xd1)), InstaBotMessageListener_1 = require(r(0xbd) + r(0xbc) + r(0xd5)), InstagramSendMessagesSystem_1 = __importDefault(require(r(0xc2) + s(0xc3) + s(0xf5))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = r, v = r;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (-0x430 * 0x4 + 0x1dfc * -0x1 + 0x4 * 0xbaf, InstagramSendMessagesSystem_1[u(0xcf)])(c, d);
        } catch (e) {
            logger_1[u(0xd0)][u(0xf3)](v(0xfd) + u(0xd6) + u(0xc8) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = r, x = s, g = {
                'cOypD': w(0xd8),
                'nPigD': w(0xbf),
                'WVDRr': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'wrHcR': w(0xf0),
                'OKPeh': w(0xfb) + 'ED'
            }, h = (-0x1adc + -0x2575 + 0x4051, socket_1[x(0xd7)])(), i = {};
        i[w(0xfc)] = g[x(0xf4)], await f[w(0xbf)](i), h[w(0xcc)](f[x(0xd3)] + (x(0xf6) + w(0xbb)), {
            'action': g[x(0xe5)],
            'session': f
        });
        try {
            const j = await (0x1c * 0xd9 + 0x3e0 + -0x934 * 0x3, InstaBot_1[x(0xe4) + 'ot'])(f);
            (0x2539 + 0xc7 * 0x11 + 0x10d0 * -0x3, InstaBotMessageListener_1[w(0xca) + w(0xee) + x(0xe9)])(j), g[w(0xec)](setInterval, checkMessages, +(process[x(0xc5)][w(0xfa) + w(0xdf)] || -0x154c + -0x11 * -0x19a + 0x1 * 0xd9a), j, f[x(0xd3)]), logger_1[x(0xd0)][w(0xe1)](x(0xea) + w(0xd9) + w(0xf2) + x(0xe7) + f[w(0xd3)]);
            const l = {};
            l[x(0xfc)] = g[x(0xe0)], await f[w(0xbf)](l), h[w(0xcc)](f[w(0xd3)] + (w(0xf6) + x(0xbb)), {
                'action': g[w(0xe5)],
                'session': f
            });
        } catch (m) {
            logger_1[x(0xd0)][w(0xf3)](w(0xe2) + w(0xed) + x(0xef) + m);
            const n = {};
            n[x(0xfc)] = g[w(0xc1)], await f[w(0xbf)](n), h[x(0xcc)](f[w(0xd3)] + (x(0xf6) + w(0xbb)), {
                'action': g[w(0xe5)],
                'session': f
            });
            throw new AppError_1[(w(0xcf))](w(0xdd) + x(0xbe) + w(0xba) + m, 0x3d * -0x3a + -0x7b * -0x35 + -0x1 * 0xa11);
        }
    };
exports[r(0xe2) + r(0xed)] = StartInstaBotSession;
function a() {
    const y = [
        '24252RIKlFQ',
        'RAM:\x20',
        'ession',
        'MessageLis',
        './InstaBot',
        'ECT_INSTAG',
        'update',
        '__esModule',
        'OKPeh',
        './Instagra',
        'mSendMessa',
        '../../libs',
        'env',
        'value',
        '32BGBhZL',
        '\x20Tenant:\x20',
        '687usPBQx',
        'InstaBotMe',
        '../../util',
        'emit',
        '../../erro',
        '1956mqIajM',
        'default',
        'logger',
        's/logger',
        '/InstaBot',
        'tenantId',
        '4FQEKJl',
        'tener',
        'ckMessages',
        'getIO',
        'OPENING',
        'stagram\x20in',
        'defineProp',
        'erty',
        'rs/AppErro',
        'ERROR_CONN',
        '11FZehzh',
        'RVAL',
        'wrHcR',
        'info',
        'StartInsta',
        'fault',
        'initInstaB',
        'nPigD',
        '42618WegNCS',
        'mpresa:\x20',
        '913887RBJSzr',
        'ner',
        'Conexão\x20In',
        '299782LVxyuG',
        'WVDRr',
        'BotSession',
        'ssageListe',
        '\x20|\x20Error:\x20',
        'CONNECTED',
        '476405kavPvr',
        'iciada\x20|\x20E',
        'error',
        'cOypD',
        'gesSystem',
        ':whatsappS',
        '70MfNGPM',
        '4690190TRJbvR',
        '/socket',
        'CHECK_INTE',
        'DISCONNECT',
        'status',
        'ERROR:\x20che',
        '__importDe',
        '10595RfkSzT'
    ];
    a = function () {
        return y;
    };
    return a();
}