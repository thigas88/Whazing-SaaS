'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5e * 0x1b + 0x497 + -0x13 * -0x5c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const aq = b, ar = b;
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(ao(0x1ad)) / (0xb * -0x242 + 0x2 * 0x6fd + 0xadd) * (parseInt(ap(0x18a)) / (-0xea * -0xc + 0xe * -0x119 + -0x468 * -0x1)) + -parseInt(ao(0x1a5)) / (0x1112 + 0x13eb + -0x127d * 0x2) * (-parseInt(ao(0x19f)) / (0x1 * 0x12b7 + 0xc01 * 0x1 + -0x1eb4)) + -parseInt(ao(0x196)) / (-0x1dd2 * -0x1 + -0x2458 + 0x68b) * (-parseInt(ap(0x193)) / (-0x10ad + -0x1ee3 + 0x2f96)) + -parseInt(ap(0x187)) / (-0xb3 + -0x3 * 0x39b + 0xb8b) * (parseInt(ap(0x189)) / (0x12cf + 0x6c * 0x3d + 0xd7 * -0x35)) + -parseInt(ao(0x18e)) / (0x1a3b + 0x7 * -0x148 + -0x23 * 0x7e) + parseInt(ap(0x190)) / (0x1715 + -0x1 * 0xcb9 + -0xa52) + -parseInt(ap(0x1a9)) / (-0x1eb + -0x2546 + 0x273c) * (-parseInt(ap(0x1a7)) / (0x7b3 + -0x1c77 + 0x14d0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15f94 + 0x11b74 * 0x9 + -0x44628));
var __importDefault = this && this[aq(0x1a4) + ar(0x186)] || function (c) {
    const as = aq;
    return c && c[as(0x1a0)] ? c : { 'default': c };
};
const k = {};
k[aq(0x1a6)] = !![], Object[ar(0x1a2) + aq(0x185)](exports, aq(0x1a0), k);
const AppError_1 = __importDefault(require(ar(0x1a3) + aq(0x18d) + 'r')), Tenant_1 = __importDefault(require(aq(0x198) + ar(0x1ab))), ApiConfig_1 = __importDefault(require(aq(0x198) + aq(0x192) + 'ig')), ApiMessage_1 = __importDefault(require(aq(0x198) + aq(0x199) + ar(0x18f))), AutoReply_1 = __importDefault(require(aq(0x198) + aq(0x1a1) + 'ly')), Campaign_1 = __importDefault(require(ar(0x198) + aq(0x183) + 'n')), ChatFlow_1 = __importDefault(require(aq(0x198) + aq(0x19e) + 'w')), ContactTag_1 = __importDefault(require(ar(0x198) + ar(0x1aa) + ar(0x1a8))), ContactWallet_1 = __importDefault(require(ar(0x198) + ar(0x1aa) + ar(0x19b))), Contact_1 = __importDefault(require(ar(0x198) + ar(0x1aa))), FastReply_1 = __importDefault(require(aq(0x198) + ar(0x184) + 'ly')), Message_1 = __importDefault(require(aq(0x198) + ar(0x1af))), Queue_1 = __importDefault(require(aq(0x198) + ar(0x182))), Setting_1 = __importDefault(require(ar(0x198) + ar(0x194))), Tag_1 = __importDefault(require(ar(0x198) + ar(0x18c))), Ticket_1 = __importDefault(require(ar(0x198) + ar(0x19d))), User_1 = __importDefault(require(ar(0x198) + ar(0x18b))), Whatsapp_1 = __importDefault(require(ar(0x198) + ar(0x19a) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = ar, au = ar, N = {};
        N[at(0x195)] = at(0x188) + at(0x191);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[au(0x197)] = P;
        const R = await Tenant_1[au(0x181)][au(0x1ae)](Q);
        if (!R)
            throw new AppError_1[(at(0x181))](O[at(0x195)], 0x1754 + -0x1603 + 0x43 * 0x1);
        const S = {};
        S[at(0x19c)] = M;
        const T = {};
        T[at(0x197)] = S, await ApiConfig_1[at(0x181)][at(0x1ac)](T);
        const U = {};
        U[au(0x19c)] = M;
        const V = {};
        V[at(0x197)] = U, await ApiMessage_1[at(0x181)][at(0x1ac)](V);
        const W = {};
        W[at(0x19c)] = M;
        const X = {};
        X[at(0x197)] = W, await AutoReply_1[au(0x181)][au(0x1ac)](X);
        const Y = {};
        Y[at(0x19c)] = M;
        const Z = {};
        Z[at(0x197)] = Y, await Campaign_1[au(0x181)][au(0x1ac)](Z);
        const a0 = {};
        a0[au(0x19c)] = M;
        const a1 = {};
        a1[at(0x197)] = a0, await ChatFlow_1[at(0x181)][au(0x1ac)](a1);
        const a2 = {};
        a2[at(0x19c)] = M;
        const a3 = {};
        a3[at(0x197)] = a2, await ContactTag_1[au(0x181)][au(0x1ac)](a3);
        const a4 = {};
        a4[at(0x19c)] = M;
        const a5 = {};
        a5[au(0x197)] = a4, await ContactWallet_1[au(0x181)][at(0x1ac)](a5);
        const a6 = {};
        a6[au(0x19c)] = M;
        const a7 = {};
        a7[au(0x197)] = a6, await Contact_1[au(0x181)][au(0x1ac)](a7);
        const a8 = {};
        a8[au(0x19c)] = M;
        const a9 = {};
        a9[at(0x197)] = a8, await FastReply_1[at(0x181)][at(0x1ac)](a9);
        const aa = {};
        aa[au(0x19c)] = M;
        const ab = {};
        ab[at(0x197)] = aa, await Message_1[au(0x181)][at(0x1ac)](ab);
        const ac = {};
        ac[au(0x19c)] = M;
        const ad = {};
        ad[au(0x197)] = ac, await Queue_1[au(0x181)][au(0x1ac)](ad);
        const ae = {};
        ae[au(0x19c)] = M;
        const af = {};
        af[au(0x197)] = ae, await Setting_1[at(0x181)][au(0x1ac)](af);
        const ag = {};
        ag[at(0x19c)] = M;
        const ah = {};
        ah[at(0x197)] = ag, await Tag_1[au(0x181)][au(0x1ac)](ah);
        const ai = {};
        ai[at(0x19c)] = M;
        const aj = {};
        aj[at(0x197)] = ai, await Ticket_1[at(0x181)][au(0x1ac)](aj);
        const ak = {};
        ak[au(0x19c)] = M;
        const al = {};
        al[at(0x197)] = ak, await User_1[at(0x181)][au(0x1ac)](al);
        const am = {};
        am[au(0x19c)] = M;
        const an = {};
        an[at(0x197)] = am, await Whatsapp_1[au(0x181)][at(0x1ac)](an), await R[at(0x1ac)]();
    };
exports[ar(0x181)] = AdminDeleteTenantService;
function a() {
    const av = [
        'ANT_FOUND',
        'ls/ApiConf',
        '6OiucKS',
        'ls/Setting',
        'NeBlB',
        '540985LNifZr',
        'where',
        '../../mode',
        'ls/ApiMess',
        'ls/Whatsap',
        'Wallet',
        'tenantId',
        'ls/Ticket',
        'ls/ChatFlo',
        '868412zsMMNq',
        '__esModule',
        'ls/AutoRep',
        'defineProp',
        '../../erro',
        '__importDe',
        '6WgCdAS',
        'value',
        '1056jUbVYU',
        'Tag',
        '166287ELMeUr',
        'ls/Contact',
        'ls/Tenant',
        'destroy',
        '3ZHdtAm',
        'findOne',
        'ls/Message',
        'default',
        'ls/Queue',
        'ls/Campaig',
        'ls/FastRep',
        'erty',
        'fault',
        '62097eBsiOJ',
        'ERR_NO_TEN',
        '568eULBJY',
        '456114WkBptX',
        'ls/User',
        'ls/Tag',
        'rs/AppErro',
        '2919753lxoJaM',
        'age',
        '2287060daIqQk'
    ];
    a = function () {
        return av;
    };
    return a();
}