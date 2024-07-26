'use strict';
const x = b, y = b;
function a() {
    const E = [
        'format',
        'xsokd',
        'default',
        '565143tEvecm',
        'jobId',
        'create',
        'Finalized\x20',
        'erty',
        'moment',
        'count',
        'info',
        'sequelize',
        'yZLOW',
        'oices\x20Init',
        'fy\x20Invoice',
        '9261168QXnSVr',
        '10XSyQIi',
        '26cmUlaa',
        'DD/MM/yyyy',
        '../models/',
        'updatedAt',
        '5184756yUbTSR',
        '../utils/l',
        'tenantId',
        'logger',
        '__importDe',
        'dueDate',
        'ZUvtV',
        'asDays',
        'KmIIt',
        'mplete',
        'value',
        'every',
        '2005495DgcClM',
        'repeat',
        'fault',
        '1667085tbRbSG',
        'status',
        'ate',
        'removeOnFa',
        '20OtoSPd',
        'detail',
        'name',
        'rbtha',
        'Verify\x20Inv',
        'findAll',
        'defineProp',
        '__esModule',
        'iated',
        'ogger',
        'open',
        'InvoiceCre',
        'Tenant',
        'jyYbl',
        'Plan',
        'duration',
        'diff',
        'like',
        'FNaDi',
        'error',
        'YYYY-MM-DD',
        'Error\x20Veri',
        'removeOnCo',
        '20272NkthBJ',
        'findByPk',
        'message',
        'Invoices',
        'planId',
        'createdAt',
        'uxVho',
        'map',
        '6861402UVzLVt',
        'UdUgJ'
    ];
    a = function () {
        return E;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1d0)) / (0x912 + -0x474 + 0x1 * -0x49d) * (-parseInt(v(0x1eb)) / (0x213e + -0x29 * 0x29 + -0x1aab)) + -parseInt(v(0x1dd)) / (-0x3 * -0x204 + -0x1 * 0x10eb + -0xae2 * -0x1) * (-parseInt(v(0x202)) / (0x1fb1 * -0x1 + 0x162 * 0x1b + -0x83 * 0xb)) + -parseInt(w(0x1fb)) / (-0x107 * -0xb + 0x2665 * 0x1 + 0x1b * -0x1d7) + -parseInt(v(0x1d8)) / (0x225f + -0x2 * 0x605 + -0x164f * 0x1) + -parseInt(v(0x1fe)) / (0x1e9f + -0xd * 0xbf + -0x14e5) + parseInt(w(0x1e9)) / (0xd4b + -0x1c7b + 0x8 * 0x1e7) + -parseInt(w(0x1ef)) / (0x1 * -0xc67 + -0x15aa + 0x221a) * (-parseInt(v(0x1ea)) / (0x35 * 0xb3 + 0x695 + -0x2b9a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd99f * -0x6 + 0x1f9 * 0xb8 + -0x4 * -0xc55b));
var __importDefault = this && this[x(0x1f3) + x(0x1fd)] || function (c) {
    const z = x;
    return c && c[z(0x209)] ? c : { 'default': c };
};
const k = {};
k[y(0x1f9)] = !![], Object[y(0x208) + x(0x1e1)](exports, x(0x209), k);
const Tenant_1 = __importDefault(require(y(0x1ed) + y(0x1c5))), Plan_1 = __importDefault(require(x(0x1ed) + y(0x1c7))), logger_1 = require(x(0x1f0) + x(0x20b)), moment_1 = __importDefault(require(y(0x1e2))), Invoices_1 = __importDefault(require(y(0x1ed) + y(0x1d3))), sequelize_1 = require(x(0x1e5)), l = {};
l[y(0x1fa)] = (-0x2153 + -0x923 * -0x3 + -0x626 * -0x1) * (-0xc3c + -0x1257 + -0x227b * -0x1);
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x74d + 0xdc + -0x2 * 0x332);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[x(0x1cf) + y(0x1f8)] = !![], m[x(0x201) + 'il'] = ![], m[x(0x1de)] = x(0x20d) + x(0x200), m[x(0x1fc)] = l, exports[y(0x1dc)] = {
    'key': y(0x20d) + y(0x200),
    'options': m,
    async 'handle'() {
        const A = y, B = y, e = {};
        e[A(0x1d6)] = A(0x1ec), e[B(0x1d9)] = function (g, h) {
            return g < h;
        }, e[B(0x205)] = function (g, h) {
            return g + h;
        }, e[B(0x1db)] = B(0x1cd), e[A(0x1cb)] = function (g, h) {
            return g === h;
        }, e[A(0x1e6)] = B(0x20c), e[A(0x1c6)] = A(0x206) + B(0x1e7) + B(0x20a), e[A(0x1f5)] = A(0x1e0) + A(0x1d3), e[B(0x1f7)] = A(0x1ce) + A(0x1e8) + 's';
        const f = e;
        try {
            logger_1[A(0x1f2)][A(0x1e4)](f[B(0x1c6)]);
            const g = await Tenant_1[B(0x1dc)][B(0x207)]();
            g[A(0x1d7)](async h => {
                const C = A, D = B, {dueDate: i} = h, j = (0xfa9 * 0x1 + 0x2232 + -0x31db, moment_1[C(0x1dc)])(i)[D(0x1da)](), n = (-0x118 + 0xfd8 + -0xec0, moment_1[C(0x1dc)])()[C(0x1da)](), o = (0x4c9 + -0x1313 * 0x1 + 0x1f * 0x76, moment_1[D(0x1dc)])((-0x1d6 + -0x13 * 0xfa + 0x1464, moment_1[D(0x1dc)])())[D(0x1da)](f[D(0x1d6)]), p = (-0x174f + 0x1 * -0xc75 + 0x54 * 0x6d, moment_1[D(0x1dc)])(i)[D(0x1da)](f[D(0x1d6)]), q = (0x105 * -0x21 + -0x17a3 + 0x3 * 0x1318, moment_1[C(0x1dc)])(p, f[C(0x1d6)])[C(0x1c9)]((-0x8e4 + 0x9 * 0x416 + -0x1be2, moment_1[C(0x1dc)])(o, f[C(0x1d6)])), r = moment_1[C(0x1dc)][D(0x1c8)](q)[D(0x1f6)]();
                if (f[D(0x1d9)](r, -0x2296 + -0x196f + 0x3c19)) {
                    const s = await Plan_1[D(0x1dc)][D(0x1d1)](h[D(0x1d4)]), t = await Invoices_1[D(0x1dc)][C(0x1e3)]({
                            'where': {
                                'tenantId': h['id'],
                                'dueDate': { [sequelize_1['Op'][D(0x1ca)]]: f[D(0x205)]((-0x23ba + 0x1c83 + 0x1 * 0x737, moment_1[C(0x1dc)])(i)[C(0x1da)](f[C(0x1db)]), '%') }
                            }
                        });
                    if (f[C(0x1cb)](t, -0x47f * -0x1 + -0x1 * 0x105b + 0x2c * 0x45)) {
                        const u = {};
                        u[C(0x203)] = s[D(0x204)], u[C(0x1ff)] = f[D(0x1e6)], u[C(0x1f9)] = s[D(0x1f9)], u[D(0x1ee)] = n, u[C(0x1d5)] = n, u[C(0x1f4)] = j, u[C(0x1f1)] = h['id'], await Invoices_1[C(0x1dc)][D(0x1df)](u);
                    }
                }
            }), logger_1[B(0x1f2)][B(0x1e4)](f[B(0x1f5)]);
        } catch (h) {
            const i = {};
            i[B(0x1d2)] = f[A(0x1f7)], i[B(0x1cc)] = h, logger_1[A(0x1f2)][A(0x1cc)](i);
            throw new Error(h);
        }
    }
};