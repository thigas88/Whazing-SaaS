'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1480 + 0x1447 + -0x4 * -0x65);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x15f)) / (-0x1 * 0x147d + -0x2fd + 0x177b * 0x1) + parseInt(p(0x15c)) / (0x1f74 + 0x1 * -0x11c5 + -0x185 * 0x9) + -parseInt(q(0x185)) / (-0x8ca * 0x1 + -0x415 * 0x9 + 0xf2e * 0x3) + -parseInt(p(0x169)) / (0x2405 + -0x14 * 0x15b + 0xfd * -0x9) * (-parseInt(q(0x18e)) / (0xc95 + -0x5 * -0x31c + 0x1c * -0x101)) + -parseInt(q(0x17b)) / (0x4e3 + -0x1e57 * 0x1 + 0x6 * 0x43f) + parseInt(p(0x17e)) / (0xdf3 + -0x24b * 0xd + 0xfe3) + -parseInt(q(0x16a)) / (0x13bf + 0x1dfd + -0xc6d * 0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1453 * -0x6f + 0xa3c83 + -0x1 * -0x71615));
var __importDefault = this && this[r(0x177) + r(0x163)] || function (c) {
    const t = s;
    return c && c[t(0x18a)] ? c : { 'default': c };
};
const k = {};
k[r(0x178)] = !![], Object[r(0x197) + s(0x19b)](exports, r(0x18a), k), exports[s(0x181) + s(0x168)] = void (-0x13d6 + -0x1 * -0x17fd + 0x427 * -0x1);
const AppError_1 = __importDefault(require(s(0x18f) + r(0x16d) + 'r')), messengerBot_1 = require(s(0x198) + r(0x183) + r(0x182)), socket_1 = require(s(0x198) + r(0x179)), logger_1 = require(r(0x187) + r(0x175)), MessengerSendMessagesSystem_1 = __importDefault(require(r(0x171) + r(0x170) + s(0x16c))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = r, v = r;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (0x89d + -0xa0b * -0x1 + -0x2 * 0x954, MessengerSendMessagesSystem_1[u(0x164)])(c, d);
        } catch (e) {
            logger_1[u(0x176)][u(0x18b)](v(0x18c) + u(0x193) + v(0x166) + u(0x192) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = r, x = r, g = {
                'RKbNJ': w(0x17a),
                'Zbpjr': x(0x17c),
                'JXCUb': w(0x15d),
                'vkRpN': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'cUnjl': x(0x189) + 'ED'
            }, h = (-0x1fb9 * -0x1 + 0x1391 * 0x1 + -0x19a5 * 0x2, socket_1[w(0x16f)])(), i = {};
        i[w(0x160)] = g[x(0x188)], await f[w(0x17c)](i), h[w(0x180)](f[w(0x196)] + (x(0x167) + x(0x186)), {
            'action': g[w(0x199)],
            'session': f
        });
        try {
            const j = '';
            logger_1[w(0x176)][x(0x15e)](x(0x18d) + x(0x15b) + x(0x195) + x(0x173) + f[x(0x196)]);
            const l = await (-0x216c + 0x1317 + 0xe55, messengerBot_1[x(0x194) + x(0x19c)])(f), m = {};
            m[w(0x160)] = g[x(0x174)], m[w(0x17f)] = j, await f[w(0x17c)](m), g[x(0x19a)](setInterval, messengerCheckMessages, +(process[x(0x17d)][x(0x165) + w(0x172)] || -0x42 * 0x63 + 0xf * 0x6 + 0x2cb4), l, f[w(0x196)]), h[x(0x180)](f[x(0x196)] + (x(0x167) + x(0x186)), {
                'action': g[w(0x199)],
                'session': f
            });
        } catch (n) {
            logger_1[x(0x176)][x(0x18b)](w(0x184) + w(0x161) + x(0x162) + n);
            const o = {};
            o[x(0x160)] = g[x(0x16b)], await f[x(0x17c)](o), h[x(0x180)](f[x(0x196)] + (x(0x167) + x(0x186)), {
                'action': g[w(0x199)],
                'session': f
            });
            throw new AppError_1[(w(0x164))](x(0x191) + w(0x16e) + x(0x190) + n, -0x430 + -0x2700 + 0x2cc4);
        }
    };
exports[s(0x181) + r(0x168)] = StartMessengerBot;
function a() {
    const y = [
        '\x20Tenant:\x20',
        'enger:\x20che',
        'initMessen',
        'iciada\x20|\x20E',
        'tenantId',
        'defineProp',
        '../../libs',
        'Zbpjr',
        'vkRpN',
        'erty',
        'gerBot',
        'ssenger\x20in',
        '2012290Vymnkx',
        'CONNECTED',
        'info',
        '460941WyJvzq',
        'status',
        'Url\x20360\x20|\x20',
        'Error:\x20',
        'fault',
        'default',
        'CHECK_INTE',
        'ckMessages',
        ':whatsappS',
        'ngerBot',
        '4jRqHsu',
        '2894328pfXUPf',
        'cUnjl',
        'gesSystem',
        'rs/AppErro',
        'ECT_WABA_3',
        'getIO',
        'rSendMessa',
        './Messenge',
        'RVAL',
        'mpresa:\x20',
        'JXCUb',
        's/logger',
        'logger',
        '__importDe',
        'value',
        '/socket',
        'OPENING',
        '2364624pKSojr',
        'update',
        'env',
        '6596919MIIcbv',
        'number',
        'emit',
        'StartMesse',
        'Bot',
        '/messenger',
        'SetWebHook',
        '2172648DxshPz',
        'ession',
        '../../util',
        'RKbNJ',
        'DISCONNECT',
        '__esModule',
        'error',
        'ERROR\x20Mess',
        'Conexão\x20Me',
        '2751065GhQjQK',
        '../../erro',
        '60:\x20',
        'ERROR_CONN'
    ];
    a = function () {
        return y;
    };
    return a();
}