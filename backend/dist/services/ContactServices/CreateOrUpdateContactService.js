'use strict';
const Q = b, R = b;
function a() {
    const V = [
        'RYlpX',
        'defineProp',
        'number',
        '__importDe',
        'erty',
        'telegram',
        'where',
        'tenantId',
        'isWAContac',
        'Emit',
        'update',
        '3347412uUcyQY',
        'isUser',
        'payload',
        'messengerI',
        '__esModule',
        'xDadx',
        'date',
        'contact:up',
        'Url',
        'value',
        'TtYhd',
        '2016854Xmxdlc',
        'create',
        'upzEJ',
        'messenger',
        'ls/Contact',
        'uakFD',
        'KKXii',
        '4792VlqXIG',
        'whatsapp',
        'pushname',
        '3365QldTar',
        'replace',
        'instagram',
        'ers/socket',
        'ObBiJ',
        'psPrI',
        '17054pqRZWn',
        '../../help',
        'findOne',
        'default',
        '7361720opPYYd',
        'fault',
        'type',
        'telegramId',
        'profilePic',
        '481580IIJyMO',
        '../../mode',
        'name',
        '2294238JbfTEx',
        'instagramP',
        'rmjpA'
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
            const f = -parseInt(O(0x15d)) / (-0x607 * -0x2 + -0x4 * -0x196 + -0x1265) + parseInt(O(0x166)) / (0x601 + 0x1 * -0x1f2d + 0x192e) + parseInt(O(0x169)) / (0x240f + 0x14e4 + -0x38f0) + parseInt(O(0x154)) / (0xec3 + -0xc1 * -0x9 + -0x2 * 0xac4) * (-parseInt(O(0x157)) / (-0x1b48 + -0x1259 * 0x2 + -0x3fff * -0x1)) + -parseInt(P(0x142)) / (-0xb73 + -0x23d8 + -0x2f51 * -0x1) + parseInt(P(0x14d)) / (0x83 * -0x11 + -0x1b8f + 0x1 * 0x2449) + parseInt(O(0x161)) / (-0xaa8 + -0x2 * -0x95 + 0x6a * 0x17);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x13a187 + -0x3 * 0x3c2aa + 0x45b0e));
var __importDefault = this && this[Q(0x16f) + R(0x162)] || function (c) {
    const S = Q;
    return c && c[S(0x146)] ? c : { 'default': c };
};
const E = {};
E[Q(0x14b)] = !![], Object[Q(0x16d) + R(0x170)](exports, R(0x146), E);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x169e + 0x21d6 + -0x9fb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socketEmit_1 = __importDefault(require(Q(0x15e) + R(0x15a) + R(0x140))), Contact_1 = __importDefault(require(R(0x167) + R(0x151))), CreateOrUpdateContactService = async ({
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
        origem: origem = R(0x155)
    }) => {
        const T = R, U = R, y = {};
        y[T(0x147)] = function (D, F) {
            return D === F;
        }, y[U(0x15b)] = U(0x155), y[T(0x16b)] = U(0x171), y[T(0x14c)] = function (D, F) {
            return D === F;
        }, y[U(0x14f)] = U(0x159), y[T(0x152)] = T(0x150), y[U(0x153)] = function (D, F) {
            return D === F;
        }, y[U(0x15c)] = function (D, F) {
            return D || F;
        }, y[U(0x16c)] = U(0x149) + T(0x148);
        const z = y, A = q ? o : o[T(0x158)](/[^0-9]/g, '');
        let B = null;
        if (z[T(0x147)](origem, z[T(0x15b)])) {
            const D = {};
            D[U(0x16e)] = A, D[T(0x13e)] = r;
            const F = {};
            F[U(0x13d)] = D, B = await Contact_1[T(0x160)][T(0x15f)](F);
        }
        if (z[U(0x147)](origem, z[U(0x16b)]) && v) {
            const G = {};
            G[T(0x164)] = v, G[U(0x13e)] = r;
            const H = {};
            H[T(0x13d)] = G, B = await Contact_1[U(0x160)][U(0x15f)](H);
        }
        if (z[U(0x14c)](origem, z[U(0x14f)]) && w) {
            const I = {};
            I[U(0x16a) + 'K'] = w, I[T(0x13e)] = r;
            const J = {};
            J[U(0x13d)] = I, B = await Contact_1[T(0x160)][U(0x15f)](J);
        }
        if (z[T(0x147)](origem, z[U(0x152)]) && x) {
            const K = {};
            K[U(0x145) + 'd'] = x, K[U(0x13e)] = r;
            const L = {};
            L[U(0x13d)] = K, B = await Contact_1[T(0x160)][T(0x15f)](L);
        }
        if (B) {
            let M = B[T(0x168)];
            z[T(0x153)](B[U(0x168)], B[U(0x16e)]) && n && (M = n);
            const N = {};
            N[U(0x168)] = M, N[U(0x165) + U(0x14a)] = p, N[T(0x156)] = s, N[T(0x143)] = t, N[U(0x13f) + 't'] = u, N[U(0x164)] = v, N[U(0x16a) + 'K'] = w, N[U(0x145) + 'd'] = x, B[T(0x141)](N);
        } else
            B = await Contact_1[U(0x160)][T(0x14e)]({
                'name': z[T(0x15c)](n, A),
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
        return C[U(0x13e)] = r, C[T(0x163)] = z[T(0x16c)], C[U(0x144)] = B, (-0xbac + -0x24ea + 0x6 * 0x819, socketEmit_1[U(0x160)])(C), B;
    };
exports[R(0x160)] = CreateOrUpdateContactService;