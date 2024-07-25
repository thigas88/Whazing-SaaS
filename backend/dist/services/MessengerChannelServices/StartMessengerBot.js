'use strict';
const r = b, s = b;
function a() {
    const y = [
        '/messenger',
        'RVAL',
        'ngerBot',
        '../../erro',
        'ERROR_CONN',
        'update',
        'OPENING',
        'ckMessages',
        'SetWebHook',
        '87YAMSfV',
        'initMessen',
        'enger:\x20che',
        'Url\x20360\x20|\x20',
        ':whatsappS',
        'status',
        '__importDe',
        'error',
        'ERROR\x20Mess',
        '288oBrVmt',
        '168305PwyeMQ',
        'gerBot',
        'ssenger\x20in',
        'erty',
        'ouvIe',
        'DgilK',
        '../../libs',
        'YzgJo',
        'logger',
        'ession',
        '3829192OkQTjl',
        '__esModule',
        '60:\x20',
        'gesSystem',
        'PyCdf',
        'Bot',
        '\x20Tenant:\x20',
        'info',
        'ECT_WABA_3',
        'defineProp',
        'Error:\x20',
        'emit',
        'getIO',
        'CHECK_INTE',
        'oUSdA',
        'env',
        'Conexão\x20Me',
        'value',
        's/logger',
        'number',
        'StartMesse',
        'default',
        './Messenge',
        '/socket',
        '9MFUGdd',
        'rs/AppErro',
        '6gCibjV',
        '5452TYYJiT',
        'fault',
        'tenantId',
        '../../util',
        '467742NKvsxb',
        'iciada\x20|\x20E',
        '3474527byNCiJ',
        'mpresa:\x20',
        'CONNECTED',
        'rSendMessa',
        '90dQmrLZ',
        '81188vgHYZv',
        'DISCONNECT',
        '341720TwzmHP'
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
            const f = -parseInt(p(0x174)) / (-0x1060 + 0x974 + 0x6ed) * (parseInt(p(0x15d)) / (-0x773 * 0x5 + -0x5 * 0x3df + 0x4 * 0xe27)) + parseInt(q(0x167)) / (-0x2 * 0x529 + -0xde1 + 0x1836) * (parseInt(p(0x168)) / (-0x1 * -0xcc1 + -0x1 * -0x7c3 + -0x1480)) + -parseInt(p(0x17e)) / (0x12e5 + 0xf9 * 0x1 + -0x13d9) + parseInt(q(0x15c)) / (0x3 * -0x6df + -0x7fc + 0x1c9f) * (-parseInt(q(0x163)) / (0x220b + 0xee2 + -0x30e6)) + -parseInt(q(0x142)) / (0xf * -0x52 + 0x23d7 + 0x1f01 * -0x1) * (parseInt(p(0x15a)) / (0x3d8 + 0x1e0 * 0xd + 0x1e1 * -0xf)) + -parseInt(p(0x16a)) / (-0x160d * -0x1 + -0x20e9 + 0xba * 0xf) + -parseInt(q(0x161)) / (-0xdf1 * -0x1 + 0xa76 + -0x185c) * (-parseInt(q(0x17d)) / (0x1 * -0x7f7 + -0x17 * 0xd6 + -0x13 * -0x16f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2831c * 0x2 + 0x27b98 + 0x1 * 0x7df99));
var __importDefault = this && this[r(0x17a) + r(0x15e)] || function (c) {
    const t = r;
    return c && c[t(0x143)] ? c : { 'default': c };
};
const k = {};
k[r(0x153)] = !![], Object[r(0x14b) + s(0x181)](exports, r(0x143), k), exports[r(0x156) + r(0x16d)] = void (0x1ffe + 0x1 * 0x2075 + -0x4073);
const AppError_1 = __importDefault(require(r(0x16e) + r(0x15b) + 'r')), messengerBot_1 = require(s(0x184) + r(0x16b) + s(0x147)), socket_1 = require(s(0x184) + s(0x159)), logger_1 = require(s(0x160) + r(0x154)), MessengerSendMessagesSystem_1 = __importDefault(require(r(0x158) + s(0x166) + s(0x145))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = s, v = s;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (0x180d + 0x1f9b + 0x68 * -0x89, MessengerSendMessagesSystem_1[u(0x157)])(c, d);
        } catch (e) {
            logger_1[u(0x186)][u(0x17b)](v(0x17c) + v(0x176) + v(0x172) + v(0x148) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = s, x = s, g = {
                'YzgJo': w(0x171),
                'oUSdA': x(0x170),
                'PyCdf': w(0x165),
                'ouvIe': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'DgilK': x(0x169) + 'ED'
            }, h = (-0x2fb * -0xd + -0x24d6 + -0x1 * 0x1e9, socket_1[x(0x14e)])(), i = {};
        i[x(0x179)] = g[w(0x185)], await f[x(0x170)](i), h[x(0x14d)](f[w(0x15f)] + (w(0x178) + w(0x141)), {
            'action': g[x(0x150)],
            'session': f
        });
        try {
            const j = '';
            logger_1[w(0x186)][w(0x149)](x(0x152) + x(0x180) + x(0x162) + x(0x164) + f[w(0x15f)]);
            const l = await (0x1634 + 0x50 + -0x1684, messengerBot_1[x(0x175) + x(0x17f)])(f), m = {};
            m[x(0x179)] = g[x(0x146)], m[w(0x155)] = j, await f[w(0x170)](m), g[x(0x182)](setInterval, messengerCheckMessages, +(process[w(0x151)][x(0x14f) + x(0x16c)] || -0x8 * 0x41b + 0x1 * -0x1483 + 0x48e3), l, f[w(0x15f)]), h[w(0x14d)](f[w(0x15f)] + (x(0x178) + w(0x141)), {
                'action': g[w(0x150)],
                'session': f
            });
        } catch (n) {
            logger_1[x(0x186)][x(0x17b)](x(0x173) + x(0x177) + w(0x14c) + n);
            const o = {};
            o[x(0x179)] = g[x(0x183)], await f[x(0x170)](o), h[w(0x14d)](f[w(0x15f)] + (x(0x178) + w(0x141)), {
                'action': g[x(0x150)],
                'session': f
            });
            throw new AppError_1[(x(0x157))](x(0x16f) + x(0x14a) + w(0x144) + n, -0x1891 + 0x128f * 0x1 + 0x796);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 + 0x3e * 0x5 + -0x1 * -0x12);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x156) + s(0x16d)] = StartMessengerBot;