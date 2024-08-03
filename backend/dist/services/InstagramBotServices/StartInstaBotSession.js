'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x425 * -0x6 + 0x7c + 0x17c3 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1bf)) / (-0x1 * 0x187d + -0x834 + -0x9 * -0x3a2) * (parseInt(p(0x1c0)) / (-0x1 * -0x34d + -0x4b7 * 0x2 + 0x623 * 0x1)) + -parseInt(q(0x1a2)) / (-0x2621 + 0xaee * 0x2 + -0x1 * -0x1048) * (-parseInt(p(0x1bc)) / (-0xb * 0x387 + 0x2b + 0x26a6)) + -parseInt(q(0x1d8)) / (0x2408 + -0x51c + -0x1ee7) * (-parseInt(p(0x1a8)) / (-0x1eba + 0x1072 + 0xe4e * 0x1)) + parseInt(p(0x1ca)) / (-0x1c * -0x4 + -0x24 * -0x115 + -0x275d) + parseInt(p(0x1d4)) / (0x9b8 + 0x1916 + 0x1163 * -0x2) + parseInt(p(0x1b0)) / (0x1 * 0x1a9f + -0x49 * 0x32 + -0xc54) * (-parseInt(p(0x1c7)) / (0x156 + -0x31 * 0x37 + 0x93b * 0x1)) + -parseInt(q(0x1b5)) / (0x2280 + -0x1612 + -0x421 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1d1fd + 0x12626 * -0x3 + 0x151 * 0x347));
var __importDefault = this && this[r(0x1a1) + s(0x1c6)] || function (c) {
    const t = s;
    return c && c[t(0x19d)] ? c : { 'default': c };
};
const k = {};
k[s(0x1af)] = !![], Object[r(0x1b8) + r(0x1cd)](exports, r(0x19d), k), exports[s(0x1b3) + s(0x1d0)] = void (0x23cb + 0x21f7 + -0x45c2);
function a() {
    const y = [
        'error',
        'RVAL',
        'tener',
        '__esModule',
        'ERROR_CONN',
        'info',
        'DODIg',
        '__importDe',
        '12AzBxvF',
        'CHECK_INTE',
        'ERROR:\x20che',
        'RAM:\x20',
        'CONNECTED',
        'pAbtq',
        '1170CMbFNt',
        './InstaBot',
        'XPlzj',
        'FJxmR',
        'ner',
        '/socket',
        '\x20|\x20Error:\x20',
        'value',
        '18jrLUuq',
        '../../erro',
        'rs/AppErro',
        'StartInsta',
        'ECT_INSTAG',
        '1025002LqhRQH',
        'getIO',
        'InstaBotMe',
        'defineProp',
        'logger',
        'ession',
        '\x20Tenant:\x20',
        '169772njuiyd',
        'OPENING',
        'GdVKO',
        '1723tLBvuU',
        '134aeQORg',
        ':whatsappS',
        '/InstaBot',
        './Instagra',
        'emit',
        'mSendMessa',
        'fault',
        '1611080KSjyRU',
        'status',
        'mpresa:\x20',
        '1799630zXlpDV',
        'gesSystem',
        'initInstaB',
        'erty',
        '../../util',
        'Conexão\x20In',
        'BotSession',
        '../../libs',
        'update',
        's/logger',
        '2180016aaHlPQ',
        'iciada\x20|\x20E',
        'tenantId',
        'env',
        '195uFFZzW',
        'ckMessages',
        'default',
        'DISCONNECT',
        'ssageListe',
        'MessageLis',
        'stagram\x20in'
    ];
    a = function () {
        return y;
    };
    return a();
}
const AppError_1 = __importDefault(require(r(0x1b1) + r(0x1b2) + 'r')), InstaBot_1 = require(r(0x1d1) + r(0x1c2)), socket_1 = require(r(0x1d1) + r(0x1ad)), logger_1 = require(r(0x1ce) + r(0x1d3)), InstaBotMessageListener_1 = require(s(0x1a9) + s(0x198) + s(0x19c)), InstagramSendMessagesSystem_1 = __importDefault(require(s(0x1c3) + s(0x1c5) + r(0x1cb))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = r, v = r;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (0x2160 + 0x1ad1 + 0x13 * -0x32b, InstagramSendMessagesSystem_1[u(0x1da)])(c, d);
        } catch (e) {
            logger_1[v(0x1b9)][v(0x19a)](u(0x1a4) + v(0x1d9) + v(0x1bb) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = r, x = s, g = {
                'XPlzj': w(0x1bd),
                'DODIg': w(0x1d2),
                'GdVKO': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'FJxmR': x(0x1a6),
                'pAbtq': w(0x1db) + 'ED'
            }, h = (-0x15cb + 0x1e5d + -0x892, socket_1[w(0x1b6)])(), i = {};
        i[x(0x1c8)] = g[w(0x1aa)], await f[w(0x1d2)](i), h[x(0x1c4)](f[x(0x1d6)] + (x(0x1c1) + x(0x1ba)), {
            'action': g[w(0x1a0)],
            'session': f
        });
        try {
            const j = await (0x3 * -0x720 + -0x11 * 0x197 + 0x3067, InstaBot_1[w(0x1cc) + 'ot'])(f);
            (-0x5b3 * 0x1 + 0x2 * 0x8d + 0x1 * 0x499, InstaBotMessageListener_1[w(0x1b7) + x(0x197) + x(0x1ac)])(j), g[x(0x1be)](setInterval, checkMessages, +(process[w(0x1d7)][w(0x1a3) + x(0x19b)] || -0xf9b + -0x1 * 0x1a + 0x233d), j, f[x(0x1d6)]), logger_1[w(0x1b9)][w(0x19f)](x(0x1cf) + w(0x199) + w(0x1d5) + x(0x1c9) + f[w(0x1d6)]);
            const l = {};
            l[x(0x1c8)] = g[w(0x1ab)], await f[x(0x1d2)](l), h[x(0x1c4)](f[x(0x1d6)] + (x(0x1c1) + w(0x1ba)), {
                'action': g[w(0x1a0)],
                'session': f
            });
        } catch (m) {
            logger_1[x(0x1b9)][w(0x19a)](w(0x1b3) + x(0x1d0) + x(0x1ae) + m);
            const n = {};
            n[w(0x1c8)] = g[w(0x1a7)], await f[x(0x1d2)](n), h[w(0x1c4)](f[x(0x1d6)] + (w(0x1c1) + w(0x1ba)), {
                'action': g[x(0x1a0)],
                'session': f
            });
            throw new AppError_1[(x(0x1da))](x(0x19e) + x(0x1b4) + x(0x1a5) + m, -0x959 * 0x2 + 0x1 * -0x46 + 0x148c);
        }
    };
exports[s(0x1b3) + s(0x1d0)] = StartInstaBotSession;