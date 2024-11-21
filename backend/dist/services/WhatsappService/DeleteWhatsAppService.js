'use strict';
function a() {
    const O = [
        '36BtfHYu',
        'findOne',
        '871696BZMIgG',
        'ls/Baileys',
        'rs/AppErro',
        'default',
        'whatsappId',
        '__esModule',
        '4167844oJwIvp',
        'ing',
        'SRgHX',
        '2253930pQUkPt',
        'defineProp',
        '../../mode',
        '866284MZFkbk',
        '2983740tcIFJJ',
        'where',
        'ls/Ticket',
        '3077104jGRDYn',
        '__importDe',
        'P_FOUND',
        'fault',
        'ls/UserRat',
        'value',
        'destroy',
        '357771OHxeeV',
        '../../erro',
        'Keys',
        'tenantId',
        '5dsSMkP',
        'ls/Whatsap',
        'ERR_NO_WAP',
        'erty'
    ];
    a = function () {
        return O;
    };
    return a();
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x156)) / (0x393 + -0x32 + 0x10 * -0x36) + -parseInt(H(0x141)) / (0x2231 + 0x1 * -0x269e + 0x46f) + parseInt(I(0x14c)) / (-0xb * -0x1f5 + 0x1111 + 0x2695 * -0x1) + parseInt(I(0x15c)) / (-0x4 * 0x544 + 0x1 * 0x8cd + 0xc47) * (parseInt(I(0x150)) / (-0x1c5 * 0x11 + 0x2 * -0x909 + 0x302c * 0x1)) + -parseInt(H(0x142)) / (0x146c + 0x1 * 0x25fa + -0x3a60) + -parseInt(I(0x13e)) / (-0x26 * 0xf9 + 0x5b0 + 0x1f4d) + parseInt(H(0x145)) / (-0x38 * 0x1a + 0x247b + 0x465 * -0x7) * (parseInt(I(0x154)) / (-0xcc7 * -0x1 + 0x205b + -0x2d19));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x20f84 + 0x1 * -0x74b36 + 0x463 * 0x332));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x621 * 0x1 + 0x1b38 + -0x17 * 0xdd);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[J(0x146) + K(0x148)] || function (c) {
    const L = J;
    return c && c[L(0x15b)] ? c : { 'default': c };
};
const k = {};
k[J(0x14a)] = !![], Object[J(0x13f) + J(0x153)](exports, K(0x15b), k);
const Whatsapp_1 = __importDefault(require(K(0x140) + J(0x151) + 'p')), AppError_1 = __importDefault(require(J(0x14d) + J(0x158) + 'r')), Baileys_1 = __importDefault(require(K(0x140) + K(0x157))), BaileysKeys_1 = __importDefault(require(K(0x140) + J(0x157) + J(0x14e))), Ticket_1 = __importDefault(require(K(0x140) + J(0x144))), UserRating_1 = __importDefault(require(J(0x140) + J(0x149) + K(0x13c))), DeleteWhatsApprService = async (q, r) => {
        const M = K, N = K, s = {};
        s[M(0x13d)] = M(0x152) + N(0x147);
        const t = s, u = {};
        u['id'] = q, u[N(0x14f)] = r;
        const v = {};
        v[M(0x143)] = u;
        const w = await Whatsapp_1[N(0x159)][N(0x155)](v);
        if (!w)
            throw new AppError_1[(N(0x159))](t[N(0x13d)], 0x75e * 0x5 + 0x4 * 0x72 + 0xb * -0x35e);
        const x = {};
        x[N(0x15a)] = q;
        const y = {};
        y[M(0x143)] = x, await Baileys_1[N(0x159)][M(0x14b)](y);
        const z = {};
        z[N(0x15a)] = q;
        const A = {};
        A[M(0x143)] = z, await BaileysKeys_1[N(0x159)][M(0x14b)](A);
        const B = {};
        B[N(0x15a)] = q;
        const C = {};
        C[M(0x143)] = B, await UserRating_1[N(0x159)][N(0x14b)](C);
        const D = {};
        D[N(0x15a)] = q;
        const E = {};
        E[M(0x143)] = D, await Ticket_1[M(0x159)][N(0x14b)](E);
        const F = {};
        F['id'] = q;
        const G = {};
        G[N(0x143)] = F, await Whatsapp_1[M(0x159)][M(0x14b)](G);
    };
exports[K(0x159)] = DeleteWhatsApprService;