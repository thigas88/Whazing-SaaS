'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x8c)) / (0xd6d + -0xbc + -0xcb0) * (parseInt(z(0xb1)) / (-0x11a5 + -0x1af5 * -0x1 + 0x1 * -0x94e)) + parseInt(A(0xb9)) / (-0xa96 + 0x23cb + -0x1932) + -parseInt(A(0xa9)) / (-0x41a + 0x81 * 0xf + -0x371) + parseInt(z(0xd4)) / (0xe53 * -0x2 + -0x1 * 0x1b65 + -0x3 * -0x12b0) + parseInt(A(0x88)) / (-0xb65 + -0x199d + 0x2508) * (parseInt(z(0x98)) / (0x696 + -0x1129 + -0x54d * -0x2)) + -parseInt(A(0xdf)) / (-0x39 * -0x25 + -0x2 * 0x2aa + -0x2e1) + parseInt(A(0xdd)) / (-0x209e + -0x1e8d + -0x652 * -0xa) * (parseInt(z(0xda)) / (0xd3b * -0x1 + -0x1b20 + 0x2865));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x45fb6 + 0x35131 + -0x1 * -0xb0b0f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7a6 + -0x1ea5 + 0x58a * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0x80) + B(0xcf)] || function (c) {
    const D = B;
    return c && c[D(0xa2)] ? c : { 'default': c };
};
const k = {};
k[B(0x90)] = !![], Object[C(0x87) + B(0x7e)](exports, B(0xa2), k);
const ShowWhatsAppService_1 = __importDefault(require(B(0x7f) + C(0xb8) + B(0xc0) + C(0xc9) + B(0x8d))), StartWhatsAppSession_1 = require(C(0x7f) + B(0x91) + B(0xdc) + C(0xb7) + B(0xbb)), UpdateWhatsAppService_1 = __importDefault(require(B(0x7f) + C(0xb8) + B(0xdb) + C(0xd5) + C(0xc3))), redisClient_1 = require(B(0xcb) + B(0x92)), logger_1 = require(C(0xc2) + B(0xc1)), tbot_1 = require(B(0xce) + 'ot'), InstaBot_1 = require(B(0xac) + C(0xbe)), AppError_1 = __importDefault(require(C(0xcd) + B(0x99))), socket_1 = require(C(0xd8) + B(0xde)), wbot_baileys_1 = require(C(0x7c) + B(0x7b)), store = async (f, g) => {
        const E = C, F = C, h = {};
        h[E(0xbf)] = F(0x9e) + E(0x8f);
        const i = h, {whatsappId: j} = f[E(0xa3)], {tenantId: m} = f[E(0xca)], n = {};
        n['id'] = j, n[E(0x89)] = m, n[F(0xae)] = !![];
        const o = await (-0x1 * 0x3a3 + -0x2026 + 0x23c9, ShowWhatsAppService_1[E(0xcc)])(n);
        (0x4be * -0x1 + 0x8a1 * -0x3 + 0x1ea1, StartWhatsAppSession_1[F(0x8e) + F(0x8a)])(o);
        const p = {};
        return p[E(0x95)] = i[F(0xbf)], g[F(0x97)](-0x1e1d + 0xbe7 * 0x1 + 0x12fe)[E(0x81)](p);
    }, update = async (g, h) => {
        const G = B, H = B, i = {};
        i[G(0x9b)] = H(0x9e) + G(0x8f);
        const j = i, {whatsappId: m} = g[H(0xa3)], {tenantId: n} = g[G(0xca)], o = {};
        o[G(0xb6)] = '';
        const p = {};
        p[G(0x94)] = m, p[H(0xa1) + 'ta'] = o, p[G(0x89)] = n;
        const {whatsapp: q} = await (0x5 * 0x57f + 0x937 + -0x24b2, UpdateWhatsAppService_1[H(0xcc)])(p);
        (0xc55 + -0x5f7 * 0x5 + 0x8bf * 0x2, StartWhatsAppSession_1[H(0x8e) + H(0x8a)])(q);
        const r = {};
        return r[H(0x95)] = j[H(0x9b)], h[H(0x97)](0x4af * -0x1 + 0x5e4 * 0x5 + -0x17fd)[H(0x81)](r);
    }, remove = async (h, i) => {
        const I = C, J = B, j = {};
        j[I(0xb2)] = function (t, u) {
            return t === u;
        }, j[I(0xc7)] = J(0x93), j[I(0xad)] = J(0xaf), j[J(0xd7)] = J(0xd2), j[J(0x96)] = J(0xb4) + 'ED', j[I(0x84)] = I(0x9c), j[J(0xa6)] = I(0x83) + J(0xba), j[I(0xb0)] = J(0xa0) + J(0xe1) + '.';
        const m = j, {whatsappId: n} = h[I(0xa3)], {tenantId: o} = h[I(0xca)], p = {};
        p['id'] = n, p[I(0x89)] = o;
        const q = await (0x1515 + 0x415 + -0x1 * 0x192a, ShowWhatsAppService_1[I(0xcc)])(p), r = (-0x1 * 0x17b9 + 0x21f1 + -0x28e * 0x4, socket_1[I(0x9f)])();
        try {
            if (m[J(0xb2)](q[I(0xbc)], m[J(0xc7)])) {
                const u = (-0x11a8 + 0x3 * 0x295 + -0x1 * -0x9e9, wbot_baileys_1[J(0xd9)])(q['id']);
                await (0x5 * -0x463 + -0x1bff * 0x1 + 0x31ee, redisClient_1[I(0xd1)])(q['id'] + (I(0xbd) + 'de'), -0xa2b + -0x1b0 + -0xbdb * -0x1), await u[J(0xb3)](), u['ws'][J(0xaa)](), (0x987 * 0x1 + 0x1993 + -0x231a, wbot_baileys_1[J(0xa8)])(q['id']);
            }
            if (m[I(0xb2)](q[J(0xbc)], m[I(0xad)])) {
                const v = (0x509 + 0x45d * 0x3 + -0x1220, tbot_1[J(0x85)])(q['id']);
                await v[J(0xaf)][J(0xab)]()[I(0x7d)](w => logger_1[I(0x9d)][J(0xb5)](I(0xc5) + J(0xc6) + I(0xd6) + 'o', w)), (-0x2ed * 0x3 + 0x1193 * 0x1 + -0x8cc, tbot_1[I(0x86)])(q['id']);
            }
            if (m[J(0xb2)](q[J(0xbc)], m[J(0xd7)])) {
                const w = (0x907 * -0x4 + 0x1073 * 0x1 + -0x2cf * -0x7, InstaBot_1[J(0xd3) + 't'])(q['id']);
                await w[I(0x9a)](), (0x12b6 + -0xfee + -0x2c8, InstaBot_1[I(0x82) + I(0x8b)])(q);
            }
            const t = {};
            t[I(0x97)] = m[J(0x96)], t[J(0xb6)] = '', t[I(0xa7)] = null, t[J(0xe0)] = 0x0, await q[I(0x9c)](t);
        } catch (x) {
            logger_1[I(0x9d)][I(0xb5)](x);
            const y = {};
            y[J(0x97)] = m[I(0x96)], y[J(0xb6)] = '', y[I(0xa7)] = null, y[I(0xe0)] = 0x0, await q[I(0x9c)](y), r[J(0xc8)](q[J(0x89)] + (J(0xa5) + J(0xc4)), {
                'action': m[I(0x84)],
                'session': q
            });
            throw new AppError_1[(J(0xcc))](m[J(0xa6)], 0xf69 + -0x9 * -0x279 + -0x2416);
        }
        const s = {};
        return s[I(0x95)] = m[J(0xb0)], i[I(0x97)](-0x144 * -0x3 + -0xc64 + 0x30 * 0x32)[J(0x81)](s);
    }, l = {};
function a() {
    const K = [
        '3qGvxef',
        'Service',
        'StartWhats',
        'ession.',
        'value',
        's/WbotServ',
        'disClient',
        'whatsapp',
        'whatsappId',
        'message',
        'VTtwv',
        'status',
        '45787pewuhG',
        'AppError',
        'destroy',
        'JJLac',
        'update',
        'logger',
        'Starting\x20s',
        'getIO',
        'Session\x20di',
        'whatsappDa',
        '__esModule',
        'params',
        'store',
        ':whatsappS',
        'xaclC',
        'qrcode',
        'removeWbot',
        '2978228yMEUPK',
        'close',
        'logOut',
        '../libs/In',
        'gINyL',
        'isInternal',
        'telegram',
        'QBDqX',
        '581286nlGXLG',
        'udtTP',
        'logout',
        'DISCONNECT',
        'error',
        'session',
        'WhatsAppSe',
        's/Whatsapp',
        '1503303onVDMB',
        'P_FOUND',
        'ssion',
        'type',
        '-retryQrCo',
        'staBot',
        'NGfTk',
        'Service/Sh',
        'ogger',
        '../utils/l',
        'ppService',
        'ession',
        'Erro\x20ao\x20fa',
        'zer\x20logout',
        'XnwqN',
        'emit',
        'owWhatsApp',
        'user',
        '../libs/re',
        'default',
        '../errors/',
        '../libs/tb',
        'fault',
        'remove',
        'setValue',
        'instagram',
        'getInstaBo',
        '1300860RHGPTg',
        'dateWhatsA',
        '\x20da\x20conexã',
        'jjnWn',
        '../libs/so',
        'getWbot',
        '20gABOoX',
        'Service/Up',
        'ices/Start',
        '7408629UMTHUo',
        'cket',
        '4913344nPpdVa',
        'retries',
        'sconnected',
        'ot-baileys',
        '../libs/wb',
        'catch',
        'erty',
        '../service',
        '__importDe',
        'json',
        'removeInst',
        'ERR_NO_WAP',
        'fmHtw',
        'getTbot',
        'removeTbot',
        'defineProp',
        '438mHbXbb',
        'tenantId',
        'AppSession',
        'aBot'
    ];
    a = function () {
        return K;
    };
    return a();
}
l[B(0xa4)] = store, l[C(0xd0)] = remove, l[C(0x9c)] = update, exports[B(0xcc)] = l;