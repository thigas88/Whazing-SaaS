'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x1f0)) / (-0xbf6 + 0x2276 + -0x167f) * (-parseInt(y(0x1dd)) / (0x26 * -0x35 + -0x256 + 0xa36 * 0x1)) + parseInt(y(0x1d6)) / (-0x2675 + 0x43 * 0x17 + 0x2073) + -parseInt(x(0x1d9)) / (-0x2451 + 0x120e * -0x1 + -0x11 * -0x333) + -parseInt(x(0x1d4)) / (0xe93 + 0x4fd * -0x6 + 0xf60) + -parseInt(x(0x1e0)) / (0x5 * 0x3ff + 0x259 * -0x1 + -0x119c) * (parseInt(x(0x1de)) / (0xa55 + 0x17f8 * -0x1 + 0xdaa)) + -parseInt(x(0x1e2)) / (-0x40f * 0x5 + -0x2 * 0xf31 + 0x10e7 * 0x3) * (parseInt(x(0x1d8)) / (-0xb3f * -0x3 + 0xc64 + -0x127 * 0x28)) + parseInt(x(0x1ec)) / (0x362 * 0xa + 0x1 * 0x110c + -0x1e2 * 0x1b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x220 * 0x495 + -0x38073 + 0x78 * 0x2b29));
function a() {
    const G = [
        'isDeleted',
        '8TdJKSC',
        'JeJya',
        'findAll',
        'defineProp',
        'where',
        'importOldM',
        '../../mode',
        'value',
        'yyyy-MM-dd',
        'toJSON',
        '17073800RSJZOY',
        'fault',
        'date-fns',
        'importRece',
        '4gIjjrm',
        'erty',
        '__importDe',
        'ls/Whatsap',
        'default',
        '160910nflklM',
        'map',
        '262950EIrWYN',
        'format',
        '6700905WOczPA',
        '3068676rzrctJ',
        '__esModule',
        'tenantId',
        'ntMessages',
        '254252eegZhx',
        '2109527JtcMAm',
        'essages',
        '6FLxUfR'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[z(0x1f2) + A(0x1ed)] || function (c) {
    const B = A;
    return c && c[B(0x1da)] ? c : { 'default': c };
};
const w = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x512 * -0x5 + -0x419 * -0x3 + 0x4f6 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
w[z(0x1e9)] = !![], Object[z(0x1e5) + z(0x1f1)](exports, A(0x1da), w);
const Whatsapp_1 = __importDefault(require(z(0x1e8) + z(0x1f3) + 'p')), date_fns_1 = require(A(0x1ee)), ListWhatsAppsService = async f => {
        const C = z, D = z, g = {};
        g[C(0x1e3)] = C(0x1ea);
        const h = g, i = {};
        i[D(0x1db)] = f, i[C(0x1e1)] = ![];
        const j = {};
        j[C(0x1e6)] = i;
        const k = await Whatsapp_1[C(0x1d3)][D(0x1e4)](j), l = k[C(0x1d5)](m => {
                const E = D, F = D, n = m[E(0x1e7) + F(0x1df)] ? (0xb * 0x94 + -0x1 * 0x1be6 + -0x72e * -0x3, date_fns_1[F(0x1d7)])(new Date(m[E(0x1e7) + F(0x1df)]), h[E(0x1e3)]) : null, o = m[E(0x1ef) + F(0x1dc)] ? (-0x352 * 0x8 + 0x26c3 * -0x1 + 0x4153, date_fns_1[E(0x1d7)])(new Date(m[F(0x1ef) + E(0x1dc)]), h[F(0x1e3)]) : null;
                return {
                    ...m[F(0x1eb)](),
                    'importOldMessages': n,
                    'importRecentMessages': o
                };
            });
        return l;
    };
exports[z(0x1d3)] = ListWhatsAppsService;