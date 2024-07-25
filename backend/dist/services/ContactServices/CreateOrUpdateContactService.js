'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * -0x5fb + 0x1c + 0x4 * 0x4aa);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Q = b, R = b;
function a() {
    const V = [
        'number',
        'where',
        'erty',
        'VwcXY',
        'contact:up',
        'ers/socket',
        'instagram',
        'dTnYx',
        'tqvWE',
        '__importDe',
        'pushname',
        '10246chUrfM',
        'isUser',
        'replace',
        'instagramP',
        'findOne',
        'fault',
        'defineProp',
        'name',
        '135OkpBlQ',
        'WFkhE',
        '880510RVbyvh',
        'profilePic',
        'ULEcA',
        'value',
        '10hrvSYS',
        '4YxEtXn',
        'messengerI',
        'ls/Contact',
        '550968xVhYKx',
        'Emit',
        'zZSaS',
        'payload',
        'messenger',
        'mMfWK',
        'mBkUc',
        '1221936rGQPZP',
        'tenantId',
        'update',
        '417904TPLKZt',
        'telegramId',
        '405470rTrqFs',
        'date',
        'whatsapp',
        '662049SXWllr',
        'type',
        'RRwQB',
        '../../help',
        '__esModule',
        'ivIrV',
        'default',
        '7NHKCBV',
        'isWAContac',
        '../../mode',
        'Url',
        'telegram',
        'create'
    ];
    a = function () {
        return V;
    };
    return a();
}
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(O(0xe8)) / (0x1 * -0x1349 + 0x21b3 + 0x1 * -0xe69) + -parseInt(O(0x103)) / (0x594 * 0x1 + 0xb * 0x13a + -0x1310) * (parseInt(O(0x10b)) / (-0x19cd + -0x191d + 0x32ed)) + -parseInt(P(0xd9)) / (0x1775 * -0x1 + -0x2046 + 0x37bf * 0x1) * (-parseInt(P(0xd4)) / (0x6d7 + 0x1 * 0x19b1 + -0x2083)) + parseInt(P(0xe3)) / (-0x3b9 + 0x1b2f + 0x2ee * -0x8) * (-parseInt(O(0xf2)) / (0x191 * -0x3 + -0x9 * 0x148 + -0x1042 * -0x1)) + parseInt(O(0xe6)) / (-0x253d * -0x1 + -0x748 + -0x1ded) + parseInt(O(0xeb)) / (-0x6 * -0x3ce + 0xa7f + -0x1 * 0x214a) * (parseInt(O(0xd8)) / (0x91 * 0x3a + 0x21e * 0x8 + 0x10 * -0x31c)) + -parseInt(P(0xdc)) / (-0x221e + 0x1b87 + 0x6a2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x513c3 + 0x5a567 * 0x1 + -0x751b6));
var __importDefault = this && this[Q(0x101) + R(0x108)] || function (c) {
    const S = R;
    return c && c[S(0xef)] ? c : { 'default': c };
};
const E = {};
E[Q(0xd7)] = !![], Object[Q(0x109) + R(0xfa)](exports, R(0xef), E);
const socketEmit_1 = __importDefault(require(R(0xee) + Q(0xfd) + Q(0xdd))), Contact_1 = __importDefault(require(R(0xf4) + Q(0xdb))), CreateOrUpdateContactService = async ({
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
        origem: origem = Q(0xea)
    }) => {
        const T = R, U = Q, y = {};
        y[T(0xff)] = function (D, F) {
            return D === F;
        }, y[U(0xed)] = T(0xea), y[U(0xe1)] = function (D, F) {
            return D === F;
        }, y[T(0x100)] = U(0xf6), y[U(0xde)] = function (D, F) {
            return D === F;
        }, y[U(0xf0)] = U(0xfe), y[T(0xd3)] = U(0xe0), y[U(0xd6)] = function (D, F) {
            return D === F;
        }, y[T(0xe2)] = function (D, F) {
            return D || F;
        }, y[T(0xfb)] = T(0xfc) + U(0xe9);
        const z = y, A = q ? o : o[T(0x105)](/[^0-9]/g, '');
        let B = null;
        if (z[U(0xff)](origem, z[U(0xed)])) {
            const D = {};
            D[U(0xf8)] = A, D[U(0xe4)] = r;
            const F = {};
            F[U(0xf9)] = D, B = await Contact_1[T(0xf1)][T(0x107)](F);
        }
        if (z[U(0xe1)](origem, z[T(0x100)]) && v) {
            const G = {};
            G[U(0xe7)] = v, G[U(0xe4)] = r;
            const H = {};
            H[T(0xf9)] = G, B = await Contact_1[U(0xf1)][T(0x107)](H);
        }
        if (z[U(0xde)](origem, z[U(0xf0)]) && w) {
            const I = {};
            I[U(0x106) + 'K'] = w, I[U(0xe4)] = r;
            const J = {};
            J[T(0xf9)] = I, B = await Contact_1[U(0xf1)][U(0x107)](J);
        }
        if (z[T(0xe1)](origem, z[U(0xd3)]) && x) {
            const K = {};
            K[T(0xda) + 'd'] = x, K[U(0xe4)] = r;
            const L = {};
            L[U(0xf9)] = K, B = await Contact_1[U(0xf1)][T(0x107)](L);
        }
        if (B) {
            let M = B[T(0x10a)];
            z[T(0xd6)](B[T(0x10a)], B[U(0xf8)]) && n && (M = n);
            const N = {};
            N[U(0x10a)] = M, N[U(0xd5) + T(0xf5)] = p, N[T(0x102)] = s, N[T(0x104)] = t, N[T(0xf3) + 't'] = u, N[T(0xe7)] = v, N[U(0x106) + 'K'] = w, N[U(0xda) + 'd'] = x, B[T(0xe5)](N);
        } else
            B = await Contact_1[U(0xf1)][U(0xf7)]({
                'name': z[U(0xe2)](n, A),
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
        return C[U(0xe4)] = r, C[U(0xec)] = z[U(0xfb)], C[T(0xdf)] = B, (0x1d9d * 0x1 + -0x23cc + 0x62f, socketEmit_1[U(0xf1)])(C), B;
    };
exports[R(0xf1)] = CreateOrUpdateContactService;