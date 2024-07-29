'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x74)) / (-0x1f39 + 0xb * 0x13 + 0x1e69) * (parseInt(w(0x78)) / (0x17ec + -0x22f8 + -0x5 * -0x236)) + -parseInt(w(0x87)) / (0x1fd4 + -0x4f * -0x2e + 0x1 * -0x2e03) + -parseInt(w(0x6e)) / (0x1557 + -0x1240 + -0x313) * (parseInt(w(0x77)) / (0x796 + -0x61f + 0x2 * -0xb9)) + parseInt(v(0x7e)) / (-0x42c + 0x1 * -0x594 + -0x12 * -0x8b) * (parseInt(v(0x6a)) / (-0xbcb + -0x18bd + 0x248f)) + -parseInt(w(0x7b)) / (-0x216b + 0x2 * -0x250 + 0x2613) * (parseInt(v(0x89)) / (-0x15a3 + -0x44e * -0x7 + 0x6 * -0x169)) + -parseInt(w(0x72)) / (-0x1df2 + 0x2fa * -0x8 + -0x1ae6 * -0x2) * (parseInt(w(0x82)) / (0xc7b + -0x3a7 + 0x8c9 * -0x1)) + parseInt(v(0x85)) / (-0x8c6 * 0x4 + -0x119a + 0x9d * 0x56) * (parseInt(v(0x7d)) / (-0xb * -0x52 + -0xb * -0x296 + -0x1feb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xabd5e + -0x8a331 + 0x1f2bf2));
var __importDefault = this && this[x(0x8d) + x(0x7f)] || function (c) {
    const z = y;
    return c && c[z(0x79)] ? c : { 'default': c };
};
const k = {};
k[x(0x6d)] = !![], Object[x(0x83) + x(0x8b)](exports, x(0x79), k);
const AppError_1 = __importDefault(require(y(0x8a) + y(0x70) + 'r')), Group_1 = __importDefault(require(x(0x6b) + y(0x81))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = y, B = x, j = {};
        j[A(0x8c)] = B(0x86), j[A(0x73)] = A(0x7a), j[B(0x84)] = A(0x80), j[B(0x6f)] = A(0x75) + A(0x7c);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[A(0x71)] = p;
        const r = {};
        r[A(0x6c)] = q, r[B(0x8f)] = [
            'id',
            l[A(0x8c)],
            l[A(0x73)],
            l[B(0x84)]
        ];
        const s = await Group_1[B(0x88)][B(0x76)](r);
        if (!s)
            throw new AppError_1[(B(0x88))](l[A(0x6f)], -0xad3 + -0x4f + 0xcb6);
        const t = {};
        t[A(0x86)] = m, t[A(0x7a)] = n, t[B(0x80)] = o, await s[A(0x8e)](t);
        const u = {};
        return u[B(0x8f)] = [
            'id',
            l[B(0x8c)],
            l[B(0x73)],
            l[A(0x84)]
        ], await s[B(0x69)](u), s;
    };
function a() {
    const C = [
        'rs/AppErro',
        'tenantId',
        '464630qAJSpo',
        'AxvOv',
        '1DqJedw',
        'ERR_NO_GRO',
        'findOne',
        '5PWlGMB',
        '274642yTOCGK',
        '__esModule',
        'isActive',
        '1312888vSvqRc',
        'UP_FOUND',
        '244543ijybTD',
        '22548FzBKpa',
        'fault',
        'userId',
        'ls/Group',
        '341JNyfjG',
        'defineProp',
        'xKCGd',
        '2340qGnbPt',
        'group',
        '1275666ogZxZi',
        'default',
        '9EkEJmv',
        '../../erro',
        'erty',
        'EvVqN',
        '__importDe',
        'update',
        'attributes',
        'reload',
        '259DSfdgx',
        '../../mode',
        'where',
        'value',
        '4567452NYkWSV',
        'UuOMZ'
    ];
    a = function () {
        return C;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x105e + 0x18bb + 0xda * -0x43);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[x(0x88)] = UpdateGroupService;