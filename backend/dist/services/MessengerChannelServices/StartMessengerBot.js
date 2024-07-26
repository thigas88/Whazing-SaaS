'use strict';
const r = b, s = b;
function a() {
    const y = [
        'rSendMessa',
        'RVAL',
        'gesSystem',
        '3534oxmJnO',
        './Messenge',
        'RYQMh',
        'suJhH',
        'ngerBot',
        'gerBot',
        'ession',
        'fault',
        'CHECK_INTE',
        'number',
        'default',
        'erty',
        'OPENING',
        '535496MYOmCl',
        '/socket',
        'PlAdl',
        '60:\x20',
        'tenantId',
        'enger:\x20che',
        'logger',
        'update',
        '/messenger',
        'ssenger\x20in',
        'ERROR\x20Mess',
        'ckMessages',
        'Url\x20360\x20|\x20',
        'Conexão\x20Me',
        'Error:\x20',
        'iciada\x20|\x20E',
        'info',
        'Bot',
        '1106wFnTdv',
        'value',
        'defineProp',
        'CONNECTED',
        'DISCONNECT',
        'mpresa:\x20',
        'getIO',
        'ERROR_CONN',
        'error',
        'env',
        'WWfzs',
        '__importDe',
        ':whatsappS',
        '2842592qUWiyk',
        '__esModule',
        'SetWebHook',
        '1742590sXjPbq',
        '\x20Tenant:\x20',
        'initMessen',
        'StartMesse',
        's/logger',
        '5565ZjWPWS',
        '17485168RipjTh',
        'status',
        '../../util',
        'rs/AppErro',
        '../../libs',
        'ECT_WABA_3',
        '2944950rLXGGy',
        'NefRJ',
        '../../erro',
        'emit'
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
            const f = parseInt(p(0x157)) / (-0x2 * -0x10ff + 0xb6d * -0x3 + -0x1 * -0x4a) + parseInt(q(0x172)) / (0x1c * 0x8d + -0x101a + 0xb0) + -parseInt(q(0x15e)) / (-0x23bb + 0x7a * -0xb + 0x28fc) + -parseInt(p(0x14f)) / (0x107b * 0x1 + 0x2 * 0x7d3 + -0x201d) + -parseInt(p(0x152)) / (0x1 * 0x179e + -0xd5 * 0x4 + 0x1445 * -0x1) + -parseInt(p(0x165)) / (0xcbf + -0x3da + -0x8df * 0x1) * (-parseInt(p(0x142)) / (0x1 * -0x101 + -0x1642 + 0x174a)) + parseInt(p(0x158)) / (0x5 * -0x303 + -0x2631 + 0x3e * 0xdc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2fed * 0x27 + -0x6416e + 0x6c138));
var __importDefault = this && this[r(0x14d) + r(0x16c)] || function (c) {
    const t = s;
    return c && c[t(0x150)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x159 + -0x466 + -0x3 * -0x250);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x143)] = !![], Object[s(0x144) + s(0x170)](exports, s(0x150), k), exports[s(0x155) + r(0x169)] = void (-0x4 * -0x506 + -0x1af5 * 0x1 + 0x6dd * 0x1);
const AppError_1 = __importDefault(require(r(0x160) + r(0x15b) + 'r')), messengerBot_1 = require(s(0x15c) + r(0x138) + r(0x141)), socket_1 = require(s(0x15c) + s(0x131)), logger_1 = require(s(0x15a) + s(0x156)), MessengerSendMessagesSystem_1 = __importDefault(require(r(0x166) + s(0x162) + s(0x164))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = r, v = s;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (0x2570 + 0x1e1 + -0x2751, MessengerSendMessagesSystem_1[u(0x16f)])(c, d);
        } catch (e) {
            logger_1[u(0x136)][v(0x14a)](u(0x13a) + v(0x135) + u(0x13b) + u(0x153) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = r, x = r, g = {
                'WWfzs': w(0x171),
                'RYQMh': w(0x137),
                'NefRJ': x(0x145),
                'suJhH': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'PlAdl': w(0x146) + 'ED'
            }, h = (0x3 * 0x683 + -0x1137 + -0x252, socket_1[w(0x148)])(), i = {};
        i[x(0x159)] = g[x(0x14c)], await f[x(0x137)](i), h[x(0x161)](f[x(0x134)] + (x(0x14e) + w(0x16b)), {
            'action': g[w(0x167)],
            'session': f
        });
        try {
            const j = '';
            logger_1[w(0x136)][x(0x140)](w(0x13d) + w(0x139) + w(0x13f) + w(0x147) + f[x(0x134)]);
            const l = await (-0x1 * -0x895 + -0x1 * -0x100 + 0xdf * -0xb, messengerBot_1[x(0x154) + w(0x16a)])(f), m = {};
            m[x(0x159)] = g[w(0x15f)], m[x(0x16e)] = j, await f[w(0x137)](m), g[x(0x168)](setInterval, messengerCheckMessages, +(process[x(0x14b)][w(0x16d) + w(0x163)] || 0xf7f * -0x1 + -0x1c2d * -0x1 + 0x6da), l, f[x(0x134)]), h[x(0x161)](f[x(0x134)] + (w(0x14e) + x(0x16b)), {
                'action': g[w(0x167)],
                'session': f
            });
        } catch (n) {
            logger_1[w(0x136)][x(0x14a)](x(0x151) + w(0x13c) + w(0x13e) + n);
            const o = {};
            o[x(0x159)] = g[w(0x132)], await f[w(0x137)](o), h[w(0x161)](f[x(0x134)] + (w(0x14e) + x(0x16b)), {
                'action': g[x(0x167)],
                'session': f
            });
            throw new AppError_1[(w(0x16f))](x(0x149) + w(0x15d) + w(0x133) + n, -0x20cb + -0x1045 + 0x32a4);
        }
    };
exports[s(0x155) + r(0x169)] = StartMessengerBot;