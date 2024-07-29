'use strict';
const r = b, s = b;
function a() {
    const y = [
        './InstaBot',
        'tenantId',
        './Instagra',
        '601701iicJXE',
        'Ttscv',
        'ERROR:\x20che',
        '\x20|\x20Error:\x20',
        'ssageListe',
        '/socket',
        '\x20Tenant:\x20',
        '8sTgISF',
        'rs/AppErro',
        '324hBzKyv',
        'default',
        '__importDe',
        'env',
        'rPmvh',
        'logger',
        'emit',
        'Conexão\x20In',
        'ERROR_CONN',
        'ession',
        'MessageLis',
        'error',
        'OPENING',
        'CONNECTED',
        '__esModule',
        'CHECK_INTE',
        'gesSystem',
        'RAM:\x20',
        'BKvxg',
        '7555922lKHkSJ',
        's/logger',
        '/InstaBot',
        'BotSession',
        'RVAL',
        'stagram\x20in',
        'iciada\x20|\x20E',
        '388gldHUj',
        '1211690nbHqaQ',
        'mpresa:\x20',
        '3226258pdouEE',
        'StartInsta',
        'initInstaB',
        'mSendMessa',
        'InstaBotMe',
        'oPSfU',
        'value',
        'getIO',
        'status',
        '92672mppuEE',
        'DISCONNECT',
        '../../erro',
        'info',
        'erty',
        'fault',
        'ner',
        'RCDDt',
        ':whatsappS',
        'update',
        'tener',
        '../../libs',
        '../../util',
        '2323XjYIZX',
        '35KkBwLj',
        'ECT_INSTAG',
        'ckMessages',
        '194466ajDlwz',
        'defineProp'
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
            const f = parseInt(p(0x10d)) / (-0x94f + 0x2cd + 0x683) * (-parseInt(p(0x139)) / (0xa * 0x1d1 + -0x7a1 + 0x23 * -0x4d)) + -parseInt(q(0x116)) / (0x2 * 0x8bd + 0x1 * 0x1dcb + 0x20e * -0x17) * (-parseInt(p(0x11d)) / (0xe6 * 0x1f + 0x2 * 0x787 + 0x1e * -0x16e)) + -parseInt(p(0x10e)) / (-0x186d + 0x1571 * 0x1 + 0x301) * (-parseInt(p(0x111)) / (-0x2155 + 0x247 * -0x2 + -0x25e9 * -0x1)) + parseInt(q(0x13c)) / (-0xc3a + 0x9 * -0x3a8 + -0x1 * -0x2d29) + parseInt(q(0x145)) / (0x15 * -0xef + -0x1 * -0xce9 + 0x6ba) * (parseInt(q(0x11f)) / (-0x25f * 0xa + -0x154e + 0x2d0d)) + -parseInt(p(0x13a)) / (-0x1606 + -0x52 * -0x40 + -0x8 * -0x32) + -parseInt(q(0x132)) / (-0x25f4 + -0x5 * 0x5bd + 0x42b0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x28 * -0x1ad5 + 0x516 * -0x27 + 0x5aae));
var __importDefault = this && this[r(0x121) + r(0x105)] || function (c) {
    const t = s;
    return c && c[t(0x12d)] ? c : { 'default': c };
};
const k = {};
k[s(0x142)] = !![], Object[s(0x112) + r(0x104)](exports, s(0x12d), k), exports[r(0x13d) + s(0x135)] = void (-0x2 * 0xd39 + -0x23 * -0xc9 + -0x109);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x17e9 + 0x1 * -0x204d + -0xb72 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x147) + s(0x11e) + 'r')), InstaBot_1 = require(s(0x10b) + s(0x134)), socket_1 = require(s(0x10b) + s(0x11b)), logger_1 = require(r(0x10c) + s(0x133)), InstaBotMessageListener_1 = require(s(0x113) + r(0x129) + s(0x10a)), InstagramSendMessagesSystem_1 = __importDefault(require(s(0x115) + s(0x13f) + r(0x12f))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = s, v = s;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (-0x1af8 + 0x3 * -0x3d1 + -0x7af * -0x5, InstagramSendMessagesSystem_1[u(0x120)])(c, d);
        } catch (e) {
            logger_1[v(0x124)][v(0x12a)](u(0x118) + u(0x110) + u(0x11c) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = r, x = r, g = {
                'Ttscv': w(0x12b),
                'rPmvh': x(0x109),
                'BKvxg': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'RCDDt': w(0x12c),
                'oPSfU': x(0x146) + 'ED'
            }, h = (-0x2111 * -0x1 + -0x7e5 + -0x192c, socket_1[w(0x143)])(), i = {};
        i[x(0x144)] = g[x(0x117)], await f[x(0x109)](i), h[x(0x125)](f[x(0x114)] + (w(0x108) + x(0x128)), {
            'action': g[x(0x123)],
            'session': f
        });
        try {
            const j = await (0x18a + -0x1390 + -0x1206 * -0x1, InstaBot_1[w(0x13e) + 'ot'])(f);
            (-0x1 * 0x10e7 + 0xee7 + 0x200, InstaBotMessageListener_1[x(0x140) + x(0x11a) + x(0x106)])(j), g[x(0x131)](setInterval, checkMessages, +(process[x(0x122)][x(0x12e) + x(0x136)] || -0x1358 + -0x1 * 0x22bd + 0x5 * 0xeb9), j, f[w(0x114)]), logger_1[x(0x124)][w(0x148)](x(0x126) + w(0x137) + x(0x138) + w(0x13b) + f[x(0x114)]);
            const l = {};
            l[x(0x144)] = g[w(0x107)], await f[w(0x109)](l), h[w(0x125)](f[w(0x114)] + (w(0x108) + x(0x128)), {
                'action': g[x(0x123)],
                'session': f
            });
        } catch (m) {
            logger_1[w(0x124)][x(0x12a)](x(0x13d) + x(0x135) + x(0x119) + m);
            const n = {};
            n[x(0x144)] = g[w(0x141)], await f[x(0x109)](n), h[x(0x125)](f[x(0x114)] + (w(0x108) + w(0x128)), {
                'action': g[w(0x123)],
                'session': f
            });
            throw new AppError_1[(x(0x120))](x(0x127) + x(0x10f) + x(0x130) + m, 0x1 * 0x7f9 + 0x197a + -0x1 * 0x1fdf);
        }
    };
exports[s(0x13d) + s(0x135)] = StartInstaBotSession;