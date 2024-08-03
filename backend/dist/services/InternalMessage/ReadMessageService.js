'use strict';
const H = b, I = b;
function a() {
    const O = [
        '6OglFhk',
        'dels/Users',
        'findOne',
        'ls/Interna',
        '1017855NoNNCl',
        '1180gJpkSp',
        'daLTI',
        '9501AMbIWn',
        'value',
        'userGroupI',
        '../../mode',
        '__esModule',
        'Groups',
        '5165gEfZqY',
        'read',
        'sageGroups',
        'erty',
        'length',
        'oHDyb',
        'create',
        '21176040fXByEn',
        'forEach',
        '__importDe',
        'rs/AppErro',
        '12185117VMRGKo',
        './../../mo',
        'defineProp',
        'XOSCY',
        'userId',
        'ls/ReadMes',
        'fault',
        'groupId',
        '../../erro',
        'senderId',
        'default',
        'ssageId',
        'USER_GROUP',
        'where',
        '_NOT_FOUND',
        'internalMe',
        'findAll',
        'receiverId',
        'update',
        'lMessage',
        '596752XfWoWJ',
        '218HZSSXu',
        '3713706mDSACt'
    ];
    a = function () {
        return O;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1432 + 0x1 * 0x503 + -0xa * 0x265);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x16b)) / (-0x876 + -0x339 + 0xbb0) * (-parseInt(G(0x162)) / (0x1236 + 0x53 * -0x2 + -0x118e)) + parseInt(F(0x163)) / (0x51d * -0x6 + -0xb86 * -0x3 + 0x1 * -0x3e1) + -parseInt(G(0x169)) / (0x3a9 * -0x9 + 0x1456 + 0x1 * 0xc9f) * (-parseInt(G(0x171)) / (0x95 * -0x10 + 0xd00 + -0x3ab)) + parseInt(F(0x164)) / (0x1ab6 * 0x1 + -0x32c + 0x7 * -0x35c) * (-parseInt(F(0x14d)) / (0x2c8 + 0x7e3 * -0x3 + 0x14e8)) + -parseInt(G(0x161)) / (-0x1 * -0x2669 + -0x23f7 + -0x26a) + parseInt(G(0x168)) / (0x7 * -0x2a5 + 0x3e * -0x44 + 0x2304) + parseInt(G(0x149)) / (-0x55f * -0x7 + 0xe52 + 0x1 * -0x33e1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5e8a * -0xa + 0x1ea * -0x814 + -0x1 * -0x213ace));
var __importDefault = this && this[H(0x14b) + H(0x153)] || function (c) {
    const J = I;
    return c && c[J(0x16f)] ? c : { 'default': c };
};
const k = {};
k[I(0x16c)] = !![], Object[H(0x14f) + H(0x145)](exports, I(0x16f), k);
const AppError_1 = __importDefault(require(I(0x155) + I(0x14c) + 'r')), InternalMessage_1 = __importDefault(require(H(0x16e) + H(0x167) + I(0x160))), ReadMessageGroups_1 = __importDefault(require(H(0x16e) + I(0x152) + H(0x144))), UsersGroups_1 = __importDefault(require(H(0x14e) + H(0x165) + I(0x170))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = H, L = H, o = {};
        o[K(0x147)] = function (q, r) {
            return q <= r;
        }, o[L(0x150)] = function (q, r) {
            return q === r;
        }, o[K(0x16a)] = K(0x159) + L(0x15b);
        const p = o;
        if (p[L(0x150)](n, ![])) {
            const q = {};
            q[K(0x143)] = !![];
            const r = {};
            r[K(0x156)] = l, r[K(0x15e)] = m;
            const s = {};
            s[L(0x15a)] = r, await InternalMessage_1[L(0x157)][L(0x15f)](q, s);
        } else {
            const t = {};
            t[K(0x154)] = l, t[L(0x151)] = m;
            const u = {};
            u[K(0x15a)] = t;
            const v = await UsersGroups_1[K(0x157)][L(0x166)](u);
            !v && new AppError_1[(K(0x157))](p[L(0x16a)], 0x7 * 0x91 + 0x2 * -0xb92 + 0x3 * 0x6eb);
            const w = {};
            w[K(0x154)] = v[L(0x154)];
            const x = {};
            x[K(0x15a)] = w;
            const y = await InternalMessage_1[L(0x157)][K(0x15d)](x);
            y[L(0x14a)](async z => {
                const M = K, N = L, A = {};
                A[M(0x15c) + N(0x158)] = z['id'], A[N(0x16d) + 'd'] = v['id'];
                const B = {};
                B[N(0x15a)] = A;
                const C = await ReadMessageGroups_1[M(0x157)][M(0x15d)](B);
                if (p[M(0x147)](C[M(0x146)], -0x12 + 0x22e9 + -0x22d7)) {
                    const D = {};
                    D[N(0x15c) + M(0x158)] = z['id'], D[N(0x16d) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[M(0x157)][N(0x148)](E);
                }
            });
        }
    };
exports[I(0x157)] = ReadMessageService;