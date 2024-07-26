'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x92)) / (-0xe2 * 0x1d + -0x1 * -0x1355 + 0x646) + -parseInt(s(0x8c)) / (0x26 * 0x26 + -0xcce * -0x2 + -0x1f3e) * (-parseInt(s(0x7c)) / (0x18df + 0x1 * 0x1de + -0x1aba)) + -parseInt(r(0xa0)) / (-0x79d + -0x3c3 * 0x1 + 0xb64) * (-parseInt(r(0x8a)) / (-0x34 * -0x8e + 0xc * -0xde + 0x126b * -0x1)) + parseInt(s(0x83)) / (-0x212e + -0xe77 + 0x2fab) * (-parseInt(r(0x9a)) / (-0xdbe * -0x1 + -0xc10 + -0x1a7)) + -parseInt(r(0x8f)) / (0xf67 * 0x1 + 0x2263 * -0x1 + 0x982 * 0x2) * (parseInt(s(0x99)) / (-0x3 * -0xa7c + -0x31f + 0x4 * -0x713)) + parseInt(r(0x88)) / (-0x1 * 0x1385 + 0x16 * 0xa3 + 0x1 * 0x58d) * (parseInt(r(0xa1)) / (-0x29 * -0x25 + -0x235 + -0x3ad * 0x1)) + -parseInt(s(0x89)) / (0x10ac + 0x5f * -0x1a + -0x6fa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1743c9 * -0x1 + 0x10a3 * -0x9d + 0x1 * 0x2d809b));
var __importDefault = this && this[t(0xa3) + u(0x80)] || function (c) {
    const v = u;
    return c && c[v(0x86)] ? c : { 'default': c };
};
const k = {};
k[t(0x79)] = !![], Object[u(0x8d) + t(0x7e)](exports, u(0x86), k);
const User_1 = __importDefault(require(t(0x84) + u(0x91))), AppError_1 = __importDefault(require(u(0x81) + u(0x7a) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(t(0x93) + u(0x96) + u(0x82) + t(0x9c) + u(0x85))), DeleteUserService = async (f, g, h) => {
        const w = t, x = t, i = {};
        i[w(0x7b)] = function (p, q) {
            return p !== q;
        }, i[x(0x8b)] = x(0x87) + x(0x90), i[x(0x9b)] = x(0x9d), i[w(0x7d)] = w(0x94), i[w(0xa2)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[x(0x97)] = g;
        const m = {};
        m[w(0x98)] = l;
        const n = await User_1[w(0x95)][w(0x9e)](m);
        if (!n || j[w(0x7b)](g, n[x(0x97)]))
            throw new AppError_1[(x(0x95))](j[w(0x8b)], -0x13ea + -0x15fe + -0x15be * -0x2);
        const o = await n[w(0x8e)](j[w(0x9b)], {
            'where': {
                'status': j[w(0x7d)],
                'tenantId': g
            }
        });
        j[w(0xa2)](o[x(0x7f)], 0x1f32 * 0x1 + -0x23e9 * -0x1 + -0x431b) && (0x1ccd + -0x121f + -0xaae, UpdateDeletedUserOpenTicketsStatus_1[w(0x95)])(o, g, h), await n[w(0x9f)]();
    };
function a() {
    const y = [
        '5jmqNWC',
        'dhoJo',
        '149252fodOWr',
        'defineProp',
        '$get',
        '1619768JPUMro',
        'R_FOUND',
        'ls/User',
        '1142269jTNcqI',
        '../../help',
        'open',
        'default',
        'ers/Update',
        'tenantId',
        'where',
        '27PJBrfX',
        '1260NmNcaR',
        'TmyVu',
        'rOpenTicke',
        'tickets',
        'findOne',
        'destroy',
        '5021812NEwVFi',
        '271227EHafBr',
        'rvWRA',
        '__importDe',
        'value',
        'rs/AppErro',
        'qsJJx',
        '6uJyexs',
        'WZpGq',
        'erty',
        'length',
        'fault',
        '../../erro',
        'DeletedUse',
        '6858MxwJcm',
        '../../mode',
        'tsStatus',
        '__esModule',
        'ERR_NO_USE',
        '310jlwXKi',
        '20513868bHQORy'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x77 * -0x24 + 0xb55 + -0x5e0 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[u(0x95)] = DeleteUserService;