'use strict';
const Q = b, R = b;
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(O(0x1a8)) / (-0xd4b + -0xdfd + -0x37 * -0x7f) * (parseInt(P(0x1b1)) / (0xe3 + -0x267e * 0x1 + -0x259d * -0x1)) + parseInt(O(0x192)) / (0x1 * 0x14a1 + -0x1 * 0x35b + -0x5c1 * 0x3) * (parseInt(P(0x1b0)) / (0x1115 + 0x2689 + -0x379a)) + parseInt(P(0x1ac)) / (-0x210 + -0x2329 + 0x253e) + parseInt(P(0x195)) / (0x297 * -0x1 + -0x47 * -0x6b + -0x1b10) * (parseInt(P(0x1b2)) / (-0xda * 0x2d + -0x1cf3 + 0x434c)) + parseInt(P(0x199)) / (-0x83d + -0x14e5 + 0x1d2a) * (parseInt(P(0x18c)) / (-0x1 * 0x11eb + -0xc57 + 0x1e4b)) + parseInt(O(0x1af)) / (0x6 * 0x63a + 0x1 * -0x1acb + 0x181 * -0x7) + parseInt(O(0x1c0)) / (0x1a64 + -0x768 + -0x12f1 * 0x1) * (-parseInt(P(0x1b7)) / (0x29c * -0x6 + 0x255 * -0x5 + -0x1 * -0x1b5d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x16a980 + 0x18b06e + -0x102736 * 0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x254 * 0x8 + 0x15b * 0x6 + -0x1938);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[Q(0x193) + Q(0x1a6)] || function (c) {
    const S = Q;
    return c && c[S(0x1aa)] ? c : { 'default': c };
};
const E = {};
E[R(0x1bf)] = !![], Object[R(0x191) + R(0x19f)](exports, Q(0x1aa), E);
const socketEmit_1 = __importDefault(require(Q(0x18d) + Q(0x1bb) + Q(0x1a4))), Contact_1 = __importDefault(require(R(0x1bc) + R(0x19d))), CreateOrUpdateContactService = async ({
        name: n,
        number: o,
        profilePicUrl: p,
        isGroup: q,
        tenantId: r,
        pushname: s,
        isUser: t,
        isWAContact: u,
        email: email = '',
        telegramId: v,
        instagramPK: w,
        messengerId: x,
        extraInfo: extraInfo = [],
        origem: origem = R(0x197)
    }) => {
        const T = R, U = Q, y = {};
        y[T(0x1ba)] = function (D, F) {
            return D === F;
        }, y[U(0x1b8)] = U(0x197), y[U(0x1b4)] = U(0x19b), y[U(0x1a0)] = function (D, F) {
            return D === F;
        }, y[U(0x1b9)] = U(0x1ae), y[U(0x1bd)] = U(0x1be), y[T(0x1ab)] = function (D, F) {
            return D === F;
        }, y[T(0x1a5)] = function (D, F) {
            return D || F;
        }, y[T(0x1a2)] = T(0x1c2) + T(0x19a);
        const z = y, A = q ? o : o[U(0x18e)](/[^0-9]/g, '');
        let B = null;
        if (z[U(0x1ba)](origem, z[U(0x1b8)])) {
            const D = {};
            D[T(0x18b)] = A, D[T(0x1a3)] = r;
            const F = {};
            F[U(0x190)] = D, B = await Contact_1[U(0x196)][T(0x19e)](F);
        }
        if (z[T(0x1ba)](origem, z[T(0x1b4)]) && v) {
            const G = {};
            G[U(0x1b6)] = v, G[T(0x1a3)] = r;
            const H = {};
            H[T(0x190)] = G, B = await Contact_1[U(0x196)][T(0x19e)](H);
        }
        if (z[U(0x1a0)](origem, z[U(0x1b9)]) && w) {
            const I = {};
            I[U(0x1ad) + 'K'] = w, I[T(0x1a3)] = r;
            const J = {};
            J[T(0x190)] = I, B = await Contact_1[U(0x196)][U(0x19e)](J);
        }
        if (z[U(0x1a0)](origem, z[U(0x1bd)]) && x) {
            const K = {};
            K[U(0x1a7) + 'd'] = x, K[T(0x1a3)] = r;
            const L = {};
            L[T(0x190)] = K, B = await Contact_1[T(0x196)][U(0x19e)](L);
        }
        if (B) {
            let M = B[T(0x1a9)];
            z[T(0x1ab)](B[T(0x1a9)], B[U(0x18b)]) && n && (M = n);
            const N = {};
            N[T(0x1a9)] = M, N[T(0x1a1) + U(0x18a)] = p, N[T(0x18f)] = s, N[T(0x1b5)] = t, N[U(0x194) + 't'] = u, N[T(0x1b6)] = v, N[U(0x1ad) + 'K'] = w, N[U(0x1a7) + 'd'] = x, B[U(0x1b3)](N);
        } else
            B = await Contact_1[T(0x196)][T(0x198)]({
                'name': z[U(0x1a5)](n, A),
                'number': A,
                'profilePicUrl': p,
                'email': email,
                'isGroup': q,
                'pushname': s,
                'isUser': t,
                'isWAContact': u,
                'tenantId': r,
                'extraInfo': extraInfo,
                'telegramId': v,
                'instagramPK': w,
                'messengerId': x
            });
        const C = {};
        return C[U(0x1a3)] = r, C[U(0x19c)] = z[U(0x1a2)], C[U(0x1c1)] = B, (0x1930 + 0x1 * -0x15e3 + -0x5 * 0xa9, socketEmit_1[U(0x196)])(C), B;
    };
exports[R(0x196)] = CreateOrUpdateContactService;
function a() {
    const V = [
        '7240BVArnW',
        'date',
        'telegram',
        'type',
        'ls/Contact',
        'findOne',
        'erty',
        'DdWXi',
        'profilePic',
        'JOQfm',
        'tenantId',
        'Emit',
        'IyONd',
        'fault',
        'messengerI',
        '13syAfYs',
        'name',
        '__esModule',
        'nShZE',
        '8156535vTGaJI',
        'instagramP',
        'instagram',
        '8565330VaoHXD',
        '2401456UnUutv',
        '66362rDqONr',
        '775985KAgusv',
        'update',
        'KGVgq',
        'isUser',
        'telegramId',
        '39753276kGamcs',
        'ZwaLG',
        'IIiqw',
        'gxLqq',
        'ers/socket',
        '../../mode',
        'dXxSO',
        'messenger',
        'value',
        '11JsKcTY',
        'payload',
        'contact:up',
        'Url',
        'number',
        '3285WlNhsh',
        '../../help',
        'replace',
        'pushname',
        'where',
        'defineProp',
        '9wsSCuA',
        '__importDe',
        'isWAContac',
        '6inqbev',
        'default',
        'whatsapp',
        'create'
    ];
    a = function () {
        return V;
    };
    return a();
}