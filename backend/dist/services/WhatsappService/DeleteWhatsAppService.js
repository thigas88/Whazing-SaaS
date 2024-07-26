'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x123)) / (-0x2 * -0x12c8 + -0x1 * -0x6a + -0x25f9 * 0x1) * (parseInt(q(0x126)) / (-0x102 + -0xf10 + 0x1 * 0x1014)) + parseInt(q(0x139)) / (-0x3cd * -0x6 + -0xc47 + -0x542 * 0x2) * (parseInt(q(0x131)) / (0xb2 * -0x17 + 0x1d30 + -0xf1 * 0xe)) + parseInt(p(0x11e)) / (-0x1 * -0xbbe + 0x2 * -0x1b1 + 0x1ab * -0x5) * (parseInt(p(0x13a)) / (-0x1 * -0xccf + -0x265f + 0x1996)) + -parseInt(q(0x12f)) / (-0x2196 + -0x41e + 0x25bb) * (parseInt(q(0x12c)) / (-0x2547 + -0x1a69 + -0x3fb8 * -0x1)) + -parseInt(p(0x11a)) / (-0xe31 * 0x1 + 0xdb4 * -0x2 + 0x29a2 * 0x1) + -parseInt(p(0x138)) / (-0x1 * -0xe73 + 0xcef + -0x1b58) + parseInt(q(0x136)) / (-0x2 * 0x977 + 0xc09 + 0x6f * 0x10) * (parseInt(q(0x11b)) / (-0x256 * 0x8 + 0x19 * -0x1b + 0x155f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2f17 * -0xf + 0x21a3f * 0xb + -0x872d7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f * -0x107 + 0x85 * -0x7 + -0x1b1c);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        '4BVPcRj',
        '../../mode',
        'rs/AppErro',
        '__esModule',
        'ERR_NO_WAP',
        '606881neFUZQ',
        'where',
        '11883140LBxGbt',
        '1264866VxgylM',
        '11250sDNAXF',
        'erty',
        '780462FHQgwF',
        '468eFyxBM',
        'value',
        'tenantId',
        '2830gxlXLF',
        'fault',
        'default',
        'status',
        '../../erro',
        '1NBoqwM',
        'DISCONNECT',
        'update',
        '2832414hwLCxP',
        'defineProp',
        'isDeleted',
        'teTsv',
        '__importDe',
        'ls/Whatsap',
        '8jeGjtz',
        'findOne',
        'xiton',
        '1134791tAzIDD',
        'P_FOUND'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x12a) + s(0x11f)] || function (c) {
    const t = s;
    return c && c[t(0x134)] ? c : { 'default': c };
};
const k = {};
k[s(0x11c)] = !![], Object[r(0x127) + s(0x13b)](exports, r(0x134), k);
const Whatsapp_1 = __importDefault(require(s(0x132) + s(0x12b) + 'p')), AppError_1 = __importDefault(require(s(0x122) + s(0x133) + 'r')), DeleteWhatsApprService = async (g, h) => {
        const u = r, v = r, i = {};
        i[u(0x129)] = u(0x135) + u(0x130), i[u(0x12e)] = v(0x124) + 'ED';
        const j = i, l = {};
        l['id'] = g, l[u(0x11d)] = h;
        const m = {};
        m[v(0x137)] = l;
        const n = await Whatsapp_1[u(0x120)][u(0x12d)](m);
        if (!n)
            throw new AppError_1[(v(0x120))](j[v(0x129)], -0xc * -0x286 + -0x777 * 0x2 + -0xdc6);
        const o = {};
        o[u(0x128)] = !![], o[v(0x121)] = j[v(0x12e)], await n[v(0x125)](o);
    };
exports[r(0x120)] = DeleteWhatsApprService;