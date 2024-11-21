'use strict';
const W = b, X = b;
function a() {
    const a1 = [
        'bttxw',
        'rsDYU',
        'quotedMsg',
        'text',
        '../../mode',
        'G_MSG',
        'rhkxY',
        'yKfhB',
        'ers/socket',
        '3666582MDyRfp',
        'Emit',
        'zuutd',
        'lvLVP',
        'useIntegra',
        'createdAt',
        '3553680HrseJF',
        'tenantId',
        'ERR_EDITIN',
        'UwtDZ',
        'parse',
        'ZohqW',
        'dAdJE',
        'AvccU',
        'piphl',
        'default',
        'HCXXL',
        'G_WAPP_MSG',
        'lteIt',
        'include',
        'No\x20message',
        'model',
        'contact',
        'ls/Ticket',
        'ls/Message',
        'messageId',
        '__importDe',
        '__esModule',
        '2198WYUdSb',
        'leys',
        'message',
        'WbpuS',
        'RziIO',
        '324FHQBbV',
        'ces/Handle',
        'HandleMess',
        'hjQQE',
        'XmdsA',
        'Hook',
        'ers/GetTic',
        'payload',
        'h\x20this\x20ID.',
        'dataJson',
        '../../help',
        'eZxST',
        'hGTUR',
        'getTime',
        'ype',
        'findOne',
        'TfZRy',
        '21807pjXhOQ',
        'ageWebHook',
        'rKWlg',
        'wigtn',
        'nLtRw',
        '\x20found\x20wit',
        'ERR_FINDIN',
        '459960vfxlhi',
        'tionsServi',
        'type',
        'FvwBt',
        'chat:updat',
        '7031948SxKyZV',
        'lCDPK',
        'frWDX',
        'nId',
        'MessageWeb',
        'egrationsT',
        'n8n',
        'edit',
        'remoteJid',
        'ers/GetInt',
        '3048zlsZWa',
        'defineProp',
        '../Integra',
        'fCRew',
        'yAZqC',
        'fault',
        'mRODl',
        'Ygvtv',
        'integratio',
        'where',
        'Ljpus',
        'sendMessag',
        '../../erro',
        'key',
        'value',
        'ticket',
        'MpJNZ',
        'tion',
        'wYsHn',
        '5374240YWdPek',
        'ketWbotBai',
        'edited',
        'mwwSC',
        'InGXZ',
        'erty',
        'update',
        'UWKDI',
        'ticketId',
        'rs/AppErro',
        'hmvfC'
    ];
    a = function () {
        return a1;
    };
    return a();
}
(function (c, d) {
    const U = b, V = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(U(0x18f)) / (0x1db * -0x14 + 0x1062 + 0x14bb) + -parseInt(U(0x1e1)) / (-0xab3 * -0x1 + 0x26e4 + -0x3195) * (parseInt(U(0x177)) / (-0x16ad + -0x1 * -0x1d5 + -0x119 * -0x13)) + parseInt(V(0x1cb)) / (0x2e3 * 0x1 + 0x2622 + -0x2901) + -parseInt(U(0x1b1)) / (-0x4a * 0x76 + -0x1482 + 0x36a3) + -parseInt(V(0x1c5)) / (0x1 * 0x9f7 + -0x1 * 0x17ff + 0xe0e) + parseInt(V(0x194)) / (0x1151 + 0xd * 0x1e7 + -0x2a05) + parseInt(V(0x19e)) / (-0x1e50 + 0x9af * -0x3 + -0x5 * -0xbe1) * (parseInt(V(0x188)) / (-0x265b + 0x1029 + -0x32d * -0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1bd * -0x30f + -0x1 * 0x899a5 + 0xbb310));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2004 + 0x1 * -0x23b1 + 0x522);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[W(0x1df) + X(0x1a3)] || function (c) {
    const Y = W;
    return c && c[Y(0x1e0)] ? c : { 'default': c };
};
const k = {};
k[X(0x1ac)] = !![], Object[X(0x19f) + X(0x1b6)](exports, X(0x1e0), k);
const AppError_1 = __importDefault(require(W(0x1aa) + X(0x1ba) + 'r')), GetTicketWbotBaileys_1 = __importDefault(require(X(0x181) + W(0x17d) + W(0x1b2) + W(0x1e2))), Message_1 = __importDefault(require(W(0x1c0) + W(0x1dd))), Ticket_1 = __importDefault(require(X(0x1c0) + X(0x1dc))), socketEmit_1 = __importDefault(require(X(0x181) + X(0x1c4) + X(0x1c6))), HandleMessageWebHook_1 = require(X(0x1a0) + X(0x190) + W(0x178) + W(0x198) + X(0x17c)), GetIntegrationsType_1 = __importDefault(require(W(0x181) + X(0x19d) + W(0x199) + X(0x185))), EditWhatsAppMessage = async ({
        messageId: o,
        tenantId: p,
        body: q
    }) => {
        const Z = W, a0 = X, r = {};
        r[Z(0x1c2)] = a0(0x1cd) + a0(0x1d6), r[Z(0x1bc)] = Z(0x18e) + a0(0x1c1), r[Z(0x1ce)] = a0(0x1d9) + a0(0x18d) + a0(0x17f), r[Z(0x182)] = function (z, A) {
            return z !== A;
        }, r[Z(0x1c8)] = a0(0x1a1), r[Z(0x1d2)] = Z(0x183), r[Z(0x1a5)] = a0(0x1ad), r[Z(0x1a4)] = a0(0x1db), r[Z(0x1b0)] = function (z, A) {
            return z === A;
        }, r[a0(0x17b)] = Z(0x187), r[Z(0x1d3)] = a0(0x196), r[a0(0x17a)] = a0(0x1c3), r[a0(0x192)] = function (z, A) {
            return z / A;
        }, r[a0(0x1ae)] = function (z, A) {
            return z - A;
        }, r[a0(0x195)] = function (z, A) {
            return z > A;
        }, r[a0(0x18b)] = function (z, A) {
            return z !== A;
        }, r[a0(0x1bb)] = Z(0x1b5), r[a0(0x176)] = Z(0x1d5), r[Z(0x1d1)] = a0(0x1d0), r[Z(0x1b8)] = function (z, A) {
            return z === A;
        }, r[Z(0x1a8)] = function (z, A) {
            return z === A;
        }, r[a0(0x1d7)] = a0(0x19a), r[a0(0x1c7)] = function (z, A) {
            return z !== A;
        }, r[Z(0x18c)] = a0(0x175), r[Z(0x1bd)] = Z(0x1b4), r[Z(0x18a)] = Z(0x193) + 'e', r[Z(0x1a2)] = a0(0x1be);
        const s = r;
        let t;
        try {
            if (s[Z(0x182)](s[a0(0x1c8)], s[a0(0x1d2)])) {
                const y = {};
                y[Z(0x1de)] = o, y[a0(0x1cc)] = p;
                const z = {};
                z[a0(0x1da)] = Ticket_1[Z(0x1d4)], z['as'] = s[Z(0x1a5)], z[a0(0x1d8)] = [s[Z(0x1a4)]];
                const A = {};
                A[a0(0x1a7)] = y, A[a0(0x1d8)] = [z], t = await Message_1[a0(0x1d4)][a0(0x186)](A);
                if (!t) {
                    if (s[Z(0x1b0)](s[Z(0x17b)], s[a0(0x1d3)]))
                        throw new y[(Z(0x1d4))](s[Z(0x1c2)]);
                    else
                        throw new AppError_1[(Z(0x1d4))](s[a0(0x1ce)]);
                }
            } else
                throw new d[(a0(0x1d4))](s[a0(0x1bc)]);
        } catch (D) {
            if (s[Z(0x1b0)](s[a0(0x17a)], s[Z(0x17a)]))
                throw new AppError_1[(a0(0x1d4))](s[Z(0x1bc)]);
            else
                throw new d[(a0(0x1d4))](s[Z(0x1c2)]);
        }
        const {ticket: u} = t, v = await (0x165b + -0x11ed + -0x46e, GetTicketWbotBaileys_1[Z(0x1d4)])(u), w = JSON[Z(0x1cf)](t[a0(0x180)]), x = w[a0(0x1ab)][Z(0x19c)];
        try {
            const F = {};
            F[Z(0x1bf)] = q, F[a0(0x19b)] = w[Z(0x1ab)], await v[a0(0x1a9) + 'e'](x, F, {});
            const G = s[Z(0x192)](s[a0(0x1ae)](new Date()[Z(0x184)](), new Date(t[Z(0x1ca)])[a0(0x184)]()), 0xca61 + 0x1cc * -0x70 + -0x47 * -0x349);
            if (s[a0(0x195)](G, 0xa * -0x18d + -0x17e0 + -0x276c * -0x1)) {
                if (s[a0(0x18b)](s[Z(0x1bb)], s[Z(0x1bb)]))
                    throw new d[(a0(0x1d4))](s[Z(0x1c2)]);
                else
                    throw new AppError_1[(a0(0x1d4))](s[Z(0x1c2)]);
            }
            if (s[a0(0x18b)](t[Z(0x1b3)], null)) {
                if (s[a0(0x1b0)](s[a0(0x176)], s[Z(0x1d1)])) {
                    const R = {};
                    return R[a0(0x1d4)] = K, F && R[a0(0x1e0)] ? J : R;
                } else
                    throw new AppError_1[(Z(0x1d4))](s[a0(0x1c2)]);
            }
            const H = {};
            H[a0(0x1b3)] = q, await t[Z(0x1b7)](H);
            const {ticket: I} = t;
            if (s[Z(0x1b8)](I[Z(0x1c9) + a0(0x1af)], !![])) {
                const R = await (0x3d9 * 0x1 + 0x1fa + -0x5d3, GetIntegrationsType_1[a0(0x1d4)])(I[a0(0x1a6) + a0(0x197)]);
                if (s[a0(0x1a8)](R, s[a0(0x1d7)])) {
                    if (s[Z(0x1c7)](s[a0(0x18c)], s[a0(0x1bd)]))
                        await (-0x1dff + 0x1 * -0x116b + 0x2f6a, HandleMessageWebHook_1[Z(0x179) + Z(0x189)])(I[Z(0x1a6) + Z(0x197)], o);
                    else
                        throw new d[(a0(0x1d4))](s[a0(0x1ce)]);
                }
            }
            const J = {};
            J[a0(0x1cc)] = I[a0(0x1cc)], J[Z(0x191)] = s[a0(0x18a)], J[Z(0x17e)] = t, (0x2d * 0x7f + 0x1440 + -0x2a93, socketEmit_1[Z(0x1d4)])(J);
            const K = {};
            K[Z(0x1de)] = o, K[a0(0x1cc)] = p;
            const L = {};
            L[Z(0x1da)] = Ticket_1[Z(0x1d4)], L['as'] = s[Z(0x1a5)], L[a0(0x1d8)] = [s[a0(0x1a4)]];
            const M = {};
            M[Z(0x1cc)] = p;
            const N = await Message_1[a0(0x1d4)][Z(0x186)]({
                    'where': K,
                    'include': [
                        L,
                        {
                            'model': Message_1[a0(0x1d4)],
                            'as': s[a0(0x1a2)],
                            'include': [s[a0(0x1a4)]],
                            'where': M,
                            'required': ![]
                        }
                    ]
                }), O = {};
            return O[Z(0x1b9)] = N[Z(0x1b9)], O[a0(0x1e3)] = N, O;
        } catch (T) {
            throw new AppError_1[(Z(0x1d4))](s[a0(0x1c2)]);
        }
    };
exports[W(0x1d4)] = EditWhatsAppMessage;