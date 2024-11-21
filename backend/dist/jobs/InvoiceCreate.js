'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd6d + 0x1a3 * -0x6 + 0x17f3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xb5)) / (0xd4a + -0x201 + -0xb48) + -parseInt(v(0xb8)) / (-0x243f + 0x1 * 0x2221 + 0x220) + -parseInt(w(0xc9)) / (-0x1971 + -0x1e8 + 0x1b5c) * (parseInt(v(0xce)) / (0x3b * -0x3d + 0x2699 + -0x1886 * 0x1)) + parseInt(w(0xcc)) / (-0x1509 + 0x2eb + -0x1 * -0x1223) + -parseInt(v(0xe4)) / (0x833 + -0x552 * 0x7 + 0x1d11) * (parseInt(w(0xb7)) / (0x257a + 0x1374 + -0x38e7)) + -parseInt(v(0xc6)) / (0x99d + 0x83 * -0x2e + 0x18d * 0x9) * (parseInt(w(0xd5)) / (-0x20aa + -0xd47 * -0x1 + 0x136c)) + -parseInt(w(0xbf)) / (0x2d * 0x8 + -0x731 + -0x5d3 * -0x1) * (-parseInt(w(0xcf)) / (-0x3 * 0xad + 0x1 * -0x3fa + 0x60c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * 0x19ab9 + 0x964ff * -0x1 + 0xa7 * 0x108a));
var __importDefault = this && this[x(0xfc) + y(0xf4)] || function (c) {
    const z = x;
    return c && c[z(0xd1)] ? c : { 'default': c };
};
const k = {};
k[y(0xd7)] = !![], Object[x(0xd6) + y(0xf0)](exports, x(0xd1), k);
const Tenant_1 = __importDefault(require(x(0xd2) + y(0xb6))), Plan_1 = __importDefault(require(y(0xd2) + y(0xc2))), logger_1 = require(y(0xdb) + x(0xe8)), moment_1 = __importDefault(require(x(0xca))), Invoices_1 = __importDefault(require(y(0xd2) + x(0xda))), sequelize_1 = require(x(0xf2)), l = {};
l[x(0xb9)] = (0x1791 * 0x1 + -0x10a4 + -0x6e8) * (-0x1 * -0x4b5 + 0x919 + -0x182 * 0x9) * (-0xc59 + -0x1f50 + 0x2f91);
const m = {};
function a() {
    const E = [
        'Invoices',
        '../utils/l',
        'ymmiy',
        'name',
        'planId',
        'count',
        'jobId',
        'tenantId',
        'Verify\x20Inv',
        'GdRpL',
        '2160822KplnMp',
        'oices\x20Init',
        'repeat',
        'info',
        'ogger',
        'removeOnFa',
        'findAll',
        'diff',
        'format',
        'error',
        'message',
        'findByPk',
        'erty',
        'dueDate',
        'sequelize',
        'YYYY-MM-DD',
        'fault',
        'status',
        'removeOnCo',
        'updatedAt',
        'xeyUP',
        'ate',
        'map',
        'RmZHk',
        '__importDe',
        'DD/MM/yyyy',
        'eymPB',
        '635296hbxEOq',
        'Tenant',
        '7GTWdEM',
        '474570wNgQuK',
        'every',
        'Finalized\x20',
        'asDays',
        'default',
        'duration',
        'Error\x20Veri',
        '20CCbYiz',
        'wRNqV',
        'open',
        'Plan',
        'mplete',
        'like',
        'ycEoF',
        '165656OtCzKE',
        'createdAt',
        'InvoiceCre',
        '829275YqhskA',
        'moment',
        'iated',
        '1770625btXEZJ',
        'akYru',
        '8TmyPoi',
        '12046628xvWQHW',
        'fy\x20Invoice',
        '__esModule',
        '../models/',
        'logger',
        'detail',
        '153HIJpQV',
        'defineProp',
        'value',
        'create',
        'VxBeo'
    ];
    a = function () {
        return E;
    };
    return a();
}
m[y(0xf6) + x(0xc3)] = !![], m[y(0xe9) + 'il'] = ![], m[y(0xe0)] = y(0xc8) + x(0xf9), m[x(0xe6)] = l, exports[y(0xbc)] = {
    'key': x(0xc8) + x(0xf9),
    'options': m,
    async 'handle'() {
        const A = x, B = x, e = {};
        e[A(0xe3)] = B(0xfd), e[B(0xf8)] = function (g, h) {
            return g < h;
        }, e[A(0xdc)] = function (g, h) {
            return g + h;
        }, e[B(0xc5)] = A(0xf3), e[A(0xd9)] = function (g, h) {
            return g === h;
        }, e[B(0xfb)] = B(0xc1), e[B(0xc0)] = A(0xe2) + A(0xe5) + B(0xcb), e[B(0xcd)] = A(0xba) + B(0xda), e[A(0xb4)] = A(0xbe) + B(0xd0) + 's';
        const f = e;
        try {
            logger_1[A(0xd3)][A(0xe7)](f[A(0xc0)]);
            const g = await Tenant_1[B(0xbc)][B(0xea)]();
            g[A(0xfa)](async h => {
                const C = A, D = B, {dueDate: i} = h, j = (-0x2 * -0x3db + 0x283 * -0x2 + -0x2b0, moment_1[C(0xbc)])(i)[C(0xec)](), n = (0x8b7 + 0x11bc + -0x1a73 * 0x1, moment_1[D(0xbc)])()[C(0xec)](), o = (-0x303 + 0x78a + -0x487, moment_1[D(0xbc)])((0x79f + -0x1 * -0x119e + -0x193d, moment_1[D(0xbc)])())[D(0xec)](f[D(0xe3)]), p = (-0x2481 + -0x1 * -0x2441 + 0x40, moment_1[D(0xbc)])(i)[D(0xec)](f[D(0xe3)]), q = (-0xea6 + -0x3ab * -0x7 + -0x1 * 0xb07, moment_1[C(0xbc)])(p, f[D(0xe3)])[C(0xeb)]((0x1239 + 0x7 * -0x313 + -0x34c * -0x1, moment_1[D(0xbc)])(o, f[C(0xe3)])), r = moment_1[D(0xbc)][C(0xbd)](q)[C(0xbb)]();
                if (f[C(0xf8)](r, -0x1cc2 + -0x1e70 + 0x3b46)) {
                    const s = await Plan_1[C(0xbc)][D(0xef)](h[C(0xde)]), t = await Invoices_1[D(0xbc)][C(0xdf)]({
                            'where': {
                                'tenantId': h['id'],
                                'dueDate': { [sequelize_1['Op'][D(0xc4)]]: f[D(0xdc)]((0x1 * -0xaee + 0x3 * -0x66b + -0x1 * -0x1e2f, moment_1[C(0xbc)])(i)[D(0xec)](f[C(0xc5)]), '%') }
                            }
                        });
                    if (f[D(0xd9)](t, -0x11a0 + -0x63b * -0x2 + 0x52a)) {
                        const u = {};
                        u[C(0xd4)] = s[D(0xdd)], u[C(0xf5)] = f[C(0xfb)], u[D(0xd7)] = s[D(0xd7)], u[C(0xf7)] = n, u[C(0xc7)] = n, u[D(0xf1)] = j, u[C(0xe1)] = h['id'], await Invoices_1[D(0xbc)][D(0xd8)](u);
                    }
                }
            }), logger_1[B(0xd3)][A(0xe7)](f[B(0xcd)]);
        } catch (h) {
            const i = {};
            i[B(0xee)] = f[A(0xb4)], i[B(0xed)] = h, logger_1[B(0xd3)][B(0xed)](i);
            throw new Error(h);
        }
    }
};