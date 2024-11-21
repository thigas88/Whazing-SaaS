'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x146 * -0x9 + -0x3d7 + 0x3 * -0x216);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x184)) / (-0x19f2 + -0x15 * 0x52 + 0x20ad) + parseInt(p(0x188)) / (0xca1 + -0x3 * 0xac + -0xa9b * 0x1) + parseInt(q(0x167)) / (0x1 * -0x409 + 0x26ec + 0x8 * -0x45c) * (-parseInt(q(0x199)) / (0xbe7 + -0x177 * 0xd + 0x728)) + -parseInt(q(0x175)) / (0x1530 + 0x1bc0 + -0x30eb) * (parseInt(q(0x19f)) / (0x1dbc + 0x3e6 * 0x2 + -0x2582)) + -parseInt(q(0x174)) / (0x1e * -0x64 + 0x673 * -0x2 + 0x18a5) * (parseInt(q(0x18e)) / (-0x59c + 0x26f0 + -0x214c)) + -parseInt(p(0x166)) / (-0x3 * 0x7cc + 0x3 * 0xcf2 + 0x5 * -0x315) * (parseInt(q(0x164)) / (-0x57a * 0x2 + 0x26c9 * -0x1 + 0x1 * 0x31c7)) + parseInt(q(0x19c)) / (0x169a + -0x1309 + 0x52 * -0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1aa668 + -0x13 * -0x77eb + -0x2 * -0xfb7ad));
var __importDefault = this && this[r(0x176) + r(0x171)] || function (c) {
    const t = s;
    return c && c[t(0x191)] ? c : { 'default': c };
};
const k = {};
k[r(0x179)] = !![], Object[r(0x1a1) + r(0x165)](exports, r(0x191), k), exports[s(0x183) + s(0x15f)] = void (0x1 * 0x1994 + 0x8f2 * -0x1 + -0x851 * 0x2);
const AppError_1 = __importDefault(require(r(0x187) + r(0x181) + 'r')), messengerBot_1 = require(s(0x16b) + s(0x173) + s(0x16c)), socket_1 = require(s(0x16b) + s(0x178)), logger_1 = require(s(0x16f) + r(0x190)), MessengerSendMessagesSystem_1 = __importDefault(require(s(0x15d) + r(0x162) + r(0x161))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = s, v = s;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (0x1280 + 0x369 * 0x4 + -0x11 * 0x1e4, MessengerSendMessagesSystem_1[u(0x18f)])(c, d);
        } catch (e) {
            logger_1[v(0x16e)][v(0x160)](u(0x180) + u(0x193) + v(0x170) + v(0x17a) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = r, x = r, g = {
                'KdaCK': w(0x19d),
                'anKAu': w(0x1a0),
                'maPPz': x(0x18d),
                'kEMgQ': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'wXtwy': x(0x17c) + 'ED'
            }, h = (-0xa36 + 0x9 * 0x22d + -0x95f * 0x1, socket_1[w(0x17f)])(), i = {};
        i[x(0x19e)] = g[x(0x198)], await f[x(0x1a0)](i), h[w(0x17e)](f[w(0x169)] + (w(0x172) + w(0x16a)), {
            'action': g[x(0x185)],
            'session': f
        });
        try {
            const j = '';
            logger_1[x(0x16e)][x(0x19b)](x(0x163) + w(0x192) + w(0x18a) + w(0x15e) + f[w(0x169)]);
            const l = await (-0x89 * 0x12 + -0xfe + 0xaa0, messengerBot_1[x(0x18c) + x(0x197)])(f), m = {};
            m[w(0x19e)] = g[w(0x196)], m[w(0x189)] = j, await f[x(0x1a0)](m), g[x(0x195)](setInterval, messengerCheckMessages, +(process[w(0x194)][x(0x182) + x(0x18b)] || -0x1a3e + -0x24b2 + -0xb6 * -0x74), l, f[w(0x169)]), h[x(0x17e)](f[w(0x169)] + (x(0x172) + w(0x16a)), {
                'action': g[x(0x185)],
                'session': f
            });
        } catch (n) {
            logger_1[x(0x16e)][x(0x160)](w(0x168) + x(0x17b) + x(0x16d) + n);
            const o = {};
            o[x(0x19e)] = g[x(0x177)], await f[w(0x1a0)](o), h[w(0x17e)](f[w(0x169)] + (x(0x172) + w(0x16a)), {
                'action': g[x(0x185)],
                'session': f
            });
            throw new AppError_1[(x(0x18f))](w(0x19a) + w(0x186) + x(0x17d) + n, 0x26c1 + 0x96 * 0x34 + 0x43a5 * -0x1);
        }
    };
function a() {
    const y = [
        'enger:\x20che',
        'env',
        'kEMgQ',
        'maPPz',
        'gerBot',
        'KdaCK',
        '322032QFXgRN',
        'ERROR_CONN',
        'info',
        '19931153qUzunV',
        'OPENING',
        'status',
        '1509714oPFCPt',
        'update',
        'defineProp',
        './Messenge',
        'mpresa:\x20',
        'ngerBot',
        'error',
        'gesSystem',
        'rSendMessa',
        'Conexão\x20Me',
        '70IHKRnH',
        'erty',
        '64503qyzfAo',
        '27FhEhNj',
        'SetWebHook',
        'tenantId',
        'ession',
        '../../libs',
        'Bot',
        'Error:\x20',
        'logger',
        '../../util',
        'ckMessages',
        'fault',
        ':whatsappS',
        '/messenger',
        '311122TcXgix',
        '5NWBMYJ',
        '__importDe',
        'wXtwy',
        '/socket',
        'value',
        '\x20Tenant:\x20',
        'Url\x20360\x20|\x20',
        'DISCONNECT',
        '60:\x20',
        'emit',
        'getIO',
        'ERROR\x20Mess',
        'rs/AppErro',
        'CHECK_INTE',
        'StartMesse',
        '1508812kPZlJe',
        'anKAu',
        'ECT_WABA_3',
        '../../erro',
        '405096cyPkyC',
        'number',
        'iciada\x20|\x20E',
        'RVAL',
        'initMessen',
        'CONNECTED',
        '288SfmUOn',
        'default',
        's/logger',
        '__esModule',
        'ssenger\x20in'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[r(0x183) + r(0x15f)] = StartMessengerBot;