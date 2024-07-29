'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x160)) / (-0x1bc7 + 0x21c6 * -0x1 + 0x3d8e) + parseInt(B(0x170)) / (-0x1c87 + 0x1433 + 0x856) * (parseInt(B(0x166)) / (-0x1 * 0x268d + 0x33b + -0x3ed * -0x9)) + -parseInt(A(0x14e)) / (0xb * 0x1cf + 0x1d5 + -0x15b6) * (parseInt(A(0x150)) / (0x15b * -0x3 + 0x1 * -0xcd + 0x9 * 0x8b)) + parseInt(A(0x186)) / (0x648 + -0x9d * -0x5 + 0xb * -0xd9) * (parseInt(B(0x17f)) / (0x1 * -0x1215 + -0x1127 + 0x2343)) + -parseInt(A(0x172)) / (-0xbc * -0x1d + -0xee4 + -0x660) * (parseInt(B(0x173)) / (-0x1c89 + 0x185d + 0x435)) + -parseInt(A(0x147)) / (0xbd3 + -0x17a6 + -0xbdd * -0x1) + parseInt(B(0x185)) / (-0x443 + 0x1f * 0x83 + 0xb * -0x10d) * (-parseInt(B(0x162)) / (0x190d + -0x5 * -0x24a + 0x1f * -0x12d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6cdeb + 0x13399 + 0x6593 * -0x9));
function a() {
    const N = [
        '292099iePGyv',
        'v16.0',
        '12PUgUZV',
        ':whatsappS',
        'a\x20o\x20proces',
        'lient_id=',
        '4707TMqsOP',
        'fault',
        'enas\x201\x20pág',
        'logger',
        'fbPageId',
        'FACEBOOK_A',
        '../../libs',
        'emit',
        'grant_type',
        'erty',
        '322OeZzvM',
        'update',
        '8VVBgWo',
        '1123641jhixLQ',
        'urHAF',
        'RkvoF',
        'emljM',
        'long_lived',
        's\x201\x20página',
        'RJueJ',
        's/logger',
        '/accounts?',
        'accountId',
        'default',
        'whatsapp',
        '26180IxgJRg',
        'status',
        '../../erro',
        'getIO',
        'ge_token=',
        'limit=25&a',
        '42713ZpEaKz',
        '636xnAISe',
        'KEY',
        'defineProp',
        'GET',
        'env',
        'access_tok',
        'ls/Whatsap',
        'https://gr',
        'ess_token?',
        'tenantId',
        'en=',
        'session',
        'xRpIs',
        'value',
        'ken',
        '../../util',
        'method',
        'ZcFht',
        'ina.\x20Refaç',
        'tLinkedPag',
        'CONNECTED',
        'ession',
        '_access_to',
        '/socket',
        'fbObject',
        'PP_SECRET_',
        'axios',
        'get',
        'ok.com/',
        'aph.facebo',
        '__importDe',
        '=fb_exchan',
        '2886160MxOLtU',
        'tokenAPI',
        'Escolha\x20ap',
        '../../mode',
        'action',
        'ccess_toke',
        'rs/AppErro',
        '13516vyCeoL',
        'url',
        '345pBZLRf',
        '__esModule',
        'length',
        'hiMHb',
        '&client_se',
        'gQeSw',
        'ione\x20apena',
        'so\x20e\x20selec',
        'error',
        'where',
        'PP_ID',
        '/oauth/acc',
        '&fb_exchan',
        'cret=',
        'ge_token&c',
        './SetLogou'
    ];
    a = function () {
        return N;
    };
    return a();
}
var __importDefault = this && this[C(0x1a4) + C(0x167)] || function (c) {
    const E = C;
    return c && c[E(0x151)] ? c : { 'default': c };
};
const k = {};
k[D(0x193)] = !![], Object[C(0x188) + C(0x16f)](exports, C(0x151), k);
const axios_1 = __importDefault(require(C(0x1a0))), AppError_1 = __importDefault(require(D(0x181) + D(0x14d) + 'r')), Whatsapp_1 = __importDefault(require(D(0x14a) + D(0x18c) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(D(0x15f) + D(0x199) + 'e')), socket_1 = require(D(0x16c) + D(0x19d)), logger_1 = require(C(0x195) + C(0x17a)), api_version = D(0x161), baseUrl = D(0x18d) + C(0x1a3) + C(0x1a2) + api_version, app_id = process[D(0x18a)][D(0x16b) + C(0x15a)], app_secret = process[D(0x18a)][D(0x16b) + C(0x19f) + C(0x187)], getLongLivedAccessToken = async c => {
        const F = C, G = D, {data: d} = await axios_1[F(0x17d)][G(0x1a1)](baseUrl + (G(0x15b) + F(0x18e) + F(0x16e) + G(0x1a5) + G(0x15e) + G(0x165)) + app_id + (G(0x154) + G(0x15d)) + app_secret + (F(0x15c) + G(0x183)) + c);
        return d[F(0x18b) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = C, I = D, {
                data: {data: e}
            } = await axios_1[H(0x17d)][H(0x1a1)](baseUrl + '/' + d + (I(0x17b) + I(0x18b) + H(0x190)) + c);
        return e[I(0x152)] && e[-0x1046 + -0x2113 + -0x1073 * -0x3];
    }, getPageInfo = async (e, f) => {
        const J = D, K = C, g = {};
        g[J(0x174)] = K(0x189);
        const h = g, i = baseUrl + '/' + e + (K(0x17b) + K(0x184) + K(0x14c) + 'n=') + f, j = {};
        j[K(0x196)] = h[K(0x174)], j[K(0x14f)] = i;
        const {
            data: {data: l}
        } = await (0x1aa * 0x1 + 0x91 * -0x9 + 0x36f, axios_1[K(0x17d)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = D, M = C, n = {
                'hiMHb': function (o, p, q) {
                    return o(p, q);
                },
                'xRpIs': function (o, p) {
                    return o > p;
                },
                'emljM': L(0x149) + L(0x168) + M(0x198) + L(0x164) + L(0x157) + L(0x156) + M(0x178) + '.',
                'gQeSw': function (o, p) {
                    return o === p;
                },
                'ZcFht': function (o, p) {
                    return o(p);
                },
                'RkvoF': L(0x19a),
                'RJueJ': M(0x171)
            };
        try {
            const o = (-0xb8c + 0x7 * -0x3fa + 0x2762, socket_1[M(0x182)])(), p = await n[L(0x153)](getPageInfo, j, l);
            if (n[L(0x192)](p[L(0x152)], 0x1df5 + -0x37 * -0x67 + 0x43 * -0xc7))
                throw new AppError_1[(M(0x17d))](n[L(0x176)], 0x4 * 0x184 + 0x768 + -0xbe8);
            if (n[M(0x155)](p[M(0x152)], 0x1e6d + 0x632 + -0x249f)) {
                const y = {};
                y[M(0x17e)] = i, y[M(0x18f)] = m, await (-0x1 * 0x9d4 + 0x1ff + 0x7d5, SetLogoutLinkedPage_1[L(0x17d)])(y);
                return;
            }
            const q = await n[M(0x197)](getLongLivedAccessToken, l), r = await n[L(0x153)](getPermanentPageAccessToken, q, j), s = {};
            s[M(0x180)] = n[M(0x175)], s[M(0x16a)] = r['id'], s[L(0x19e)] = { ...r }, s[L(0x148)] = r[M(0x18b) + 'en'], s[L(0x19e)][M(0x17c)] = j, s[L(0x19e)][M(0x177) + M(0x19c) + L(0x194)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x18f)] = m;
            const v = {};
            v[M(0x159)] = u, Whatsapp_1[L(0x17d)][M(0x171)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[L(0x14b)] = n[M(0x179)], x[M(0x191)] = w, o[L(0x16d)](m + (M(0x163) + M(0x19b)), x);
        } catch (z) {
            logger_1[M(0x169)][L(0x158)](z);
            throw new AppError_1[(M(0x17d))](z, -0x4dc * -0x5 + 0x6 * -0x670 + 0xfe4);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25 * -0xe3 + -0x11c0 + -0x48 * 0x31);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[C(0x17d)] = GetTokenAndLinkedPage;