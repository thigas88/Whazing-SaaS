'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x182)) / (-0x1 * 0x1b14 + 0xe02 + 0xd13) + parseInt(B(0x18c)) / (0x212d + 0x1385 * 0x1 + -0x18 * 0x232) + parseInt(A(0x148)) / (-0x45c + -0x3aa + -0x1 * -0x809) + parseInt(A(0x174)) / (-0x7eb + 0x2e7 + -0x17 * -0x38) + -parseInt(B(0x160)) / (0x8b * -0xe + 0x1 * -0x1885 + 0x2024) + -parseInt(B(0x184)) / (0x1 * 0x1aa3 + -0x496 * -0x4 + -0x2cf5) * (-parseInt(A(0x194)) / (0xc9 * 0x1f + 0x195f + -0x31af)) + -parseInt(A(0x16b)) / (0x2144 + -0x2698 + 0x55c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x67 * -0x543 + 0x428a5 + -0x4 * 0x10830));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xce3 * 0x1 + 0xe6c + -0x45);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const N = [
        'fault',
        'lient_id=',
        'length',
        'dOOWo',
        'ok.com/',
        '__importDe',
        'ione\x20apena',
        'session',
        'ls/Whatsap',
        '../../mode',
        'method',
        '229170RYnUlJ',
        'ken',
        '318XztMZI',
        'error',
        '_access_to',
        'lsYRt',
        'env',
        './SetLogou',
        'get',
        'accountId',
        '532758miRBNA',
        'long_lived',
        '=fb_exchan',
        '/socket',
        'access_tok',
        '/accounts?',
        'aph.facebo',
        'kGldl',
        '15533xcnerH',
        'fbPageId',
        'tLinkedPag',
        'uQbwc',
        'en=',
        'cret=',
        'so\x20e\x20selec',
        'tenantId',
        'Escolha\x20ap',
        'kzqoo',
        'getIO',
        '__esModule',
        'gkfTA',
        'a\x20o\x20proces',
        'limit=25&a',
        'v16.0',
        '207414ZyoHca',
        'GET',
        'tokenAPI',
        'defineProp',
        '/oauth/acc',
        'rs/AppErro',
        'fbObject',
        'ession',
        'ina.\x20Refaç',
        'kepAa',
        ':whatsappS',
        'emit',
        'enas\x201\x20pág',
        'default',
        'fZusx',
        'https://gr',
        's\x201\x20página',
        '&fb_exchan',
        'PP_SECRET_',
        'url',
        '../../erro',
        'PP_ID',
        'status',
        'ge_token&c',
        '568660AiqRCn',
        'ge_token=',
        'FACEBOOK_A',
        '../../libs',
        'CGmNn',
        'grant_type',
        'update',
        'erty',
        'ccess_toke',
        'logger',
        'KEY',
        '5015880vuUHMB',
        'axios',
        'CONNECTED',
        'where',
        'ess_token?',
        '&client_se',
        's/logger',
        '../../util',
        'value',
        '796740rBbrzh',
        'whatsapp',
        'action'
    ];
    a = function () {
        return N;
    };
    return a();
}
var __importDefault = this && this[C(0x17c) + C(0x177)] || function (c) {
    const E = D;
    return c && c[E(0x19f)] ? c : { 'default': c };
};
const k = {};
k[D(0x173)] = !![], Object[C(0x14b) + D(0x167)](exports, D(0x19f), k);
const axios_1 = __importDefault(require(C(0x16c))), AppError_1 = __importDefault(require(C(0x15c) + C(0x14d) + 'r')), Whatsapp_1 = __importDefault(require(D(0x180) + D(0x17f) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(D(0x189) + D(0x196) + 'e')), socket_1 = require(C(0x163) + D(0x18f)), logger_1 = require(C(0x172) + C(0x171)), api_version = D(0x147), baseUrl = C(0x157) + D(0x192) + D(0x17b) + api_version, app_id = process[D(0x188)][D(0x162) + D(0x15d)], app_secret = process[D(0x188)][C(0x162) + D(0x15a) + C(0x16a)], getLongLivedAccessToken = async c => {
        const F = C, G = C, {data: d} = await axios_1[F(0x155)][F(0x18a)](baseUrl + (G(0x14c) + F(0x16f) + F(0x165) + F(0x18e) + G(0x15f) + G(0x178)) + app_id + (F(0x170) + G(0x199)) + app_secret + (F(0x159) + F(0x161)) + c);
        return d[F(0x190) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = C, I = C, {
                data: {data: e}
            } = await axios_1[H(0x155)][H(0x18a)](baseUrl + '/' + d + (H(0x191) + H(0x190) + H(0x198)) + c);
        return e[I(0x179)] && e[-0x6d7 + -0x24ac * -0x1 + -0x7 * 0x443];
    }, getPageInfo = async (e, f) => {
        const J = C, K = C, g = {};
        g[J(0x17a)] = J(0x149);
        const h = g, i = baseUrl + '/' + e + (K(0x191) + K(0x146) + J(0x168) + 'n=') + f, j = {};
        j[J(0x181)] = h[J(0x17a)], j[J(0x15b)] = i;
        const {
            data: {data: l}
        } = await (-0x2d7 * 0x1 + 0x8d2 * 0x2 + -0xecd, axios_1[J(0x155)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = D, M = C, n = {
                'kGldl': function (o, p, q) {
                    return o(p, q);
                },
                'fZusx': function (o, p) {
                    return o > p;
                },
                'CGmNn': L(0x19c) + L(0x154) + M(0x150) + M(0x145) + M(0x19a) + L(0x17d) + L(0x158) + '.',
                'gkfTA': function (o, p) {
                    return o === p;
                },
                'kzqoo': function (o, p) {
                    return o(p);
                },
                'lsYRt': function (o, p, q) {
                    return o(p, q);
                },
                'kepAa': M(0x16d),
                'uQbwc': M(0x166)
            };
        try {
            const o = (-0x1b47 + 0xc54 + 0xef3, socket_1[M(0x19e)])(), p = await n[M(0x193)](getPageInfo, j, l);
            if (n[M(0x156)](p[M(0x179)], 0xe * -0x19b + -0x2107 + 0x3782))
                throw new AppError_1[(M(0x155))](n[L(0x164)], 0x1 * 0x2b7 + -0x73 * 0x25 + -0xdc * -0x12);
            if (n[M(0x144)](p[M(0x179)], -0xf07 + 0x1 * -0x7a7 + -0x16ae * -0x1)) {
                const y = {};
                y[M(0x175)] = i, y[L(0x19b)] = m, await (-0x2680 + -0x2cc + 0x294c, SetLogoutLinkedPage_1[M(0x155)])(y);
                return;
            }
            const q = await n[M(0x19d)](getLongLivedAccessToken, l), r = await n[L(0x187)](getPermanentPageAccessToken, q, j), s = {};
            s[L(0x15e)] = n[M(0x151)], s[L(0x195)] = r['id'], s[L(0x14e)] = { ...r }, s[L(0x14a)] = r[L(0x190) + 'en'], s[L(0x14e)][L(0x18b)] = j, s[L(0x14e)][M(0x18d) + L(0x186) + M(0x183)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x19b)] = m;
            const v = {};
            v[L(0x16e)] = u, Whatsapp_1[L(0x155)][L(0x166)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[L(0x176)] = n[M(0x197)], x[L(0x17e)] = w, o[L(0x153)](m + (L(0x152) + M(0x14f)), x);
        } catch (z) {
            logger_1[M(0x169)][L(0x185)](z);
            throw new AppError_1[(L(0x155))](z, 0x537 + -0x897 + 0x4f0);
        }
    };
exports[D(0x155)] = GetTokenAndLinkedPage;