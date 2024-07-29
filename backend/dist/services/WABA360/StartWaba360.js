'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x152)) / (-0x1ae9 + -0x57 * -0x2b + 0xc4d) + parseInt(q(0x185)) / (0x2026 + -0xdb4 * -0x2 + -0x3b8c) * (-parseInt(q(0x172)) / (-0x230c + 0x3 * 0xbf1 + -0x31 * 0x4)) + -parseInt(q(0x163)) / (0x32d + 0xa * -0x1f7 + -0x3f * -0x43) + parseInt(q(0x147)) / (0x2298 + 0x8 * 0x455 + -0x453b) * (parseInt(r(0x14d)) / (0x24cb * 0x1 + 0x1da7 + -0x2 * 0x2136)) + parseInt(q(0x157)) / (-0xa16 * 0x1 + -0x1862 + -0x227f * -0x1) + -parseInt(r(0x14c)) / (0xa * -0xf + -0xb87 * 0x1 + 0x1 * 0xc25) * (parseInt(q(0x155)) / (-0x1 * -0x1ae7 + 0x3 * 0x1b5 + -0x1af * 0x13)) + -parseInt(r(0x184)) / (-0x1 * 0x313 + -0x3b * -0x1 + 0x2e2) * (-parseInt(r(0x15f)) / (0x5f6 + 0x89d * 0x1 + -0x8 * 0x1d1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4572f + -0x419a * 0x5 + 0x829ad));
function a() {
    const z = [
        'status',
        '1262088RMkPoh',
        'endMessage',
        'ERROR_CONN',
        '../../erro',
        'number',
        'ession',
        'Conexão\x20Wa',
        './Waba360S',
        '/socket',
        'vxopv',
        'EYVfb',
        'logger',
        'StartWaba3',
        'ckMessages',
        'Error:\x20',
        '33453JKBpxk',
        'apiKey',
        'update',
        'Hook',
        'CONNECTED',
        'ba\x20360\x20ini',
        ':whatsappS',
        '../../util',
        'erty',
        'rs/AppErro',
        'OPENING',
        'UrlWabaWeb',
        './SetWebHo',
        'sSystem',
        'SetWebHook',
        'url',
        'ERROR:\x20che',
        'ciada\x20|\x20Em',
        '10ffnmrt',
        '28uJKEMQ',
        'gHOVV',
        '\x20Tenant:\x20',
        '__esModule',
        'yIofM',
        'CHECK_INTE',
        '__importDe',
        'tokenAPI',
        '870CHVGOJ',
        'Url\x20360\x20|\x20',
        'DISCONNECT',
        'default',
        'presa:\x20',
        '8IJCvRJ',
        '7938udkwBa',
        'okUrl',
        'value',
        '../../libs',
        'getIO',
        '201107SUSVTB',
        's/logger',
        'defineProp',
        '2077119FuFXcI',
        'RVAL',
        '1396731MiztVL',
        'SdAlj',
        'emit',
        'fault',
        '60:\x20',
        'info',
        'env',
        'error',
        '2619199ReiVNH',
        'tenantId',
        'ECT_WABA_3'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[s(0x145) + s(0x15a)] || function (c) {
    const u = s;
    return c && c[u(0x188)] ? c : { 'default': c };
};
const k = {};
k[t(0x14f)] = !![], Object[t(0x154) + s(0x17a)](exports, t(0x188), k), exports[s(0x16f) + '60'] = void (-0x1d9 * 0x5 + 0x1af * -0x14 + 0x41 * 0xa9);
const AppError_1 = __importDefault(require(s(0x166) + s(0x17b) + 'r')), socket_1 = require(s(0x150) + t(0x16b)), logger_1 = require(t(0x179) + s(0x153)), SetWebHookUrl_1 = __importDefault(require(t(0x17e) + s(0x14e))), Waba360SendMessagesSystem_1 = __importDefault(require(t(0x16a) + s(0x164) + s(0x17f))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = t, w = t;
        if (checkingWaba360[c[v(0x160)]])
            return;
        checkingWaba360[c[v(0x160)]] = !![];
        try {
            await (-0x1d8a + 0x1693 + 0x6f7, Waba360SendMessagesSystem_1[v(0x14a)])(c);
        } catch (d) {
            logger_1[w(0x16e)][v(0x15e)](w(0x182) + w(0x170) + w(0x187) + c[w(0x160)] + '::', d);
        }
        checkingWaba360[c[v(0x160)]] = ![];
    }, StartWaba360 = async g => {
        const x = s, y = t, h = {
                'vxopv': x(0x17c),
                'yIofM': y(0x174),
                'gHOVV': y(0x176),
                'SdAlj': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'EYVfb': x(0x149) + 'ED'
            }, i = (-0x25 * -0x1 + 0x15b8 + -0x1d * 0xc1, socket_1[y(0x151)])(), j = {};
        j[y(0x162)] = h[y(0x16c)], await g[y(0x174)](j), i[x(0x159)](g[y(0x160)] + (x(0x178) + y(0x168)), {
            'action': h[y(0x189)],
            'session': g
        });
        try {
            const l = {};
            l[x(0x181)] = g[y(0x17d) + x(0x175)] || '', l[x(0x173)] = g[x(0x146)], await (0x1173 * 0x1 + -0x24bf + 0x13 * 0x104, SetWebHookUrl_1[y(0x14a)])(l);
            const m = '';
            logger_1[y(0x16e)][x(0x15c)](x(0x169) + y(0x177) + x(0x183) + x(0x14b) + g[x(0x160)]);
            const n = {};
            n[x(0x162)] = h[x(0x186)], n[x(0x167)] = m, await g[x(0x174)](n), h[x(0x158)](setInterval, checkMessagesWaba360, +(process[x(0x15d)][x(0x144) + y(0x156)] || 0x1193 + -0x1 * 0x2441 + 0x92 * 0x43), g), i[y(0x159)](g[x(0x160)] + (x(0x178) + x(0x168)), {
                'action': h[y(0x189)],
                'session': g
            });
        } catch (o) {
            logger_1[y(0x16e)][y(0x15e)](x(0x180) + y(0x148) + x(0x171) + o);
            const p = {};
            p[x(0x162)] = h[x(0x16d)], await g[x(0x174)](p), i[y(0x159)](g[y(0x160)] + (y(0x178) + x(0x168)), {
                'action': h[y(0x189)],
                'session': g
            });
            throw new AppError_1[(y(0x14a))](y(0x165) + y(0x161) + x(0x15b) + o, 0x55 * 0x61 + -0xfe7 + -0xeba);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1bb * 0x2 + 0x27 * -0xff + 0x2b93);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x16f) + '60'] = StartWaba360;