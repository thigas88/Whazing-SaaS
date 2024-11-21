'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x225)) / (0x1905 + 0x35 * -0x6d + -0x3 * 0xd1) * (-parseInt(B(0x20b)) / (0x1 * -0x3f7 + -0x1 * 0x1691 + 0x1a8a)) + -parseInt(C(0x21d)) / (-0x1516 * -0x1 + 0x5 * -0x75f + -0xfc8 * -0x1) + -parseInt(C(0x21a)) / (0xf67 * 0x1 + -0x68 * 0x3a + -0x5b * -0x17) * (parseInt(C(0x204)) / (-0x1f04 + -0x10c6 + 0x2fcf)) + parseInt(B(0x20e)) / (0x7 * 0x2f9 + 0x455 * 0x1 + -0x191e) + -parseInt(B(0x208)) / (-0x269d + -0x1 * 0x45a + 0x2afe) + parseInt(B(0x202)) / (0x207f + 0x15a3 + -0x361a) * (-parseInt(B(0x20f)) / (0x33 * 0xb + 0xd43 + -0xf6b)) + parseInt(C(0x211)) / (0x1214 + 0x2d1 + 0x14db * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xe330 + -0x2a273 + 0x4ef93));
var __importDefault = this && this[D(0x205) + D(0x21e)] || function (c) {
    const F = E;
    return c && c[F(0x21c)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x128c + -0x2 * 0x763 + -0x2 * 0xea);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[D(0x226)] = !![], Object[D(0x1fb) + E(0x201)](exports, D(0x21c), k), exports[E(0x229) + D(0x22a)] = void (-0x1fe4 + 0xb21 * -0x3 + 0x1 * 0x4147);
function a() {
    const M = [
        'setChannel',
        'Webhook',
        'warn',
        'logger',
        'number',
        'findOne',
        'then',
        'Client',
        'channel',
        '../models/',
        'Whatsapp\x20w',
        'scription',
        'toString',
        'ith\x20id\x20',
        'createSubs',
        'defineProp',
        './ShowHubT',
        'ok/',
        'env',
        'MessageSub',
        'info',
        'erty',
        '656872BzASFD',
        'tenantId',
        '834605HjpEdg',
        '__importDe',
        'bscription',
        'oken',
        '1447460knlrCN',
        '/hub-webho',
        'url',
        '134ObSOfC',
        'log',
        'Webhook\x20su',
        '102354EJiFdx',
        '36mBjwLc',
        '\x20not\x20found',
        '7831140ERpSSW',
        '\x20error:\x20',
        'notificame',
        'catch',
        'update',
        'MgBXY',
        'CONNECTED',
        'Whatsapp',
        'cription',
        '4KottnK',
        'bscribed\x20',
        '__esModule',
        '47874PTeREo',
        'fault',
        'showHubTok',
        'ogger',
        'default',
        'hubsdk',
        'status',
        'where',
        '1894lvMAgg',
        'value',
        '../utils/l',
        'BACKEND_UR'
    ];
    a = function () {
        return M;
    };
    return a();
}
const notificamehubsdk_1 = require(D(0x213) + D(0x222)), Whatsapp_1 = __importDefault(require(E(0x1f5) + D(0x218))), ShowHubToken_1 = require(D(0x1fc) + E(0x207)), logger_1 = require(E(0x227) + D(0x220)), setChannelWebhook = async l => {
        const G = D, H = D, m = {};
        m[G(0x216)] = G(0x217);
        const n = m, o = {};
        o['id'] = l;
        const p = {};
        p[G(0x224)] = o;
        const q = await Whatsapp_1[H(0x221)][H(0x22e)](p);
        if (!q)
            throw new Error(G(0x1f6) + H(0x1f9) + l + H(0x210));
        const r = await (0x1 * 0x20fd + 0x15df + 0x2 * -0x1b6e, ShowHubToken_1[G(0x21f) + 'en'])(q[H(0x203)][G(0x1f8)]()), s = new notificamehubsdk_1[(H(0x1f3))](r);
        console[G(0x20c)](q[H(0x22d)]);
        const t = process[G(0x1fe)][G(0x228) + 'L'] + (H(0x209) + H(0x1fd)) + q[H(0x22d)];
        console[H(0x20c)](t);
        const u = {};
        u[H(0x20a)] = t;
        const v = {};
        v[G(0x1f4)] = q[H(0x22d)];
        const w = new notificamehubsdk_1[(H(0x1ff)) + (H(0x1f7))](u, v);
        s[H(0x1fa) + H(0x219)](w)[H(0x1f2)](A => {
            const I = H, J = H;
            logger_1[I(0x22c)][J(0x200)](J(0x20d) + I(0x21b) + A);
        })[H(0x214)](A => {
            const K = G, L = H;
            logger_1[K(0x22c)][L(0x22b)](K(0x20d) + K(0x206) + K(0x212) + A);
        });
        const x = {};
        x[H(0x223)] = n[H(0x216)];
        const y = {};
        y['id'] = l;
        const z = {};
        z[G(0x224)] = y, await Whatsapp_1[G(0x221)][H(0x215)](x, z);
    };
exports[D(0x229) + D(0x22a)] = setChannelWebhook;