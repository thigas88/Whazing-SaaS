'use strict';
const q = b, r = b;
function a() {
    const v = [
        './CreateLo',
        'delete',
        'ticketId',
        'rs/AppErro',
        '242YitqxD',
        'value',
        'ETahO',
        '2757700emyQuE',
        'erty',
        'tenantId',
        '__importDe',
        '2CUnfQp',
        '__esModule',
        'fault',
        '626230JcejAG',
        'KET_FOUND',
        'defineProp',
        '1083552qpmxvo',
        'userId',
        '583584yXosnB',
        './ShowTick',
        '147ZXSnAy',
        'MMZJP',
        'ERR_NO_TIC',
        '392659bHPMSF',
        '9cSaFoO',
        '136950AanHEk',
        'etService',
        '267328auucmS',
        '../../erro',
        'type',
        'gTicketSer',
        'vice',
        'default'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1a4)) / (-0xbae * -0x3 + 0xa8c + 0x2d95 * -0x1) * (parseInt(o(0x197)) / (-0x24b1 + -0x1 * 0xd3 + 0x12c3 * 0x2)) + parseInt(p(0x19f)) / (0x180b * 0x1 + 0x2 * -0x140 + 0x34 * -0x6a) + -parseInt(o(0x1a8)) / (-0x20 * -0x96 + 0x1a9e + 0x87 * -0x56) + parseInt(o(0x193)) / (0xd6d + -0x316 + -0x529 * 0x2) + -parseInt(p(0x1a6)) / (-0xa57 * -0x3 + -0xf8 * 0x7 + -0x1837) * (-parseInt(o(0x1a1)) / (0x45 * 0x8 + -0x1 * 0x2709 + -0x24e8 * -0x1)) + -parseInt(p(0x19d)) / (0x4fb + 0x1 * -0xd4f + 0x85c) * (-parseInt(p(0x1a5)) / (0x2 * 0x10b6 + -0x91c + -0x37 * 0x71)) + -parseInt(p(0x19a)) / (-0x111 * -0x1 + -0x1a18 + 0x1911) * (parseInt(o(0x190)) / (0x1c69 + -0x11 * 0x19f + 0x3 * -0x45));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x661a5 + -0x5c6da + 0x11 * 0x3de3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x536 + 0x1f3d + -0x22eb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x196) + r(0x199)] || function (c) {
    const s = q;
    return c && c[s(0x198)] ? c : { 'default': c };
};
const k = {};
k[q(0x191)] = !![], Object[q(0x19c) + q(0x194)](exports, r(0x198), k);
const AppError_1 = __importDefault(require(q(0x1a9) + q(0x18f) + 'r')), ShowTicketService_1 = __importDefault(require(q(0x1a0) + r(0x1a7))), CreateLogTicketService_1 = __importDefault(require(q(0x18c) + q(0x189) + r(0x18a))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = q, u = r, i = {};
        i[t(0x192)] = u(0x1a3) + t(0x19b), i[u(0x1a2)] = t(0x18d);
        const j = i, l = {};
        l['id'] = f, l[t(0x195)] = g;
        const m = await (0x2203 + -0x1 * 0x26bd + 0x2 * 0x25d, ShowTicketService_1[t(0x18b)])(l);
        if (!m)
            throw new AppError_1[(t(0x18b))](j[t(0x192)], 0x15 * -0x1cf + 0x4f * -0x20 + 0x5 * 0x9e3);
        const n = {};
        return n[u(0x19e)] = h, n[t(0x18e)] = m['id'], n[t(0x188)] = j[t(0x1a2)], await (0x772 + -0x194c + 0x11da, CreateLogTicketService_1[t(0x18b)])(n), m;
    };
exports[r(0x18b)] = DeleteTicketService;