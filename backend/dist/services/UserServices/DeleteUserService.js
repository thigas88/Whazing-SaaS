'use strict';
const t = b, u = b;
function a() {
    const y = [
        '10482ABKcsD',
        '970848DHTyVm',
        'open',
        'findOne',
        '339056BKpMuq',
        'MCpKH',
        'default',
        '__importDe',
        '__esModule',
        'WzQbe',
        'tickets',
        '1055201ZuHKda',
        '1789572naVRXM',
        'rQoVR',
        'R_FOUND',
        '950ojnFiv',
        'where',
        'mTmce',
        'fault',
        '8008528LzTtLG',
        'rOpenTicke',
        '70mtAbes',
        '../../help',
        '33oWqLkG',
        'ers/Update',
        '$get',
        'length',
        '12ZttiHp',
        'defineProp',
        'DeletedUse',
        '8Woynyg',
        '../../erro',
        '782326eSLQIW',
        'destroy',
        'hyuEg',
        'ls/User',
        '../../mode',
        'value',
        'tsStatus',
        'ERR_NO_USE',
        'rs/AppErro',
        'tenantId',
        'erty'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x213)) / (-0x16a9 + -0x1073 + 0x271d) + parseInt(r(0x1ff)) / (0x1d7a + 0x1167 + -0x2edf) + parseInt(s(0x20a)) / (0x8f6 + 0x955 + -0x1248) * (parseInt(s(0x1f7)) / (0x118 * 0x9 + 0x9d1 * -0x1 + -0x1 * 0x3)) + parseInt(r(0x202)) / (0xb50 + -0x983 * 0x3 + 0x89f * 0x2) * (-parseInt(s(0x1f3)) / (0x26bf + 0x21f1 + -0x48aa)) + -parseInt(s(0x1fe)) / (0x245a + -0x7 * 0x6d + -0x2158) * (parseInt(r(0x211)) / (0xe1b + 0x11 * -0x9b + -0xb * 0x58)) + -parseInt(s(0x1f4)) / (0x2 * 0x1f3 + -0x2620 + 0x2243) * (parseInt(s(0x208)) / (0x17ce + 0x833 + -0x1ff7)) + -parseInt(r(0x206)) / (-0x1 * 0x1e19 + -0x1 * -0x157a + 0x8aa) * (-parseInt(r(0x20e)) / (-0x1 * 0x7f2 + -0x266 * 0x2 + -0xcca * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x124de + 0x100162 + -0x6b225));
var __importDefault = this && this[t(0x1fa) + u(0x205)] || function (c) {
    const v = t;
    return c && c[v(0x1fb)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x79 * -0x1f + -0x185 + 0xb32 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x218)] = !![], Object[u(0x20f) + t(0x1f2)](exports, u(0x1fb), k);
const User_1 = __importDefault(require(t(0x217) + t(0x216))), AppError_1 = __importDefault(require(u(0x212) + u(0x1f0) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(t(0x209) + t(0x20b) + t(0x210) + t(0x207) + u(0x219))), DeleteUserService = async (f, g, h) => {
        const w = u, x = u, i = {};
        i[w(0x1fc)] = function (p, q) {
            return p !== q;
        }, i[x(0x204)] = w(0x21a) + w(0x201), i[x(0x1f8)] = w(0x1fd), i[w(0x200)] = x(0x1f5), i[w(0x215)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[x(0x1f1)] = g;
        const m = {};
        m[x(0x203)] = l;
        const n = await User_1[x(0x1f9)][w(0x1f6)](m);
        if (!n || j[x(0x1fc)](g, n[x(0x1f1)]))
            throw new AppError_1[(x(0x1f9))](j[w(0x204)], 0x234c * -0x1 + -0xa42 * 0x1 + 0x2f22);
        const o = await n[x(0x20c)](j[x(0x1f8)], {
            'where': {
                'status': j[x(0x200)],
                'tenantId': g
            }
        });
        j[x(0x215)](o[w(0x20d)], 0x377 * -0x5 + -0x22ae + 0x3401) && (0x1 * -0x21fe + -0xeba + -0x30b8 * -0x1, UpdateDeletedUserOpenTicketsStatus_1[x(0x1f9)])(o, g, h), await n[w(0x214)]();
    };
exports[u(0x1f9)] = DeleteUserService;