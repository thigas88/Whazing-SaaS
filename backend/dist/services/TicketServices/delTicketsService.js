'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x77)) / (-0x85 * -0x2 + -0x22 + -0xe7) * (-parseInt(y(0x83)) / (-0xb9d + 0x81d + -0x1 * -0x382)) + -parseInt(x(0x8a)) / (0x55d * 0x7 + -0x217d + -0x40b) * (parseInt(y(0xa7)) / (-0x508 * -0x3 + 0xe3d + -0x1d51 * 0x1)) + parseInt(x(0x9a)) / (0x1e23 + -0xc58 * -0x2 + -0x36ce) + -parseInt(y(0x88)) / (-0x61a + -0x1ec1 + 0x24e1) + parseInt(y(0x95)) / (-0x9b9 * 0x1 + -0x2cf + -0x283 * -0x5) * (parseInt(x(0x9f)) / (0xf69 + 0xf43 * 0x1 + -0x1ea4 * 0x1)) + -parseInt(y(0xa2)) / (0x1 * 0x2f + -0x2512 + 0x24ec) + parseInt(y(0xa4)) / (-0x7 * 0x3a4 + -0x295 * 0xe + -0x3dac * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2b2f7 + 0x8bb8e * 0x2 + -0x54fcc));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2706 + 0x3 * 0x3f1 + 0x1ba3 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x89) + A(0x8b)] || function (c) {
    const B = z;
    return c && c[B(0x86)] ? c : { 'default': c };
};
const k = {};
k[A(0xa8)] = !![], Object[z(0x97) + z(0x81)](exports, A(0x86), k), exports[A(0x79) + z(0x7d)] = void (0x66d + 0xe75 + -0x51 * 0x42);
const sequelize_1 = require(z(0x76)), Ticket_1 = __importDefault(require(A(0x8f) + z(0x73))), delTicketsService = async ({
        status: h,
        startDate: i,
        endDate: j,
        whatsappId: l,
        isGroup: m
    }) => {
        const C = A, D = A, n = {
                'tZCRK': function (o, p) {
                    return o(p);
                },
                'JTVwx': function (o, p) {
                    return o(p);
                },
                'RImKB': C(0x7a) + D(0x72),
                'LWTTw': function (o, p) {
                    return o === p;
                },
                'eBMlC': D(0x93) + C(0x85) + C(0x74) + D(0x91) + C(0x8c),
                'GbTtj': D(0x75) + C(0x70) + 'ts'
            };
        try {
            const o = new Date(i), p = new Date(j);
            if (n[D(0x7f)](isNaN, o[C(0x8e)]()) || n[D(0x82)](isNaN, p[D(0x8e)]()))
                throw new Error(C(0xa5) + D(0x87) + D(0x9c) + i + D(0x90) + j);
            const q = {
                    [sequelize_1['Op'][C(0xa6)]]: {
                        [sequelize_1['Op'][D(0xa3)]]: o,
                        [sequelize_1['Op'][C(0x84)]]: p
                    }
                }, r = {};
            r[D(0x71)] = h, r[D(0xa0)] = q, r[D(0x9b)] = l, r[C(0x96)] = m;
            const s = {};
            s[C(0x8d)] = r;
            const t = await Ticket_1[C(0x78)][D(0xa1)](s), u = {};
            u[D(0x7b) + 'nt'] = t, console[D(0x92)](n[D(0x9e)], u), n[D(0x9d)](t, 0x6a + -0x19e5 + -0x1 * -0x197b) && console[C(0x94)](n[C(0x7c)]);
        } catch (v) {
            const w = {};
            w[C(0x99)] = v, console[C(0x99)](n[D(0x98)], w);
            throw new Error(D(0x75) + C(0x70) + D(0x7e) + v[D(0x80)]);
        }
    };
exports[A(0x79) + A(0x7d)] = delTicketsService;
function a() {
    const E = [
        'rado\x20com\x20o',
        'Erro\x20ao\x20ap',
        'sequelize',
        '1182917TYfwON',
        'default',
        'delTickets',
        'Tickets\x20ap',
        'deletedCou',
        'eBMlC',
        'Service',
        'ts:\x20',
        'tZCRK',
        'message',
        'erty',
        'JTVwx',
        '2OaUONj',
        'lte',
        'ket\x20encont',
        '__esModule',
        'ida\x20fornec',
        '7003572DEbnlD',
        '__importDe',
        '6ekBgJD',
        'fault',
        'fornecidos',
        'where',
        'getTime',
        '../../mode',
        '\x20ou\x20',
        's\x20filtros\x20',
        'log',
        'Nenhum\x20tic',
        'warn',
        '12481BRRJXN',
        'isGroup',
        'defineProp',
        'GbTtj',
        'error',
        '3585560ogkAaV',
        'whatsappId',
        'ida:\x20',
        'LWTTw',
        'RImKB',
        '208vLBJYz',
        'createdAt',
        'destroy',
        '1274877nGeQSI',
        'gte',
        '11272710ZvwbLA',
        'Data\x20invál',
        'and',
        '2290268mCNEmV',
        'value',
        'agar\x20ticke',
        'status',
        'agados',
        'ls/Ticket'
    ];
    a = function () {
        return E;
    };
    return a();
}