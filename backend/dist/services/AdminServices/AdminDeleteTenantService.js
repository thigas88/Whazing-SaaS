'use strict';
const aq = b, ar = b;
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(ao(0xe6)) / (0x19f3 + -0x7 * -0xa2 + 0xd8 * -0x24) + parseInt(ap(0xea)) / (-0x4 * 0x67d + -0x149 * -0x1 + -0x1 * -0x18ad) + -parseInt(ap(0xd7)) / (-0x937 + -0xc02 + 0xa9e * 0x2) * (parseInt(ap(0xc9)) / (0x16a * -0x13 + -0xf * -0x3 + -0x2b * -0x9f)) + parseInt(ao(0xe4)) / (0x7c5 + -0x9 * -0x408 + -0x2c08) + parseInt(ao(0xdb)) / (-0xbab + -0x1 * 0x9d6 + 0x1f5 * 0xb) + parseInt(ap(0xcf)) / (0x1347 + -0x1696 + 0x356) + parseInt(ap(0xcd)) / (-0x7b9 + 0x15f * 0xf + 0xcd0 * -0x1) * (-parseInt(ao(0xc3)) / (-0x1 * 0x35f + -0xce5 * 0x3 + 0x2a17));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x8ac2b + -0x183981 + -0x1c02c7 * -0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4de + -0x2 * 0x3ab + -0xce * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[aq(0xc0) + ar(0xd9)] || function (c) {
    const as = aq;
    return c && c[as(0xd8)] ? c : { 'default': c };
};
const k = {};
k[ar(0xc7)] = !![], Object[aq(0xeb) + ar(0xe2)](exports, aq(0xd8), k);
function a() {
    const av = [
        'ls/Setting',
        'rs/AppErro',
        'Tag',
        '4515ENcZAE',
        '__esModule',
        'fault',
        'ERR_NO_TEN',
        '8109702iDRncR',
        'ls/Campaig',
        'destroy',
        'ls/ApiMess',
        'ls/Message',
        'ls/FastRep',
        'ANT_FOUND',
        'erty',
        'where',
        '5109010iiAeGG',
        'ls/Ticket',
        '1569462HjsAVT',
        'ls/ChatFlo',
        'ls/Tenant',
        'Wallet',
        '2878714EUgwam',
        'defineProp',
        '__importDe',
        'rsVjN',
        'ls/Contact',
        '9fFzKNx',
        'ls/Tag',
        'tenantId',
        'ls/User',
        'value',
        'findOne',
        '3308PzNYkt',
        '../../erro',
        'ls/ApiConf',
        'default',
        '33104768iXemYj',
        'ls/Queue',
        '6633340cEzeCi',
        'age',
        'ls/AutoRep',
        'ls/Whatsap',
        '../../mode'
    ];
    a = function () {
        return av;
    };
    return a();
}
const AppError_1 = __importDefault(require(aq(0xca) + aq(0xd5) + 'r')), Tenant_1 = __importDefault(require(aq(0xd3) + ar(0xe8))), ApiConfig_1 = __importDefault(require(aq(0xd3) + ar(0xcb) + 'ig')), ApiMessage_1 = __importDefault(require(aq(0xd3) + aq(0xde) + aq(0xd0))), AutoReply_1 = __importDefault(require(ar(0xd3) + ar(0xd1) + 'ly')), Campaign_1 = __importDefault(require(ar(0xd3) + aq(0xdc) + 'n')), ChatFlow_1 = __importDefault(require(aq(0xd3) + aq(0xe7) + 'w')), ContactTag_1 = __importDefault(require(ar(0xd3) + aq(0xc2) + aq(0xd6))), ContactWallet_1 = __importDefault(require(aq(0xd3) + ar(0xc2) + aq(0xe9))), Contact_1 = __importDefault(require(ar(0xd3) + ar(0xc2))), FastReply_1 = __importDefault(require(aq(0xd3) + ar(0xe0) + 'ly')), Message_1 = __importDefault(require(ar(0xd3) + ar(0xdf))), Queue_1 = __importDefault(require(ar(0xd3) + ar(0xce))), Setting_1 = __importDefault(require(aq(0xd3) + aq(0xd4))), Tag_1 = __importDefault(require(ar(0xd3) + ar(0xc4))), Ticket_1 = __importDefault(require(aq(0xd3) + ar(0xe5))), User_1 = __importDefault(require(ar(0xd3) + ar(0xc6))), Whatsapp_1 = __importDefault(require(ar(0xd3) + ar(0xd2) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = aq, au = aq, N = {};
        N[at(0xc1)] = at(0xda) + at(0xe1);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[au(0xe3)] = P;
        const R = await Tenant_1[au(0xcc)][au(0xc8)](Q);
        if (!R)
            throw new AppError_1[(au(0xcc))](O[au(0xc1)], 0x11d4 + -0x1017 + -0x1 * 0x29);
        const S = {};
        S[au(0xc5)] = M;
        const T = {};
        T[au(0xe3)] = S, await ApiConfig_1[at(0xcc)][at(0xdd)](T);
        const U = {};
        U[at(0xc5)] = M;
        const V = {};
        V[au(0xe3)] = U, await ApiMessage_1[au(0xcc)][at(0xdd)](V);
        const W = {};
        W[au(0xc5)] = M;
        const X = {};
        X[au(0xe3)] = W, await AutoReply_1[au(0xcc)][at(0xdd)](X);
        const Y = {};
        Y[at(0xc5)] = M;
        const Z = {};
        Z[at(0xe3)] = Y, await Campaign_1[au(0xcc)][at(0xdd)](Z);
        const a0 = {};
        a0[at(0xc5)] = M;
        const a1 = {};
        a1[at(0xe3)] = a0, await ChatFlow_1[at(0xcc)][au(0xdd)](a1);
        const a2 = {};
        a2[at(0xc5)] = M;
        const a3 = {};
        a3[at(0xe3)] = a2, await ContactTag_1[at(0xcc)][at(0xdd)](a3);
        const a4 = {};
        a4[at(0xc5)] = M;
        const a5 = {};
        a5[au(0xe3)] = a4, await ContactWallet_1[au(0xcc)][at(0xdd)](a5);
        const a6 = {};
        a6[au(0xc5)] = M;
        const a7 = {};
        a7[au(0xe3)] = a6, await Contact_1[au(0xcc)][au(0xdd)](a7);
        const a8 = {};
        a8[au(0xc5)] = M;
        const a9 = {};
        a9[at(0xe3)] = a8, await FastReply_1[at(0xcc)][au(0xdd)](a9);
        const aa = {};
        aa[au(0xc5)] = M;
        const ab = {};
        ab[at(0xe3)] = aa, await Message_1[au(0xcc)][au(0xdd)](ab);
        const ac = {};
        ac[au(0xc5)] = M;
        const ad = {};
        ad[au(0xe3)] = ac, await Queue_1[at(0xcc)][at(0xdd)](ad);
        const ae = {};
        ae[au(0xc5)] = M;
        const af = {};
        af[au(0xe3)] = ae, await Setting_1[at(0xcc)][au(0xdd)](af);
        const ag = {};
        ag[au(0xc5)] = M;
        const ah = {};
        ah[au(0xe3)] = ag, await Tag_1[au(0xcc)][au(0xdd)](ah);
        const ai = {};
        ai[au(0xc5)] = M;
        const aj = {};
        aj[au(0xe3)] = ai, await Ticket_1[au(0xcc)][at(0xdd)](aj);
        const ak = {};
        ak[au(0xc5)] = M;
        const al = {};
        al[at(0xe3)] = ak, await User_1[au(0xcc)][at(0xdd)](al);
        const am = {};
        am[au(0xc5)] = M;
        const an = {};
        an[at(0xe3)] = am, await Whatsapp_1[at(0xcc)][at(0xdd)](an), await R[at(0xdd)]();
    };
exports[ar(0xcc)] = AdminDeleteTenantService;