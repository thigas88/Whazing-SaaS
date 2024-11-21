'use strict';
const Q = b, R = b;
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(O(0x213)) / (-0x4a8 + -0x569 + 0x509 * 0x2) * (parseInt(P(0x223)) / (-0x1 * -0x11b1 + -0x1f * 0x75 + -0x384)) + -parseInt(P(0x21f)) / (0x72c + 0x1492 * -0x1 + -0x1 * -0xd69) * (-parseInt(P(0x219)) / (-0x6f2 + -0x17a4 + 0x1 * 0x1e9a)) + parseInt(O(0x201)) / (-0xed3 + -0x7 * -0x45 + 0xcf5) * (parseInt(O(0x203)) / (-0x1d76 + -0x1ca * 0x2 + 0x844 * 0x4)) + -parseInt(P(0x1fd)) / (-0xe * -0x29c + 0x5 * 0x8 + -0x5 * 0x755) * (parseInt(O(0x20d)) / (-0x1 * -0x215b + -0x5 * 0x7c9 + 0x59a)) + -parseInt(O(0x21b)) / (-0x2 * -0xb5d + -0x1 * -0x5bf + -0x5 * 0x5b0) + -parseInt(O(0x1f4)) / (0x4c * 0x63 + -0x4 * 0x997 + 0x902) + parseInt(P(0x1ee)) / (0x35e + -0x6f * -0x18 + -0xdbb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8f2ac * 0x1 + 0x54726 + 0x9 * -0x82ca));
var __importDefault = this && this[Q(0x1ff) + Q(0x215)] || function (c) {
    const S = R;
    return c && c[S(0x1f2)] ? c : { 'default': c };
};
const E = {};
function a() {
    const V = [
        'QTyBi',
        'messenger',
        'telegram',
        'EuWwy',
        'payload',
        'number',
        'Url',
        'where',
        '96024jHgACC',
        '../../help',
        'lRIcT',
        'name',
        'tenantId',
        'cilsh',
        '811MfZSPQ',
        'messengerI',
        'fault',
        'update',
        'replace',
        'EgnWl',
        '260272pnaNWy',
        'date',
        '7209216PEnAla',
        'profilePic',
        'Emit',
        'ers/socket',
        '57fcRwuP',
        'create',
        '../../mode',
        'lnkaH',
        '304EDODJv',
        'instagramP',
        'defineProp',
        'pushname',
        'isWAContac',
        '3501498fQnwNu',
        'instagram',
        'default',
        'isUser',
        '__esModule',
        'type',
        '2114380pcvTaf',
        'lvKxG',
        'XZtLy',
        'telegramId',
        'findOne',
        'contact:up',
        'xvqkC',
        'RJAhy',
        'erty',
        '539eDADdY',
        'value',
        '__importDe',
        'ls/Contact',
        '404445lqipzH',
        'QKhFV',
        '66hhItxW',
        'whatsapp'
    ];
    a = function () {
        return V;
    };
    return a();
}
E[R(0x1fe)] = !![], Object[Q(0x225) + R(0x1fc)](exports, Q(0x1f2), E);
const socketEmit_1 = __importDefault(require(R(0x20e) + Q(0x21e) + R(0x21d))), Contact_1 = __importDefault(require(Q(0x221) + Q(0x200))), CreateOrUpdateContactService = async ({
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
        origem: origem = Q(0x204)
    }) => {
        const T = Q, U = R, y = {};
        y[T(0x222)] = function (D, F) {
            return D === F;
        }, y[T(0x1f5)] = T(0x204), y[T(0x202)] = function (D, F) {
            return D === F;
        }, y[U(0x1fa)] = T(0x207), y[U(0x1f6)] = function (D, F) {
            return D === F;
        }, y[T(0x205)] = U(0x1ef), y[U(0x1fb)] = function (D, F) {
            return D === F;
        }, y[T(0x218)] = U(0x206), y[T(0x20f)] = function (D, F) {
            return D === F;
        }, y[T(0x208)] = function (D, F) {
            return D || F;
        }, y[U(0x212)] = U(0x1f9) + U(0x21a);
        const z = y, A = q ? o : o[U(0x217)](/[^0-9]/g, '');
        let B = null;
        if (z[T(0x222)](origem, z[U(0x1f5)])) {
            const D = {};
            D[T(0x20a)] = A, D[U(0x211)] = r;
            const F = {};
            F[T(0x20c)] = D, B = await Contact_1[U(0x1f0)][U(0x1f8)](F);
        }
        if (z[T(0x202)](origem, z[U(0x1fa)]) && v) {
            const G = {};
            G[T(0x1f7)] = v, G[T(0x211)] = r;
            const H = {};
            H[T(0x20c)] = G, B = await Contact_1[T(0x1f0)][T(0x1f8)](H);
        }
        if (z[U(0x1f6)](origem, z[T(0x205)]) && w) {
            const I = {};
            I[U(0x224) + 'K'] = w, I[U(0x211)] = r;
            const J = {};
            J[U(0x20c)] = I, B = await Contact_1[T(0x1f0)][T(0x1f8)](J);
        }
        if (z[U(0x1fb)](origem, z[U(0x218)]) && x) {
            const K = {};
            K[T(0x214) + 'd'] = x, K[T(0x211)] = r;
            const L = {};
            L[T(0x20c)] = K, B = await Contact_1[U(0x1f0)][T(0x1f8)](L);
        }
        if (B) {
            let M = B[U(0x210)];
            z[T(0x20f)](B[U(0x210)], B[T(0x20a)]) && n && (M = n);
            const N = {};
            N[U(0x210)] = M, N[T(0x21c) + T(0x20b)] = p, N[T(0x1ec)] = s, N[U(0x1f1)] = t, N[U(0x1ed) + 't'] = u, N[U(0x1f7)] = v, N[U(0x224) + 'K'] = w, N[T(0x214) + 'd'] = x, B[T(0x216)](N);
        } else
            B = await Contact_1[T(0x1f0)][U(0x220)]({
                'name': z[U(0x208)](n, A),
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
        return C[T(0x211)] = r, C[T(0x1f3)] = z[T(0x212)], C[T(0x209)] = B, (-0x919 + 0xbdc * 0x1 + 0x65 * -0x7, socketEmit_1[U(0x1f0)])(C), B;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1fec + -0x95 * 0x3a + 0x1fd * 0x22);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[Q(0x1f0)] = CreateOrUpdateContactService;