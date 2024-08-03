'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x6b)) / (-0x1 * -0x24df + -0x115 * -0x1 + -0x25f3) + -parseInt(u(0x81)) / (-0x16a2 + 0x10f * 0x6 + 0x1a1 * 0xa) + parseInt(v(0x73)) / (0x2452 + -0x1df6 + -0x659) * (parseInt(v(0x7c)) / (-0x1 * 0x1202 + 0xb1c + -0xb1 * -0xa)) + -parseInt(u(0x83)) / (0x1e65 + 0x3 * 0x5f + 0x3 * -0xa7f) * (parseInt(u(0x69)) / (-0x202c + 0x248b + 0x459 * -0x1)) + -parseInt(u(0x74)) / (-0x1a73 + -0x2d7 * -0x5 + -0x1c1 * -0x7) * (-parseInt(v(0x7b)) / (0x1373 * -0x1 + -0x2515 + -0x389 * -0x10)) + parseInt(v(0x8f)) / (0x19e * 0x1 + -0x25d8 + -0x1 * -0x2443) * (parseInt(v(0x7f)) / (-0x1250 * -0x2 + 0x4dd + -0x2973)) + -parseInt(v(0x66)) / (0xaa2 + 0x5b * 0x5d + -0x2ba6) * (parseInt(u(0x7e)) / (-0x224 * 0x1 + 0x2275 + 0x2045 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x70d31 + 0x8417c + -0x362 * 0x55c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x79 * 0x40 + -0xe * -0x2a6 + 0x1 * -0x670);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0x8d) + w(0x70)] || function (c) {
    const y = w;
    return c && c[y(0x71)] ? c : { 'default': c };
};
const k = {};
k[x(0x75)] = !![], Object[w(0x80) + x(0x8c)](exports, w(0x71), k);
const Contact_1 = __importDefault(require(w(0x8e) + x(0x87))), AppError_1 = __importDefault(require(x(0x86) + x(0x64) + 'r')), Ticket_1 = __importDefault(require(x(0x8e) + x(0x7d))), socketEmit_1 = __importDefault(require(x(0x6d) + x(0x72) + w(0x8a))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = w, A = w, l = {};
        l[z(0x78)] = z(0x6c) + z(0x7a), l[A(0x90)] = A(0x67) + z(0x6e) + A(0x6f), l[z(0x82)] = A(0x79) + z(0x85);
        const m = l, n = {};
        n['id'] = i, n[A(0x6a)] = j;
        const o = {};
        o[A(0x84)] = n;
        const p = await Contact_1[A(0x77)][A(0x88)](o);
        if (!p)
            throw new AppError_1[(A(0x77))](m[z(0x78)], -0x1 * -0x1fd + 0x2e7 * 0xb + -0x2056);
        const q = {};
        q[A(0x89)] = i;
        const r = {};
        r[z(0x84)] = q;
        const s = await Ticket_1[z(0x77)][z(0x76)](r);
        if (s)
            throw new AppError_1[(A(0x77))](m[z(0x90)], -0x1e8 * 0xb + 0x89f * 0x3 + -0x351);
        await p[A(0x65)]();
        const t = {};
        t[z(0x6a)] = j, t[z(0x8b)] = m[A(0x82)], t[A(0x68)] = p, (0x21d + -0xfe7 + 0xdca, socketEmit_1[z(0x77)])(t);
    };
exports[x(0x77)] = DeleteContactService;
function a() {
    const B = [
        'zjlUW',
        'contact:de',
        'TACT_FOUND',
        '680584uAjDQu',
        '16NvPzwU',
        'ls/Ticket',
        '10513464gDuGBF',
        '7875870xTZWRb',
        'defineProp',
        '464274xeqTrB',
        'avrrY',
        '4948915UhTCiJ',
        'where',
        'lete',
        '../../erro',
        'ls/Contact',
        'findOne',
        'contactId',
        'Emit',
        'type',
        'erty',
        '__importDe',
        '../../mode',
        '9FkhQzV',
        'zPlNt',
        'rs/AppErro',
        'destroy',
        '22JZVMoe',
        'ERR_CONTAC',
        'payload',
        '6OTANDZ',
        'tenantId',
        '1394736GNeqXX',
        'ERR_NO_CON',
        '../../help',
        'T_TICKETS_',
        'REGISTERED',
        'fault',
        '__esModule',
        'ers/socket',
        '893127okFDPo',
        '28TGjqEk',
        'value',
        'count',
        'default'
    ];
    a = function () {
        return B;
    };
    return a();
}