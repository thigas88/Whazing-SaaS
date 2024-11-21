'use strict';
function a() {
    const O = [
        '1775826uNeWaz',
        'forEach',
        'ls/ReadMes',
        'USER_GROUP',
        'findOne',
        '__importDe',
        '9mMlyZs',
        'EjlKX',
        'read',
        '3323440uupVUR',
        '2BKFqPk',
        'groupId',
        'senderId',
        'lMessage',
        '695701IlTskF',
        'value',
        'erty',
        '33LsGrNf',
        'update',
        '3NVGMDv',
        '6645932CouKSF',
        '2437155lofIKD',
        'where',
        'ls/Interna',
        'defineProp',
        'create',
        '../../erro',
        'sageGroups',
        '__esModule',
        '14093610aDNtBJ',
        'receiverId',
        'internalMe',
        'Groups',
        'fault',
        'userId',
        'default',
        'ssageId',
        'triCo',
        'length',
        'rs/AppErro',
        './../../mo',
        'userGroupI',
        'findAll',
        'dels/Users',
        '../../mode',
        '8380936ncNlxT',
        '_NOT_FOUND',
        'KbuVd'
    ];
    a = function () {
        return O;
    };
    return a();
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x19d)) / (-0x25b4 + -0x1f11 * 0x1 + 0x44c6 * 0x1) * (-parseInt(G(0x199)) / (0xba5 + 0xb * 0x2cd + -0x3 * 0xe26)) + parseInt(G(0x1a2)) / (-0xc2 * 0x32 + -0x216 + 0x161 * 0x1d) * (-parseInt(F(0x173)) / (0x8 * 0x437 + 0xb7e * 0x1 + -0x2d32)) + parseInt(G(0x198)) / (0x69 * 0x35 + 0x1e29 + -0x39 * 0xe9) + -parseInt(F(0x18f)) / (0x1227 * -0x2 + -0x103 * 0x16 + 0x3a96) + -parseInt(G(0x174)) / (0x2f * 0xba + -0x7b * 0xf + -0x1aea) + parseInt(G(0x18c)) / (-0x1fa5 + -0x631 + 0x25de) * (-parseInt(F(0x195)) / (-0x2 * 0x505 + -0x1 * 0x203d + 0x2a50)) + parseInt(G(0x17c)) / (-0x5 * -0x7c5 + -0x4 * 0x775 + -0x8fb) * (parseInt(G(0x1a0)) / (-0x1c92 + -0x371 * -0x9 + -0x25c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x74d42 + 0x5039b + 0x8f5d));
var __importDefault = this && this[H(0x194) + H(0x180)] || function (c) {
    const J = H;
    return c && c[J(0x17b)] ? c : { 'default': c };
};
const k = {};
k[I(0x19e)] = !![], Object[I(0x177) + I(0x19f)](exports, I(0x17b), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc9 * -0x19 + 0xd3 * -0x29 + -0xb * -0x4fd);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(H(0x179) + I(0x186) + 'r')), InternalMessage_1 = __importDefault(require(H(0x18b) + I(0x176) + I(0x19c))), ReadMessageGroups_1 = __importDefault(require(I(0x18b) + I(0x191) + I(0x17a))), UsersGroups_1 = __importDefault(require(H(0x187) + I(0x18a) + H(0x17f))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = H, L = H, o = {};
        o[K(0x18e)] = function (q, r) {
            return q <= r;
        }, o[L(0x184)] = function (q, r) {
            return q === r;
        }, o[K(0x196)] = L(0x192) + K(0x18d);
        const p = o;
        if (p[K(0x184)](n, ![])) {
            const q = {};
            q[L(0x197)] = !![];
            const r = {};
            r[K(0x19b)] = l, r[K(0x17d)] = m;
            const s = {};
            s[K(0x175)] = r, await InternalMessage_1[K(0x182)][L(0x1a1)](q, s);
        } else {
            const t = {};
            t[L(0x19a)] = l, t[L(0x181)] = m;
            const u = {};
            u[L(0x175)] = t;
            const v = await UsersGroups_1[K(0x182)][L(0x193)](u);
            !v && new AppError_1[(K(0x182))](p[L(0x196)], 0x1b5 + 0x82f * 0x3 + -0x9 * 0x2be);
            const w = {};
            w[K(0x19a)] = v[L(0x19a)];
            const x = {};
            x[L(0x175)] = w;
            const y = await InternalMessage_1[K(0x182)][L(0x189)](x);
            y[L(0x190)](async z => {
                const M = K, N = L, A = {};
                A[M(0x17e) + M(0x183)] = z['id'], A[M(0x188) + 'd'] = v['id'];
                const B = {};
                B[M(0x175)] = A;
                const C = await ReadMessageGroups_1[N(0x182)][N(0x189)](B);
                if (p[N(0x18e)](C[N(0x185)], -0x49 * -0x39 + -0x7b * -0x22 + -0x2097)) {
                    const D = {};
                    D[M(0x17e) + N(0x183)] = z['id'], D[N(0x188) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[N(0x182)][M(0x178)](E);
                }
            });
        }
    };
exports[I(0x182)] = ReadMessageService;