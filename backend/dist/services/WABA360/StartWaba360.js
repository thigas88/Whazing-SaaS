'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1bf)) / (-0x1 * 0xec3 + -0x1 * -0x1f2b + -0xf7 * 0x11) + -parseInt(r(0x1d4)) / (-0x2d8 + -0x41b + 0xd * 0x89) * (parseInt(r(0x1d3)) / (-0x17 * 0xbb + 0x7 * -0x337 + 0x3d * 0xa5)) + -parseInt(q(0x1de)) / (-0x4f1 + 0x1 * 0x2280 + -0x1d8b) + parseInt(q(0x1e8)) / (-0x6d + 0x19c1 + 0x1 * -0x194f) * (-parseInt(q(0x1d5)) / (0x574 + -0xb * -0x336 + -0x28c0)) + -parseInt(q(0x1cf)) / (-0x137 * 0xb + -0x19a6 + -0x2 * -0x1385) + parseInt(r(0x1c9)) / (-0x76 * 0x43 + -0x45d * 0x1 + 0x2347) + -parseInt(r(0x1bc)) / (-0x2668 + -0xa9b + 0x310c) * (-parseInt(q(0x1e6)) / (-0xa2b + 0x1109 * -0x1 + 0x13d * 0x16));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x671ef + 0x1114a0 + -0x833 * 0x19b));
function a() {
    const z = [
        'sSystem',
        'ciada\x20|\x20Em',
        'default',
        'info',
        '60:\x20',
        'rs/AppErro',
        'dUYeq',
        'eOxzP',
        'status',
        'SetWebHook',
        '__esModule',
        'logger',
        'endMessage',
        'ERROR_CONN',
        '../../erro',
        '2817JrvxNV',
        'ba\x20360\x20ini',
        'Error:\x20',
        '236997paZWdo',
        'okUrl',
        'DISCONNECT',
        'env',
        'tokenAPI',
        'url',
        'value',
        'RVAL',
        'Url\x20360\x20|\x20',
        'ckMessages',
        '2493704TlIRMX',
        'error',
        'ERROR:\x20che',
        '\x20Tenant:\x20',
        'ession',
        ':whatsappS',
        '5648020OnSfyT',
        '__importDe',
        'emit',
        'Hook',
        '33zAfMKb',
        '64982XfCnpP',
        '6zAqmvD',
        'BSTMt',
        'CHECK_INTE',
        'Conexão\x20Wa',
        'defineProp',
        './SetWebHo',
        'presa:\x20',
        'getIO',
        'apiKey',
        '5063032NgWLwJ',
        'oPFCX',
        'tenantId',
        'UrlWabaWeb',
        'StartWaba3',
        '../../libs',
        '/socket',
        'CONNECTED',
        '137380qqXutI',
        'erty',
        '6328025ideOcA',
        '../../util',
        'fault',
        'OPENING',
        'HFewY',
        'ECT_WABA_3',
        'number',
        'update',
        's/logger',
        './Waba360S'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[s(0x1d0) + t(0x1ea)] || function (c) {
    const u = t;
    return c && c[u(0x1fc)] ? c : { 'default': c };
};
const k = {};
k[s(0x1c5)] = !![], Object[s(0x1d9) + t(0x1e7)](exports, t(0x1fc), k), exports[s(0x1e2) + '60'] = void (0x200d + 0x1 * 0x653 + -0x2660);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x28 * 0x29 + 0xf1e + -0x6fb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x1bb) + s(0x1f7) + 'r')), socket_1 = require(s(0x1e3) + s(0x1e4)), logger_1 = require(s(0x1e9) + s(0x1f0)), SetWebHookUrl_1 = __importDefault(require(s(0x1da) + s(0x1c0))), Waba360SendMessagesSystem_1 = __importDefault(require(s(0x1f1) + s(0x1fe) + t(0x1f2))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = t, w = s;
        if (checkingWaba360[c[v(0x1e0)]])
            return;
        checkingWaba360[c[w(0x1e0)]] = !![];
        try {
            await (-0x1f9e + -0x21d4 + 0x4172, Waba360SendMessagesSystem_1[w(0x1f4)])(c);
        } catch (d) {
            logger_1[w(0x1fd)][w(0x1ca)](v(0x1cb) + w(0x1c8) + w(0x1cc) + c[v(0x1e0)] + '::', d);
        }
        checkingWaba360[c[w(0x1e0)]] = ![];
    }, StartWaba360 = async g => {
        const x = s, y = t, h = {
                'BSTMt': x(0x1eb),
                'oPFCX': x(0x1ef),
                'dUYeq': y(0x1e5),
                'HFewY': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'eOxzP': x(0x1c1) + 'ED'
            }, i = (0x2 * 0xeed + 0x5c * 0x3 + -0x1eee, socket_1[y(0x1dc)])(), j = {};
        j[x(0x1fa)] = h[y(0x1d6)], await g[y(0x1ef)](j), i[y(0x1d1)](g[y(0x1e0)] + (x(0x1ce) + y(0x1cd)), {
            'action': h[y(0x1df)],
            'session': g
        });
        try {
            const l = {};
            l[x(0x1c4)] = g[x(0x1e1) + y(0x1d2)] || '', l[y(0x1dd)] = g[y(0x1c3)], await (0x1456 + -0xa7 * -0x38 + -0x38de, SetWebHookUrl_1[y(0x1f4)])(l);
            const m = '';
            logger_1[x(0x1fd)][x(0x1f5)](y(0x1d8) + x(0x1bd) + x(0x1f3) + y(0x1db) + g[x(0x1e0)]);
            const n = {};
            n[x(0x1fa)] = h[y(0x1f8)], n[x(0x1ee)] = m, await g[y(0x1ef)](n), h[x(0x1ec)](setInterval, checkMessagesWaba360, +(process[y(0x1c2)][y(0x1d7) + y(0x1c6)] || 0x1342 + 0x109c + -0x1056), g), i[y(0x1d1)](g[x(0x1e0)] + (y(0x1ce) + x(0x1cd)), {
                'action': h[x(0x1df)],
                'session': g
            });
        } catch (o) {
            logger_1[x(0x1fd)][x(0x1ca)](y(0x1fb) + x(0x1c7) + y(0x1be) + o);
            const p = {};
            p[y(0x1fa)] = h[y(0x1f9)], await g[x(0x1ef)](p), i[x(0x1d1)](g[x(0x1e0)] + (x(0x1ce) + x(0x1cd)), {
                'action': h[y(0x1df)],
                'session': g
            });
            throw new AppError_1[(x(0x1f4))](x(0x1ff) + x(0x1ed) + y(0x1f6) + o, -0x1 * 0x2611 + 0x1b78 + 0x1 * 0xc2d);
        }
    };
exports[t(0x1e2) + '60'] = StartWaba360;