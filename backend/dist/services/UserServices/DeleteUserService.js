'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a3 + 0x47a * 0x1 + -0x1bc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
function a() {
    const y = [
        '408916PHgTLU',
        'where',
        '285309nFSkoR',
        '../../help',
        'defineProp',
        'value',
        'rOpenTicke',
        'dBpVU',
        'fault',
        'destroy',
        '44632BNrCnj',
        'wBhsE',
        'tenantId',
        'findOne',
        'tickets',
        'default',
        '3DzXIjY',
        'tsStatus',
        'rs/AppErro',
        'ers/Update',
        'BGvvG',
        '40TUynVD',
        '90fpIdRk',
        '../../mode',
        'GALef',
        'erty',
        'ls/User',
        'length',
        'DeletedUse',
        'ERR_NO_USE',
        '__esModule',
        '1828310SbWryl',
        'uTVRQ',
        '322VmGfEJ',
        '../../erro',
        '364111XMoorM',
        '204cXiVmp',
        '5774GVfxvg',
        '85554ZaBKgY',
        'R_FOUND',
        'open',
        '__importDe',
        '$get'
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
            const f = -parseInt(r(0x128)) / (0x581 + -0x2533 + 0xa91 * 0x3) * (parseInt(s(0x138)) / (0x10fe + 0x1a9 * -0x7 + -0x55d)) + parseInt(r(0x123)) / (-0x16e1 + -0xc * -0x6d + 0x11c8) * (parseInt(s(0x13e)) / (-0x63d * -0x5 + 0x1bb * -0xa + -0xddf)) + -parseInt(r(0x129)) / (0x26 * 0x1d + 0x1 * 0x162 + -0x5ab) * (-parseInt(r(0x139)) / (-0x110 + 0x293 * 0x1 + 0x17d * -0x1)) + parseInt(r(0x134)) / (-0x238d * 0x1 + -0xc9a + 0x1 * 0x302e) * (parseInt(s(0x11d)) / (0x1 * 0x14c2 + 0x6d * 0xa + 0x63f * -0x4)) + parseInt(s(0x140)) / (-0x36 * 0x1f + -0x9 * -0x337 + -0x165c) + parseInt(s(0x132)) / (0x13e * 0x13 + -0x78e + -0x1002) + parseInt(s(0x136)) / (0x2e7 * -0x6 + 0x2429 + -0x12b4) * (-parseInt(r(0x137)) / (0xe45 + 0x13e6 + -0x221f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c658 + 0x5 * -0x50a2 + -0x21e06 * -0x1));
var __importDefault = this && this[t(0x13c) + t(0x11b)] || function (c) {
    const v = t;
    return c && c[v(0x131)] ? c : { 'default': c };
};
const k = {};
k[t(0x143)] = !![], Object[u(0x142) + t(0x12c)](exports, t(0x131), k);
const User_1 = __importDefault(require(u(0x12a) + u(0x12d))), AppError_1 = __importDefault(require(u(0x135) + t(0x125) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(u(0x141) + u(0x126) + t(0x12f) + t(0x144) + t(0x124))), DeleteUserService = async (f, g, h) => {
        const w = t, x = u, i = {};
        i[w(0x145)] = function (p, q) {
            return p !== q;
        }, i[x(0x133)] = w(0x130) + w(0x13a), i[x(0x127)] = x(0x121), i[w(0x11e)] = x(0x13b), i[x(0x12b)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[w(0x11f)] = g;
        const m = {};
        m[w(0x13f)] = l;
        const n = await User_1[x(0x122)][w(0x120)](m);
        if (!n || j[x(0x145)](g, n[w(0x11f)]))
            throw new AppError_1[(w(0x122))](j[x(0x133)], 0x7 * -0x4f0 + 0x1167 + 0x12bd);
        const o = await n[w(0x13d)](j[w(0x127)], {
            'where': {
                'status': j[x(0x11e)],
                'tenantId': g
            }
        });
        j[w(0x12b)](o[w(0x12e)], -0x1ab0 + 0x1d23 + -0x273) && (0x232b * 0x1 + 0x2103 + -0x442e, UpdateDeletedUserOpenTicketsStatus_1[x(0x122)])(o, g, h), await n[x(0x11c)]();
    };
exports[t(0x122)] = DeleteUserService;