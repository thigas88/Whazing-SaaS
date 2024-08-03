'use strict';
const s = b, t = b;
function a() {
    const z = [
        'logger',
        'UrlWabaWeb',
        'CONNECTED',
        'number',
        'value',
        '8ZCEuQt',
        'default',
        'tenantId',
        'Conexão\x20Wa',
        'Hook',
        'erty',
        '../../erro',
        'url',
        '60:\x20',
        'DISCONNECT',
        'apiKey',
        'tokenAPI',
        'emit',
        '357146UGWPpH',
        '__importDe',
        ':whatsappS',
        'ECT_WABA_3',
        'CmcQO',
        '/socket',
        'Url\x20360\x20|\x20',
        '\x20Tenant:\x20',
        'ckMessages',
        'okUrl',
        'fault',
        './Waba360S',
        '1978008UGQOqI',
        'getIO',
        'error',
        '10timtRe',
        'RVAL',
        'ERROR:\x20che',
        '2517640FBLtfg',
        'nTrBe',
        '3665900fXoVHs',
        'Exhde',
        'SetWebHook',
        'ciada\x20|\x20Em',
        'update',
        '6768751KzxYLc',
        's/logger',
        'ba\x20360\x20ini',
        '../../util',
        'ession',
        'info',
        'OPENING',
        'presa:\x20',
        'defineProp',
        'HdLBv',
        'endMessage',
        '3464WUQdjy',
        'status',
        'rs/AppErro',
        'Error:\x20',
        'env',
        'sSystem',
        '__esModule',
        '4377bozuxT',
        'INCGF',
        '7CocsSE',
        '1497204ziogOt',
        'ERROR_CONN',
        'CHECK_INTE',
        './SetWebHo',
        '../../libs',
        'StartWaba3'
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
            const f = parseInt(q(0x1e2)) / (0x2d8 * 0x6 + -0x15 * -0x159 + -0x2d5c) * (-parseInt(r(0x1ef)) / (-0x1e8a + -0x11e0 + 0x306c)) + parseInt(r(0x21a)) / (0x1 * 0x13 + 0x1d3e + -0x1d4e) * (parseInt(q(0x213)) / (0x2134 + -0x75c + 0x13 * -0x15c)) + parseInt(q(0x203)) / (0x217b * -0x1 + -0x134f + 0x34cf) + parseInt(q(0x1fb)) / (-0x2c1 * 0x6 + -0x1c4f * 0x1 + 0x2cdb) + -parseInt(r(0x21c)) / (-0x1d50 + -0xb68 + -0x487 * -0x9) * (-parseInt(r(0x201)) / (-0x15e8 + 0xb1b * 0x1 + 0xad5)) + -parseInt(r(0x21d)) / (0x1c26 + -0xfda + -0xc43) * (-parseInt(r(0x1fe)) / (-0x24e0 + 0x1b9d + 0x94d)) + -parseInt(q(0x208)) / (0xe6b * 0x1 + -0x39c + 0x35 * -0x34);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x7a072 + 0x53 * 0x7cd + 0x7 * 0x37b65));
var __importDefault = this && this[s(0x1f0) + t(0x1f9)] || function (c) {
    const u = t;
    return c && c[u(0x219)] ? c : { 'default': c };
};
const k = {};
k[t(0x1e1)] = !![], Object[s(0x210) + s(0x1e7)](exports, t(0x219), k), exports[s(0x222) + '60'] = void (-0x1d41 * 0x1 + 0x38c * -0x1 + 0x20cd);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * 0x1a5 + 0xb3f * 0x2 + -0x777);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x1e8) + t(0x215) + 'r')), socket_1 = require(t(0x221) + s(0x1f4)), logger_1 = require(s(0x20b) + t(0x209)), SetWebHookUrl_1 = __importDefault(require(t(0x220) + t(0x1f8))), Waba360SendMessagesSystem_1 = __importDefault(require(t(0x1fa) + t(0x212) + t(0x218))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = s, w = s;
        if (checkingWaba360[c[v(0x1e4)]])
            return;
        checkingWaba360[c[v(0x1e4)]] = !![];
        try {
            await (0x1d * -0x10d + -0x2423 + 0x429c, Waba360SendMessagesSystem_1[v(0x1e3)])(c);
        } catch (d) {
            logger_1[w(0x223)][w(0x1fd)](v(0x200) + v(0x1f7) + w(0x1f6) + c[w(0x1e4)] + '::', d);
        }
        checkingWaba360[c[w(0x1e4)]] = ![];
    }, StartWaba360 = async g => {
        const x = t, y = s, h = {
                'CmcQO': x(0x20e),
                'INCGF': y(0x207),
                'HdLBv': y(0x1df),
                'Exhde': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'nTrBe': x(0x1eb) + 'ED'
            }, i = (0xb31 + -0x424 + -0x5 * 0x169, socket_1[y(0x1fc)])(), j = {};
        j[y(0x214)] = h[x(0x1f3)], await g[x(0x207)](j), i[x(0x1ee)](g[y(0x1e4)] + (x(0x1f1) + x(0x20c)), {
            'action': h[x(0x21b)],
            'session': g
        });
        try {
            const l = {};
            l[x(0x1e9)] = g[x(0x224) + x(0x1e6)] || '', l[y(0x1ec)] = g[x(0x1ed)], await (0x1 * -0x7c + 0x1 * 0x117 + -0x9b, SetWebHookUrl_1[x(0x1e3)])(l);
            const m = '';
            logger_1[y(0x223)][x(0x20d)](x(0x1e5) + y(0x20a) + y(0x206) + x(0x20f) + g[x(0x1e4)]);
            const n = {};
            n[x(0x214)] = h[x(0x211)], n[x(0x1e0)] = m, await g[x(0x207)](n), h[y(0x204)](setInterval, checkMessagesWaba360, +(process[x(0x217)][y(0x21f) + x(0x1ff)] || -0x1 * -0x16e6 + -0x2101 + 0x1da3), g), i[x(0x1ee)](g[y(0x1e4)] + (y(0x1f1) + y(0x20c)), {
                'action': h[x(0x21b)],
                'session': g
            });
        } catch (o) {
            logger_1[y(0x223)][y(0x1fd)](x(0x205) + y(0x1f5) + x(0x216) + o);
            const p = {};
            p[y(0x214)] = h[y(0x202)], await g[y(0x207)](p), i[x(0x1ee)](g[y(0x1e4)] + (y(0x1f1) + y(0x20c)), {
                'action': h[y(0x21b)],
                'session': g
            });
            throw new AppError_1[(x(0x1e3))](y(0x21e) + y(0x1f2) + x(0x1ea) + o, -0x2e * 0xd3 + -0xe28 + 0x9 * 0x5f6);
        }
    };
exports[s(0x222) + '60'] = StartWaba360;