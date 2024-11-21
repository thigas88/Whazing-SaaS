'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1f6)) / (-0xd09 * -0x1 + -0x19 * 0x92 + -0x2 * -0x9d) + parseInt(q(0x1f0)) / (0x2499 + 0x1c43 + -0x40da) * (-parseInt(q(0x203)) / (-0x1b0a + 0x2ef * -0x4 + -0x26c9 * -0x1)) + parseInt(q(0x1f7)) / (0xa * 0xa0 + -0x1bc7 * -0x1 + -0x2203) + parseInt(r(0x1ee)) / (-0x95 * -0x1d + 0x120 + 0x11fc * -0x1) * (parseInt(r(0x1eb)) / (-0x14e * 0x1c + -0x1 * 0x1a79 + 0xc9b * 0x5)) + parseInt(r(0x1ec)) / (0x31 * 0x9d + -0x475 * 0x4 + -0xc32 * 0x1) + -parseInt(q(0x200)) / (-0x6e6 + -0x23 * 0x53 + 0x1 * 0x1247) + -parseInt(q(0x1ed)) / (-0x3d * -0x7 + 0x5f1 + -0x793);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x8a897 + 0x1 * -0x12fe57 + 0x151aea));
var __importDefault = this && this[s(0x1f2) + s(0x1f9)] || function (c) {
    const u = t;
    return c && c[u(0x1fd)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfb4 + -0x17c + 0x314 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[t(0x1f1)] = !![], Object[t(0x201) + s(0x1ea)](exports, t(0x1fd), k);
const LogTicket_1 = __importDefault(require(t(0x1ef) + t(0x1fb) + 'et')), AppError_1 = __importDefault(require(s(0x202) + t(0x1e9) + 'r')), ShowTicketService_1 = __importDefault(require(s(0x1ff) + t(0x1fa))), DeleteTicketService = async ({
        id: g,
        tenantId: h,
        userId: i
    }) => {
        const v = t, w = t, j = {};
        j[v(0x204)] = v(0x1f5) + v(0x1e8);
        const l = j, m = {};
        m['id'] = g, m[w(0x1f8)] = h;
        const n = await (-0x1c3d + -0x552 + 0x218f, ShowTicketService_1[v(0x1f3)])(m);
        if (!n)
            throw new AppError_1[(v(0x1f3))](l[w(0x204)], -0x15f0 + 0x4b3 + 0x12d1);
        const o = {};
        o[v(0x1f4)] = g;
        const p = {};
        return p[v(0x1fe)] = o, await LogTicket_1[v(0x1f3)][w(0x1fc)](p), await n[w(0x1fc)](), n;
    };
exports[t(0x1f3)] = DeleteTicketService;
function a() {
    const x = [
        'ticketId',
        'ERR_NO_TIC',
        '909319IsVjRw',
        '1301868YxoiRs',
        'tenantId',
        'fault',
        'etService',
        'ls/LogTick',
        'destroy',
        '__esModule',
        'where',
        './ShowTick',
        '2839600oJWAbu',
        'defineProp',
        '../../erro',
        '3KUIOkr',
        'nlHMZ',
        'KET_FOUND',
        'rs/AppErro',
        'erty',
        '6MDJcHi',
        '8633548qHWEjT',
        '13361805bZwcog',
        '6341345lMRyXV',
        '../../mode',
        '2381980AdGNRW',
        'value',
        '__importDe',
        'default'
    ];
    a = function () {
        return x;
    };
    return a();
}