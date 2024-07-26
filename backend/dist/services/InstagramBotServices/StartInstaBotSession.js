'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1c3)) / (-0x2f1 + -0xe97 + -0x1189 * -0x1) + -parseInt(q(0x1d5)) / (0x27 + -0x4c * 0x6d + -0x2037 * -0x1) * (-parseInt(q(0x1d2)) / (0xb23 + -0x1 * 0x21a + -0x1 * 0x906)) + parseInt(p(0x1c8)) / (-0xec2 + 0xafc + 0x3ca) * (-parseInt(p(0x1bf)) / (-0xf94 + 0x1 * 0x6ed + 0x8ac * 0x1)) + -parseInt(q(0x1ae)) / (0x691 + -0x14ee + 0xe63) + -parseInt(q(0x1ad)) / (0x1 * -0x1819 + -0xb29 * -0x2 + 0x1ce) * (-parseInt(q(0x1c9)) / (-0x1848 + 0x1d11 + 0x4c1 * -0x1)) + parseInt(p(0x1c5)) / (-0x7ce + 0x1813 + -0x103c) + parseInt(p(0x1e0)) / (-0xd0f * -0x1 + -0x12f9 + 0x17d * 0x4) * (parseInt(q(0x1e3)) / (-0x905 + -0x21e0 + 0x2af0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x36c8b * -0x1 + 0x3a194 + -0x19fe9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1531 + -0x2588 * 0x1 + 0x3c66);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1c1) + s(0x1af)] || function (c) {
    const t = r;
    return c && c[t(0x1b4)] ? c : { 'default': c };
};
const k = {};
k[r(0x1c2)] = !![], Object[s(0x1d3) + s(0x1b1)](exports, s(0x1b4), k), exports[s(0x1de) + s(0x1bb)] = void (0x17ee + 0xb * 0x1ef + -0x2d33);
function a() {
    const y = [
        'InstaBotMe',
        '16ZUaoqG',
        '18104fLqQCo',
        'OPENING',
        'ession',
        'DISCONNECT',
        'status',
        '../../libs',
        'getIO',
        'tener',
        '/socket',
        '8988REIVwp',
        'defineProp',
        'logger',
        '426JReXJN',
        '\x20|\x20Error:\x20',
        'default',
        'iciada\x20|\x20E',
        'ERROR_CONN',
        'tenantId',
        'mpresa:\x20',
        'info',
        'ssageListe',
        'StartInsta',
        'ner',
        '8630amoBzy',
        'RVAL',
        'update',
        '3454dTvoIm',
        './InstaBot',
        'stagram\x20in',
        '../../erro',
        '../../util',
        'env',
        'RAM:\x20',
        'rs/AppErro',
        'ECT_INSTAG',
        'wFMyB',
        'mSendMessa',
        'Conexão\x20In',
        'vMkPG',
        '/InstaBot',
        ':whatsappS',
        '497lXqHrQ',
        '2714214RDDMhu',
        'fault',
        'CHECK_INTE',
        'erty',
        'WQiUL',
        'initInstaB',
        '__esModule',
        'emit',
        'CONNECTED',
        'gesSystem',
        's/logger',
        'error',
        'ERROR:\x20che',
        'BotSession',
        'ckMessages',
        './Instagra',
        'AYyWR',
        '338425KzmDxb',
        '\x20Tenant:\x20',
        '__importDe',
        'value',
        '294136HciGXC',
        'LBjKl',
        '2730024HxxDEG',
        'MessageLis'
    ];
    a = function () {
        return y;
    };
    return a();
}
const AppError_1 = __importDefault(require(r(0x1e6) + r(0x1ea) + 'r')), InstaBot_1 = require(r(0x1ce) + s(0x1f0)), socket_1 = require(s(0x1ce) + s(0x1d1)), logger_1 = require(r(0x1e7) + s(0x1b8)), InstaBotMessageListener_1 = require(s(0x1e4) + r(0x1c6) + s(0x1d0)), InstagramSendMessagesSystem_1 = __importDefault(require(s(0x1bd) + r(0x1ed) + r(0x1b7))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = s, v = s;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (0x12f1 + 0x40 * 0x37 + -0x20b1, InstagramSendMessagesSystem_1[u(0x1d7)])(c, d);
        } catch (e) {
            logger_1[v(0x1d4)][u(0x1b9)](u(0x1ba) + v(0x1bc) + u(0x1c0) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = s, x = r, g = {
                'vMkPG': w(0x1ca),
                'LBjKl': x(0x1e2),
                'WQiUL': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'wFMyB': w(0x1b6),
                'AYyWR': w(0x1cc) + 'ED'
            }, h = (-0x1d46 + 0xe * 0x6f + 0x1734, socket_1[x(0x1cf)])(), i = {};
        i[x(0x1cd)] = g[w(0x1ef)], await f[w(0x1e2)](i), h[w(0x1b5)](f[w(0x1da)] + (x(0x1f1) + x(0x1cb)), {
            'action': g[w(0x1c4)],
            'session': f
        });
        try {
            const j = await (0x9 * 0x137 + -0x46b * -0x4 + -0x1c9b, InstaBot_1[x(0x1b3) + 'ot'])(f);
            (0x4d2 * 0x8 + 0xd50 + -0x33e0, InstaBotMessageListener_1[w(0x1c7) + w(0x1dd) + w(0x1df)])(j), g[w(0x1b2)](setInterval, checkMessages, +(process[w(0x1e8)][x(0x1b0) + x(0x1e1)] || -0x404 + -0x1 * -0x557 + -0x4f * -0x3b), j, f[x(0x1da)]), logger_1[x(0x1d4)][x(0x1dc)](x(0x1ee) + x(0x1e5) + w(0x1d8) + w(0x1db) + f[x(0x1da)]);
            const l = {};
            l[x(0x1cd)] = g[x(0x1ec)], await f[w(0x1e2)](l), h[x(0x1b5)](f[x(0x1da)] + (w(0x1f1) + w(0x1cb)), {
                'action': g[w(0x1c4)],
                'session': f
            });
        } catch (m) {
            logger_1[x(0x1d4)][x(0x1b9)](x(0x1de) + x(0x1bb) + x(0x1d6) + m);
            const n = {};
            n[x(0x1cd)] = g[w(0x1be)], await f[w(0x1e2)](n), h[x(0x1b5)](f[w(0x1da)] + (x(0x1f1) + w(0x1cb)), {
                'action': g[x(0x1c4)],
                'session': f
            });
            throw new AppError_1[(x(0x1d7))](w(0x1d9) + x(0x1eb) + w(0x1e9) + m, 0x9eb + 0x11e8 + 0x1 * -0x1a3f);
        }
    };
exports[s(0x1de) + r(0x1bb)] = StartInstaBotSession;