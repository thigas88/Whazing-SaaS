'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x186c + -0x788 * -0x2 + 0x1b8 * 0x6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x11a)) / (0x15e1 + 0x1057 + -0x2637) + parseInt(q(0x10b)) / (-0x1580 + -0x6d * -0x41 + -0x1 * 0x62b) + parseInt(q(0x120)) / (-0x1 * 0xf4f + 0x242b * 0x1 + 0x9 * -0x251) + -parseInt(q(0x130)) / (-0x1096 + -0x1fb4 + 0x304e) * (parseInt(q(0x11e)) / (0x12ea + 0x95 * -0xa + -0x1 * 0xd13)) + -parseInt(q(0x118)) / (0x35 * -0x92 + -0x1b3e + 0x397e) + -parseInt(q(0xfc)) / (0x1063 * -0x1 + -0x3 * 0xf4 + 0x1346) + parseInt(q(0xf4)) / (-0xc3c * 0x1 + -0x30d + 0xf51);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * 0x3b6d5 + -0x24a + -0x38ff0));
function a() {
    const z = [
        'StartWaba3',
        'wYnqb',
        'SetWebHook',
        'endMessage',
        'logger',
        'apiKey',
        'fault',
        '../../libs',
        'status',
        'value',
        'okUrl',
        'CONNECTED',
        'ba\x20360\x20ini',
        'ERROR:\x20che',
        'DISCONNECT',
        '132nhXvnx',
        'eLuhg',
        'RVAL',
        'tenantId',
        '60:\x20',
        'getIO',
        '../../erro',
        '14091768xwMWec',
        'emit',
        'OPENING',
        'sSystem',
        '/socket',
        '__importDe',
        'XleYn',
        './Waba360S',
        '3284316padMDk',
        'ECT_WABA_3',
        ':whatsappS',
        'url',
        '__esModule',
        '\x20Tenant:\x20',
        'Conexão\x20Wa',
        'env',
        'ession',
        'number',
        'UrlWabaWeb',
        'rs/AppErro',
        'aQEaA',
        'Url\x20360\x20|\x20',
        'ICULV',
        '246310Grrsxa',
        'ERROR_CONN',
        './SetWebHo',
        'error',
        'default',
        'Hook',
        'info',
        's/logger',
        'update',
        'erty',
        '../../util',
        'ciada\x20|\x20Em',
        'Error:\x20',
        '1439262sCaODG',
        'tokenAPI',
        '6712agMEPk',
        'defineProp',
        'ckMessages',
        'CHECK_INTE',
        '115230IjzvMP',
        'presa:\x20',
        '263598gXpEFP'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[s(0xf9) + s(0x127)] || function (c) {
    const u = t;
    return c && c[u(0x100)] ? c : { 'default': c };
};
const k = {};
k[s(0x12a)] = !![], Object[t(0x11b) + t(0x114)](exports, s(0x100), k), exports[s(0x121) + '60'] = void (0x2 * -0xffb + 0x211 * 0x9 + 0x1 * 0xd5d);
const AppError_1 = __importDefault(require(s(0x136) + t(0x107) + 'r')), socket_1 = require(t(0x128) + t(0xf8)), logger_1 = require(s(0x115) + s(0x112)), SetWebHookUrl_1 = __importDefault(require(s(0x10d) + t(0x12b))), Waba360SendMessagesSystem_1 = __importDefault(require(t(0xfb) + t(0x124) + s(0xf7))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = t, w = s;
        if (checkingWaba360[c[v(0x133)]])
            return;
        checkingWaba360[c[v(0x133)]] = !![];
        try {
            await (0x4 * -0x2e3 + -0x2193 + 0x2d1f, Waba360SendMessagesSystem_1[w(0x10f)])(c);
        } catch (d) {
            logger_1[v(0x125)][v(0x10e)](w(0x12e) + v(0x11c) + w(0x101) + c[v(0x133)] + '::', d);
        }
        checkingWaba360[c[v(0x133)]] = ![];
    }, StartWaba360 = async g => {
        const x = t, y = t, h = {
                'ICULV': x(0xf6),
                'wYnqb': y(0x113),
                'eLuhg': y(0x12c),
                'aQEaA': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'XleYn': y(0x12f) + 'ED'
            }, i = (0x8ad * 0x2 + 0x1c9b + -0x2df5, socket_1[y(0x135)])(), j = {};
        j[x(0x129)] = h[y(0x10a)], await g[y(0x113)](j), i[y(0xf5)](g[x(0x133)] + (y(0xfe) + y(0x104)), {
            'action': h[x(0x122)],
            'session': g
        });
        try {
            const l = {};
            l[y(0xff)] = g[y(0x106) + x(0x110)] || '', l[x(0x126)] = g[y(0x119)], await (-0x523 + -0x17 * 0x2d + 0x92e, SetWebHookUrl_1[x(0x10f)])(l);
            const m = '';
            logger_1[y(0x125)][y(0x111)](x(0x102) + y(0x12d) + x(0x116) + y(0x11f) + g[y(0x133)]);
            const n = {};
            n[y(0x129)] = h[y(0x131)], n[x(0x105)] = m, await g[x(0x113)](n), h[x(0x108)](setInterval, checkMessagesWaba360, +(process[y(0x103)][x(0x11d) + x(0x132)] || 0x5 * -0x777 + -0x15b7 + -0x2 * -0x2749), g), i[y(0xf5)](g[x(0x133)] + (x(0xfe) + y(0x104)), {
                'action': h[x(0x122)],
                'session': g
            });
        } catch (o) {
            logger_1[x(0x125)][x(0x10e)](x(0x123) + x(0x109) + x(0x117) + o);
            const p = {};
            p[x(0x129)] = h[y(0xfa)], await g[y(0x113)](p), i[y(0xf5)](g[y(0x133)] + (x(0xfe) + y(0x104)), {
                'action': h[x(0x122)],
                'session': g
            });
            throw new AppError_1[(x(0x10f))](x(0x10c) + y(0xfd) + y(0x134) + o, 0x1946 + 0x1 * -0xc29 + 0x1 * -0xb89);
        }
    };
exports[s(0x121) + '60'] = StartWaba360;