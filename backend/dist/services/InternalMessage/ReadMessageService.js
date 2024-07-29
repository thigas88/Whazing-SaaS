'use strict';
const H = b, I = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1def * -0x1 + -0x215c + 0x4097);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x17c)) / (-0x40a * -0x7 + -0x1 * -0x1f55 + 0x3 * -0x13de) * (parseInt(G(0x168)) / (-0x185c + 0x1179 + -0x1 * -0x6e5)) + parseInt(G(0x165)) / (0x1c87 + -0x2203 + 0xc9 * 0x7) * (-parseInt(G(0x16a)) / (-0x15 * -0x1a5 + 0x21aa + -0x442f)) + parseInt(G(0x162)) / (0x2 * 0xeef + 0x526 * -0x3 + -0xe67) * (-parseInt(G(0x177)) / (-0x760 + 0x11 * -0x17e + 0x20c4)) + parseInt(F(0x14c)) / (-0x2 * 0x10b4 + -0x22bc + 0x442b) + -parseInt(G(0x159)) / (-0x2656 + -0x765 + 0x2dc3) * (parseInt(G(0x17b)) / (-0x1617 + -0x146f + 0x2a8f)) + parseInt(F(0x158)) / (0x14d5 + -0x5f * -0x47 + -0x2f24) * (parseInt(G(0x15f)) / (0xad * -0x2c + 0x16aa + 0x25f * 0x3)) + parseInt(F(0x154)) / (-0xce3 + -0x1534 + 0xb61 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2ca96 + 0x29e66 + -0x4dd * 0x81));
var __importDefault = this && this[H(0x15a) + H(0x166)] || function (c) {
    const J = I;
    return c && c[J(0x156)] ? c : { 'default': c };
};
const k = {};
k[I(0x175)] = !![], Object[I(0x155) + I(0x161)](exports, I(0x156), k);
const AppError_1 = __importDefault(require(I(0x15b) + I(0x171) + 'r')), InternalMessage_1 = __importDefault(require(H(0x169) + I(0x164) + I(0x16b))), ReadMessageGroups_1 = __importDefault(require(H(0x169) + H(0x15c) + H(0x16f))), UsersGroups_1 = __importDefault(require(I(0x16d) + H(0x174) + I(0x170))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = I, L = H, o = {};
        o[K(0x153)] = function (q, r) {
            return q <= r;
        }, o[K(0x150)] = function (q, r) {
            return q === r;
        }, o[L(0x176)] = L(0x172) + L(0x157);
        const p = o;
        if (p[L(0x150)](n, ![])) {
            const q = {};
            q[K(0x152)] = !![];
            const r = {};
            r[K(0x178)] = l, r[K(0x163)] = m;
            const s = {};
            s[K(0x16c)] = r, await InternalMessage_1[K(0x160)][K(0x16e)](q, s);
        } else {
            const t = {};
            t[K(0x17a)] = l, t[L(0x179)] = m;
            const u = {};
            u[L(0x16c)] = t;
            const v = await UsersGroups_1[L(0x160)][L(0x14e)](u);
            !v && new AppError_1[(K(0x160))](p[L(0x176)], 0xd90 + -0x1f * 0x3b + 0x19d * -0x3);
            const w = {};
            w[L(0x17a)] = v[L(0x17a)];
            const x = {};
            x[K(0x16c)] = w;
            const y = await InternalMessage_1[L(0x160)][L(0x14d)](x);
            y[L(0x173)](async z => {
                const M = L, N = K, A = {};
                A[M(0x151) + N(0x15d)] = z['id'], A[M(0x14f) + 'd'] = v['id'];
                const B = {};
                B[M(0x16c)] = A;
                const C = await ReadMessageGroups_1[M(0x160)][M(0x14d)](B);
                if (p[N(0x153)](C[M(0x15e)], -0x13ca + 0x1e * -0xcf + 0x2c0c)) {
                    const D = {};
                    D[N(0x151) + N(0x15d)] = z['id'], D[N(0x14f) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[N(0x160)][M(0x167)](E);
                }
            });
        }
    };
exports[I(0x160)] = ReadMessageService;
function a() {
    const O = [
        'groupId',
        '29691AZYDTN',
        '3lQMQeb',
        '476462BzkQAl',
        'findAll',
        'findOne',
        'userGroupI',
        'hTdwi',
        'internalMe',
        'read',
        'aZEeI',
        '7314744thNWTy',
        'defineProp',
        '__esModule',
        '_NOT_FOUND',
        '166130LtRZpG',
        '40JxoCVP',
        '__importDe',
        '../../erro',
        'ls/ReadMes',
        'ssageId',
        'length',
        '77IdcVrO',
        'default',
        'erty',
        '35iVTHIB',
        'receiverId',
        'ls/Interna',
        '70635LfTHqb',
        'fault',
        'create',
        '48562urWzvu',
        '../../mode',
        '64OExKwc',
        'lMessage',
        'where',
        './../../mo',
        'update',
        'sageGroups',
        'Groups',
        'rs/AppErro',
        'USER_GROUP',
        'forEach',
        'dels/Users',
        'value',
        'cYLam',
        '114780vEITDt',
        'senderId',
        'userId'
    ];
    a = function () {
        return O;
    };
    return a();
}