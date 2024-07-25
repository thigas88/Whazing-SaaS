'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x163)) / (-0xb * -0x12a + -0x11ac + 0x4df) * (parseInt(r(0x15c)) / (-0xd * 0x292 + 0x21a2 + -0x36)) + -parseInt(r(0x16d)) / (0x5b5 + -0x1 * -0x1966 + -0x1f18) + -parseInt(r(0x17b)) / (0x1 * -0xfdd + -0x551 * -0x1 + 0xa90) * (-parseInt(r(0x177)) / (0xd * 0x82 + -0x9b8 + 0x323)) + -parseInt(r(0x17d)) / (-0x2 * 0x67b + -0xec6 + -0x13 * -0x176) * (-parseInt(r(0x169)) / (0x3 * 0x10b + -0x14b * -0x1a + 0x28 * -0xeb)) + -parseInt(s(0x178)) / (0x17ca + 0x11b * 0x22 + -0x3d58) * (parseInt(r(0x165)) / (0x232b + -0x16dc + 0x623 * -0x2)) + parseInt(r(0x180)) / (0x9aa + -0x21 * -0x6c + -0x178c) + parseInt(s(0x175)) / (-0x115a + 0xbf + 0x10a6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x7af3c + 0x4af1 * 0x46 + -0xd7067));
var __importDefault = this && this[t(0x174) + u(0x182)] || function (c) {
    const v = t;
    return c && c[v(0x167)] ? c : { 'default': c };
};
const k = {};
k[t(0x161)] = !![], Object[u(0x166) + t(0x15b)](exports, t(0x167), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0x2ff + 0x1373 * 0x1 + -0x31f * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const User_1 = __importDefault(require(u(0x16b) + u(0x172))), AppError_1 = __importDefault(require(t(0x159) + t(0x15a) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(u(0x16f) + u(0x160) + u(0x164) + u(0x162) + t(0x173))), DeleteUserService = async (f, g, h) => {
        const w = t, x = u, i = {};
        i[w(0x17a)] = function (p, q) {
            return p !== q;
        }, i[w(0x16a)] = x(0x15f) + x(0x15e), i[w(0x176)] = w(0x17c), i[w(0x17f)] = w(0x181), i[x(0x17e)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[x(0x16c)] = g;
        const m = {};
        m[x(0x168)] = l;
        const n = await User_1[w(0x171)][w(0x179)](m);
        if (!n || j[x(0x17a)](g, n[w(0x16c)]))
            throw new AppError_1[(x(0x171))](j[w(0x16a)], 0x27c * -0x3 + -0x1 * 0xb72 + 0x2 * 0xa3d);
        const o = await n[w(0x170)](j[x(0x176)], {
            'where': {
                'status': j[x(0x17f)],
                'tenantId': g
            }
        });
        j[w(0x17e)](o[w(0x16e)], -0x46 * 0x79 + -0x11bb + 0x1 * 0x32d1) && (0x5 * 0x176 + 0x1645 + -0x1d93, UpdateDeletedUserOpenTicketsStatus_1[x(0x171)])(o, g, h), await n[x(0x15d)]();
    };
function a() {
    const y = [
        '11070697LUsSZx',
        'GbMXt',
        '12445xQbEmk',
        '16FRhAvF',
        'findOne',
        'epZtE',
        '1908AETbez',
        'tickets',
        '60HbNyvW',
        'NQGmJ',
        'HQuqs',
        '18726770aePyZa',
        'open',
        'fault',
        '../../erro',
        'rs/AppErro',
        'erty',
        '589938FRCbUQ',
        'destroy',
        'R_FOUND',
        'ERR_NO_USE',
        'ers/Update',
        'value',
        'rOpenTicke',
        '4LRZkbJ',
        'DeletedUse',
        '3250323xWVYVx',
        'defineProp',
        '__esModule',
        'where',
        '396130fswVvW',
        'lLWOV',
        '../../mode',
        'tenantId',
        '5292804IohZhR',
        'length',
        '../../help',
        '$get',
        'default',
        'ls/User',
        'tsStatus',
        '__importDe'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[u(0x171)] = DeleteUserService;