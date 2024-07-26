'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x20b2 + 0x10c8 + 0x11c0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const H = b, I = b;
function a() {
    const O = [
        'ConKx',
        './../../mo',
        '136614xTlCXV',
        'findOne',
        'default',
        'internalMe',
        '10eVPIBr',
        'groupId',
        '23570767XvPiqG',
        'ls/Interna',
        'ssageId',
        'USER_GROUP',
        'value',
        'erty',
        'userGroupI',
        'ls/ReadMes',
        '1915551GNBGYW',
        '../../erro',
        'dels/Users',
        'create',
        'forEach',
        'sageGroups',
        'senderId',
        'Groups',
        'userId',
        '_NOT_FOUND',
        'findAll',
        'fault',
        'tLsZP',
        '__importDe',
        'qPTgs',
        'update',
        'rs/AppErro',
        'defineProp',
        'read',
        'length',
        'receiverId',
        '__esModule',
        '../../mode',
        '1040248QXhPrd',
        'where',
        'lMessage',
        '30AZyfRD',
        '315581nJusba',
        '10ptQKIC',
        '949380AHBpYF',
        '42dyWIPZ',
        '7189608KkcFnh'
    ];
    a = function () {
        return O;
    };
    return a();
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x1f9)) / (-0x2 * 0x2 + 0x948 + -0x943 * 0x1) + -parseInt(F(0x204)) / (0x195 + 0x1c81 + -0x1e14) * (-parseInt(G(0x1fc)) / (0x2406 + 0x5 * 0x33f + 0x9 * -0x5ce)) + parseInt(G(0x1ff)) / (-0x1 * 0x544 + 0x15b7 + -0x1 * 0x106f) * (-parseInt(G(0x1fe)) / (0x2a + 0x1543 + -0x1568)) + -parseInt(G(0x200)) / (-0x14a5 + 0xfd0 + 0x4db) * (-parseInt(G(0x1fd)) / (-0x2006 + -0x1 * 0x1f75 + 0x3f82)) + parseInt(F(0x201)) / (-0x2 * -0xf43 + 0x1 * -0x235c + 0xe * 0x59) + parseInt(G(0x1e2)) / (0x9 * 0xb1 + -0x1dd5 * -0x1 + -0x2405 * 0x1) + -parseInt(G(0x1d8)) / (-0xe * 0x1b4 + 0x16b * -0x6 + 0x2064) * (parseInt(G(0x1da)) / (0x9 * -0x3ea + -0xa66 * -0x1 + 0x18df));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcabf9 + 0x424 * 0xda + 0x114729));
var __importDefault = this && this[H(0x1ef) + H(0x1ed)] || function (c) {
    const J = I;
    return c && c[J(0x1f7)] ? c : { 'default': c };
};
const k = {};
k[I(0x1de)] = !![], Object[I(0x1f3) + H(0x1df)](exports, H(0x1f7), k);
const AppError_1 = __importDefault(require(I(0x1e3) + I(0x1f2) + 'r')), InternalMessage_1 = __importDefault(require(H(0x1f8) + H(0x1db) + H(0x1fb))), ReadMessageGroups_1 = __importDefault(require(I(0x1f8) + I(0x1e1) + H(0x1e7))), UsersGroups_1 = __importDefault(require(H(0x203) + I(0x1e4) + H(0x1e9))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = I, L = I, o = {};
        o[K(0x1ee)] = function (q, r) {
            return q <= r;
        }, o[L(0x1f0)] = function (q, r) {
            return q === r;
        }, o[K(0x202)] = L(0x1dd) + L(0x1eb);
        const p = o;
        if (p[L(0x1f0)](n, ![])) {
            const q = {};
            q[L(0x1f4)] = !![];
            const r = {};
            r[K(0x1e8)] = l, r[L(0x1f6)] = m;
            const s = {};
            s[K(0x1fa)] = r, await InternalMessage_1[K(0x1d6)][L(0x1f1)](q, s);
        } else {
            const t = {};
            t[K(0x1d9)] = l, t[L(0x1ea)] = m;
            const u = {};
            u[L(0x1fa)] = t;
            const v = await UsersGroups_1[K(0x1d6)][L(0x205)](u);
            !v && new AppError_1[(L(0x1d6))](p[K(0x202)], -0x728 * 0x1 + 0x27b * -0x2 + -0xdb2 * -0x1);
            const w = {};
            w[L(0x1d9)] = v[K(0x1d9)];
            const x = {};
            x[K(0x1fa)] = w;
            const y = await InternalMessage_1[L(0x1d6)][K(0x1ec)](x);
            y[L(0x1e6)](async z => {
                const M = K, N = K, A = {};
                A[M(0x1d7) + N(0x1dc)] = z['id'], A[M(0x1e0) + 'd'] = v['id'];
                const B = {};
                B[N(0x1fa)] = A;
                const C = await ReadMessageGroups_1[N(0x1d6)][M(0x1ec)](B);
                if (p[N(0x1ee)](C[N(0x1f5)], -0x1622 * 0x1 + -0x1efe + -0x190 * -0x22)) {
                    const D = {};
                    D[N(0x1d7) + M(0x1dc)] = z['id'], D[M(0x1e0) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[M(0x1d6)][N(0x1e5)](E);
                }
            });
        }
    };
exports[I(0x1d6)] = ReadMessageService;