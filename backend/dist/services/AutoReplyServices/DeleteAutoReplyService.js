'use strict';
const u = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1606 * 0x1 + -0x71c + 0x1e39 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x128)) / (0xe7a + 0x265a + 0x34d3 * -0x1) * (-parseInt(s(0x132)) / (0x1 * -0x163e + -0x41 + -0x1681 * -0x1)) + parseInt(s(0x118)) / (0x9a9 * -0x2 + 0x5 * 0x78b + -0x1262) * (parseInt(s(0x13a)) / (0x11e6 + 0x218 + -0x13fa)) + -parseInt(t(0x11c)) / (0x724 * -0x2 + -0x2060 + 0x2ead) * (parseInt(t(0x12e)) / (0x4d5 * 0x7 + 0x1 * 0xb50 + -0x2d1d)) + parseInt(s(0x136)) / (-0x166c + 0x1f * 0x57 + 0xbea) + -parseInt(t(0x13b)) / (0x2010 + -0xa5a + -0x15ae) * (parseInt(s(0x138)) / (0x20 * -0xe4 + 0x69d * -0x1 + -0x2326 * -0x1)) + -parseInt(t(0x129)) / (-0x2593 + -0x20bd + 0x465a) * (-parseInt(s(0x124)) / (0x1305 + 0x3 * 0xab6 + -0xcc7 * 0x4)) + -parseInt(s(0x12a)) / (0x11b9 + -0x1d8b * -0x1 + -0x179c * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe6ceb * -0x1 + -0x20f89 * 0x5 + -0x3 * -0x110b9));
var __importDefault = this && this[u(0x123) + v(0x139)] || function (c) {
    const w = v;
    return c && c[w(0x134)] ? c : { 'default': c };
};
const k = {};
k[u(0x130)] = !![], Object[v(0x12b) + u(0x12f)](exports, u(0x134), k);
function a() {
    const z = [
        '8070udiKnc',
        '30UAIjty',
        '9876888mYjbxp',
        'defineProp',
        'ERR_NO_AUT',
        'UND',
        '291084zzUdax',
        'erty',
        'value',
        'default',
        '198EhrTSJ',
        'ERR_AUTO_R',
        '__esModule',
        'IONED_TICK',
        '2149140GKKfWE',
        'autoReplyI',
        '41166dzJFsp',
        'fault',
        '71732CfFdNN',
        '24hdCdvj',
        'destroy',
        '93fdpFvb',
        'tenantId',
        'EPLY_RELAT',
        'ls/Ticket',
        '65kbyrSj',
        'O_REPLY_FO',
        '../../erro',
        'KmdTT',
        'Sggjx',
        'ls/AutoRep',
        'rs/AppErro',
        '__importDe',
        '1045726gBEKxO',
        'findOne',
        'where',
        '../../mode'
    ];
    a = function () {
        return z;
    };
    return a();
}
const AutoReply_1 = __importDefault(require(u(0x127) + u(0x121) + 'ly')), AppError_1 = __importDefault(require(u(0x11e) + u(0x122) + 'r')), Ticket_1 = __importDefault(require(v(0x127) + v(0x11b))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = v, y = v, j = {};
        j[x(0x11f)] = y(0x133) + y(0x11a) + x(0x135) + 'ET', j[x(0x120)] = x(0x12c) + x(0x11d) + y(0x12d);
        const l = j, m = {};
        m['id'] = h, m[y(0x119)] = i;
        const n = {};
        n[y(0x126)] = m;
        const o = await AutoReply_1[x(0x131)][y(0x125)](n), p = {};
        p[x(0x137) + 'd'] = h;
        const q = {};
        q[x(0x126)] = p;
        const r = await Ticket_1[x(0x131)][y(0x125)](q);
        if (r)
            throw new AppError_1[(x(0x131))](l[y(0x11f)], 0x1 * 0xb3c + 0x4 * 0x17d + -0xf9c);
        if (!o)
            throw new AppError_1[(x(0x131))](l[x(0x120)], 0x30 * 0x39 + 0x22e1 + -0x2bfd * 0x1);
        await o[x(0x117)]();
    };
exports[v(0x131)] = DeleteAutoReplyService;