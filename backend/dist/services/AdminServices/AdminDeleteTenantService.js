'use strict';
const aq = b, ar = b;
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(ao(0x109)) / (-0xb57 + 0x1142 + 0x2 * -0x2f5) * (-parseInt(ao(0xf3)) / (0x49d * -0x1 + -0x1085 + -0xa92 * -0x2)) + parseInt(ao(0x110)) / (0x1778 * 0x1 + -0xd21 + -0x4 * 0x295) + parseInt(ap(0xef)) / (-0x4cf * -0x5 + -0x236d + 0xb66) + parseInt(ap(0xfe)) / (-0x2d * 0x65 + -0x7 * -0x25f + 0x12d) * (-parseInt(ap(0xf4)) / (0x254 * -0x4 + -0xd85 * -0x2 + 0x11b4 * -0x1)) + -parseInt(ap(0x103)) / (-0x1164 + -0xc1c + 0x1 * 0x1d87) + -parseInt(ap(0x106)) / (-0xac1 + 0x1d * 0x73 + -0x23e) + parseInt(ao(0x104)) / (-0x7ac * -0x2 + -0x19b1 + 0x6 * 0x1bb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x4bf95 + 0x112778 + -0x2 * -0x168d9));
var __importDefault = this && this[aq(0xf0) + aq(0xed)] || function (c) {
    const as = ar;
    return c && c[as(0x111)] ? c : { 'default': c };
};
const k = {};
k[ar(0x113)] = !![], Object[ar(0x10a) + aq(0x102)](exports, ar(0x111), k);
const AppError_1 = __importDefault(require(aq(0xec) + aq(0x112) + 'r')), Tenant_1 = __importDefault(require(ar(0xfc) + ar(0xf1))), ApiConfig_1 = __importDefault(require(aq(0xfc) + aq(0xe8) + 'ig')), ApiMessage_1 = __importDefault(require(aq(0xfc) + aq(0xf9) + ar(0xfa))), AutoReply_1 = __importDefault(require(aq(0xfc) + ar(0xe9) + 'ly')), Campaign_1 = __importDefault(require(aq(0xfc) + aq(0x100) + 'n')), ChatFlow_1 = __importDefault(require(aq(0xfc) + aq(0xf2) + 'w')), ContactTag_1 = __importDefault(require(aq(0xfc) + aq(0x10f) + ar(0xf8))), ContactWallet_1 = __importDefault(require(aq(0xfc) + aq(0x10f) + ar(0x108))), Contact_1 = __importDefault(require(aq(0xfc) + aq(0x10f))), FastReply_1 = __importDefault(require(aq(0xfc) + aq(0xeb) + 'ly')), Message_1 = __importDefault(require(ar(0xfc) + aq(0x107))), Queue_1 = __importDefault(require(ar(0xfc) + aq(0x105))), Setting_1 = __importDefault(require(ar(0xfc) + ar(0xf6))), Tag_1 = __importDefault(require(ar(0xfc) + ar(0xff))), Ticket_1 = __importDefault(require(aq(0xfc) + ar(0xfd))), User_1 = __importDefault(require(aq(0xfc) + aq(0x10c))), Whatsapp_1 = __importDefault(require(aq(0xfc) + aq(0xea) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = aq, au = ar, N = {};
        N[at(0x101)] = au(0xfb) + au(0xee);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[au(0xf5)] = P;
        const R = await Tenant_1[au(0x10b)][at(0x10d)](Q);
        if (!R)
            throw new AppError_1[(at(0x10b))](O[au(0x101)], 0x23ca + 0x1 * -0x129e + -0xf98);
        const S = {};
        S[at(0xf7)] = M;
        const T = {};
        T[at(0xf5)] = S, await ApiConfig_1[at(0x10b)][au(0x10e)](T);
        const U = {};
        U[au(0xf7)] = M;
        const V = {};
        V[au(0xf5)] = U, await ApiMessage_1[au(0x10b)][at(0x10e)](V);
        const W = {};
        W[au(0xf7)] = M;
        const X = {};
        X[at(0xf5)] = W, await AutoReply_1[at(0x10b)][at(0x10e)](X);
        const Y = {};
        Y[at(0xf7)] = M;
        const Z = {};
        Z[au(0xf5)] = Y, await Campaign_1[au(0x10b)][at(0x10e)](Z);
        const a0 = {};
        a0[au(0xf7)] = M;
        const a1 = {};
        a1[at(0xf5)] = a0, await ChatFlow_1[at(0x10b)][at(0x10e)](a1);
        const a2 = {};
        a2[au(0xf7)] = M;
        const a3 = {};
        a3[au(0xf5)] = a2, await ContactTag_1[at(0x10b)][au(0x10e)](a3);
        const a4 = {};
        a4[au(0xf7)] = M;
        const a5 = {};
        a5[au(0xf5)] = a4, await ContactWallet_1[at(0x10b)][at(0x10e)](a5);
        const a6 = {};
        a6[au(0xf7)] = M;
        const a7 = {};
        a7[at(0xf5)] = a6, await Contact_1[au(0x10b)][au(0x10e)](a7);
        const a8 = {};
        a8[at(0xf7)] = M;
        const a9 = {};
        a9[au(0xf5)] = a8, await FastReply_1[at(0x10b)][au(0x10e)](a9);
        const aa = {};
        aa[at(0xf7)] = M;
        const ab = {};
        ab[at(0xf5)] = aa, await Message_1[at(0x10b)][at(0x10e)](ab);
        const ac = {};
        ac[at(0xf7)] = M;
        const ad = {};
        ad[au(0xf5)] = ac, await Queue_1[au(0x10b)][at(0x10e)](ad);
        const ae = {};
        ae[at(0xf7)] = M;
        const af = {};
        af[au(0xf5)] = ae, await Setting_1[au(0x10b)][au(0x10e)](af);
        const ag = {};
        ag[at(0xf7)] = M;
        const ah = {};
        ah[at(0xf5)] = ag, await Tag_1[at(0x10b)][au(0x10e)](ah);
        const ai = {};
        ai[au(0xf7)] = M;
        const aj = {};
        aj[at(0xf5)] = ai, await Ticket_1[at(0x10b)][at(0x10e)](aj);
        const ak = {};
        ak[au(0xf7)] = M;
        const al = {};
        al[au(0xf5)] = ak, await User_1[at(0x10b)][au(0x10e)](al);
        const am = {};
        am[at(0xf7)] = M;
        const an = {};
        an[au(0xf5)] = am, await Whatsapp_1[at(0x10b)][au(0x10e)](an), await R[at(0x10e)]();
    };
exports[ar(0x10b)] = AdminDeleteTenantService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xffe * 0x1 + -0x2095 * 0x1 + 0x117f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const av = [
        'ls/User',
        'findOne',
        'destroy',
        'ls/Contact',
        '2135883wtcBAC',
        '__esModule',
        'rs/AppErro',
        'value',
        'ls/ApiConf',
        'ls/AutoRep',
        'ls/Whatsap',
        'ls/FastRep',
        '../../erro',
        'fault',
        'ANT_FOUND',
        '746320SfTItu',
        '__importDe',
        'ls/Tenant',
        'ls/ChatFlo',
        '9074FCNkYK',
        '1506zedsgV',
        'where',
        'ls/Setting',
        'tenantId',
        'Tag',
        'ls/ApiMess',
        'age',
        'ERR_NO_TEN',
        '../../mode',
        'ls/Ticket',
        '16705ENOrGd',
        'ls/Tag',
        'ls/Campaig',
        'NsOOK',
        'erty',
        '5162045vDDvvd',
        '12891492lFqNoo',
        'ls/Queue',
        '3559056VMzdDa',
        'ls/Message',
        'Wallet',
        '83UdQYKB',
        'defineProp',
        'default'
    ];
    a = function () {
        return av;
    };
    return a();
}