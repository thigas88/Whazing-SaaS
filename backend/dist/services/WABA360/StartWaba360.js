'use strict';
const s = b, t = b;
function a() {
    const z = [
        '10YlcvSX',
        'ba\x20360\x20ini',
        'OGIQD',
        'CHECK_INTE',
        'UrlWabaWeb',
        'tokenAPI',
        'ckMessages',
        'ession',
        'Conexão\x20Wa',
        '4OdmAZe',
        'getIO',
        '16227zkuUli',
        'url',
        'tenantId',
        'RVAL',
        'update',
        '1006731KaYgxQ',
        '../../util',
        'ECT_WABA_3',
        '60:\x20',
        'apiKey',
        '\x20Tenant:\x20',
        '90IBiTGU',
        'OPENING',
        'defineProp',
        'value',
        '/socket',
        'StartWaba3',
        '1413960JYFXOM',
        'logger',
        ':whatsappS',
        '264159fwGHrC',
        '2390564dAAQnS',
        'fault',
        '308lTQNrP',
        'mNvNC',
        'Error:\x20',
        'Url\x20360\x20|\x20',
        'laxTu',
        'info',
        's/logger',
        'presa:\x20',
        'zOCuw',
        './Waba360S',
        'erty',
        '../../erro',
        'default',
        '../../libs',
        'number',
        'DISCONNECT',
        'ERROR:\x20che',
        'sSystem',
        '4777945hGtasS',
        'endMessage',
        'ERROR_CONN',
        'SetWebHook',
        'okUrl',
        'VgFWK',
        './SetWebHo',
        'CONNECTED',
        'env',
        'emit',
        'status',
        '__importDe',
        'Hook',
        '32392rJTfUH',
        'error',
        '__esModule',
        'rs/AppErro',
        'ciada\x20|\x20Em'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x16d)) / (0x50a * 0x4 + 0x248c + 0x5 * -0xb57) + parseInt(r(0x17f)) / (0x8c5 * -0x1 + 0x1 * 0xe36 + -0x56f) * (-parseInt(q(0x168)) / (-0x1fd + 0x1 * 0xe81 + 0xc81 * -0x1)) + parseInt(q(0x166)) / (-0xef9 * 0x1 + -0x110c + -0x1 * -0x2009) * (parseInt(q(0x14b)) / (0x3db + 0x1203 + -0x15d9)) + -parseInt(q(0x179)) / (0xa9 * 0xd + 0x9db + -0x126a) + -parseInt(r(0x17c)) / (0x67 * 0x53 + -0xb * -0x32e + 0xb64 * -0x6) + parseInt(q(0x158)) / (0xa02 + 0xa * -0x1c9 + 0x7e0) * (-parseInt(q(0x173)) / (-0x97a + -0x1620 + 0x1fa3)) + -parseInt(q(0x15d)) / (0x3d * -0x6 + 0x29 * 0x76 + 0x8b7 * -0x2) * (parseInt(q(0x17d)) / (-0x924 + -0xf79 + -0x107 * -0x18));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe08d4 + -0xb40d3 + 0x32 * 0x207d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x51f * -0x3 + -0x1ef2 + 0x10e0);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x156) + s(0x17e)] || function (c) {
    const u = s;
    return c && c[u(0x15a)] ? c : { 'default': c };
};
const k = {};
k[t(0x176)] = !![], Object[t(0x175) + t(0x189)](exports, t(0x15a), k), exports[s(0x178) + '60'] = void (0x939 + 0x1961 * 0x1 + -0x229a);
const AppError_1 = __importDefault(require(s(0x18a) + t(0x15b) + 'r')), socket_1 = require(t(0x18c) + t(0x177)), logger_1 = require(s(0x16e) + s(0x185)), SetWebHookUrl_1 = __importDefault(require(s(0x151) + t(0x14f))), Waba360SendMessagesSystem_1 = __importDefault(require(t(0x188) + t(0x14c) + t(0x190))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = t, w = s;
        if (checkingWaba360[c[v(0x16a)]])
            return;
        checkingWaba360[c[v(0x16a)]] = !![];
        try {
            await (-0x69a * 0x1 + 0xd43 + -0x37 * 0x1f, Waba360SendMessagesSystem_1[w(0x18b)])(c);
        } catch (d) {
            logger_1[v(0x17a)][v(0x159)](v(0x18f) + w(0x163) + w(0x172) + c[v(0x16a)] + '::', d);
        }
        checkingWaba360[c[v(0x16a)]] = ![];
    }, StartWaba360 = async g => {
        const x = s, y = t, h = {
                'OGIQD': x(0x174),
                'zOCuw': x(0x16c),
                'VgFWK': y(0x152),
                'mNvNC': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'laxTu': x(0x18e) + 'ED'
            }, i = (0x1bd * 0x8 + 0x1646 + -0x242e, socket_1[y(0x167)])(), j = {};
        j[y(0x155)] = h[y(0x15f)], await g[x(0x16c)](j), i[x(0x154)](g[x(0x16a)] + (x(0x17b) + x(0x164)), {
            'action': h[y(0x187)],
            'session': g
        });
        try {
            const l = {};
            l[y(0x169)] = g[x(0x161) + x(0x157)] || '', l[y(0x171)] = g[x(0x162)], await (-0x6e1 * -0x5 + -0x369 + -0x1efc * 0x1, SetWebHookUrl_1[y(0x18b)])(l);
            const m = '';
            logger_1[x(0x17a)][x(0x184)](x(0x165) + x(0x15e) + x(0x15c) + x(0x186) + g[x(0x16a)]);
            const n = {};
            n[y(0x155)] = h[y(0x150)], n[x(0x18d)] = m, await g[x(0x16c)](n), h[x(0x180)](setInterval, checkMessagesWaba360, +(process[x(0x153)][y(0x160) + y(0x16b)] || -0x290 + -0x1cb1 + -0x32c9 * -0x1), g), i[y(0x154)](g[x(0x16a)] + (y(0x17b) + x(0x164)), {
                'action': h[x(0x187)],
                'session': g
            });
        } catch (o) {
            logger_1[x(0x17a)][x(0x159)](x(0x14e) + x(0x182) + y(0x181) + o);
            const p = {};
            p[y(0x155)] = h[x(0x183)], await g[y(0x16c)](p), i[x(0x154)](g[y(0x16a)] + (y(0x17b) + y(0x164)), {
                'action': h[y(0x187)],
                'session': g
            });
            throw new AppError_1[(y(0x18b))](y(0x14d) + x(0x16f) + y(0x170) + o, 0x1816 + -0x75b + -0xf27);
        }
    };
exports[t(0x178) + '60'] = StartWaba360;