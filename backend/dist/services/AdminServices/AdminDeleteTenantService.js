'use strict';
const aq = b, ar = b;
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(ao(0xff)) / (-0x13 * 0x1db + 0x141e + 0x3c9 * 0x4) + -parseInt(ao(0xf5)) / (0x603 + -0x1 * -0x1dd1 + -0x23d2) + -parseInt(ao(0xda)) / (0xce9 + 0x1f89 + -0x2c6f) * (parseInt(ap(0x102)) / (0x3 * 0x6 + -0x1 * -0xe26 + -0xe34)) + -parseInt(ap(0xfd)) / (0x15d4 + -0xb48 + -0xa87) * (-parseInt(ap(0xfe)) / (0xa2b + 0x1416 + -0x1e3b)) + -parseInt(ao(0xe1)) / (-0x13a * -0x17 + -0x1 * 0x2078 + 0x449 * 0x1) * (parseInt(ap(0x104)) / (0x23a4 + 0x2191 + -0x452d)) + parseInt(ap(0xfb)) / (0xb92 * -0x1 + 0x1145 * -0x1 + -0x16 * -0x150) * (-parseInt(ap(0x106)) / (0x1e65 + -0x11 * 0x1ba + -0x1 * 0x101)) + parseInt(ao(0xeb)) / (-0x1fc * -0x6 + 0x455 + -0x1032) * (parseInt(ao(0xdf)) / (0x2506 + -0x31d * 0x3 + 0x1ba3 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5e7fb + 0x24355 + -0x153d * -0x65));
function a() {
    const av = [
        'ls/Setting',
        '44832yGHIFJ',
        'erty',
        'ls/Queue',
        'ls/Whatsap',
        'destroy',
        '60FrEgtc',
        'ls/Tag',
        '1017422xuPWFO',
        'findOne',
        'tenantId',
        'Wallet',
        '../../mode',
        '__esModule',
        '__importDe',
        'where',
        'ls/Message',
        'Tag',
        '937662rtyCwl',
        'ls/FastRep',
        'fault',
        '../../erro',
        'default',
        'ls/Ticket',
        'ls/User',
        'ls/AutoRep',
        'ERR_NO_TEN',
        'ls/Contact',
        '212796DMqhCA',
        'age',
        'ls/Campaig',
        'ls/ChatFlo',
        'ls/ApiConf',
        'ls/Tenant',
        '72PRmIos',
        'jQWjN',
        '762575Pnjvzk',
        '18RmcpXD',
        '353328ARlstj',
        'rs/AppErro',
        'ANT_FOUND',
        '76HRZyls',
        'ls/ApiMess',
        '8bqXprz',
        'defineProp',
        '488780hynvMU',
        'value'
    ];
    a = function () {
        return av;
    };
    return a();
}
var __importDefault = this && this[aq(0xe7) + aq(0xed)] || function (c) {
    const as = aq;
    return c && c[as(0xe6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0xfd8 + 0x25e2 + -0x25 * 0x25);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[ar(0x107)] = !![], Object[aq(0x105) + ar(0xdb)](exports, ar(0xe6), k);
const AppError_1 = __importDefault(require(ar(0xee) + ar(0x100) + 'r')), Tenant_1 = __importDefault(require(aq(0xe5) + ar(0xfa))), ApiConfig_1 = __importDefault(require(ar(0xe5) + ar(0xf9) + 'ig')), ApiMessage_1 = __importDefault(require(aq(0xe5) + aq(0x103) + aq(0xf6))), AutoReply_1 = __importDefault(require(aq(0xe5) + ar(0xf2) + 'ly')), Campaign_1 = __importDefault(require(ar(0xe5) + aq(0xf7) + 'n')), ChatFlow_1 = __importDefault(require(aq(0xe5) + aq(0xf8) + 'w')), ContactTag_1 = __importDefault(require(aq(0xe5) + ar(0xf4) + aq(0xea))), ContactWallet_1 = __importDefault(require(ar(0xe5) + ar(0xf4) + ar(0xe4))), Contact_1 = __importDefault(require(ar(0xe5) + ar(0xf4))), FastReply_1 = __importDefault(require(ar(0xe5) + ar(0xec) + 'ly')), Message_1 = __importDefault(require(aq(0xe5) + ar(0xe9))), Queue_1 = __importDefault(require(aq(0xe5) + aq(0xdc))), Setting_1 = __importDefault(require(aq(0xe5) + aq(0xd9))), Tag_1 = __importDefault(require(aq(0xe5) + aq(0xe0))), Ticket_1 = __importDefault(require(ar(0xe5) + aq(0xf0))), User_1 = __importDefault(require(aq(0xe5) + ar(0xf1))), Whatsapp_1 = __importDefault(require(ar(0xe5) + ar(0xdd) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = ar, au = ar, N = {};
        N[at(0xfc)] = au(0xf3) + au(0x101);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[at(0xe8)] = P;
        const R = await Tenant_1[at(0xef)][au(0xe2)](Q);
        if (!R)
            throw new AppError_1[(at(0xef))](O[au(0xfc)], -0x1bed + -0x4 * 0x922 + -0x1 * -0x4209);
        const S = {};
        S[au(0xe3)] = M;
        const T = {};
        T[at(0xe8)] = S, await ApiConfig_1[au(0xef)][at(0xde)](T);
        const U = {};
        U[au(0xe3)] = M;
        const V = {};
        V[au(0xe8)] = U, await ApiMessage_1[at(0xef)][au(0xde)](V);
        const W = {};
        W[at(0xe3)] = M;
        const X = {};
        X[at(0xe8)] = W, await AutoReply_1[at(0xef)][at(0xde)](X);
        const Y = {};
        Y[au(0xe3)] = M;
        const Z = {};
        Z[au(0xe8)] = Y, await Campaign_1[au(0xef)][at(0xde)](Z);
        const a0 = {};
        a0[au(0xe3)] = M;
        const a1 = {};
        a1[au(0xe8)] = a0, await ChatFlow_1[au(0xef)][at(0xde)](a1);
        const a2 = {};
        a2[at(0xe3)] = M;
        const a3 = {};
        a3[at(0xe8)] = a2, await ContactTag_1[at(0xef)][at(0xde)](a3);
        const a4 = {};
        a4[at(0xe3)] = M;
        const a5 = {};
        a5[at(0xe8)] = a4, await ContactWallet_1[at(0xef)][au(0xde)](a5);
        const a6 = {};
        a6[at(0xe3)] = M;
        const a7 = {};
        a7[at(0xe8)] = a6, await Contact_1[au(0xef)][au(0xde)](a7);
        const a8 = {};
        a8[au(0xe3)] = M;
        const a9 = {};
        a9[au(0xe8)] = a8, await FastReply_1[au(0xef)][au(0xde)](a9);
        const aa = {};
        aa[au(0xe3)] = M;
        const ab = {};
        ab[au(0xe8)] = aa, await Message_1[au(0xef)][at(0xde)](ab);
        const ac = {};
        ac[au(0xe3)] = M;
        const ad = {};
        ad[at(0xe8)] = ac, await Queue_1[au(0xef)][at(0xde)](ad);
        const ae = {};
        ae[au(0xe3)] = M;
        const af = {};
        af[at(0xe8)] = ae, await Setting_1[at(0xef)][au(0xde)](af);
        const ag = {};
        ag[au(0xe3)] = M;
        const ah = {};
        ah[at(0xe8)] = ag, await Tag_1[au(0xef)][at(0xde)](ah);
        const ai = {};
        ai[au(0xe3)] = M;
        const aj = {};
        aj[au(0xe8)] = ai, await Ticket_1[at(0xef)][at(0xde)](aj);
        const ak = {};
        ak[au(0xe3)] = M;
        const al = {};
        al[at(0xe8)] = ak, await User_1[at(0xef)][at(0xde)](al);
        const am = {};
        am[au(0xe3)] = M;
        const an = {};
        an[at(0xe8)] = am, await Whatsapp_1[at(0xef)][au(0xde)](an), await R[au(0xde)]();
    };
exports[ar(0xef)] = AdminDeleteTenantService;