'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x147)) / (-0x146 * -0x2 + -0x15a2 + 0x3 * 0x65d) * (parseInt(s(0x145)) / (-0x158b * -0x1 + -0xb0c + -0xa7d)) + -parseInt(s(0x157)) / (-0x279 + -0x9ec + -0x8 * -0x18d) * (-parseInt(s(0x150)) / (0xb8 + -0x2100 + 0x204c)) + -parseInt(s(0x13a)) / (-0x1d * 0x7d + 0x0 + 0xe2e) + parseInt(s(0x141)) / (0x3 * 0x17b + 0x10d * -0x1f + 0x1c28) + -parseInt(s(0x15b)) / (-0x1 * -0xbc7 + 0x1 * -0x1f6c + -0x2 * -0x9d6) + parseInt(t(0x13f)) / (0xb + -0xd * 0x29b + 0x21dc) + -parseInt(t(0x14f)) / (-0x191 * 0xe + -0x28d * -0xb + -0x618) * (-parseInt(s(0x14c)) / (0x29 * 0xc1 + -0xa9 * -0x35 + -0x41dc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x165d66 + 0x5152d + 0x17fad * -0x9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1fa1 + -0x72 * 0x48 + -0x2075 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0x13e) + u(0x158)] || function (c) {
    const w = u;
    return c && c[w(0x14a)] ? c : { 'default': c };
};
const k = {};
function a() {
    const z = [
        '184290yDJOxn',
        'abaGv',
        'rs/AppErro',
        '261PDBBpg',
        '129908yvwrhw',
        'erty',
        '../../erro',
        'ls/AutoRep',
        'destroy',
        'EPLY_RELAT',
        'defineProp',
        '3LgeDhd',
        'fault',
        'ERR_NO_AUT',
        'ls/Ticket',
        '6330821pNztQH',
        'O_REPLY_FO',
        '5749825LJWKse',
        'pHVIe',
        'ERR_AUTO_R',
        '../../mode',
        '__importDe',
        '8768096XFBWCZ',
        'autoReplyI',
        '9514314Zxgcfz',
        'findOne',
        'tenantId',
        'UND',
        '2zoreSn',
        'value',
        '279467sWSxAU',
        'IONED_TICK',
        'where',
        '__esModule',
        'default'
    ];
    a = function () {
        return z;
    };
    return a();
}
k[v(0x146)] = !![], Object[u(0x156) + u(0x151)](exports, v(0x14a), k);
const AutoReply_1 = __importDefault(require(u(0x13d) + u(0x153) + 'ly')), AppError_1 = __importDefault(require(u(0x152) + v(0x14e) + 'r')), Ticket_1 = __importDefault(require(u(0x13d) + v(0x15a))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x14d)] = y(0x13c) + x(0x155) + y(0x148) + 'ET', j[y(0x13b)] = y(0x159) + x(0x139) + x(0x144);
        const l = j, m = {};
        m['id'] = h, m[x(0x143)] = i;
        const n = {};
        n[x(0x149)] = m;
        const o = await AutoReply_1[x(0x14b)][y(0x142)](n), p = {};
        p[y(0x140) + 'd'] = h;
        const q = {};
        q[y(0x149)] = p;
        const r = await Ticket_1[x(0x14b)][x(0x142)](q);
        if (r)
            throw new AppError_1[(x(0x14b))](l[y(0x14d)], -0x10d0 + -0x347 * -0x5 + 0x201);
        if (!o)
            throw new AppError_1[(y(0x14b))](l[y(0x13b)], -0xdbd + -0xedb * 0x1 + 0x1e2c);
        await o[x(0x154)]();
    };
exports[u(0x14b)] = DeleteAutoReplyService;