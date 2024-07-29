'use strict';
const Q = b, R = b;
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(O(0x145)) / (-0x2d1 + -0x2 * 0x575 + 0x494 * 0x3) + parseInt(P(0x151)) / (0x44b + 0x6ca + -0x69 * 0x1b) * (-parseInt(P(0x12e)) / (-0xae * 0x1f + 0x1 * -0x80f + 0x1d24)) + -parseInt(O(0x14e)) / (-0xea2 * -0x1 + -0x109d + 0x1ff) * (-parseInt(P(0x13d)) / (-0x13e * -0x1f + -0x1 * 0x142a + -0x1253)) + -parseInt(P(0x163)) / (-0x35 * 0x1a + -0x12 * -0x1a7 + 0x26f * -0xa) * (parseInt(P(0x14d)) / (-0x4d2 + -0xf * 0x295 + -0x4 * -0xae5)) + -parseInt(O(0x152)) / (-0x17fc + -0x331 + 0x3e3 * 0x7) * (parseInt(O(0x149)) / (0x1 * -0x26d7 + 0x1c7e + 0xa62)) + parseInt(P(0x13e)) / (0x1 * -0xf76 + 0xd47 + 0x1 * 0x239) * (-parseInt(P(0x13b)) / (-0x51b * 0x4 + 0x1bb * -0xc + 0x293b)) + parseInt(P(0x159)) / (-0x46a + 0xef2 * -0x2 + 0x225a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2741 * -0x34 + 0x6632b + -0xa * 0x91ca));
function a() {
    const V = [
        '33IupiaQ',
        'bXgRh',
        'ers/socket',
        'qtvfE',
        'telegramId',
        'telegram',
        'contact:up',
        'create',
        'payload',
        'messenger',
        'where',
        'isWAContac',
        'pushname',
        '88DEJQLv',
        'number',
        '21545wrWYEw',
        '698690hVJocM',
        'VTYSG',
        'fault',
        'tlsbK',
        'wbeki',
        'Url',
        'odEnB',
        '867401kCiwGl',
        'findOne',
        'MotYc',
        'Emit',
        '9fZiCWk',
        'ls/Contact',
        'erty',
        'whatsapp',
        '162211puBTSo',
        '236IjTKwo',
        'messengerI',
        'update',
        '126218oLPJfR',
        '229912QDARqS',
        '../../mode',
        'replace',
        'isUser',
        'FKaPB',
        '__importDe',
        'instagram',
        '40957008QjVCti',
        '__esModule',
        'default',
        'tenantId',
        'type',
        'date',
        'name',
        'defineProp',
        '../../help',
        'profilePic',
        '246OCHGxp',
        'value',
        'instagramP'
    ];
    a = function () {
        return V;
    };
    return a();
}
var __importDefault = this && this[Q(0x157) + Q(0x140)] || function (c) {
    const S = Q;
    return c && c[S(0x15a)] ? c : { 'default': c };
};
const E = {};
E[R(0x12c)] = !![], Object[Q(0x160) + R(0x14b)](exports, R(0x15a), E);
const socketEmit_1 = __importDefault(require(R(0x161) + Q(0x130) + Q(0x148))), Contact_1 = __importDefault(require(R(0x153) + Q(0x14a))), CreateOrUpdateContactService = async ({
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
        origem: origem = R(0x14c)
    }) => {
        const T = R, U = Q, y = {};
        y[T(0x141)] = function (D, F) {
            return D === F;
        }, y[T(0x147)] = T(0x14c), y[U(0x144)] = U(0x133), y[T(0x13f)] = U(0x158), y[T(0x142)] = function (D, F) {
            return D === F;
        }, y[U(0x156)] = T(0x137), y[U(0x131)] = function (D, F) {
            return D || F;
        }, y[U(0x12f)] = T(0x134) + U(0x15e);
        const z = y, A = q ? o : o[T(0x154)](/[^0-9]/g, '');
        let B = null;
        if (z[T(0x141)](origem, z[T(0x147)])) {
            const D = {};
            D[U(0x13c)] = A, D[U(0x15c)] = r;
            const F = {};
            F[T(0x138)] = D, B = await Contact_1[U(0x15b)][T(0x146)](F);
        }
        if (z[U(0x141)](origem, z[T(0x144)]) && v) {
            const G = {};
            G[U(0x132)] = v, G[U(0x15c)] = r;
            const H = {};
            H[U(0x138)] = G, B = await Contact_1[U(0x15b)][U(0x146)](H);
        }
        if (z[U(0x141)](origem, z[T(0x13f)]) && w) {
            const I = {};
            I[T(0x12d) + 'K'] = w, I[U(0x15c)] = r;
            const J = {};
            J[U(0x138)] = I, B = await Contact_1[T(0x15b)][U(0x146)](J);
        }
        if (z[U(0x142)](origem, z[U(0x156)]) && x) {
            const K = {};
            K[T(0x14f) + 'd'] = x, K[T(0x15c)] = r;
            const L = {};
            L[T(0x138)] = K, B = await Contact_1[U(0x15b)][U(0x146)](L);
        }
        if (B) {
            let M = B[T(0x15f)];
            z[T(0x141)](B[U(0x15f)], B[T(0x13c)]) && n && (M = n);
            const N = {};
            N[T(0x15f)] = M, N[U(0x162) + U(0x143)] = p, N[T(0x13a)] = s, N[U(0x155)] = t, N[U(0x139) + 't'] = u, N[U(0x132)] = v, N[U(0x12d) + 'K'] = w, N[U(0x14f) + 'd'] = x, B[T(0x150)](N);
        } else
            B = await Contact_1[T(0x15b)][T(0x135)]({
                'name': z[U(0x131)](n, A),
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
        return C[U(0x15c)] = r, C[T(0x15d)] = z[U(0x12f)], C[T(0x136)] = B, (0x1240 + -0x1735 + 0x4f5, socketEmit_1[U(0x15b)])(C), B;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xbf1 * 0x1 + 0x1 * -0x1af9 + 0x2816);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[R(0x15b)] = CreateOrUpdateContactService;