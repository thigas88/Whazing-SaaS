'use strict';
const C = b, D = b;
function a() {
    const N = [
        '&client_se',
        'update',
        '5063755EFAvGh',
        'grant_type',
        'ge_token=',
        'ls/Whatsap',
        'length',
        'PaNhq',
        'ione\x20apena',
        'getIO',
        'cret=',
        './SetLogou',
        'axios',
        'so\x20e\x20selec',
        '../../libs',
        'limit=25&a',
        'FACEBOOK_A',
        '6VfiXXJ',
        'a\x20o\x20proces',
        'action',
        'https://gr',
        'env',
        'logger',
        'LlTMt',
        'en=',
        'tokenAPI',
        'oXhSM',
        'access_tok',
        'ge_token&c',
        'accountId',
        'fbObject',
        'rs/AppErro',
        'ySRfF',
        '3341868JyXHXK',
        '__importDe',
        'CONNECTED',
        'JvIgo',
        'KEY',
        '/oauth/acc',
        'ina.\x20Refaç',
        '4569920UYjbqw',
        'error',
        'HDnvW',
        'ccess_toke',
        'OcLGL',
        '__esModule',
        '1eASAPn',
        '../../erro',
        '1764450cZAFbq',
        'tLinkedPag',
        '/accounts?',
        '=fb_exchan',
        'whatsapp',
        'url',
        '&fb_exchan',
        '/socket',
        'defineProp',
        'where',
        'enas\x201\x20pág',
        'KBdrO',
        'method',
        's/logger',
        '2046116OGrDOl',
        'Escolha\x20ap',
        'status',
        'v16.0',
        'ess_token?',
        's\x201\x20página',
        'GET',
        'value',
        'emit',
        '../../mode',
        ':whatsappS',
        'blCPZ',
        '_access_to',
        'tenantId',
        'PP_SECRET_',
        '8037512XxvHyd',
        'ken',
        'default',
        'ok.com/',
        'lient_id=',
        'aph.facebo',
        'session',
        '1828569FbkXVv',
        'erty',
        'ession',
        'fault',
        '../../util',
        'long_lived',
        'PP_ID',
        'get',
        'fbPageId'
    ];
    a = function () {
        return N;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2440 + 0x1ae5 + 0xace);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x173)) / (-0xcc6 + -0x1 * -0x956 + 0x371) * (parseInt(B(0x183)) / (-0x11 * -0x1a2 + -0x1d9 * -0x5 + -0x24fd * 0x1)) + -parseInt(B(0x199)) / (-0x4 * 0x944 + 0x1176 + 0x1 * 0x139d) + parseInt(B(0x1c3)) / (-0x1fd9 + -0x13 * 0x132 + 0x3693) + parseInt(A(0x1a4)) / (0x6a8 + 0x2031 + 0x47 * -0x8c) * (-parseInt(B(0x1b3)) / (0x23ce + -0x7 * 0x157 + -0x1a67)) + parseInt(A(0x192)) / (-0x652 + 0x27 * -0xcd + 0x2594) + -parseInt(A(0x1ca)) / (0x1 * -0x1b1 + -0x6c * 0x57 + 0x266d) + -parseInt(B(0x175)) / (-0xf * 0xd1 + -0x123 * 0x21 + 0x31cb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7e4a4 + 0x5d607 * -0x1 + 0x172584));
var __importDefault = this && this[C(0x1c4) + C(0x19c)] || function (c) {
    const E = D;
    return c && c[E(0x1cf)] ? c : { 'default': c };
};
const k = {};
k[C(0x18a)] = !![], Object[C(0x17d) + C(0x19a)](exports, C(0x1cf), k);
const axios_1 = __importDefault(require(C(0x1ae))), AppError_1 = __importDefault(require(D(0x174) + D(0x1c1) + 'r')), Whatsapp_1 = __importDefault(require(C(0x18c) + C(0x1a7) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(D(0x1ad) + D(0x176) + 'e')), socket_1 = require(C(0x1b0) + C(0x17c)), logger_1 = require(C(0x19d) + C(0x182)), api_version = C(0x186), baseUrl = D(0x1b6) + D(0x197) + C(0x195) + api_version, app_id = process[D(0x1b7)][C(0x1b2) + D(0x19f)], app_secret = process[C(0x1b7)][D(0x1b2) + D(0x191) + C(0x1c7)], getLongLivedAccessToken = async c => {
        const F = C, G = D, {data: d} = await axios_1[F(0x194)][G(0x1a0)](baseUrl + (F(0x1c8) + F(0x187) + F(0x1a5) + F(0x178) + G(0x1be) + G(0x196)) + app_id + (F(0x1a2) + F(0x1ac)) + app_secret + (F(0x17b) + F(0x1a6)) + c);
        return d[G(0x1bd) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = D, I = C, {
                data: {data: e}
            } = await axios_1[H(0x194)][H(0x1a0)](baseUrl + '/' + d + (H(0x177) + H(0x1bd) + H(0x1ba)) + c);
        return e[I(0x1a8)] && e[-0x3a + -0x59d + 0x5d7];
    }, getPageInfo = async (e, f) => {
        const J = D, K = D, g = {};
        g[J(0x1b9)] = J(0x189);
        const h = g, i = baseUrl + '/' + e + (J(0x177) + J(0x1b1) + K(0x1cd) + 'n=') + f, j = {};
        j[K(0x181)] = h[K(0x1b9)], j[K(0x17a)] = i;
        const {
            data: {data: l}
        } = await (0x600 + 0x2e1 * 0x5 + 0x1465 * -0x1, axios_1[K(0x194)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = C, M = C, n = {
                'ySRfF': function (o, p, q) {
                    return o(p, q);
                },
                'PaNhq': function (o, p) {
                    return o > p;
                },
                'oXhSM': L(0x184) + L(0x17f) + M(0x1c9) + L(0x1b4) + L(0x1af) + M(0x1aa) + M(0x188) + '.',
                'OcLGL': function (o, p) {
                    return o === p;
                },
                'KBdrO': function (o, p) {
                    return o(p);
                },
                'blCPZ': function (o, p, q) {
                    return o(p, q);
                },
                'HDnvW': M(0x1c5),
                'JvIgo': L(0x1a3)
            };
        try {
            const o = (0x16f8 + 0x1ec4 + -0x35bc, socket_1[M(0x1ab)])(), p = await n[M(0x1c2)](getPageInfo, j, l);
            if (n[L(0x1a9)](p[M(0x1a8)], 0x58 * -0x19 + 0x10 * -0x37 + 0xc09))
                throw new AppError_1[(M(0x194))](n[M(0x1bc)], -0x2 * -0xaa6 + 0x1 * 0x20db + 0x3497 * -0x1);
            if (n[M(0x1ce)](p[L(0x1a8)], 0x1f5d + 0x1dd9 + -0x3d36)) {
                const y = {};
                y[M(0x179)] = i, y[M(0x190)] = m, await (-0x1b6a + -0x13e6 + 0x2 * 0x17a8, SetLogoutLinkedPage_1[L(0x194)])(y);
                return;
            }
            const q = await n[M(0x180)](getLongLivedAccessToken, l), r = await n[L(0x18e)](getPermanentPageAccessToken, q, j), s = {};
            s[L(0x185)] = n[M(0x1cc)], s[L(0x1a1)] = r['id'], s[L(0x1c0)] = { ...r }, s[L(0x1bb)] = r[M(0x1bd) + 'en'], s[L(0x1c0)][L(0x1bf)] = j, s[L(0x1c0)][L(0x19e) + M(0x18f) + M(0x193)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x190)] = m;
            const v = {};
            v[M(0x17e)] = u, Whatsapp_1[L(0x194)][L(0x1a3)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[M(0x1b5)] = n[M(0x1c6)], x[L(0x198)] = w, o[L(0x18b)](m + (L(0x18d) + L(0x19b)), x);
        } catch (z) {
            logger_1[L(0x1b8)][M(0x1cb)](z);
            throw new AppError_1[(M(0x194))](z, 0x1 * -0x971 + -0x33a + 0xe3b);
        }
    };
exports[C(0x194)] = GetTokenAndLinkedPage;