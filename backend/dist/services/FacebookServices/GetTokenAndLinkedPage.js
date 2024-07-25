'use strict';
function a() {
    const N = [
        '1762539ibOfPC',
        'lient_id=',
        'long_lived',
        '1072iDZRLK',
        '&client_se',
        'DqVfd',
        '/socket',
        'ge_token&c',
        'xkmwp',
        'v16.0',
        'ession',
        'rs/AppErro',
        'action',
        'accountId',
        'ls/Whatsap',
        'ess_token?',
        'logger',
        'fbPageId',
        'update',
        'defineProp',
        'tLinkedPag',
        'env',
        '1186362MwlKto',
        'method',
        'so\x20e\x20selec',
        'emit',
        'session',
        './SetLogou',
        'grant_type',
        'PP_SECRET_',
        'ione\x20apena',
        'ken',
        'a\x20o\x20proces',
        '36rMNCTP',
        'erty',
        'url',
        '../../util',
        'status',
        'GET',
        'axios',
        'limit=25&a',
        ':whatsappS',
        '&fb_exchan',
        'cret=',
        '/accounts?',
        'https://gr',
        '../../erro',
        's\x201\x20página',
        'value',
        '1090HrJNZz',
        '669160MkKPEK',
        'fault',
        'tenantId',
        'default',
        'get',
        'bnmAT',
        'ccess_toke',
        '2zvCUJr',
        'whatsapp',
        '_access_to',
        'access_tok',
        'qFMzF',
        'enas\x201\x20pág',
        '__esModule',
        's/logger',
        '18474467dgYnaA',
        'aph.facebo',
        'tokenAPI',
        'where',
        'KIthl',
        'PP_ID',
        'getIO',
        '../../mode',
        '14UCkRJY',
        'error',
        '2580208OPkpbH',
        'omNnn',
        'UHxPG',
        'ok.com/',
        'ge_token=',
        'xwCOv',
        'KEY',
        'length',
        '476711mISlIQ',
        'fbObject',
        '../../libs',
        'ina.\x20Refaç',
        'Escolha\x20ap',
        '/oauth/acc',
        'en=',
        'FACEBOOK_A',
        'MlkyZ',
        '=fb_exchan',
        'CONNECTED',
        '__importDe'
    ];
    a = function () {
        return N;
    };
    return a();
}
const C = b, D = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 * 0x499 + -0x8b6 * 0x2 + -0x3327 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1ba)) / (-0x235d + 0x2083 + 0x2b * 0x11) * (parseInt(B(0x1a0)) / (-0x1764 + -0x8eb * 0x3 + 0x15b * 0x25)) + -parseInt(A(0x1c6)) / (-0x5 * 0x2e9 + -0x1c64 + 0xabd * 0x4) + parseInt(A(0x1c9)) / (-0x2664 + -0x2 * 0x11fb + -0x18ca * -0x3) * (parseInt(A(0x198)) / (-0x1a95 + 0x3 * 0x82f + 0x20d)) + parseInt(A(0x1dc)) / (0x1 * -0x9d5 + 0x78 * -0x4d + -0xf51 * -0x3) * (-parseInt(A(0x1b0)) / (0x1b08 + -0x4 * -0x6a + 0x29b * -0xb)) + parseInt(B(0x1b2)) / (-0x2 * -0x419 + 0xacb * -0x3 + 0x1837) + parseInt(A(0x1e7)) / (-0x77 * 0x20 + 0x2280 + 0x11 * -0x127) * (-parseInt(B(0x199)) / (-0x2573 + 0x53 * -0x1d + 0x4 * 0xbb9)) + parseInt(A(0x1a8)) / (0x18 * 0xce + 0x1 * -0x1835 + -0x4f0 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x7ffd3 + 0x5d * 0x1919 + 0x1 * 0x3f6ef));
var __importDefault = this && this[C(0x1c5) + D(0x19a)] || function (c) {
    const E = C;
    return c && c[E(0x1a6)] ? c : { 'default': c };
};
const k = {};
k[C(0x197)] = !![], Object[D(0x1d9) + D(0x1e8)](exports, C(0x1a6), k);
const axios_1 = __importDefault(require(C(0x18e))), AppError_1 = __importDefault(require(D(0x195) + D(0x1d1) + 'r')), Whatsapp_1 = __importDefault(require(C(0x1af) + D(0x1d4) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(D(0x1e1) + D(0x1da) + 'e')), socket_1 = require(C(0x1bc) + D(0x1cc)), logger_1 = require(C(0x1ea) + D(0x1a7)), api_version = C(0x1cf), baseUrl = C(0x194) + D(0x1a9) + C(0x1b5) + api_version, app_id = process[C(0x1db)][D(0x1c1) + D(0x1ad)], app_secret = process[D(0x1db)][C(0x1c1) + C(0x1e3) + C(0x1b8)], getLongLivedAccessToken = async c => {
        const F = D, G = C, {data: d} = await axios_1[F(0x19c)][F(0x19d)](baseUrl + (G(0x1bf) + G(0x1d5) + G(0x1e2) + G(0x1c3) + G(0x1cd) + F(0x1c7)) + app_id + (G(0x1ca) + G(0x192)) + app_secret + (F(0x191) + G(0x1b6)) + c);
        return d[F(0x1a3) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = D, I = D, {
                data: {data: e}
            } = await axios_1[H(0x19c)][H(0x19d)](baseUrl + '/' + d + (I(0x193) + I(0x1a3) + I(0x1c0)) + c);
        return e[H(0x1b9)] && e[-0x2102 + 0x2519 + 0x3 * -0x15d];
    }, getPageInfo = async (e, f) => {
        const J = C, K = C, g = {};
        g[J(0x1b4)] = K(0x18d);
        const h = g, i = baseUrl + '/' + e + (J(0x193) + K(0x18f) + K(0x19f) + 'n=') + f, j = {};
        j[J(0x1dd)] = h[K(0x1b4)], j[K(0x1e9)] = i;
        const {
            data: {data: l}
        } = await (0xb53 + 0x1 * -0x140 + 0x1 * -0xa13, axios_1[K(0x19c)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = C, M = C, n = {
                'KIthl': function (o, p, q) {
                    return o(p, q);
                },
                'MlkyZ': function (o, p) {
                    return o > p;
                },
                'DqVfd': L(0x1be) + L(0x1a5) + M(0x1bd) + L(0x1e6) + L(0x1de) + L(0x1e4) + M(0x196) + '.',
                'qFMzF': function (o, p) {
                    return o === p;
                },
                'xwCOv': function (o, p) {
                    return o(p);
                },
                'omNnn': function (o, p, q) {
                    return o(p, q);
                },
                'bnmAT': M(0x1c4),
                'xkmwp': L(0x1d8)
            };
        try {
            const o = (-0x1838 + 0xf3f + 0x8f9, socket_1[M(0x1ae)])(), p = await n[L(0x1ac)](getPageInfo, j, l);
            if (n[L(0x1c2)](p[M(0x1b9)], -0x4 * 0x40b + 0xf37 + 0xf6))
                throw new AppError_1[(M(0x19c))](n[M(0x1cb)], 0x1585 * -0x1 + 0x10a4 + 0x671);
            if (n[M(0x1a4)](p[M(0x1b9)], -0x3cd * 0x3 + 0x7ea * -0x1 + 0x1351)) {
                const y = {};
                y[M(0x1a1)] = i, y[M(0x19b)] = m, await (-0x1c26 + 0x113e * -0x2 + -0x3ea2 * -0x1, SetLogoutLinkedPage_1[L(0x19c)])(y);
                return;
            }
            const q = await n[L(0x1b7)](getLongLivedAccessToken, l), r = await n[M(0x1b3)](getPermanentPageAccessToken, q, j), s = {};
            s[L(0x18c)] = n[L(0x19e)], s[L(0x1d7)] = r['id'], s[M(0x1bb)] = { ...r }, s[M(0x1aa)] = r[M(0x1a3) + 'en'], s[M(0x1bb)][M(0x1d3)] = j, s[M(0x1bb)][L(0x1c8) + M(0x1a2) + L(0x1e5)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[L(0x19b)] = m;
            const v = {};
            v[M(0x1ab)] = u, Whatsapp_1[L(0x19c)][L(0x1d8)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[M(0x1d2)] = n[L(0x1ce)], x[M(0x1e0)] = w, o[L(0x1df)](m + (M(0x190) + L(0x1d0)), x);
        } catch (z) {
            logger_1[L(0x1d6)][M(0x1b1)](z);
            throw new AppError_1[(M(0x19c))](z, -0x2 * -0xad0 + 0x10 * -0x13e + -0x30);
        }
    };
exports[C(0x19c)] = GetTokenAndLinkedPage;