'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x181)) / (0x621 * -0x5 + -0x2 * 0xd0f + 0x38c4) + -parseInt(B(0x162)) / (0x117f + 0x1b * 0x12d + -0x313c) * (-parseInt(A(0x18d)) / (0x19f * -0x13 + 0x1 * 0x10df + 0x1 * 0xdf1)) + parseInt(A(0x19d)) / (0x124 * 0xd + -0xd * 0x1 + -0xec3 * 0x1) + -parseInt(B(0x1a9)) / (-0x1 * 0x1453 + 0x6be + 0xd9a) * (-parseInt(A(0x18c)) / (-0x125 * 0x3 + 0x1 * -0xc77 + 0xfec)) + -parseInt(A(0x189)) / (0x267d * 0x1 + 0x7bc + 0xa2 * -0x49) + parseInt(B(0x19a)) / (0x204 * 0x5 + 0x8da + -0x12e6) * (parseInt(B(0x198)) / (-0x1b * -0x17 + -0x2629 * -0x1 + -0x7 * 0x5cb)) + -parseInt(A(0x199)) / (0x20c7 + -0x3 * 0x8ec + -0x5f9 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x71fbe + -0x4fd * -0xe + 0x57ffa * 0x1));
function a() {
    const N = [
        'long_lived',
        '3582360DYJCon',
        'url',
        'ina.\x20Refaç',
        'fbObject',
        'en=',
        'ge_token&c',
        'GET',
        'action',
        'getIO',
        'method',
        '../../libs',
        'erty',
        '454035UUYPuh',
        'emit',
        '&client_se',
        '/oauth/acc',
        '__importDe',
        '../../util',
        'OvMyr',
        'so\x20e\x20selec',
        'KhtVX',
        'whatsapp',
        'access_tok',
        'session',
        'aph.facebo',
        'CONNECTED',
        'fault',
        'value',
        'kjixZ',
        'error',
        'abdFj',
        'axios',
        'limit=25&a',
        'length',
        '/socket',
        '6AYxyPv',
        'ess_token?',
        'logger',
        'WRfMt',
        'yzJeg',
        'https://gr',
        'wGjZz',
        'fbPageId',
        'enas\x201\x20pág',
        'KEY',
        'a\x20o\x20proces',
        'tLinkedPag',
        'ge_token=',
        'PP_SECRET_',
        'accountId',
        'ls/Whatsap',
        ':whatsappS',
        '../../mode',
        'default',
        'get',
        'rs/AppErro',
        'YikLs',
        'where',
        'Escolha\x20ap',
        'FACEBOOK_A',
        'env',
        'cret=',
        's/logger',
        'ione\x20apena',
        'grant_type',
        'tenantId',
        '123873iYrjCg',
        'status',
        '_access_to',
        '=fb_exchan',
        'ession',
        'defineProp',
        'tokenAPI',
        's\x201\x20página',
        '203308kEmciL',
        '/accounts?',
        '&fb_exchan',
        '18crCtbR',
        '66741CCRtpu',
        './SetLogou',
        'lient_id=',
        'WQnId',
        'ken',
        '__esModule',
        'v16.0',
        '../../erro',
        'ok.com/',
        'PP_ID',
        'update',
        '53019grTkZM',
        '7023500vTeOuO',
        '296RcBRiJ',
        'ccess_toke'
    ];
    a = function () {
        return N;
    };
    return a();
}
var __importDefault = this && this[C(0x1ad) + C(0x159)] || function (c) {
    const E = D;
    return c && c[E(0x192)] ? c : { 'default': c };
};
const k = {};
k[D(0x15a)] = !![], Object[D(0x186) + C(0x1a8)](exports, D(0x192), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf4e + -0x17cc + 0x2872);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(D(0x15e))), AppError_1 = __importDefault(require(C(0x194) + D(0x176) + 'r')), Whatsapp_1 = __importDefault(require(C(0x173) + D(0x171) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(C(0x18e) + C(0x16d) + 'e')), socket_1 = require(D(0x1a7) + D(0x161)), logger_1 = require(C(0x1ae) + C(0x17d)), api_version = D(0x193), baseUrl = C(0x167) + C(0x1b5) + C(0x195) + api_version, app_id = process[C(0x17b)][C(0x17a) + D(0x196)], app_secret = process[C(0x17b)][D(0x17a) + D(0x16f) + D(0x16b)], getLongLivedAccessToken = async c => {
        const F = C, G = D, {data: d} = await axios_1[F(0x174)][F(0x175)](baseUrl + (F(0x1ac) + G(0x163) + G(0x17f) + F(0x184) + F(0x1a2) + F(0x18f)) + app_id + (G(0x1ab) + F(0x17c)) + app_secret + (G(0x18b) + F(0x16e)) + c);
        return d[G(0x1b3) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = C, I = D, {
                data: {data: e}
            } = await axios_1[H(0x174)][I(0x175)](baseUrl + '/' + d + (H(0x18a) + H(0x1b3) + I(0x1a1)) + c);
        return e[I(0x160)] && e[-0x266b + -0x3 * 0x6f2 + 0x3b41];
    }, getPageInfo = async (e, f) => {
        const J = C, K = C, g = {};
        g[J(0x15d)] = K(0x1a3);
        const h = g, i = baseUrl + '/' + e + (K(0x18a) + K(0x15f) + K(0x19b) + 'n=') + f, j = {};
        j[J(0x1a6)] = h[J(0x15d)], j[K(0x19e)] = i;
        const {
            data: {data: l}
        } = await (-0x18c4 + 0x1 * 0x266e + -0xdaa, axios_1[K(0x174)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = C, M = D, n = {
                'WQnId': function (o, p, q) {
                    return o(p, q);
                },
                'kjixZ': function (o, p) {
                    return o > p;
                },
                'OvMyr': L(0x179) + M(0x16a) + M(0x19f) + L(0x16c) + M(0x1b0) + M(0x17e) + M(0x188) + '.',
                'wGjZz': function (o, p) {
                    return o === p;
                },
                'YikLs': function (o, p) {
                    return o(p);
                },
                'WRfMt': function (o, p, q) {
                    return o(p, q);
                },
                'KhtVX': M(0x158),
                'yzJeg': L(0x197)
            };
        try {
            const o = (0x7 * -0x573 + 0xacf + 0x1b56, socket_1[M(0x1a5)])(), p = await n[M(0x190)](getPageInfo, j, l);
            if (n[M(0x15b)](p[L(0x160)], -0x1 * -0xded + 0x1c6a + -0x2 * 0x152b))
                throw new AppError_1[(L(0x174))](n[M(0x1af)], 0x107e + 0x1ac9 * -0x1 + 0x1 * 0xbdb);
            if (n[L(0x168)](p[L(0x160)], -0x9 * 0x1a + 0x1f3 * 0xf + -0x1c53)) {
                const y = {};
                y[L(0x1b2)] = i, y[M(0x180)] = m, await (0x9eb * -0x2 + -0x2a5 * 0x2 + 0x3 * 0x860, SetLogoutLinkedPage_1[M(0x174)])(y);
                return;
            }
            const q = await n[M(0x177)](getLongLivedAccessToken, l), r = await n[M(0x165)](getPermanentPageAccessToken, q, j), s = {};
            s[L(0x182)] = n[L(0x1b1)], s[M(0x169)] = r['id'], s[M(0x1a0)] = { ...r }, s[L(0x187)] = r[L(0x1b3) + 'en'], s[M(0x1a0)][L(0x170)] = j, s[M(0x1a0)][M(0x19c) + L(0x183) + M(0x191)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x180)] = m;
            const v = {};
            v[M(0x178)] = u, Whatsapp_1[L(0x174)][L(0x197)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[L(0x1a4)] = n[L(0x166)], x[L(0x1b4)] = w, o[L(0x1aa)](m + (L(0x172) + M(0x185)), x);
        } catch (z) {
            logger_1[L(0x164)][M(0x15c)](z);
            throw new AppError_1[(M(0x174))](z, 0x1070 + -0x27 * 0xfd + 0x17ab);
        }
    };
exports[C(0x174)] = GetTokenAndLinkedPage;